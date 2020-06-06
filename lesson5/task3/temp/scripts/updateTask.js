import "core-js/modules/es.array.find";
import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList } from "./tasksGateway.js";
export var onToggleTask = function onToggleTask(e) {
  var isCheckbox = e.target.classList.contains("list-item__checkbox");
  if (!isCheckbox) return;
  var done = e.target.checked;
  var tasksList = getItem("tasksList");
  var taskId = e.target.dataset.id;

  var _tasksList$find = tasksList.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasksList$find.text,
      createDate = _tasksList$find.createDate;

  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    doneDate: done ? new Date().toISOString() : null
  };
  updateTask(taskId, updatedTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem("tasksList", newTasksList);
    renderTasks();
  });
}; //1. Prepare data
//2. Update data in database
//3. Read new data from database
//4. Save new data to front-end storage
//5. Update user interface (UI) based on new data