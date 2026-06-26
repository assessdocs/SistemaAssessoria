document.addEventListener('DOMContentLoaded', () => {
    const configurations = [
        { inputId: 'i-nomecompleto', targetId: 'nomecompleto', originalText: '[NOME]' },
        { inputId: 'i-cpf', targetId: 'cpf', originalText: '[CPF]' },
        { inputId: 'i-cnpj-varredura', targetId: 'cnpj-varredura', originalText: '[CNPJ]' },
        { inputId: 'i-instituicao', targetId: 'instituicao', originalText: '[INSTITUIÇÃO]' },
        { inputId: 'i-agencia', targetId: 'agencia', originalText: '[AGÊNCIA]' },
        { inputId: 'i-conta', targetId: 'conta', originalText: '[CONTA]' },
        { inputId: 'i-valor', targetId: 'valor', originalText: '[VALOR]' },
        { inputId: 'i-pendencia', targetId: 'pendencia', originalText: '[PENDÊNCIA]'}
    ];

    configurations.forEach(config => {
        const inputElement = document.getElementById(config.inputId);
        const targetElement = document.getElementById(config.targetId);

        // Initialize the target element with the original text
        targetElement.textContent = config.originalText;

        inputElement.addEventListener('input', () => {
            if (inputElement.value.trim() === '') {
                targetElement.textContent = config.originalText;
            } else {
                targetElement.textContent = inputElement.value;
            }
        });
    });
});