function chatBot() {

	// current user input
	this.input;

	/**
	 * respondTo
	 *
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 *
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {

		this.input = input.toLowerCase();

		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return "Hey!";

		if (this.match('no'))
		{
			var answer = ["Oh, a newcomer, how exciting! Sit back, this is gonna be awesome!", "Let me ask you some questions:", "What kind of movies do you watch?"];
			return answer;
		}

		if (this.match('sci-fi and action'))
			return "Cool! What is your favorite tv series?";

		if (this.match("game of thrones"))
		{
			var answer = ["Oh yes, winter is coming! :)", "I have some great ideas for you.", "Berserk from Kentarō Miura"];
			return answer;
		}

		if(this.input == 'noop')
			return;

		return "nani?";
	}

	/**
	 * match
	 *
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {

		return new RegExp(regex).test(this.input);
	}
}