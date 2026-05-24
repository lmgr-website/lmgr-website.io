document.addEventListener('DOMContentLoaded', () => {
    const navbarOptions = Array.from(document.querySelectorAll('.btn-nav'));
    const navbarCollapse = document.getElementById('navbarNav');
    const contactLink = document.querySelector('.navbar a[href="#footer"]');
    const eventsDropdown = document.getElementById('eventsDropdown');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const pageToNavSelector = {
        'index.html': '.btn-nav[href="index.html"]',
        'faq.html': '.btn-nav[href="faq.html"]',
        'about.html': '.btn-nav[href="about.html"]',
        'supportGroups.html': '#eventsDropdown',
        'education.html': '#eventsDropdown',
        'resources.html': '#eventsDropdown'
    };

    const clearSelected = () => {
        navbarOptions.forEach((option) => {
            option.classList.remove('selected');
            option.removeAttribute('aria-current');
        });
    };

    const setSelected = (option) => {
        if (!option) {
            return;
        }

        option.classList.add('selected');
        option.setAttribute('aria-current', 'page');
    };

    clearSelected();

    if (pageToNavSelector[currentPage]) {
        setSelected(document.querySelector(pageToNavSelector[currentPage]));
    }

    navbarOptions.forEach((option) => {
        option.addEventListener('click', () => {
            clearSelected();
            setSelected(option);
        });
    });

    document.querySelectorAll('.dropdown-item').forEach((option) => {
        option.addEventListener('click', () => {
            clearSelected();
            setSelected(eventsDropdown);
        });
    });

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
