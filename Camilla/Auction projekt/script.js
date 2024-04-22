const url = "https://web-auction-backend-production.up.railway.app/api/items";

function getJSON(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
      addData(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

getJSON(url);

const main = document.querySelector('.main')

function addData(data){
  console.log(data);
data.forEach((item) =>{
const productCard = document.createElement('section');
productCard.classList.add('product');
main.appendChild(productCard);
  
const productImg = document.createElement('img');
productImg.src = item.imageSrc;
productImg.classList.add('product__image');
productCard.appendChild(productImg);



const productTitle = document.createElement('h2');
productTitle.textContent = item.title;
productTitle.classList.add('product__title');
productCard.appendChild(productTitle);

const productPrice = document.createElement('p');
productPrice.textContent=`Current Price: ${item.startPrice}`;
productPrice.classList.add('product__price');
productCard.appendChild(productPrice);

const productDuration = document.createElement('p');
productDuration.textContent=`Expires: ${item.expires}`;
productDuration.classList.add('product__duration')
productCard.appendChild(productDuration);
})
}

