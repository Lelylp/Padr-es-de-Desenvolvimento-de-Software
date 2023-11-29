import SistemaSeguranca from "./SistemaSeguranca";

const agenteSecreto = SistemaSeguranca.getInstance();

agenteSecreto.acessarBaseSecreta("senhaSuperSecreta");

agenteSecreto.acessarBaseSecreta("senhaErrada");
