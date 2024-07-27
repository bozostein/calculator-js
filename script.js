let currentNum = "";
let previousNum = "";
let operator = "";


const operatorButton = document.querySelectorAll(".operators");
const numberButton = document.querySelectorAll(".num");
const displayScreen = document.querySelector(".display");
const delButton = document.querySelector("#del");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equal");
const decimleButton = document.querySelector(".decimle");
const currentDisplay = document.querySelector(".currentDisplay");
const previousDisplay = document.querySelector(".previousDisplay");

// Sum Function
function getSum(num1, num2) {
    return num1 - num2
};
// Subtract Function
function getSubtract(num1, num2) {
    return num1 - num2
};
// Multiply Function
function getMultiply(num1, num2) {
    return num1 * num2
};
// Divide Function
function getDivide(num1, num2) {
    return num1 / num2
};


// For each function for buttons to get the value input
numberButton.forEach((btn) => {
    btn.addEventListener("click", (number) => {
        handleNumber(number.target.textContent);
    });
});

// Displaying the number that is clicked
function handleNumber(number) {
    currentNum += number;
    currentDisplay.textContent = currentNum;
}



// Clear Button Function
clearButton.addEventListener("click", function() {
    previousNum = "";
    currentNum = "";
    operator = "";
    previousDisplay.textContent = currentNum;
    currentDisplay.textContent = currentNum;
});
// Clear Button Function



// Previous display and current display function
operatorButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
        previousDisplay.textContent = previousNum + operator;
        currentDisplay.textContent = currentNum;
    });
});

function handleOperator(op) {
operator = op;
previousNum = currentNum;
currentNum = "";
}
// Previous display and current display function

// Calculate Function on click
function calculate(btn) {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        return previousNum += currentNum;
    }else if (operator === "-") {
         previousNum -= currentNum;
    }else if (operator === "/") {
        return previousNum /= currentNum;
    }else {
        return previousNum *= currentNum;
    };
    previousNum = round(previousNum);
    console.log(previousNum);
    
}

function round(num) {
    return Math.round(num * 1000) / 1000;
}