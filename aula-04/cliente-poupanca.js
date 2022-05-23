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


const andre = new Cliente('Andre', '3252135346', 'caio@email.com', 100);

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoup) {
        super(nome, cpf, email, saldo);
        this.saldoPoup = saldoPoup;
    }
    
    depositarPoup(valor) {
        this.saldoPoup += valor;
    }
}

const caio = new ClientePoupanca('Caio', '3252135346', 'caio@email.com', 100, 200);

console.log(caio);


caio.depositarPoup(30);

console.log(caio.saldoPoup);
console.log(andre.saldoPoup); // undefined