let allTasks = [];


function init() {
    updateList();
}

function addTask() {
    loadTasksFromStorage();
    let input = document.getElementById("input");

    let task = {
        "description": input.value,
        "solved": "",
    };

    if (!task.description) {
        return;
    }

    allTasks.push(task);

    savedTasksToStorage();
    updateList();
    input.value = "";
}

function deleteTask(i) {
    loadTasksFromStorage();
    allTasks.splice(i, 1);
    savedTasksToStorage();
    updateList();
}

function loadTasksFromStorage() {

    //termination condition 
    if (!localStorage.getItem("tasks")) {
        return;
    }

    allTasks = JSON.parse(localStorage.getItem("tasks"));
}

function savedTasksToStorage() {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
}

function check(i) {
    console.log("this are the loaded task in check progress", allTasks);
    if (!allTasks[i].solved == "") {
        allTasks[i].solved = "";
    } else {
        allTasks[i].solved = "checked='true'";
    }
    console.log("this are the read of 'allTasks[", i, "].solved'  ", allTasks[i].solved);
    savedTasksToStorage();
    console.log("this are the saved tasks in check progress", allTasks);
}



function updateList() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    loadTasksFromStorage();

    for (let i = 0; i < allTasks.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = `
        <li class="list-group-item">
            <label class="container"> 
                <input class="checkmark" onclick="check(${i})" type="checkbox" ${allTasks[i].solved}>
                <span class="checkmark"></span>
                <span class="task-description"> ${allTasks[i].description}</span>
                <img onclick="deleteTask(${i})" class="button-img" src="/delete.png" alt="delete the task">
            </label>
        </li>`;


        list.appendChild(li);
    }
}

// add enter as a add task button.
document.addEventListener('keyup', (event) => {
    if (event.code == "Enter") {
        addTask();
    }
});