function gerar() {
    var num = document.getElementById("numero")
    var tab = document.getElementById("tabuada")
    if (num.value.length == 0) {
        alert("ERRO. Insira um número maior que 0.")
        
    } else {
        var n = Number(num.value)
        var c = 1
        while (c<=10) {
            var item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}