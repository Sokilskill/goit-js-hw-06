const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");

// рішення за допомогою map
const listIngredients = ingredients.map((ingredient) => {
  const listIngredient = document.createElement("li");
  listIngredient.textContent = ingredient;
  listIngredient.classList.add("item");
  return listIngredient;
});
ul.append(...listIngredients);
console.log(listIngredients);
