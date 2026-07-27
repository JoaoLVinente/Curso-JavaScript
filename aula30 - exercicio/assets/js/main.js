//dia da semana, data completa, hora:minuto
// 1785179900476

const section = document.querySelector('.container');
const p = section.querySelector('.informacoes');

const data = new Date();
const dataSemana = data.getDay();
//const dataAtual = data.toString();

function diaSemanal(dataSemana) {
    switch (dataSemana){
    case 0 :
       return 'Domingo'; 
    case 1 :
        return 'Segunda-feira';
    case 2 :
        return 'Terca-feira';
    case 3 :
        return 'Quarta-feira';
    case 4 :
        return 'Quinta-feira';
    case 5 :
        return 'Sexta-feira';
    case 6 :
        return 'Sabado';
    default:
        break;
    }
}

const diaSemana1 = diaSemanal(data.getDay());

function dataCompleta(data) {
    const ano = data.getFullYear();
    const mes = data.getMonth() + 1;
    const dia = data.getDate();

    return `${dia} de ${mes} de ${ano}`;
}

const dataCompleta1 = dataCompleta(data);

function calculaHora(data) {
    const hora = data.getHours();
    const minuto = data.getMinutes();

    return `${hora}:${minuto}`;
}

const calculaHora1 = calculaHora(data);

p.innerHTML = `<p>${diaSemana1}, ${dataCompleta1}, ${calculaHora1}</p>`