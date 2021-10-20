'use strict'

function init() {
    var user = getUserData()
    let elBody = document.querySelector('body')
    let userBgColor = loadFromStorage('backgroundColor')
    let userColor = loadFromStorage('color')
    if (!user.bgc || !user.color) return
    console.log(userBgColor);
    elBody.style.backgroundColor = user.bgc
    elBody.style.color = user.color
    onSetAstro()
}




function changeBgc(bgc) {
    let elBody = document.querySelector('body')
    elBody.style.backgroundColor = bgc
}

function changeColor(color) {
    let elBody = document.querySelector('body')
    elBody.style.color = color
}

function changeUserPref(ev) {
    ev.preventDefault() //to prevent the refresh
    console.log(ev);
    let userName = document.querySelector('[name=fullName]').value
    let userEmail = document.querySelector('[name=email]').value;
    let userDob = document.querySelector('[name=dob]').value;
    var bgc = document.querySelector('[name=color-bg]').value;
    var color = document.querySelector('[name=color-txt]').value;

    createUserPrefs(userName, userEmail, userDob, bgc, color)
}


function onSetAstro() {
    var ans = Astrological()
    document.querySelector('.astro').innerText = ans;
}



function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}

function checkPasswords() {
    var elPass = document.getElementById("password");
    var elConfirmPass = document.getElementById("confirmPassword");

    if (elPass.value !== elConfirmPass.value) elConfirmPass.setCustomValidity("Passwords do not match");
    else elConfirmPass.setCustomValidity("");
}