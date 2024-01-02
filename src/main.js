import { Personagem } from "./modules/personagem.js";
import { personagemView } from "./components/personagem-view.js";

const BlazeDraco = new Personagem("BlazeDraco", 10, 10, 100, "Mago");
const ShadowWing = new Personagem("ShadowWing", 10, 10, 100, "Arqueiro");

const personagens = [BlazeDraco, ShadowWing];
new personagemView(personagens).render();
