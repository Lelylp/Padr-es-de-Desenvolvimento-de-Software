
const Observer = require('./observer');

class Editor extends Observer {
  open() {
    this.notify('open');
  }

  save(content) {
    this.notify('save', content);
  }
}

module.exports = Editor;
