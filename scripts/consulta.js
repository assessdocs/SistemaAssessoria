document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('consulta').innerHTML = `
        <h2>Consulta</h2>

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

                <textarea id="i-code" placeholder="Copie o código exibido no campo preto e cole-o aqui."></textarea>
                
                <button class="filled" id="verificar">
                    <span class="button-state-layer"></span>
                    <span class="material-symbols-rounded">frame_inspect</span>
                    <span>Verificar Dados</span>
                </button>
            </div>
        </div>
    `;
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('resultado-consulta').innerHTML = `
        <h2>Resultado da Consulta</h2>

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
                    </p>
                </div>

                <button class="filled" id="preencher">
                    <span class="button-state-layer"></span>
                    <span class="material-symbols-rounded">edit_document</span>
                    <span>Inserir no Documento</span>
                </button>
            </div>
        </div>
    `;
});

document.addEventListener('DOMContentLoaded', () => {

    // ==================================================
    // ELEMENTOS
    // ==================================================

    const el = {

        // MODOS
        checkboxManual: document.getElementById('i-versaomanual'),

        // BOXES
        consultaBox: document.getElementById('consulta'),
        versaoManualBox: document.getElementById('versaomanual'),
        boxManual: document.getElementById('box-manual'),

        // CABEÇALHO
        headerManual: document.getElementById('h2-versaomanual'),

        // CONSULTA
        inputConsulta: document.getElementById('i-consulta'),
        iframeBox: document.getElementById('campo-iframe'),
        iframe: document.getElementById('iframe'),

        // VERIFICAÇÃO
        verificacao: document.getElementById('verificacao'),
        inputCode: document.getElementById('i-code'),

        // BOTÕES
        btnVerificar: document.getElementById('verificar'),
        btnInserir: document.getElementById('preencher'),

        // RESULTADO
        resultado: document.getElementById('resultado-consulta'),
        resultadoCnpj: document.getElementById('resultado-cnpj'),
        resultadoRs: document.getElementById('resultado-rs')

    };

    // ==================================================
    // PLACEHOLDERS
    // ==================================================

    const placeholders = {

        cnpj: '[CNPJ]',
        razaosocial: '[RAZAO SOCIAL]',
        abertura: '[ABERTURA]',
        porte: '[PORTE]',
        naturezajuridica: '[NATUREZA]',
        capitalsocial: '[CAPITAL]',

        logradouro: '[LOGRADOURO]',
        numero: '[NUMERO]',
        bairro: '[BAIRRO]',
        cidade: '[CIDADE]',
        estado: '[ESTADO/UF]',
        cep: '[CEP]',

        endereco: '[ENDERECO]',

        'atv-code': '[ATV-CODIGO]',
        'atv-descricao': '[ATV-TEXTO]',

        atividade: '[ATIVIDADE]'

    };

    // ==================================================
    // CAMPOS MANUAIS
    // ==================================================

    const camposManuais = {

        'i-cnpj': 'cnpj',
        'i-razaosocial': 'razaosocial',
        'i-abertura': 'abertura',
        'i-porte': 'porte',
        'i-naturezajuridica': 'naturezajuridica',
        'i-capitalsocial': 'capitalsocial',

        // ENDEREÇO
        'i-logradouro': 'logradouro',
        'i-numero': 'numero',
        'i-bairro': 'bairro',
        'i-cidade': 'cidade',
        'i-estado': 'estado',
        'i-cep': 'cep',
        'i-endereco': 'endereco',

        // ATIVIDADE
        'i-atvcode': 'atv-code',
        'i-atvdescricao': 'atv-descricao',
        'i-atividade': 'atividade'

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

    function formatarDinheiro(valor) {

        return Number(valor || 0).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    }

    // ==================================================
    // FORMATADORES COMPOSTOS
    // ==================================================

    function montarEndereco(dados) {

        return `${dados.logradouro || ''}, ${dados.numero || ''} - ${dados.bairro || ''}, ${dados.cidade || ''} - ${dados.estado || ''}`
            .replace(/\s+,/g, ',')
            .replace(/,\s+-/g, ' -')
            .replace(/\s{2,}/g, ' ')
            .trim();

    }

    function montarAtividade(dados) {

        return `${dados['atv-code'] || ''} - ${dados['atv-descricao'] || ''}`
            .replace(/^\s*-\s*/, '')
            .trim();

    }

    // ==================================================
    // ATUALIZAR CAMPO
    // ==================================================

    function atualizarCampo(id, valor) {

        const elemento = document.getElementById(id);

        if (!elemento) return;

        elemento.textContent =
            valor || placeholders[id];

    }

    // ==================================================
    // RESETAR DOCUMENTO
    // ==================================================

    function resetarDocumento() {

        Object.entries(placeholders).forEach(([id, valor]) => {

            atualizarCampo(id, valor);

        });

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
    // MODO MANUAL
    // ==================================================

    function ativarModoManual() {

        ui.esconder(el.consultaBox);

        ui.mostrar(el.versaoManualBox, 'flex');

        ui.esconder(el.iframeBox);
        ui.esconder(el.verificacao);
        ui.esconder(el.resultado);

        el.headerManual.classList.add('ativo');

        // remove secondary quando ativado
        el.consultaBox.classList.remove('secondary');
        el.boxManual.classList.remove('secondary');

        resetarDocumento();

    }

    function ativarModoAuto() {

        ui.mostrar(el.consultaBox);

        ui.esconder(el.versaoManualBox);

        el.headerManual.classList.remove('ativo');

        // adiciona secondary quando desativado
        el.consultaBox.classList.add('secondary');
        el.boxManual.classList.add('secondary');
        el.resultado.classList.add('secondary');


        verificarConsulta();

    }

    function atualizarModo() {

        if (el.checkboxManual.selected) {

            ativarModoManual();

        } else {

            ativarModoAuto();

        }

    }

    // ==================================================
    // PREENCHIMENTO AUTOMÁTICO
    // ==================================================

    function preencherDocumento(jsonData) {

        const dados = {

            cnpj: jsonData.cnpj,
            razaosocial: jsonData.nome,
            abertura: jsonData.abertura,
            porte: jsonData.porte,
            naturezajuridica: jsonData.natureza_juridica,
            capitalsocial: `R$ ${formatarDinheiro(
                jsonData.capital_social
            )}`,

            logradouro: jsonData.logradouro,
            numero: jsonData.numero,
            bairro: jsonData.bairro,
            cidade: jsonData.municipio,
            estado: jsonData.uf,
            cep: jsonData.cep,

            'atv-code':
                jsonData.atividade_principal?.[0]?.code || '',

            'atv-descricao':
                jsonData.atividade_principal?.[0]?.text || ''

        };

        dados.endereco = montarEndereco(dados);
        dados.atividade = montarAtividade(dados);

        Object.entries(dados).forEach(([id, valor]) => {

            atualizarCampo(id, valor);

        });

    }

    // ==================================================
    // INPUTS MANUAIS
    // ==================================================

    Object.entries(camposManuais).forEach(([inputId, outputId]) => {

        const input = document.getElementById(inputId);

        if (!input) return;

        input.addEventListener('input', () => {

            // --------------------------------------
            // ENDEREÇO COMPLETO
            // --------------------------------------

            if (outputId === 'endereco') {

                atualizarCampo(
                    'endereco',
                    input.value
                );

                return;

            }

            // --------------------------------------
            // ATIVIDADE COMPLETA
            // --------------------------------------

            if (outputId === 'atividade') {

                atualizarCampo(
                    'atividade',
                    input.value
                );

                return;

            }

            // --------------------------------------
            // CAMPOS NORMAIS
            // --------------------------------------

            atualizarCampo(outputId, input.value);

            // --------------------------------------
            // REGERAR ENDEREÇO
            // --------------------------------------

            const dadosEndereco = {

                logradouro:
                    document.getElementById('logradouro')?.textContent,

                numero:
                    document.getElementById('numero')?.textContent,

                bairro:
                    document.getElementById('bairro')?.textContent,

                cidade:
                    document.getElementById('cidade')?.textContent,

                estado:
                    document.getElementById('estado')?.textContent

            };

            atualizarCampo(
                'endereco',
                montarEndereco(dadosEndereco)
            );

            // --------------------------------------
            // REGERAR ATIVIDADE
            // --------------------------------------

            const dadosAtividade = {

                'atv-code':
                    document.getElementById('atv-code')?.textContent,

                'atv-descricao':
                    document.getElementById('atv-descricao')?.textContent

            };

            atualizarCampo(
                'atividade',
                montarAtividade(dadosAtividade)
            );

        });

    });

    // ==================================================
    // INPUT CONSULTA
    // ==================================================

    el.inputConsulta.addEventListener('input', () => {

        if (el.checkboxManual.selected) return;

        el.inputConsulta.value =
            formatarCNPJ(el.inputConsulta.value);

        verificarConsulta();

    });

    // ==================================================
    // BOTÃO VERIFICAR
    // ==================================================

    el.btnVerificar.addEventListener('click', () => {

        if (el.checkboxManual.selected) return;

        const jsonData =
            parseJSON(el.inputCode.value);

        if (!jsonData) return;

        el.resultadoCnpj.textContent =
            jsonData.cnpj || '';

        el.resultadoRs.textContent =
            jsonData.nome || '';

        ui.mostrar(el.resultado);

    });

    // ==================================================
    // BOTÃO INSERIR
    // ==================================================

    el.btnInserir.addEventListener('click', () => {

        if (el.checkboxManual.selected) return;

        const jsonData =
            parseJSON(el.inputCode.value);

        if (!jsonData) return;

        preencherDocumento(jsonData);

    });

    // ==================================================
    // ALTERAÇÃO DE MODO
    // ==================================================

    el.checkboxManual.addEventListener(
        'change',
        atualizarModo
    );

    // ==================================================
    // ESTADO INICIAL
    // ==================================================

    resetarDocumento();

    el.consultaBox.classList.add('secondary');
    el.boxManual.classList.add('secondary');
    el.resultado.classList.add('secondary');

    atualizarModo();

});