// Footer Component
export function renderFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>풍덕천 두꺼비집 정릉우체국점</h3>
          <p>
            자연스러운 목재와 화이트톤, 아날로그 감성과 모던함이 어우러진<br>
            정릉동의 따뜻한 뉴트로 한식술집입니다.
          </p>
        </div>
        <div class="footer-col">
          <h4>영업 안내</h4>
          <ul>
            <li><span>📍 서울특별시 성북구 정릉동 416-77</span></li>
            <li><span>🕐 매일 15:00 ~ 02:00</span></li>
            <li><span>🗓️ 매주 월요일 정기휴무</span></li>
            <li><span>📞 02-941-7192</span></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>바로가기</h4>
          <ul>
            <li><a href="#/">홈</a></li>
            <li><a href="#/about">정릉점 이야기</a></li>
            <li><a href="#/menu">메뉴판</a></li>
            <li><a href="#/reservation">예약하기</a></li>
          </ul>
        </div>
      </div>
      <hr class="footer-divider" />
      <div class="footer-bottom">
        <span class="footer-copyright">© 2026 풍덕천두꺼비집 정릉우체국점. All rights reserved.</span>
      </div>
    </div>
  `;
}
