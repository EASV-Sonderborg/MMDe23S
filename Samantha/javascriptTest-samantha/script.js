const changeColorButton =document.querySelector('.changeColor_button')
changeColorButton.addEventListener('click', changeColor)

function changeColor() {
    let colors = ['#055757', '#be2f6f', '#66b860', '#be852f'];
    let color = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = color;
}