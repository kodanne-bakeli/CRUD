let tasks = document.getElementById('taches')
let search = document.getElementById("search")

function Add() {
    if (search.value !== "") {
        tasks.innerHTML +=
            `<tr>
        <th scope="row" id="row">${search.value}</th>
        <th scope="row" id="input">
        <input type="text" name="text" id="text" value="${search.value}" class="form-control">
        </th>
        <td>
        <span class="btn btn-secondary w-25 " onclick="Enter(event)">entrer</span>
        <i class="btn fa-solid fa-pen text-warning" onclick="Modify(event)"></i>
        <i class="btn fa-solid fa-trash text-danger" onclick="Trash(event)"></i>
        <i class="btn fa-solid fa-save text-info" onclick="Archiver(event)"></i>
        <i class="btn fa-solid fa-check rounded-pill btn-success" onclick="Finish(event)"></i></td>
        
      </tr>`
        store();
        search.value = ""
    } else {
        alert(`merci d'entrer une tâche à faire`)
    }
}
//fonction pour modifier des taches
function Modify(event) {

    let items = event.target.parentNode.parentNode
    items.classList.add("editMode");
    store();
}
function Enter(event) {
     let items = event.target.parentNode.parentNode
     let input = items.childNodes[3]
     let inputEdit = input.childNodes[1]
     let row = items.childNodes[1]
     row.innerText = inputEdit.value
    items.classList.remove("editMode");
    store();
}
//fonction pour supprimer des taches
function Trash(event) {
    confirm('voulez-vous vraiment supprimer cette tâche?')
    if (confirm) {
        event.target.parentNode.parentNode.remove()
        store();
    }
}
//fonction pour terminer de taches
function Finish(event) {

    let items = event.target.parentNode.parentNode
    let row = items.childNodes[1]
    row.style.background = "#009900"
    store()
}
function store() {
    localStorage.setItem("myitems", tasks.innerHTML)

}
//fonction permettant d'afficher les données du local dans le document 
function getValues() {
    let storedValues = localStorage.getItem("myitems")
    if (!storedValues) {
        tasks
    }
    else {
        tasks.innerHTML = storedValues;
    }
}
getValues();
