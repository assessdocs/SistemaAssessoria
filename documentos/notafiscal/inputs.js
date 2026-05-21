document.addEventListener('DOMContentLoaded', () => {
    const configurations = [
        { inputId: 'i-data', targetId: 'data1', originalText: '[DATA 1]' },
        { inputId: 'i-data', targetId: 'data2', originalText: '[DATA 2]' },
        { inputId: 'i-data', targetId: 'data3', originalText: '[DATA 3]' },
        { inputId: 'i-hora', targetId: 'hora1', originalText: '[HORA 1]' },
        { inputId: 'i-hora', targetId: 'hora2', originalText: '[HORA 2]' },
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
