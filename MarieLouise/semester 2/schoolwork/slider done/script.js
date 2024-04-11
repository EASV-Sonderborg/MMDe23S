// DOM queries (vælge HTML elementer):
const previousButton = document.querySelector('.slider__arrow--prev');
//console.log(previousButton);
const nextButton = document.querySelector('.slider__arrow--next');
const slide = document.querySelector('.slide');
const slideContainer = document.querySelector('.slider__container');

// Eventlistener til previous og next buttons:
previousButton.addEventListener('click', goPrevious);
nextButton.addEventListener('click', goNext);

// Funktion som bliver kørt, når der skal gåes en slide frem:
function goNext() {
    const slideWidth = slide.clientWidth;
    //console.log(slideWidth);
    //console.log(slideContainer.scrollLeft);
    slideContainer.scrollLeft = Math.floor(slideWidth + slideContainer.scrollLeft);
    //console.log(slideContainer.scrollLeft);
    const numberOfSlides = document.querySelectorAll('.slide').length;
    //console.log(numberOfSlides);

    if(slideContainer.scrollLeft === (slideWidth * (numberOfSlides - 1))){
        //console.log('sidste slide');
        slideContainer.scrollLeft = 0;
    };
};

// Funktion som bliver kørt, når der skal gåes en slide tilbage:
function goPrevious() {
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft -= slideWidth;
};


/**
 * Opgave 1: 
 * Få slideren til at scrolle tilbage til start (1. slide), 
 * når der klikkes på nextbutton ved den sidste slide.
 */

// løsningen sættes ind i function goNext()



/**
 * Opgave 2: 
 * Anvend CSS Scroll Snap, så slideren 'snapper' til
 * at vise en hel slide på touch devices (og ikke stopper
 * midt i mellem to slides).
 * 
 * Ref. til CSS Scroll snap: 
 * https://web.dev/articles/css-scroll-snap
 */




/**
 * Opgave 3: 
 * Få slideren til at reagere på venstre og højre pil. Dvs. når
 * der klikkes på venstre piltast på tastaturet, så køres 
 * funktionen 'prevSlide()' og modsat for højre piltast.
 * 
 * Ref. KeyboardEvent - code:
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
 */
window.addEventListener('keydown', (event) => {
    console.log(event.code);
    if (event.code === "ArrowRight"){
        goNext();
    } else if (event.code === "ArrowLeft"){ 
        goPrevious();
    }
});

/**
 * Samanthas kode: 
 * 
 * window.addEventListener
    "keydown",
    (event) => {
    if(ArrowRight)
        goNext();
    else if(ArrowLeft)
    goPrevious();
    }
 */



/**
 * Opgave 4:
 * Lav indhold til slideren, hvor du forklarer de enkelte trin 
 * i hvorledes slideren er bygge op. Dette skal laves med HTML i
 * sliderens <li>.
 */




/**
 * Opgave 5:
 * Lav nogle andre pile til slideren. F.eks. ved anvendelse af 
 * nogle ikoner eller ved at lave pilene selv i CSS eller med en
 * 'arrow generator'. F.eks. denne: https://front-end-tools.com/en/generatetriangle/
 */

