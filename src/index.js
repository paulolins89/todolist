import {inputNewTask, updateTaskList} from './taskDOM';
import {updateTask, addTaskToList, tasks} from './taskmaker';
import './style.css';

const addTaskBtn = document.getElementById('addTaskBtn');
let taskFormOrList = document.getElementById('taskFormOrList');

addTaskBtn.addEventListener('click', () => {
    inputNewTask();
});

taskFormOrList.addEventListener('click', e => {
    updateTask(tasks, e);
});

