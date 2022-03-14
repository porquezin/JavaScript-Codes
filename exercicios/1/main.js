var num1;
var num2;

function soma(){

    num1 = parseInt(document.getElementById("n1").value);
    num2 = parseInt(document.getElementById("n2").value);

    document.getElementById("resp").innerText = num1 + num2;
}

function sub(){

    num1 = parseInt(document.getElementById("n1").value);
    num2 = parseInt(document.getElementById("n2").value);

    document.getElementById("resp").innerText = num1 - num2;
}

function mult(){

    num1 = parseInt(document.getElementById("n1").value);
    num2 = parseInt(document.getElementById("n2").value);

    document.getElementById("resp").innerText = num1 * num2;
}

function div(){

    num1 = parseInt(document.getElementById("n1").value);
    num2 = parseInt(document.getElementById("n2").value);

    document.getElementById("resp").innerText = num1 / num2;
}