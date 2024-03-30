//Code to clone the product cards into the orderlist
//Eventlisteners for all "add to order" buttons

const addToOrder = document.querySelectorAll(".button__addToOrder");

addToOrder.forEach((addButtons) => {
  addButtons.addEventListener("click", () => {
    const product = addButtons.parentNode;
    makeOrderItem(product);
  });
});

//add the function the eventlisteners need to run
function makeOrderItem(product) {
  //create a clone of the product card
  const orderItem = product.cloneNode(true);
  //where to place the items
  const orderItems = document.querySelector(".section--big");
  orderItems.appendChild(orderItem);
}

//Navigation, open the orders
const orders = document.querySelector(".orders");
const ordersIcon = document.querySelector(".ordersIcon");
const menuItems = document.querySelectorAll(".menuItem__link");

ordersIcon.addEventListener("click", openMenu);
menuItems.forEach((n) => n.addEventListener("click", closeMenu));

function openMenu() {
  //open the menu by clicking the "order" link
  orders.classList.toggle("active");
}

function closeMenu() {
  //close menu when any other link is pressed
  orders.classList.remove("active");
}

//nav burger bar

const hamburger = document.querySelector(".hamburger"); //div
const navMenu = document.querySelector(".navbar__menu"); //ul with all menu links
const navLink = document.querySelectorAll(".menuItem__link"); //a: all links in menu

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  //open and close menu in mobile
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  //when a menu item (a) is clicked, the mobile menu is deactivated
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
