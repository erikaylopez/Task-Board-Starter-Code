$(document).ready(function() {
    // Use Bootstrap's modal method to show/hide the modal
    $("#add-task-btn").click(function() {
        $("#taskModal").modal('show');
    });

    // Function to refresh draggable and droppable behaviors
    function refreshDragAndDrop() {
        // Making the new task draggable
        $(".task-card").draggable({
            containment: "#taskContainer",
            cursor: "move",
            revert: "invalid",
            start: function(event, ui) {
                $(this).css("z-index", 1000); // Increase z-index when dragging starts
            },
            stop: function(event, ui) {
                $(this).css("z-index", "auto"); // Reset z-index when dragging stops
            }
        });

<<<<<<< HEAD
        // Making the lanes droppable
        $(".lane .card-body").droppable({
            accept: ".task-card",
            drop: function(event, ui) {
                ui.draggable.detach().css({top: 0, left: 0}).appendTo($(this)); // Reset position and move to new container
            }
        });
=======
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
    localStorage.setItem("nextId", JSON.stringify(nextId));
}


// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const taskId = ui.draggable.attr('id');
    const newStatus = event.target.id;

    // Update the status of the task
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].status = newStatus;
>>>>>>> 562935aa7467b0b164fdf49be57092140a64ab40
    }

    // Adjusting the form submission to create a task with Bootstrap styling
    $("#task-form").submit(function(e) {
        e.preventDefault(); // Prevent the form from submitting in the traditional way

        var title = $("#task-title").val();
        var description = $("#task-description").val();
        var deadline = $("#task-deadline").val();

        // Creating a new Bootstrap styled task card
        var taskCard = $(`
            <div class="card draggable task-card mt-2" style="cursor: grab;">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <p class="card-text"><small class="text-muted">Due: ${deadline}</small></p>
                </div>
            </div>
        `);

        // Append the new card to the "To Do" column
        $("#todo-cards").append(taskCard);

        // Refresh draggable and droppable for all elements
        refreshDragAndDrop();

        $("#taskModal").modal('hide'); // Hide the modal after adding the task
    });

    // Initial call to make existing and future elements draggable and droppable
    refreshDragAndDrop();
});