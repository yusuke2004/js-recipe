const display = document.getElementById("display");
const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");
const multiButton = document.getElementById("multi-button");
const diviButton = document.getElementById("divi-button");
const numberContainer = document.getElementById("number");
const clearButton = document.getElementById("clear-button");
const equalButton = document.getElementById("equal-button");
const button0 = document.getElementById("button0");

let count = 0;
let currentValue = 0;
let operator = null;

button0.onclick = function() {
    currentValue = currentValue * 10;
    display.textContent = currentValue;
}

for (let i = 1; i <= 9; i++) {
    const el = document.createElement("button");
    el.setAttribute("id", `button${i}`);
    el.setAttribute("class", "operator");
    el.textContent = `${i}`;
    el.onclick = function() {
        currentValue = currentValue * 10 + i;
        display.textContent = currentValue;
    }
    numberContainer.appendChild(el);
    if (i % 3 === 0) {
        numberContainer.appendChild(document.createElement("br"));
    }
}

function setOperator(op) {
    if (operator !== null) {
        calculate();
    } else {
        count = currentValue;
    }
    currentValue = 0;
    operator = op;
}

plusButton.onclick = function() { setOperator("+"); }
minusButton.onclick = function() { setOperator("-"); }
multiButton.onclick = function() { setOperator("*"); }
diviButton.onclick = function() { setOperator("/"); }
equalButton.onclick = function() { calculate(); }

clearButton.onclick = function() {
    count = 0;
    currentValue = 0;
    operator = null;
    display.textContent = count;
}

function calculate() {
    if (operator === "+") {
        count += currentValue;
    } else if (operator === "-") {
        count -= currentValue;
    } else if (operator === "*") {
        count *= currentValue;
    } else if (operator === "/") {
        if (currentValue !== 0) {
            count /= currentValue;
        } else {
            alert("0で割ることはできません");
            return 0;
        }
    }
    display.textContent = count;
    operator = null;
}

// plusButton.onclick = function() {
//     count += currentValue;
//     display.textContent = count;
// };

// minusButton.onclick = function() {
//     count -= currentValue;
//     display.textContent = count;
// };

// multiButton.onclick = function() {
//     count *= currentValue;
//     display.textContent = count;
// };

// diviButton.onclick = function() {
//     if (currentValue !== 0) {
//         count /= currentValue;
//     } else {
//         alert("0で割ることはできません");
//     }
//     display.textContent = count;
// };