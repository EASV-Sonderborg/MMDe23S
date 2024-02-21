document.addEventListener("DOMContentLoaded", function () {
    var parallaxImages = document.querySelectorAll(".parallax__image");

    function updateParallax() {
        var scrollY = window.scrollY || window.pageYOffset;

        parallaxImages.forEach(function (image) {
            var modifier = parseFloat(image.getAttribute("data-modifier"));
            var translateY = scrollY * modifier / 100;
            image.style.transform = "translateY(" + translateY + "px)";
        });
    }

    window.addEventListener("scroll", updateParallax);
});