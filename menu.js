document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuItems = document.getElementById('menu-items');

    // Toggle the mobile menu
    mobileMenu.addEventListener('click', () => {
        const expanded = mobileMenu.getAttribute('aria-expanded') === 'true' || false;

        mobileMenu.setAttribute('aria-expanded', !expanded);
        menuItems.classList.toggle('active');
        document.querySelector('.navbar').classList.toggle('active');
    });
});
