const rls = require("readline-sync");


let cidades = [];

console.log("Olá, bem-vindo a lista doida do Rafael");
let algo;

while (true) {
let key = rls.questionInt("Digite sua opcao \n1. Adicionar Evento \n2. Excluir Evento\n");

    if (key === 1) {
    console.log("Digite algo para colocar na lista: ");
    console.log("***********************************");
    algo = rls.question("O que voce quer colocar na lista? ");
    cidades.push(algo);
    console.log(cidades);
    } else if (key === 2) {
    console.log("Digite algo para retirar da lista: ");
    algo = rls.question("qual item voce quer retirar da lista?");
    let index = cidades.indexOf(algo);
    if (index !== -1) {
        cidades.splice(index,1);
        console.log(`${algo} foi removido da lista`);
        console.log(cidades);
    } else {
        console.log("A lista nao possui esse elemento");
    }
    } else {
        break;
    }
}