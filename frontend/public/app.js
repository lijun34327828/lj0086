const API_BASE = 'http://localhost:8866/api';

const state = {
  period: 'day'
};

const orderItems = [];

const btnDay = document.getElementById('btn-day');
const btnWeek = document.getElementById('btn-week');
const periodDate = document.getElementById('period-date');
const elTotalCups = document.getElementById('total-cups');
const elTotalRevenue = document.getElementById('total-revenue');
const elOrderCount = document.getElementById('order-count');
const elAvgOrder = document.getElementById('avg-order');
const elRankingList = document.getElementById('ranking-list');

const drinkSelect = document.getElementById('drink-select');
const quantityInput = document.getElementById('quantity-input');
const btnAddItem = document.getElementById('btn-add-item');
const drinkError = document.getElementById('drink-error');
const quantityError = document.getElementById('quantity-error');
const orderDetails = document.getElementById('order-details');
const detailTbody = document.getElementById('detail-tbody');
const orderTotalAmount = document.getElementById('order-total-amount');
const btnSubmitOrder = document.getElementById('btn-submit-order');
const submitError = document.getElementById('submit-error');
const orderSuccess = document.getElementById('order-success');
const successOrderId = document.getElementById('success-order-id');

btnDay.addEventListener('click', () => switchPeriod('day'));
btnWeek.addEventListener('click', () => switchPeriod('week'));
btnAddItem.addEventListener('click', handleAddItem);
btnSubmitOrder.addEventListener('click', handleSubmitOrder);

loadDrinks();

async function loadDrinks() {
  try {
    const res = await fetch(`${API_BASE}/drinks`);
    const drinks = await res.json();
    drinks.forEach(drink => {
      const option = document.createElement('option');
      option.value = drink.id;
      option.textContent = `${drink.name}（¥${drink.price}）`;
      option.dataset.name = drink.name;
      option.dataset.price = drink.price;
      drinkSelect.appendChild(option);
    });
  } catch (err) {
    console.error('加载饮品列表失败:', err);
  }
}

function handleAddItem() {
  drinkError.textContent = '';
  quantityError.textContent = '';

  const selectedOption = drinkSelect.options[drinkSelect.selectedIndex];
  const drinkId = drinkSelect.value;
  const quantityVal = quantityInput.value;

  let valid = true;

  if (!drinkId) {
    drinkError.textContent = '请选择饮品';
    valid = false;
  }

  if (!quantityVal) {
    quantityError.textContent = '请输入数量';
    valid = false;
  } else {
    const qty = Number(quantityVal);
    if (!Number.isInteger(qty) || qty < 1 || qty > 99) {
      quantityError.textContent = '数量必须为1到99的正整数';
      valid = false;
    }
  }

  if (!valid) return;

  const drinkName = selectedOption.dataset.name;
  const price = Number(selectedOption.dataset.price);
  const quantity = Number(quantityVal);

  orderItems.push({ drinkId, drinkName, price, quantity });

  renderOrderDetails();
  drinkSelect.value = '';
  quantityInput.value = '';
}

function removeOrderItem(index) {
  orderItems.splice(index, 1);
  renderOrderDetails();
}

function renderOrderDetails() {
  if (orderItems.length === 0) {
    orderDetails.style.display = 'none';
    return;
  }

  orderDetails.style.display = 'block';

  detailTbody.innerHTML = orderItems.map((item, index) => `
    <tr>
      <td>${item.drinkName}</td>
      <td>${item.price}</td>
      <td>${item.quantity}</td>
      <td>${item.price * item.quantity}</td>
      <td><button class="btn-remove" onclick="removeOrderItem(${index})">删除</button></td>
    </tr>
  `).join('');

  const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  orderTotalAmount.textContent = total;
}

async function handleSubmitOrder() {
  submitError.textContent = '';

  if (orderItems.length === 0) {
    submitError.textContent = '订单明细为空，请先添加饮品';
    return;
  }

  const items = orderItems.map(item => ({
    drinkId: item.drinkId,
    quantity: item.quantity
  }));

  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items })
    });

    const data = await res.json();

    if (!res.ok) {
      submitError.textContent = data.error || '提交失败';
      return;
    }

    successOrderId.textContent = data.orderId;
    orderSuccess.style.display = 'block';
    orderDetails.style.display = 'none';
    orderItems.length = 0;

    setTimeout(() => {
      orderSuccess.style.display = 'none';
    }, 3000);

    loadData();
  } catch (err) {
    submitError.textContent = '提交失败，请检查后端服务';
    console.error('提交订单失败:', err);
  }
}

function switchPeriod(period) {
  state.period = period;
  btnDay.classList.toggle('active', period === 'day');
  btnWeek.classList.toggle('active', period === 'week');
  loadData();
}

async function loadData() {
  try {
    const url = state.period === 'day'
      ? `${API_BASE}/stats/day`
      : `${API_BASE}/stats/week`;
    const res = await fetch(url);
    const data = await res.json();
    renderStats(data);
    renderRanking(data.topDrinks);
  } catch (err) {
    console.error('加载数据失败:', err);
    elRankingList.innerHTML = '<div class="loading">加载失败，请检查后端服务是否启动</div>';
  }
}

function renderStats(data) {
  if (data.period === 'day') {
    periodDate.textContent = data.date;
  } else {
    periodDate.textContent = `${data.startDate} 至 ${data.endDate}`;
  }

  animateNumber(elTotalCups, data.totalCups);
  animateNumber(elTotalRevenue, data.totalRevenue);
  animateNumber(elOrderCount, data.orderCount);
  animateNumber(elAvgOrder, data.avgOrderValue, 2);
}

function renderRanking(drinks) {
  if (!drinks || drinks.length === 0) {
    elRankingList.innerHTML = '<div class="loading">暂无销售数据</div>';
    return;
  }

  const maxCups = drinks[0].cups;

  elRankingList.innerHTML = drinks.map((drink, index) => {
    const progress = (drink.cups / maxCups) * 100;
    return `
      <div class="ranking-item">
        <div class="rank-badge rank-${index + 1}">${index + 1}</div>
        <div class="drink-info">
          <div class="drink-name">${drink.drinkName}</div>
          <div class="drink-stats">
            <span>🥤 ${drink.cups} 杯</span>
            <span>💰 ${drink.revenue} 元</span>
          </div>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

function animateNumber(element, target, decimals = 0) {
  const duration = 600;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = start + (target - start) * easeProgress;
    element.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current);
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

loadData();
