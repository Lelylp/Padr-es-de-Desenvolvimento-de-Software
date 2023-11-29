
const readline = require('readline-sync');
const Soma = require('./soma');
const Subtracao = require('./subtracao');
const Multiplicacao = require('./multiplicacao');

function obterOperacao() {
  console.log('Escolha a operação:');
  console.log('1 - Soma');
  console.log('2 - Subtração');
  console.log('3 - Multiplicação');
  const opcao = parseInt(readline.question('Digite o número da operação desejada: '));
  return opcao;
}

const num1 = parseInt(readline.question('Digite o primeiro número: '));
const num2 = parseInt(readline.question('Digite o segundo número: '));

let operacao;
switch (obterOperacao()) {
  case 1:
    operacao = new Soma();
    break;
  case 2:
    operacao = new Subtracao();
    break;
  case 3:
    operacao = new Multiplicacao();
    break;
  default:
    console.log('Operação inválida.');
    process.exit(1);
}

const resultado = operacao.execute(num1, num2);
console.log(`O resultado da operação é: ${resultado}`);
