
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});	

	/*--- RUNS NEWGAME FUNCTION WHEN DOCUMENT LOADS ---*/	
		
    runGame();   

	/*--- RUN GAME FUNCTION ---*/

		function runGame() {

			//--- RESETS VALUES TO DEFAULT
			// resetValues();

			//--- CHOOSES A RANDOM NUMBER AS THE ANSWER
			var correctAnswer = randomNumber();
			console.log(correctAnswer);
			
			// RESETS GAME TO DEFAULTS WHEN USER CLICKS 'NEW GAME'  

			$('nav .new').click(function() {
				resetValues();
				correctAnswer = randomNumber();
				console.log(correctAnswer);
			});

			//--- USER CLICKS TO SUBMIT GUESS 
			$('#guessButton').click(function(event) {
				validate(($('#userGuess').val()), correctAnswer);
				$('#userGuess').val('');
			});	

		}

	/*--- RESET VALUES FUNCTION ---*/

		function resetValues() {
			$('h2#feedback').text('Make Your Guess!');
			$('#guessList').empty();
			$('#count').text(0);
			return randomNumber();
		}

  /*--- RANDOM NUMBER GENERATOR ---*/

		function randomNumber() {
			return Math.ceil(Math.random() * 100);
		}

	/*--- TESTS TO BE RUN IN VALIDATE FUNCTION ---*/

		function checkGuessListFor(number) {
			guessListItems = [];
			
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
				return 'You won. Click "New Game" to play again ';
			} else if (guessDifference < 5) {
				return 'Very hot';
			} else if (guessDifference < 10) {
				return 'Hot';
			} else if (guessDifference < 20) {
				return 'Kinda hot';
			} else if (guessDifference < 50) {
				return 'Cold';
			} else {
				return 'Very Cold';
			}
		}

		function changeText(element, string) {
			return $(element).text(string);
		}

		function addListItem(element, content) {
			$(element).append('<li class="guessListItem">' + content + '</li>');
		}

		function addOne(number) {
			number = parseInt(number);
			return number + 1;
		}

  /*--- VALIDATION FUNCTION ---*/

		function validate(guess, correctAnswer) {
			console.log(testGuess(guess));
			console.log(guess);
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


