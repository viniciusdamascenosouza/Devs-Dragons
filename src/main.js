import { personagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

// magos
const BlazeDraco = new Mago("BlazeDraco", "Fogo", 10, 10);
const ShadowWing = new Mago("ShadowWing", "Gelo", 10, 10);

// arqueiros
const ThunderTail = new Arqueiro("ThunderTail", 8, 7, 9);

// arqueiros magos
const CelestialChaos = new ArqueiroMago(
  "CelestialChaos",
  8,
  7,
  7,
  "Raio",
  10,
  8
);
const Absalom = new ArqueiroMago("Absalom", 9, 6, 8, "Ar", 10, 10);

// guerreiros
const Asvah = new Guerreiro("Asvah", 8, 10, 9);
const Zephyros = new Guerreiro("Zephyros ", 9, 9, 8);

const personagens = [
  CelestialChaos,
  Asvah,
  Absalom,
  BlazeDraco,
  ShadowWing,
  ThunderTail,
  Zephyros,
];
new personagemView(personagens).render();
