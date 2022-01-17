// Superclass

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor){
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function(){
  console.log(`Ag. C : ${this.agencia}/${this.conta}  | Saldo: R$${this.saldo.toFixed(2)}`)
};

// Conta Corrente
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
  if(valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};


// Conta Poupança
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaPoupanca.prototype.sacar = function(valor){
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};




const contaCorente1 = new ContaCorrente(11, 22, 0, 100);
contaCorente1.depositar(10);
contaCorente1.sacar(110);
contaCorente1.sacar(1);

console.log();

const contaPoupanca1 = new ContaPoupanca(11, 22, 0);
contaPoupanca1.depositar(10);
contaPoupanca1.sacar(10);
contaPoupanca1.sacar(1);
