function getFullText() { return document.getElementById('content').value; }

function getLines() { return getFullText().split('\n'); }

function setFullText(str) { document.getElementById('content').value = str; }

function setLines(array) { setFullText(array.join('\n')); }

function shuffleArray(array) {
    for(let i = array.length; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i - 1];
        array[i - 1] = array[j];
        array[j] = temp;
    }
    return array;
}

function clicker(id, fn) { document.getElementById(id).addEventListener('click', fn); }

function clear() {
    setFullText('');
}

let capitalizationFlag = false;

function capitalize() {
    if(capitalizationFlag) {
        setFullText(getFullText().toLowerCase());
        capitalizationFlag = false;
    } else {
        setFullText(getFullText().toUpperCase());
        capitalizationFlag = true;
    }
}

function sort() {
    setLines(getLines().sort());
}

function reverse() {
    setLines(getLines().reverse());
}

function strip() {
    setLines(
        getLines()
        .map(line => line.trim())
        .filter(line => line.length > 0)
    );
}

function addNums() {
    setLines(getLines().map((line, index) => `${index + 1}. ${line}`));
}

function shuffle() {
    setLines(shuffleArray(getLines()));
}

clicker('btn-clear', clear);
clicker('btn-cap',   capitalize);
clicker('btn-sort',  sort);
clicker('btn-rev',   reverse);
clicker('btn-strip', strip);
clicker('btn-num',   addNums);
clicker('btn-shf',   shuffle);