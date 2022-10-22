function calc(val, l2k) {
    return l2k ? val * 0.4536 : val * 2.2046;
}

function isL2K() {
    return document.getElementById('opts').value === 'l2k';
}

function convert() {
    const val = document.getElementById('input').value;
    const result = calc(val, isL2K());
    const res = document.getElementById('result');
    res.innerText = result;
    res.className = '';
}

document.getElementById('convert').addEventListener('click', convert);