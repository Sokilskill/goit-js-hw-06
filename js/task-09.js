function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btnChangeEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

btnChangeEl.addEventListener("click", btnChangeHandler);

function btnChangeHandler() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  textEl.textContent = randomColor;
  // console.log(randomColor);
}
