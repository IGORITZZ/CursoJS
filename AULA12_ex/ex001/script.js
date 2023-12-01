var hora = new Date()
var h = hora.getHours()

var restxt = document.querySelector('#texthora')
var img = document.querySelector('#imghora')


    if ( h < 12){
        restxt.innerHTML = `<p>A hora é ${h} horas. Bom dia!</p>`
        img.innerHTML = `<img src=""`
    }
