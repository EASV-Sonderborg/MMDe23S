function changePageContent(currentPageNumber) { // 0
    var pageContentProgress = document.getElementsByClassName("pageContent--progress")
    pageContentProgress[currentPageNumber].classList.add("pageContent--inactive")
    pageContentProgress[currentPageNumber + 1].classList.remove("pageContent--inactive")

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