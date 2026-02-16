/*
()
**
%
* /
+ - 
De cima para baixo é a ordem de preferência de resolução dos operadores aritméticos.

O operador de incremento e o decrimento servem para somar e subtrair valores de uma variável, respectivamente (contador++ e contador--)
Ambos os operadores têm pré-fixação e pós-fixação, as diferenças são:

Pré-fixados (++contador ou --contador) primeiro incrementam ou diminuem o valor e posteriormente mostram o valor.
Pós-fixados (contador++ ou contador--) primeiro mostram o valor e posteriormente incrementam ou diminuem o valor.

Temos também o operador de atribuição (+=, que também pode ser mudado para qualquer operador aritmético) que nesse exemplo, faz a seguinte coisa:

Contador += 2 -> Contador = Contador + 2;

Se eu, por exemplo, multiplicar uma string com o number, e usar o typeoff para ver o tipo daquele dado, vai aparecer o erro (NaN) que significa (Not a number). Mas para isso tem certas formas de converter uma string em um number dependendo do seu valor, as quais são:

ParseInt() -> Retorna um valor inteiro
ParseFloat() -> Retorna um valor com casas decimais, se tiver.
Number() -> Retorna qualquer tipo de valor.
*/

const num1 = 5;
const num2 = 2;

const resultado = num1 * num2

console.log(resultado)

let contador = 1;

console.log(contador--) // mostra valor dps soma ou subtrai
console.log(contador)

contador = 1;

console.log(++contador) // soma ou subtrai dps mostra valor
console.log(contador)

const numero1 = parseInt('24abc');
console.log(numero1);

const numero2 = parseFloat('24.234abc');
console.log(numero2);

const numero3 = Number('5');
console.log(numero3);