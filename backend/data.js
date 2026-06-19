const drinks = [
  { id: 'd001', name: '珍珠奶茶', price: 12 },
  { id: 'd002', name: '冰柠檬水', price: 8 },
  { id: 'd003', name: '草莓冰沙', price: 15 },
  { id: 'd004', name: '芒果西米露', price: 16 },
  { id: 'd005', name: '抹茶拿铁', price: 14 },
  { id: 'd006', name: '原味冰淇淋', price: 6 },
  { id: 'd007', name: '西瓜汁', price: 10 },
  { id: 'd008', name: '百香果苏打', price: 13 },
  { id: 'd009', name: '红豆冰粉', price: 9 },
  { id: 'd010', name: '椰汁仙草冻', price: 11 }
];

function generateOrders() {
  const orders = [];
  const now = new Date();
  let orderId = 1;

  for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
    const date = new Date(now);
    date.setDate(date.getDate() - dayOffset);
    const dateStr = formatDate(date);
    const orderCount = 30 + Math.floor(Math.random() * 40);

    for (let i = 0; i < orderCount; i++) {
      const items = [];
      const itemCount = 1 + Math.floor(Math.random() * 3);
      let totalAmount = 0;

      for (let j = 0; j < itemCount; j++) {
        const drink = drinks[Math.floor(Math.random() * drinks.length)];
        const quantity = 1 + Math.floor(Math.random() * 2);
        items.push({
          drinkId: drink.id,
          drinkName: drink.name,
          price: drink.price,
          quantity: quantity
        });
        totalAmount += drink.price * quantity;
      }

      const hour = 9 + Math.floor(Math.random() * 12);
      const minute = Math.floor(Math.random() * 60);
      const timeStr = `${dateStr} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

      orders.push({
        id: `ORD${String(orderId).padStart(5, '0')}`,
        time: timeStr,
        items: items,
        totalAmount: totalAmount
      });
      orderId++;
    }
  }

  return orders;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const orders = generateOrders();

module.exports = { drinks, orders, formatDate };
