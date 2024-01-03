import { personagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";

// magos
const BlazeDraco = new Mago("BlazeDraco", 100, "Fogo", 10, 10);
const ShadowWing = new Mago("ShadowWing", 45, "Gelo", 10, 10);

// arqueiros
const ThunderTail = new Arqueiro("ThunderTail", 60, 8);

const personagens = [BlazeDraco, ShadowWing, ThunderTail];
new personagemView(personagens).render();
