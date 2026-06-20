const express = require('express');
const cors = require('cors');
const { drinks, orders, formatDate } = require('./data');

const app = express();
app.use(cors());
app.use(express.json());

function getOrdersByDateRange(startDate, endDate) {
  return orders.filter(order => {
    const orderDate = order.time.split(' ')[0];
    return orderDate >= startDate && orderDate <= endDate;
  });
}

function calculateStats(filteredOrders) {
  let totalCups = 0;
  let totalRevenue = 0;
  const drinkSales = {};

  filteredOrders.forEach(order => {
    totalRevenue += order.totalAmount;
    order.items.forEach(item => {
      totalCups += item.quantity;
      if (!drinkSales[item.drinkId]) {
        drinkSales[item.drinkId] = {
          drinkId: item.drinkId,
          drinkName: item.drinkName,
          cups: 0,
          revenue: 0
        };
      }
      drinkSales[item.drinkId].cups += item.quantity;
      drinkSales[item.drinkId].revenue += item.price * item.quantity;
    });
  });

  const topDrinks = Object.values(drinkSales)
    .sort((a, b) => b.cups - a.cups)
    .slice(0, 5);

  const orderCount = filteredOrders.length;
  const avgOrderValue = orderCount > 0 ? (totalRevenue / orderCount) : 0;

  return {
    totalCups,
    totalRevenue,
    orderCount,
    avgOrderValue: Math.round(avgOrderValue * 100) / 100,
    topDrinks
  };
}

app.get('/api/stats/day', (req, res) => {
  const date = req.query.date || formatDate(new Date());
  const filteredOrders = getOrdersByDateRange(date, date);
  const stats = calculateStats(filteredOrders);
  res.json({
    period: 'day',
    date: date,
    ...stats
  });
});

app.get('/api/stats/week', (req, res) => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 6);
  const startStr = formatDate(startDate);
  const endStr = formatDate(endDate);
  const filteredOrders = getOrdersByDateRange(startStr, endStr);
  const stats = calculateStats(filteredOrders);
  res.json({
    period: 'week',
    startDate: startStr,
    endDate: endStr,
    ...stats
  });
});

app.get('/api/orders', (req, res) => {
  const date = req.query.date;
  let result = orders;
  if (date) {
    result = getOrdersByDateRange(date, date);
  }
  res.json(result);
});

app.get('/api/drinks', (req, res) => {
  res.json(drinks);
});

app.post('/api/orders', (req, res) => {
  const { items } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: '订单明细不能为空' });
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (!item.drinkId) {
      return res.status(400).json({ error: `第${i + 1}项饮品编号不能为空` });
    }
    const drink = drinks.find(d => d.id === item.drinkId);
    if (!drink) {
      return res.status(400).json({ error: `饮品编号 ${item.drinkId} 不存在` });
    }
    if (!Number.isInteger(item.quantity) || item.quantity < 1) {
      return res.status(400).json({ error: `第${i + 1}项数量必须为正整数` });
    }
  }

  const orderItems = items.map(item => {
    const drink = drinks.find(d => d.id === item.drinkId);
    return {
      drinkId: drink.id,
      drinkName: drink.name,
      price: drink.price,
      quantity: item.quantity
    };
  });

  const totalAmount = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeStr = `${year}-${month}-${day} ${hours}:${minutes}`;

  const orderId = 'ORD' + String(orders.length + 1).padStart(5, '0');

  const newOrder = {
    id: orderId,
    time: timeStr,
    items: orderItems,
    totalAmount: totalAmount
  };

  orders.push(newOrder);

  res.status(201).json({ orderId: orderId, order: newOrder });
});

const PORT = 8866;
app.listen(PORT, () => {
  console.log(`后端服务已启动: http://localhost:${PORT}`);
});
