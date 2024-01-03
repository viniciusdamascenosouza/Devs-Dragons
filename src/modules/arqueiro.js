import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
  destreza;
  agilidade;
  vigilancia;
  static tipo = "Arqueiro";

  constructor(nome, level, destreza, agilidade, vigilancia) {
    super(nome, level);
    this.destreza = destreza;
    this.agilidade = agilidade;
    this.vigilancia = vigilancia;
  }

  obterInsignia() {
    if (this.destreza >= 5) {
      return `Dominador de flechas`;
    }
    return super.obterInsignia();
  }
}
