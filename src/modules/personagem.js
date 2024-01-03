export class Personagem {
  nome
  vida = 100
  mana = 100
  level
  tipo
  descricao

  constructor(nome, level, tipo) {
      this.nome = nome
      this.level = level
      this.tipo = tipo
  }

  obterInsignia() {
      if (this.level >= 5){
          return `Implacavel ${this.constructor.tipo}`
      }
      return `${this.constructor.tipo} iniciante`
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
