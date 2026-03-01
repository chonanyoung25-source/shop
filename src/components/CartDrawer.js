// Cart Drawer Component
import { getCart, getCartTotal, getCartCount, updateQty, removeFromCart, clearCart, onCartChange } from '../utils/cart.js';
import { formatPrice } from '../utils/animations.js';

export function initCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  const fab = document.getElementById('cart-fab');
  const badge = document.getElementById('cart-badge');

  function renderDrawer() {
    const items = getCart();
    const total = getCartTotal();
    const count = getCartCount();

    // Update badge if exists
    if (badge) {
      badge.textContent = count;
      badge.setAttribute('data-count', count);
    }

    drawer.innerHTML = `
      <div class="drawer-header">
        <h3>🛒 장바구니</h3>
        <button class="drawer-close" id="drawer-close">✕</button>
      </div>
      <div class="drawer-body">
        ${items.length === 0 ? `
          <div class="drawer-empty">
            <div class="empty-icon">🧺</div>
            <p>장바구니가 비어있어요</p>
            <a href="#/menu" class="btn btn-secondary btn-sm" id="drawer-go-menu">메뉴 보러 가기</a>
          </div>
        ` : items.map(item => `
          <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="cart-item-controls">
              <button class="cart-qty-btn" data-action="minus" data-id="${item.id}">−</button>
              <span class="cart-qty">${item.qty}</span>
              <button class="cart-qty-btn" data-action="plus" data-id="${item.id}">+</button>
              <button class="cart-remove" data-action="remove" data-id="${item.id}">✕</button>
            </div>
          </div>
        `).join('')}
      </div>
      ${items.length > 0 ? `
        <div class="drawer-footer">
          <div class="drawer-total">
            <span class="drawer-total-label">총 예상 금액</span>
            <span class="drawer-total-price">${formatPrice(total)}</span>
          </div>
          <div class="drawer-actions">
            <a href="#/reservation" class="btn btn-gold" id="drawer-reserve">예약하면서 주문하기</a>
            <button class="btn btn-secondary btn-sm" id="drawer-clear">비우기</button>
          </div>
        </div>
      ` : ''}
    `;

    // Event listeners
    drawer.querySelector('#drawer-close')?.addEventListener('click', closeDrawer);
    drawer.querySelector('#drawer-go-menu')?.addEventListener('click', closeDrawer);
    drawer.querySelector('#drawer-reserve')?.addEventListener('click', closeDrawer);
    drawer.querySelector('#drawer-clear')?.addEventListener('click', () => {
      clearCart();
    });

    drawer.querySelectorAll('.cart-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const action = btn.dataset.action;
        updateQty(id, action === 'plus' ? 1 : -1);
      });
    });

    drawer.querySelectorAll('.cart-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        removeFromCart(id);
      });
    });
  }

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  fab?.addEventListener('click', openDrawer);
  overlay?.addEventListener('click', closeDrawer);

  // Listen to cart changes
  onCartChange(() => {
    renderDrawer();
    // Bump animation on badge if exists
    if (badge) {
      badge.classList.remove('bump');
      void badge.offsetWidth;
      badge.classList.add('bump');
    }
  });

  // Initial render
  renderDrawer();
}
