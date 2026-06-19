const express = require('express');
const cors = require('cors');
const { orders, formatDate } = require('./data');

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

const PORT = 8866;
app.listen(PORT, () => {
  console.log(`后端服务已启动: http://localhost:${PORT}`);
});
