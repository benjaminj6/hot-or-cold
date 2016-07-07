
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});	

	/** ---COMPLETED---
		 * randomNumber() generates a random number
		 * b/w 1 and 100.
		 */
		function randomNumber() {
			return Math.ceil(Math.random() * 100);
		}

	/*--- TESTS TO BE RUN IN VALIDATE FUNCTION ---*/

		/** ---COMPLETED---
		 * checkHistoryFor() Checks to see if a number 
		 * 		is in ul#guessList
		 * parameter: number being searched for
		 * returns: FALSE if number is found.
		 * 					TRUE if not found.
		 */
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
		
		/** ---COMPLETED---
		 * testGuess() checks that a guessValue
		 * falls within 1 and 100 AND is a whole number.
		 * returns: FALSE if criteria are not met
		 * 					TRUE otherwise
		 */
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

		/** ---COMPLETED---
		 * guessEvaluate() compares the user's guess to the 
		 * correct answer and returns a statement about how far
		 * user is from correct answer.
		 * parameter: userGuess, correctAnswer
		 * return:
		 *		If user guesses correct number
		 *		If user is < 5 from number: 'Very hot'
		 *		If user is < 10 from number: 'Hot' 
		 *		If user is < 20 from number: 'Kinda hot 
		 *		If user is < 50 from number: 'Cold' 
		 *		If user is > 50 from number: 'Very Cold' 
		 */
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

		/** ---COMPLETED---
			 * validate() ensures user's guess is a valid
			 * 		option.
			 * parameter: userGuess, correctAnswer
			 * returns FALSE if user's guess is not a valid option;
			 * runs the game if user's guess is a valid option
			 */
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

	/*--- USER CLICKS TO SUBMIT GUESS ---*/
		
		$('#guessButton').click(function(event) {
			validate($('#userGuess').val(), 30);
			$('#userGuess').val('');
		});


		/** ---TO DO---
		 * guessingGame() runs the guessing Game
		 */
		function guessingGame(userGuess, correctAnswer) {
			//Checks guess for validity using validateGuess()
			//adds 1 to counter (span#count)
	  }

  /** ---TO DO---
	 * Starts New Game
   */
	function newGame() {
  	/*--- Resets all game values to default ---*/
  	function resetGame() {
	  /*--- Sets h2#feedback to 'Make your Guess!' ---*/
	  /*--- Sets span#count to '0' ---*/
	  /*--- Clears ul#guesslist of previous guesses ---*/	
		} 
		/*--- randomNumber function 
				* stored in a variable for reuse 
		---*/
	  /*---Runs the guessing Game ---*/
	  /*--- Freezes Guessing Game if user has already won ---*/
	}
});


