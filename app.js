// defining UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
    // add task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask );
    // clear task event
    clearBtn.addEventListener('click', clearTasks);
    // filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }
    // create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class ="fa fa-remove"></i>';
    // append the link to the li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);
    // clear input
    taskInput.value = '';

    e.preventDefault(); // prevent form submit
}

// remove task
function removeTask (e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}

// clear tasks
function clearTasks() {
   taskList.innerHTML = '';
}

// filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.getElementsByClassName.display = 'block';
            } else {
                task.getElementsByClassName.display = 'none';

            }
        }
    );
}