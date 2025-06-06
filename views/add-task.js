const addTaskForm = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('todo-list');

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
        const taskElement = document.createElement('li');
        taskElement.textContent = task;
        taskList.appendChild(taskElement);
        taskInput.value = '';
    }
});
