import {inputNewTask, updateTaskList, editTask} from './taskDOM';
import {addTaskToList, tasks} from './taskmaker';
import './style.css';

const addTaskBtn = document.getElementById('addTaskBtn');
let taskFormOrList = document.getElementById('taskFormOrList');

//the first eventlistener starts here. the task list's length is first sent
//to give an ID to the add and cancel button

addTaskBtn.addEventListener('click', () => {
    inputNewTask(tasks.length);
});

taskFormOrList.addEventListener('click', e => {
    if (e.target.className == 'deleteTask'){
        let targetIndex = parseFloat(e.target.id.slice(6));
        tasks = tasks.slice(0,targetIndex).concat(tasks.slice(targetIndex + 1))
        updateTaskList(tasks);
    }else if (e.target.className == 'checkTask'){
        let targetIndex = parseFloat(e.target.id.slice(5));
        if(tasks[targetIndex].done == false){
            tasks[targetIndex].done = true;
        }else{
            tasks[targetIndex].done = false;
        };
        updateTaskList(tasks);
    }else if (e.target.className == 'editTask'){
        editTask(tasks, parseFloat(e.target.id.slice(4)));
    };

});

