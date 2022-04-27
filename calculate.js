let select = document.getElementById("product");


function situations (){
let vSituations = document.getElementById("product").value;
 document.getElementById("vtext").innerHTML = vSituations + " "+ "Pontos.";
 
}

function arrests(){
let vArrests = document.getElementById("product2").value;
let vInput = document.getElementById("value").value;
 document.getElementById("vtext2").innerHTML = vArrests * vInput + " "+ "Pontos.";
 
}