
//Array
//Definir Arrays
let vacio = []; //No tiene elementos
let primos = [2,3,5,7,11]; //5 Elemtos numericos 
let miscelania = [1.1, true, "openhaimer"]; //Con varios tipos de datos
let n = 1024;
let tabla = [n,n*2,n*3  ];
let conta = [1,3];
console.log(conta.length);

//Operador SPREAD
let spr = [1, 2 , 3];
let spr2 = [0, 4 ];

let origin = [1, 2 , 3];
origin[0] = 9; //No cambiara el de la copia
let copia  = [...origin,...spr2];

let digitos = ["...0123456789ABCDEF"];

//Constructor de Array
let a = new Array(1,2,3,4, 54, -1, "prueba", true);
let b = Array.of(10); 
a[119] = 10;