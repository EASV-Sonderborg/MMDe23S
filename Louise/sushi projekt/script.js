    //eksiserende skal være posistion relative (skal være parent til ny p tag) - I HTML
    //lav en ny p tag, som skal styles som en lille rød cirkel med border radius skal være absolute. (skal være child til sidebar__order) - I HTML


// ny let variable til counter = 0;

// querySelectorAll på knapper

// eventlistener på alle knapper - forEach()

// function som kører når der klikkes på en knap

    // counter++

    // if counter > 0 så køre denne function: updateCounter(counter)

// function updateCounter(counter)

    // fjerne display: none class på rød cirkel ( dette kræver også du laver noget styling til p der gør at den er hidden i første omgang)

    // updatere textContent på rød cirkel med counter værdien på p

// New variable for counter
let counter = 0;

// Querying all buttons
const buttons = document.querySelectorAll('.button');

// Getting the red circle element
const redCircle = document.querySelector('.red__circle');

// Adding event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Incrementing counter
        counter++;
        
        // If counter is greater than 0, update the counter and show red circle
        if (counter > 0) {
            updateCounter(counter);
            redCircle.classList.add('visible');
        }
    });
});

// Function to update counter
function updateCounter(counter) {
    // Updating text content of red circle with counter value
    redCircle.textContent = counter;
}

