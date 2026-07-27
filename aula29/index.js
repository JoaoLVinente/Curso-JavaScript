const data = new Date('2026-7-23');
const diaSemanaAtual = data.getDay();

switch (diaSemanaAtual){
case 0 :
    return console.log('Hoje e Domingo!');
case 1 :
    return console.log('Hoje e Segunda!');
case 2 :
    return console.log('Hoje e Terca-feira!');
case 3 :
    return console.log('Hoje e Quarta-feira!');
case 4 :
    return console.log('Hoje e Quinta-feira!');
case 5 :
    return console.log('Hoje e Sexta-feira!');
case 6 :
    return console.log('Hoje e Sabado!');
default:
    return console.log('erro')
}