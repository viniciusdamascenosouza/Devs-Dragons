const personagemPedrinho = {
  nome: "Pedrinho",
  vida: 7,
  mana: 12,
  level: 5,
  tipo: "Mago",
};

const personagemJose = {
  nome: "Jose",
  vida: 7,
  mana: 6,
  level: 3,
  tipo: "Arqueiro",
};

class Personagem {
  nome;
  vida;
  mana;
  level;
  tipo;
}

const BlazeDraco = new Personagem();
BlazeDraco.nome = "BlazeDraco";
BlazeDraco.vida = 10;
BlazeDraco.mana = 10;
BlazeDraco.level = 100;
BlazeDraco.tipo = "Mago";
console.log(BlazeDraco);
