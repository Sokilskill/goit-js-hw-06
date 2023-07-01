const decrement = document.querySelector('button[data-action = "decrement"]');
const increment = document.querySelector('button[data-action = "increment"]');
const counterValue = document.querySelector("#value");
let counter = 0;

// decrement.addEventListener("click", handleClickDecrement);

// increment.addEventListener("click", handleClickIncrement);

// function handleClickDecrement() {
//   counter -= 1;
//   counterValue.textContent = counter;
// }

// function handleClickIncrement() {
//   counter += 1;
//   counterValue.textContent = counter;
// }

//============анонімна функція============
decrement.addEventListener("click", () => {
  counter -= 1;
  counterValue.textContent = counter;
});

increment.addEventListener("click", () => {
  counter += 1;
  counterValue.textContent = counter;
});
