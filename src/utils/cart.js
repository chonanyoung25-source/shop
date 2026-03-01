// Cart State Manager (localStorage backed)
const CART_KEY = 'toadjeep_cart';

let cartItems = [];
let listeners = [];

export function loadCart() {
    try {
        const data = localStorage.getItem(CART_KEY);
        cartItems = data ? JSON.parse(data) : [];
    } catch {
        cartItems = [];
    }
    notifyListeners();
}

function save() {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    notifyListeners();
}

export function getCart() {
    return [...cartItems];
}

export function addToCart(item) {
    const existing = cartItems.find(c => c.id === item.id);
    if (existing) {
        existing.qty += 1;
    } else {
        cartItems.push({ id: item.id, name: item.name, price: item.price, qty: 1 });
    }
    save();
}

export function removeFromCart(id) {
    cartItems = cartItems.filter(c => c.id !== id);
    save();
}

export function updateQty(id, delta) {
    const item = cartItems.find(c => c.id === id);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    save();
}

export function clearCart() {
    cartItems = [];
    save();
}

export function getCartTotal() {
    return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
}

export function getCartCount() {
    return cartItems.reduce((sum, item) => sum + item.qty, 0);
}

export function onCartChange(fn) {
    listeners.push(fn);
    return () => { listeners = listeners.filter(l => l !== fn); };
}

function notifyListeners() {
    listeners.forEach(fn => fn(getCart(), getCartTotal(), getCartCount()));
}
