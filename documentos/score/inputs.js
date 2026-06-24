document.addEventListener('DOMContentLoaded', () => {
    const configurations = [
        { inputId: 'i-pontuacao', targetId: 'pontuacao', originalText: '[?]' },
        { inputId: 'i-limite', targetId: 'limite', originalText: '[LIMITE]' },
    ];

    configurations.forEach(config => {
        const inputElement = document.getElementById(config.inputId);
        const targetElement = document.getElementById(config.targetId);

        targetElement.textContent = config.originalText;

        inputElement.addEventListener('input', () => {
            // Permite apenas números, pontos e vírgulas
            inputElement.value = inputElement.value.replace(/[^0-9.,]/g, '');

            if (inputElement.value.trim() === '') {
                targetElement.textContent = config.originalText;
            } else {
                targetElement.textContent = inputElement.value;
            }
        });
    });
});