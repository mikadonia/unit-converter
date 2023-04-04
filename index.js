/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
inputEl = document.getElementById("number")
lengthEl = document.getElementById("length-el")
volumeEl = document.getElementById("volume-el")
massEl = document.getElementById("mass-el")

function convert(number){
    lenghtM = number/3.281
    lengthF = number * 3.281

    volumeL = number/0.264
    volumeG = number * 0.264

    massK = number/2.204
    massP = number * 2.204

    lengthEl.innerHTML = `${number} meters = ${lengthF.toFixed(3)} feet | ${number} feet = ${lenghtM.toFixed(3)} meters`
    volumeEl.innerHTML = `${number} liters = ${volumeG.toFixed(3)} gallons | ${number} gallons = ${volumeL.toFixed(3)} liters`
    massEl.innerHTML = `${number} kilos = ${massP.toFixed(3)} pounds | ${number} pounds = ${massK.toFixed(3)} kilos`
}   

function enter(){
    convert(inputEl.value)
}