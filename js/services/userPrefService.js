'use strict'
let gUser


function Astrological() {
    var randomAstro = ['aaa', 'bbb', 'ccc']
    var random = getRandomIntInclusive(0, 2)
    var randAstr = randomAstro[random]
    return randAstr
}



function createUserPrefs(userName, userEmail, userDob, bgc, color) {
    gUser = {
        userName,
        userEmail,
        userDob,
        bgc,
        color
    }
    saveToStorage('user', gUser)
}


function getUserData() {
    setUserData()
    return gUser
}

function setUserData() {
    gUser = loadFromStorage('user')
    if (!gUser || gUser.length === 0) {
        gUser = createUserPrefs('', '', '', '#ffffff', '#000000')
    }
}