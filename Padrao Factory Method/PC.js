// PC.js - Implementação para um PC
const Computer = require('./Computer');

class PC extends Computer {
  constructor(ram, hdd, cpu) {
    super();
    this._ram = ram;
    this._hdd = hdd;
    this._cpu = cpu;
    this._type = 'PC';
  }

  // Métodos getters para RAM, HDD, CPU e tipo
  // ...

  toString() {
    return `PC - RAM: ${this.ram}, HDD: ${this.hdd}, CPU: ${this.cpu}`;
  }
}

module.exports = PC;
