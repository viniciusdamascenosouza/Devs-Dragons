import { Personagem } from "./modules/personagem.js";
import { personagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";

const BlazeDraco = new Mago("BlazeDraco", 100, "Fogo", 10, 10);
const ShadowWing = new Mago("ShadowWing", 45, "Gelo",10, 10);

const personagens = [BlazeDraco, ShadowWing];
new personagemView(personagens).render();
