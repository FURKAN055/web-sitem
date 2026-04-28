// Sayfa yüklendiğinde ve kaydırıldığında elementlerin belirmesini sağlar (Scroll Animation)

document.addEventListener('DOMContentLoaded', () => {
    const fadeEls = document.querySelectorAll('.fade-in-up');

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target); // Sadece bir kez tetiklensin
            }
        });
    }, {
        threshold: 0.15, // Elementin %15'i görününce tetikle
        rootMargin: "0px 0px -50px 0px" // Biraz erken başla
    });

    fadeEls.forEach(el => {
        appearOnScroll.observe(el);
    });
});
