import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Rafael", 11133399909);

const conta1 = new contaCorrente(1001, cliente1);

const cliente2 = new Cliente("Sophia", 99988833309);

const conta2 = new contaCorrente(2002, cliente2);
conta2.depositar(499);
conta2.transferir(500, conta1);

console.log(conta2);
console.log(cliente1);
console.log(contaCorrente.numeroDeContas);

//console.log(conta2);

