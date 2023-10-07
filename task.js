const tasks = [];

function addTask(){
    const newTask = document.getElementById("newTask").value;
    if (newTask.trim()  !== ""){
        tasks.push(newTask);
        document.getElementById("newTask").value = "";
    }
}

function listTasksFor(){
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    for (let i =0; i < tasks.length; i++) {
        const taskItem = document.createElement("li");
        taskItem.textContent = tasks[i];
        taskList.appendChild(taskItem);
    }
}
let i = 0;
while (i < tasks.length) {
    const taskItem = document.createElement("li");
    taskItem.textContent = tasks[i];
    taskList.appendChild(taskItem);
    i++;
}
function listTasksDoWhile() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let i = 0;
    if(tasks.length > 0) {
        do {
            const taskItem = document.createElement("li");
            taskItem.textContent = tasks[i];
        taskList.appendChild(taskItem);
        i++
    } while (i < tasks.length);
    }
}