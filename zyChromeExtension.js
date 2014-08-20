
window.onhashchange = hashChanged;

function hashChanged() {
    var pageHash = window.location.hash;
    var hashParts = pageHash.split('/');

    if (hashParts[3] === 'chapter') {
        window.setTimeout(function() {
            displayHypeDocumentNames();
            displayContentResourceIds();
        }, 1000);
    }
}

function displayHypeDocumentNames() {
    var hypeAnimationDivs = toArray(document.querySelectorAll('.hypeAnimation > div'));
    hypeAnimationDivs.forEach(function(element) {
        var documentName = element.getAttribute('hype_documentname');  
        var nameDiv = document.createElement('div');
        nameDiv.innerHTML = documentName;
        element.parentNode.appendChild(nameDiv);
    });
}

function displayContentResourceIds() {
    var contentResources = toArray(document.querySelectorAll('[contentid]'));
    contentResources.forEach(function(element) {
        var contentResourceId = element.getAttribute('contentid');
        console.log(contentResourceId);
        var idDiv = document.createElement('div');
        idDiv.innerHTML = contentResourceId;
        idDiv.style.fontSize = "12px"; 
        idDiv.style.color = "#cc6600"; 
        idDiv.style.fontFamily = "Comic Sans MS"; 
        element.appendChild(idDiv);
    });
}

function toArray(nodeList) {
    var array = [];

    for (var i = 0; i < nodeList.length; ++i) {
        array.push(nodeList[i]);
    }

    return array;
}

window.setTimeout(function() {
    hashChanged();
}, 1000);

