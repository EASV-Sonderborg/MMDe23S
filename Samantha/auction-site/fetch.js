// URL'en til JSON-filen
const url = 'itemsUserView.json';

// Fetch-anmodning for at indlæse JSON-dataene
fetch(url)
  .then(response => {
    // Tjek om anmodningen var vellykket
    if (!response.ok) {
      throw new Error('Fejl under indlæsning af data');
    }
    // Pars JSON-dataene og returner dem
    return response.json();
  })
  .then(data => {
    // Dataene er blevet indlæst korrekt, nu kan de bruges
    // Iterer over hvert produkt og opret et produktkort
    const productContainer = document.querySelector('#product__container');

    data.forEach(product => {
      // Opret produktkortet
      const productCard = document.createElement('section');
      productCard.classList.add('product-card');

      // Opret den første sektion (Billede, Tid, Pris, Knapper)
      const productInfo = document.createElement('section');
      productInfo.classList.add('product-info');

      // Opret billedet af produktet
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      productImage.classList.add('product-image');
      productInfo.appendChild(productImage);

      // Opret auktionsperioden for produktet
      

      // Opret nedtællingen til slutdatoen for produktet
      const countdown = document.createElement('p');
      countdown.textContent = 'Resterende tid: ' + calculateTimeRemaining(new Date(), new Date(product.end_time));
      countdown.classList.add('countdown');
      productInfo.appendChild(countdown);

      // Opret prisen for produktet
      const productPrice = document.createElement('p');
      productPrice.textContent = 'Pris: ' + product.price + '$';
      productPrice.classList.add('product-price');
      productInfo.appendChild(productPrice);

      // Opret knapper til at byde på produktet
      const productButtons = document.createElement('section');
      productButtons.classList.add('bid-buttons');

      // Funktion til at oprette knapperne og opdatere prisen ved bud
      function createButton(text, price) {
        const button = document.createElement('button');
        button.textContent = text;
        button.classList.add('button', 'button-small');
        button.addEventListener('click', function() {
          updatePrice(price);
        });
        productButtons.appendChild(button);
      }

      // Funktion til at opdatere prisen
      function updatePrice(price) {
        const currentPrice = parseInt(productPrice.textContent.split(' ')[1]); // Udtræk aktuel pris og konverter til tal
        const newPrice = currentPrice + price; // Beregn ny pris
        productPrice.textContent = 'Pris: ' + newPrice + '$'; // Opdater prisen i produktkortet
      }

      // Opret knapper med forskellige bud
      createButton('10 $', 10);
      createButton('50 $', 50);
      createButton('100 $', 100);

      productInfo.appendChild(productButtons);
      productCard.appendChild(productInfo);

      // Opret den anden sektion (Navn, Beskrivelse)
      const productDetails = document.createElement('section');

      // Opret produktets navn
      const productName = document.createElement('h2');
      productName.textContent = product.name;
      productName.classList.add('product-name', 'headline-medium');
      productDetails.appendChild(productName);

      // Opret produktets beskrivelse
      const productDescription = document.createElement('p');
      productDescription.innerHTML = product.description;
      productDescription.classList.add('product-description');
      productDetails.appendChild(productDescription);

      productCard.appendChild(productDetails);

      // Tilføj produktkortet til containeren
      productContainer.appendChild(productCard);

      // Opdater nedtællingen hvert sekund
      setInterval(function() {
        countdown.textContent = 'Closing in: ' + calculateTimeRemaining(new Date(), new Date(product.end_time));
      }, 1000);
    });
  })
  .catch(error => {
    // Fejlhåndtering
    console.error('Error:', error);
  });

// Funktion til at beregne den resterende tid
function calculateTimeRemaining(now, endTime) {
  const difference = endTime - now;
  if (difference <= 0) {
    return 'Closet';
  }
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  return days + ' Days ' + hours + ':' + minutes + ':' + seconds + ' Hours';
}