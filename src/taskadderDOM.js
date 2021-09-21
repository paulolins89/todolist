export default function removeTaskForm(tasks){
    let taskForm = document.getElementById('taskForm');
    let taskcontainer = document.getElementById('taskcontainer');
    taskcontainer.removeChild(taskForm);
}