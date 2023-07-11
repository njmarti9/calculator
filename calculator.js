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