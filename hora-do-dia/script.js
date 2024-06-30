function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 19
var minuto = data.getMinutes()

if (hora >1 && hora <23){
msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
}
else {
    msg.innerHTML = `Agora são ${hora} hora e ${minuto} minutos.`
}
if (hora >= 0 && hora < 12) {
    img.src = 'Manha.png'
    document.body.style.background = '#bb7d5c'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'Tarde.png'
        document.body.style.background = '#afbec5'
    } else {
        img.src = 'Noite.png'
        document.body.style.background = '#1b2b44'
    }

}