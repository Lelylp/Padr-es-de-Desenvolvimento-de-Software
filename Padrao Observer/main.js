
const readline = require('readline-sync');
const TextEditor = require('./textEditor');

const textEditor = new TextEditor();

textEditor.subscribe(event => {
  if (event === 'open') {
    console.log('Editor aberto.');
  } else if (event === 'save') {
    console.log('Conteúdo salvo no arquivo.');
    console.log('Conteúdo do arquivo:');
    console.log(textEditor.lines.join('\n'));
  }
});

textEditor.open();

console.log('Insira as linhas de texto (digite "EOF" para sair):');

let lineNumber = 1;
while (true) {
  const input = readline.question(`Digite o texto da linha ${lineNumber} ou "EOF" para sair: `);
  if (input.toLowerCase() === 'eof') {
    break;
  }
  textEditor.insertLine(lineNumber, input);
  lineNumber++;
}

textEditor.save();
