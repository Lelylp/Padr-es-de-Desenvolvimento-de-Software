// ComputerFactory.js - Factory Method para criar diferentes tipos de computadores
const PC = require('./PC');
const Server = require('./Server');

class ComputerFactory {
  createComputer(type, ram, hdd, cpu) {
    if (type === 'PC') {
      return new PC(ram, hdd, cpu);
    } else if (type === 'Server') {
      return new Server(ram, hdd, cpu);
    } else {
      throw new Error('Tipo de computador desconhecido.');
    }
  }
}

module.exports = ComputerFactory;
