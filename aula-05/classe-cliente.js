class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

const caio = new Cliente('Caio', 'caio@email.com', '235124654', 1000);
caio.depositar(4000);
caio.exibirSaldo();

console.log(caio)