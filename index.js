const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    const isActive = hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    hamMenu.setAttribute('aria-expanded', String(isActive));
    hamMenu.setAttribute('aria-label', isActive ? 'Close navigation menu' : 'Open navigation menu');
});