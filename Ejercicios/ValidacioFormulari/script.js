//Capturamos los elementos del dom
const form = document.getElementById('form');
const nomUsuario = document.getElementById('nomusuari');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
//Funcion
function esObligatori(inputArray) {

    inputArray.forEach((input) => { 
        if(input.value.trim() === '') {
            MostraError(input,`${prenNomInput(input)}Es obligatori`);
        } else {
            MostraCorrete(input);
        }
    })
}

function MostraError(input,missatge) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const label = formControl.querySelector('label')
    const small = formControl.querySelector('small');
    small.innerText = label.innerText + ' ' + missatge;
}

function ValidarEmail(input) {
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim()) ) {
        MostraCorrete(input);
    } else {
        let ErrorMisatge =  `${prenNomInput(input)} no te el format correcte`;
        MostraError(input,ErrorMisatge)
    }
}
function ContrasenyesIguals(input1,input2) {
    if(input1.value != input2.value) {
        let ErrorMisatge =  prenNomInput(input2) + "Ha de ser igual";
        MostraError(input1,ErrorMisatge);
    }
}


function MostraCorrete(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control correcte';
}

function prenNomInput(input) {
    return input.id.charAt(0).toUpperCase(); + input.id.slice(1);
}

function contrasenyesiguals () {
    if(password.textContent != password2.textContent) {
        alert("Las contraseñas no coinciden")
    }
}

function comprovaLongitud(input,min,max) {
    if(input.value.length < min) {
        MostraError(input, "La contrasenya es masa curta, ha de tenir un minim de " +min +" caracters");
    }
    if(input.value.length > max) {
        MostraError(input, "La contrasenya es masa llarga, ha de tenir un maxim de " +max +" caracters");
    } else {
        MostraCorrete(input);
    }
}
// Evento
form.addEventListener('submit',(e) =>  {
    e.preventDefault();
    //Comprovacio de longitud
    comprovaLongitud(nomUsuario, 3,15);
    comprovaLongitud(password,6,25);
    ValidarEmail(email);
    ContrasenyesIguals(password,password2);
    
    esObligatori([nomUsuario,email,password,password2])
}) 