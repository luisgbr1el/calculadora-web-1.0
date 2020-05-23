function soma() {
	var n1 = parseFloat(document.getElementById('n1').value);
	var n2 = parseFloat(document.getElementById('n2').value);
	var soma = n1 + n2;

	var resul = document.getElementById('resul').innerHTML = "Resultado: " + soma;
}

function sub() {
	var n1 = parseFloat(document.getElementById('n1').value);
	var n2 = parseFloat(document.getElementById('n2').value);
	var sub = n1 - n2;

	var resul = document.getElementById('resul').innerHTML = "Resultado: " + sub;
}

function mult() {
	var n1 = parseFloat(document.getElementById('n1').value);
	var n2 = parseFloat(document.getElementById('n2').value);
	var mult = n1 * n2;

	var resul = document.getElementById('resul').innerHTML = "Resultado: " + mult;
}

function div() {
	var n1 = parseFloat(document.getElementById('n1').value);
	var n2 = parseFloat(document.getElementById('n2').value);
	var div = n1 / n2;

	var resul = document.getElementById('resul').innerHTML = "Resultado: " + div;
}