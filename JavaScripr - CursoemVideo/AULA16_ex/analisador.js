let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.innerText = `Você adcionou o valor: ${num.value}`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('valor inválido')
    }
    num.value = ''
    num.focus()
}

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    } else {
        return false
    }
}

function finalizar(){
    if (valores.length == 0){
        alert('erro')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = [0]
        for (let pos in valores){
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>O total de valores é: ${tot}</p>`
        res.innerHTML += `<p>O maior valor é: ${maior}</p>`
        res.innerHTML += `<p>O menor valor é: ${menor}</p>`
    }
}

