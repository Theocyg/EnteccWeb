//https://www.w3schools.com
var scroll1 = document.getElementById('scroll1');
var scroll2 = document.getElementById('scroll2');
var scroll3 = document.getElementById('scroll3');
var scroll4 = document.getElementById('scroll4');
var scroll5 = document.getElementById('scroll5');
var scroll6 = document.getElementById('scroll6');

scroll1.addEventListener('change', function () {
	ModiferUnCanal(1, s1);
}, false);
scroll2.addEventListener('change', function () {
	ModiferUnCanal(2, s2);
}, false);
scroll3.addEventListener('change', function () {
	ModiferUnCanal(3, s3);
}, false);
scroll4.addEventListener('change', function () {
	ModiferUnCanal(4, s4);
}, false);
scroll5.addEventListener('change', function () {
	ModiferUnCanal(5, s5);
}, false);
scroll6.addEventListener('change', function () {
	ModiferUnCanal(6, s6);
}, false);


function HexAsci(nb) {
	var hex = Number(nb).toString(16);
	if (hex.length < 2) {
		hex = "0" + hex; //ici le hex il y avait un 1 rajouté
	}
	return hex.toUpperCase();
}
function Ecrire() {
	 var scroll1 = document.getElementById('scroll1').value;
	 var scroll2 = document.getElementById('scroll2').value;
	 var scroll3 = document.getElementById('scroll3').value;
	 var scroll4 = document.getElementById('scroll4').value;
	 var scroll5 = document.getElementById('scroll5').value;
	 var scroll6 = document.getElementById('scroll6').value;
	var result = HexAsci(scroll1) + HexAsci(scroll2) + HexAsci(scroll3) + HexAsci(scroll4) + HexAsci(scroll5) + HexAsci(scroll6);
	var valeur = document.getElementById("edit").value;
	// Dans la fonction Ecrire(), On essaye d'envoyer une
	// requête XMLHttpRequest en utilisant la valeur "valeur" qui est supposée être récupérée à partir d'un élément avec l'ID "edit" mais on a pas d'id "edit" dans l'html
	var client = new XMLHttpRequest();
	alert(valeur);
	client.open("GET", "http://localhost:8080/?envoiValeur=" + valeur, false);
	client.send(null);
}
function Lire() { //Fonction utilisé nul part
	var client = new XMLHttpRequest();
	client.open("GET", "data.txt", false);
	client.send(null);
	document.getElementById("lecture").innerHTML = client.responseText;;
}
function ModiferUnCanal(numeroCanal, scrollBar)// 1, 2, 3... 
{
	var trame = document.getElementById("edit").value;
	var entier = Math.abs(scrollBar.value).toString(16).toUpperCase();
	if (scrollBar.value < 16) entier = "0" + entier;
	var indice = (numeroCanal - 1) * 2;
	trame = trame.substring(0, indice) + entier + trame.substring(indice + 2, trame.length);
	document.getElementById("edit").value = trame;
	Ecrire();
}
function fullON() {
	 var scroll1 = document.getElementById('scroll1');
	 var scroll2 = document.getElementById('scroll2');
	 var scroll3 = document.getElementById('scroll3');
	 var scroll4 = document.getElementById('scroll4');
	 var scroll5 = document.getElementById('scroll5');
	 var scroll6 = document.getElementById('scroll6');
	 scroll1.value = 255;
	 scroll2.value = 255;
	 scroll3.value = 255;
	 scroll4.value = 255;
	 scroll5.value = 255;
	 scroll6.value = 255;

	var edit = document.getElementById("edit");
	edit.value = "FFFFFFFFFFFF";
	Ecrire();
	// La variable edit est utilisée dans la fonction fullON(), mais il n'y a pas d'élément avec l'ID "edit" dans le code HTML
}

function fullOFF() {
	var scroll1 = document.getElementById('scroll1');
	var scroll2 = document.getElementById('scroll2');
	var scroll3 = document.getElementById('scroll3');
	var scroll4 = document.getElementById('scroll4');
	var scroll5 = document.getElementById('scroll5');
	var scroll6 = document.getElementById('scroll6');
	scroll1.value = 0;
	scroll2.value = 0;
	scroll3.value = 0;
	scroll4.value = 0;
	scroll5.value = 0;
	scroll6.value = 0;

   var edit = document.getElementById("edit");
   edit.value = "";
   Ecrire();
}



