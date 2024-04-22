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
let amountBeer = 8;
if(amountBeer < 10){
    console.log('har du ik nok?');
}
else if (amountBeer => 10){
    console.log(`du har ${amountBeer} øl tilbage`);
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

let amountEggs = 5; 
if(amountEggs > 3){
    console.log(`Du har ${amountEggs} æg i dit køleskab`);
}
else if (amountEggs > 0){
    console.log(`Køb flere Æg! du har kun ${amountEggs} æg tilbage`);
}

else{
console.log(`Du har ingen æg!! køb nogle flere!!`);
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
for (student of students){
    const studentScore = student[1];
    console.log(studentScore);

    const studentName = student[0];
    console.log(studentName);

    let grade ;
    if (studentScore < 50){
        grade = '00';
    }
    else if (studentScore < 60){
        grade = '02';
    }
    else if (studentScore < 70){
        grade = '4';
    }
    else if (studentScore < 80){
        grade = '7';
        }
    else if (studentScore < 90){
        grade = '10';
        }
    else if (studentScore < 100){
        grade = '12';
        }
    console.log(grade);
    const ulList = document.querySelector('.assignmentThree__grades');
    const newLi = document.createElement('li');
    newLi.textContent = `${studentName} has math score: ${studentScore} which gives grade ${grade}`;
    ulList.appendChild(newLi);
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
assignmentFourButton.addEventListener('click',checkAge);
function checkAge(){
   const age = document.querySelector('.assignmentFour__input').value;
   const assignmentFourImage = document.querySelector('.assignmentFour__image')
   console.log(age);
   const beverage = age >= 18 ? assignmentFourImage.classList.remove('--hidden') : alert('Du ik gammel nok!');
    console.log(beverage);
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
 */

const assignmentFiveButton = document.querySelector('.assignmentFive__button');
assignmentFiveButton.addEventListener('click',checkWord);

function checkWord(){
    const word = document.querySelector('.assignmentFive__inputField').value;
    console.log(word);
    if(word === 'year'){
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        //console.log(currentYear);
        }

        const whichYear = document.querySelector('.assignmentFive__output');
        const year = document.createElement('p');
        year.textContent = `Året er ${currentYear}`;
        whichYear.appendChild(year);   
    else if(word === 'date'){

    }
    
}
