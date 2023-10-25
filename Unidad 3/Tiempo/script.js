//setIterval() y setTimeOut()

//SetTimeOut(funcionAlLlamar,milisegundos)
/*
    Ejecuta la funcion funcionAlLmaar transcurrido el tiempo indicado en el segundo parametro.
*/

//setInterval(funcionAlLlamar,milisegundos)
//Ejecuta la funcion funcionAlLlamar de manera periodica segun el tiempo del segundo parametro

//clearInterval() Detiene la ejecucion iniciada con setInterval

//clearTimeOut() detiene la ejecucion iniciada por setTimeOut

function crono() {
    let elCrono;
    let miFecha = new Date();
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();
    let ampm = "pm";

    if(horas > 12) {
        ampm = "pm";
    }
    else {
        ampm = "am"
    }
    let texto = document.getElementById("lahora");
    texto.innerHTML = horas + " : " +minutos + " : " +segundos + " " + ampm;

}

window.onload = function() {
    elCrono = setInterval(crono,1000)
}