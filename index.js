const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  alert("The form has been submitted");
});

const itemContainer = document.getElementById("taskBorder");

let items = [
  {
    id: 1,
    description: "add task",
    dateCreated: Date(),
    completed: false,
  },
];

function showItems(items) {
  itemContainer.innerHTML = "";

  items.forEach((item) => {
    itemContainer.innerHTML += `
        <div 
          id="itemContainer"
          class="d-flex justify-content-between align-items-center m-3 border w-75 col-md-12"
        >
          <input type="checkbox" name="completed" id="completed" class="ms-3" />
          <h4 id="description">${item.description}</h4>
          <div>
            <button onclick = 'editTask(id)'>
            <i class="fa-solid fa-pencil p-1"></i>
            </button>
            <button  onclick='deleteTask(id)'>
            <i class="fa-solid fa-ban p-1"></i>
            </button>
          </div>
        </div>

    `;
    console.log(`
    Task with ID of ${item.id} has been created on ${item.dateCreated}`);
  });
}
showItems(items);

const addTask = (e) => {
  const newTask = {
    id: items.length + 1,
    description: document.getElementById("description").value,
    dateCreated: Date(),
    completed: false,
  };
  items.push(newTask);
  showItems(items);
  console.log(items);
};

function deleteTask(id) {
  items = items.filter((item) => item.id !== id);
  showItems(items);
}

function editTask(id) {
  const editedDescription = prompt(
    "What would you like to change your task to?"
  );
  const item = items.find((item) => item.id === id);
  items.description = editedDescription.value;
  showItems(items);
}

const filteredTasks = (e) => {
  const Filter = e.target.value;
  description = document.querySelector("form input");
  const filterByName = items.sort((a, b) => {
    if (a.description.toLowerCase() < b.description.toLowerCase()) {
      return -1;
    }
    if (a.description.toLowerCase() > b.description.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  const filterByDate = items.sort((a, b) => {
    if (a.dateCreated < b.dateCreated) {
      return -1;
    }
    if (a.dateCreated > b.dateCreated) {
      return 1;
    }
    return 0;
  });

  if (Filter === "none") {
    return showItems(items);
  } else if (Filter === "nameAcsending") {
    return showItems(filterByName);
  } else if (Filter === "nameDescsending") {
    return showItems(filterByName.reverse);
  } else if (Filter === "dateAcsending") {
    return showItems(filterByDate);
  } else if (Filter === "dateDescsending") {
    return showItems(filterByDate.reverse);
  }
};
