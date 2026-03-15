
const btn = document.getElementById('hamburger');
const nav = document.getElementById('mobileNav');

btn.addEventListener('click', () => {
const isOpen = btn.classList.toggle('open');
nav.classList.toggle('open', isOpen);
btn.setAttribute('aria-expanded', isOpen);
nav.setAttribute('aria-hidden', !isOpen);
});

document.addEventListener('click', e => {
if (!btn.contains(e.target) && !nav.contains(e.target)) {
    btn.classList.remove('open');
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', false);
    nav.setAttribute('aria-hidden', true);
}
});