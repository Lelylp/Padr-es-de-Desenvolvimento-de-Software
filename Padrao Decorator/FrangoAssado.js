class FrangoAssado {
    constructor() {
      this.preco = 4.5;
      this.descricao = 'Sanduíche de Frango Assado';
    }
  
    custo() {
      return this.preco;
    }
  
    descricaoDoSanduiche() {
      return this.descricao;
    }
  }
  
  module.exports = FrangoAssado;
  