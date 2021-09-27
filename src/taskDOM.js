import {updateTask, addTaskToList, tasks} from './taskmaker';
export {inputNewTask, updateTaskList};

const addTaskBtn = document.getElementById('addTaskBtn');
const taskFormOrList = document.getElementById('taskFormOrList');

function inputNewTask() {
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

    /* Set up the basic stuff and then you can add a description and priority
    let taskDescription = document.createElement('input');
    taskDescription.setAttribute('type', 'text');
    let taskPriority = document.createElement('input');
    taskPriority.setAttribute('type', 'button');
    */
    
    let submitTask = document.createElement('input');
    submitTask.setAttribute('type', 'submit');
    submitTask.setAttribute('value', 'Add');
    submitTask.classList.add('taskButton');
    submitTask.setAttribute('id', 'submitTask');

    let cancelTask = document.createElement('input');
    cancelTask.setAttribute('type', 'reset');
    cancelTask.setAttribute('value', 'Cancel');
    cancelTask.classList.add('taskButton');
    cancelTask.setAttribute('id', 'cancelTask');

    taskForm.appendChild(taskName);
    taskForm.appendChild(dueDate);

    //taskForm.appendChild(taskDescription);
    //taskForm.appendChild(taskPriority);

    taskForm.appendChild(submitTask);
    taskForm.appendChild(cancelTask);

    taskFormOrList.appendChild(taskForm);

    addTaskToList();
}

function updateTaskList(tasks){

    while (taskFormOrList.firstChild){
        taskFormOrList.removeChild(taskFormOrList.lastChild);
    }

    for (let i = 0; i < tasks.length; i++){
        let fullTask = document.createElement('div');
        fullTask.setAttribute('class', 'fullTask');

        let checkTask = document.createElement('input');
        checkTask.setAttribute('type', 'checkbox');
        checkTask.classList.add('checkTask');
        checkTask.setAttribute('id', 'check' + i);
        
        let taskName = document.createElement('p');
        taskName.setAttribute('class', 'taskName');
        taskName.setAttribute('id', 'taskName' + i);
        taskName.innerHTML = tasks[i].title;

        let dueDate = document.createElement('p')
        dueDate.setAttribute('class', 'dueDate');
        dueDate.setAttribute('id', 'dueDate' + i);
        dueDate.innerHTML = tasks[i].duedate;

        if (tasks[i].done == false){
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
        deleteTask.setAttribute('id', 'delete' + i);

        let editTask = document.createElement('input');
        editTask.setAttribute('type', 'button');
        editTask.setAttribute('value', 'Edit');
        editTask.setAttribute('class', 'editTask');
        editTask.setAttribute('id', 'edit' + i);

        fullTask.appendChild(checkTask);
        fullTask.appendChild(taskName);
        fullTask.appendChild(dueDate);
        fullTask.appendChild(deleteTask);
        fullTask.appendChild(editTask);
        taskFormOrList.appendChild(fullTask);
    }
    
    addTaskBtn.style.display = '';
}


