//function ensures that the code inside it will only run after the page has finished loading.
$(document).ready(function() {
    var playerScore = 0;
    var computerScore = 0;
    var playerDice1 = 0;
    var playerDice2 = 0;
    var computerDice1 = 0;
    var computerDice2 = 0;
    var rollCount = 0;
    var maxRolls = 3;
  
    function rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    function calculateScore(die1, die2) {
      if (die1 === 1 || die2 === 1) {
        return 0;
      } else if (die1 === die2) {
        return (die1 + die2) * 2;
      } else {
        return die1 + die2;
      }
    }
  
    function displayRoundResults() {
        // Get the dice image file names
  var diceImages = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
  
  // Get the indices of the dice images
  var playerDice1Index = playerDice1 - 1;
  var playerDice2Index = playerDice2 - 1;
  var computerDice1Index = computerDice1 - 1;
  var computerDice2Index = computerDice2 - 1;

  // Set the dice image sources
  var playerDice1Src = 'images/' + diceImages[playerDice1Index];
  var playerDice2Src = 'images/' + diceImages[playerDice2Index];
  var computerDice1Src = 'images/' + diceImages[computerDice1Index];
  var computerDice2Src = 'images/' + diceImages[computerDice2Index];
  
// Display the dice images
$('#player-dice').html('<img src="' + playerDice1Src + '" style="max-width: 40px; max-height: 40px;"> and <img src="' + playerDice2Src + '" style="max-width: 40px; max-height: 40px;">');
$('#computer-dice').html('<img src="' + computerDice1Src + '" style="max-width: 40px; max-height: 40px;"> and <img src="' + computerDice2Src + '" style="max-width: 40px; max-height: 40px;">');

  
  // Display the round scores and total scores
  $('#player-round-score').text(calculateScore(playerDice1, playerDice2));
  $('#computer-round-score').text(calculateScore(computerDice1, computerDice2));
  $('#player-total-score').text(playerScore);
  $('#computer-total-score').text(computerScore);
  
  // Display the round number
  $('#round-number').text(rollCount);
      }
  
      function displayGameResults() {
        if (playerScore > computerScore) {
          $('#result-image').attr('src', 'images/win.jpg');
          $('#result-image').show();
        } else if (playerScore < computerScore) {
          $('#result-image').attr('src', 'images/lose.jpg');
          $('#result-image').show();
        } else {
          $('#result-image').attr('src', 'images/tie.png');
          $('#result-image').show();
        }
      }

  //function is assigned to the click event of the "Roll Dice" button. 
  //When the button is clicked, the function will be called, and it will execute the code inside it, which rolls the dice, updates the scores, and displays the results.
    function rollDiceButton() {
        if (rollCount < maxRolls) {
          playerDice1 = rollDice();
          playerDice2 = rollDice();
          computerDice1 = rollDice();
          computerDice2 = rollDice();
      
          playerScore += calculateScore(playerDice1, playerDice2);
          computerScore += calculateScore(computerDice1, computerDice2);
      
          rollCount++;
      
          displayRoundResults();

        }
      
        if (rollCount === maxRolls) {
          $('#roll-button').prop('disabled', true);
          displayGameResults();
        }
      }
      
      $('#roll-button').click(rollDiceButton);
      
  //function is assigned to the click event of the "Reset" button. 
  //When the button is clicked, the function will be called, and it will reset all the game variables and scores to their initial values, clear the round and total scores and results, and enable the "Roll Dice" button.
    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        playerDice1 = 0;
        playerDice2 = 0;
        computerDice1 = 0;
        computerDice2 = 0;
        rollCount = 0;
        $('#player-dice').empty();
        $('#computer-dice').empty();
        $('#player-round-score').empty();
        $('#computer-round-score').empty();
        $('#player-total-score').text(playerScore);
        $('#computer-total-score').text(computerScore);
        $('#game-result').empty();
        $('#roll-button').prop('disabled', false);
        $('#game-result').css('display', 'none');
        $('#result-image').css('display', 'none');
      }
      
      $('#reset-button').click(function() {
        resetGame();
      });
      
  });
  