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

const ciudades = [
  {
    "municio": "Zaragoza",
    "provincia" : "Zaragoza"
  }, {
    "municio": "Madrid",
    "provincia" : "Madrid"
  }, {
    "municio": "Barcelona",
    "provincia" : "Barcelona"
  },

]
ciudades.sort((a,b)=> {
  return a.municio.localeCompare(b.municio)
});

const miArray = ["A","B","C"];
miArray.push("D");

// Destructuracion
const numeros = [1, 2, 3];
const [uno, dos ,tres] = numeros;

const personas = {
  nombre : "Andreu",
  edad : 33
}

const {ne, e} = personas
console.log(object);

const nombre = "josep";
const edad = 33;

const persona = {
  nombre,
  edad
}

//Template Strings - Plantillas de cadenas
//operdaor de interpoblacion ${}

const nom = "Bob";
const edadNom = 32;

const mensaje = `Hola, mi nombre ${nom} y tengo ${edadNom} tacos`
console.log(mensaje);

//spread
const nums = [1,2,3];
const nuevosNumeros = [...nums,4,5];

//Parametros por defecto
function saludar(nombre = "Invitado") {
  console.log(`Hola, ${nombre}`);
}

//Parametros rest (rest parameters)
function suma(...numeros) {
  let result = 0;
  for(let numero of numeros) {
    result += numero;
  }
  return result;
}

//Funciones flechas () =>

const  suma2 = (a , b) => a+b;

//forEach() ejecuta una funcion una vez por cada elemnto en nuestro array   
const numerosFor = [1,2,3,4,5];
numeros.forEach((numerosFor ) => {
  console.log(numerosFor);
})

const multiplicar = (n) => {
  return n*2;
}

//map() crea un nuevo array con los resultados de aplica   una funcion a cada elemento del array
const dobleNum = numeros.map((numero) => {
  return multiplica(numero)
})

//filter() Crea un nuev array con todos los elementos que cumplan una condicion determinada
const numerosPares = numeros.filter((numeros) => {
  return numero % 2 === 0;
});  

const numerosMayoresDos = numeros.filter((numero) => {  
  return numero > 2; 
});  

//reduce() aplica una funcion a un acumulador y a cada elemento del array (de izquierda ha derecha) para reducirlo a un unico valor
const sum = numeros.reduce((acumulador,numero) => {
    return acumula + Number;
},0);

//find() devuelve el primer elemento del array cumpla una determinada condicion
const numeroEncontrado = numeros.find(() => {
  return numero < 3;
});

//findIndex() Devuelve el indice del primer elemnto del array que cumple con una funcion de o -1 si no encuentra nada
const inidceEncontrado = numeros.findIndex((numero) => {
    return numero < 3;
})  

//some() Comprueba si al menos un elemento del array cumple una condicion determinada
const tieneNumeroPar = numeros.some((numero) => {
  return numero % 2 === 0;
});

//every() comprueba si todos los elementos cumplen una condicion determianda 
const todoNumerosPares = numeros.every((numero) => {
  return numero % 2 === 0 ;
});
//Classes - class (Para crear clases)

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  Saludar() {
    console.log(`Hola soy ${this.nombre}`);
  }
}

const Joan = new Persona("Joan")
console.log(Joan.Saludar());

//Herencia
class Empleado extends Persona {
  constructor(nombre,salario) {
    super(nombre);
    this.salario = salario;
  }
  trabajar() {
    console.log(`${this.nombre} esta trabajando`);
  }
}

const Maria = new Empleado("Mario",3)

Maria.trabajar();

//Simbolos
//los simbolos son una nueva clase de de datos introducida por ES6, son valores unicos e inmutables 
//se pueden utilizar como indentificados de propiedades de objetos  

const id = Symbol("id");
const PersonaS = {

}

//Iteradores objetos que implementan el protocolo de interacion en JavaScript. Permiten recorrer y acceder a los elementos de una coleccion uno a uno

const numerosIt = [1,2,3]
const iteradornum = numeros[Symbol.interator]();

console.log(iteradornum.next()); //Muestra numero por numero

//Set permite almacenar valores unicos de calquier tipo, no permite duplicados y ofrece metodos para agregar, eliminar y verificar la existencia de elementos

const set = new Set()
set.add(1);
set.add(2);
set.add(3);

console.log(setNumeros.has(2)); //True
console.log(setNumeros.has(4)); //False

const IterarNums = setNumeros[Symbol.iterator]();
console.log(IterarNums.next());

//Map permite almacenar PARES clave-valor donde cada clave es unicaS
//Permite opreaciones de busqueda, insercion y eliminacion

const mapNombres = new Map();
mapNombres.set("nombre","Ana");
mapNombres.set("edad",12);

console.log(mapNombres.has("edad"));


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

//Recursividad
function factorial(numero) {

  if(numero == 0) return 1;

  return (numero * factorial(numero-1));
}