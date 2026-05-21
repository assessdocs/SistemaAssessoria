document.addEventListener('DOMContentLoaded', () => {

    const tituloOriginal = document.title;

    const selectExportar = document.getElementById('select-h1');
    const confirmacao = document.getElementById('confirmacao');

    const assessoriaNome =
        document.querySelector('.assessoria-nome')?.textContent || 'Garra Assessoria';

    const cnpj = document.getElementById('cnpj');

    // Títulos do documento (visual)
    const TITULOS = {
        SWOT: 'ANÁLISE<br>DE SWOT',
        EVE: 'ESTUDO DE<br>VIABILIDADE<br>ECONÔMICA',
        ETVE: 'ESTUDO<br>TÉCNICO DE<br>VIABILIDADE<br>ECONÔMICA'
    };

    // Títulos da aba do navegador
    const TITULOS_BROWSER = {
        SWOT: 'Análise de SWOT',
        EVE: 'Estudo de Viabilidade Econômica',
        ETVE: 'Estudo Técnico de Viabilidade Econômica'
    };

    const tituloDocumento = document.getElementById('titulo-documento');

    function obterCNPJ() {
        return cnpj ? cnpj.textContent : '';
    }

    // Atualiza o título VISUAL do documento
    function atualizarTituloDocumento(tipo) {
        tituloDocumento.innerHTML =
            TITULOS[tipo] || TITULOS.ETVE;
    }

    // Atualiza o TITLE do navegador
    function atualizarTituloBrowser() {

        // Se checkbox não estiver marcado → volta título original
        if (!confirmacao || !confirmacao.checked) {
            document.title = tituloOriginal;
            return;
        }

        const tipoSelecionado = selectExportar.value;

        const tituloSelecionado =
            TITULOS_BROWSER[tipoSelecionado] || TITULOS_BROWSER.ETVE;

        document.title =
            `${assessoriaNome} - ${tituloSelecionado} [${obterCNPJ()}]`;
    }

    // Mudança do select
    if (selectExportar) {
        selectExportar.addEventListener('change', (e) => {

            atualizarTituloDocumento(e.target.value);

            // Atualiza também o title do navegador
            atualizarTituloBrowser();
        });
    }

    // Mudança do checkbox
    if (confirmacao) {
        confirmacao.addEventListener('change', atualizarTituloBrowser);
    }

    // Inicialização
    atualizarTituloDocumento(selectExportar.value);
    atualizarTituloBrowser();

});