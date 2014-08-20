
window.onhashchange = hashChanged;

function hashChanged() {
    var pageHash = window.location.hash;
    var hashParts = pageHash.split('/');

    if (hashParts[3] === 'chapter') {
        console.log("hello from zyChromeExtension and we'll just test it");
        displayHypeDocumentNames():
        displayContentResourceIds();
    }
}

function displayHypeDocumentNames() {

}

function displayContentResourceIds() {

}

