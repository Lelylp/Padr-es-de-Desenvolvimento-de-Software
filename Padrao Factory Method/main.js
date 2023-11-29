// main.js - Exemplo de uso do Factory Method para criar computadores
const ComputerFactory = require('./ComputerFactory');

const factory = new ComputerFactory();

const myPC = factory.createComputer('PC', 8, 500, 3.2);
const myServer = factory.createComputer('Server', 16, 1000, 4.0);

console.log(myPC.toString());
console.log(myServer.toString());
