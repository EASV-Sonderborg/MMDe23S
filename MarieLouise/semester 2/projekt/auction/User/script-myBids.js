//card
let myBids = document.querySelector('.myBids');
let close = document.querySelector('.close');
//body
let body = document.querySelector('body');

//grab button (my bids) so when pressed cart shows
myBids.addEventListener('click', () => {
    //fade in effect on cart
    body.classList.toggle('showCart');
    ('.slide').on('click', function(){
    ('.card').toggleClass('showCart');
});
});
// grab close button, so when pressed cart closed
close.addEventListener('click', () => {
    body.classList.toggle('showCart');
})






const url = "http://roundhouse.proxy.rlwy.net:54600/items";

function getJSON(allItems){
    fetch(url)
    .then((response) => {
        //if response is not ok
        if(!response.ok){
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log('Data received:', data);
        addData(data); //call function and add data as a parameter
    })
    .catch((error) => {
        console.log('Error', error);
    });
};

const products = document.querySelector('.products')
  
function addData(data){
    console.log(data);
  data.forEach((product) =>{

    const productCard = document.createElement('section');
    productCard.classList.add('productCard');
    products.appendChild(productCard);

    productCard.innerHTML = `
    <h2 class="productCard__artist">${product.artist}</h2> 
    <h3 class="productCard__subtitle">${product.artTitle}</h3>
    <h3 class="productCard__countdown">Expires the: ${product.expiryDate}</h3>
   
    
    
    `
  })
}



getJSON();



