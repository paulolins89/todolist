import {inputNewTask, updateTaskList, editTask} from './taskDOM';
export {addTaskToList, tasks};

function Task(title, duedate, description){
    this.title = title;
    this.duedate = duedate;
    this.done = false;
    this.description = description;
    //this.priority = priority;
}

/*
function Project(name, tasks){
    this.name = name;
    this.tasks = tasks;
}
*/

let tasks = [];

function addTaskToList(taskID){
    const taskForm = document.getElementById('taskForm');
    taskForm.addEventListener('click', e => {
        if (e.target.id == 'cancelTask') {
            console.log(e.target.id);
            updateTaskList(tasks);
        }
    });
    
    taskForm.addEventListener('submit', event => {
        event.preventDefault;
        let taskInput = document.getElementById('taskName').value;
        let duedateInput = document.getElementById('dueDate').value;
        let descriptionInput = document.getElementById('taskDescription').value
        
        if (taskID == tasks.length){
            tasks.push(new Task(taskInput, duedateInput, descriptionInput));
        }else{
            tasks[taskID].title = taskInput;
            tasks[taskID].duedate = duedateInput;
            tasks[taskID].description = descriptionInput;
        }
        
        updateTaskList(tasks);
    });
}