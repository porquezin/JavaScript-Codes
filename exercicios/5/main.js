var idade

function calc() {

    idade = parseFloat(document.getElementById("idade").value)

    dia = idade*365
    hora = dia*24
    minutos = hora*60
    
    document.getElementById("me").innerText = idade*12
    document.getElementById("di").innerText = dia
    document.getElementById("ho").innerText = hora
    document.getElementById("mim").innerText = minutos

}