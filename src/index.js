import "./style.css"

let todoList = [
    {
        description: 'Reading',
        isCompleted: false,
        index: 3,
    },
    {
        description: 'Listening',
        isCompleted: false,
        index: 2,
    },
    {
        description: 'Writing',
        isCompleted: false,
        index: 1,
    },
    {
        description: 'Speaking',
        isCompleted: false,
        index: 0,
    },
];

localStorage.setItem('todo', JSON.stringify(todoList));
