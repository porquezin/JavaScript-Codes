var user, lvl
var win = false

function game(x, cpu) {
    for (i = 0; i < x; i++) {
        user = prompt('Adivinhe o numero!')
        if (user == cpu) {
            alert('ganhou!')
            win = true
            break
        } else if (lvl == 3 && user != cpu) {
            break
        } else if (user < cpu) {
            alert('Abaixo!')
        } else {
            alert('Acima')
        }
    }
}

function main() {
    alert('Dificuldades:  1- Easy | 2- Medium | 3- Hard')
    lvl = prompt('Escolha a dificuldade!')
    cpu = Math.floor(Math.random() * 21)
    console.log('CPU = ',cpu)

    if (lvl == 1) {
        game(5, cpu)
    } else if (lvl == 2) {
        game(3, cpu)
    } else if (lvl == 3) {
        game(1, cpu)
    } else {
        alert('Invalido!')
    }

    if (!win) {
        alert('perdeu!')
    }
    win = false
}