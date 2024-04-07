//DOM query på buttons *//
const productAddToCart = document.querySelectorAll(".product__addToCart"); //returns a nodelist
//*console.log(productAddToCart);

//Add eventlistener on all buttons*//
productAddToCart.forEach((button) =>{
    button.addEventListener('click', (event) =>{
    //find out which product card belongs to the clicked button: *//
    //hint: target and parentNode properties        
    //*console.log(event.target.parentNode);
    const button = event.target;
    const product = button.parentNode;
    // function call with the product item as a parameter:
    //*console.log(product);
    createCartItem(product);
    });
})

//create function createCartItem:
//hint use cloneNode()
function createCartItem(product) {
    //*console.log('Received',product);
    //create a copy of the (cloneNode())
    const cartItem = product.cloneNode(true);
    console.log(cartItem);
    //DOM query on the cart:
    const cartItems = document.querySelector('.cart__items');

    //add class to cartItem for styling purposes:
    cartItem.classList.add('card__item');
    //append child - add the new CartItem to the cart
    cartItems.appendChild(cartItem);

    //remove .--empty from cart
    document.querySelector('.cart').classList.remove('--empty');

    //function call to calculate cart value:
    calculateCart();


}


//calculate the total cost
function calculateCart() {

    //delivery
    const delivery = 60;

    //total
    let total = 0;

    //loop through all cartItems:
    const cartItems = document.querySelectorAll('.card__item');
    //console.log(cartItems);
    cartItems.forEach((item) => {
        
    //get the value of the itemprop attribute where it is set to price
    let price = item.querySelector('[itemprop="price"]').getAttribute ('content');
    //console.log(price);
   
    //parse as Int so we can do math with it
    //parseInt():
    price = parseInt(price);
    //console.log(price);

    //add together
    total+= price;
    console.log('total', total);

    //update total in cart
    document.querySelector('.cart__totalPrice') .textContent =`${total + delivery}kr,`;
 
 });
}



    

