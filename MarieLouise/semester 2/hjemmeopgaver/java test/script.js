/*
A: Lav en <button> i HTML-filen. 
I JS skal der være en eventListener på knappen. 
Når der bliver klikket på knappen, så skifter baggrundsfarven på body. 
Baggrundsfarven hentes fra et array, som indeholder 4 forskellige farvekoder. 
Det skal være tilfældigt hvilken farve fra array'et som bliver tildelt baggrundsfarven på body.*/

//først laver jeg en array med de forskellige baggrundsfarver den kan have
const back_color = ['#008000','#FF0000', '#0F52BA', '#FFFF00', '#FFC0CB'];
//derefter vælger jeg så button, at hvis der sker noget med button ændre den noget ved body 
const button = document.querySelector(".button");
console.log(button);
const body = document.querySelector("body");
//så tilføjer jeg functionen click til button 
button.addEventListener("click",backColor);
// og det her er så hvordan den random vælger en farve udfra dem jeg har sat ind i arrayet
function backColor(){
const random = Math.floor(Math.random()*back_color.length);
document.body.style.backgroundColor = back_color[random];
}


/*
B: Lav et inputfelt i HTML-filen af typen 'text' samt en <ul>. 
I JS skal i lave en eventListener på inputfeltet, 
som reagerer på når der er skrevet en tekststreng i inputfeltet og trykket på 'enter' på tastaturen. 
Til dette er der en specifik event type som hedder 'change'. 
Dernæst skal I tage indholdet fra inputfeltet og lægge i en unordered liste i DOM'en som list items.*/

//tag fat i tekst feltet og listen
document.addEventListener("DOMContentLoaded", function(){
    const inputField = document.getElementById("textInput");
    const list = document.getElementById("list");
//tilføjer functionen change, altså om der sker en change i inputfeltet skal der ske noget
    inputField.addEventListener("change", function(event){
        const text = event.target.value;
        //tjekker om inputfeltet er tomt
        if (text !==""){
            //hvis den ikke er tom, skal jeg nu ha fat i inputtet for at tilføje til listen
            const listItem = document.createElement("li");
            //nu tar jeg fat i contented af den nyoprettede list item
            listItem.textContent = text;
            // for så at tilføje concent fra nye list item til den allerede eksisterende UL
            list.appendChild(listItem);
            //det her er for at ryde inputfeltet igen efter man klikker enter
            event.target.value = "";
        }
    });
});