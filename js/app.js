$(document).ready(function(){

$(".new").click(function() {
	 $("#guessList").empty();

	 $("#feedback").text("Make your Guess!");
});

var computerChoice = Math.floor((Math.random() * 100) + 1);
var playerInput = $('input#player').val();





$('#add').click(function() {
	$("h1").append(computerChoice);
	
	if( $('input#player').val() > 100 ) {
				alert ("Please enter a number between 1 and 100 inclusive");
}
	else {
	$("p4").append(playerInput);
}

	

if (+playerInput === computerChoice) {
			$("h2").empty().append("You Are Correct");
}

else if (+playerInput > computerChoice - 10 && +playerInput < computerChoice + 10) {
			$("h2").empty().append("YOU are HOTT!");
}

else  {

			$("h2").empty().append("You are Cold");
}

	
});	




});

