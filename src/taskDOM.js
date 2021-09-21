export default function inputNewTask (){
    let taskForm = document.createElement('form');

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

    taskForm.appendChild(taskName);
    taskForm.appendChild(dueDate);

    //taskForm.appendChild(taskDescription);
    //taskForm.appendChild(taskPriority);

    taskForm.appendChild(submitTask);

    return taskForm;
}

