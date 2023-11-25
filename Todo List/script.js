
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <div class="button-container">
                <button class="edit-btn" onclick="editTask(this)">Edit</button>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}
function editTask(button) {
    const listItem = button.parentElement.parentElement;
    const taskTextElement = listItem.querySelector('span');
    const currentText = taskTextElement.textContent;
    const newText = prompt('Edit task:', currentText);
    if (newText !== null) {
        taskTextElement.textContent = newText;
    }
}
function deleteTask(button) {
    const listItem = button.parentElement.parentElement;
    taskList.removeChild(listItem);
}
