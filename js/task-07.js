const input = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

input.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  spanText.style.fontSize = `${value}px`;
  //   console.dir(spanText.style.fontSize);
});
