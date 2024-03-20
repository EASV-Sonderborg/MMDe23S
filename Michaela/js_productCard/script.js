//dom query on all add to cart buttons
const addToCartButtons =
document.querySelectorAll(".product__addToCart");
console.log(addToCartButtons);

//add eventlistner
addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        //find out which product the clicked button belongs to
        //hint: tagret and parentNode properties (add multiple parentNode to choose the next parent)
      // console.log(event.target.parentNode.parentNode.parentNode)
       const button = event.target;
       const product = button.parentNode;
       //function call with the product item as a parameter:
       createCartItem(product);
    });
})

//create function createCartItem:
//hint
function createCartItem(product) {

    //create a copy of the product(cloneNode):
    const cartItem = product.cloneNode(true);
    const cartItems = document.querySelector(".cart__items");
    console.log(cartItem);

    cartItem.classList.add("cart__item");

    //append child - add the new cartItem to the cart
    cartItems.appendChild(cartItem);

    //remove .--empty from cart
    document.querySelector(".cart").classList.remove("--empty");
    //function call to calculate cart value:
    calculateCart();
}
//calculate the total cost of all items in the cart
function calculateCart(){
    //delivery
    const delivery = 60;

    //total
    let total = 0;

    //loop through all cartItems:
    const cartItems = document.querySelectorAll(".cart__item");
    cartItems.forEach((item) => {
        
        //get the value of the itemprop attribute where it is set to price
        let price = item.querySelector("[itemprop=price]").getAttribute("content");

        //pars as int so we can do math with it
        price = parseInt(price)

        //add together
        total += price;

    });

    //update total in cart
    document.querySelector(".cart__totalPrice").textContent = total + delivery + "kr";

}

// Function to handle buttons
