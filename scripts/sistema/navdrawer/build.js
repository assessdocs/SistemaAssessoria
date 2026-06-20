import { menuConfig } from './dados.js';

function criarItem(item) {

  if (item === 'divider') {
    return '<div class="navdrawer-div expanded"></div>';
  }

  return `
    <a class="navdrawer-option" href="${item.href}">
      <span class="navdrawer-state-layer"></span>

      <span class="material-symbols-rounded">
        ${item.icon}
      </span>

      <span class="navdrawer-text expanded">
        ${item.text}
      </span>
    </a>
  `;
}

function gerarGrupo(itens) {
  return itens.map(criarItem).join('');
}

function gerarNavdrawer() {
  return `
    <div class="sistema-header">
      <div class="navdrawer-menu" id="navdrawer-menu">
        <span class="menu-state-layer"></span>
        <span class="material-symbols-rounded" id="navdrawer-menu-icon">menu</span>
      </div>

      <div class="logo" id="navdrawer-logo">
        <img src="${BASE_URL}sistema/logo.svg" id="logo" alt="Logo">
      </div>
    </div>

    <div class="sistema-navdrawer" class="expanded">
      <div class="up-side">${gerarGrupo(menuConfig.top)}</div>

      <div class="down-side">${gerarGrupo(menuConfig.bottom)}</div>
    </div>
  `;
}

export function inserirNavdrawer() {
  const navdrawer = document.getElementById('navdrawer');

  if (!navdrawer) {
    console.error('Elemento #navdrawer não encontrado.');
    return;
  }

  navdrawer.innerHTML = gerarNavdrawer();
}