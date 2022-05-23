class Cliente {
    nome;
    cpf;
    email;
    saldo = 0;

    constructor(nome, cpf, email, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }

    depositar = (valor) => {
        this.saldo += valor;
    }
}

const andre = new Cliente("André", "1254359542", "andre@email.com", 100);
andre.depositar(400)

console.log(andre);