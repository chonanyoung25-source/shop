// Home Page
import { menuData } from '../data/menuData.js';
import { formatPrice } from '../utils/animations.js';

export function renderHomePage() {
  const bestMenus = menuData.filter(m => m.isBest).slice(0, 5);

  const div = document.createElement('div');
  div.className = 'page-home';
  div.innerHTML = `
    <!-- Hero Section -->
    <section class="hero" id="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-title-box reveal" data-delay="100" style="background:rgba(255,255,255,0.4); backdrop-filter:blur(8px); padding:var(--space-xl) var(--space-3xl); border-radius:var(--radius-md); border:1px solid rgba(255,255,255,0.5); margin-top: 4vh;">
          <h1 class="display-xl" style="margin:0;">
            <span style="display:block; font-size:0.4em; letter-spacing:0.4em; color:var(--text-secondary); margin-bottom:12px; font-weight:600; font-family:var(--font-body);">정릉우체국점</span>
            <span style="display:block; font-weight:900; letter-spacing:0.18em; color:var(--text-dark); margin-bottom:4px;">풍덕천 두꺼비집</span>
          </h1>
          <p class="hero-subtitle" style="color:var(--text-body); font-weight:500; letter-spacing:0.04em; opacity:0.9; margin: 16px 0 0 0;">
            정릉의 따뜻한 한 잔, 동네와 함께하는 뉴트로 한식술집
          </p>
        </div>
      </div>
    </section>

    <!-- Signature Menu Section -->
    <section class="section signature-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">SIGNATURE MENU</span>
          <h2 class="display-md reveal">정릉점 인기 메뉴 Best 5</h2>
          <p class="reveal" data-delay="100">우리 동네 단골들이 가장 사랑하는 메뉴를 소개합니다</p>
        </div>
        <div class="sig-grid">
          ${bestMenus.map((menu, i) => `
            <div class="sig-card reveal" data-delay="${(i + 1) * 120}">
              <div class="sig-card-img">
                ${menu.image ? `
                  <img src="${menu.image}" alt="${menu.name}" class="sig-card-full-img">
                ` : `
                  <div class="sig-card-img-placeholder">${menu.emoji}</div>
                `}
                <div class="sig-rank">${i + 1}</div>
                <span class="badge badge-best">BEST</span>
              </div>
              <div class="sig-card-body">
                <h3 class="heading-md">${menu.name}</h3>
                <p class="body-sm">${menu.description}</p>
                <span class="sig-price">${formatPrice(menu.price)}</span>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="sig-cta reveal" data-delay="600">
          <a href="#/menu" class="btn btn-primary">전체 메뉴 보기 →</a>
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

  return div;
}
