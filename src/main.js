// Main entry point
import './style.css';
import './pages.css';
import { Router, initScrollReveal } from './utils/router.js';
import { renderNavbar } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';
import { initCartDrawer } from './components/CartDrawer.js';
import { loadCart } from './utils/cart.js';
import { renderHomePage } from './pages/Home.js';
import { renderAboutPage } from './pages/About.js';
import { renderMenuPage } from './pages/Menu.js';
import { renderReservationPage } from './pages/Reservation.js';

// Init navbar & footer
renderNavbar();
renderFooter();

// Init cart
loadCart();
initCartDrawer();

// Routes
const router = new Router({
  '/': () => renderHomePage(),
  '/about': () => renderAboutPage(),
  '/menu': () => renderMenuPage(),
  '/reservation': () => renderReservationPage()
});

// Global scroll reveal init
window.addEventListener('load', () => {
  setTimeout(initScrollReveal, 200);
});
