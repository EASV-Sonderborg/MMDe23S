// ------------------- NavBar: click-effect ------------------

const navBarItem = document.querySelectorAll(".navBar__item");
navBarItem.forEach(element => {
    element.addEventListener("click", () => {navBarItemActivate(element)});
});
// without the anonymous function above, the element in navBarActivate would be the click-event.
//in forEach I'm calling my function and set element as parameter to pull it into the function
function navBarItemActivate(element) {
    //another forEach to check every single element in the NodeList
    navBarItem.forEach(item => { item.classList.remove('active')});
    element.classList.add('active');
}



// ------------------ add to cart --------------------

const addToCartButton = document.querySelectorAll('.button__primary');

//for each button: register which button and which productCard
addToCartButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(event.target);
        console.log(event.target.parentNode.parentNode);
        const button = event.target;
        const productCard = event.target.parentNode.parentNode;
        //check duplicity in cart 
        const productKey = productCard.getAttribute('productKey');
        const keyDuplicate = currentOrders.querySelectorAll(`.productCard[productKey="${productKey}"]`)
        if (keyDuplicate.length == 0) {   
            addToCart(productCard);
        }
        else {
            const quantity = keyDuplicate[0].querySelector('.quantity__number');
            increaseProductNumber(quantity);
        }
    });
})
/** add productCard to Cart 
 * 1. querySelector Cart
 * 2. clone productCard, 
 * 3. append productCard
 * 
 * quantityButton:
 * 1. create button, add classes
 * 2. create elements in button, add classes, append them
*/
const currentOrders = document.querySelector('.currentOrders');
const cartFooter = document.querySelector('.cart__footer');

function addToCart(productCard) {
    // 1. clone the productCard
    const newOrder = productCard.cloneNode(true);
    newOrder.classList.add('currentOrder__productCard'); 
    // add the quantity button
    const buttonQuantity = document.createElement('button');
    buttonQuantity.classList.add('button__quantity', 'button', 'currentOrder__quantity');
    //add the elements within the button
    const decreaseQuantity = document.createElement('span');
    decreaseQuantity.classList.add('quantity__change', 'quantity__change--decrease');
    decreaseQuantity.textContent = '-';
    let quantity = document.createElement('p');
    quantity.classList.add('quantity__number');
    quantity.textContent = '1';
    const increaseQuantity = document.createElement('span');
    increaseQuantity.classList.add('quantity__change', 'quantity__change--increase');
    increaseQuantity.textContent = '+';

    // -------------- change quantity -------------------

    // add eventlistener the moment the element is created    
    decreaseQuantity.addEventListener('click', () => {
        decreaseProductNumber(newOrder, quantity);
    } )

    increaseQuantity.addEventListener('click', () => {
        increaseProductNumber(quantity);
    } )

    buttonQuantity.appendChild(decreaseQuantity);
    buttonQuantity.appendChild(quantity);
    buttonQuantity.appendChild(increaseQuantity);

    newOrder.appendChild(buttonQuantity);

    currentOrders.appendChild(newOrder);

    cartFooter.classList.add('active');
    console.log(cartFooter);

    calculateCart();
}

function decreaseProductNumber(newOrder, quantity) {
    const currentNumber = parseInt(quantity.textContent);
        let quantityNumber = currentNumber - 1;

        quantity.textContent = `${quantityNumber}`;

        if (quantityNumber === 0) {
            newOrder.remove();
        }
        //check if there are any products in cart left
        if (currentOrders.hasChildNodes(false)) {
            cartFooter.classList.remove('active');
        }
        else {
            // call calculateCart to ensure number is included in totalSum
            calculateCart();
        }
    } 

function increaseProductNumber(quantity) {
    const currentNumber = parseInt(quantity.textContent);
    console.log(currentNumber)
    let quantityNumber = currentNumber + 1;

    if (quantityNumber <= 3) {
        quantity.textContent = `${quantityNumber}`;
    }

        calculateCart();
}


// -------------- cart: calculate sum ---------------
/**
* number of every product in the cart
* -> multiplied with number in quantity button
*/

function calculateCart() {
    let totalSum = 0
    const quantityNumber = document.querySelectorAll('.quantity__number');
    const cartSum = document.querySelector('.cart__sum--number');
    
    quantityNumber.forEach((number) => {
        // make integers of the quantitiy__number and the productCard__number
        const quantityInt = parseInt(number.textContent);
        const productCardNumber = number.parentNode.previousElementSibling;
        const productNumber = parseInt(productCardNumber.textContent);
        
        console.log(quantityInt);
        console.log(productNumber);
        
        let sum = quantityInt * productNumber;
        console.log(sum);

        // add the sum of every productCard to the totalSum
        totalSum += sum;
    })

    cartSum.textContent = totalSum;
}


// ------------------- Button__swipe ----------------------

const swiper = document.querySelector('.swipe__swiper');
swiper.addEventListener('mousedown', pressStart);
swiper.addEventListener('touchstart', pressStart);


const body = document.body;
body.addEventListener('mousemove', swipe);
body.addEventListener('touchmove', swipe);
body.addEventListener('mouseup', pressEnd);
body.addEventListener('touchend', pressEnd);


const swipeButton = document.querySelector('.button__swipe');

let initialMouse = 0;
let isPressed = false;

function pressStart(event) {
    initialMouse = event.clientX || event.touches[0].clientX;
    isPressed = true;
}

function pressEnd(event) {
    isPressed = false;
    swipe(event);
}

function swipe(event) {
    const totalMouseMovement = swipeButton.clientWidth - swiper.clientWidth;
    
    // swiper shall bounce back, if not reached 90%
    if (!isPressed) {
        const swipePosition = getComputedStyle(document.documentElement).getPropertyValue('--swipePosition');
        // we get a string, but to compare it with totalMouseMovement it needs to be an integer
        if (parseInt(swipePosition) >= totalMouseMovement * 0.9) {
            document.documentElement.style.setProperty('--swipePosition', totalMouseMovement + 'px');
            
            if (swipeButton.classList.contains('splashScreen__button')) {
                setTimeout(changePage, 300)
            }
            else { 
                setTimeout(completeOrder, 300);
                setTimeout(() => {
                    document.documentElement.style.setProperty('--swipePosition', '0px');
                    initialMouse = 0;
                },300)
            }
            
        }
        else {
            document.documentElement.style.setProperty('--swipePosition', '0px');
        }
        return
    }

    // "normal" swipe movement
    let currentMouse = event.clientX || event.touches[0].clientX;
    let deltaMouse = currentMouse - initialMouse;

    if (deltaMouse <= totalMouseMovement && deltaMouse >= 0) {
        document.documentElement.style.setProperty('--swipePosition', deltaMouse + 'px');
    } 
    //computer doesn't register every fast movement -> happens that it stops, therefore just set the boundaries
    else if (deltaMouse < 0) {
        document.documentElement.style.setProperty('--swipePosition', '0px');
    }
    else {
        document.documentElement.style.setProperty('--swipePosition', totalMouseMovement + 'px');
    }
}

// -------------------- actions after swipe button ---------------------------

function changePage() {
    window.location.href = 'home.html';
    window.reload();
}

/**
 * completeOrder:
 * 1. remove currentOrders and create them in recentOrders
 * 2. add 'addAgain button' to the productCard
 * 3. dropdown arrow
*/
const recentOrders = document.querySelector('.recentOrders');

function completeOrder() {
    const alert = document.querySelector('.alert');
    alert.classList.add('active');

    setTimeout(() => {
        alert.classList.remove('active');
    },3000);
    
    const currentOrderProduct = document.querySelectorAll('.currentOrder__productCard');
    console.log(recentOrders);

    currentOrderProduct.forEach((product) => {
        const newRecentOrder = product.cloneNode(true);
        console.log(newRecentOrder);

        //check duplicity -> just build and append the card, if it isn't already exists

        const productKey = newRecentOrder.getAttribute('productKey');
        const keyDuplicate = recentOrders.querySelectorAll(`.productCard[productKey="${productKey}"]`)
        if (keyDuplicate.length == 0) {   
            newRecentOrder.classList.remove('currentOrder__productCard');
            newRecentOrder.classList.add('recentOrder__productCard');
            //lastChild = quantityButton
            newRecentOrder.lastChild.remove();
            // build and add the new button
            const addAgainButton = document.createElement('button');
            addAgainButton.classList.add('button__secondary')
            addAgainButton.textContent = '+';
            addAgainButton.addEventListener('click', (event) => {
                const productCard = event.target.parentNode;
                //check duplicity in cart 
                const keyDuplicate = currentOrders.querySelectorAll(`.productCard[productKey="${productKey}"]`)
                if (keyDuplicate.length == 0) {  
                    newRecentOrder.classList.remove('recentOrder__productCard');
                    addToCart(productCard);
                }
                else {
                    const quantity = keyDuplicate[0].querySelector('.quantity__number');
                    increaseProductNumber(quantity);
                }
            })

            newRecentOrder.appendChild(addAgainButton);

            recentOrders.appendChild(newRecentOrder);
        }
        
        product.remove();
        
    })
    
    cartFooter.classList.remove('active');
}

function addOrderAgain() {

}

// -------------------------- recentOrder fold --------------------

const dropdown = document.querySelector('.cart__dropdown');
dropdown.addEventListener('click', hideRecentOrders);


console.log(dropdown);
function hideRecentOrders() {
    recentOrders.classList.toggle('hidden');
    dropdown.classList.toggle('outfolded');
}
