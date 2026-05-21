// navdrawer.js

const navdrawerHTML = `
<header id="navdrawer">
  <div class="sistema-logo">
    <div class="logo"><img src="" id="logo" alt="Logo"></div>
    <div class="logo-div"></div>
  </div>
  <div class="sistema-navdrawer">
    <div class="up-side">
      <a class="navdrawer-option" id="menu-home" data-path="" href="#">
        <span class="material-symbols-rounded">home</span>Painel Inicial
      </a>
      <div class="navdrawer-div"></div>
      <a class="navdrawer-option" id="menu-orcamento" data-path="documentos/orcamento/" href="#">
        <span class="material-symbols-rounded">request_quote</span>Orçamento
      </a>
      <a class="navdrawer-option" id="menu-eve" data-path="documentos/eve/" href="#">
        <span class="material-symbols-rounded">insert_chart</span>EVE e SWOT
      </a>
      <a class="navdrawer-option" id="menu-business" data-path="documentos/business/" href="#">
        <span class="material-symbols-rounded">bid_landscape</span>Business
      </a>
      <a class="navdrawer-option" id="menu-dmpl" data-path="documentos/dmpl/" href="#">
        <span class="material-symbols-rounded">table</span>DMPL
      </a>
      <a class="navdrawer-option" id="menu-notafiscal" data-path="documentos/notafiscal/" href="#">
        <span class="material-symbols-rounded">receipt_long</span>Nota Fiscal
      </a>
      <div class="navdrawer-div"></div>
      <a class="navdrawer-option" id="menu-conciliacao" data-path="documentos/conciliacao/" href="#">
        <span class="material-symbols-rounded">splitscreen_landscape</span>Conciliação
      </a>
      <a class="navdrawer-option" id="menu-govbr" data-path="documentos/govbr/" href="#">
        <span class="material-symbols-rounded">account_balance</span>GovBR
      </a>
      <a class="navdrawer-option" id="menu-score" data-path="documentos/score/" href="#">
        <span class="material-symbols-rounded">speed</span>Score
      </a>
      <a class="navdrawer-option" id="menu-varredura" data-path="documentos/varredura/" href="#">
        <span class="material-symbols-rounded">table_chart_view</span>Varredura
      </a>
    </div>
    <div class="down-side">
      <div class="navdrawer-div"></div>
      <a class="navdrawer-option" id="menu-ajuda" data-path="ajuda/" href="#">
        <span class="material-symbols-rounded">help</span>Ajuda
      </a>
      <a class="navdrawer-option" id="menu-configuracoes" data-path="configuracoes/" href="#">
        <span class="material-symbols-rounded">settings</span>Configurações
      </a>
      <a class="navdrawer-option" id="menu-sair" href="https://www.google.com">
        <span class="material-symbols-rounded">logout</span>Sair do Sistema
      </a>
    </div>
  </div>
</header>
`;

function getBasePath() {
  if (location.protocol === 'file:') {
    const match = location.pathname.match(/(.*SistemaAssessoria\/)/i);
    if (match && match[1]) {
      return match[1];
    } else {
      return '/SistemaAssessoria/';
    }
  } else {
    return '/SistemaAssessoria/';
  }
}

function inserirNavdrawer() {
  document.body.insertAdjacentHTML('afterbegin', navdrawerHTML);
}

function ajustarLinks(basePath) {
  const navLinks = document.querySelectorAll('.sistema-navdrawer a[data-path]');
  navLinks.forEach(link => {
    const relativePath = link.getAttribute('data-path');
    let fullHref = basePath + relativePath;
    if (!fullHref.endsWith('/')) fullHref += '/';
    link.href = fullHref;
  });
}

function ajustarLogo(basePath) {
  const logo = document.getElementById('logo');
  if (logo) {
    logo.src = basePath + 'sistema/logo.svg';
  }
}

// 🔥 normaliza qualquer URL (remove .html e garante barra final)
function normalizarPath(path) {
  return path
    .toLowerCase()
    .replace(/\/[^\/]+\.html$/, '/')
    .replace(/\/+$/, '/');
}

// 🔥 ativa menu automaticamente baseado no data-path
function ativarMenu(basePath) {
  const navLinks = document.querySelectorAll('.sistema-navdrawer a[data-path]');
  const currentPath = normalizarPath(location.pathname);

  let ativou = false;

  navLinks.forEach(link => {
    link.classList.remove('ativo');

    const relativePath = link.getAttribute('data-path');
    const fullPath = normalizarPath(basePath + relativePath);

    if (relativePath !== "" && currentPath.includes(fullPath)) {
      link.classList.add('ativo');
      ativou = true;
    }
  });

  // fallback para home
  if (!ativou) {
    const home = document.getElementById('menu-home');
    if (home) home.classList.add('ativo');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  inserirNavdrawer();

  const basePath = getBasePath();

  ajustarLinks(basePath);
  ajustarLogo(basePath);
  ativarMenu(basePath);
});