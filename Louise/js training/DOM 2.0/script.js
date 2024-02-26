/**
 * Follow me:
 *  
 * - getAttribute()
 * - Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
 * - setAttribute()
 * - Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
 */

const carImage = document.querySelector(".car__image");

console.log(carImage.getAttribute("alt")); //method
carImage.alt = "en grå vm beatle";
carImage.setAttribute("alt", "en ny alt tekst");
//carImage.className = "test"; // OBS: den fjerner evt. allerede definerede navne
carImage.classList.add("test");

    


/**
 * OPGAVE 1: 
 * 
 * Her skal laves en knap, som når man trykker på den, så ændres billedet af bilen 
 * sig til et andet billede af en anden bil. De andre billeder er online og der
 * benyttes absolute URL'er til billederne. Disse skrives i et array.
 * Følg trinnene nedenfor eller prøv om du kan komme frem til en løsning uden at 
 * følge trinnene.
 * 
 * 1: Lav et array, værdierne i arrayet skal være tekst strenge, som indeholder
 *    URL'er til billeder af VW Beatles. Du kan f.eks. finde disse fotos på 
 *    https://unsplash.com/  (de URL'er skal fungere som src-værdien i <img>)
 * 
 * 
 * 2: I HTML laves et <button> element i forbindelse med billedet af bilen.
 *    Giv det en class.
 * 
 * 3: Lav en eventListener på <button>
 * 
 * 4: Skriv funktionen som kører når der bliver klikket på <button>. 
 *    Denne funktion skal ved hjælp af Math.random() vælge et tilfældigt 
 *    element(URL) i arrayet og sætte det ind i src-attributen på <img>
 */

// 1: Et array med absolutte URL'er for fotos af biler
const carImages = [
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1536667842290-7602f6a43a2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518779379-675cc1cfc554?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1604410869154-3c16714cd476?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

// 3: EventListener for button
const carButton = document.querySelector('.car__button');
carButton.addEventListener('click', changeCarImage);

// 4: Funktionen som kører når knappen bliver trykket
function changeCarImage() {
    const carImage = document.querySelector('.car__image');
    const randomNumber = Math.floor(Math.random() * carImages.length);
    carImage.src = carImages[randomNumber];
  }



/**
 * CREATING AND ADDING CARDS WHEN THE BUTTON IS PUSHED
 * 
 * En kombination af follow me og opgaver
 * 
 */

// eventlistener til .cards__button: 

const cardsButton = document.querySelector('.cards__button');
cardsButton.addEventListener('click', createCard);



// funktionen som kører, når knappen er blevet trykket 
function createCard() {
    // Opret alle elementer til et card: section, h3, p
    const newCard = document.createElement('section');
    const cardHeading = document.createElement('h3');
    const cardText = document.createElement('p');

    // OPG. 1: Tilføj class navne til de tre nyoprettede elementer
    newCard.classList.add('card');
    cardHeading.classList.add('card__heading');
    cardText.classList.add('card__text');

    // OPG. 3: I HTML lav to inputfelter med labels. Indholdet fra input felterne
    // skal sættes ind i det enkelte card ved hjælp af textContent.
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    cardHeading.textContent = input1;
    cardText.textContent = input2;

    // OPG. 2: Få en tekststreng ind i et nyt card (hardcoded)
    // Flyt dette op i OPG. 1, hvis du vil have hardkodede værdier
    // cardHeading.textContent = 'Ny Titel';
    // cardText.textContent = 'Ny tekst';

    // Append de nye elementer til .cardbox
    const cardbox = document.querySelector('.cardbox');
    cardbox.appendChild(newCard);
    newCard.appendChild(cardHeading);
    newCard.appendChild(cardText);

    // OPG. 4: Få indholdet fra de to inputfelter slettet, når der er oprettet et card
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';

    // OPG. 5: Få kun oprettet et nyt card, hvis begge inputfelt indeholder noget tekst
    if (input1.trim() !== '' && input2.trim() !== '') {
        cardbox.appendChild(newCard);
    }
}