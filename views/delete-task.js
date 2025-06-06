const addTaskForm = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('todo-list');

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();

    if (task) {
        const taskElement = document.createElement('li');
        taskElement.className = 'task-item';

        taskElement.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Eliminar</button>
        `;

        // Evento para eliminar la tarea
        taskElement.querySelector('.delete-btn').addEventListener('click', () => {
            taskList.removeChild(taskElement);
        });

        taskList.appendChild(taskElement);
        taskInput.value = '';
    }
});
