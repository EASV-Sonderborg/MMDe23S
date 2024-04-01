//button script
const button = document.querySelector(".backgroundButton");
button.addEventListener("click", () => {
  const colors = [["#45634c"], ["#6c365f"], ["#1b5469"], ["#a95340"]];
  const random = Math.floor(Math.random() * colors.length);
  const randomColor = colors[random];
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
});

//input/list script
const inputField = document.querySelector(".textInput");
const list = document.querySelector(".textList");
inputField.addEventListener("change", () => {
  console.log(inputField.value);
  const listItem = document.createElement("li");
  listItem.textContent = inputField.value;
  console.log(listItem);
  list.appendChild(listItem);
});
