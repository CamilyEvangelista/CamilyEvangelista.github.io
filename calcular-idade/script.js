function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3) {
                // Bebe     
                img.setAttribute('src', 'bebe.png')
            } else if (idade >= 3 && idade < 10) {
                // Criança     
                img.setAttribute('src', 'menino.png')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'homem-adolescente.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                // Bebe     
                img.setAttribute('src', 'bebe.png')
            } else if (idade >= 3 && idade < 10) {
                // Criança         
                img.setAttribute('src', 'menina.png')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'mulher-adolescente.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

