let btn;
let notes;
let notesObj
let textValue;
showNotes();
btn = document.getElementById('addBtn');
btn.addEventListener('click', function (e) {
    textArea = document.getElementById("addTxt");
    notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let textValue = textArea.value;
    notesObj.push(textValue);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    textArea.value = '';
    showNotes();

})

function showNotes() {
    notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button onclick="deleteNotes(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
        </div>
        </div> `

    });

    let getNotesFromStorage = document.getElementById('notes');
    if (notesObj = !0) {
        getNotesFromStorage.innerHTML = html;
    }

}

function deleteNotes(index) {
    notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

}

let search = document.getElementById('searchTxt');

search.addEventListener('input', function () {

    let inputValue = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    // console.log('Input event fired!',inputValue);

    Array.from(noteCards).forEach(function (element) {

        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputValue)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })
})