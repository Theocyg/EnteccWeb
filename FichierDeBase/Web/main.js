//https://www.w3schools.com
var s1 = document.getElementById('scroll1');

s1.addEventListener('change', function () 
{	ModiferUnCanal(1,s1);
}, false);
/*
function HexAsci(nb)
{ var hex = Number(nb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex1;
  }
  return hex.toUpperCase(); 
}*/
function Ecrire()
{	//var result = HexAsci(scroll1.value)+HexAsci(scroll2.value)+HexAsci(scroll3.value)+HexAsci(scroll4.value)+HexAsci(scroll5.value)+HexAsci(scroll6.value);
	var valeur=document.getElementById("edit").value;
	var client = new XMLHttpRequest();
	//alert(valeur);
	client.open("GET", "/?envoiValeur="+valeur, false);
	client.send(null);
}
function Lire()
{	var client = new XMLHttpRequest();
	client.open("GET", "data.txt", false);
	client.send(null);
	document.getElementById("lecture").innerHTML=client.responseText; ;
}
function ModiferUnCanal(numeroCanal,scrollBar)// 1, 2, 3... 
{	var trame=document.getElementById("edit").value;
	var entier=Math.abs(scrollBar.value).toString(16).toUpperCase();
	if(scrollBar.value<16) entier="0"+entier;
	var indice=(numeroCanal-1)*2;
	trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
	document.getElementById("edit").value=trame;
	Ecrire();
}
function fullON(){
scroll1.value = 255;
document.getElementById("edit").value="FFFFFFFFFFFF";
Ecrire();
}



