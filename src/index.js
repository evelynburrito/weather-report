//color changing functionality
function whatColor(currentTemp) {
    if (currentTemp >= 80){
        document.getElementById("tempDisplay").style.color = "red"
    } else if (currentTemp >= 70 && currentTemp <= 79) {
        document.getElementById("tempDisplay").style.color = "orange"
    } else if (currentTemp >=60 && currentTemp <= 69) {
        document.getElementById("tempDisplay").style.color = "yellow"
    } else if (currentTemp >= 50 && currentTemp <= 59) {
        document.getElementById("tempDisplay").style.color = "green"
    } else if (currentTemp <= 49){
        document.getElementById("tempDisplay").style.color = "teal"
    }
}

//upButton functionality
let upButton = document.querySelector("upButton")

upButton.addEventListener("click", increaseByOne())

function increaseByOne() {
    let stringNumber = document.getElementById('tempDisplay').innerHTML;

    let currentTemp = parseInt(stringNumber)
    currentTemp += 1
    document.getElementById('tempDisplay').innerHTML= currentTemp
    whatColor(currentTemp)
}


//downButton functionality
let downButton = document.querySelector("downButton")

downButton.addEventListener("click", decreaseByOne())

function decreaseByOne() {
    let stringNumber = document.getElementById('tempDisplay').innerHTML;

    let currentTemp = parseInt(stringNumber)
    currentTemp -= 1
    document.getElementById('tempDisplay').innerHTML = currentTemp
    whatColor(currentTemp)
}