const list = document.getElementById("categories");
const items = list.querySelectorAll("li.item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  console.log(
    `Category: ${item.querySelector("h2").textContent}\nElements: ${
      item.querySelectorAll("li").length
    }`
  );
});
