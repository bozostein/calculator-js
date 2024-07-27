
let currentNum = "";
let previousNum = "";
let operator = "";

// Select DOM elements
const operatorButton = document.querySelectorAll(".operators");
const numberButton = document.querySelectorAll(".num");
const displayScreen = document.querySelector(".display");
const delButton = document.querySelector("#del");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");
const decimalButton = document.querySelector(".decimle");
const currentDisplay = document.querySelector(".currentDisplay");
const previousDisplay = document.querySelector(".previousDisplay");

// Sum Function (Fixed to perform addition)
function getSum(num1, num2) {
    return num1 + num2;
}

// Subtract Function
function getSubtract(num1, num2) {
    return num1 - num2;
}

// Multiply Function
function getMultiply(num1, num2) {
    return num1 * num2;
}

// Divide Function
function getDivide(num1, num2) {
    if (num2 === 0) {
        alert("Cannot divide by zero");
        return num1;
    }
    return num1 / num2;
}

// Event Listener for Number Buttons
numberButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

// Clear Button Function
clearButton.addEventListener("click", function() {
    previousNum = "";
    currentNum = "";
    operator = "";
    updateDisplay();
});

// Equal Button Function
equalButton.addEventListener("click", function() {
    calculate();
    updateDisplay();
});

// Event Listener for Operator Buttons
operatorButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
        updateDisplay();
    });
});

function handleOperator(op) {
    if (currentNum === "") return;
    if (previousNum !== "") {
        calculate();
    }
    operator = op;
    previousNum = currentNum;
    currentNum = "";
}

// Calculate Function
function calculate() {
    if (operator === "" || currentNum === "" || previousNum === "") return;

    previousNum = parseFloat(previousNum);
    currentNum = parseFloat(currentNum);

    switch (operator) {
        case "+":
            previousNum = getSum(previousNum, currentNum);
            break;
        case "-":
            previousNum = getSubtract(previousNum, currentNum);
            break;
        case "*":
            previousNum = getMultiply(previousNum, currentNum);
            break;
        case "/":
            previousNum = getDivide(previousNum, currentNum);
            break;
        default:
            return;
    }
    previousNum = round(previousNum);
    currentNum = "";  // 
    operator = "";    // 
}

// Round Function
function round(num) {
    return Math.round(num * 1000) / 1000;
}

// Display the current number and operator
function updateDisplay() {
    // Display the current number or result
    currentDisplay.textContent = currentNum || previousNum; 

    // Display the previous number and operator
    previousDisplay.textContent = (operator ? previousNum + ' ' + operator : previousNum);
}

// Handle Number Button Clicks
function handleNumber(number) {
    currentNum += number;
    updateDisplay();
}

// Handle Decimal Button Click (if needed)
decimalButton.addEventListener("click", () => {
    if (!currentNum.includes(".")) {
        currentNum += ".";
        updateDisplay();
    }
});
