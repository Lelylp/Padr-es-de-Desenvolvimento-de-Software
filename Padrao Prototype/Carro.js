const Veiculo = require('./Veiculo');

class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
    super(modelo, marca, cor, numeroRodas);
    this.numeroPortas = numeroPortas;
  }

  represent() {
    return `${super.represent()}, Portas: ${this.numeroPortas}`;
  }
}

module.exports = Carro;
