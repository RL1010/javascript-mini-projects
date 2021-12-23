let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () =>{
  return Math.floor(Math.random() * 9 + 1)
};

const compareGuesses = (human, computer, target) =>{
  const humanGuess = Math.abs(target - human);
  const computerGuess = Math.abs(target - computer);
return ( humanGuess <= computerGuess ) 
};

const updateScore = (winner) =>{
winner === 'human' ? humanScore += 1 : computerScore += 1;
}

const advanceRound = () =>{
currentRoundNumber += 1;
};
