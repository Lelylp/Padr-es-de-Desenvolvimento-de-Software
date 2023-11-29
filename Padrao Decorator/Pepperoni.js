class Pepperoni {
    constructor(sanduiche) {
      this.preco = 0.99;
      this.descricao = 'Pepperoni';
      this.sanduiche = sanduiche;
    }
  
    custo() {
      return this.preco + this.sanduiche.custo();
    }
  
    descricaoDoSanduiche() {
      return `${this.sanduiche.descricaoDoSanduiche()}, ${this.descricao}`;
    }
  }
  
  module.exports = Pepperoni;
  