
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
		 * return: false if number is found.
		 * 				true if not found.
		 */
		function checkHistoryFor(number) {
			guessListItems = [];
			
			$('.guessListItem').each(function() {
				guessListItems.push( $(this).text() );
			});
			
			for(var i = 0; i < guessListItems.length; i++) {
				currentListItem = parseInt(guessListItems[i]);
				if (currentListItem == number) {
					return false;
				} else {
					return true;
				}
			}
		};
		
		/** ---COMPLETED---
		 * checkGuessRange() checks that a guessValue
		 * falls within 1 and 100.
		 */
		function checkGuessRange(guessValue) {
			guessValue = parseFloat(guessValue);

			if (guessValue < 1 || guessValue > 100) {
				return false;
			} else { 
				return true; 
			}
		};

		console.log(checkGuessRange(3));

		/** ---TO DO---
		 * checkGuessValidity() ensures user's guess is a valid
		 * 		option.
		 */
		function checkGuessValidity() {

		};

		/** ---TO DO---
		 * guessingGame() runs the guessing Game
		 */
		function guessingGame(guess, correctNumber) {
			/**
				*Compares and evaluates user's guess 
			 	*and changes h2#feedback to reflect result 
			 	*/
					/*--- If user guesses correct number ---*/
					/*--- If user is < 5 from number: 'Very hot' ---*/
					/*--- If user is < 10 from number: 'Hot' ---*/
					/*--- If user is < 20 from number: 'Kinda hot ---*/
					/*--- If user is < 50 from number: 'Cold' ---*/
					/*--- If user is > 50 from number: 'Very Cold' ---*/
			/*--- Counter ---*/
			/*--- Include numbers that have been submitted ---*/
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


