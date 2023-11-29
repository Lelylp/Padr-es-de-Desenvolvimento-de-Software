const FrangoAssado = require('./FrangoAssado');
const Pepperoni = require('./Pepperoni');
const QueijoMussarelaRalado = require('./QueijoMussarelaRalado');

let sanduiche = new FrangoAssado();

sanduiche = new Pepperoni(sanduiche);

sanduiche = new QueijoMussarelaRalado(sanduiche);

console.log(`${sanduiche.descricaoDoSanduiche()} custa $${sanduiche.custo().toFixed(2)}.`);
