/**
 * Hamburger menu
 */

// DOM queries on elements in the HTML document:
const hamburgerButton = document.querySelector(".navbar__hamburger");
const menu = document.querySelector(".navbar__menu");
const menuItem = document.querySelectorAll(".menuItem__link");
console.log(menuItem)

// Listening for a click event on the hamburger button:
hamburgerButton.addEventListener("click",openMenu)
// Eventlistener for all navLinks:
menuItem.forEach(element => element.addEventListener("click", closeMenu));
// When the hamburger button is clicked
function openMenu(){
    menu.classList.toggle("active");
    hamburgerButton.classList.toggle("active");
}

// When a menu-item is clicked - the active classes are 
// removed from hamburger and navMenu
function closeMenu(){
    menu.classList.remove("active");
    hamburgerButton.classList.remove("active");
}


/*
 *
 * Assignment 1: DOM query, function and eventlistener:
 * 
 * Create a script which takes the word typed in the input field
 * and shows it in the console.
 * Follow the 3 steps below in the comments. 
 *
 */

// 1: Make a DOM query selecting the inputField from the HTML:

// 2: Create an eventlistener to the input field - the event type is 'change': 

// 3: Create the function which is called when the event happens.
// In the function the value from the input field is printed in the console.
// Finally the value of the input field is set to an empty string "":


    // 1: få fat i teksten fra inputfeltet
    
    // 2: skrive teksten i console
    
    // 3: fjerne teksten fra inputfeltet - dvs. sæt den lige med en tom tekststreng ''
    
const inputField = document.querySelector(".assignmentOne__inputField");
inputField.addEventListener("change", changeInput);

function changeInput() {
    // Get the text from the input field
    const inputValue = inputField.value;

    // Write the tekst in the console
    console.log(inputValue);

    // Remove the text from the input field - set it to an empty string
    inputField.value = "";
}


/*
 *
 * Assignment 2: Very similar to assignment 1, but with a twist:
 * 
 * Create another input field in the HTML-file and make a script 
 * which takes the text typed in the input field and turns the 
 * text into capital letters. Show the capital text in the console.
 * Follow the steps below:
 *
 */

// 1: Create another input field in the HTML

// 2: Make a DOM query selecting the new inputField from the HTML:

// 3: Create an eventlistener to the input field - the event type is 'change':

// 4: Create the function which is called when the event happens.
// In the function the value from the input field is changed to 
// upper case by using a method from the String object. 
// Printed the capital word in the console.
// Finally the value of the input field is set to an empty string "":




/**
 * Opgave 3: 
 * Lav en <button> i HTML og giv den en class.
 * Lav en DOM query i JS på knappen med querySelector().
 * Tilføj en eventlistener på knappen, som lytter efter 
 * et event af typen 'click' på knappen. 
 * Når der bliver klikket på knappen tilføjes en class 
 * til <body> som ændrer baggrundsfarven til en mørk farve. 
 * Denne class styler du i CSS.
 * Når der klikkes igen, så fjernes classen fra <body> og 
 * der er den defaulte hvide baggrundsfarve.
 */




/**
 * OPGAVE 4: 
 * Hvad er 'function scope'? 
 * Beskriv det med dine egne ord i en kommentar her i JS-filen.
 * Prøv at lave et eksempel, hvor 'function scope' demonstreres.
 */



/**
 * OPGAVE 5: 
 * Hvad er 'global scope'? 
 * Beskriv det med dine egne ord i en kommentar her i JS-filen.
 * Prøv at lave et eksempel, hvor 'global scope' demonstreres.
 */

