export class Personagem {
  nome;
  vida = 100;
  mana = 100;
  #level;
  tipo;
  descricao;

  constructor(nome, level, tipo) {
    this.nome = nome;
    this.#level = level;
    // this.tipo = tipo;
  }

  obterInsignia() {
    if (this.#level >= 50) {
      return `Implacavel ${this.constructor.tipo}`;
    }
    return `${this.constructor.tipo} iniciante`;
  }

  static verificarVencedor(personagem1, personagem2) {
    if (personagem1.level === personagem2.level) {
      return "Empate";
    }
    if (personagem1.level > personagem2.level) {
      return `${personagem1.constructor.tipo} ${personagem1.nome} Vencedor!`;
    } else {
      return `${personagem2.constructor.tipo} ${personagem2.nome} Vencedor!`;
    }
  }
}

// const insignias = [
//   "Aprendiz I",
//   "Aprendiz II",
//   "Discípulo I",
//   "Discípulo II",
//   "Raro",
//   "Épico",
//   "Lendário",
//   "Mítico",
//   "Divino",
// ];
