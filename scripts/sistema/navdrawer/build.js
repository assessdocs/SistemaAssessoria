import { menuConfig } from '/scripts/sistema/navdrawer/dados.js';

function criarItem(item) {

  if (item === 'divider') {
    return '<div class="navdrawer-div"></div>';
  }

  return `
    <a
      class="navdrawer-option"
      href="${item.href}"
      data-path="${item.path ?? ''}"
    >
      <span class="material-symbols-rounded">
        ${item.icon}
      </span>

      ${item.text}
    </a>
  `;
}

function gerarGrupo(itens) {
  return itens.map(criarItem).join('');
}

function gerarNavdrawer() {
  return `
    <header id="navdrawer">

      <div class="sistema-logo">

        <div class="logo">
          <img
            src="/sistema/logo.svg"
            id="logo"
            alt="Logo"
          >
        </div>

        <div class="logo-div"></div>

      </div>

      <div class="sistema-navdrawer">

        <div class="up-side">
          ${gerarGrupo(menuConfig.top)}
        </div>

        <div class="down-side">
          ${gerarGrupo(menuConfig.bottom)}
        </div>

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