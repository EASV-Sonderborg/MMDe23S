// Første slider
const imgContainer1 = document.querySelector(".img__container1");
const btnLeft1 = document.querySelector(".btn-left1");
const btnRight1 = document.querySelector(".btn-right1");
const images1 = document.querySelectorAll(".img__container1 img");
const infoText1 = document.querySelector(".__info1");

let currentSlide1 = 0;

const infoTexts1 = [
    "Som formand får de studerendes råd har jeg stået for at designe plakater og Airtame-visuals. Disse opgaver har givet mig værdifuld erfaring med at skabe visuelt tiltalende materialer inden for UI-design, hvor jeg har kombineret æstetik med klare budskaber.",
    "Jeg er i gang med at redesigne Sønderjyske Ishockey Supporters hjemmeside og har derfor redesignet deres logo med en transparent baggrund i vektorformat. Til dette projekt har jeg anvendt Illustrator for at sikre høj kvalitet og fleksibilitet i designet.",
    
];

function changeImage1() {
    if (currentSlide1 >= images1.length) {
        currentSlide1 = 0;
    } else if (currentSlide1 < 0) {
        currentSlide1 = images1.length - 1;
    }
    imgContainer1.style.transform = `translateX(-${currentSlide1 * 100}%)`;
    infoText1.textContent = infoTexts1[currentSlide1];
}

btnRight1.addEventListener('click', function () {
    currentSlide1++;
    changeImage1();
});

btnLeft1.addEventListener('click', function () {
    currentSlide1--;
    changeImage1();
});

// 2. slider
const imgContainer2 = document.querySelector(".img__container2");
const btnLeft2 = document.querySelector(".btn-left2");
const btnRight2 = document.querySelector(".btn-right2");
const images2 = document.querySelectorAll(".img__container2 .item");
const infoText2 = document.querySelector(".__info2");

let currentSlide2 = 0;

const infoTexts2 = [
    "I mit design for Sønderjyske Ishockey Support brugte jeg Figma til at lave en header ved hjælp af komponenter. Dette sikrede ensartethed og gjorde det nemt at genbruge elementer, mens jeg hurtigt kunne justere og optimere designet.",
    "Jeg har udviklet en begivenhedskalender med DOM-manipulation i JavaScript, hvor data hentes fra en JSON-fil. Elementerne oprettes dynamisk og får klasser, så stylingen kan justeres via CSS. Ved at hente data fra JSON-filen kan kalenderens indhold nemt opdateres, uden at ændre koden, hvilket gør den fleksibel og vedligeholdelsesvenlig.",
    
];

function changeImage2() {
    if (currentSlide2 >= images2.length) {
        currentSlide2 = 0;
    } else if (currentSlide2 < 0) {
        currentSlide2 = images2.length - 1;
    }
    imgContainer2.style.transform = `translateX(-${currentSlide2 * 100}%)`;
    infoText2.textContent = infoTexts2[currentSlide2];
}

btnRight2.addEventListener('click', function () {
    currentSlide2++;
    changeImage2();
});

btnLeft2.addEventListener('click', function () {
    currentSlide2--;
    changeImage2();
});


//3. slider
const imgContainer3 = document.querySelector(".img__container3");
const btnLeft3 = document.querySelector(".btn-left3");
const btnRight3 = document.querySelector(".btn-right3");
const images3 = document.querySelectorAll(".img__container3 img");
const infoText3 = document.querySelector(".__info3");

let currentSlide3 = 0;

const infoTexts3 = [
    "Jeg har udviklet en dynamisk og visuelt tiltalende pop-up til Destination Sønderjyllands nyhedsbrev med JavaScript. Den er designet til at fange opmærksomhed og invitere brugerne til at tilmelde sig med en empatisk besked. JavaScript sikrer en flydende og interaktiv oplevelse, der skaber nysgerrighed og tilhørsforhold, så brugerne bliver inspireret til at følge med i nyheder fra Destination Sønderjylland.",
    "I min designproces har jeg stort fokus på empati gennem brug af user stories, personaer og Value Proposition Canvas. User stories hjælper med at forstå brugernes behov og mål, mens personaer giver indsigt i målgruppens adfærd og forventninger. Value Proposition Canvas sikrer, at designet skaber reel værdi ved at adressere brugernes udfordringer. Dette empatidrevne fokus sikrer en brugercentreret tilgang i designet.",
    
];

function changeImage3() {
    if (currentSlide3 >= images3.length) {
        currentSlide3 = 0;
    } else if (currentSlide3 < 0) {
        currentSlide3 = images3.length - 1;
    }
    imgContainer3.style.transform = `translateX(-${currentSlide3 * 100}%)`;
    infoText3.textContent = infoTexts3[currentSlide3];
}

btnRight3.addEventListener('click', function () {
    currentSlide3++;
    changeImage3();
});

btnLeft3.addEventListener('click', function () {
    currentSlide3--;
    changeImage3();
});
