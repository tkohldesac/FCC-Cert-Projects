const powderValue = document.getElementById("powderCurrentTotal").textContent;
const torturedValue = document.getElementById("torturedCurrentTotal");
const harrowingValue = document.getElementById("harrowingCurrentTotal");
const sorrowfulValue = document.getElementById("sorrowfulCurrentTotal");
const bitterValue = document.getElementById("bitterCurrentTotal");
const loathsomeValue = document.getElementById("loathsomeCurrentTotal");
const timewornValue = document.getElementById("timewornCurrentTotal");
const rawValue = document.getElementById("rawCurrentTotal");



function btnColor(btn, color) {
    var property = document.getElementById(btn);
    if (property.className !== 'toggled') {
        property.style.backgroundColor = color;
        property.style.color = "white"
        property.className = 'toggled'
    } else {
        property.style.backgroundColor = "lightgray";
        property.style.color = "black"
        property.className = '';
    }
}