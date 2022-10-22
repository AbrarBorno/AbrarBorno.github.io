function errorPlaceholder(msg) { return `<span class="eph">${msg}</span>`; }

function calculate(array) {
    if(!array) {
        const ph = errorPlaceholder('Please enter a valid & complete sequence');
        return { sum: ph, max: ph, min: ph, avg: ph, rev: ph };
    }

    if(array.length === 0) {
        const ph = errorPlaceholder('Please enter at least one number');
        return { sum: ph, max: ph, min: ph, avg: ph, rev: ph };
    }

    const sum = array.reduce((a, b) => a + b);
    const max = Math.max(...array);
    const min = Math.min(...array);
    const rev = [...array].reverse();
    const avg = sum / array.length;

    return {
        max, min, sum, avg,
        rev: rev.join(', ')
    }
}

function parse(inputElement) {
    const val = inputElement.value;
    if(!val || val.length === 0) return [];

    const pre = val.split(',').map(v => v.trim());
    const res = [];

    for(let i = 0; i < pre.length; i++) {
        const v = pre[i]; if(v.length === 0) continue;
        const n = parseFloat(v); if(isNaN(v)) return null;
        res.push(n);
    }

    return res;
}

function operate() {
    const results = calculate(parse(document.getElementById('ibox')));

    document.getElementById('max').innerHTML = results.max;
    document.getElementById('min').innerHTML = results.min;
    document.getElementById('sum').innerHTML = results.sum;
    document.getElementById('avg').innerHTML = results.avg;
    document.getElementById('rev').innerHTML = results.rev;
}

document.getElementById('ibox').addEventListener('input', operate);

window.onload = operate;