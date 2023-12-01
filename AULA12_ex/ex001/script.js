
function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`

    if ( hora >= 0 && hora <= 12 ){
        img.src = 'images/amanhecer.jpg'
        document.body.style.background = 'lightblue'
        document.querySelector('section').style.background = 'lightblue'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'images/tarde.jpeg'
        document.body.style.background = 'rgb(254, 188, 161)'
        document.querySelector('section').style.background = 'rgb(254, 188, 161)'
    } else {
        img.src = 'images/noite.jpg'
        document.body.style.background = 'grey'
        document.querySelector('section').style.background = 'grey'
    }
}
