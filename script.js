input = []

function calc() {

	// gather the input
	var a = input[0]
	var b = input[1]
	var op = input[2]

	// evalute and display
	var r = eval(a + op + b)
	alert('Result: ' + r)

	//reset the stack
	input = []
	input.push(r)
	$('#screen').val('')

}

function pushInput(arg) {
	$('#screen').val($('#screen').val() + '' + arg)
}

function gatherInput() {

	if ($('#enter').val() == 'Enter') { //if RPN N
		input.push($('#screen').val())
		$('#screen').val('')
		$('#display').html(JSON.stringify(input))
	} else {
		calcInfix()
	}
}

function handleOperation(arg) {

	if ($('#enter').val() == '=') {
		input.push($('#screen').val())
		input.push(arg)
		$('#screen').val('');
		console.log(input)
	}

	if (input.length < 2 && $('#enter').val() == 'Enter') {
		input.push($('#screen').val())
		input.push(arg)

		if ($('#enter').val() == 'Enter') {
			$('#screen').val($('')); //clear the screen 

			if (input.length >= 3) {
				calc();
			}
			$('#display').html(JSON.stringify(input))
		}
	}
}

function clearStuff() {
	input = []
	$('#screen').val('')
	$('#display').html(JSON.stringify(input))
}

function addDot() {
	$('#screen').val($('#screen').val() + '.')
}

// HACK - but a small one, since RPN does not offer this functionality
function toggleMode() {
	if ($('#enter').val() == '=')
		$('#enter').val('Enter')
	else $('#enter').val('=')
}

function calcInfix() {

	var s = "";
	input.push($('#screen').val())

	for(val of input) {
		s = s + '' + val
	}

	console.log(input)

	var r = eval(s)
	$('#screen').val(r)
}