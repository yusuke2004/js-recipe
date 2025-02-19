const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const dubleButton = document.getElementById("duble-button")

let count = 0

plusButton.onclick = function() {
    count += 1
    display.textContent = count
}

minusButton.onclick = function() {
    count -= 1
    display.textContent = count
}

dubleButton.onclick = function() {
    count *= 2
    display.textContent = count
}