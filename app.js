function addBtn() {
    let title = document.getElementById("titleFld").value;
    let description = document.getElementById("descriptionFld").value;
    if(title==="") return;
    if(description==="") description="--No Description--";

    const loadToDo = [];
    let details = {
        title: title,
        description: description
    }
    loadToDo.push(details);

    // document.getElementById("toDos").innerHTML ="";
    for (let detail of loadToDo) {
        document.getElementById("toDos").innerHTML += `
            <div class="d-flex mt-3 align-items-center">
                <div class="form-field">
                    <input type="checkbox" id="checkLabel" class="check" />
                </div>
                <div class="card card-body p-3 align text-start">
                    <p class="fw-bolder">${detail.title}</p>
                    <hr>
                    <p>${detail.description}</p>
                </div>
            </div>
        `;
    }



}