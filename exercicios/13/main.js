var num_contas = 0
function register() {
    
    email = document.getElementById('email').value
    senha = document.getElementById('senha').value
    user = document.getElementById('user').value

    localStorage.setItem("email_" + num_contas, email)
    localStorage.setItem("senha_" + num_contas, senha)
    localStorage.setItem("user_" + num_contas, user)

    num_contas++

    localStorage.setItem("num", num_contas)

    x = localStorage.getItem('num')

    window.location.href = "index.html"

}

function login() {
    x=0
    email1=document.getElementById("email").value
    senha1=document.getElementById("senha").value
    while(localStorage.getItem('num')!=x){

        email = localStorage.getItem("email_" + x)
        senha = localStorage.getItem("senha_" +x )
        user = localStorage.getItem("user_" + x)

        if (email == email1 && senha == senha1) {
            alert("lol")
            return
        }else if(existe(email1)){
            alert('user ou senha errado')
            return
        }else{
            alert('se registra')
            window.location.href = "register.html"
            return
        }
        x++
    }
}

function existe(ema){
count= localStorage.getItem('num')
for (i=0;i<count;i++){
        email__=localStorage.getItem('email_'+i)
        if(ema==email__){
            return true
        }
    }
    return 0
}