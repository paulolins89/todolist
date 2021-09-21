import inputNewTask from './taskDOM';

export default function toggleAddTaskBtn(){
    const addTaskBtn = document.getElementById('addTaskBtn');
    if (addTaskBtn.style.display == 'none'){
        addTaskBtn.style.display == 'initial';
    }else{
        addTaskBtn.style.display == 'none';
        inputNewTask();
    }
}