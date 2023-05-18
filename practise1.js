
// let notes;
// let notesObj
// let textValue;
let btn = document.getElementById('addBtn');
btn.AddEventListener('click', function () {
    let textArea = document.getElementById("addTxt");
    let notes = localStorage.getItems('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let textValue = textArea.value;
    notesObj.push(textValue);
    localStorage.setItems('notes', JSON.stringify(notesObj));
    textArea.value = '';
    showNotes();

})