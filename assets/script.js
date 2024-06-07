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
		timer = setInterval(setTime,1000); // Start the timer
	});
	// When click on PLAY AGAIN button
	$(playAgainBtn).click(function(){
		$("#winner").css("display","none"); // Hide winner message popup
		$("#gameScreen").css("display","none"); // Hide game screen
		$("#homeScreen").css("display","grid"); // Display home screen
		playAgain(); // Set all the variables and arrays as default declared
	});
	// When click on END GAME button
	$(endGameBtn).click(function(){
		$("#gameScreen").css("display","none"); // Hide the game screen
		$("#homeScreen").css("display","grid"); // Display the home screen
		playAgain(); // Set all the variables and arrays as default declared
	});
	// When click on RESTART button
	$(restartGameBtn).click(function(){
		restartGame();
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

// Show the dogs image
function showDog(cid){
	// Check if dogs images clicked 2nd time
	if(clickedDogs.length != 2)
	{
		let clickedID = cid.match(/\d+/)[0]; // Get the ID of the clicked dog image
		clickedDogsID.push(clickedID); // Push this ID into an array
		$("#front"+clickedID).toggleClass("flipped"); // Front side flipped
		$("#back"+clickedID).toggleClass("flipped"); // Back side flipped
		$("#"+cid).css("pointer-events","none"); // Remove the click event from clicked dog image
		// Get thg name of clicked dogs image
		let dogName = document.querySelector("#back"+clickedID+" > img").src.split("/").pop().split(".")[0];
		clickedDogs.push(dogName); // Push the dogs image name into an array of clicked dogs
		if(clickedDogs.length == 2) // Check if clickedDogs array length is equal to 2
		{
			// Check and compare 1st and 2nd dogs image names
			if(clickedDogs[0] == clickedDogs[1])
			{
				matchedPair++; // Increase total matched pair
				if(matchedPair == 8) // Check total matched pair is 8?
				{
					clearInterval(timer); // Clear the timer countdown
					setTimeout(function(){
						$("#winner").css("display","block"); // Display the winner popup message
					},800);
				}
				setTimeout(function(){
					// Set new background color of the matched dogs images
					$("#back"+clickedDogsID[0]).css("background-color","#76db57");
					$("#back"+clickedDogsID[1]).css("background-color","#76db57");
					clickedDogs = []; // Empty the clicked dogs image array
					clickedDogsID = []; // Empty the clicked dogs ID array
				},500);
			}
			else // If both dogs image are not matched
			{
				setTimeout(function(){
					// Enable the click events on both dogs images
					$("#card"+clickedDogsID[0]).css("pointer-events","auto");
					$("#card"+clickedDogsID[1]).css("pointer-events","auto");
					// Flip the front and back side of both clicked dogs image box
					$("#front"+clickedDogsID[0]).removeClass("flipped");
					$("#back"+clickedDogsID[0]).removeClass("flipped");
					$("#front"+clickedDogsID[1]).removeClass("flipped");
					$("#back"+clickedDogsID[1]).removeClass("flipped");
					clickedDogs = []; // Empty the clicked dogs image array
					clickedDogsID = []; // Empty the clicked dogs ID array
				},800);
			}
		}
	}
}


// Set click event on every Dog's image
function alldogs(){
	let allCards = document.querySelectorAll(".card"); // Get all dogs images
	for(let c = 0; c < allCards.length; c++)
	{
		// Set click event on each dogs image and it will show you the hidden image
		allCards[c].addEventListener('click', function(){
			showDog(this.id);
		});
	}
}

// Timer countdown
function setTime(){
	++totalSeconds; // Increase one second
	// Check if total seconds less than 10, then add trailing 0 to the seconds else not
	if(totalSeconds < 10)
		$("#seconds").text("0"+totalSeconds); // Add trailing 0 to the seconds
	else
		$("#seconds").text(totalSeconds); // Display seconds without trailing 0
}

// Play again
function playAgain(){
	$("#gameScreen").css("display","none"); // Hide the game screen
	$("#homeScreen").css("display","grid"); // Display the home screen
	// Set variables to their default values
	matchedPair = 0, totalSeconds = 0, currentGame = "", clickedDogs = [], clickedDogsID = [];
	clearInterval(timer);
	$("#seconds").text("00"); // Display the timer to 00
	// Set all dogs images array
	allDogs = ["dog1","dog2","dog3","dog4","dog5","dog6","dog7","dog8"];
}

// Restart the game
function restartGame(){
	// Set variables to its default values
	matchedPair = 0, totalSeconds = 0, clickedDogs = [], clickedDogsID = [];
	clearInterval(timer); // Clear the timer countdown
	$("#seconds").text("00"); // Display the timer to 0
	allDogs = ["dog1","dog2","dog3","dog4","dog5","dog6","dog7","dog8"];
	setDogs(); // Set all dogs image again
	timer = setInterval(setTime,1000); // Start the timer countdown
}