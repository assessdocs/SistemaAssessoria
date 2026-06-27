document.addEventListener('DOMContentLoaded', () => {

    const tituloOriginal = document.title;

    const confirmacao = document.getElementById('confirmacao');

    const assessoriaNome =
        document.querySelector('.assessoria-nome')?.textContent || 'Garra Assessoria';

    const cnpj = document.getElementById('cnpj');
    const tituloDocumento = document.getElementById('titulo-documento');

    const TITULOS = {
        swot: 'ANÁLISE<br>DE SWOT',
        eve: 'ESTUDO DE<br>VIABILIDADE<br>ECONÔMICA',
        etve: 'ESTUDO<br>TÉCNICO DE<br>VIABILIDADE<br>ECONÔMICA'
    };

    const TITULOS_BROWSER = {
        swot: 'Análise de SWOT',
        eve: 'Estudo de Viabilidade Econômica',
        etve: 'Estudo Técnico de Viabilidade Econômica'
    };

    function obterCNPJ() {
        return (cnpj?.textContent || '').trim();
    }

    function getTipoSelecionado() {
        return document.querySelector('input[name="tipo-doc"]:checked')?.value || 'etve';
    }

    function atualizarTituloDocumento() {
        const tipo = getTipoSelecionado();
        tituloDocumento.innerHTML = TITULOS[tipo] || TITULOS.etve;
    }

    function atualizarTituloBrowser() {

        if (!confirmacao?.checked) {
            document.title = tituloOriginal;
            return;
        }

        const tipo = getTipoSelecionado();
        const titulo = TITULOS_BROWSER[tipo] || TITULOS_BROWSER.etve;

        document.title =
            `${assessoriaNome} - ${titulo} [${obterCNPJ()}]`;
    }

    function atualizarTudo() {
        atualizarTituloDocumento();
        atualizarTituloBrowser();
    }

    // eventos
    document.querySelectorAll('input[name="tipo-doc"]').forEach(radio => {
        radio.addEventListener('change', atualizarTudo);
    });

    confirmacao?.addEventListener('change', atualizarTituloBrowser);

    // init
    atualizarTudo();
});