function contar() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")
    if (inicio.value.length == 0 || fim.value.length == 0 ){
        alert("[ERRO] Preencha o formulário e tente novamente!")
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if ( p <= 0) {
            alert ("[ERRO] Passos indefinidos. Considerando valor 1")
            p=1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} -> `
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} -> `
            }
        }

    }
}

