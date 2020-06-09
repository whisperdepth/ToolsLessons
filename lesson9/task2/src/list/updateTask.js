import renderTasks from './renderer';
import { getItem, setItem } from './storage';
import { updateTask, getTasksList } from './tasksGateway';

export default (e) => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');

  if (!isCheckbox) return;

  const done = e.target.checked;
  const tasksList = getItem('tasksList');
  const taskId = e.target.dataset.id;
  const { text, createDate } = tasksList.find((task) => task.id === taskId);

  const updatedTask = {
    text,
    createDate,
    done,
    doneDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1. Prepare data
// 2. Update data in database
// 3. Read new data from database
// 4. Save new data to front-end storage
// 5. Update user interface (UI) based on new data
