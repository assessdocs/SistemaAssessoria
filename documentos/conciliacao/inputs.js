document.addEventListener('DOMContentLoaded', () => {
    const configurations = [
        { inputId: 'i-agencia', targetId: 'agencia', originalText: '[AGÊNCIA]' },
        { inputId: 'i-conta', targetId: 'conta', originalText: '[CONTA]' },
        { inputId: 'i-instituicao', targetId: 'instituicao', originalText: '[INSTITUIÇÃO]' },
        { inputId: 'i-chave', targetId: 'chave', originalText: '[CHAVE]' },
        { inputId: 'i-data', targetId: 'data', originalText: '[DATA]' },
    ];

    function formatarData(valor) {
        if (!valor) return '';

        const [ano, mes, dia] = valor.split('-');

        if (!ano || !mes || !dia) return valor;

        return `${dia}/${mes}/${ano}`;
    }

    configurations.forEach(config => {
        const inputElement = document.getElementById(config.inputId);
        const targetElement = document.getElementById(config.targetId);

        if (!inputElement || !targetElement) return;

        targetElement.textContent = config.originalText;

        inputElement.addEventListener('input', () => {
            const valorInput = inputElement.value.trim();

            if (!valorInput) {
                targetElement.textContent = config.originalText;
                return;
            }

            targetElement.textContent =
                config.inputId === 'i-data'
                    ? formatarData(valorInput)
                    : valorInput;
        });
    });
});