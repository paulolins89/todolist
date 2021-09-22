import addTaskToList from './taskmaker';

const addTaskBtn = document.getElementById('addTaskBtn');
const taskFormOrList = document.getElementById('taskFormOrList');

export function inputNewTask (){
    addTaskBtn.style.display = 'none';

    let taskForm = document.createElement('form');
    taskForm.setAttribute('id', 'taskForm');

    let taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('id', 'taskName');
    taskName.required = true;

    let dueDate = document.createElement('input')
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('id', 'dueDate');

    /* Set up the basic stuff and then you can add a description and priority
    let taskDescription = document.createElement('input');
    taskDescription.setAttribute('type', 'text');
    let taskPriority = document.createElement('input');
    taskPriority.setAttribute('type', 'button');
    */
    
    let submitTask = document.createElement('input');
    submitTask.setAttribute('type', 'button');
    submitTask.setAttribute('value', 'Add');
    submitTask.setAttribute('id', 'submitTask');

    let cancelTask = document.createElement('input');
    cancelTask.setAttribute('type', 'button');
    cancelTask.setAttribute('value', 'Cancel');
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

export function updateTaskList(tasks){
    let taskForm = document.getElementById('taskForm');
    
    while (taskFormOrList.firstChild){
        taskFormOrList.removeChild(taskFormOrList.lastChild);
    }

    for (i = 0; i < tasks.length; i++){
        let fullTask = document.createElement('div');
        fullTask.setAttribute('class', 'fullTask');

        let checkTask = document.createElement('checkbox');
        checkTask.setAttribute('class', 'checkTask');
        
        let taskName = document.createElement('p');
        taskName.setAttribute('class', 'taskName');
        taskName.innerHTML = tasks[i].title;

        let dueDate = document.createElement('p')
        dueDate.setAttribute('class', 'dueDate');
        dueDate.innerHTML = tasks[i].dueDate;

        let deleteTask = document.createElement('input');
        deleteTask.setAttribute('type', 'button');
        deleteTask.setAttribute('value', 'Delete');
        deleteTask.setAttribute('class', 'deleteTask');

        fullTask.appendChild(checkTask);
        fullTask.appendChild(taskName);
        fullTask.appendChild(dueDate);
        fullTask.appendChild(deleteTask);
        taskFormOrList.appendChild(fullTask);
    }
    
    addTaskBtn.style.display = 'initial';
}


