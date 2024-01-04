import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
  destreza;
  agilidade;
  vigilancia;
  static tipo = "Arqueiro";
  static descricao = "Você tem o meu arco!";

  constructor(nome, destreza, agilidade, vigilancia) {
    super(nome);
    this.destreza = destreza;
    this.agilidade = agilidade;
    this.vigilancia = vigilancia;
  }

  obterInsignia() {
    if (this.level >= 5 && this.level <= 10) {
      return `Dominador de flechas`;
    } if(this.level >= 10){
      return `Arqueiro Lendário`
    }
    else return super.obterInsignia();
  }
}
