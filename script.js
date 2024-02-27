const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = inputBox.value;
    li.appendChild(taskText);

    let editSpan = document.createElement("span");
    editSpan.classList.add("edit-icon");
    editSpan.innerHTML = '<i class="fas fa-edit"></i>';
    editSpan.addEventListener("click", function () {
      let currentTaskText =
        this.parentElement.querySelector(".task-text").textContent;
      inputBox.value = currentTaskText;
      inputBox.focus();
      this.parentElement.remove(); // Remove the parent <li> element
    });
    li.appendChild(editSpan);

    let removeSpan = document.createElement("span");
    removeSpan.classList.add("remove-icon");
    removeSpan.innerHTML = '<i class="fas fa-times"></i>';
    removeSpan.addEventListener("click", function () {
      this.parentElement.remove(); // Remove the parent <li> element
    });
    li.appendChild(removeSpan);

    listContainer.appendChild(li);
  }
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    const clickedElement = e.target;
    if (clickedElement.tagName === "LI") {
      clickedElement.classList.toggle("checked");
    }
  },
  false
);
