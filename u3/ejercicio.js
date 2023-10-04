// Declararemos las variables
let nomEstudiant;
let Examen1;
let Examen2;
let notaProjecte;

// Asignamos valores a las variables
nomEstudiant = "Joan";
Examen1 = 5;
Examen2 = 4;
notaProjecte =5;

// Calculamos la Nota Final después de asignar valores
let NotaFinal = (Examen1 * 0.2) + (Examen2 * 0.2) + (notaProjecte * 0.7);

//Mostramos todos los datos
console.log("Nombre del alumno : " +nomEstudiant);
console.log("Nota del Primer Examne : " +Examen1);
console.log("Nota del Segundo examen : " +Examen2);
console.log("Nota del proyecto : "+notaProjecte );
console.log("Nota final : " +NotaFinal);
//Comprovamos si el estudiante ha aprovado
 if (NotaFinal >=7 ) {
    //Felicita si has sacado un 7 o superior
    console.log("Felicidades " +nomEstudiant +" Has aprobado el modulo");
}
else if(NotaFinal >=5) {
    //Si has sacado entre un 5 y un 7 te dira que has aprobado pero que has de esforcarse mas
    console.log("Has aprobado el modulo " +nomEstudiant + ", Pero has de esforcarte mas para aprobar el modulo");
} 
else {
    //No has aprobado
    console.log("No has aprobado el modulo " +nomEstudiant );
}
