//Recuperar los elementos del DOM que nos interesn
const boton = document.getElementsByTagName('button');
const envoltorio = document.getElementsByClassName('.envoltorio-popup');
const cerrar = document.getElementsByClassName('.cerrar-popup');

//Eventos
//Click sobre el boton para mostrar el pop up
boton.addEventListener('click', () => {
    envoltorio.style.display = "block";
});

//Cerrar el pop up
cerrar.addEventListener('click', () => {
    envoltorio.style.display = "none";
});

//Click sobre el envoltorio -> cerrar pop up
envoltorio.addEventListener('click', () => {
    envoltorio.style.display = "none";
});