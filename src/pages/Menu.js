// Menu Page — 메뉴판
import { menuData, categories, getMenuByCategory } from '../data/menuData.js';
import { formatPrice } from '../utils/animations.js';

let currentCategory = 'best';

export function renderMenuPage() {
  const div = document.createElement('div');
  div.className = 'page-menu';
  div.innerHTML = `
    <!-- Menu Hero -->
    <section class="menu-hero">
      <div class="menu-hero-bg"></div>
      <div class="container hero-content-box">
        <div class="section-header" style="text-align:center;">
          <h1 class="display-lg reveal" style="color:var(--white); text-shadow:0 2px 10px rgba(0,0,0,0.3); font-size:3.5rem; margin-bottom:16px;">메뉴판</h1>
          <p class="body-lg reveal" data-delay="100" style="color:var(--white); opacity:0.95; font-weight:600; text-shadow:0 1px 6px rgba(0,0,0,0.2); font-size: 1.25rem;">
            어떤 안주를 고르셔도 후회 없는 선택.<br>오늘 하루도 수고한 당신을 위해 정성껏 준비했습니다.
          </p>
        </div>
      </div>
    </section>

    <!-- Category Tabs -->
    <section class="menu-tabs-wrap">
      <div class="container">
        <div class="menu-tabs reveal" data-delay="200" id="menu-tabs">
          ${categories.map(cat => `
            <button class="menu-tab ${cat.id === currentCategory ? 'active' : ''}" data-cat="${cat.id}">
              ${cat.label}
            </button>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Menu Grid -->
    <section class="section" style="padding-top: var(--space-xl);">
      <div class="container">
        <div class="menu-grid" id="menu-grid">
          <!-- dynamically rendered -->
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="bottom-cta">
      <div class="container">
        <div class="bottom-cta-inner reveal">
          <h2 class="display-md">오늘 저녁, 풍덕천 두꺼비집 어때요?</h2>
          <p class="body-lg" style="color:var(--wood-300);margin:var(--space-md) 0 var(--space-xl)">
            따뜻한 안주와 시원한 한 잔이 기다리고 있어요
          </p>
          <div class="bottom-cta-btns">
            <a href="#/reservation" class="btn btn-secondary">예약하기</a>
            <a href="#/menu" class="btn btn-secondary">메뉴 보기</a>
          </div>
        </div>
      </div>
    </section>
  `;

  // Render menu items
  function renderGrid() {
    const grid = div.querySelector('#menu-grid');
    const items = getMenuByCategory(currentCategory);
    grid.innerHTML = items.map((item, i) => `
      <div class="menu-card card reveal" data-delay="${i * 60}" data-id="${item.id}">
        <div class="menu-card-img">
          ${item.image ? `
            <img src="${item.image}" alt="${item.name}" class="menu-card-full-img">
          ` : `
            <div class="menu-card-placeholder">${item.emoji}</div>
          `}
          ${item.isBest ? '<span class="badge badge-best menu-badge">BEST</span>' : ''}
        </div>
        <div class="menu-card-body">
          <h3 class="heading-md menu-card-name">${item.name}</h3>
          <p class="body-sm menu-card-desc">${item.description}</p>
          <div class="menu-card-footer">
            <span class="menu-card-price">${formatPrice(item.price)}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Re-init scroll reveals

    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => entry.target.classList.add('visible'), delay);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 50);
  }

  // Tab click handlers
  setTimeout(() => {
    const tabs = div.querySelector('#menu-tabs');
    tabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.menu-tab');
      if (!tab) return;
      currentCategory = tab.dataset.cat;
      tabs.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderGrid();
    });
    renderGrid();
  }, 100);

  return div;
}
