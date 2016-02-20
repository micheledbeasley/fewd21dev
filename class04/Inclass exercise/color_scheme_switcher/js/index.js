
//On click white button set colors white
document.getElementById('whiteButton').onclick = switchToWhite;

//On click gray button set colors grey
document.getElementById('grayButton').onclick = switchToGray;


//function to make colors white
function switchToWhite(){
	//change background
	document.body.style.backgroundColor = "white";
	//change text colors
	document.body.style.color = "black";
}

//function to make colors grey
function switchToGray(){
	document.body.style.backgroundColor = "gray";
	//change text colors
	document.body.style.color = "white";
}	

	//change background
	//change text colors
