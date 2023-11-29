const Aplicacao = require('./Aplicacao');

const app = new Aplicacao();
const veiculos = app.criarVeiculos();

const clones = app.cloneVeiculos(veiculos);
app.imprimirRepresentacao(clones);
