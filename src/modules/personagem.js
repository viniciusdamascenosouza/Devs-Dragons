export class Personagem {
  nome;
  vida;
  mana;
  level;
  tipo;

  constructor(nome, vida, mana, level, tipo) {
    this.nome = nome;
    this.vida = vida;
    this.mana = mana;
    this.level = level;
    this.tipo = tipo;
  }

  obterInsignia() {
    if (this.level >= 50) {
      return `Raro`;
    }
    return `Aprendiz`;
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
