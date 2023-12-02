var data = new Date()
var ano = data.getFullYear()
var fano = document.querySelector('#txtano')
var res = document.querySelector('#res')

function verificar(){
    if ( fano.value == 0 || Number(fano.value) > ano ){
        alert('[ERRO] Verfique as informações e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if ( fsex[0].checked ){
            genero = 'Homem'
        } else if ( fsex[1].checked )
        {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}