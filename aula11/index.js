let num1, num2, resultado;

num1 = prompt('Digite o primeiro numero: ');
num2 = prompt('Digite o segundo numero: ');

num1 = Number(num1); // colocar nessa ordem
num2 = Number(num2); 

resultado = num1 + num2;

window.alert(`O resultado da sua soma foi igual a ${resultado}`);
