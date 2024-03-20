/**
 * Opgave 1: når der bliver klikket på knappen, så skifter baggrundsfarven på body. 
 * Baggrundsfarven hentes fra et array, som indeholder 4 forskellige farvekoder. 
 * Det skal være tilfældigt hvilken farve fra array'et som bliver tildelt baggrundsfarven på body. 
 */

const button = document.querySelector('.button');
const body = document.querySelector('body');
button.addEventListener('click', changeBackgroundColor);
console.log(button);

function changeBackgroundColor() {
    const backgroundColors = ['#ccd5ae', '#faedcd', '#d4a373', '#e9edc9'];
    const randomColor = Math.floor(Math.random() * backgroundColors.length);
    console.log(randomColor);
    body.style.backgroundColor = backgroundColors[randomColor];
}

/**
 * Opgave 2:
 * Dernæst skal I tage indholdet fra inputfeltet 
 * og lægge i en unordered liste i DOM'en som list items. 
 */

const inputWish = document.querySelector('.wishList__inputWish');
inputWish.addEventListener('change', addWish);

function addWish() {
    const newWish = document.createElement('li');
    newWish.classList.add('wishList__item');
    newWish.textContent = inputWish.value;

    const wishList = document.querySelector('.wishList__list')
    wishList.appendChild(newWish);

    inputWish.value = '';
}