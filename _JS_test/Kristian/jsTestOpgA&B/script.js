//Starter ned at lave en const med et array (Opgave A)
const colors = ["red", "green", "blue", "yellow"];
//funktion getRandomColor med Math.random, vælger en tilfældig farve
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
//tager fat i "body" for at ændre baggrundsfarven
function changeBodyColor() {
  document.body.style.backgroundColor = getRandomColor();
}
//tager fat i vores "colorButton" og tilføjer til sidst en eventListener
const button = document.querySelectorAll(".colorButton");
button.forEach((button) => {
  button.addEventListener("click", changeBodyColor);
});

// Textinput field (opgave B)
function handleInputChange(event) {
  // Denne funktion tjekker om "enter" bliver trykket på
  if (event.key === "Enter") {
    const inputValue = event.target.value.trim();
    if (inputValue !== "") {
      // laver ny list item
      const listItem = document.createElement("li");
      listItem.textContent = inputValue;

      // Append den nye liste til den "unordered liste"
      document.getElementById("list").appendChild(listItem);

      // Fjerner tekst fra inputfield efter der bliver trykket "enter"
      event.target.value = "";
    }
  }
}

// Tilføjer event listener til input feldtet
document
  .getElementById("textInput")
  .addEventListener("keypress", handleInputChange);
