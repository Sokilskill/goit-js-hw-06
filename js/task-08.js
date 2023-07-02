const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" && password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else if (email.value === "") {
    return alert("Поле Email не може бути пустим");
  } else if (password.value === "") {
    return alert("Поле Password не може бути пустим");
  } else if (password.value.length < 6) {
    return alert("Пароль повин бути не менше 6 символів!");
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);

  event.currentTarget.reset();
}
