var total = 0;

	function add5() {
		total = total + 5;
		console.log(total);
		$('#result').html(total);
	}

	function add10() {
	total = total + 10;
	$('#result').html(total);

	}
	function sub1() {
		total = 0;
		$('#result').html(total);
	}

	function zero() {
	total = total -1;
		$('#result').html(total);	
	}

$(document).ready(function() {
//the code below tells the action to take
	$('#add5').click(add5);	
	$('#add10').click(add10);
	$('#sub1').click(sub1);	
	$('#zero').click(zero);	

});