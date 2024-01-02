import { Personagem } from "./modules/personagem.js";

const BlazeDraco = new Personagem();
BlazeDraco.nome = "BlazeDraco";
BlazeDraco.vida = 10;
BlazeDraco.mana = 10;
BlazeDraco.level = 100;
BlazeDraco.tipo = "Mago";

const ShadowWing = new Personagem();
ShadowWing.nome = "ShadowWing";
ShadowWing.vida = 10;
ShadowWing.mana = 10;
ShadowWing.level = 100;
ShadowWing.tipo = "Ladino";

console.log(`Insígnia de ${ShadowWing.nome}: ${ShadowWing.obterInsignia()}`);
console.log(`Insígnia de ${BlazeDraco.nome}: ${BlazeDraco.obterInsignia()}`);
