// DOM Query + evenlistener
document.addEventListener("DOMContentLoaded", function() {
    // Definer et array med forskellige farver
    const colors = ["red", "blue", "green", "orange"];
  
     // Find knappen med classen "ColorChangeButton" og sæt den ind i en queryselector
    const buttons = document.querySelectorAll(".ColorChangeButton");
  
     // laver lige en function på knappen
    buttons.forEach(function(button) {
    // Tilføj en eventlistener til knappen der lytter på "click"
      button.addEventListener("click", function() {
    // finder et tilfældigt tal mellem 0 og længden af farverne i arrayet
        const randomIndex = Math.floor(Math.random() * colors.length);
    // Hent den tilfældige farve fra farvearrayet baseret på det randome tal
        const randomColor = colors[randomIndex];
      // Skift baggrundsfarven på body til den randome farve
        document.body.style.backgroundColor = randomColor;
      });
    });
  });