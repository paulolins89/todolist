import {inputNewTask, updateTaskList} from './taskDOM';

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

function deleteTask(){
    let taskFormOrList = document.getElementById('taskFormOrList');
    taskFormOrList.addEventListener('click', e => {
        if (e.target.className == 'deleteTask'){
            //check this logic
            let targetIndex = parseFloat(e.target.id.slice(6));
            myLibrary = myLibrary.slice(0,targetIndex).concat(myLibrary.slice(targetIndex + 1))
        }
    });
}
