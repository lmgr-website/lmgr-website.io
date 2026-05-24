document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const targetId = params.get('highlight') || window.location.hash.slice(1);

    if (!targetId) {
        return;
    }

    const target = document.getElementById(targetId);

    if (!target) {
        return;
    }

    if (params.get('highlight')) {
        const headerOffset = 96;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo(0, Math.max(0, targetTop));
    }

    target.classList.add('faq-item-highlight');

    window.setTimeout(function () {
        target.classList.remove('faq-item-highlight');
    }, 1600);
});
