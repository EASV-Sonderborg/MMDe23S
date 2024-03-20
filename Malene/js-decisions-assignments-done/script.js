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

const amountBeer = 23;

if (amountBeer >= 1 ){
    console.log(`You have ${amountBeer} beers`);
} else {
    console.log(`You don't have any beer left`);
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
const eggs = 2;

if (eggs > 3) {
    console.log(`You have ${eggs} eggs in your fridge`);
} else if(eggs <= 3) {
    console.log(`Go buy some more eggs - number of eggs left: ${eggs}`);
} else {
    console.log(`Go buy some more eggs, you are out of eggs`);
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

const students = [['Bill', 80], ['Jane', 71], ['Hans', 34], ['Joe', 55]];
const ul = document.querySelector('.assignmentThree__grades');

for (const student of students) {
    const newItem = document.createElement('li');
    console.log(student[1]);
    let grade;
    if (student[1] < 50){
        grade = '00';
    } else if (student[1] < 60) {
        grade = '02';
    }else if (student[1] < 70) {
        grade = '4';
    } else if (student[1] < 80) {
        grade = '7';
    } else if (student[1] < 90) {
        grade = '10';
    } else if (student[1] < 100) {
        grade = '12';
    }
    newItem.textContent = `${student[0]} has score: ${student[1]} which gives gives grade: ${grade}`;
    ul.appendChild(newItem);
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

const assignmentFourButton = document.querySelector('.assignmentFour__button');
assignmentFourButton.addEventListener('click', ageCheck);

function ageCheck(){
    const assignmentFourInput = document.querySelector('.assignmentFour__input');
    const age = assignmentFourInput.value;
    console.log(typeof age, age);
    const ageNumber = Number(age);
    console.log(typeof ageNumber, ageNumber);
    const image = document.querySelector('.assignmentFour__image');

    const alcohol = age >= 18 ? image.classList.remove('--hidden') : alert('You are not old enough');
    
}


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
 * The steps:
 * // Create an eventlistener on the button
 * // Write the function which happens, when the button is clicked
 * // In the function, first check if there is something written in the input field
 * // If there is something written in the input field:
 *      - If the value of the input field is 'YEAR':
 *          - Get the current date and next the year and display it
 *      - If the value of the input field is 'WEEK':
 *          - calculate the week number and display it
 * // Else, if there isn't anything written in the input field, an alert box
 *    should be created an remind the user to type some text.
 * 
 */

const assignmentFiveButton = document.querySelector('.assignmentFive__button');
const assignmentFiveInput = document.querySelector('.assignmentFive__inputField');

assignmentFiveButton.addEventListener('click', checkValue);

function checkValue() {
    if(assignmentFiveInput.value !== '') {
        const outputSection = document.querySelector('.assignmentFive__output');
        console.log('there is some input', assignmentFiveInput.value);
        if(assignmentFiveInput.value === 'YEAR'){
            //*console.log('Det er år 2024');
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear(); 
            const newEl = document.createElement('p');
            newEl.textContent = `The current year is: ${currentYear}`;
            outputSection.appendChild(newEl);

        } else if(assignmentFiveInput.value === 'WEEK'){
            console.log("It's week number 10 now");
            // kode lånt herfra: https://github.com/emrekrt1655/Current-Time-Website/blob/master/current_week.js
            const d = new Date();
            let yearStart = +new Date(d.getFullYear(), 0, 1);
            let today = +new Date(d.getFullYear(),d.getMonth(),d.getDate());
            let dayOfYear = ((today - yearStart + 1) / 86400000);
            let week = Math.ceil(dayOfYear / 7).toString();
            const resWeek = week;
            let myWeek = document.createElement('p');
            myWeek.textContent = `It's week number ${resWeek}`;
            outputSection.appendChild(myWeek);

        }
    } else {
        alert('I order to check the input, you need to write some text in the field');
    }
}