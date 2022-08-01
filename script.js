let allTasks = [];


function init() {
    updateList();
}

function addTask() {
    let input = document.getElementById("input");
    let task = input.value;

    allTasks.push(task);

    input.value = "";
    updateList();
}

function deleteTask(i) {
    allTasks.splice(i, 1);
    updateList();
}



function updateList() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    for (let i = 0; i < allTasks.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = `
        <li class="list-group-item">
            <label>${allTasks[i]}</label>
            <button class="btn btn-danger" onclick="deleteTask(${i})">&#10005</button>
        </li>`;
        list.appendChild(li);
    }
}