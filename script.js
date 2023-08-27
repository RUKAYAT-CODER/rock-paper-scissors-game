let score = (JSON.parse(localStorage.getItem('score'))) || {
      Win: 0,
      Lose: 0,
      Tie: 0
    }
    updateScoreElement()

  // if (!score){
  //   score ={
  //     Win : 0,
  //     Loose : 0,
  //     Tie :0
  //   }
  // }
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
      intervalId = setInterval( () => {
      const playerMove = makeComputerMove()
      playGame(playerMove)  
      }, 1000)
    isAutoPlaying = true;
  }
  else {
    clearInterval(intervalId)
    isAutoPlaying = false
  }
    
    }


document.querySelector('.js-rock-btn').addEventListener('click', () => {
  playGame('Rock')
});
document.querySelector('.js-paper-btn').addEventListener('click', () => {
  playGame('Paper')
});
document.querySelector('.js-scissors-btn').addEventListener('click', () => {
  playGame('Scissors')
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('Rock')
  }
  else if (event.key === 'p') {
    playGame('Paper')
  }
  else if (event.key === 's') {
    playGame('Scissors')
  }
})

  function playGame(playerMove){
    const computerMove = makeComputerMove()
    let result = '';
    if (playerMove === 'Scissors'){
        if (computerMove === 'Rock') {
          result = 'You Lose'
        }
        else if (computerMove === 'Paper') {
          result = 'You Win'
        }
        else if (computerMove === 'Scissors') {
          result = 'Tie'
        }
    }
    else if(playerMove === 'Paper'){
        if (computerMove === 'Rock') {
          result = 'You Win'
        }
        else if (computerMove === 'Paper') {
          result = 'Tie'
        }
        else if (computerMove === 'Scissors') {
          result = 'You Lose'
        }
    }
    else if (playerMove === 'Rock'){
        if (computerMove === 'Rock') {
        result = 'Tie'
      }
      else if (computerMove === 'Paper') {
        result = 'You Lose'
      }
      else if (computerMove === 'Scissors') {
        result = 'You Win'
      }
    }

    if (result === 'You Win'){
      score.Win += 1;
    }
    else if (result === 'You Lose'){
      score.Lose += 1
    }
    else if (result === 'Tie') {
      score.Tie += 1
    }
    localStorage.setItem('score', JSON.stringify(score))
    updateScoreElement()

     document.querySelector('.js-result').innerHTML = result;
     document.querySelector('.js-moves').innerHTML = `You <img src="${playerMove}.png.webp" class="move-icon"><img src="${computerMove}.png.webp" class="move-icon"> Computer`

    //  Since the computer and player move is displayed, no need for the alert display
//     alert(`You selected ${playerMove} and the computer selected ${computerMove}, ${result}
// Win : ${score.Win}, Lose : ${score.Lose}, Tie : ${score.Tie}`)
    
  }
  function updateScoreElement(){
     document.querySelector('.js-score')
      .innerHTML = `Win : ${score.Win}, Lose : ${score.Lose}, Tie : ${score.Tie}`
  }

  function makeComputerMove(){
    let randomnumber = Math.random()
        let computerMove = '';
        if (randomnumber >= 0 && randomnumber < 1 / 3) {
          computerMove = 'Rock'
        }
        else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
          computerMove = 'Paper'
        }
        else if (randomnumber >= 2 / 3 && randomnumber < 1) {
          computerMove = 'Scissors'
        }
        return computerMove;
  }