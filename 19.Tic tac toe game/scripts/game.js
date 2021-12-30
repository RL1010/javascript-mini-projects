const resetGameStatus = () => {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOver.firstElementChild.innerHTML =`You Won, <span id="winner-name">PLAYER NAME</span>`
    gameOver.style.display = 'none';

    let gameBoardIndex = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            gameData[i][j] = 0;
            let gameBoardElement = gameBoard.children[gameBoardIndex]
            gameBoardElement.textContent = '';
            gameBoardElement.classList.remove('disabled')

            gameBoardIndex++;
        }
    }
}

const startNewGame = () => {

    if (players[0].name === '' || players[1].name === '') {
        errorPlayername.textContent = 'Please set custom player names for both players!';
        errorPlayername.classList.add('error')
        return;
    }

    resetGameStatus();
    activePlayerName.textContent = players[activePlayer].name;
    gameArea.style.display = 'block';
    errorPlayername.style.display = 'none';
}


const switchPlayer = () => {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    activePlayerName.textContent = players[activePlayer].name;

}
const selectGameField = e => {

    if(e.target.tagName != 'LI' || gameIsOver){
        return;
    }
    const selectedField = e.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        fieldAlert.textContent = 'Please select an empty field';
        fieldAlert.classList.add('error');
        return;

    }
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    // console.log(gameData)
    const winnerId = checkForGameOver();
    if(winnerId !==0){
        endGame(winnerId);
    }
    currentRound++;
    switchPlayer();
    fieldAlert.textContent = '';
}
const checkForGameOver = () => {
    // checking the rows for equality
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]) {
            return gameData[i][0];
        }

    }
    // checking the columns for equality
    for (let i = 0; i < 3; i++) {
        if (gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]) {
            return gameData[0][i];
        };

    }
    //Diagonal: Top left to bottom right
    if (gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }
    //Diagonal: Top right to bottom left
    if (gameData[0][2] > 0 &&
        gameData[0][2] === gameData[1][1] &&
        gameData[1][1] === gameData[2][0]) {
        return gameData [0][2];
    }
    if(currentRound === 9){
        return -1;
    }
    return 0;

}
 
const endGame = winnerId => {
    gameIsOver = true;
    gameOver.style.display = 'block'
    if(winnerId > 0){
        const winnerName = players[winnerId - 1].name;
        gameOver.firstElementChild.firstElementChild.textContent = winnerName;
    }else{
        gameOver.firstElementChild.textContent = 'It \'s a Draw!';
    }
    }
   