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
    if (oper === "") {
        window.alert("Please use an operator before clicking equals symbol");
    }else {
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

let c = 'a';
let oper = "";

let firstNumString = "";
let secondNumString = "";