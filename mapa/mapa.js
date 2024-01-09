var fecha = new Date();
var varcreditos = 0;

function XD() {
	document.getElementById("fecha").innerHTML = "A fecha de que veas esto (" + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() +"), hay 7 sitios clave en la Puerta del Sol";
}

function link1() {
	//document.getElementsByClassName("filaabajo").style.color = "white";
	document.getElementById("cuadro3").style.backgroundColor = "white";
	document.getElementById("cuadro4").style.backgroundColor = "white";
	document.getElementsByClassName("filaarriba").innerHTML = "XD";
	document.getElementById("nº").innerHTML = "1";
	document.getElementById("sitio").innerHTML = "Estación de Metro de Sol";
}

function link2() {
	document.getElementById("cuadro3").style.backgroundColor = "white";
	document.getElementById("cuadro4").style.backgroundColor = "white";
	document.getElementsByClassName("filaarriba").innerHTML = "XD";
	document.getElementById("nº").innerHTML = "2";
	document.getElementById("sitio").innerHTML = "Km. 0";
}

function link3() {
	document.getElementById("cuadro3").style.backgroundColor = "white";
	document.getElementById("cuadro4").style.backgroundColor = "white";
	document.getElementsByClassName("filaarriba").innerHTML = "XD";
	document.getElementById("nº").innerHTML = "3";
	document.getElementById("sitio").innerHTML = "Estatua ecuestre de Carlos III";
}

function link4() {
	document.getElementById("cuadro3").style.backgroundColor = "white";
	document.getElementById("cuadro4").style.backgroundColor = "white";
	document.getElementsByClassName("filaarriba").innerHTML = "XD";
	document.getElementById("nº").innerHTML = "4";
	document.getElementById("sitio").innerHTML = "Estatua del oso y el madroño";
}

function link5() {
	document.getElementById("cuadro3").style.backgroundColor = "white";
	document.getElementById("cuadro4").style.backgroundColor = "white";
	document.getElementsByClassName("filaarriba").innerHTML = "XD";
	document.getElementById("nº").innerHTML = "5";
	document.getElementById("sitio").innerHTML = "Real Casa de Correos";
}

function link6() {
	document.getElementById("cuadro3").style.backgroundColor = "white";
	document.getElementById("cuadro4").style.backgroundColor = "white";
	document.getElementsByClassName("filaarriba").innerHTML = "XD";
	document.getElementById("nº").innerHTML = "6";
	document.getElementById("sitio").innerHTML = "Tío Pepe";
}

function link7() {
	document.getElementById("cuadro3").style.backgroundColor = "white";
	document.getElementById("cuadro4").style.backgroundColor = "white";
	document.getElementsByClassName("filaarriba").innerHTML = "XD";
	document.getElementById("nº").innerHTML = "7";
	document.getElementById("sitio").innerHTML = "Hotel París";
}

function link8() {
	document.getElementById("cuadro3").style.backgroundColor = "white";
	document.getElementById("cuadro4").style.backgroundColor = "white";
	document.getElementsByClassName("filaarriba").innerHTML = "XD";
	document.getElementById("nº").innerHTML = "8";
	document.getElementById("sitio").innerHTML = "Casa del Ratón Pérez";
}

function link0() {
	document.getElementById("nº").innerHTML = "0";
	document.getElementById("sitio").innerHTML = "Ninguno";
	document.getElementById("cuadro3").style.backgroundColor = "black";
	document.getElementById("cuadro4").style.backgroundColor = "black";
}


function creditos() {
	if (varcreditos === 0) {
		document.getElementById("creditosXD").className = "creditos";
		varcreditos++;
	} else {
		document.getElementById("creditosXD").className = "creditos0";
		varcreditos--;
	}
}