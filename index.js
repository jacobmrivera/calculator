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
    if (b == 0) {
        return "Cannot divide by 0";
    }
    return a / b;
};

function operate (func, a, b) {
    return (func(a ,b));
}

function pressNum (num) {    
    if (c === 'a') {
        if (num === '.' && firstNumString.includes('.')){
            return
        }
        firstNumString = firstNumString + num;
        document.querySelector('#results').textContent = firstNumString;
    } else if (c === 'b') {
        if (num === '.' && secondNumString.includes('.')){
            return
        }
        secondNumString = secondNumString + num;
        document.querySelector('#results').textContent = secondNumString;
    }
}

function storeOperation (operation) {
    if (firstNumString !== "" && secondNumString !== "") {
        firstNumString = operate(operation, parseFloat(firstNumString),parseFloat(secondNumString));
        console.log(firstNumString);
        console.log(secondNumString);
    }
    else {
        oper = operation;
        c = 'b'
        firstNumString = document.querySelector('#results').textContent;
    }
    document.querySelector('#results').textContent = "";
    secondNumString = "";
}

function equals() {
    if (firstNumString === "") {
        window.alert("Please enter a number"); 
    } else if (oper === "" && secondNumString === "") {
        window.alert("Please complete the operation before clicking equals symbol");
    } else if (secondNumString === "" ) {
        window.alert("Please enter a second number before clicking equals symbol");
    } else {
        let answer =  operate(oper, parseFloat(firstNumString),parseFloat(secondNumString));
        if (parseInt(answer) !== answer) {
            answer = answer.toFixed(3)
        }
        document.querySelector('#results').textContent = answer;
        firstNumString = "";
        secondNumString = "";
    }
}

function cleanUp() {
    firstNumString = "";
    secondNumString = "";
    document.querySelector('#results').textContent = "";
}

function back() {
    if (c === 'a' && firstNumString.length > 0) {
        firstNumString = firstNumString.slice(0, -1);
        document.querySelector('#results').textContent = firstNumString;
    } else if (c === 'b' && secondNumString.length > 0) {
        secondNumString = secondNumString.slice(0, -1);
        document.querySelector('#results').textContent = secondNumString;
    }
    console.log("got into back")
}

let c = 'a';
let oper = "";

let firstNumString = "";
let secondNumString = "";