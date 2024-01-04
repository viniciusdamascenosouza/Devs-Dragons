import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  static tipo = "ArqueiroMago";
  static descricao = "Detentor de lancas e flechas mágicas!";

  constructor(
    nome,
    destreza,
    agilidade,
    vigilancia,
    elementoMagico,
    levelMagico,
    inteligencia
  ) {
    super(nome);
    this.ladoArqueiro = new Arqueiro(destreza, agilidade, vigilancia);
    this.ladoMago = new Mago(elementoMagico, levelMagico, inteligencia);
  }

  obterInsignia() {
    if(this.level >= 5 && this.level <= 10) {
      return `Dominador de flechas e Mestre Mago`;
    } if(this.level >= 10){
      return `Lendário Dominador de flechas e Mestre Mago`
    } else {
      return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
  }
}
