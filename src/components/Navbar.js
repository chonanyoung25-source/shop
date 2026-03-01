// Navbar Component
export function renderNavbar() {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = `
    <div class="nav-inner">
      <a class="nav-logo" href="#/">
        <!-- 로고 텍스트/이모지 삭제됨 -->
      </a>
      <div class="nav-links">
        <a class="nav-link" href="#/">홈</a>
        <a class="nav-link" href="#/about">정릉점 이야기</a>
        <a class="nav-link" href="#/menu">메뉴판</a>
        <a class="nav-link" href="#/reservation">예약하기</a>
      </div>
      <div class="nav-hamburger" id="nav-hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="nav-mobile-overlay" id="nav-mobile-overlay">
      <a class="nav-link" href="#/">홈</a>
      <a class="nav-link" href="#/about">정릉점 이야기</a>
      <a class="nav-link" href="#/menu">메뉴판</a>
      <a class="nav-link" href="#/reservation">예약하기</a>
    </div>
  `;

  // Hamburger toggle
  const hamburger = document.getElementById('nav-hamburger');
  const overlay = document.getElementById('nav-mobile-overlay');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  // Close mobile on link click
  overlay.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      overlay.classList.remove('open');
    });
  });

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}
