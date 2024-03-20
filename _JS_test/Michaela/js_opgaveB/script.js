// Select the input field of type 'text'
const inputField = document.querySelector(".input");

// Select the first ul element in the document
const list = document.querySelector(".list");

// Add an event listener to the input field listening for keypresses
inputField.addEventListener("keypress", function(event) {
    // Check if the key pressed is 'Enter'
    if (event.key === "Enter") {
        // Get the text from the input field and remove any surrounding whitespace
        const text = inputField.value.trim();

        // Check if the text string is not empty
        if (text !== '') {
            // Create a new list item
            const listItem = document.createElement("li");

            // Set the text content for the list item
            listItem.textContent = text;

            // Add the new list item to the ul
            list.appendChild(listItem);

            // Clear the input field after the text is added to the list
            inputField.value = "";
        }
    }
});