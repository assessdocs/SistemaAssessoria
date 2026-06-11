import { menuConfig } from './dados.js';

function criarItem(item) {

  if (item === 'divider') {
    return '<div class="navdrawer-div"></div>';
  }

  return `
    <a class="navdrawer-option" href="${item.href}">
      <span class="navdrawer-state-layer"></span>

      <span class="material-symbols-rounded">
        ${item.icon}
      </span>
      
      <span class="navdrawer-text">
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
    <header id="navdrawer">

      <div class="sistema-header">

        <div class="navdrawer-menu" id="navdrawer-menu">
          <span class="menu-state-layer"></span>

          <span class="material-symbols-rounded" id="navdrawer-menu-icon">
            menu
          </span>
        </div>

        <div class="logo" id="navdrawer-logo">
          <img src="${BASE_URL}sistema/logo-alt.svg" id="logo" alt="Logo">
        </div>
        
      </div>

      <div class="sistema-navdrawer">

        <div class="up-side">${gerarGrupo(menuConfig.top)}</div>

        <div class="down-side">${gerarGrupo(menuConfig.bottom)}</div>

      </div>

    </header>
  `;
}

export function inserirNavdrawer() {
  document.body.insertAdjacentHTML(
    'afterbegin',
    gerarNavdrawer()
  );
}