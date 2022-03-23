var nome1, nome2
var esc1, esc2
var point1=0, point2=0
var round=0

function nome(){

   nome1 = document.getElementById("nome1").value
   nome2 = document.getElementById("nome2").value

    document.getElementById("nomes").style.visibility="hidden"
}
function pedra1(){
    
    esc1 = 'pedra'

    document.getElementById("esc1").style.visibility="hidden"
    document.getElementById("esc2").style.visibility="visible"
}
function papel1(){
    
    esc1 = 'papel'

    document.getElementById("esc1").style.visibility="hidden"
    document.getElementById("esc2").style.visibility="visible"
}
function tesoura1(){
    
    esc1 = 'tesoura'

    document.getElementById("esc1").style.visibility="hidden"
    document.getElementById("esc2").style.visibility="visible"
}

function pedra2(){
    
    esc2 = 'pedra'
    
    document.getElementById("esc2").style.visibility="hidden"
    document.getElementById("jogar").style.visibility="visible"
    
    document.getElementById("jog").style.visibility="visible"
}
function papel2(){
    
    esc2 = 'papel'

    document.getElementById("esc2").style.visibility="hidden"
    document.getElementById("jogar").style.visibility="visible"
    
    document.getElementById("jog").style.visibility="visible"
}
function tesoura2(){
    
    esc2 = 'tesoura'
    
    document.getElementById("esc2").style.visibility="hidden"
    document.getElementById("jogar").style.visibility="visible"

    document.getElementById("jog").style.visibility="visible"
}

function jogar(){
    if(esc1 == esc2){
        document.getElementById("res").innerText="Empatou!"
        point1++
        point2++
    }else if(esc1 == "pedra" && esc2 == "papel"){
        document.getElementById("res").innerText=nome2+" Ganhou a rodada!"
        point2++
    }else if(esc1 == "pedra" && esc2 == "tesoura"){
        document.getElementById("res").innerText=nome1+" Ganhou a rodada!"
        point1++
    }else if(esc1 == "papel" && esc2 == "tesoura"){
        document.getElementById("res").innerText=nome2+" Ganhou a rodada!"
        point2++
    }else if(esc1 == "papel" && esc2 == "pedra"){
        document.getElementById("res").innerText=nome1+" Ganhou a rodada!"
        point1++
    }else if(esc1=="tesoura" && esc2 =="papel"){
        document.getElementById("res").innerText=nome1+" Ganhou a rodada!"
        point1++
    }else if(esc1 =="tesoura" && esc2 == "pedra"){
        document.getElementById("res").innerText=nome2+" Ganhou a rodada!"
        point2++
    }
round++
    document.getElementById("round").innerText="Round: "+ round
    document.getElementById("jog").style.visibility="hidden"

    document.getElementById("ponto1").innerText=nome1+" tem " + point1+" pontos!"
    document.getElementById("ponto2").innerText=nome2+" tem " + point2+" pontos!"

    if(point1 == 3){
        document.getElementById("tudo").innerText=nome1+" Ganhou tudo!"
    }else if(point2 == 3){
        document.getElementById("tudo").innerText=nome2+" Ganhou tudo!"
    }

}

function reset(){
    document.getElementById("jogar").style.visibility="hidden"
    document.getElementById("esc1").style.visibility="visible"
    document.getElementById("res").innerText = ""
}