// Se utlizian para controlar el flujo del prgorama

//if se utiliza para ejecutar un bloque de codigo si se cumple una codicion

let edad = 18;
let EsMayor = (edad => 18);
let a = 10;
let b = 20;
let resultado  = (a > b ) ? "Eres mayor ? " : "Eres Menor";
// (a > b ) ? (a-b) : (b-a)

if (esMayor = true) {
    console.log("Eres mayor de edad");
} else { //Else if
    console.log("No eres mayor de edad");
}

// Switch case
//Cuando se quiera hacer una estructura condicional segun el valor que tenga una variable o expresion 

let nombre = "Frodo"
let Edad ;
switch (nombre) {
    case "Gandalf":
        Edad = 1230;
        break;

        case "Aragon":
            Edad = 532;
            break;

            case "Frodo":
                Edad = 50;
                break;

    default:
        Edad = 0;
        break;
}
console.log("Nombre : " + nombre, "Edad : " +Edad);

//Iteraciones
// Se utilizan para repetir una porcion de codigo varias veces.

//While
//Repetir un bloque de mientras se cumpla una condicion

let cont = 0;

while(cont < 15 ) {
    console.log(cont);
    cont++;
};
//Do while 
let cont2 = 0;

do {
console.log("cont2");    
cont2++;
}while(cont2 < 15) {

}
//FOR 
// Repetir un bloque de codigo especifico varias veces
//break / continue
//break : detenr la ejecucion del bucle
//continue : saltar a la siguiente iteracion
for (let i = 0; i < 5; i++) {
    if(i ==2) {
        break ; 
    }
}

// Date &  Time
let parrafo = document.getElementById("fecha");
//new  Date();
//new Date(milisegundos);
//new Date(fechaString);
//new Date(año,mes,dia,horas,minutso,segundos,milisegundos);
let fehca = new Date("2023-9-10"); // Formato corto año/mes/dia
let fehca2 = new Date("Jan 16 2000"); // Formato largo
let fecha3 =  new Date(71,12,29,15,15,0,0); //año,mes,dia,horas,minutos,segundos
parrafo.innerHTML = fehca.getDate();
//Metodos tipo fecha
//getDate() 
//getDay() dia de la semana en formato numerico
//getFullYear() obtiene todo el año
//getHours() las horas
//getMinutes() minutos
//getSeconds() segundos
//getMiliseconds() milisegundos

//COOKIES
//Monitorizar actividad de los usuarios
//Mantener opciones de visualizacion o de aspecto para el usuario
//Almacenar variables en el lado cliente 
//Indentificacion o autenticacion.


//CREA UNA COOKIE

//document.cookie = "usuario=Oreo";
function crearCookie(usuarioCookie) {
    document.cookie ="usuario=" +encodeURIComponent(usuarioCookie);
    usuarioCookie +=";expires=Tue, 7 Nov 2023 12:15:00 GMT"
}

function leerCookie() {
   console.log(document.cookie);
}


//LOCAL STORAGE
//setItem(clave,valor)
//getItem(clave)

let unCliente = {
    Nombre : "Joan",
    Apellido :  "Saura"
}
function guardarValores() {
    let usuarioWeb= ["E","A","I"]
    localStorage.setItem("usuario","Joan");
}
localStorage.setItem("usuario",JSON.stringify(unCliente));

function leerValores() {
    console.log(localStorage.getItem(usuario));
    console.log(usuario == null ? "la clave no se ha enctrado": usuario);
}
