
// Function to remove the parent section when the remove button is clicked
function removeCard(event) {
    const button = event.target;
    const card = button.closest('.first-section');
    if (card) {
        card.remove();
    }
}

// Querying all buttons with class button__remove
const removeButtons = document.querySelectorAll('.button__remove');

// Adding event listeners to all remove buttons
removeButtons.forEach(button => {
    button.addEventListener('click', removeCard);
});