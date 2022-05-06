let select = document.getElementById("product");



function situations() {
    let vSituations = document.getElementById("product").value;
    document.getElementById("vtext").innerHTML = vSituations + " " + "Pontos.";

   

}

function arrests() {
    let vArrests = document.getElementById("product2").value;
    let vInput = document.getElementById("value").value;
    document.getElementById("vtext2").innerHTML = vArrests * vInput + " " + "Pontos.";

    if (vArrests === "5" && vInput >= 1  || vArrests === "10" && vInput >= 1 || vArrests === "12" && vInput >= 1 ){

        document.getElementById("vtext3").innerHTML = "Mais 10 pontos pelo ponto debelado"
    } 

    else if (vArrests === "5" && vInput <= 0 || vArrests === "10" && vInput <= 0 || vArrests === "12" && vInput <= 0 ){

        document.getElementById("vtext2").innerHTML = "--> Digite a quantidade em gramas " 
      
     }
    
    
 
     
}
