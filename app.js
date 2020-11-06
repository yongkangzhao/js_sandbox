// set local storage item
// localStorage.setItem('name', 'John');

// // set session storage item
// // sessionStorage.setItem('name', 'Beth');


// let name = localStorage.getItem('name');
// console.log(name);

// localStorage.clear();
// name = localStorage.getItem('name');
// console.log(name);


document.querySelector('form').addEventListener('submit',
function(e){
    let task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    console.log(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // const newTask = document.createElement('li');
    // newTask
    e.preventDefault();
}
);

const tasks = JSON.parse(localStorage.getItem('tasks'));
console.log(tasks);
for (const task in tasks){
    console.log(tasks[task]);
}
