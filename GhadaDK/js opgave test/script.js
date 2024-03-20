const changeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const colors = ["white", "blue", "black", "red"];
console.log(changeColor);
changeColor.addEventListener("click", () => {
  body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});

const inputText = document.querySelector(".inputText");
const itemList = document.querySelector(".itemList");

inputText.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    itemList.appendChild("li");
    itemList.querySelector("li").innerText = inputText.value;
  }
});
