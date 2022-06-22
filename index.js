let ul = document.getElementById("list");

function collapse() {
  ul.classList.toggle("active");
}

const itemContainer = document.getElementById("body-container");
const items = JSON.parse(localStorage.getItem("items"))
  ? JSON.parse(localStorage.getItem("items"))
  : [];

function removeItem(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("items")));
  items.forEach((task) => {
    if (task.task === event.parentNode.children[1].value) {
      // Delete
      items.splice(items.indexOf(task), 1);
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
  event.parentElement.remove();
}

function showItems(items) {
  if (localStorage.getItem("items") == null) return;

  let items = Array.from(JSON.parse(localStorage.getItem("items")));

  tasks.forEach((task) => {});
}
