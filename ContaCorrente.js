import { Cliente } from "./Cliente.js";

export class contaCorrente {
    agencia;
    _cliente;
    _saldo = 0;
    static numeroDeContas = 0;

    set cliente (novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente () {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia) {
        this.agencia = agencia;
        this._cliente = cliente;
        contaCorrente.numeroDeContas += 1;
    }

    sacar (valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log("Voce nao possui saldo suficiente");
        }
    }

    depositar(valor) {
        if (valor >= 0) {
            this._saldo += valor;
            //return console.log(`x depositou ${valor}`)
        }
    }

    transferir(valor, conta) {
        const valor1 = this.sacar(valor);
        conta.depositar(valor1);
    }
}