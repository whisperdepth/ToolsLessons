import onCreateTask from './createTask';
import onToggleTask from './updateTask';
import onDeleteTask from './deleteTask';

export default () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
  todoListElem.addEventListener('click', onDeleteTask);
};
