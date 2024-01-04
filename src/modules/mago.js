import { Personagem } from "./personagem.js";

export class Mago extends Personagem {
  elementoMagico;
  levelMagico;
  inteligencia;
  static tipo = "Mago";
  static descricao = "O mago é implacável!";

  constructor(nome, elementoMagico, levelMagico, inteligencia) {
    super(nome);
    this.elementoMagico = elementoMagico;
    this.levelMagico = levelMagico;
    this.inteligencia = inteligencia;
  }

  obterInsignia() {
    if (this.level >= 5 && this.level <= 10) {
      return `Mestre do ${this.elementoMagico}`;
    } if (this.level >= 10){
      return `Lendário Mestre do ${this.elementoMagico}`
    }
    return super.obterInsignia();
  }
}
