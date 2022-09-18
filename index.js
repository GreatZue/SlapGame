let playerHP = document.getElementById("playerHP").innerHTML
let enemyHP = document.getElementById("enemyHP").innerHTML

function slap() {
enemyHP -= 5
console.log(enemyHP)
}

function punch() {
enemyHP -= 10
console.log(enemyHP)
}

function kick() {
enemyHP -= 15
console.log(enemyHP)
}


// enemyHP = parseInt(enemyHP, 10)