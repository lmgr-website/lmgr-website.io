document.addEventListener('DOMContentLoaded', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    const contactLink = document.querySelector('.navbar a[href="#footer"]');

    if (!navbarCollapse || !contactLink || typeof bootstrap === 'undefined') {
        return;
    }

    contactLink.addEventListener('click', () => {
        if (!navbarCollapse.classList.contains('show')) {
            return;
        }

        bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
    });
});
