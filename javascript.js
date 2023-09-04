let Gameboard = (function(){
    let gameboard = ["","","","","","","","",""]
    let boardBox = []
    let turn = 0

    let cont = document.querySelector(".cont")
    for (i = 0; i < gameboard.length; i++) {
        let box = document.querySelector(`.cont :nth-child(${i+1})`)
        box.addEventListener("click", function() {placePiece(event.target.id)})
    }

    function placePiece(boxId) {
        if ((gameboard[boxId] === "X" || (gameboard[boxId] === "O"))) {
            return
        }
        if ((turn === 0) || (turn === 2) || (turn === 4) || (turn === 6) || (turn === 8)) {
            gameboard[boxId] = "X"
        } else {
            gameboard[boxId] = "O"
        }
        render()
        checkBoard()
    }

    render()
    function render() {
        for (i = 0; i < gameboard.length; i++) {
            let box = document.querySelector(`.cont :nth-child(${i+1})`)
            box.textContent = gameboard[i]
            boardBox.push(gameboard[i])
        }
    }

    function reset() {
        gameboard = ["","","","","","","","",""]
        turn = 0
        render()
    }

    function checkBoard() {
        if (
            (gameboard[0] + gameboard[1] + gameboard[2] === "XXX") ||
            (gameboard[3] + gameboard[4] + gameboard[5] === "XXX") ||
            (gameboard[6] + gameboard[7] + gameboard[8] === "XXX") ||
            (gameboard[0] + gameboard[3] + gameboard[6] === "XXX") ||
            (gameboard[1] + gameboard[4] + gameboard[7] === "XXX") ||
            (gameboard[2] + gameboard[5] + gameboard[8] === "XXX") ||
            (gameboard[0] + gameboard[4] + gameboard[8] === "XXX") ||
            (gameboard[2] + gameboard[4] + gameboard[6] === "XXX")  
        ){
            gameboard = ["","","","","","","","",""]
            turn = 0
            render()
            alert(`${player1.name} wins`)
        } else if (
            (gameboard[0] + gameboard[1] + gameboard[2] === "OOO") ||
            (gameboard[3] + gameboard[4] + gameboard[5] === "OOO") ||
            (gameboard[6] + gameboard[7] + gameboard[8] === "OOO") ||
            (gameboard[0] + gameboard[3] + gameboard[6] === "OOO") ||
            (gameboard[1] + gameboard[4] + gameboard[7] === "OOO") ||
            (gameboard[2] + gameboard[5] + gameboard[8] === "OOO") ||
            (gameboard[0] + gameboard[4] + gameboard[8] === "OOO") ||
            (gameboard[2] + gameboard[4] + gameboard[6] === "OOO")
        ){
            gameboard = ["","","","","","","","",""]
            turn = 0
            render()
            alert(`${player2.name} wins`)
        } else if (
            (gameboard[0]) && (gameboard[1]) && (gameboard[2]) &&
            (gameboard[3]) && (gameboard[4]) && (gameboard[5]) &&
            (gameboard[6]) && (gameboard[7]) && (gameboard[8])
        ) {
            gameboard = ["","","","","","","","",""]
            turn = 0
            render()
            alert("tie")
        } else {
            return turn += 1
        }
    }
    return {reset}
})()

let Players = (function(){
    let player = {
        create: function(values) {
            let instance = Object.create(this)
            Object.keys(values).forEach(function(key) {
                instance[key] = values[key]
            });
            return instance
        }
    }
    return {player}
})()

let Interactive = (function(){
    let playerName1Button = document.querySelector(".player-1-button") 
    playerName1Button.addEventListener("click", function() {
        setPlayerName1(document.querySelector(".player-1").value)
    })

    let playerName2Button = document.querySelector(".player-2-button")
    playerName2Button.addEventListener("click", function() {
        setPlayerName2(document.querySelector(".player-2").value)
    })

    function setPlayerName1(playerName) {
        let = player1 = Players.player.create({name: `${playerName}`})
        document.querySelector(".player-1").value = ""
        let displayName1 = document.querySelector(".display-name1")
        displayName1.textContent = player1.name
    }
    function setPlayerName2(playerName) {
        let = player2 = Players.player.create({name: `${playerName}`})
        document.querySelector(".player-2").value = ""
        let displayName2 = document.querySelector(".display-name2")
        displayName2.textContent = player2.name
    }

    let reset = document.querySelector(".reset-button")
    reset.addEventListener("click", function() {resetGame()})

    function resetGame() {
        Gameboard.reset()
    }
})()


