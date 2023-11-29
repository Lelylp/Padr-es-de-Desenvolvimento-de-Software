const Veiculo = require('./Veiculo');

class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, partidaEletrica) {
    super(modelo, marca, cor, numeroRodas);
    this.partidaEletrica = partidaEletrica;
  }

  represent() {
    return `${super.represent()}, Partida Elétrica: ${this.partidaEletrica ? 'Sim' : 'Não'}`;
  }
}

module.exports = Moto;
