/*
if, else if e else

De 0 a 11 - dizer Bom dia
De 12 a 17 - dizer Boa tarde
De 18 a 23 - dizer Boa noite
*/

let hora = 55;

if (hora >= 0 && hora <= 11) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite!");
} else {
    console.log("Ola, tudo bem?");
}