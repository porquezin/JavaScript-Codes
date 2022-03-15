var num1
var num2
var soma

function calc() {

    num1 = parseInt(document.getElementById("numero1").value)

    num2 = parseInt(document.getElementById("numero2").value)

    soma = num1 + num2

    document.getElementById("med").innerText = soma/2
    document.getElementById("soma").innerText = soma
    document.getElementById("porc1").innerText = num1/100*soma
    document.getElementById("porc2").innerText = num2/100*soma 
    
}