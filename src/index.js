//upButton functionality
let upButton = document.querySelector("upButton")

upButton.addEventListener("click", increaseByOne())

function increaseByOne() {
    let stringNumber = document.getElementById('tempDisplay').innerHTML;

let currentTemp = parseInt(stringNumber)
    currentTemp += 1
    document.getElementById('tempDisplay').innerHTML= currentTemp
}


//downButton functionality
let downButton = document.querySelector("downButton")

downButton.addEventListener("click", decreaseByOne())

function decreaseByOne() {
    let stringNumber = document.getElementById('tempDisplay').innerHTML;

    let currentTemp = parseInt(stringNumber)
    currentTemp -= 1
    document.getElementById('tempDisplay').innerHTML = currentTemp
}