const rls = require("readline-sync");

let idade = rls.questionInt("Qual sua idade? ");

let para = 100 - idade; 

for (let i = 0; i < para; i = i + 1) {
    let nova_idade = idade + 1;
    idade = idade + 1;
    console.log(nova_idade);
}