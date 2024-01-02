export class Personagem {
  nome;
  vida;
  mana;
  level;
  tipo;

  obterInsignia() {
    if (this.level >= 50) {
      return `${this.tipo} Raro`;
    }
    return `${this.tipo} Aprendiz`;
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
