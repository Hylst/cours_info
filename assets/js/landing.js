document.addEventListener('DOMContentLoaded', () => {

    // --- Reveal Animation on Scroll ---
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay based on index
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = 'fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));

    // --- Dual-Layer Parallax Effect ---
    cards.forEach(card => {
        if (card.classList.contains('disabled')) return;

        const icon = card.querySelector('.icon-wrapper');
        const bg = card.querySelector('.card-bg-illu');
        const overlay = card.querySelector('.data-art-overlay');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Card Tilt (Subtle)
            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            // Inner Parallax (Content moves opposite to tilt)
            const moveX = (x - centerX) / 10;
            const moveY = (y - centerY) / 10;

            if (icon) icon.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            if (bg) bg.style.transform = `translate(${moveX * -1.5}px, ${moveY * -1.5}px)`; // Bg moves more and opposite
            if (overlay) overlay.style.transform = `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            if (icon) icon.style.transform = 'translate(0, 0) scale(1)';
            if (bg) bg.style.transform = 'translate(0, 0)';
            if (overlay) overlay.style.transform = 'translate(0, 0)';
        });
    });

});
