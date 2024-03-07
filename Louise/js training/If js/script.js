/**
 * ASSIGNMENT 1: if ... else
 * 
 * Ref. if ... else: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * Ref. template literals: https://youtu.be/NgF9-pdTDGs
 * 
 * First, create a variable called amountBeer and assign a number to it.
 * 
 * Next, write an if else statement, which gives different outputs in the 
 * console depending on the number of beers in your fridge. 
 * If you have 1 or more than 1 beer, the console.log should write: 
 * “You have X beers”. 
 * (X represents the amount of beer. Use the template literal notation with backticks ` ` )
 * Otherwise (else) the console.log should write: “You don’t’ have any beers left”.
 */
let amountBeer = 10;

if (amountBeer >= 1) {
    console.log("You have good beer");
} else {
    console.log("OH GOD NO!! You don't have any beers left.");
}


/**
 * ASSIGNMENT 2: if ... else if ... else
 * 
 * First, create a variable which contains the number of eggs in your fridge.
 * 
 * Next, write an if, else if, else statement, which gives different outputs 
 * in the console depending on the number of eggs in your fridge. 
 * 
 * If you have more than 3 eggs in your fridge, the console log should write: 
 * “You have X eggs in your fridge”.
 * 
 * If you have only 1,2 or 3 eggs left, the console should write: 
 * “Go buy some more eggs - number of eggs left: X”. 
 * 
 * If the number of eggs is 0, the console.log should write: 
 * “Go buy some more eggs, you are out of eggs”.
 */

let eggs = 7;
if(eggs > 3){
    console.log(`You have ${eggs} eggs in your fridge.`);
} else if (eggs > 0){
    console.log(`Go buy some more eggs - number of eggs left: ${eggs}.`);
}
else{
    console.log("Go buy some more eggs, you are out of eggs you stupid-soon-to-be-eggless.");
}



/**
 * ASSIGNMENT 3: if ... else and arrays
 * 
 * Below is an array with a list of student names and their math scores.
 * 
 * Loop through the array of students and create a <li> for each student,
 * which contains the following:
 * 'Studentname has math score: xx which gives the grade: x' (use template literals).
 * 
 * The grade is calculated in the loop and the student names, score and grade
 * is added to the <ul class="assignmentThree__grades"> 
 * 
 * Grade calculation as follows:
 * ----------------
 *  Score  -  Grade
 * ----------------
 *  < 50   -   00
 *  < 60   -   02
 *  < 70   -   4
 *  < 80   -   7
 *  < 90   -   10
 *  < 100  -   12
 */

const students = [['Bill', 80], ['Jane', 71], ['Hans', 34], ['Joe', 55], ['Suzy', 95]];

// Loop through the array of students
for (const student of students) {
    const studentName = student[0];
    const mathScore = student[1];

    // Calculating the grades
    let grade;
    if (mathScore < 50) {
        grade = 0;
    } else if (mathScore < 60) {
        grade = 2;
    } else if (mathScore < 70) {
        grade = 4;
    } else if (mathScore < 80) {
        grade = 7;
    } else if (mathScore < 90) {
        grade = 10;
    } else {
        grade = 12;
    }

    const listItem = document.createElement('li');
    listItem.textContent = `${studentName} has math score: ${mathScore} So they have the grade: ${grade}`;
    document.body.appendChild(listItem);
}
/**
 * ASSIGNMENT 4: Ternary operator 
 * 
 * Use the conditional (ternary) operator for this assignment.
 * In the input field a user writes their current age. 
 * Next, they press the button 'Check age'. 
 * If the age is 18 or more - the web shop will show the alcohol
 * products to the user (display the image: alcohol.jpeg).
 * If the user is below 18 years old, an alert will pop up and
 * Notify the user that they need to be at least 18 years old
 * in order to see the alcohol products.
 * 
 */
document.addEventListener('click', function() {
    const submitButton = document.querySelector(".assignmentFour__button");

    submitButton.addEventListener("click", checkAge);

    function checkAge() {
        const age = document.querySelector(".assignmentFour__input").value;
        const imageElement = document.querySelector(".assignmentFour__image");

        imageElement.classList.toggle("--hidden", age < 18);

        if (age < 18) {
            alert("You need to be at least 18 years old to view alcohol products.");
        }
    }
});



/**
 * ASSIGNMENT 5: if ... else and input field value
 * 
 * Create a script where you can type 'YEAR' in the input field of assignment 5, 
 * press the button and a text is written in the browser, which says which is
 * the current year.
 * 
 * Also, the script should be able to handle when the user types in 'WEEK', it 
 * should return the current week number it is. 
 * 
 * If nothing is typed in the input field and the button is pressed, an alert box
 * pops up and reminds the user to type some text in the input field.
 * 
 * Hint: The standard built-in Date object:
 * Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * 
 */
const inputField = document.querySelector('.assignmentFive__inputField');
const outputSection = document.querySelector('.assignmentFive__output');
const checkButton = document.querySelector('.assignmentFive__button');

checkButton.addEventListener('click', checkInput);

function checkInput() {
    const inputValue = inputField.value.trim();

    if (inputValue === 'year') {
        showOutput(`The current year is: ${new Date().getFullYear()}`);
    } else if (inputValue === 'week') {
        showOutput(`The current week number is: ${getWeekNumber(new Date())}`);
    } else {
        alert('Please type either "YEAR" or "WEEK" in the input field.');
    }
}

function showOutput(message) {
    outputSection.textContent = message;
}

function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + firstDayOfYear.getDay() + 1) / 7);
    return weekNumber;
}
