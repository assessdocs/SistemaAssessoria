document.addEventListener('DOMContentLoaded', () => {

    const tituloOriginal = document.title;

    const assessoriaNome =
        document.querySelector('.assessoria-nome')?.textContent || 'Creta Assessoria';

    const cnpj = document.getElementById('cnpj');
    const total = document.getElementById('total');
    const confirmacao = document.getElementById('confirmacao');

    const orcamento = document.getElementById('orcamento');
    const bv = document.getElementById('bv');
    const dmpl = document.getElementById('dmpl');
    const contrato = document.getElementById('contrato');

    function obterCNPJ() {
        return cnpj ? cnpj.textContent : '';
    }

    function obterTotal() {
        return total ? total.textContent : '';
    }

    function atualizarTitulo() {

        if (!confirmacao || !confirmacao.checked) {
            document.title = tituloOriginal;
            return;
        }

        if (orcamento) {
            document.title =
                `${assessoriaNome} [Orçamento de R$ ${obterTotal()}] - ${obterCNPJ()}`;
        }

        else if (bv) {
            document.title =
                `${assessoriaNome} - Business Valuation [${obterCNPJ()}]`;
        }

        else if (dmpl) {
            document.title =
                `${assessoriaNome} - Demonstração das Mutações do Patrimônio Líquido [${obterCNPJ()}]`;
        }

        else if (contrato) {
            document.title =
                `${assessoriaNome} - Contrato de Serviço [${obterCNPJ()}]`;
        }

        else if (notafiscal) {
            document.title =
                `${assessoriaNome} - Nota Fiscal Eletrônica (NFe) [${obterCNPJ()}]`;
        }
    }

    if (confirmacao) {
        confirmacao.addEventListener('change', atualizarTitulo);
    }

    atualizarTitulo();
});