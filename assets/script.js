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
});