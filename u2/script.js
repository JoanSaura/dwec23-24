saludar();

//Comentario de una linea
/*
Comentario de varias lineas
 */
function saludar() {
    console.log("Hola cara de bola");
};

// Variabes : var, let . const
var nombre = "Fede";
var edad = "777";
const PI = 3.1416;

function patata() {
    console.log(nombre);
    console.log(edad);
};
patata();
//Se separan por el punto y coma jaja xd 
let uno=1; let dos = 2;

//String, representa texto
/*let nombre = "Apellido";
let apellido = "Muzska";
let nombreCompleto = "BaityBait, un grande";
let comillas ="Texto \'Entre comillas \' ";
console.log(comillas);*/

// Numeros 
let edad2 = 26; //Esto es valor numerico
let edad1 = "26"; //Esto es texto
console.log(typeof edad1);
console.log(typeof edad2);

let precio = 21.99; 
let aprobados = Infinity; //Es de valor numerico        
let suspendidos = -Infinity;

//null 
let valor = null;
console.log(typeof valor);
//undefined
let algo;
console.log(algo);
//NaN
let nose= "no se ";
let miEdad= "veintiseis";
console.log(miEdad / 2);

//typeOf
console.log(typeof edad);

let Persona = {
    nombre : "Ryan",
    apellido : "Gosling",
};
console.log(persona.nombre);
delete persona.apellido;

let messi = true;
let penaldo = fale;

/*
null
"" (String vacio)
undefined
0
NaN
 */

let cosa;

if (cosa)  {
    console.log("Hola");
} else {
    console.log("Adios");
}

//Operadores aritmeticos
// + a + b
// - a - b
// * a * b
// / a/b
// % a % b (modulo)

//  incremento a++
// decremento a--´
// suma y asigna a+=b // a = a + b;
// resta y asigna a-=b // a = a - b ;
// multiplica y asigna a*=b // a = a * b;
// divide y asigna a/=b // a = a/b;
//  modula y asigna a%=b // a = a%b;

// - cambio de igno // a = 5, b = -a, b=-5;

//Conversion de tipos
let a = "4";
let b = "4";
console.log(typeof a,typeof b);
console.log(a+b);
//De String a Integer
let A = +a //No utilicaremos el "parseInt" solo utilizaremos el "+" delante 
console.log(typeof A);
let B =+b
console.log(A + B);

let c = "3.22";
let C = parseInt(c); // Solo redondea la parte entera
let C1 = parseFloat(c) // Redondea todo

//Operadores de comparacion
console.log(5 > 4); //True 5 mayor que 4
console.log(5 < 4); //False 4 NO es mayor que 5
console.log(5 >= 4); //True
console.log(3 >= 4); //False
console.log(3 == 4); // False 3 no es igual a 4
console.log(5 != 4); //True 5 es distinto a 4
// != Distinot que 
//=== igual en valor y tipo que 
// !== Distinto en tipo que ´


//Operadores boleanos
//&& AND solo devuelve true cuando ambos opredos lo son
/* 
    true && true = true
    false && true = false
    false && false = false
*/
// || OR Devuelve true si cuakquiera de ambos opredores lo es
/*
    true || true = true
    true || false = true
    false || true = true
    false || false = false  
*/

let cadena 
if(cadena != null && cadena.length > 0) {
console.log(cadena.length);
}else {
    console.log("Esta vacio");
}

//! NOT Devuelve lo contrario al opreando 

/*
    Se nos facilitan trs vaiables que contienen variables sobre una ciduda
   let esCapital ; //Boleana
   let numeroCiudadanos ;// Number
   let ImpuestoPorCiudadano; //float

   - esCapital: sera cierta si y solo si la ciudad es capital
   -  numeroCiudadanos :  es el numero de ciudadanos de esa ciudad
   - impuestoPorCiudadano : Impuesto medio mensual que paga un ciudadano de esa ciudad
    Para nostros, una Metropolis sera una ciudad si bien es una capital con mas de 100.000 ciudadanos O bien es
    una ciudad con mas de 200.000 ciudadanos y una renta media de 720.000.000 al año.
    Dad una expresion booleana con las tres variables de tal manera que sea cierta si y solo si ciudad una Metropolis
    */