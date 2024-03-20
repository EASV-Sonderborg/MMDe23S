// DOM Query on all Buttons
const addToCartButtons = document.querySelectorAll(".product__addToCart");

// Add event listener on all buttons
addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const button = event.target;
        const product = button.parentNode;
        makeCartItem(product);
    });
});

// Function to handle buttons
function makeCartItem(product) {
    const cartItem = product.cloneNode(true);
    console.log(cartItem);

    // DOM Query + appendChild (taking the child from the parent)
    const cartItemsSection = document.querySelector(".cart__items");
    cartItemsSection.appendChild(cartItem);

    //remove --empty
    document.querySelector(".cart").classList.remove("--empty");

    // Recalculate the cart value
    calculateCart();
}

// Calculate the total of the cart
function calculateCart() {
    // Loop through all .cart__item
    const cartItems = document.querySelectorAll(".cart__items .product");

    const delivery = 60;
    let total = 0;

    // get all itemprop=price
    cartItems.forEach((item) => {
        // get the value of the itemprop attribute where it is set to price
        let price = item.querySelector("[itemprop=price]").getAttribute("content");

        // parse as Int so we can do math with it
        price = parseInt(price);

        // add together
        total += price;
    });

    // update total in cart
    document.querySelector(".cart__totalPrice").textContent = total + delivery + "kr";
}