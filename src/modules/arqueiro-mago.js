import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  static tipo = "ArqueiroMago";

  constructor(
    nome,
    level,
    destreza,
    agilidade,
    vigilancia,
    elementoMagico,
    levelMagico,
    inteligencia
  ) {
    super(nome, level);
    this.ladoArqueiro = new Arqueiro(destreza, agilidade, vigilancia);
    this.ladoMago = new Mago(elementoMagico, levelMagico, inteligencia);
  }

  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
  }
}
