let task;

function addTask() {
    task = document.getElementById("searchTask").value;
    document.getElementById("toDoList").innerHTML += `<div>${task}</div>`;
}