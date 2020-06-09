import { setItem } from './storage';
import { deleteTask, getTasksList } from './tasksGateway';

import renderTasks from './renderer';

export default (e) => {
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (!isDeleteBtn) return;

  const taskId = e.target
    .closest('.list-item')
    .querySelector('.list-item__checkbox').dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
