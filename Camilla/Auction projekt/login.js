const button = document.querySelector(".button--submit");

button.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    
    console.log("Button clicked"); // Added for debugging

    // Assuming Response.status is obtained from somewhere, like an API response
    
        window.location.href = "products.html"; // Redirect to products.html
    
});