var comparison;

function compare() {
	var a = $('#a').val();
	var b = $ ('#b').val();

	if (a < b) {
		comparison = '<';

	} else if  (a > b) {
		comparison = '>';

	} else if (a === b) {
		comparision = '===';

	} else {
	comparison = "N/A";
	}

	$('#comparison').html(comparison);

	console.log(comparison);
}

$( document ).ready(function() {
	$('#submit').click(compare);
});




/* go to general to see to code solution to
figure out why my code is broken*/

