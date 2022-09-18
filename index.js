let playerHP = document.getElementById("playerHP").innerHTML
let enemyHP = document.getElementById("enemyHP").innerHTML


function slap() {
enemyHP -= 5
bossAttack()
console.log(enemyHP, playerHP)
healthCheck()
}

function punch() {
enemyHP -= 10
bossAttack()
console.log(enemyHP, playerHP)
healthCheck()
}

function kick() {
enemyHP -= 15
bossAttack()
console.log(enemyHP, playerHP)
healthCheck()
}



// ---------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------//

function healthCheck () {
    if (enemyHP >= 1 && playerHP >= 1) {
        document.getElementById("playerHP").innerHTML = playerHP
        document.getElementById("enemyHP").innerHTML = enemyHP
        return
    }
    else if (playerHP <= 0) {
        document.getElementById("playerHP").innerHTML = playerHP
        document.getElementById("enemyHP").innerHTML = enemyHP
        alert("You lose!")
    }
    else {
        document.getElementById("playerHP").innerHTML = playerHP
        document.getElementById("enemyHP").innerHTML = enemyHP
        alert ("You defeated!")
    }
}

function randomIntGen(max) {
    return Math.floor(Math.random() * max)
}

function bossAttack() {
    playerHP -= randomIntGen(15)
}

function gameReset() {
    document.getElementById("playerHP").innerHTML = "100"
    document.getElementById("enemyHP").innerHTML = "100"
}