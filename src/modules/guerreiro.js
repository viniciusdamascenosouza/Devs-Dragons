import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
  forca;
  coragem;
  manuseio;
  static tipo = "Guerreiro";
  static descricao = "Todo mundo vai subestimar você. Faça-os pagar por isso";

  constructor(nome, forca, coragem, manuseio) {
    super(nome);
    this.forca = forca;
    this.coragem = coragem;
    this.manuseio = manuseio;
  }

  obterInsignia() {
    if (this.level >= 5 && this.level <= 10) {
      return `Guerreiro furioso`;
    } if (this.level >= 10){
      return `Lendário Guerreiro combatente`
    }
    return super.obterInsignia();
  }
}
