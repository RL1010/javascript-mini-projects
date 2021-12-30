let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

console.log('secret number is: '+ secretNumber);

const checkBtn = document.querySelector('.check');
const guess = document.querySelector('.guess')
const message = document.querySelector('.message')
const scoreUI = document.querySelector('.score')
const number = document.querySelector('.number')
const tryAgain = document.querySelector('.again')
const highScoreUI = document.querySelector('.highscore')

const displayMessage = (msg) => message.textContent = msg;

checkBtn.addEventListener('click',() => {
    const value = +guess.value;
    if(!value){
        displayMessage('⛔️ No number')
    }else if (secretNumber === value ){
       displayMessage('🎉 Correct Number');
        document.body.style.backgroundColor = '#60b347'
        number.textContent = secretNumber;
        number.style.width = '25rem'
        if(score > highScore){
            highScore = score
            highScoreUI.textContent = highScore

        }
    }
    else if (value < 0 || value > 20){
        displayMessage('⛔️ Enter a number between 1-20')
    }
    else if(value != secretNumber){
        if(score > 1){
       
        displayMessage(message.textContent = value > secretNumber ? '📈 Too high' : '📈 Too low')
        score --
        scoreUI.textContent = score
    }else{
        displayMessage('💥 You lost the game!...')
        scoreUI.textContent = '0'
        }
    }
})

tryAgain.addEventListener('click', () => {
        score= 20;
        secretNumber = Math.floor(Math.random() * 20 + 1);
        console.log('secret number is: '+ secretNumber);
        guess.value = ''
        document.body.style.backgroundColor = '#222'
        number.textContent = '?';
        number.style.width = '15rem';
       displayMessage('Start guessing...')
        scoreUI.textContent = score;
})