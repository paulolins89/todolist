import {inputNewTask, updateTaskList} from './taskDOM';
import './style.css';

const addTaskBtn = document.getElementById('addTaskBtn');

addTaskBtn.addEventListener('click', () => {
    inputNewTask();
});

