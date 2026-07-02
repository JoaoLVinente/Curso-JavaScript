function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

        falar() {
            console.log(`${nome} esta falando oi!`)
        }
    }
}

const pessoa1 = criaPessoa('Joao', 'Lucas', 20);

console.log(pessoa1.falar())