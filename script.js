const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
let winner = [0, 0];
 
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = "Taş";
    }
    else if (computerSelection <= 0.67) {
        computerSelection = "Kağıt";
    }
    else {
        computerSelection = "Makas";
    }
    let result = checkWinner(playerSelection, computerSelection);
    if (result == "Player") {
        result += " wins!";
        winner[0]++;
    }
    else if (result == "Computer") {
        result += " wins!";
        winner[1]++;
    }
    else {
        result += " Bir maç daha";
    }
    // score.innerHTML = "<small>Player</small>[" + winner[0] + "] <small>Computer</small>["  + winner[1] + "]";
    score.innerHTML = `<small>Player</small> ${winner[0]} <small>Computer</small> ${winner[1]}`;
    // messager(playerSelection + " vs " + computerSelection + "<br><b>" + result + "</b>");
    messager(`${playerSelection} vs ${computerSelection} <br><b> ${result} </b>`);
}

function messager(mes) {
    message.innerHTML = mes;
}

function checkWinner(pl, co) {
    if (pl === co) {
        return "Berabere!";
    }
    if (pl === "Taş") {
        if (co === "Kağıt") {
            return "Computer";
        }
        else {
            return "Player";
        }
    }
    if (pl === "Kağıt") {
        if (co === "Makas") {
            return "Computer";
        }
        else {
            return "Player";
        }
    }
    if (pl === "Makas") {
        if (co === "Taş") {
            return "Computer";
        }
        else {
            return "Player";
        }
    }
}