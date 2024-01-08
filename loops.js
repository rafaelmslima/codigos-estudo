const rls = require("readline-sync");

let destino = rls.question("Qual destino voce gostaria de ir?\n");
let idade = rls.question("Qual sua idade? ");
let tem_passagem = rls.question("Já possui passagem conosco? ");
let acompanhado = rls.question("Está acompanhado? ")

let destinos_possiveis = ["Salvador", "Sao Paulo", "Recife", "EUA", "Inglaterra"];

const pode_viajar = idade >= 18 || acompanhado === "sim";

let contador = 0;
let destinoExiste = false;
while (contador < 3) {

    if (destinos_possiveis[contador] == destino) {
        destinoExiste = true
        break
    }
    contador ++;
}

console.log("Destino existe: ", destinoExiste)