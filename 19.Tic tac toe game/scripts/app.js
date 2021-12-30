const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [{
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];
const playerConfigOverlay = document.querySelector('#config-overlay');
const backdrop = document.querySelector('#backdrop');
const form = document.querySelector('form');
const errorsOutput = document.querySelector('#config-errors');
const gameArea = document.querySelector('#active-game');
const errorPlayername = document.querySelector('.name-alert');
const activePlayerName = document.querySelector('#active-player-name');
const fieldAlert = document.querySelector('.field-alert');
const gameOver = document.querySelector('#game-over')
const gameBoard = document.querySelector('#game-board')

const editPlayer1 = document.querySelector('#edit-player-1-btn');
const editPlayer2 = document.querySelector('#edit-player-2-btn');
const cancelBtn = document.querySelector('#cancel-btn');
const startGame = document.querySelector('#start-game');


editPlayer1.addEventListener('click', openPlayerConfig);
editPlayer2.addEventListener('click', openPlayerConfig);

cancelBtn.addEventListener('click', closePlayerConfig)
backdrop.addEventListener('click', closePlayerConfig)

form.addEventListener('submit', savePlayerConfig)

startGame.addEventListener('click', startNewGame);

gameBoard.addEventListener('click', selectGameField)