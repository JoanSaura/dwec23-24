/*
    ARRAYS



*/

// Defniir arrays

let vacio = []; //no tiene elementos
let primos = [2, 3, 5, 7, 11]; //con 5 elementos numericos
let miscelanea = [1.1, 4, true, null, "String"]; // varios tipos

//los valores no tienen porque ser constantes
let n = 1024;
let tabla1 = [n, n + 1, n + 2, n + 3];

let contador = [, , , , , ,];
console.log(contador.length);

//Operador SPREAD

let a = [1, 2, 3];
let b = [0, ...a, 4];

console.log(b);

let original = [1, 2, 3];
let copia = [...original, ...original];
original[0] = 9;
console.log(copia);
console.log(original[0]);

let digitos = [..."0123456789ABCDEF"];
console.log(digitos);

//Constructor de Array
let aa = new Array(1, 2, 3, 4, 54, -1, "prueba", true, "🤑🤑🤑🤑🤑🤑");
let bb = Array.of(10, 3);
console.log(aa[aa.length - 1]);
console.log(aa.length);
console.log(bb.length);
aa[119] = 10;
console.log(aa.length);

//push añade elemento al final

aa.push("hola");
console.log(aa[aa.length - 1]);

let aaa = [1, 2, 3, 4];
console.log(aaa);
delete aaa[2];
console.log(aaa);
let z = 3;
if (a[z]) {
  console.log(a[z]);
} else {
  console.log("Slot Vacio");
}

//slot vacio = false

/*

Iterando arrays

*/

let letras = [..."Hola amiguitos"];
let aux = "";

for (let letra of letras) {
  aux += letra;
}
console.log(aux);
aux = "";

for (let [index, letra] of letras.entries()) {
  if (index % 2 === 0) aux += letra;
}
console.log(aux);

let mayusculas = "";
let i = 0;
letras.forEach((letra) => {
  if (i % 2 === 0) mayusculas += letra.toUpperCase();
  i++;
});
console.log(mayusculas);

let vocales = "";
let letra = "";
for (let i = 0; i < letras.length; i++) {
  letra = letras[i];

  if (/[aeiou]/.test(letra)) {
    vocales += letra;
  }
}
console.log(vocales);

//METODOS DE ARRAYS
//pop() elimina el ultimo elemento del array y lo devuelve
let paco = ["Rubiales","Tijuana","Mamerto"];
/*console.log(paco);

let pacoEliminado = paco.pop();
console.log(pacoEliminado);*/

//shift() elimina el primer elemento y lo devuelve
//let elementoEliminado  = paco.shift()
//unshift() agerega uno o mas elementos al principio
//paco.unshift("Valentin");

//concat() combina dos o mas arrays y devuelve un nuevo array
let otros = ["Valentin","teto"];
let combo = paco.concat(otros);
console.log(combo);

//slice() devuelve una copia "Superficial" de una porcion del array
let copiapaco = paco.slice(0,1) //Desde donde hasta cuando

//splice() Cambia el contenido de un array eliminando, remplazarlo o agregando

paco.splice(1,0,"Valentin","Tijuana")

//indexOf() devuelve el primer indice en el que se ecuentra un elemento dado, devuelve -1 si no lo encuentra
let indice = paco.indexOf('amparo')
let cadena = "Hola cara de bola"
indice = cadena.indexOf("a");

//lastIndexOf() devuekve ek yktuni ubduce
//join() devuelve todos los elementos de un array en una cadena utilizando un separador especifico
let joIn = cadena.join()

//sort() ordena los elementos de un array alfabeticamente si son cadenas y numericamente si son numeros
//Se trata de una funcion :
//debe recibir dos valores a comprara
//como resultado debe : devolver un valor positivo(1) si el primer valor es superior al segundo
//devolver un valor negativo(-1) si el primer valor es inferior al segundo
//devolver un valor de cero(0) si los dos valores son iguales o equivalentes para la ordenacion

//sort en numeros
/*let numeros = [10, 5, 8, 3,1];
console.log(numeros.sort(function(a,b)) {
return a - b;
});*/

//sort en cadenas
console.log(paco.sort((a,b)=>{
  return (a.toLowerCase() > b.toLowerCase() ? 1 : (a.toLowerCase() < b.toLowerCase()))
}

));

// FUNCIONES

function diHola() {
  console.log("Hola");
}

diHola();

function multiplica() {
  let a = 10;
  let b = 10;
return (a*b)
}

console.log(multiplica(3,1));

// OBJETOS
/**
  Para la clave podemos omitir las comillas
 */
let unCliente = {
  nombre : "Peter",
  apellido:"Jackson",
  'direccion fiscal': "c/ Desconocida",
 "+-+-+-"  : "boquesa",
 pago: {
  tipo : "Visa",
  tarjeta : "JIJIJIJA",
  "fecha de caducidad" : "nunca"
 },
 vencimiento : 30 
}
unCliente["vencimiento"] = 60;

console.log(unCliente["+-+-+-"]);

let estudiante = {
  id:2,
  nombre:"Joan",
  diHola: function() {
    return "Hola";
  },
  notas : [10,2,3],
  media:function devolverMedia() {
   let media = (this.notas[0]+this.notas[1]+this.notas[2]) / 3
  return "La media es de " +media
  }
  
}

//This
let factura = {
  descripcion: "Factura de prueba",
  precio: 100.0,
  iva:21.0,
  subtotal() {
    return this.precio
  },
}

//Constructores
function web() {
this.url="http://localhost";
this.name = "Localhost"

this.muestraInfomracion = function() {
  return "url :" +this.url + "\n"+ "web: " +this.name;
}

} 
unaWeb = new web();
