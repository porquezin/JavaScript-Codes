var user,senha
function login(){

    user = document.getElementById('user').value
    senha = document.getElementById('pass').value
 
    if(user == "a.a.com" && senha == 'sen123'){
        window.location.href = "ferafood.html";
    }
}

