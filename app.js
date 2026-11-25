function addBtn() {
    let title = document.getElementById("titleFld").value;
    let description = document.getElementById("descriptionFld").value;

    const loadToDo = [];
    let details = {
        title: title,
        description: description
    }
    loadToDo.push(details);

    for (let detail of loadToDo) {
        document.getElementById("toDos").innerHTML += `
            <div class="form-field">
                <input type="checkbox" id="checkLabel" class="check" />
            </div>
            <div class="card card-body p-3 align text-start">
                <p class="fw-bolder">${detail.title}</p>
                <hr>
                <p>${detail.description}</p>
            </div>
        `;
    }



}