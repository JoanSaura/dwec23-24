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
