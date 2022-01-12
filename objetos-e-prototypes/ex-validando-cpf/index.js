function ValidarCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
      return cpfEnviado.replace(/\D+/g, '')
    }
  }); 
}

ValidarCPF.prototype.valida = function() {
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  if(this.isSequecia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCPF = cpfParcial + digito1 + digito2;

  return novoCPF === this.cpfLimpo;
};

ValidarCPF.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  let total = cpfArray.reduce((acumulador, valor) => {
    acumulador += (regressivo * Number(valor));
    regressivo--;
    return acumulador
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);
}

ValidarCPF.prototype.isSequecia = function() {
  return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}

const cpf = new ValidarCPF('705.484.450-52');
console.log(cpf.valida());