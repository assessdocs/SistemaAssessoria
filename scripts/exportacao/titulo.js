document.addEventListener('DOMContentLoaded', () => {

    const tituloOriginal = document.title;

    let assessoriaNome = '';

    const cnpj = document.getElementById('cnpj');
    const cpf = document.getElementById('cpf');
    const confirmacao = document.getElementById('confirmacao');

    const orcamento = document.getElementById('orcamento');
    const bv = document.getElementById('bv');
    const dmpl = document.getElementById('dmpl');
    const notafiscal = document.getElementById('notafiscal');
    const conciliacao = document.getElementById('conciliacao');
    const govbr = document.getElementById('govbr');
    const score = document.getElementById('score');
    const bacen = document.getElementById('bacen');
    const contrato = document.getElementById('contrato');

    function obterCNPJ() {
        return (cnpj?.textContent || '').trim();
    }

    function obterCPF() {
        return (cpf?.textContent || '').trim();
    }

    function getRadioValue(name) {
        return document.querySelector(`input[name="${name}"]:checked`)?.value;
    }

    function obterIdentificacao() {

        if (score || conciliacao) {
            const selecionado = getRadioValue('tipo-id');
            return selecionado === 'cpf' ? obterCPF() : obterCNPJ();
        }

        if (bacen) {
            const selecionado = getRadioValue('tipo-bacen');
            return selecionado === 'varredura' ? obterCPF() : obterCNPJ();
        }

        return obterCNPJ();
    }

    function obterTotal() {
        const total = document.getElementById('total');
        return total ? total.textContent : '';
    }

    function atualizarTitulo() {

        if (!confirmacao?.checked) {
            document.title = tituloOriginal;
            return;
        }

        const id = obterIdentificacao();

        const base = {
            orcamento: `${assessoriaNome} [Orçamento de R$ ${obterTotal()}] - ${id}`,
            bv: `${assessoriaNome} - Business Valuation [${id}]`,
            dmpl: `${assessoriaNome} - Demonstração das Mutações do Patrimônio Líquido [${id}]`,
            contrato: `${assessoriaNome} - Contrato de Serviço [${id}]`,
            notafiscal: `${assessoriaNome} - Nota Fiscal Eletrônica (NFe) [${id}]`,
            conciliacao: `${assessoriaNome} - Conciliação Fiscal [${id}]`,
            govbr: `${assessoriaNome} - GovBR [${id}]`,
            score: `${assessoriaNome} - Score [${id}]`,
            bacen: `${assessoriaNome} - BACEN [${id}]`
        };

        if (orcamento) document.title = base.orcamento;
        else if (bv) document.title = base.bv;
        else if (dmpl) document.title = base.dmpl;
        else if (contrato) document.title = base.contrato;
        else if (notafiscal) document.title = base.notafiscal;
        else if (conciliacao) document.title = base.conciliacao;
        else if (govbr) document.title = base.govbr;
        else if (score) document.title = base.score;
        else if (bacen) document.title = base.bacen;
    }

    // LISTENERS

    document.addEventListener('assessoria-change', (e) => {
        assessoriaNome = e.detail.nome || '';
        atualizarTitulo();
    });

    confirmacao?.addEventListener('change', atualizarTitulo);

    if (score || conciliacao) {
        document.querySelectorAll('input[name="tipo-id"]').forEach(radio => {
            radio.addEventListener('change', atualizarTitulo);
        });
    }

    if (bacen) {
        document.querySelectorAll('input[name="tipo-bacen"]').forEach(radio => {
            radio.addEventListener('change', atualizarTitulo);
        });
    }

    assessoriaNome =
        document.querySelector('.assessoria-nome')?.textContent.trim() || '';

    atualizarTitulo();
});