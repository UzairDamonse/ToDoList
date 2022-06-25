const submitForm = document.getElementById("submit");
submitForm.addEventListener("click", () => {
  alert("Form successfully submitted");
});

const description = document.getElementById("description").value,
  addTask = document.getElementById("addTask"),
  saveTask = document.getElementById("saveToDo"),
  itemContainer = document.getElementById("taskBorder"),
  saveIndex = document.getElementById("saveIndex");

let items = [];

addTask.addEventListener("click", (e) => {
  let toDo = localStorage.getItem("toDo");
  if (toDo === null) {
    items = [];
  } else {
    items = JSON.parse(toDo);
  }

  items.push(description);
  description.value = "";
  localStorage.setItem("toDO", JSON.stringify(items));
  showItems(items);
});

function showItems(items) {
  let toDo = localStorage.getItem("toDo");
  if (toDo === null) {
    items = [];
  } else {
    items = JSON.parse(toDo);
  }

  itemContainer.innerHTML = "";
  items.forEach((item, ind) => {
    itemContainer.innerHTML += `
        <div
          id="itemContainer"
          class="d-flex justify-content-between align-items-center m-4 border w-75"
        >
          <input type="checkbox" name="completed" id="completed" class="ms-3" />
          <h4 id="description">${item.description}</h4>
          <div>
            <i class="fa-solid fa-pencil" onclick='edit(${ind})'></i>
            <i class="fa-solid fa-ban me-3" onclick='deleteTask(${ind})'></i>
          </div>
        </div>

    `;
  });
}
console.log(showItems(items));
