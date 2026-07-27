/*constantes globais*/
const form = document.querySelector('.form');
const quadroResultado = form.querySelector('.quadroResultado');
const resultado = form.querySelector('.resultado');

/*funcao para calcular o IMC*/
function calcularIMC(evento) {
    let classificacao;
    let IMC;

    evento.preventDefault();
    /*o number vai transformar o valor da referencia do peso e da altura que veem como Strings, em numeros para fazer o calculo*/
    const peso = Number(form.querySelector('#peso').value);
    const altura = Number(form.querySelector('#altura').value);

    /*se peso e altura forem numeros (nao string e outros) realiza o calculo do IMC, senao, mostram um mensagem para altura e outra para peso*/
    if (isNaN(peso)) {
        quadroResultado.style.display = 'block';
        resultado.innerHTML = `<p>Peso invalido!</p>`;
        return;
    } else if (isNaN(altura)) {
        quadroResultado.style.display = 'block';
        resultado.innerHTML = `<p>Altura invalido!</p>`;
        return;
    } else {
        IMC = peso / (altura * altura);
    }

    /*Nao e possivel salvar um console.log dentro de uma variavel pois sera retornado undefined, entao, salvo apenas o texto na variavel*/
    if (IMC < 18.5) {
        classificacao = "Você está abaixo do peso ideal!";
    } else if (IMC < 25) {
        classificacao = "Você está no peso ideal!";
    } else if (IMC < 30) {
        classificacao = "Você está com sobrepeso!";
    } else if (IMC < 35) {
        classificacao = "Você está com obesidade grau 1!";
    } else if (IMC < 40) {
        classificacao = "Você está com obesidade grau 2!";
    } else {
        classificacao = "Você está com obesidade grau 3!";
    }

    /*Ao fim da funcao, quando a pessoa clicar em calcular, o display da div (quadroResultado muda para block), fazendo ela aparecer para o usuario, e alterando seu conteudo para a mensagem que esta logo abaixo*/
    quadroResultado.style.display = 'block';
    resultado.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (${classificacao})</p>`;

}

form.addEventListener('submit', calcularIMC)