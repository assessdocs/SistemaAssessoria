document.addEventListener('DOMContentLoaded', () => {

    const STORAGE_KEY = 'tipo-documento';

    const tituloOriginal = document.title;

    const confirmacao = document.getElementById('confirmacao');

    function obterAssessoria() {
        return (
            document.querySelector('.assessoria-nome')?.textContent.trim() || ''
        );
    }

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

    function salvarTipoSelecionado() {
        localStorage.setItem(STORAGE_KEY, getTipoSelecionado());
    }

    function restaurarTipoSelecionado() {
        const tipo = localStorage.getItem(STORAGE_KEY);

        if (!tipo) return;

        const radio = document.querySelector(
            `input[name="tipo-doc"][value="${tipo}"]`
        );

        if (radio) {
            radio.checked = true;
        }
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
            `${obterAssessoria()} - ${titulo} [${obterCNPJ()}]`;
    }

    function atualizarTudo() {
        atualizarTituloDocumento();
        atualizarTituloBrowser();
    }

    // Restaura o último tipo utilizado
    restaurarTipoSelecionado();

    // Eventos
    document.querySelectorAll('input[name="tipo-doc"]').forEach(radio => {
        radio.addEventListener('change', () => {
            salvarTipoSelecionado();
            atualizarTudo();
        });
    });

    confirmacao?.addEventListener('change', atualizarTituloBrowser);

    document.addEventListener('assessoria-change', atualizarTudo);

    // Inicialização
    atualizarTudo();
});