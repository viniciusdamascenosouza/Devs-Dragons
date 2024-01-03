import { personagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";

// magos
const BlazeDraco = new Mago("BlazeDraco", 100, "Fogo", 10, 10);
const ShadowWing = new Mago("ShadowWing", 45, "Gelo", 10, 10);

// arqueiros
const ThunderTail = new Arqueiro("ThunderTail", 60, 8, 7, 9);

// arqueiros magos
const CelestialChaos = new ArqueiroMago("CelestialChaos", 87, 8, 7, 7, "Raio", 10, 8 )

const personagens = [BlazeDraco, ShadowWing, ThunderTail, CelestialChaos];
new personagemView(personagens).render();
