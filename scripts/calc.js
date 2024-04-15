function numberPush (number) {
    document.querySelector('input').value += number;
}

function clearNumber () {
    document.querySelector('input').value = '';
}

function calcNumber () {
    document.querySelector('input').value = eval( document.querySelector('input').value);
}