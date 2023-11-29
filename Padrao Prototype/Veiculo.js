class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    clone() {
      const proto = Object.getPrototypeOf(this);
      const cloned = Object.create(proto);
      cloned.modelo = this.modelo;
      cloned.marca = this.marca;
      cloned.cor = this.cor;
      cloned.numeroRodas = this.numeroRodas;
      return cloned;
    }
  
    represent() {
      return `Veículo: ${this.modelo} ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
  }
  
  module.exports = Veiculo;
  