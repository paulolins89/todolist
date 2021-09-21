import inputNewTask from './taskDOM';
import Task from './taskmaker'

const addTaskBtn = document.getElementById('addTaskBtn');
const taskcontainer = document.getElementById('taskcontainer');
const submitTask = document.getElementById('submitTask');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
    taskcontainer.insertBefore(inputNewTask(),addTaskBtn);
    addTaskBtn.style.display = 'none';
});

submitTask.addEventListener('click', () => {
    let taskInput = document.getElementById('taskName').value;
    let duedateInput = document.getElementById('dueDate').value;
    tasks.push(new Task(taskInput, duedateInput))
    console.log(tasks);
});