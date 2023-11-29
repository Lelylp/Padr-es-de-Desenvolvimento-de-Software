const Carro = require('./Carro');
const Moto = require('./Moto');

class Aplicacao {
  criarVeiculos() {
    const veiculos = [];

    const carro1 = new Carro('Fiesta', 'Ford', 'Vermelho', 4, 4);
    const carro2 = new Carro('Civic', 'Honda', 'Preto', 4, 4);
    const moto1 = new Moto('Ninja', 'Kawasaki', 'Verde', 2, true);
    const moto2 = new Moto('Harley', 'Harley Davidson', 'Azul', 2, false);

    veiculos.push(carro1, carro2, moto1, moto2);

    for (let i = 0; i < 2; i++) {
      veiculos.push(carro1.clone());
      veiculos.push(moto1.clone());
    }

    return veiculos;
  }

  cloneVeiculos(veiculos) {
    return veiculos.map((veiculo) => veiculo.clone());
  }

  imprimirRepresentacao(veiculos) {
    const representacoes = veiculos.map((veiculo) => veiculo.represent());
    representacoes.forEach((representacao) => console.log(representacao));
  }
}

module.exports = Aplicacao;
