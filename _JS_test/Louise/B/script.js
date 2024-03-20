document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("textInput");
    const list = document.getElementById("list");

    inputField.addEventListener("change", function(event) {
        const text = event.target.value; 
        // Tjekker om input er tomt
        if (text !== "") { 
        // Opretter et nyt element altså den på listen
            const listItem = document.createElement("li");
        // skriver teksten ind i listelementet
            listItem.textContent = text;
        // Tilføjer listeelementet til ul
            list.appendChild(listItem);
        // Ryd inputfeltet når jeg klikker enter
            event.target.value = ""; 
        }
    });
});