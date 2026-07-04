document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('consulta').innerHTML = `
        <div class="box-header">
            <span class="material-symbols-rounded">feature_search</span>
            <h2>Consulta Rápida</h2>
        </div>

        <div class="base-boxcampos">

            <div class="campo">
                <div class="label">
                    <label class="label-campo" for="i-consulta">CNPJ</label>
                    <span class="material-symbols-rounded tooltip" data-tooltip="Utilize somente números, pois o sistema irá pontuar automaticamente.">info</span>
                </div>

                <input class="input" id="i-consulta" placeholder="00.000.000/0000-00">
            </div>

            <div class="campo" id="campo-iframe">
                <div class="label">
                    <div class="label-campo">Base de Dados</div>
                </div>
                
                <iframe id="iframe"></iframe>
            </div>
                                
            <div class="campo" id="verificacao">
                <div class="label">
                    <label class="label-campo" for="i-code">Verificação</label>
                </div>

                <textarea id="i-code" placeholder="Cole o código exibido na Base de Dados aqui."></textarea>
                
                <button class="filled" id="verificar">
                    <span class="material-symbols-rounded">frame_inspect</span>
                    <span>Verificar Dados</span>
                </button>
            </div>
        </div>
    `;
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('resultado-consulta').innerHTML = `
        <div class="box-header">
            <span class="material-symbols-rounded">search_check_2</span>
            <h2>Resultado da Consulta</h2>
        </div>

        <div class="base-boxcampos">
            <div class="campo">
                <div class="label">
                    <div class="label-campo">Dados da Empresa</div>
                </div>

                <div class="campo-texto">
                    <p id="dadosdaempresa">
                        CNPJ: <span id="resultado-cnpj"></span>
                        <br>
                        Razão Social: <span id="resultado-rs"></span>
                        <br>
                        Data de Abertura: <span id="resultado-abertura"></span>
                    </p>
                </div>
            </div>
        </div>
    `;
});

document.addEventListener('DOMContentLoaded', () => {

    // ==================================================
    // ELEMENTOS
    // ==================================================

    const el = {

        // BOXES
        consultaBox: document.getElementById('consulta'),

        // CONSULTA
        inputConsulta: document.getElementById('i-consulta'),
        iframeBox: document.getElementById('campo-iframe'),
        iframe: document.getElementById('iframe'),

        // VERIFICAÇÃO
        verificacao: document.getElementById('verificacao'),
        inputCode: document.getElementById('i-code'),

        // BOTÕES
        btnVerificar: document.getElementById('verificar'),

        // RESULTADO
        resultado: document.getElementById('resultado-consulta'),
        resultadoCnpj: document.getElementById('resultado-cnpj'),
        resultadoRs: document.getElementById('resultado-rs'),
        resultadoAbertura: document.getElementById('resultado-abertura')

    };

    // ==================================================
    // UTILIDADES
    // ==================================================

    const ui = {

        mostrar(elemento, display = 'block') {

            if (!elemento) return;

            elemento.style.display = display;

        },

        esconder(elemento) {

            if (!elemento) return;

            elemento.style.display = 'none';

        }

    };

    function parseJSON(valor) {

        try {

            return JSON.parse(valor);

        } catch {

            alert('Código inválido.');
            return null;

        }

    }

    // ==================================================
    // FORMATAÇÕES
    // ==================================================

    function formatarCNPJ(valor) {

        const cnpj = valor
            .replace(/\D/g, '')
            .slice(0, 14);

        return cnpj
            .replace(/^(\d{2})(\d)/, '$1.$2')
            .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
            .replace(/\.(\d{3})(\d)/, '.$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2');

    }

    // ==================================================
    // CONSULTA
    // ==================================================

    function verificarConsulta() {

        const cnpj =
            el.inputConsulta.value.replace(/\D/g, '');

        if (cnpj.length !== 14) {

            ui.esconder(el.iframeBox);
            ui.esconder(el.verificacao);
            ui.esconder(el.resultado);

            return;

        }

        el.iframe.src =
            `https://receitaws.com.br/v1/cnpj/${cnpj}`;

        ui.mostrar(el.iframeBox, 'flex');
        ui.mostrar(el.verificacao, 'flex');

    }

    // ==================================================
    // INPUT CONSULTA
    // ==================================================

    el.inputConsulta.addEventListener('input', () => {

        el.inputConsulta.value =
            formatarCNPJ(el.inputConsulta.value);

        verificarConsulta();

    });

    // ==================================================
    // BOTÃO VERIFICAR
    // ==================================================

    el.btnVerificar.addEventListener('click', () => {

        const jsonData =
            parseJSON(el.inputCode.value);

        if (!jsonData) return;

        el.resultadoCnpj.textContent =
            jsonData.cnpj || '';

        el.resultadoRs.textContent =
            jsonData.nome || '';

        el.resultadoAbertura.textContent =
            jsonData.abertura || '';

        ui.mostrar(el.resultado);

    });

    // ESTADO INICIAL

    ui.esconder(el.iframeBox);
    ui.esconder(el.verificacao);
    ui.esconder(el.resultado);

});