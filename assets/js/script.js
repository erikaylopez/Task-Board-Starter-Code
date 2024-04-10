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
    const newTask = {
        title: title,
        description: description,
        deadline: deadline
    };
    console.log(result)
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList(task) {
    const taskContainer = document.getElementById('task-container');
    
    // Clear existing content in the task container
    taskContainer.innerHTML = '';

    // Iterate over the tasks and render task cards
    tasks.forEach(task => {
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
function handleAddTask(event){
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const deadline = document.getElementById('task-deadline').value;
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
   
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
    }

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    $(".status-lane").droppable({
        accept: ".task",
        drop: function(event, ui) {
            const task = ui.draggable;
            const newStatus = $(this).attr('id');
            
            // Update task's progress state
            updateTaskProgress(taskId, newTask);
        }
    });
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
   // Retrieve tasks from localStorage
   const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

   // Select the container where tasks will be displayed
   const taskContainer = $('.task-list');

   // Clear existing tasks to avoid duplication
   taskContainer.empty();

   // Loop through the tasks and render them on the page
   tasks.forEach(task => {
       const taskElement = $('<div class="task"></div>').text(task.name);
       taskContainer.append(taskElement);
   });
});

function addTaskListeners() {
    // Add task button listener
    $('#add-task-btn').on('click', function() {
        const taskName = $('.task-name').val();
        // Add logic to create a new task with the entered name and save it
        // Then re-render the task list
        renderTaskList();
    });

    // Task item click listener (example)
    $('.task').on('click', function() {
        // Add logic to handle task item click event
    });

}
function renderTaskList() {
    // Retrieve tasks from localStorage or initialize an empty array if no tasks are found
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Select the task list container where tasks will be displayed
    const taskListContainer = $('.task-list');

    // Clear the existing task list to avoid duplication
    taskListContainer.empty();

    // Loop through the tasks and create HTML elements to display each task
    tasks.forEach(task => {
        const taskElement = $('<div class="task"></div>').text(task.name);

        // Add any additional task information or styling as needed
        // For example, you can add a due date or status indicator to the task element

        // Append the task element to the task list container
        taskListContainer.append(taskElement);
    });
}

function addTaskListeners() {
    // Add event listener for adding a new task
    $('#add-task-btn').on('click', function() {
        const taskName = $('.task-name').val();
        // Add logic to create a new task with the entered name and save it
        // Then re-render the task list
        renderTaskList();
    });

    // Event listener for clicking on a task item
    $('#task-list').on('click', '.task', function() {
        const taskId = $(this).data('task-id');
        // Add logic to handle the click event for the specific task
    });

    // Other task-related event listeners can be added here
}

function makeLanesDroppable() {
    // Make status lanes droppable
    $('.status-lane').droppable({
        accept: '.task',
        drop: function(event, ui) {
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

formalmodal.onclick = function() {
    modal.style.display = 'block';
}

closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Handle form submission
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskName = document.getElementById('taskName').value;
  // Add logic to create a new task with the entered name and save it
  // Then close the modal and re-render the task list
  modal.style.display = 'none';
  renderTaskList();
});