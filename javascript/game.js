// * There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points 
// 		to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the 
// 		beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//    * When the game begins again, the player should see a new random number. 
// 		Also, all the crystals will have four new hidden values. Of course, the user's 
// 		score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. 
// 		To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.
// * Each crystal should have a random hidden value between 1 - 12.

var score = 0; //should be hidden in the beginning
var wins = 0;
var loses = 0;
var randomNum = 0;
var clicks = 0;
var record = 'n/a';
var currentClicks = 0;

var crystals = [
	{
		color: 'blue',
		value: 0
	},
	{
		color: 'green',
		value: 0
	},
	{
		color: 'red',
		value: 0
	},
	{
		color: 'yellow',
		value: 0
	},
]

function generateRandomValues() {

	randomNum = Math.floor(Math.random()*102+19);

	for (i=0; i<crystals.length; i++){
		crystals[i].value = Math.floor(Math.random()*12+1);
	};
}

function updateScore(){
	score += crystals[i].value;
	currentClicks++;
	$('#clicks').text(currentClicks);
	$('#score').text(score);
}

function updateNumbers(){
	generateRandomValues();
	currentClicks = 0;

	$('#clicks').text(0);
	$('#record').text(record);
	$('#score').text(0);
	$('#wins').text(wins);
	$('#loses').text(loses);
	$('#randomNum').text(randomNum);
	console.log([randomNum, crystals[0].value, crystals[1].value, crystals[2].value, crystals[3].value])
}


updateNumbers();

$('img').on('click', function(){

	$('#result').text('');
	for (i=0; i<crystals.length; i++){
		if($(this).attr('id') == crystals[i].color) {
			updateScore();
		}
	}

	if (score == randomNum){
		
		wins++;
		score = 0;
		$('#result').text('You won!');
		
		if (typeof(record)=='string' || currentClicks < record){
			$('#result').text('You won! New record!');
			record = currentClicks;
		}
		updateNumbers();

	} else if (score > randomNum) {
		
		loses++;
		score = 0;
		$('#result').text('You lost!');
		updateNumbers();
	}


})









