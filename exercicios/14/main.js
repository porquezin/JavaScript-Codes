var num, num_int, str, str2, p1, p2, p3, pc, tamanho
var numeros_dif = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'trez', 'quatorze', 'quize', 'desesseis', 'desessete', 'dezoito', 'dezenove']
var dezenas = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
var centena = ['cento', 'duzentos', 'trezentos', 'quatrucentos', 'quinentos', 'seicentos', 'setsentos', 'oitocentos', 'novecentos']

function main() {
    num = prompt('Num:')
    tamanho = num.length
    num_int = parseInt(num)
    if (num_int >= 0 && num_int <= 1000000) {
        switch (tamanho) {
            case 1:
                console.log(dec(num))
                break;
            case 2:
                console.log(dec(num))
                break;
            case 3:
                console.log(cem(num))
                break;
            case 4:
                console.log(mil(num))
                break;
            case 5:
                console.log(dezmil(num))
                break;
            case 6:
                pc = num[3] + num[4] + num[5]
                pc = parseInt(pc)
                pc = pc.toString()
                mimi = num / 1000
                mimi = parseInt(mimi)
                mimi = mimi.toString()
                if (num == 100000) {
                    console.log('cem mil')
                }
                else {
                    if (pc == 0) {
                        console.log(cem(mimi) + ' mil')
                    } else {
                        console.log(cem(mimi) + ' mil e ' + cem(pc))
                    }
                }
                break;
            case 7:
                console.log('um milhão')
                break;

            default:
                alert('Valor inválido.')
                break;
        }
    } else {
        alert('Valor inválido.')
    }
}

function dec(num2) {
    var tamanho2 = num2.length
    var num_int2 = parseInt(num2)
    if (tamanho2 == 1) {
        x = numeros_dif[num_int2]
    } else {
        if (num2[0] >= 2 && num2[1] == 0) {
            x = dezenas[num2[0] - 2]
        } else if (num2[0] >= 2 && num2[1] != 0) {
            x = dezenas[num2[0] - 2] + ' e ' + numeros_dif[num2[1]]
        }
        else {
            x = numeros_dif[num_int2]
        }
    }
    return x
}
function cem(num2) {
    var tamanho = num2.length
    if (tamanho == 2 || tamanho == 1) {
        y = dec(num2)
    }
    else {
        if (num2 == 100) {
            y = 'cem'
        }
        else if (num2 > 100 && num2[tamanho - 1] == 0 && num2[tamanho - 2] == 0) {
            y = centena[num[0] - 1]
        } else if (num2 > 100 && num2[tamanho - 1] == 0 && num2[tamanho - 2] != 0) {
            str2 = num2 - (num2[0] * 100)
            str2 = str2.toString()
            y = centena[num2[0] - 1] + ' e ' + dec(str2)
        } else {
            str2 = num2 - (num2[0] * 100)
            str2 = str2.toString()
            y = centena[num2[0] - 1] + ' e ' + dec(str2)
        }
    }
    return y
}
function mil(num) {
    var tamanho = num.length
    if (num == 1000) {
        z = 'mil'
    } else if (num[0] != 1) {
        p1 = num[0]
        mimo = (parseInt(num[1] + num[2] + num[3])).toString()
        z = dec(p1) + ' mil e ' + cem(mimo)
    }
    else if (num[1] == 0 && num[2] == 0 && num[3] == 0 && tamanho == 4) {
        p1 = num[0]
        z = dec(p1) + ' mil'
    }
    else {
        str = num - 1000
        str = str.toString()
        z = 'mil e ' + cem(str)
    }
    return z
}
function dezmil(num) {
    p1 = num[0]
    p2 = num[1]
    mimi = num - (num[0] * 10000)
    mimi = mimi.toString()
    mimi = mimi - (mimi[0] * 1000)
    mimi = mimi.toString()
    if (num[2] == 0 && num[3] == 0 && num[4] == 0) {
        a = dec(p1 + p2) + ' mil'
    } else {
        a = dec(p1 + p2) + ' mil e ' + cem(mimi)
    }
    return a
}