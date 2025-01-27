function add() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    if (isValidInput(x, y)) {
        result1.value = parseInt(x) + parseInt(y);
    } else {
        alert("Please enter valid numbers.");
    }
}

function sub() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    if (isValidInput(x, y)) {
        result1.value = parseInt(x) - parseInt(y);
    } else {
        alert("Please enter valid numbers.");
    }
}

function mul() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    if (isValidInput(x, y)) {
        result1.value = parseInt(x) * parseInt(y);
    } else {
        alert("Please enter valid numbers.");
    }
}

function divi() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    if (isValidInput(x, y) && y != 0) {
        result1.value = parseInt(x) / parseInt(y);
    } else if (y == 0) {
        alert("Cannot divide by zero.");
    } else {
        alert("Please enter valid numbers.");
    }
}

function modulus() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    if (isValidInput(x, y)) {
        result1.value = parseInt(x) % parseInt(y);
    } else {
        alert("Please enter valid numbers.");
    }
}

function clear1() {
    num1.value = "";
    num2.value = "";
    result1.value = "";
}

function changecolor(color) {
    document.body.style.backgroundColor = color;
}

function isValidInput(x, y) {
    return !isNaN(x) && !isNaN(y) && x !== "" && y !== "";
}
