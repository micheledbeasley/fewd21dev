$( document ).ready(function() {
	$("#stopButton").click(illuminateRed);
	$("#goButton").click(illuminateGreen);
	$("#slowButton").click(illuminateYellow);


	function illuminateRed(){
		clearLights();
		$('#stopLight').css("background-color", "red");
		console.log("red light!");
	}

	function illuminateGreen(){
		clearLights();
		$('#goLight').css("background-color", "green");
		console.log("green light!");
	}

	function illuminateYellow(){
		clearLights();
		$('#slowLight').css("background-color", "yellow");
		console.log("yellow light!");
	}
	function clearLights(){
		$('#slowLight').css("background-color", "black");
		$('#goLight').css("background-color", "black");
		$('#stopLight').css("background-color", "black");

	}
});




//we are using jquery to folw instructions below





// document.getElementById('stopButton').onclick = illuminateRed;
// document.getElementById('goButton').onclick = illuminateGreen;
// document.getElementById('slowButton').onclick = illuminateYellow;

// function illuminateGreen () {
// 	clearLights();
// 	document.getElementById('goLight').style.backgroundColor = 'green';
// }



// function illuminateRed() {
//   clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// }

// function illuminateYellow() {
//   clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "yellow";
// }


// //<p id= "stoplight" style="background-color:red;>"

// function clearLights() {
//   document.getElementById('stopLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// 	document.getElementById('slowLight').style.backgroundColor = "black";
// }