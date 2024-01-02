import { Personagem } from "./modules/personagem.js";

// const BlazeDraco = new Personagem();
// BlazeDraco.nome = "BlazeDraco";
// BlazeDraco.vida = 10;
// BlazeDraco.mana = 10;
// BlazeDraco.level = 100;
// BlazeDraco.tipo = "Mago";

const BlazeDraco = new Personagem("BlazeDraco", 10, 10, 100, "Mago");
console.log(BlazeDraco);

const ShadowWing = new Personagem();
ShadowWing.nome = "ShadowWing";
ShadowWing.vida = 10;
ShadowWing.mana = 10;
ShadowWing.level = 100;
ShadowWing.tipo = "Ladino";
