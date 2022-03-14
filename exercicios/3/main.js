var kilo
var litro
var kilo_litro

function calc() {

    kilo = parseFloat(document.getElementById("km").value)
    litro = parseFloat(document.getElementById("li").value)

    kilo_litro = kilo/litro

    document.getElementById("lol").innerText = kilo_litro+" KM/L"
    
}