document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        mainMenu.classList.toggle('active');
    });

    // Language Toggle
    const langToggle = document.getElementById('langToggle');
    let language = 'en';

    langToggle.addEventListener('click', function () {
        if (language === 'en') {
            language = 'fr';
            langToggle.textContent = 'English';
            // In a real implementation, this would call a function to change the language
            alert('This would switch the site to French in a full implementation');
        } else {
            language = 'en';
            langToggle.textContent = 'Français';
            // In a real implementation, this would call a function to change the language
            alert('This would switch the site to English in a full implementation');
        }
    });


    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                menuToggle.classList.remove('active');
                mainMenu.classList.remove('active');
            }
        });
    });

    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('appear');
            }
        });
    }

    // Initial check
    checkFade();

    // Check on scroll
    window.addEventListener('scroll', checkFade);

    const colorPicker = document.getElementById('colorPickerPrimary');

    colorPicker.addEventListener('input', function() {
        document.documentElement.style.setProperty('--primary-color',this.value)
    })
});