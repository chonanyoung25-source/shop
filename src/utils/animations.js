// Animation Utilities

// Parallax scroll effect
export function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');

    if (!parallaxElements.length) return;

    function onScroll() {
        const scrollY = window.scrollY;
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.speed) || 0.3;
            const rect = el.parentElement.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const offset = (center - window.innerHeight / 2) * speed;
            el.style.transform = `translate3d(0, ${offset}px, 0)`;
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// Counter animation
export function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * eased);
        element.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Format price
export function formatPrice(num) {
    return num.toLocaleString('ko-KR') + '원';
}

// Stagger delay for children
export function staggerDelay(parentSelector, childSelector, baseDelay = 80) {
    const parent = document.querySelector(parentSelector);
    if (!parent) return;
    const children = parent.querySelectorAll(childSelector);
    children.forEach((child, i) => {
        child.style.transitionDelay = `${i * baseDelay}ms`;
        child.dataset.delay = i * baseDelay;
    });
}
