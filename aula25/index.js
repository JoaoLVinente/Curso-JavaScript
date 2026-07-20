/*
Mesmo tendo mais de uma condicao verdadeira nos if, else if e else, o primeiro de o motor de JavaScript achar como verdadeiro sera o unico que sera executado.

Se eu quiser criar uma checagem que nao seja feita em cadeia, basta desconectar os if, else if e else, e criar varios ifs.
*/

const numero = 5;

if (numero < 10) {
    console.log(`O ${numero} e menor que 10`);
} else if (1 === 1) {
    console.log("LITERAL!");
}