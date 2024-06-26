/**
 * DOM exercises
 * 
 * Øv jer I at oprette DOM nodes og indsætte dem i DOM træet. 
 * 
 * Følgende trin er nødvendige:
 */

// 1: Opret et nyt HTML element med metoden: createElement()
const newText = document.createElement('p');
// 2: Hvis det er et tekst element, da kan man give elementet noget tekst med propertien/egenskaben: textContent
newText.textContent = 'Hej med dig';
// 3: Tilføj elementet med tekstindhold til DOM-træet med metoden: appendChild()
const infoSection = document.querySelector('.info');
infoSection.appendChild(newText);
console.log(newText);

/**
 * DEMO eksempel: 
 * Se vedlagte fil 'demo_DOM.png' ved at dobbeltklikke 
 * på det i oversigten med filer til venstre. 
 * Anvend demo'en til at lave nedenstående opgaver.
 */

/**
 * Opgave 1:
 * Lav en <h1> med teksten: 'DOM opgaver - øvelse gør mester!'
 * Tilføj denne <h1> med tekst til <header> i index.html
 */
const newHeader = document.createElement('h1');
newHeader.textContent = 'Øvelse gør mester!';
const headerSection = document.querySelector('.header');
headerSection.appendChild(newHeader);
console.log(newHeader);



/**
 * Opgave 2:
 * Lav en variable kaldet 'firstName' som indeholder dit fornavn.
 * Anvend variablen til at sætte en tekststreng sammen således:
 * 'Her laver "firstName" JS opgaver'
 * 
 * Anvend template literals med back ticks ` og ${} til at sammensætte tekststrengen
 * 
 * Opret en <h2> med ovenstående tekststreng og tilføj den som det
 * første element i <main> 
 * 
 * Hint til at indsætte <h2> elementet i <main> ved anvendelse af append() metoden
 * frem for appendChild() metoden: 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
 */





/**
 * Opgave 3:
 * Lav et nyt <img> element og giv den src attributten: 'js_photo.jpeg'
 * Giv <img> alt teksten: 'Javascript code on computer screen'
 * Tilføj <img> elementet til <section> og tjek at billedet bliver vist i browseren.
 */




/**
 * Opgave 4:
 * Lav en <ul>
 * Tilføj <ul> til <footer>
 */




/**
 * Opgave 5:
 * Lav et array med følgende 3 værdier: 
 * 'HTML', 'CSS', 'JS'
 * Som udvidelse til opgave 4: laves der for hvert element
 * i array'et en <li> med værdierne fra array'et og de 
 * tilføjes <ul> i <footer>
 * 
 * Hint: anvend den for...of loop
 */




/**
 * Opgave 6:
 * Find selv på et element at oprette og tilføje det et 
 * bestemt sted i HTML DOM-træet:
 */


/**
 * Opgave 7:
 * Fjern den <section> med class=info fra DOM-træet.
 * Hint: Kig i listen for metoder der er tilgængelige for Element object.
 * Her finder du en metode til at anvende til opgaven:
 * https://developer.mozilla.org/en-US/docs/Web/API/Element
 */

