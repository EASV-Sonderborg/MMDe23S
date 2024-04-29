
// grab button called order
let orderCart = document.querySelector('.header__order');
// to grab go back button
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');


console.log(orderCart);
//add function to order
orderCart.addEventListener('click', () => {
    //to make cart show
    body.classList.toggle('showCart');
})
// to use button close cart
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
// grabed the button to add to cart
const productAddToCart = document.querySelectorAll(".button");
// now we grab productcard when we press add to cart
productAddToCart.forEach((button) =>{
    button.addEventListener('click',(event)=>{

        const button = event.target;
        const productCard = button.parentNode;
        console.log(productCard);
        //grab product cart
        createCartItem(productCard);
    });
})
//create cart item from product card copy
function createCartItem(productCard){

    const cartItem = productCard.cloneNode(true);
    console.log(cartItem);

    const cartItems = document.querySelector('.listCart');

    cartItem.classList.add('cart__item');
    // add the new cart item to cart
    cartItems.appendChild(cartItem);
}


