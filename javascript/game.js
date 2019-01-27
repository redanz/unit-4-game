var score = 0;
var wins = 0;
var losses = 0;
var randomNum = 0;
var clicks = 0;
var record = 'n/a';
var currentClicks = 0;
$('#round-result').text('Click Crystal to Play')

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
	$('#losses').text(losses);
	$('#randomNum').text(randomNum);
}


updateNumbers();

$('img').on('click', function(){

	$('#round-result').text('');
	for (i=0; i<crystals.length; i++){
		if($(this).attr('id') == crystals[i].color) {
			updateScore();
		}
	}

	if (score == randomNum){
		
		wins++;
		score = 0;
		$('#round-result').text('You won!');
		
		if (typeof(record)=='string' || currentClicks < record){
			$('#round-result').text('New record!');
			record = currentClicks;
		}
		updateNumbers();

	} else if (score > randomNum) {
		
		losses++;
		score = 0;
		$('#round-result').text('You lost!');
		updateNumbers();
	}

})









