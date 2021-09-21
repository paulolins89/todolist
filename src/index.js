import inputNewTask from './taskDOM';
import Task from './taskmaker'
import toggleAddTaskBtn from './showTaskBtn';

const addTaskBtn = document.getElementById('addTaskBtn');
const taskcontainer = document.getElementById('taskcontainer');
//const submitTask = document.getElementById('submitTask');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
    taskcontainer.insertBefore(inputNewTask(),addTaskBtn);
    addTaskBtn.style.display = 'none';
    const submitTask = document.getElementById('submitTask');
    submitTask.addEventListener('click', event => {
        event.preventDefault();
        let taskInput = document.getElementById('taskName').value;
        let duedateInput = document.getElementById('dueDate').value;
        tasks.push(new Task(taskInput, duedateInput))
        console.log(tasks);
    });
});

/*
submitTask.addEventListener('click', event => {
    event.preventDefault();
    let taskInput = document.getElementById('taskName').value;
    let duedateInput = document.getElementById('dueDate').value;
    tasks.push(new Task(taskInput, duedateInput))
    console.log(tasks);
});
*/