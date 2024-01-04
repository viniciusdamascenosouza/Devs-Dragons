export class Personagem {
  nome;
  vida = 100;
  mana = 100;
  #level;
  tipo;
  descricao;

  constructor(nome) {
    this.nome = nome;
    this.#level = 1;
  }

  aumentarLevel() {
    this.#level += 1;
  }

  diminuirLevel() {
    this.level -= 1;
  }

  get level() {
    return this.#level;
  }

  set level(novoLevel) {
    if (novoLevel >= 1) {
      this.#level = novoLevel;
    }
  }

  obterInsignia() {
    if (this.#level >= 5 && this.#level >= 10) {
      return `Implacavel ${this.constructor.tipo}`;
    } if (this.#level >= 10) {
      return `Lendário`;
    } else return `${this.constructor.tipo} iniciante`;
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
