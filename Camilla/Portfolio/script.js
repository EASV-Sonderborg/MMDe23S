const goLiveButton = document.querySelector(".goLive__button");
const main = document.querySelector(".main");

goLiveButton.addEventListener("click", () => {
    main.classList.add("active");
})

const closeMenu = document.querySelector(".navBar__button");

closeMenu.addEventListener("click", () => {
    main.classList.remove("active");
})