//const pessoa = {
//    nome: 'joao',
//    sobrenome: 'lucas', 
//    idade: 20,
//    endereco: {
//        rua: 'Av lauro',
//        numero: 300
//    }
//};
//
//const {nome: primeiroNome} = pessoa;
//
//console.log(primeiroNome);

//const pessoa = {
//    nome: 'joao',
//    sobrenome: 'lucas', 
//    idade: 20,
//    endereco: {
//        rua: 'Av lauro',
//        numero: 300
//    }
//};
//
//const {endereco: {rua}} = pessoa;
//
//console.log(rua);

const pessoa = {
    nome: 'joao',
    sobrenome: 'lucas', 
    idade: 20,
    endereco: {
        rua: 'Av lauro',
        numero: 300
    }
};

const {nome, sobrenome, ...resto} = pessoa;

console.log(resto);