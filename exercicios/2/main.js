var dolar
var dolar_cot

dolar_cot = 5.12

function conv(){
    
    dolar = parseFloat(document.getElementById("dolar").value)

    dolar = dolar * dolar_cot

    document.getElementById("conv").innerText= dolar

}