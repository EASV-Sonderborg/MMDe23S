// Opgave A
const colors = ["#2DA4BF", "#64BF2D", "#FFBC3F", "#FF3F8E"];

const changeColor = document.querySelectorAll(".changeColor");
const body = document.body;

changeColor.forEach(function (button) {
  button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * colors.length);

    body.style.backgroundColor = colors[randomIndex];
  });
});

// Opgave B
const textInputs = document.querySelectorAll(".textInput");
const lists = document.querySelectorAll(".list");

textInputs.forEach(function (textInput, index) {
  textInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const text = textInput.value;

      const listItem = document.createElement("li");
      listItem.textContent = text;

      lists[index].appendChild(listItem);

      textInput.value = "";
    }
  });
});
