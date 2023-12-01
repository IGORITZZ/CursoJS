var data = new Date()
var ano = data.getFullYear()
var fano = document.querySelector('#txtano')
var res = document.querySelector('#res')

function verificar(){
    if ( fano.value == 0 || fano.value > ano ){
        alert('[ERRO] Verfique as informações e tente novamente!')
    } else {
        alert('Esta tudo certo!')
    }
}