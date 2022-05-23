function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}

const andre = new Cliente('Andre', '3252135346', 'caio@email.com', 100);

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

const caio = new ClientePoupanca('Caio', '3252135346', 'caio@email.com', 100, 200);

console.log(caio);

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor;
}

caio.depositarPoup(30);

console.log(caio.saldoPoup);
console.log(andre.saldoPoup); // undefined