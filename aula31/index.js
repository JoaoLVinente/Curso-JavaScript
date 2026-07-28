//mais diferencas entre var e const/let

//Let tem escopo de bloco ({...bloco})

//let nome = 'joao';

{
    let nome = 'lucas'
    //console.log(nome);
    {
        let nome = 'davi';
    }
}


function falaOi() {
    var nome2 = 'joao';
    console.log(nome2);
}

console.log(nome2);