// Array of colors
const colors = ["#c1121f", "#fdf0d5", "#003049", "#669bbc"];
// Select all elements with the class "button"
const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
// Get random index
        const randomIndex = Math.floor(Math.random() * colors.length);
// Get random color from array
        const randomColor = colors[randomIndex];
// Set background color of body
        document.body.style.backgroundColor = randomColor;
    });
});