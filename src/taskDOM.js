export default function inputNewTask (){
    let taskForm = document.createElement('div');

    let taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    let dueDate = document.createElement('input')
    dueDate.setAttribute('type', 'date');
    let taskDescription = document.createElement('input');
    taskDescription.setAttribute('type', 'text');
    let taskPriority = document.createElement('input');
    taskPriority.setAttribute('type', 'button');

    taskForm.appendChild(taskName);
    taskForm.appendChild(dueDate);
    taskForm.appendChild(taskDescription);
    taskForm.appendChild(taskPriority);

    return taskForm;
}

