const add = function(a, b) {
    return a + b;
  };

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

function operate (func, a, b) {
    return (func(a ,b));
}


function pressNum (num) {
    if (c === 'a') {
        firstNumString = firstNumString + num;
        document.querySelector('#results').textContent = firstNumString;
    } else if (c === 'b') {
        secondNumString = secondNumString + num;
        document.querySelector('#results').textContent = secondNumString;

    }
}


function storeOperation (operation) {
    oper = operation;
    c = 'b'
    firstNumString = document.querySelector('#results').textContent;
    document.querySelector('#results').textContent = "";
    secondNumString = "";
}

function equals() {
    document.querySelector('#results').textContent = operate(oper, parseInt(firstNumString),parseInt(secondNumString));
    firstNumString = "";
    secondNumString = "";
}

let c = 'a';
let oper = "";

let firstNumString = "";
let secondNumString = "";