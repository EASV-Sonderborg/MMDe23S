//1.a: name
let firstName = "Marie Louise ";
let lastName = "Simonsen";
console.log(firstName + lastName)


//2.a: Make a variable called “age” that calculates your age by using the “year_of_birth” and “current_year” variables.
let birthYear = 2002;
let currentYear = 2024;
let age = currentYear - birthYear;
//2.b: Write out this variable to the console using the console.log() function.
console.log(age);


//3.a: Whats the result?
const x = 3;
const y = '5';
let z = x + y; 
console.log(z);

//3.b: Whats the result?
let myName = "Marie Louise";
console.log(myName)


//3.c: Whats the result?
let v = 5 + 2 + "3";
console.log(v);

//3.d: Whats the result?
let w = "5" + 2 + 3;
console.log(w);

//4.a: 
const bread = 15.95;
const milk = 9.95;
const tomato = 14.95;
const salat = 7.95;

//4.a: result  
let total = bread + milk + tomato + salat;
console.log(total);

//5.a: First, create an array and assign some values to it. For instance, it can be a list of things in your bag.

const colors = ["red", "blue", "green", "yellow"]
colors[2] = "purple";
//5.b:
console.log(colors);



//6: example with button - when we click it, the backgroundcolor will chance color on body.

//1. lytte efter hvornår knappen bliver trykket på

//2. eventliste med function som ændrer baggrundsfarven

//DOM query - få fat i knappen i HTML:
const button = document.querySelector(".eventlisteners__button--color");
console.log(button);
const body = document.querySelector("body");

//tilføje en eventlistener til knappen:
button.addEventListener("click", backgroundColorGreen);

// Skriver funktionen som ændre baggrundsfarven (tilføjet class = color til body)
function backgroundColorGreen(){
    body.classList.toggle("color__green");
}

//all buttons
const buttonFont = document.querySelector(".eventlisteners__button--font");
buttonFont.addEventListener("click", backgroundColor);

function backgroundColor() {
    body.classList.toggle("color__blue");
}


