document.addEventListener('DOMContentLoaded', function () {
    const parallaxImages = document.querySelectorAll('.parallax__image');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        parallaxImages.forEach(image => {
            const modifier = image.getAttribute('data-modifier');
            const translateY = -scrollY * (modifier / 100);
            image.style.transform = `translateY(${translateY}px)`;
        });
    });
});