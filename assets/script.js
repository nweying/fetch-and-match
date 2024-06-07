$(document).ready(function(){
    // When click on HOW TO PLAY button
	$(howToPlayBtn).click(function(){
		$("#homeScreen").css("display","none"); // Hide the home screen
		$("#howToPlayScreen").css("display","block"); // Display the How to Play screen
	});
	// When click on GO BACK HOME button
	$(goBackToHomeBtn).click(function(){
		$("#howToPlayScreen").css("display","none"); // Hide the How to Play screen
		$("#homeScreen").css("display","block"); // Display the home screen
	});
    // When click on NEW GAME button
	$(newGameBtn).click(function(){
		$("#homeScreen").css("display","none"); // Hide the home screen
		$("#gameScreen").css("display","block"); // Display the game screen
		setDogs(); // Set all the dog's images
	});
});

// Declare default variables and arrays
let timer, gameCards, totalSeconds = 0, matchedPair = 0, currentGuessClicks = 0, clickedDogs = [], clickedDogsID = [];
// Declare all buttons
let newGameBtn = $("#newGameBtn");
let howToPlayBtn = $("#howToPlayBtn");
let goBackToHomeBtn = $("#goBackToHomeBtn");
let finalSeconds = $("#finalSeconds");
let restartGameBtn = $("#restartGameBtn");
let endGameBtn = $("#endGameBtn");
let playAgainBtn = $("#playAgainBtn");
// An array of all Dog's images
let allDogs = ["dog1","dog2","dog3","dog4","dog5","dog6","dog7","dog8"];

// Set all Dogs images
function setDogs(){
	gameCards = '<div class="gamegrid">';
	for(let i = 0; i < 4; i++)
	{
		for(let j = 0; j < 4; j++)
		{
			// Generate one random dog image from an array of dogs images
			let randomDog = allDogs.splice(allDogs.length * Math.random() | 0, 1)[0];
			// Set the HTML div block for each dogs image
			gameCards += '<div class="card col-3" id="card'+i+j+'"><div id="back'+i+j+'" class="cardBack"><img src="/assets/images/'+randomDog+'.jpeg" width="90" height="90"></div><div id="front'+i+j+'" class="cardFront">&#128054;</div></div>';
			// Reset all dogs images array again once it becomes empty
			if(allDogs.length == 0)
				allDogs = ["dog1","dog2","dog3","dog4","dog5","dog6","dog7","dog8"];
		}
	}
	gameCards += '</div>';
	$("#game").html(gameCards); // Display all dogs images
	alldogs(); // Set click events on each dogs images box grid
}

