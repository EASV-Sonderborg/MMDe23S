function goToOrderingScreen() {
  // Denne funktion tjekker om man er på "index.html", ellers virker eventlistener ikke
  if (window.location.pathname === "/index.html") {
    // Denne sender dig tilbage til "orderingScreen"
    window.location.href = "orderingScreen.html";
  }
}

document.body.addEventListener("click", goToOrderingScreen);
