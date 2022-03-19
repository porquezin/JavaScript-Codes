var nome1, nome2
var e1, e2
var point1 = 0 , point2 = 0
var rodada = 0

function nome() {

    nome1 = document.getElementById("nome1").value
    nome2 = document.getElementById("nome2").value
    
    document.getElementById("players1").innerText = nome1 + " é par!"
    document.getElementById("players2").innerText = nome2 + " é impar!"
    
    document.getElementById("nometudo").innerText = ""

    document.getElementById("t").disabled=false
}

function jogar(){

    e1 = parseInt(document.getElementById("esc1").value)
    e2 = parseInt(document.getElementById("esc2").value)
    
    rodada++

    document.getElementById("rod").innerText = rodada

    if(((e1+e2)%2) == 0){
        document.getElementById("res").innerText= nome1 + " Ganhou rodada!"
        point1++
    } else{
        document.getElementById("res").innerText= nome2 + " Ganhou a rodada!"
        point2++
    }

    if(point1 == 3){
        document.getElementById("tudo").innerHTML = "<h1>" + nome1 + " ganhou tudo!</h1>"
        document.getElementById("tudo").innerHTML += "<br/><img src='/exercicios/6/index-anime.gif'>"
    }else if(point2 == 3){
        document.getElementById("tudo").innerHTML = "<h1>" + nome2 + " ganhou tudo!</h1>"
        document.getElementById("tudo").innerHTML += "<br><img src='/exercicios/6/index-anime.gif'>"
    }

}