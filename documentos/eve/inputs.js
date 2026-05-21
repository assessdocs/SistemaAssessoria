document.addEventListener('DOMContentLoaded', () => {
    const configurations = [
        { inputId: 'i-email', targetId: 'email', originalText: '[E-MAIL]' },
        { inputId: 'i-telefone', targetId: 'telefone', originalText: '[TELEFONE]' },
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
