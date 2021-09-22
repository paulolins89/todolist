import inputNewTask from './taskDOM';

const addTaskBtn = document.getElementById('addTaskBtn');

addTaskBtn.addEventListener('click', () => {
    inputNewTask();
});

