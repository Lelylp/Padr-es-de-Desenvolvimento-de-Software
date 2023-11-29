
const Strategy = require('./strategy');

class Subtracao extends Strategy {
  execute(num1, num2) {
    return num1 - num2;
  }
}

module.exports = Subtracao;
