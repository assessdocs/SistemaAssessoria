import { menuConfig } from './dados.js';

function criarItem(item) {

  if (item === 'divider') {
    return '<div class="navdrawer-div expanded"></div>';
  }

  return `
    <a class="navdrawer-option" href="${item.href}">
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
    <div class="up-side">${gerarGrupo(menuConfig.top)}</div>
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