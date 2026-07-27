const data = new Date();

function horaBrasil(dataAtualBrasil) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
    const diaSemana = data.getDay();
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const dataBrasileira = horaBrasil(Date.now);

console.log(dataBrasileira);