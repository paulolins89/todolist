import inputNewTask from './taskDOM';

const addTaskBtn = document.getElementById('addTaskBtn');
const taskcontainer = document.getElementById('taskcontainer');

addTaskBtn.addEventListener('click', () =>{
    taskcontainer.insertBefore(inputNewTask(),addTaskBtn);
});