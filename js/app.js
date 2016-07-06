
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  /*--- GENERAL FUNCTIONS ---*/	

		/** ---COMPLETED---
		 * randomNumber() generates a random number
		 * b/w 1 and 100.
		 */
		function randomNumber() {
			return Math.ceil(Math.random() * 100);
		};

		/** ---COMPLETED---
		 * checkHistoryFor() Checks to see if a number 
		 * 		is in ul#guessList
		 * parameter: number being searched for
		 * returns: FALSE if number is found.
		 * 					TRUE if not found.
		 */
		function checkHistoryFor(number) {
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
		};
		

		/** ---COMPLETED---
		 * checkGuessNumber() checks that a guessValue
		 * falls within 1 and 100 AND is a whole number.
		 * returns: FALSE if criteria are not met
		 * 					TRUE otherwise
		 */
		function testGuess(guess) {
			guess = parseFloat(guess);

			if (guess < 1 || guess > 100 ||
					guess % 1 != 0) {
				return false;
			} else { 
				return true; 
			}
		};

		/** ---COMPLETED---
		 * validate() ensures user's guess is a valid
		 * 		option.
		 * parameter: userGuess, correctAnswer
		 * returns TRUE if user's guess is valid.
		 *		valid = guess not: correct number, previously
		 *						previously guessed item, OR invalid number type
		 * returns FALSE otherwise.
		 */
		function validate(guess, correctAnswer) {
			if(checkHistoryFor(guess) == false ||
					checkHistoryFor(correctAnswer) == false ||
					testGuess(guess) == false) {
				alert('Please choose a valid number');
			} else {
		 		//Run the code to play game;
			}
		};

		console.log(validate(7, 6))
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
		function guessFeedback(userGuess, correctAnswer) {
			var guessDifference = Math.abs(correctAnswer - userGuess);

			if(guessDifference == 0 ) {
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

		/** ---TO DO---
		 * guessingGame() runs the guessing Game
		 */
		function guessingGame(userGuess, correctAnswer) {
			//Checks guess for validity using validateGuess()
			//If valid guess then runs guessEvaluate()
			//if correct answer then ends the game
			//changes h2#feedback to reflect guessEvaluate() value;
			//appends the userGuess to ul#guessList 
			//adds 1 to counter (span#count)
	  };

  /** ---TO DO---
	 * Starts New Game
   */
	function newGame() {
  	/*--- Resets all game values to default ---*/
  	function resetGame() {
	  /*--- Sets h2#feedback to 'Make your Guess!' ---*/
	  /*--- Sets span#count to '0' ---*/
	  /*--- Clears ul#guesslist of previous guesses ---*/	
		}; 
		/*--- randomNumber function 
				* stored in a variable for reuse 
		---*/
	  /*---Runs the guessing Game ---*/
	  /*--- Freezes Guessing Game if user has already won ---*/
	};
});


