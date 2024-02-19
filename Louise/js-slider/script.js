// DOM queries (vælge HTML elementer):
const previousbutton = document.querySelector(".slider__arrow--prev");
console.log(previousbutton);

const nextbutton = document.querySelector(".slider__arrow--next");
console.log(nextbutton);

const slide = document.querySelector(".slide");

const slideContainer = document.querySelector(".slider__container");

// Eventlistener til previous og next buttons:
previousbutton.addEventListener("click", goPrevious);
nextbutton.addEventListener('click', goNext);

// Event listener til piltaster (venstre og højre):
window.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "ArrowLeft") {
          goPrevious();
      } else if (event.key === "ArrowRight") {
          goNext();
      }
    },
    true,
  );
  

// Funktion som bliver kørt, når der skal gåes en slide frem:
function goNext(){
    const slidewidth = slide.clientWidth;
    console.log(slidewidth);
    console.log(slideContainer.scrollLeft);
    slideContainer.scrollLeft += slidewidth;
    console.log(slideContainer.scrollLeft);
    const numberOfSlides = document.querySelectorAll(".slide").length;
    console.log(numberOfSlides);

    if(slideContainer.scrollLeft === (slidewidth * (numberOfSlides - 1))) {
        console.log("sidste slide");
        slideContainer.scrollLeft = 0;
    }
};

// Funktion som bliver kørt, når der skal gåes en slide tilbage:
function goPrevious(){
    const slidewidth = slide.clientWidth;
    console.log(slidewidth);
    console.log(slideContainer.scrollLeft);
    slideContainer.scrollLeft -= slidewidth;
    console.log(slideContainer.scrollLeft);
};


/**
 * Opgave 1: 
 * Få slideren til at scrolle tilbage til start (1. slide), 
 * når der klikkes på nextbutton ved den sidste slide.
 */


/**CHECK linje 21-30 */

/**
 * Opgave 2: 
 * Anvend CSS Scroll Snap, så slideren 'snapper' til
 * at vise en hel slide på touch devices (og ikke stopper
 * midt i mellem to slides).
 * 
 * Ref. til CSS Scroll snap: 
 * https://web.dev/articles/css-scroll-snap
 */

/** css 21-33 */


/**
 * Opgave 3: 
 * Få slideren til at reagere på venstre og højre pil. Dvs. når
 * der klikkes på venstre piltast på tastaturet, så køres 
 * funktionen 'prevSlide()' og modsat for højre piltast.
 * 
 * Ref. KeyboardEvent - code:
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
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

