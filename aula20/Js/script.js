function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function criaPessoa(nome, sobrenome, peso, idade) {
        const pessoa = {nome, sobrenome, peso, idade};
        pessoas.push(pessoa)
    }

    function recebeEventoForm (evento) {
        evento.preventDefault(); //impede a pagina de ser atualizada ao enviar os dados

        const nome=  form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const idade = form.querySelector('.idade');

        criaPessoa (nome.value, sobrenome.value, peso.value, idade.value) //funcao criaPessoa criara pessoas com os valores dos inputs

        console.log(pessoas)
    }

    form.addEventListener('submit', recebeEventoForm) //executa a funcao quando o submit(envio) acontecer
}
meuEscopo();

