
const Strategy = require('./strategy');

class Multiplicacao extends Strategy {
  execute(num1, num2) {
    return num1 * num2;
  }
}

module.exports = Multiplicacao;
