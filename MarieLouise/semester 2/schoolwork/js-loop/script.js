/**
 * 1 : Getting startet with loops:
 * Complete the exercises below in the links:
 * 
 * For loops - 2 exercises:
 * https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_loops1 
 *
 * While loops - 2 exercises:
 * https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_loop_while1 
 *done
 */

/**
 * 2 : Array and an 'old' for loop
 * 
 * First, create an array with all students' names in the class.
 *
 * Next, create an 'old / standard' for loop for looping through the array.
 * The number of iterations in the for loop is defined by the 'arrayName.length' property.
 * Make a console.log of all the students' names in the loop.
 */

const students=['MarieLouise', 'Kristian', 'Camilla', 'Louise', 'Michaela', 'Emma', 'Anders', 'Samantha', 'Nele', 'Ghada', 'Maria']; 

//*for(let i = 0; i< students.length; i++){
//   console.log(students[i]);
//}

/**
 * 3 : Array, loop and DOM manipulation:
 * 
 * Use the array from the assignment 2.
 * Loop through the array with the new for...of loop. 
 * Create list items for each student name and insert into the DOM in the <ul class="students">.
 */

for(student of students){
    console.log(student);

const studentlist = document.querySelector('.students');
console.log(studentlist);

const listItem = document.createElement('li');
listItem.textContent = student;
studentlist.appendChild(listItem);


}
/**
 * 4 : Array and for loop:
 * 
 * The following students are listed with the score they gained in a math test. 
 * Your script should calculate the average score of the students.
 * 
 * Student - Math score
 *  Bill        73
 *  Andy	    80
 *  Kate	    75
 *  Ruth	    89
 *  Joe	        88
 * 
 */

// First, create an array with the students and their score with this notation:
// const arrrayName = [['studentname', score], ['studentname', score]...]

const studentscores= [['Bill' ,73],['Andy', 80],['Kate', 75],['Ruth',89],['Joe',88]];
//console.log(studentscores);

// Next, write a for loop that loops through the array of students. The code to 
// execute during the loop (between the { } ) should add the scores together 
let sum=0;
for(studentscore of studentscores){
sum += studentscore[1]; }
console.log(sum);
// Finally, after the for loop, you divide the total score with the number of students,
// and do a console.log of the average score. 
sum /= studentscores.length;
console.log(sum);

/**
 * 5: For loop - multiplication:
 * 
 * Write a script with the use of a for loop that outputs the multiplication 
 * table for the multiplier: 8. The output in the console should look like the
 * image: '8-tabel.png' here in the folder:
 */
const number = parseInt(8);
    for (let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${number}*${i}=${result}`);
}


/**
 * 6 : Object and for loop
 * 
 * Create an object with properties. 
 * 
 * Loop through the object and console.log the propeties' names and values of the object.
 */

const person = {firstName: 'John', age:'38', lastName: 'Johnson'};
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

/**
 * 7 : Object, for loop and DOM manipulation
 * 
 * Create a new object which represents the data of a car. Make sure to use the 
 * datatypes: Number, String and boolean. 
 * 
 * Loop through the object and create elements with the content from the obejct.
 * Finally append the elements to the DOM. 
 */

const car = {Brand: 'volvo', year: 2005, hasAutomaticTransmission: false };
const carSection = document.querySelector(".car");

for (const data in car) {
    const carInfo = document.createElement('p');
    carInfo.textContent = `${data}: ${car[data]}`;
    carSection.appendChild(carInfo);
}


/**
 * 8 : Objects in an array 
 * 
 * Create an array with 4 objects. Each object represents data for a product.
 * The properties of the product could be like the ones below:
 * 
 *  - name (string)
 *  - price (number)
 *  - available (boolean)
 * 
 * Loop throught the products and create DOM elements and append them to the 
 * <section class="products">
 * If a product is availabel (true), it should say: 'På lager'
 * If a product is not available (false), it should say: 'Ikke på lager'
 */

const products = [
    ["Cykel", 3500 + "kr", true],
    ["Elcykel", 1000 + "kr", false],
    ["Trehjulet-cykel", 2000 + "kr", true],
    ["Mountainbike", 4500 + "kr", false], 
];

const productSection = document.querySelector('.products');
    console.log(productSection);

for (product of products){
    const productPrice = product[1];
    const productName = product[0];
    const productNameElement = document.createElement('h3');
    productNameElement.textContent = productName;
    productSection.appendChild(productNameElement);
    const productItem = document.createElement('p');
    const availability = product[2]?'På lager':'Ikke på lager';
    productItem.textContent = ` ${productPrice} - ${availability}`;
    productSection.appendChild(productItem); 
}

