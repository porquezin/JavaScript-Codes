var data,ano,mes,dia
var tamanho
var escrito = ''
var meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
var unidade = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez','onze','doze','treze','quatorze','quinze','desesseis','desessete','dezoito','dezenove']
var dezena = ['vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa']
var centena = ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']

function converter() {
    escrito = ''
    data = document.querySelector('#data').value
    tamanho = data.length
    ano = data[0]+data[1]+data[2]+data[3]
    mes = data[5]+data[6]
    dia = data[8]+data[9]
    if (data.length==10) {
        dt(ano,mes,dia)
    } else {
        alert('Ano incorreto')
    }
    
    document.querySelector('#result').innerHTML=escrito
}

function dt(ano,mes,dia) {

    if(dia[0]=='0' && dia[1]=='1'){
        escrito+= `primeiro de `
    }else if (dia[0]=='0' && dia[1]!='1'){
        escrito+= `${unidade[dia[1]-1]} de `
    } else if (dia[0]=='1') {
        escrito+= `${unidade[dia-1]} de `
    } else if (dia[0]=='2') {
        escrito+= `${dezena[dia[0]-2]} ${unidade[dia[1]-1]} de `
    }


    escrito+= `${meses[mes-1]} de `


    if (ano[0]=='1') {
        escrito+= 'mil '
    } else if (ano[0]!='0') {
        escrito+=`${unidade[ano[0]-1]} mil `
    }


    if (ano[0]=='0' && ano[1]=='1' && ano[2]=='0' && ano[3]=='0') {
        escrito+= 'cem'
    } else if (ano[0]!='0' && ano[1]=='1' && ano[2]=='0' && ano[3]=='0') {
        escrito+=`e cem`
    } else if (ano[0]=='0' && ano[1]!='0' && ano[2]=='0' && ano[3]=='0') {
        escrito+=`${centena[ano[1]-1]} `
    } else if (ano[0]!='0' && ano[1]!='0' && ano[2]=='0' && ano[3]=='0') {
        escrito+=`e ${centena[ano[1]-1]} `
    } else if (ano[1]!='0' && ano[2]!='0') {
        escrito+=`${centena[ano[1]-1]} `
    } else if (ano[1]!='0' && (ano[3]!='0' || ano[2]!='0')) {
        escrito+=`${centena[ano[1]-1]} `
    }


    if (ano[0]=='0' && ano[1]=='0' && ano[2]=='1' && ano[3]=='0') {
        escrito+= 'dez'
    } else if ((ano[0]!='0' || ano[1]!='0') && ano[2]=='1' && ano[3]=='0') {
        escrito+= `e dez`
    } else if (ano[0]=='0' && ano[1]=='0' && ano[2]!='0' && ano[2]!='1') {
        escrito+= `${dezena[ano[2]-2]} `
    } else if ((ano[0]!='0' || ano[1]!='0') && ano[2]!='0' && ano[2]!='1') {
        escrito+= `e ${dezena[ano[2]-2]} `
    }


    if (ano[0]=='0' && ano[1]=='0' && ano[2]!='1' && ano[3]=='0') {
        escrito+= `${unidade[ano[3]-1]}`
    } else if ((ano[0]!='0' || ano[1]!='0' || ano[2]!='0') && ano[2]!='1' && ano[3]!='0') {
        escrito+= `e ${unidade[ano[3]-1]}`
    }else if (ano[0]=='0' && ano[1]=='0' && ano[2]=='1' && ano[3]!='0') {
        escrito+= `${unidade[(ano[3]-1)+10]}`
    } else if ((ano[0]!='0' || ano[1]!='0') && ano[2]=='1' && ano[3]!='0') {
        escrito+= `e ${unidade[(ano[3]-1)+10]}`   
    }
}
