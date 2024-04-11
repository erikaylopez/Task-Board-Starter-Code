// import { renderTaskList } from './renderTaskList.js';
// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const timestamp = new Date().getTime(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    return `${timestamp}-${randomNum}`;
}


// Todo: create a function to create a task card
function createTaskCard(task) {
    const card = document.createElement('div');
    card.classList.add('task-card');

    const title = document.createElement('h3');
    title.textContent = task.title;

    const description = document.createElement('p');
    description.textContent = task.description;

    const deadline = document.createElement('p');
    deadline.textContent = 'Deadline: ' + task.deadline;

    // Append elements to the card
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(deadline);

    return card;
}

function createTaskCards() {
    const taskCards = [];
    for (let i = 0; i < taskList.length; i++) {
        const task = taskList[i];
        const card = createTaskCard(task);
        taskCards.push(card);
    }
    return taskCards;
}


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

    const taskContainer = document.getElementById('task-container');

    // Clear existing content in the task container
    taskContainer.innerHTML = '';

    // Loop through the tasks and create draggable task cards
    tasks.forEach((task, index) => {
        const taskCard = createTaskCard(task);
        taskCard.setAttribute('draggable', 'true');
        taskCard.setAttribute('id', `task-${index}`);

        // Add drag event listeners
        taskCard.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });

        taskContainer.appendChild(taskCard);
    });

    // Add drop event listener to the task container
    taskContainer.addEventListener('drop', (event) => {
        event.preventDefault();
        const taskId = event.dataTransfer.getData('text/plain');
        const draggedTask = document.getElementById(taskId);
        event.target.appendChild(draggedTask);
    });

    taskContainer.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
}

// Example task list
const tasks = [
    { title: 'Task 1', description: 'Description for Task 1', deadline: '2022-12-31' },
    { title: 'Task 2', description: 'Description for Task 2', deadline: '2022-12-31' },
    { title: 'Task 3', description: 'Description for Task 3', deadline: '2022-12-31' }
];
// Render the task list with draggable cards
function renderTaskList(tasks) {
    const taskList = document.getElementById('task-list');



    // Loop through each task and create a list item for it
    tasks.forEach(task => {
        const li = document.createElement('li');

        // You can add more details to the list item if needed
        li.textContent = `${task.title} - ${task.description} - ${task.deadline}`;

        taskList.appendChild(li);
    });
  }
// Todo: create a function to handle adding a new task
function handleAddTask(event){
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form input values
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const deadline = document.getElementById('task-deadline').value;

    // Create a new task object
    const newTask = {
            title: title,
            description: description,
            deadline: deadline
    };


    // Add the new task to the tasks array
    tasks.push(newTask);

    // Render the updated task list
    renderTaskList(tasks);

    // Save the updated task list and nextId to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("nextId", nextId);
}


// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const taskId = ui.draggable.attr('id');
    const newStatus = event.target.id;

    // Update the status of the task
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].status = newStatus;
    }

    // Render the updated task list
    renderTaskList();

    // Save the updated task list to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
window.addEventListener('DOMContentLoaded', function () {
    renderTaskList(tasks);
    document.getElementById('add-task-form').addEventListener('submit', handleAddTask);
    const statusLanes = document.querySelectorAll('.status-lane');
    statusLanes.forEach(lane => {
        lane.addEventListener('drop', handleDrop);
    });
    const deadlineInput = document.getElementById('task-deadline');
    deadlineInput.addEventListener('focus', function () {
        this.type = 'date';
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
     
});
