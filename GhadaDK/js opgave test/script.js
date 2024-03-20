const changeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const colors = ["white", "blue", "black", "red"];
changeColor.addEventListener("click", () => {
  body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});

const inputText = document.querySelector(".inputText");
const itemList = document.querySelector(".itemList");

inputText.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const createdLi = document.createElement("li");
    const li = itemList.appendChild(createdLi);
    li.innerText = inputText.value;
  }
});
