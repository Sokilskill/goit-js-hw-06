const input = document.getElementById("validation-input");
const validationLength = parseInt(input.dataset.length);

input.addEventListener("blur", onBlur);

function onBlur() {
  if (validationLength === input.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  console.log(input.value.length, validationLength);
}
