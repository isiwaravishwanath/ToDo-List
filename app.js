let topic;
let description;

function addTask() {
    topic = document.getElementById("topic").value;
    description = document.getElementById("description").value;
    document.getElementById("toDoList").innerHTML += <div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>;
}