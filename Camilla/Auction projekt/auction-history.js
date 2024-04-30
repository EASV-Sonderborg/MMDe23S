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

const main = document.querySelector('.auctionHistory');


function addData(data) {
console.log(data);
data.forEach((item) =>{
const productSect = document.createElement('section');
productSect.classList.add('auctionHistory__container');
main.appendChild(productSect);

const productImg = document.createElement('img');
productImg.src = item.imageSrc;
productImg.classList.add('auctionHistory__img');
productSect.appendChild(productImg);

const container = document.createElement('section');
container.classList.add('auctionHistoryText__container');
productSect.appendChild(container);

const productTitle = document.createElement('p');
productTitle.textContent = item.title;
productTitle.classList.add('auctionHistory__name');
container.appendChild(productTitle);

const productDesc = document.createElement('p');
productDesc.textContent = `*${item.description}*`;
productDesc.classList.add('auctionHistory__name');
container.appendChild(productDesc);

const timeOnly = item.expires.split('T') [1].split('.')[0];

const productDuration = document.createElement('p');
productDuration.textContent = timeOnly;
productDuration.classList.add('auctionHistory__text');
productSect.appendChild(productDuration);

const productStartPrice = document.createElement('p');
productStartPrice.textContent = `${item.startPrice} DKK`;
productStartPrice.classList.add('auctionHistory__text');
productSect.appendChild(productStartPrice);
})
}