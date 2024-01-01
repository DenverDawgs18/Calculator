function add(numberOne, numberTwo){
    return numberOne + numberTwo;
}
function subtract(numberOne, numberTwo){
    return numberOne - numberTwo;
}
function multiply(numberOne, numberTwo){
    return numberOne * numberTwo;
}
function divide(numberOne, numberTwo){
    return numberOne / numberTwo;
}
let firstNumber;
let secondNumber;
let operator;

function operate(numberOne, operator, numberTwo){
    switch (operator){
        case "+":
            return add(numberOne, numberTwo);
        case "-":
            return subtract(numberOne, numberTwo);
        case "*":
            return multiply(numberOne, numberTwo);
        case "/":
            return divide(numberOne, numberTwo);

    }
}

// Function that updates the display div's content
function display(content){
    let dis = document.querySelector(".display");
    dis.textContent = content; 
}
let clear = document.querySelector(".AC");
clear.addEventListener("click", display(""));