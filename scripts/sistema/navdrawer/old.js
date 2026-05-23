// navdrawer.js

const navdrawerHTML = `
<header id="navdrawer">

  <!-- LOGO -->

  <div class="sistema-logo">
    <div class="logo"><img src="/sistema/logo.svg" id="logo" alt="Logo"></div>
    <div class="logo-div"></div>
  </div>

  <!-- NAVDRAWER -->

  <div class="sistema-navdrawer">

    <!-- UP SIDE -->
    <div class="up-side">

      <a class="navdrawer-option" id="menu-home" data-path="" href="/">
        <span class="material-symbols-rounded">home</span>Painel Inicial
      </a>

      <div class="navdrawer-div"></div>

      <a class="navdrawer-option" id="menu-orcamento" data-path="documentos/orcamento/" href="/documentos/orcamento/">
        <span class="material-symbols-rounded">request_quote</span>Orçamento
      </a>

      <a class="navdrawer-option" id="menu-eve" data-path="documentos/eve/" href="/documentos/eve/">
        <span class="material-symbols-rounded">insert_chart</span>EVE e SWOT
      </a>

      <a class="navdrawer-option" id="menu-business" data-path="documentos/business/" href="/documentos/business/">
        <span class="material-symbols-rounded">bid_landscape</span>Business
      </a>

      <a class="navdrawer-option" id="menu-dmpl" data-path="documentos/dmpl/" href="/documentos/dmpl/">
        <span class="material-symbols-rounded">table</span>DMPL
      </a>

      <a class="navdrawer-option" id="menu-notafiscal" data-path="documentos/notafiscal/" href="/documentos/notafiscal/">
        <span class="material-symbols-rounded">receipt_long</span>Nota Fiscal
      </a>

      <div class="navdrawer-div"></div>

      <a class="navdrawer-option" id="menu-conciliacao" data-path="documentos/conciliacao/" href="/documentos/conciliacao/">
        <span class="material-symbols-rounded">splitscreen_landscape</span>Conciliação
      </a>

      <a class="navdrawer-option" id="menu-govbr" data-path="documentos/govbr/" href="/documentos/govbr/">
        <span class="material-symbols-rounded">account_balance</span>GovBR
      </a>

      <a class="navdrawer-option" id="menu-score" data-path="documentos/score/" href="/documentos/score/">
        <span class="material-symbols-rounded">speed</span>Score
      </a>

      <a class="navdrawer-option" id="menu-varredura" data-path="documentos/varredura/" href="/documentos/varredura/">
        <span class="material-symbols-rounded">table_chart_view</span>Varredura
      </a>

    </div>

    <!-- DOWN SIDE -->
    <div class="down-side">

      <div class="navdrawer-div"></div>

      <a class="navdrawer-option" id="menu-ajuda" data-path="ajuda/" href="/ajuda/">
        <span class="material-symbols-rounded">help</span>Ajuda
      </a>

      <a class="navdrawer-option" id="menu-configuracoes" data-path="configuracoes/" href="/configuracoes/">
        <span class="material-symbols-rounded">settings</span>Configurações
      </a>

      <a class="navdrawer-option" id="menu-sair" href="https://www.google.com">
        <span class="material-symbols-rounded">logout</span>Sair do Sistema
      </a>
      
    </div>
  </div>
</header>
`;

function inserirNavdrawer() {
  document.body.insertAdjacentHTML('afterbegin', navdrawerHTML);
}

function ativarMenu() {
  const currentPath = location.pathname
    .replace(/\\/g, '/')
    .toLowerCase();

  let ativou = false;

  document
    .querySelectorAll('.sistema-navdrawer .navdrawer-option[data-path]')
    .forEach(link => {

      link.classList.remove('ativo');

      const path = link.dataset.path.toLowerCase();

      // ignora o menu Home
      if (!path) return;

      if (currentPath.includes('/' + path)) {
        link.classList.add('ativo');
        ativou = true;
      }
    });

  // Home quando nenhum outro menu estiver ativo
  if (!ativou) {
    document.getElementById('menu-home')?.classList.add('ativo');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  inserirNavdrawer();
  ativarMenu();
});