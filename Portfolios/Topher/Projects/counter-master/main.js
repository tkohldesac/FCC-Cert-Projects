

const decreaseButton = document.getElementById("btn-decrease")
const resetButton = document.getElementById("btn-reset")
const increaseButton = document.getElementById("btn-increase")

var currentValue = document.getElementById("value");


console.log
decreaseButton.addEventListener('click', function () {
    // decreaseNum();
    console.log("Decrease Button")
    num = Number(currentValue.innerText)
    num -= 1
    currentValue.innerText = num
    changeColor(num);
})

resetButton.addEventListener('click', function () {
    console.log("Reset Button")
    currentValue.innerText = 0
    changeColor("0");
})

increaseButton.addEventListener('click', function () {
    console.log("Increase Button")
    num = Number(currentValue.innerText)
    num += 1
    currentValue.innerText = num
    changeColor(num);
})

function changeColor(num) {
    if (num < 0) {
        currentValue.style.color = "red"
        console.log("less than 0");
    } else if (num > 0) {
        currentValue.style.color = "green"
        console.log("more than 0");
    } else {
        currentValue.style.color = "black"
        console.log("equal to 0");
    }
}
