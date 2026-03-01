// Reservation & Location Page
import { getCart, getCartTotal, clearCart } from '../utils/cart.js';
import { formatPrice } from '../utils/animations.js';

export function renderReservationPage() {
  const cartItems = getCart();
  const cartTotal = getCartTotal();

  // Crowd data based on hour of day (simulated)
  const hours = ['16시', '17시', '18시', '19시', '20시', '21시', '22시', '23시', '24시', '01시'];
  const crowdLevels = [12, 18, 48, 92, 98, 65, 90, 52, 28, 9]; // percentage
  const now = new Date();
  const currentHour = now.getHours();
  const currentIdx = Math.max(0, Math.min(hours.length - 1, currentHour - 16));

  const div = document.createElement('div');
  div.className = 'page-reservation';
  div.innerHTML = `
    <!-- Reservation Hero -->
    <section class="res-hero">
      <div class="res-hero-bg"></div>
      <div class="container hero-content-box">
        <div class="section-header" style="text-align:center;">
          <h1 class="display-xl reveal" style="color:var(--white); text-shadow:0 2px 10px rgba(0,0,0,0.3); font-size:3.5rem; margin-bottom:16px;">예약 및 오시는 길</h1>
          <p class="body-lg reveal" data-delay="100" style="color:var(--white); opacity:0.95; font-weight:600; text-shadow:0 1px 6px rgba(0,0,0,0.2); font-size: 1.25rem;">
            따뜻한 환대와 정성을 다하는 서비스를 약속합니다
          </p>
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <section class="section" style="background:var(--white); min-height: 100vh; display: flex; align-items: center;">
      <div class="container">
        <div class="section-header" style="margin-bottom: var(--space-2xl);">
          <h2 class="display-md reveal">찾아오는 길</h2>
          <p class="reveal" data-delay="100" style="color:var(--text-muted)">정릉우체국 인근, 따뜻한 정이 머무는 곳으로 오세요</p>
        </div>
        <div class="res-grid">
          <!-- Map -->
          <div class="res-map-wrap reveal">
            <div class="res-map">
              <div class="res-map-placeholder">
                <img src="/location_photo.png" alt="정릉우체국점 위치 안내" style="width:100%; height:100%; object-fit:cover;">
              </div>
            </div>
          </div>

          <!-- Info Cards -->
          <div class="res-info">
            <div class="res-info-card glass-card reveal" data-delay="0">
              <div>
                <h3 class="heading-md">주소</h3>
                <p class="body-sm">서울특별시 성북구 정릉동 416-77<br>(정릉우체국 인근)</p>
              </div>
            </div>
            <div class="res-info-card glass-card reveal" data-delay="100">
              <div>
                <h3 class="heading-md">대중교통</h3>
                <p class="body-sm">정릉역 도보 약 10분<br>정릉2동 주민센터 버스정류장 도보 3분</p>
              </div>
            </div>
            <div class="res-info-card glass-card reveal" data-delay="200">
              <div>
                <h3 class="heading-md">영업시간</h3>
                <p class="body-sm">매일 15:00 ~ 02:00<br>매주 월요일 정기휴무</p>
              </div>
            </div>
            <div class="res-info-card glass-card reveal" data-delay="300">
              <div>
                <h3 class="heading-md">전화</h3>
                <p class="body-sm"><a href="tel:02-941-7192" style="color:var(--wood-600);font-weight:600">02-941-7192</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="container">
      <hr class="section-divider">
    </div>

    <!-- Reservation Form -->
    <section class="section" style="min-height: 100vh; display: flex; align-items: center;">
      <div class="container">
        <div class="section-header">
          <h2 class="display-md reveal">예약하기</h2>
          <p class="reveal" data-delay="100" style="color:var(--text-muted)">간편하게 예약하고 기다림 없이 방문하세요</p>
        </div>

        <div class="res-form-wrap reveal" data-delay="200">
          ${cartItems.length > 0 ? `
            <div class="res-preorder glass-card">
              <h3 class="heading-md">🛒 장바구니에서 가져온 메뉴</h3>
              <ul class="res-preorder-list">
                ${cartItems.map(item => `
                  <li>${item.name} × ${item.qty} — ${formatPrice(item.price * item.qty)}</li>
                `).join('')}
              </ul>
              <div class="res-preorder-total">
                예상 금액: <strong>${formatPrice(cartTotal)}</strong>
              </div>
            </div>
          ` : ''}

          <form class="res-form" id="reservation-form">
            <div class="res-form-grid">
              <div class="form-group" id="fg-name">
                <label class="form-label" for="res-name">이름 *</label>
                <input class="form-input" id="res-name" type="text" placeholder="홍길동" required />
                <span class="form-error">이름을 입력해주세요</span>
              </div>
              <div class="form-group" id="fg-phone">
                <label class="form-label" for="res-phone">연락처 *</label>
                <input class="form-input" id="res-phone" type="tel" placeholder="010-0000-0000" required />
                <span class="form-error">올바른 연락처를 입력해주세요</span>
              </div>
              <div class="form-group" id="fg-date">
                <label class="form-label" for="res-date">날짜 *</label>
                <input class="form-input" id="res-date" type="date" required />
                <span class="form-error">날짜를 선택해주세요</span>
              </div>
              <div class="form-group" id="fg-time">
                <label class="form-label" for="res-time">시간 *</label>
                <select class="form-select" id="res-time" required>
                  <option value="">시간을 선택하세요</option>
                   <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                  <option value="23:00">23:00</option>
                  <option value="24:00">24:00</option>
                  <option value="01:00">01:00</option>
                </select>
                <span class="form-error">시간을 선택해주세요</span>
              </div>
              <div class="form-group" id="fg-guests">
                <label class="form-label" for="res-guests">인원 수 *</label>
                <select class="form-select" id="res-guests" required>
                  <option value="">인원을 선택하세요</option>
                  ${Array.from({ length: 20 }, (_, i) => `<option value="${i + 1}">${i + 1}명</option>`).join('')}
                </select>
                <span class="form-error">인원을 선택해주세요</span>
              </div>
            </div>
            <div class="form-group" id="fg-message">
              <label class="form-label" for="res-message">요청사항</label>
              <textarea class="form-textarea" id="res-message" placeholder="예) 창가 자리 부탁드려요, 아이 동반 등"></textarea>
            </div>
            <button type="submit" class="btn btn-gold" style="width:100%;padding:16px;font-size:1rem">
              예약 접수하기
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="container">
      <hr class="section-divider">
    </div>

    <!-- Crowd Indicator -->
    <section class="section" style="background:var(--white); min-height: 100vh; display: flex; align-items: center;">
      <div class="container">
        <div class="section-header">
          <h2 class="display-md reveal">시간대별 매장 평균 혼잡도</h2>
          <p class="reveal" data-delay="100" style="color:var(--text-muted)">방문 시 참고하실 수 있는 평일/주말 평균 혼잡도 데이터입니다</p>
        </div>

        <div class="crowd-analytics reveal" data-delay="200">
          <div class="analytics-header">
            <h3 class="analytics-title">시간대별 매장 이용 통계</h3>
            <div class="analytics-legend">
              <span class="legend-item"><span class="dot bar-dot"></span> 평균 이용객</span>
              <span class="legend-item"><span class="dot line-dot"></span> 방문 추이</span>
            </div>
          </div>

          <div class="chart-container">
            <!-- Grid Lines -->
            <div class="chart-y-axis">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>
            
            <div class="chart-main">
              <div class="chart-grid">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
              
              <div class="chart-bars">
                ${hours.map((h, i) => {
    const level = crowdLevels[i];
    const isCurrent = (currentHour >= 16 && currentHour <= 24) && i === currentIdx;
    return `
                    <div class="chart-col ${isCurrent ? 'is-now' : ''}">
                      <div class="chart-callout">
                        <span class="callout-value">${level}%</span>
                        <span class="callout-tag">${level > 85 ? '피크' : level > 60 ? '혼잡' : '여유'}</span>
                      </div>
                      <div class="chart-bar" style="height:${level}%"></div>
                      <div class="chart-label">${h}</div>
                    </div>
                  `;
  }).join('')}
              </div>

              <!-- Line Chart Overlay -->
              <svg class="chart-line-svg" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <path d="M ${hours.map((_, i) => `${(i * 100) + 50},${200 - (crowdLevels[i] * 2)}`).join(' L ')}" 
                      fill="none" stroke="var(--blue-line)" stroke-width="3" />
                ${hours.map((_, i) => `
                  <circle cx="${(i * 100) + 50}" cy="${200 - (crowdLevels[i] * 2)}" r="5" fill="white" stroke="var(--blue-line)" stroke-width="2" />
                `).join('')}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="bottom-cta" style="margin-top:0;">
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

    <!-- Success Modal -->
    <div class="modal-overlay" id="res-modal">
      <div class="modal">
        <div class="modal-icon">🎉</div>
        <h3 class="display-md">예약 접수 완료!</h3>
        <p>예약이 정상적으로 접수되었습니다.<br>확인 전화를 드릴 예정이니 잠시만 기다려주세요.</p>
        <button class="btn btn-primary" id="modal-close">확인</button>
      </div>
    </div>
  `;

  // Form validation & submit
  setTimeout(() => {
    const form = div.querySelector('#reservation-form');
    const modal = div.querySelector('#res-modal');
    const modalClose = div.querySelector('#modal-close');

    // Set min date to today
    const dateInput = div.querySelector('#res-date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      // Validate name
      const name = div.querySelector('#res-name');
      if (!name.value.trim()) {
        div.querySelector('#fg-name').classList.add('error');
        valid = false;
      } else {
        div.querySelector('#fg-name').classList.remove('error');
      }

      // Validate phone
      const phone = div.querySelector('#res-phone');
      const phoneRegex = /^01[0-9]-?\d{3,4}-?\d{4}$/;
      if (!phoneRegex.test(phone.value.replace(/\s/g, ''))) {
        div.querySelector('#fg-phone').classList.add('error');
        valid = false;
      } else {
        div.querySelector('#fg-phone').classList.remove('error');
      }

      // Validate date
      const date = div.querySelector('#res-date');
      if (!date.value) {
        div.querySelector('#fg-date').classList.add('error');
        valid = false;
      } else {
        div.querySelector('#fg-date').classList.remove('error');
      }

      // Validate time
      const time = div.querySelector('#res-time');
      if (!time.value) {
        div.querySelector('#fg-time').classList.add('error');
        valid = false;
      } else {
        div.querySelector('#fg-time').classList.remove('error');
      }

      // Validate guests
      const guests = div.querySelector('#res-guests');
      if (!guests.value) {
        div.querySelector('#fg-guests').classList.add('error');
        valid = false;
      } else {
        div.querySelector('#fg-guests').classList.remove('error');
      }

      if (valid) {
        modal.classList.add('open');
        form.reset();
      }
    });

    // Remove error on input
    form.querySelectorAll('input, select, textarea').forEach(el => {
      el.addEventListener('input', () => {
        el.closest('.form-group')?.classList.remove('error');
      });
    });

    modalClose.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  }, 100);

  return div;
}
