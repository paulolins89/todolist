import updateTaskList from './taskDOM';

function Task(title, duedate){
    this.title = title;
    this.duedate = duedate;
}

/*
function Project(name, tasks){
    this.name = name;
    this.tasks = tasks;
}
*/

let tasks = [];

export default function addTaskToList(){
    let submitTask = document.getElementById('submitTask');
    //later put logic in case person cancels
    submitTask.addEventListener('click', event =>{
        event.preventDefault;
        let taskInput = document.getElementById('taskName').value;
        let duedateInput = document.getElementById('dueDate').value;
        tasks.push(new Task(taskInput, duedateInput))
        updateTaskList(tasks);
    });
}
