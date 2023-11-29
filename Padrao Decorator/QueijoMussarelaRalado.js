class QueijoMussarelaRalado {
    constructor(sanduiche) {
      this.preco = 2.0;
      this.descricao = 'Queijo Mussarela Ralado';
      this.sanduiche = sanduiche;
    }
  
    custo() {
      return this.preco + this.sanduiche.custo();
    }
  
    descricaoDoSanduiche() {
      return `${this.sanduiche.descricaoDoSanduiche()}, ${this.descricao}`;
    }
  }
  
  module.exports = QueijoMussarelaRalado;
  