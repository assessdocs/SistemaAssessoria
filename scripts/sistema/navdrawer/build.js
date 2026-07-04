import { menuConfig } from './dados.js';

function criarItem(item) {

  if (item === 'divider') {
    return '<div class="divisoria"></div>';
  }

  return `
    <a class="item" href="${item.href}">
      <div class="indicator">
        <span class="material-symbols-rounded icon">${item.icon}</span>

        <span class="indicator-label">${item.text}</span>
      </div>
      
      <span class="item-label">${item.text}</span>
    </a>
  `;
}

function gerarGrupo(itens) {
  return itens.map(criarItem).join('');
}

function gerarNavdrawer() {
  return `
    ${gerarGrupo(menuConfig.top)}
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