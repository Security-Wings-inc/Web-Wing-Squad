const $pergunta1 = document.getElementById("pergunta1");
const $pergunta2 = document.getElementById("pergunta2");
const $pergunta3 = document.getElementById("pergunta3");
const $pergunta4 = document.getElementById("pergunta4");
const $pergunta5 = document.getElementById("pergunta5");
const $pergunta6 = document.getElementById("pergunta6");
const $pergunta7 = document.getElementById("pergunta7");
const $pergunta8 = document.getElementById("pergunta8");
const $pergunta9 = document.getElementById("pergunta9");
const $pergunta10 = document.getElementById("pergunta10");
const $resultado = document.getElementById("div-resultado");


var CountRight = 0;
var CountWrong = 0;
var indexQuestion = 0;


const perguntas = [$pergunta1, $pergunta2, $pergunta3, $pergunta4, $pergunta5, $pergunta6, $pergunta7, $pergunta8, $pergunta9, $pergunta10]

const certo = () => {



    indexQuestion++;

    CountRight++;

    ocultar();

    console.log(indexQuestion)

    if (indexQuestion < perguntas.length) {
        exibir();
    } else {
        console.log(`Você acertou ${CountRight} | Você errou ${CountWrong}`);
        $resultado.classList.remove("hide");
    }



}



const errado = () => {
    indexQuestion++;
    CountWrong++;
    ocultar();

    if (indexQuestion < perguntas.length) {
        exibir();
    } else {
        console.log(`Você acertou ${CountRight} | Você errou ${CountWrong}`);
        $resultado.classList.remove("hide");

    }

}







const ocultar = () => {
    perguntas[indexQuestion - 1].classList.add("hide")

}

const exibir = () => {
    perguntas[indexQuestion].classList.remove("hide")

}

