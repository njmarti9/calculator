let firstNum = null, secondNum = null, operand = null, displayValue = "", previousButton = "number", zeroError = false;

const screen = document.querySelector(".screen");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (previousButton != "number")
        {
            displayValue = "";
        }
        displayValue += button.getAttribute("id");
        updateDisplay(displayValue);
        previousButton = "number";
    })
})

const operandButtons = document.querySelectorAll(".operand");
operandButtons.forEach(button => {
    button.addEventListener('click', () => {
        previousButton = "operand";
        if (firstNum == null)
        {
            firstNum = parseInt(displayValue);
            operand = button.getAttribute("id");
            updateDisplay("");
        }
        else if (firstNum != null)
        {
            if (operand == null)
            {
                operand = button.getAttribute("id");
                updateDisplay("");
            }
            else {
                secondNum = parseInt(displayValue);
                calculate(button.getAttribute("id"));
                updateDisplay(displayValue);
            }
        }
    })
})

const equalButton = document.querySelector(".equals");
equalButton.addEventListener('click', function (e) {
    previousButton = "equals";
    secondNum = parseInt(displayValue);
    calculate(null);
    updateDisplay(displayValue);
    console.log(firstNum, secondNum, operand, displayValue);
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', function (e) {
    previousButton = "number";
    clear();
    updateDisplay(0);
});

function calculate() {
    firstNum = operate(firstNum, operand, secondNum);
    secondNum = null;
    if (zeroError == true)
    {
        displayValue = "Error: Nice Try Guy!";
        zeroError = false;
    }
    else 
    {
        displayValue = firstNum;
    }
    operand = arguments[0];
}


function updateDisplay(value) {
    screen.textContent = value;
}

function operate() {    
    switch (arguments[1]){
        case "+":
            return addition(arguments[0], arguments[2]);
        case "-":
            return subtraction(arguments[0], arguments[2]);
        case "/":
            if (arguments[2] == 0)
            {
                zeroError = true;
                return 0;
            }
            else {
                return Math.round(divide(arguments[0], arguments[2]));
            }
        case "*":
            return multiply(arguments[0], arguments[2]);
        default:
            console.log("argument[1] is not an operand");
    }
    
}

function clear() {
    firstNum = null;
    secondNum = null;
    operand = null;
    displayValue = "";
}

function addition() {
    return arguments[0] + arguments[1];
}

function subtraction() {
    return arguments[0] - arguments[1];
}

function multiply() {
    return arguments[0] * arguments[1];
}

function divide() {
    return arguments[0] / arguments[1];
}

module.exports = {
addition,
subtraction,
multiply,
divide
};