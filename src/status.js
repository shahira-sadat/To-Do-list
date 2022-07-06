export default class Status {
    
    completeTask = (array) => {
        const checkboxes = document.querySelectorAll('.check-task');
        const todoTask = document.querySelectorAll('.todo-task');
        checkboxes.forEach((checkbox, index) => {
            checkbox.addEventListener('click', () => {
                todoTask[index].classList.toggle('active');
                array[index].isCompleted = !array[index].isCompleted;
                localStorage.setItem('tasks', JSON.stringify(array));
            });
        });
    }
} 