function addBtn(){
    let title=document.getElementById("titleFld").value;
    let description=document.getElementById("descriptionFld").value;

    document.getElementById("toDos").innerHTML=`
        <div class="form-field">
            <input type="checkbox" id="checkLabel" class="check" />
        </div>
        <div class="card card-body p-3 align text-start">
            <p class="fw-bolder">${title}</p>
            <hr>
            <p>${description}</p>
        </div>
    `;
    
}