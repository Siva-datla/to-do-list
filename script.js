const taskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const procrastinateMsg = document.getElementById('procrastinate-msg');

// Add a new task when the "Add" button is clicked
addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Task cannot be empty!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">❌</button>
    `;

    listItem.querySelector('.delete-btn').addEventListener('click', () => {
        listItem.remove();
        checkProcrastination();
    });

    listItem.addEventListener('click', () => {
        listItem.classList.toggle('task-completed');
        checkProcrastination();
    });

    taskList.appendChild(listItem);
    taskInput.value = '';
    checkProcrastination();
});

// Function to show the procrastination message if no tasks remain
function checkProcrastination() {
    if (taskList.children.length === 0) {
        procrastinateMsg.classList.remove('hidden');
    } else {
        procrastinateMsg.classList.add('hidden');
    }
}
