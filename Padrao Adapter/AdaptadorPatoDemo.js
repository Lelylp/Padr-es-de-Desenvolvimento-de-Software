const Pato = require('./Pato');
const AdaptadorPato = require('./AdaptadorPato');

class AdaptadorPatoDemo {
  static executar() {
    const pato = new Pato();
    const adaptador = new AdaptadorPato(pato);

    console.log("Pato:");
    console.log(`Grasnando: ${pato.grasnar()}`);
    console.log(`Voando: ${pato.voar()}`);

    console.log("\nAdaptador de Pato para Galinha:");
    console.log(`Cacarejando: ${adaptador.cacarejar()}`);
    console.log(`Voando baixo: ${adaptador.voarBaixo()}`);
  }
}

AdaptadorPatoDemo.executar();
