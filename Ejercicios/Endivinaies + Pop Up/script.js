const preguntes = [
    {
        questio: "Quin país té més població?",
        respostaCorrecta: "La Xina",
        respostaIncorrecta: "Andorra"
    },
    {
        questio: "El primer astronauta a trepitjar la lluna va ser ?",
        respostaCorrecta: "Neil Armstrong",
        respostaIncorrecta: "Louis Armstrong"
    },
    {
        questio: "Que forma tiene la Tierra",
        respostaCorrecta: "Esferica",
        respostaIncorrecta: "Qualsevol"
    },
    {
        questio: "Quina es la traduccio al catalá de 'Fear & Hunger'",
        respostaCorrecta:"Por i fam",
        respostaIncorrecta:"Fam i por"
    }
];

let indexQuestioActual = 0;
let respostesCorrectes = 0;
let respostesIncorrectes = 0;
//Capturamos elementos HTML
const questioProposada = document.getElementById("questioProposada");
const btnEsquerre = document.getElementById("btnEsquerre");
const btnDret = document.getElementById("btnDret");
const missatge = document.getElementById("missatge");
const reiniciar = document.getElementById("reiniciar");
//Para el pop-up
const start = document.getElementById("start");
const popup = document.getElementById("popup");
const tancar = document.getElementById("tancar");

function barrejaRespostes(correcta, incorrecta) {
    const respostes = [correcta, incorrecta];
    respostes.sort(() => Math.random() - 0.5);
    return respostes;
}

function mostraQuestio() {
    if (indexQuestioActual < preguntes.length) {
        const questioActual = preguntes[indexQuestioActual];
        questioProposada.textContent = questioActual.questio;

        const [barrejatCorrecte, barrejatIncorrecte] = barrejaRespostes(
            questioActual.respostaCorrecta,
            questioActual.respostaIncorrecta
        );

        btnEsquerre.textContent = barrejatCorrecte;
        btnDret.textContent = barrejatIncorrecte;
    } else {
        // El juego ha terminado
        if (respostesCorrectes === preguntes.length) {
            missatge.textContent = "¡Has ganado!";
        } else {
            missatge.textContent = `Juego terminado. Respuestas correctas: ${respostesCorrectes}, Respuestas incorrectas: ${respostesIncorrectes}`;
        }
        btnEsquerre.style.display = "none";
        btnDret.style.display = "none";
        reiniciar.style.display = "inline-block";
    }
}

function comprobaReposta(respostaSelecionada) {
    const questioActual = preguntes[indexQuestioActual];

    if (respostaSelecionada === questioActual.respostaCorrecta) {
        respostesCorrectes++;
    } else {
        respostesIncorrectes++;
    }
    indexQuestioActual++;
    
    mostraQuestio();
}

btnEsquerre.addEventListener("click", () => comprobaReposta(btnEsquerre.textContent));
btnDret.addEventListener("click", () => comprobaReposta(btnDret.textContent));
reiniciar.addEventListener("click", () => {
    indexQuestioActual = 0;
    respostesCorrectes = 0;
    respostesIncorrectes = 0;
    missatge.textContent = "";
    btnDret.style.display = "inline-block";
    btnEsquerre.style.display = "inline-block";
    reiniciar.style.display = "none";
    mostraQuestio();
});

start.addEventListener("click", mostrarPop);
tancar.addEventListener("click",tencarPop)
//Click sobre el boton para mostrar el pop up
function mostrarPop() {
    popup.style.display = "block";
}
//Click para cerrar el pop up
function tencarPop() {
    popup.style.display = "none";
}
// Comenzar el juego
mostraQuestio();
