const score0 = document.querySelector("#score--0")
const score1 = document.querySelector("#score--1")
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice')
const resetGameBtn = document.querySelector('.btn--new')
const rollBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')



let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();


rollBtn.addEventListener('click', () => {
    if (playing) {
        // 1. Generating a random dice
        let randomNumber = Math.floor(Math.random() * 6 + 1)
        // 2. Displaying the dice
        dice.src = `./img/dice-${randomNumber}.png`
        dice.classList.remove('hidden')
        // 3. Check for rolled 1
        if (randomNumber !== 1) {
            // Add dice to current score
            currentScore += randomNumber;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        } else {
            // Switch to next player
            switchPlayer();
        }
    }


})

holdBtn.addEventListener('click', () => {
    if (playing) {
        // 1. Add current Score
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 20) {
            //  Finish he game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            dice.classList.add('hidden')
        }
        // 3. Switch Player
        switchPlayer();
    }

})

const switchPlayer = () => {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0

    currentScore = 0
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')

}

resetGameBtn.addEventListener('click', init)