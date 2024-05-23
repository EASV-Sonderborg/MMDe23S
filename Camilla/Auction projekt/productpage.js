// STEP 1 – Get the URL from the current page
const queryString = window.location.search;
console.log(queryString);

// STEP 2 – Break the string into an object
const urlParams = new URLSearchParams(queryString);

// STEP 3 – Find the "id" part
const id = urlParams.get('itemid')
console.log(id);

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

const productCard = document.querySelector('.product');

function addData (data) {



}