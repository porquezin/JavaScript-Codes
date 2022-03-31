var l1,l2,l3,l4,l5
var vogal,consoante
var idade,nome,classe,imagens,aleat_img,aleat_clas
var r,g,b

imagens = ["/exercicios/8/img/im1.png","/exercicios/8/img/im2.png","/exercicios/8/img/im3.png","/exercicios/8/img/im4.png","/exercicios/8/img/im5.png"]
classe = ["sujo","dentuço","chato","genio","comilão"]
vogal = ["a","e","i","o","u"]
consoante = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]

function gerar(){

aleat_img = imagens[Math.floor(Math.random()*imagens.length)]

document.getElementById("foto").innerHTML="<img width='200px' src="+ aleat_img+">"

idade = Math.floor(Math.random()*(100-18+1)+18)

document.getElementById("idade").innerText=idade

aleat_clas = classe[Math.floor(Math.random()*classe.length)]

document.getElementById("classe").innerText=aleat_clas

l1 = consoante[Math.floor(Math.random()*consoante.length)]
l2 = vogal[Math.floor(Math.random()*vogal.length)]
l3 = consoante[Math.floor(Math.random()*consoante.length)]
l4 = vogal[Math.floor(Math.random()*vogal.length)]
l5 = consoante[Math.floor(Math.random()*consoante.length)]

l1 = l1.toUpperCase()

document.getElementById("nome").innerText = l1+l2+l3+l4+l5
 
r = Math.floor(Math.random()*10)
g = Math.floor(Math.random()*10)
b = Math.floor(Math.random()*10)

document.body.style.backgroundColor= "#"+r+g+b
}