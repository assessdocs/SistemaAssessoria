import { inserirNavdrawer } from '/scripts/sistema/navdrawer/build.js';
import { ativarMenuAtual } from '/scripts/sistema/navdrawer/ativo.js';

document.addEventListener('DOMContentLoaded',() => {

  inserirNavdrawer();

  ativarMenuAtual();
  }
);