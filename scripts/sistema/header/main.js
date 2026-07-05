import { initAssessoriaSystem } from './assessoria.js';

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    if (!header) return;

    header.innerHTML = renderHeader();

    initNavigation();
    initPageButtons();
    initActiveButtons();
    initNavDrawer();
    initAssessoriaSystem();
});

/* ========================================
   HEADER
======================================== */

function renderHeader() {
    const logo = localStorage.getItem('theme') === 'dark'
        ? 'logo-dark.svg'
        : 'logo.svg';

    return `
        <div class="left">
            <div id="navdrawer-menu">
                <span class="material-symbols-rounded" id="navdrawer-menu-icon">
                    menu
                </span>
            </div>
            
            <a class="logo" href="/">
                <img src="${BASE_URL}sistema/${logo}" id="logo" alt="Logo">
            </a>

            <div class="divisoria"></div>
        </div>

        <div class="right">

            <button id="ajuda" class="standard icon" data-tooltip="Ajuda">
                <span class="material-symbols-rounded p24">help</span>
            </button>

            <button id="configuracoes" class="standard icon" data-tooltip="Configurações">
                <span class="material-symbols-rounded p24">settings</span>
            </button>

            <div class="split-button" style="margin-left: 4px;">

                <div class="leading">
                    <span class="assessoria-nome" id="assessoria-ativa"></span>
                </div>

                <div class="trailing" id="trailing-assessoria">
                    <span class="material-symbols-rounded">
                        keyboard_arrow_down
                    </span>
                </div>

                <div class="menu" id="menu-assessoria">

                    <div id="assessoria-options"></div>

                    <div id="sair" class="bot">
                        <span class="material-symbols-rounded">logout</span>
                        <span>Sair do Sistema</span>
                    </div>

                </div>

            </div>

        </div>
    `;
}

/* ========================================
   NAVEGAÇÃO
======================================== */

function initNavigation() {
    document.getElementById('ajuda')?.addEventListener('click', () => {
        window.location.href = `${BASE_URL}ajuda/`;
    });

    document.getElementById('configuracoes')?.addEventListener('click', () => {
        window.location.href = `${BASE_URL}configuracoes/`;
    });
}

/* ========================================
   BOTÕES ATIVOS
======================================== */

function initActiveButtons() {
    requestAnimationFrame(() => {
        const path = location.pathname.toLowerCase();

        if (path.includes('ajuda')) {
            document.getElementById('ajuda')
                ?.classList.add('ativo');
        }

        if (
            path.includes('configuracoes') ||
            path.includes('configuracao')
        ) {
            document.getElementById('configuracoes')
                ?.classList.add('ativo');
        }
    });
}

/* ========================================
   NAVDRAWER
======================================== */

function initNavDrawer() {

    const menuButton = document.getElementById('navdrawer-menu');
    const menuIcon = document.getElementById('navdrawer-menu-icon');

    const elementos = [
        document.getElementById('navdrawer'),
        ...document.querySelectorAll(
            '.sistema-pagina'
        )
    ];

    function aplicarEstado(expandido) {
        elementos.forEach(el => {
            el?.classList.toggle('expanded', expandido);
        });

        menuIcon.textContent = expandido
            ? 'menu_open'
            : 'menu';
    }

    function obterEstado() {

        if (window.innerWidth < 920) {
            return false;
        }

        const salvo = localStorage.getItem('navdrawerExpandido');

        return salvo === null
            ? true
            : salvo === 'true';
    }

    function atualizar() {
        aplicarEstado(obterEstado());
    }

    atualizar();

    window.addEventListener('resize', atualizar);

    menuButton?.addEventListener('click', () => {

        const expandido = !elementos[0]?.classList.contains('expanded');

        aplicarEstado(expandido);

        localStorage.setItem(
            'navdrawerExpandido',
            expandido
        );

    });

}

/* ========================================
   OUTROS
======================================== */

function initPageButtons() {
    // Reservado para futuras inicializações da página.
}