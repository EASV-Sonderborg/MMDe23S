let a = 12;
let b = 3;
let sum = a + b;
console.log(sum);

let firstname, middlename, lastname;
firstname = ' Louise';
middlename = 'Wind';
lastname = 'Thomsen';
console.log('My name is' + firstname, middlename, lastname);
console.log(`My name is:${firstname} ${middlename} ${lastname}`);

let isOpen = true;
isOpen = false;
console.log(typeof isOpen);

let birthyear = 2002;
birthyear = birthyear + 10;
console.log(birthyear)



let fullname;
fullname = "Louise Wind Thomsen";
console.log(fullname)

let YearOfBirth;
YearOfBirth = "2002"
console.log(YearOfBirth)

let CurrentYear;
CurrentYear = "2024";
console.log(CurrentYear)

let age = CurrentYear - YearOfBirth;
console.log(age)

const x = 3;

//example with button when we click it, the background will change of body:

//1: lytte efter hvornår knappen bliver trykket

//2: evenlistener med function som ændre backgroundsfarven

// DOM query - get the button in HTML
const button = document.querySelector(".eventlisteners__button--color");
console.log(button);
const body = document.querySelector("body");

// add event listener to the button
button.addEventListener("click", backgroundColor);

// function to change the background color (adds the "color" class to body)
function backgroundColor() {
  // Generate a random color index within the range of the colors array
  const colorIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[colorIndex];

  // Set the background color to the randomly chosen color
  body.style.backgroundColor = randomColor;
}

// array of colors
const colors = ["red", "blue", "purple"];
colors[1] = "lightblue";
console.log(colors);

// all buttons
const buttonFonts = document.querySelectorAll("button");

// Loop through each button and add an event listener
buttonFonts.forEach((button) => {
  button.addEventListener("click", changeFont);
});

function changeFont() {
  body.classList.toggle("font");
}