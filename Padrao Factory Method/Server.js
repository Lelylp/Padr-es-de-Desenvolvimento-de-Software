// Server.js - Implementação para um Server
const Computer = require('./Computer');

class Server extends Computer {
  constructor(ram, hdd, cpu) {
    super();
    this._ram = ram;
    this._hdd = hdd;
    this._cpu = cpu;
    this._type = 'Server';
  }

  // Métodos getters para RAM, HDD, CPU e tipo
  // ...

  toString() {
    return `Server - RAM: ${this.ram}, HDD: ${this.hdd}, CPU: ${this.cpu}`;
  }
}

module.exports = Server;
