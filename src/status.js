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

    clearCompleted = (array) => {
        const clearBtn = document.querySelector('#clear-completed');
        clearBtn.addEventListener('click', () => {
            array = array.filter((item) => item.isCompleted === false);
            localStorage.setItem('tasks', JSON.stringify(array));
            document.location.reload();
        });
    }
} 