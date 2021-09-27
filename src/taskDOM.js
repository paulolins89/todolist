import {updateTask, addTaskToList, tasks} from './taskmaker';
export {inputNewTask, updateTaskList, editTask};

const addTaskBtn = document.getElementById('addTaskBtn');
const taskFormOrList = document.getElementById('taskFormOrList');

function makeTask(taskID){
    let fullTask = document.createElement('div');
    fullTask.setAttribute('class', 'fullTask');

    let checkTask = document.createElement('input');
    checkTask.setAttribute('type', 'checkbox');
    checkTask.classList.add('checkTask');
    checkTask.setAttribute('id', 'check' + taskID);
    
    let taskName = document.createElement('p');
    taskName.setAttribute('class', 'taskName');
    taskName.setAttribute('id', 'taskName' + taskID);
    taskName.innerHTML = tasks[taskID].title;

    let dueDate = document.createElement('p')
    dueDate.setAttribute('class', 'dueDate');
    dueDate.setAttribute('id', 'dueDate' + taskID);
    dueDate.innerHTML = tasks[taskID].duedate;

    if (tasks[taskID].done == false){
        taskName.classList.remove('checked');
        dueDate.classList.remove('checked');
        checkTask.checked = false;
    }else{
        taskName.classList.add('checked');
        dueDate.classList.add('checked');
        checkTask.checked = true;
    }

    let deleteTask = document.createElement('input');
    deleteTask.setAttribute('type', 'button');
    deleteTask.setAttribute('value', 'Delete');
    deleteTask.setAttribute('class', 'deleteTask');
    deleteTask.setAttribute('id', 'delete' + taskID);

    let editTask = document.createElement('input');
    editTask.setAttribute('type', 'button');
    editTask.setAttribute('value', 'Edit');
    editTask.setAttribute('class', 'editTask');
    editTask.setAttribute('id', 'edit' + taskID);

    fullTask.appendChild(checkTask);
    fullTask.appendChild(taskName);
    fullTask.appendChild(dueDate);
    fullTask.appendChild(deleteTask);
    fullTask.appendChild(editTask);
    taskFormOrList.appendChild(fullTask);
}

function makeForm(taskID){
    addTaskBtn.style.display = 'none';

    let taskForm = document.createElement('form');
    taskForm.setAttribute('id', 'taskForm');

    let taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('id', 'taskName');
    taskName.setAttribute('required', 'required');

    let dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('id', 'dueDate');

    let taskDescription = document.createElement('input');
    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('id', 'taskDescription');
    
    //let taskPriority = document.createElement('input');
    //taskPriority.setAttribute('type', 'dropdown');
    
    
    let submitTask = document.createElement('input');
    submitTask.setAttribute('type', 'submit');
    submitTask.setAttribute('value', 'Add');
    submitTask.classList.add('taskButton');
    submitTask.setAttribute('id', 'submitTask' + taskID);

    let cancelTask = document.createElement('input');
    cancelTask.setAttribute('type', 'reset');
    cancelTask.setAttribute('value', 'Cancel');
    cancelTask.classList.add('taskButton');
    cancelTask.setAttribute('id', 'cancelTask');

    taskForm.appendChild(taskName);
    taskForm.appendChild(dueDate);
    taskForm.appendChild(taskDescription);

    //taskForm.appendChild(taskPriority);

    taskForm.appendChild(submitTask);
    taskForm.appendChild(cancelTask);

    taskFormOrList.appendChild(taskForm);
}

function inputNewTask(taskID) {
    makeForm(taskID);
    addTaskToList(taskID);
}

function updateTaskList(tasks){
    clearFormOrList();
    for (let i = 0; i < tasks.length; i++){
        makeTask(i);
    }
    addTaskBtn.style.display = '';
}

function editTask (tasks, taskID){
    clearFormOrList();
    for (let i = 0; i < tasks.length; i++){
        if (i == taskID){
            makeForm();
            taskName = document.getElementById('taskName');
            taskName.setAttribute('value', tasks[taskID].title);
            dueDate = document.getElementById('dueDate');
            dueDate.setAttribute('value', tasks[taskID].duedate);
            taskDescription = document.getElementById('taskDescription');
            taskDescription.setAttribute('value', tasks[taskID].description);
        }else{
            makeTask(i);
        }
    }
    addTaskToList(taskID);
}

function clearFormOrList(){
    while (taskFormOrList.firstChild){
        taskFormOrList.removeChild(taskFormOrList.lastChild);
    }
}
