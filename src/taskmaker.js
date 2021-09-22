import {inputNewTask, updateTaskList} from './taskDOM';
export {updateTask, addTaskToList, tasks};

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

function addTaskToList(){
    const taskButtons = document.querySelectorAll('.taskButton');
    //let submitTask = document.getElementById('submitTask');
    //let cancelTask = document.getElementById('cancelTask');
    //later put logic in case person cancels
    taskButtons.forEach((button) => {
        button.addEventListener('click', e => {
            console.log(e.target.id);
            if (e.target.id == 'submitTask'){
                let taskInput = document.getElementById('taskName').value;
                let duedateInput = document.getElementById('dueDate').value;
                tasks.push(new Task(taskInput, duedateInput));
            };
            updateTaskList(tasks);
        });
    });
}

function updateTask(tasks, event){
    console.log(event.target.id);
    if (event.target.className == 'deleteTask'){
        let targetIndex = parseFloat(event.target.id.slice(6));
        tasks = tasks.slice(0,targetIndex).concat(tasks.slice(targetIndex + 1))
        updateTaskList(tasks);
    }
}
