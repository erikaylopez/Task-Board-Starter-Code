// Todo: create a function to generate a unique task id
function generateTaskId() {
    const timestamp = new Date().getTime(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    return `${timestamp}-${randomNum}`;
}


// Todo: create a function to create a task card
function createTaskCard(_task) {
    console.log(result)
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList(_task) {
    const taskContainer = document.getElementById('task-container');

    // Clear existing content in the task container
    taskContainer.innerHTML = '';

    // Iterate over the tasks and render task cards
    _task.forEach(task => {
        const taskCard = createTaskCard(task);
        taskContainer.appendChild(taskCard);
    });
}

function createTaskCard(task) {
    const card = document.createElement('div');
    card.classList.add('task-card');

    const title = document.createElement('h2');
    title.textContent = task.title;

    const description = document.createElement('div');
    description.textContent = task.description;

    const deadline = document.createElement('');
    deadline.textContent = 'Deadline: ' + task.deadline;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(deadline);

    return card;
}

// Todo: create a function to handle adding a new task
function handleAddTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    // Create a new task object
    const newTask = {
        id: generateTaskId(),
        title: taskName,
        description: taskDescription,
        deadline: taskDeadline
    };

    // Add the new task to the task list
    (JSON.parse(localStorage.getItem("tasks"))).push(newTask);

    // Update the nextId value
    nextId++;

    // Save the updated task list and nextId to localStorage
    localStorage.setItem("tasks", JSON.stringify(JSON.parse(localStorage.getItem("tasks"))));
    localStorage.setItem("nextId", JSON.stringify(nextId));

    // Render the updated task list
    renderTaskList(JSON.parse(localStorage.getItem("tasks")));
}

// Call the handleAddTask function when the add task button is clicked
document.getElementById('add-task-btn').addEventListener('click', handleAddTask);

    // Get the task card element that triggered the delete event
    const taskCard = event.target.closest('.task-card');

    if (taskCard) {
        // Get the task ID from a data attribute or any unique identifier
        const taskId = taskCard.getAttribute('data-task-id');

        // Find the index of the task in the tasks array
        const taskIndex = tasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {
            // Remove the task from the tasks array
            tasks.splice(taskIndex, 1);

            // Update the displayed task list
            renderTaskList(tasks);
        }
    }
// Todo: create a function to handle dropping a task into a new status lane
function handleDrop() {
    $(".status-lane").droppable({
        accept: ".task",
        drop: function (_event) {
            const newStatus = $(this).attr('id');
            // Get the task ID from the dropped task element
            const taskId = task.attr('data-task-id');

            // Find the task in the task list
            const droppedTask = (JSON.parse(localStorage.getItem("tasks"))).find(task => task.id === taskId);

            // Update the task's status to the new status
            droppedTask.status = newStatus;

            // Save the updated task list to localStorage
            localStorage.setItem('tasks', JSON.stringify(JSON.parse(localStorage.getItem("tasks"))));

            // Render the updated task list
            renderTaskList(JSON.parse(localStorage.getItem("tasks")));
            // Update task's progress state
            updateTaskProgress(taskId, newTask);
        }
    });
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // Retrieve tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render the initial task list
    renderTaskList(tasks);

    // Clear existing tasks to avoid duplication
    taskContainer.empty();

    // Loop through the tasks and render them on the page
    tasks.forEach(task => {
        const taskElement = $('<div class="task"></div>').text(task.name);
        taskContainer.append(taskElement);
    });
});

function addTaskListeners() {
    // Add event listener for adding a new task
    $('#add-task-btn').on('click', function () {
        // Add logic to create a new task with the entered name and save it
        // Then re-render the task list
        renderTaskList();
    });

    // Event listener for clicking on a task item
    $('#task-list').on('click', '.task', function () {
        // Add logic to handle the click event for the specific task
    });

    // Other task-related event listeners can be added here
}

function makeLanesDroppable() {
    // Make status lanes droppable
    $('.status-lane').droppable({
        accept: '.task',
        drop: function (event, ui) {
            const task = ui.draggable;
            const newStatus = $(this).data('status');

            // Update task's status and re-render the task list
            updateTaskStatus(task, newStatus);
            renderTaskList();
        }
    });
}

function updateTaskStatus(task, newStatus) {
    // Update the task's status in your data model or localStorage
    // For example, update the task object with the new status
    task.data('status', newStatus);
}

// Get the modal element
const modal = document.getElementById('taskModal');

// Get the button that opens the modal
const openBtn = document.getElementById('open');

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal

modal.style.display = 'block'; {

}
// Add event listeners and initialize the page
addTaskListeners();
makeLanesDroppable();
renderTaskList();

// Initialize date picker for deadline field
$(function() {
    $("#task-deadline").datepicker();
});
closeModalBtn.onclick = function () {
    modal.style.display = 'none';
}
formalmodal.onclick = function () {
}
    // Add this closing brace to complete the function block

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Handle form submission
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskName = document.getElementById('taskName').value;
    // Add logic to create a new task with the entered name and save it
    // Then close the modal and re-render the task list
    modal.style.display = 'none';
    renderTaskList();
});