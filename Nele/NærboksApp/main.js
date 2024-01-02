function changePageContent(currentPageNumber) { // 0
    var pageContent = document.getElementsByClassName("pageContent")
    pageContent[currentPageNumber].classList.add("pageContent--inactive")
    pageContent[currentPageNumber + 1].classList.remove("pageContent--inactive")

    var progressBar__dot = document.getElementsByClassName("progressBar__dot")
    progressBar__dot[currentPageNumber + 1].classList.add("progressBar__dot--active")

    var progressBar__image = document.getElementsByClassName("progressBar__image")

    if(currentPageNumber == 0) {
        progressBar__image[0].classList.add("progressBar__image--position2")
    }

    if(currentPageNumber == 1) {
        progressBar__image[0].classList.replace("progressBar__image--position2","progressBar__image--position3")
    }
}

function menuActive() {
    var body = document.body
    body.classList.toggle("menu--active")

    var backgroundMenu = document.getElementsByClassName("background__sky")
    backgroundMenu [0].classList.toggle("background__sky--menu")
}

function changeReturnStepContent(currentPageNumber) {
    var returnStepContent = document.getElementsByClassName("returnStepContent")
    returnStepContent [currentPageNumber].classList.add("returnStepContent--inactive")
    returnStepContent [currentPageNumber + 1].classList.remove("returnStepContent--inactive")
}

function returnInputExpand(currentField) {
    var returnInputExpand = document.getElementsByClassName("return__input--expandable")
    returnInputExpand[0].classList.toggle("return__input--active")

    var savedAdress = document.getElementsByClassName("input__adress")
    savedAdress[0].classList.remove("input__item--inactive")
    savedAdress[1].classList.remove("input__item--inactive")
    savedAdress[2].classList.remove("input__item--inactive")


    returnInputExpand[1].classList.toggle("return__input--active")

    var boxSize = document.getElementsByClassName("input__boxSize")
    boxSize[0].classList.remove("input__item--inactive")
    boxSize[1].classList.remove("input__item--inactive")
    boxSize[2].classList.remove("input__item--inactive")
}

function changeCurrentAdress(number) {
    var returnInputExpand = document.getElementsByClassName("return__input--expandable")
    returnInputExpand[0].classList.toggle("return__input--active")
    
    var savedAdress = document.getElementsByClassName("input__adress")
    
    if (1 == number) {
        savedAdress[1].classList.add("input__item--inactive")
        savedAdress[2].classList.add("input__item--inactive")
        savedAdress[3].classList.add("input__item--inactive")
    }
    if (2 == number) {
        savedAdress[0].classList.add("input__item--inactive")
        savedAdress[2].classList.add("input__item--inactive")
        savedAdress[3].classList.add("input__item--inactive")
    }
    if (3 == number) {
        savedAdress[0].classList.add("input__item--inactive")
        savedAdress[1].classList.add("input__item--inactive")
        savedAdress[3].classList.add("input__item--inactive")
    }
    if (4 == number) {
        savedAdress[0].classList.add("input__item--inactive")
        savedAdress[1].classList.add("input__item--inactive")
        savedAdress[2].classList.add("input__item--inactive")
    }
}
    
function showMap() {
    var map = document.getElementsByClassName("returnStep2__addAdress")
    map[0].classList.toggle("returnStep2__addAdress--active")
}

function showMapAdress() {
    var mapAdress = document.getElementsByClassName("returnStep2__mapAdress")
    mapAdress[0].classList.add("returnStep2__mapAdress--active")

   var map = document.getElementsByClassName("returnStep2__map")
   map[0].classList.add("map--active")
}

function addAdress() {
    var savedAdress = document.getElementsByClassName("input__adress")
    savedAdress[3].classList.remove("input__item--inactive")
    savedAdress[0].classList.add("input__item--inactive")
    savedAdress[1].classList.add("input__item--inactive")
    savedAdress[2].classList.add("input__item--inactive")

    var input__line = document.getElementsByClassName("input__line")
    input__line[2].classList.remove("input__line--inactive")

    var map = document.getElementsByClassName("returnStep2__addAdress")
    map[0].classList.remove("returnStep2__addAdress--active")
}

function boxSizeAvailability(boxSize) {
    var availability = document.getElementsByClassName("boxSize__availability")
    
    var returnInputExpand = document.getElementsByClassName("return__input--expandable")
    returnInputExpand[1].classList.toggle("return__input--active")

    var changeBoxSize = document.getElementsByClassName("input__boxSize")
    
    if ("S" == boxSize) {
        changeBoxSize[0].classList.remove("input__item--inactive")
        changeBoxSize[1].classList.add("input__item--inactive")
        changeBoxSize[2].classList.add("input__item--inactive")
    }
    if ("M" == boxSize) {
        changeBoxSize[0].classList.add("input__item--inactive")
        changeBoxSize[1].classList.remove("input__item--inactive")
        changeBoxSize[2].classList.add("input__item--inactive")
    }
    if ("L" == boxSize) {
        changeBoxSize[0].classList.add("input__item--inactive")
        changeBoxSize[1].classList.add("input__item--inactive")
        changeBoxSize[2].classList.remove("input__item--inactive")

        availability[0].classList.add("boxSize__availability--inactive")
        availability[1].classList.remove("boxSize__availability--inactive")
    }
}