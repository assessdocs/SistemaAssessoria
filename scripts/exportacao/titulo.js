document.addEventListener('DOMContentLoaded', () => {

    const tituloOriginal = document.title;

    const assessoriaNome =
        document.querySelector('.assessoria-nome')?.textContent || 'Creta Assessoria';

    const cnpj = document.getElementById('cnpj');
    const confirmacao = document.getElementById('confirmacao');

    const orcamento = document.getElementById('orcamento');
    const bv = document.getElementById('bv');
    const dmpl = document.getElementById('dmpl');
    
    const notafiscal = document.getElementById('notafiscal');
    const conciliacao = document.getElementById('conciliacao');
    const govbr = document.getElementById('govbr');
    const score = document.getElementById('score');
    const varredura = document.getElementById('varredura');

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
            const total = document.getElementById('total');
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

        else if (conciliacao) {
            document.title =
                `${assessoriaNome} - Conciliação Fiscal [${obterCNPJ()}]`;
        }

        else if (govbr) {
            document.title =
                `${assessoriaNome} - GovBR [${obterCNPJ()}]`;
        }

        else if (score) {
            document.title =
                `${assessoriaNome} - Score [${obterCNPJ()}]`;
        }

        else if (varredura) {
            document.title =
                `${assessoriaNome} - Varredura [${obterCNPJ()}]`;
        }
    }

    if (confirmacao) {
        confirmacao.addEventListener('change', atualizarTitulo);
    }

    atualizarTitulo();
});