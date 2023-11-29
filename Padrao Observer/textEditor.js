
const Editor = require('./editor');

class TextEditor extends Editor {
  constructor() {
    super();
    this.lines = [];
  }

  insertLine(lineNumber, text) {
    this.lines.splice(lineNumber - 1, 0, text);
    this.lines = this.lines.map((line, index) => `${index + 1}: ${line}`);
  }

  removeLine(lineNumber) {
    this.lines.splice(lineNumber - 1, 1);
    this.lines = this.lines.map((line, index) => `${index + 1}: ${line}`);
  }
}

module.exports = TextEditor;
