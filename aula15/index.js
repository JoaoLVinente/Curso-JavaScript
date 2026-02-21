let numero = Number(window.prompt('Digite seu numero: '));
const numerodotitulo = document.getElementById('numerodotitulo');
let raiz = (numero ** (1/2));
const texto = document.getElementById('texto');

numerodotitulo.innerHTML = numero;

texto.innerHTML = `Raiz quadrada de seu numero: ${raiz}<br>`; // numero elevado a 1/2
texto.innerHTML += `${numero} é um numero inteiro? ${Number.isInteger(numero)} <br>`;
texto.innerHTML += `Seu numero é NaN? ${Number.isNaN(numero)} <br>`;
texto.innerHTML += `Arrendondando para baixo: ${Math.floor(numero)} <br>`;
texto.innerHTML += `Arrendondando para cima: ${Math.ceil(numero)} <br>`;