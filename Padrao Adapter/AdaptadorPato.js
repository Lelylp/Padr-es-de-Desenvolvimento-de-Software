// AdaptadorPato.js
const Galinha = require('./Galinha');

class AdaptadorPato extends Galinha {
  constructor(pato) {
    super();
    this.pato = pato;
  }

  cacarejar() {
    return this.pato.grasnar();
  }

  voarBaixo() {
    return this.pato.voar();
  }
}

module.exports = AdaptadorPato;
