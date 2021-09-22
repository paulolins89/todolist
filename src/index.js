import {inputNewTask, updateTaskList} from './taskDOM';
import {addTaskToList, tasks} from './taskmaker';
import './style.css';

const addTaskBtn = document.getElementById('addTaskBtn');
let taskFormOrList = document.getElementById('taskFormOrList');

addTaskBtn.addEventListener('click', () => {
    inputNewTask();
});

taskFormOrList.addEventListener('click', e => {
    if (e.target.className == 'deleteTask'){
        let targetIndex = parseFloat(e.target.id.slice(6));
        tasks = tasks.slice(0,targetIndex).concat(tasks.slice(targetIndex + 1))
        updateTaskList(tasks);
    }else if (e.target.className == 'checkTask'){
        let targetIndex = parseFloat(e.target.id.slice(5));
        let specificTask = document.getElementById('taskName' + targetIndex);
        if(document.getElementById(e.target.id).checked == true){
            specificTask.classList.add('checked');
        }else{
            specificTask.classList.remove('checked');
        };
    }

});

