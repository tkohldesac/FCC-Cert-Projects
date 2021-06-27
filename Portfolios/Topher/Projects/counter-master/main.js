

const decreaseButton = document.getElementById("btn-decrease")
const resetButton = document.getElementById("btn-reset")
const increaseButton = document.getElementById("btn-increase")

var currentValue = document.getElementById("value").innerText;



console.log
decreaseButton.addEventListener('click', function () {
    // decreaseNum();
    console.log("Decrease Button")
    num = Number(document.getElementById("value").innerText)
    num -= 1
    document.getElementById("value").innerText = num
})

resetButton.addEventListener('click', function () {
    console.log("Reset Button")
    document.getElementById("value").innerText = 0
    
})

increaseButton.addEventListener('click', function () {
    console.log("Increase Button")
    num = Number(document.getElementById("value").innerText)
    num += 1
    document.getElementById("value").innerText = num
})


