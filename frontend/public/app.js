const API_BASE = 'http://localhost:8866/api';

const state = {
  period: 'day'
};

const btnDay = document.getElementById('btn-day');
const btnWeek = document.getElementById('btn-week');
const periodDate = document.getElementById('period-date');
const elTotalCups = document.getElementById('total-cups');
const elTotalRevenue = document.getElementById('total-revenue');
const elOrderCount = document.getElementById('order-count');
const elAvgOrder = document.getElementById('avg-order');
const elRankingList = document.getElementById('ranking-list');

btnDay.addEventListener('click', () => switchPeriod('day'));
btnWeek.addEventListener('click', () => switchPeriod('week'));

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
