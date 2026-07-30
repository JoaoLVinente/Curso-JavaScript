//for in

const frutas = [
    'maca', 'banana', 'uva', 'pera', 'abacaxi'    
];

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'joao',
    sobrenome: 'lucas',
    idade: 20
}

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}