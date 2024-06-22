function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoF = document.getElementById("txtAno")
    var res = document.getElementById("res")
    var imagem = document.getElementById("imagem")

    if (anoF.value.length == 0 || anoF.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var sexF = document.querySelectorAll('input[type="radio"]')
        var idade = ano - Number(anoF.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute("id", "foto")
        if (sexF[0].checked) {
            genero = 'Homem'

            imagem.innerHTML = "<img src='foto-menino.png'> </img>"

        } else if (sexF[1].checked) {
            genero = 'Mulher'
            imagem.innerHTML = "<img src='foto-menina.png'> </img>"
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }

}