import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { createTask, getTasksList } from "./tasksGateway.js";
export var onCreateTask = function onCreateTask() {
  var taskTitleInputElem = document.querySelector(".task-input");
  var text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = "";
  var newTask = {
    text: text,
    done: false,
    createDate: new Date().toISOString(),
    doneDate: null
  };
  createTask(newTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem("tasksList", newTasksList);
    renderTasks();
  });
}; //1. Prepare data
//2. Load data to database
//3. Read new data from database
//4. Save new data to front-end storage
//5. Update user interface (UI) based on new data