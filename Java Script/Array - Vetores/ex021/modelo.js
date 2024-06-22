let num = document.getElementById("add")
let lista = document.getElementById("lista")
let res = document.getElementById("res")
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNum(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert("Número Inválido")
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Insira um número válido')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores) 
         if(valores[pos] > maior)  
                maior = valores[pos]
           if (valores[pos] < menor)  {
            menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números adicionados</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}</p>`
    }
}