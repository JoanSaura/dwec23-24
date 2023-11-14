//Añadir contenido ha nuestro documento 
//Manipular el CSS
//Reacionar ha eventos del usuario y crear eventos

//DOM : El navegador cuando caraga una pagina web crea el DOM (Document Object Model)
//El dom tiene una forma gerarcica de un arbol 

//querySelector 
//Pide como parametro un selector CSS

const para = document.querySelector('body > h2'); //Tambien puedes poner etiquetas HTML y objetos copiados de la consola
console.log(para);


//Coleción de parrafos (querySelectoAll) Tambien utiliza como parametro un selector CSS(Devuelve un NodeList)
const paras = document.querySelectorAll('p');
console.log(paras);
//No tiene  metodos de arrays, se puede convertir en un array pero no lo es
console.log(paras[0]); //Muestra un elemento
console.log(paras.forEach(para => {
    console.log(para);
})); //Mostrar cada elemento

//getElementById el parametro no es un selector sino un parametro
const titulo = document.getElementById('titulo');

//getELementsByClassName parametro es el nombre de la clase asociada ha ese elemento
//Vamos a tener una colecion que no sera un NodeList, sino un HTMLColectio, que no tiene los mismos metodos que un nodeList
const errores = document.getElementsByClassName('error');
console.log(errores);
console.log(errores[0]); //podems acceder a sus elementos como si fuera un array

//Obtener un elementos por el nombre de su tag 
//getElementsByTagNames . El parametro es el nombre del tag del elemento.
const paras2 = document.getElementsByTagName('p');
console.log(paras2);

//Modificar el contenido de la pagina
let paraM = document.querySelectorAll('p'); //Cogemos el primer parrafo
//innerHTML
let contenido = paraM.innerHTML; //Tambien se podria hacer con innerText
let contenido1 = paraM[0].innerText;
console.log(contenido);
contenido1 = "Requete"; //Asi no cambia

let contenido2 = paraM[0].innerHTML; 
contenido2 = "Requete"; //Asi TAMPOCO


//Obtener y restablecer atributos
let enlace = document.querySelector('a');
let url = enlace.getAttribute("href");
console.log(url);

enlace.setAttribute('href','https://www.youtube.com/watch?v=NNv2RHR62Rs'); //Cambiamos el enlace
url = enlace.getAttribute("href");
console.log(url);

//Añadir y eliminar estilos
let error = document.querySelector('body >div.error');
error.style.backgroundColor = "black";

//Añadir y eliminar clases
let error = document.querySelector('body >div.error');
error.classList.add("paco");
error.classList.remove("error");

let paras3 = document.getElementsByTagName('p');
let hijo = paras3[2];
console.log(hijo);
let padre = hijo.parentNode;
console.log(padre);
let primerHermano = padre.firstChild;
console.log(primerHermano);
//Referencias el elemento del DOM.
const par = document.querySelector('p');
par.addEventListener('click', (e) => {
    console.log(e.target.innerText);
    e.target.innerText("texto cambiado");
    console.log(e.target.innerText);
})

function escribeLog() {
    console.log("Estas clicando");
}
//HTML -> onmouseover , onmouseleave

document.addEventListener("keydown",(e) => {
    console.log("Tecla presionada " + e.key) ;   
})