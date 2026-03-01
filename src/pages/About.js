// About Page — 정릉점 이야기
export function renderAboutPage() {
  const div = document.createElement('div');
  div.className = 'page-about';
  div.innerHTML = `
    <!-- About Title Banner -->
    <section class="about-title-banner">
      <div class="about-banner-bg"></div>
      <div class="about-banner-overlay"></div>
      <div class="container about-banner-content">
        <div class="section-header reveal">
          <h1 class="display-lg" style="color:var(--white);margin-top:var(--space-md); font-size: 3.2rem;">정릉점 이야기</h1>
          <p class="body-lg" style="color:var(--wood-100);opacity:0.9;margin-top:var(--space-md); font-size: 1.2rem;">
            동네와 이웃이 함께 숨쉬는 따뜻한 공간
          </p>
        </div>
      </div>
    </section>

    <!-- About Profile Section -->
    <section class="about-hero" style="padding-top: var(--space-4xl);">
      <div class="container">
        <div class="hero-intro-layout">
          <div class="hero-profile-side reveal">
            <div class="profile-img-wrap">
              <img src="/about_exterior.png" alt="정릉우체국점 사장님">
            </div>
          </div>
          <div class="hero-text-side">
            <div class="section-header" style="text-align:left; padding-top: 0; margin-bottom: var(--space-xl);">
              <h1 class="display-lg reveal">정릉우체국점 사장님의 한마디</h1>
            </div>
            
            <div class="owner-intro-card reveal" data-delay="200">
               <div class="owner-quote-mark">“</div>
               <blockquote class="owner-quote">
                  안녕하세요. 풍덕천두꺼비집 정릉우체국점 점주입니다.<br><br>
                  바쁘고 지친 하루를 마치고 집으로 돌아가는 길, 무거운 발걸음을 잠시 멈추고 편안하게 들를 수 있는 곳이 있었으면 했습니다. 저희 매장은 정릉동 주민 여러분에게 그런 부담 없는 아지트가 되고 싶습니다.<br><br>
                  문을 열고 들어오시는 순간 느껴지는 정겨운 뉴트로 감성, 정성껏 조리해 김이 모락모락 나는 맛있는 안주, 그리고 가슴속까지 시원해지는 술 한 잔. 이 소박하지만 확실한 행복으로 여러분의 지친 하루를 달래드리겠습니다.<br><br>
                  저희는 단순히 전국에 있는 수많은 프랜차이즈 매장 중 하나로 남고 싶지 않습니다. 동네 친구와 슬리퍼를 끌고 나와 웃고 떠들 수 있는 곳, 정릉동 주민들의 희로애락이 고스란히 녹아있는 이웃 같은 공간으로 자리 잡겠습니다.<br><br>
                  언제든 편하게 문을 두드려주세요. 늘 변함없는 맛과 친절한 미소로 여러분을 맞이하겠습니다.
               </blockquote>
               <div class="owner-name" style="text-align:right; margin-top:var(--space-2xl)">— 정릉우체국점 점주 드림</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nanum Section -->
    <section class="section about-nanum-section">
      <div class="container">
        <div class="nanum-layout">
          <div class="nanum-img-side reveal">
            <div class="nanum-img-frame">
              <img src="/about_news.jpg" alt="나눔가게 지정 현장">
            </div>
          </div>
          <div class="nanum-content-side">
            <div class="section-header" style="text-align:left; margin-bottom:var(--space-xl)">
              <h2 class="display-md reveal">정릉2동 나눔가게 3호점</h2>
            </div>
            <div class="nanum-story-card reveal" data-delay="100">
              <p class="body-lg" style="color:var(--text-primary); line-height: 1.8; margin:0;">
                풍덕천두꺼비집 정릉우체국점이 지역 주민 여러분께 넘치게 받은 사랑을 이웃과 함께 나누고자, <strong>정릉2동 '나눔가게 3호점'</strong>으로 뜻깊은 동행을 시작했습니다.<br><br>
                저희 매장은 매월 정릉동 관내의 취약계층 이웃들에게 갓 튀겨낸 바삭하고 따뜻한 치킨(매월 3마리 정기 후원)을 전달하고 있습니다.<br><br>
                크고 화려한 일은 아닐지 모릅니다. 하지만 저희가 정성껏 준비한 음식으로 누군가의 식탁이 조금 더 풍성해지고, 우리 동네가 한 뼘 더 따뜻해질 수 있다면 그것만으로도 큰 기쁨입니다.<br><br>
                고객님들이 저희 매장에서 즐겁게 부딪히는 술잔의 온기가 이웃을 향한 따뜻한 나눔으로 이어질 수 있도록, 앞으로도 지역사회와 상생하며 선한 영향력을 실천하는 풍덕천두꺼비집 정릉우체국점이 되겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Story Timeline Section -->
    <section class="section about-timeline-section">
      <div class="container">
        <div class="section-header">
           <h2 class="display-md reveal">정릉점 두꺼비 사장님만의 이력</h2>
        </div>
        
        <div class="about-timeline">
          <div class="timeline-item reveal" data-delay="0">
            <span class="timeline-date">2010년</span>
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="heading-md">타 매장 운영</h3>
              <p class="body-sm">정릉점 오픈 전, 다년간의 외식업 운영을 통해 맛과 서비스의 노하우를 쌓았습니다.</p>
            </div>
          </div>
          <div class="timeline-item reveal" data-delay="300">
            <span class="timeline-date">2020년</span>
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="heading-md">정릉동에 두꺼비집이 찾아왔습니다</h3>
              <p class="body-sm">뉴트로 감성의 따뜻한 공간으로 정릉우체국 근처에 문을 열었습니다.</p>
            </div>
          </div>
          <div class="timeline-item reveal" data-delay="600">
            <span class="timeline-date">2026년</span>
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="heading-md">정릉2동 나눔가게 3호점 지정</h3>
              <p class="body-sm">매월 후원을 통해 지역사회와 함께 성장하는 가게로 인정받았습니다.</p>
            </div>
          </div>
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

  // Counter animation on scroll
  setTimeout(() => {
    const statNumbers = div.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          animateCounterEl(entry.target, target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    statNumbers.forEach(el => observer.observe(el));
  }, 300);

  return div;
}

function animateCounterEl(element, target) {
  const duration = 2000;
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(target * eased);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
