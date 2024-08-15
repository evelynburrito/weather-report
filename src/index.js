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

//landscape changing functionality
function whatLandscape(currentTemp) {
    if (currentTemp >= 80){
        document.getElementById("landscape").innerHTML = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (currentTemp >= 70 && currentTemp <= 79){
        document.getElementById("landscape").innerHTML = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (currentTemp >= 60 && currentTemp <= 69){
        document.getElementById("landscape").innerHTML = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else if (currentTemp <= 59){
        document.getElementById("landscape").innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
}

//upButton functionality
let upButton = document.querySelector("upButton")

upButton.addEventListener("click", increaseByOne())

function increaseByOne() {
    let stringNumber = document.getElementById('tempDisplay').innerHTML;

    let currentTemp = parseInt(stringNumber);
    currentTemp += 1;
    document.getElementById('tempDisplay').innerHTML= currentTemp;
    whatColor(currentTemp);
    whatLandscape(currentTemp);
}


//downButton functionality
let downButton = document.querySelector("downButton")

downButton.addEventListener("click", decreaseByOne())

function decreaseByOne() {
    let stringNumber = document.getElementById('tempDisplay').innerHTML;

    let currentTemp = parseInt(stringNumber);
    currentTemp -= 1;
    document.getElementById('tempDisplay').innerHTML = currentTemp;
    whatColor(currentTemp);
    whatLandscape(currentTemp);
}

//functionality to display city name
function displayCity(){
    let inputtedCity = document.getElementById("cityInput");
    let value = inputtedCity.value
    document.getElementById("cityDisplay").innerHTML = value
}