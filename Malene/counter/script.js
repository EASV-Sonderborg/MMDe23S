// DOM query on the buttons
const buttons = document.querySelectorAll('.counter__button');

// variable for the counter value:
let counter = 0;

// eventlistener for the buttons:
buttons.forEach(function(button){
    button.addEventListener('click', counterFunction)

    function counterFunction(){

        if(button.textContent === 'minus') {
            counter--;    // hvis der er klikket på minus: 'counter--'  det samme som counter = counter - 1
        } else if(button.textContent === 'plus') {
            counter++;   // same as: counter = counter + 1
        }

        // DOM query for the h2:
        const value = document.querySelector('.counter__value');
        // update the textContent of the h2:
        value.textContent = counter;

        // changes color of the value
        if (counter < 0){
            value.style.color = 'red';
        } else if (counter === 0){
            value.style.color = 'black';
        } else {
            value.style.color = 'green';
        } 
    };
});