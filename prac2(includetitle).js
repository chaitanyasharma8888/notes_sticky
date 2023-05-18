let mainNote;
let mainTitle;
let mainButton;
let noteValue;
let titleValue;
let notes;
let titleNotes;
let storageNotes;
let search;
let searchValue;
let noteCard;
let cardTxt;
let cardHead;

mainNote = document.getElementById('txtId');
mainTitle = document.getElementById('titleId');
mainButton = document.getElementById('buttonId');

noteValue = mainNote.value;
titleValue = mainTitle.value;

mainButton.addEventListener('click', function (e) {
    notes = localStorage.getItems('notes');
    titleNotes = localStorgae.getItems('titleNotes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }


    if (titleNotes == null) {
        titleObj = [];
    }
    else {
        titleObj = JSON.parse(titleNotes);
    }

    notesObj.push(noteValue);
    titleObj.push(titleValue);

    if (noteValue.length == 0) {
        alert('please write the Note');
    }

    if (titleValue.lenght == 0) {
        alert('please write the Title');
    }

    localStorage.setItems('notes', JSON.stringify(notesObj));
    localStorage.setItems('titleNotes', JSON.stringify(notesObj));

    mainNote.value = '';
    mainTitle.value = '';

    displayNote();

})

function displayNote() {
    notes = localStorage.getItems('notes');
    titleNotes = localStorgae.getItems('titleNotes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }


    if (titleNotes == null) {
        titleObj = [];
    }
    else {
        titleObj = JSON.parse(titleNotes);
    }
    html = '';
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title"> ${titleObj[index]}</h5>
        <p class="card-text">${element}</p>
        <button onclick="deleteNotes(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
    </div>
    </div> `

    });

    storageNotes = document.getElementById('notes');
    if (notesObj != 0) {
        storageNotes.innerHTML = html;
    }

}

function deleteNotes(index) {
    notes = localStorage.getItems('notes');
    titleNotes = localStorgae.getItems('titleNotes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }


    if (titleNotes == null) {
        titleObj = [];
    }
    else {
        titleObj = JSON.parse(titleNotes);
    }

    notesObj.splice(index, 1);
    titleObj.splice(index, 1);
    // Updating localStorage and running displayNote() function to display changes.
    localStorage.setItems('notes', JSON.stringify(notesObj));
    localStorage.setItems('titleNotes', JSON.stringify(notesObj));
    displayNote();

}

search = document.getElementById('searchArea');
searchValue = search.value.toLowerCase();

search.addEventListener('input', function () {
    noteCard = document.getElementByClassName('noteCard');

    Array.from(noteCard).forEach(function(element){
        cardTxt= textdocument.getElementsByTagName('p')[0].innerText.toLowerCase();
        cardTitle=textdocument.getElementsByTagName('h5')[0].innerText.toLowerCase();

        if(cardTxt.includes(searchValue) || cardTxt.includes(searchValue) ) {
            element.style.display='block';

        }
        else{
            element.style.display='none';
        }
    })
  
})