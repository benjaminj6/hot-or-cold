$(document).ready(function(){
'use strict';
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});	

	/*--- RUNS GAME WHEN DOCUMENT LOADS ---*/	
		
    runGame();   

	/*--- RUN GAME FUNCTION ---*/
		function runGame() {

			//--- CHOOSES A RANDOM NUMBER AS THE ANSWER
			var correctAnswer = randomNumber();
			console.log('The answer is ' + correctAnswer);
			
			// RESETS GAME TO DEFAULTS WHEN USER CLICKS 'NEW GAME'  
			$('nav .new').click(function() {
				newGame();
				correctAnswer = randomNumber();
				console.log(correctAnswer);
			});

			//--- USER CLICKS TO SUBMIT GUESS 
			$('#guessButton').click(function(event) {
				var guess = $('#userGuess').val();

				if (validate(($('#userGuess').val()), correctAnswer) === true) {
					guessFeedback(guess, correctAnswer);
		 			addListItem('ul#guessList', guess);
					increaseCounter();
				}
				
				$('#userGuess').val('');	
			});	

		}

  /*--- RANDOM NUMBER GENERATOR ---*/
		function randomNumber() {
			return Math.ceil(Math.random() * 100);
		}

	/*--- NEW GAME FUNCTION ---*/
		function newGame() {
			$('h2#feedback').text('Make Your Guess!');
			$('#guessList').empty();
			$('#count').text(0);
			return randomNumber();
		}

  /*--- VALIDATION FUNCTION ---*/
		function validate(guess, correctAnswer) {
			if(testGuess(guess) === false) {
				$('#feedback').text('Please choose a valid number');
			} else if (checkGuessListFor(guess) === false) {
				$('#feedback').text('You\'ve already chosen this number! Please try a new number');
			} else if (checkGuessListFor(correctAnswer) === false) {
				$('#feedback').text('You\'ve already guessed the correct answer! ' +
					'Click \'New Game\' to play again');
			} else {
				return true;
			}
		}

	/*--- TESTS TO BE RUN IN VALIDATE FUNCTION ---*/

		function checkGuessListFor(number) {
			var guessListItems = [];
			
			$('.guessListItem').each(function() {
				guessListItems.push( $(this).text() );
			});
			
			for(var i = 0; i < guessListItems.length; i++) {
				var currentListItem = parseInt(guessListItems[i]);
				if (currentListItem == number) {
					return false;
				} 
			}

			return true;
		}

		function testGuess(guess) {
			guess = parseFloat(guess);

			if (guess < 1 || guess > 100 ||
					guess % 1 !== 0) {
				return false;
			} else { 
				return true; 
			}
		}
		
	/*--- FUNCTIONS THAT RUN IF ANSWER PASSES VALIDATION ---*/
		function guessFeedback(guess, correctAnswer) {
			var guessDifference = Math.abs(correctAnswer - guess);

			if(guessDifference === 0 ) {
				$('#feedback').text('You won. Click "New Game" to play again ');
			} else if (guessDifference < 5) {
				$('#feedback').text('Very hot');
			} else if (guessDifference < 10) {
				$('#feedback').text('Hot');
			} else if (guessDifference < 20) {
				$('#feedback').text('Kinda hot');
			} else if (guessDifference < 50) {
				$('#feedback').text('Cold');
			} else {
				$('#feedback').text('Very Cold');
			}
		}

		function addListItem(element, content) {
			$(element).append('<li class="guessListItem">' + content + '</li>');
		}

		function increaseCounter() {
			var count = parseInt($('#count').text()) + 1;
			$('#count').text(count);
		}


  /*--- VALIDATION FUNCTION ---*/

		function validate(guess, correctAnswer) {
			if(testGuess(guess) === false) {
				alert('Please choose a valid number');
			} else if (checkGuessListFor(guess) === false) {
				alert('You\'ve already chosen this number! Please try a new number');
			} else if (checkGuessListFor(correctAnswer) === false) {
				alert('You\'ve already guessed the correct answer! ' +
					'Click \'New Game\' to play again');
			} else {
		 		changeText('h2#feedback', guessFeedback(guess, correctAnswer));
		 		addListItem('ul#guessList', guess);
				changeText('span#count', addOne($('span#count').text()));
			}
		}

});

});

