// DOM query on the buttons
const buttons = document.querySelectorAll('.counter__button');
console.log(buttons);

// variable for the counter value:
let counter = 0;

// eventlistener for the buttons:
buttons.forEach(function(button){
    button.addEventListener('click', counterFunction)
    console.log(button);

    function counterFunction(){
        // hvis der er klikket på minus: 'counter--'  det samme som counter = counter - 1
        
        if(button.classList.contains('counter__button--subtract')) {
            counter--;
        } else if(button.classList.contains('counter__button--addition')) {
            counter++;   // same as: counter = counter + 1
        }
        console.log(counter);

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