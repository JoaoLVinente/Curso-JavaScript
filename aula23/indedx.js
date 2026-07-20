/*
Short-Circuit (Curto-Circuito)

Ao inves, em alguns casos, de usar o sistema de if e else, basta que eu use, ou o && ou o || (E, OU)

tudo que nao for:
- false;
- 0;
- NaN;
- null / undefined;
- '', "" e ``;
o que nao for isso, e dado como verdadeiro pelo JavaScript.
*/

let usuarioLogado = true;

function falaBomdia() {
    console.log("Bom dia!");
}

usuarioLogado && falaBomdia()