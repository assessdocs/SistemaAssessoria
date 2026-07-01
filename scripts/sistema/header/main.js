import { initAssessoriaSystem } from './assessoria.js';

document.addEventListener('DOMContentLoaded', () => {

    const pagina = document.getElementById('pagina');
    if (!pagina) return;

    pagina.innerHTML = renderHeader();

    function renderHeader() {
        return `
        <div class="cabecalho-div"></div>

        <div class="cabecalho-right">

            <button id="ajuda" class="standard icon" data-tooltip="Ajuda">
                <span class="material-symbols-rounded p24">help</span>
                <div class="button-state-layer"></div>
            </button>

            <button id="configuracoes" class="standard icon" data-tooltip="Configurações">
                <div class="button-state-layer"></div>
                <span class="material-symbols-rounded p24">settings</span>
            </button>

            <div class="split-button" style="margin-left: 4px;">

                <div class="leading">
                    <span class="assessoria-nome" id="assessoria-ativa"></span>
                </div>

                <div class="trailing" id="trailing-assessoria">
                    <span class="material-symbols-rounded">keyboard_arrow_down</span>
                </div>

                <div class="menu" id="menu-assessoria">
                    <div id="assessoria-options"></div>

                    <label id="sair">
                        <span class="material-symbols-rounded">logout</span>
                        <span>Sair do Sistema</span>
                    </label>
                </div>

            </div>
        </div>`;
    }

    document.getElementById('ajuda')?.addEventListener('click', () => {
        window.location.href = `${window.BASE_URL}ajuda/`;
    });

    document.getElementById('configuracoes')?.addEventListener('click', () => {
        window.location.href = `${window.BASE_URL}configuracoes/`;
    });

    requestAnimationFrame(() => {
        const path = window.location.pathname.toLowerCase();

        const btnAjuda = document.getElementById('ajuda');
        const btnConfig = document.getElementById('configuracoes');

        if (path.includes('ajuda')) {
            btnAjuda?.classList.add('ativo');
        }

        if (path.includes('configuracoes') || path.includes('configuracao')) {
            btnConfig?.classList.add('ativo');
        }

        initAssessoriaSystem();
    });

});