document.addEventListener('DOMContentLoaded', () => {
    const configurations = [
        { inputId: 'i-data', targetId: 'data1', originalText: '[DATA 1]' },
        { inputId: 'i-data', targetId: 'data2', originalText: '[DATA 2]' },
        { inputId: 'i-data', targetId: 'data3', originalText: '[DATA 3]' },
        { inputId: 'i-hora', targetId: 'hora1', originalText: '[HORA 1]' },
        { inputId: 'i-hora', targetId: 'hora2', originalText: '[HORA 2]' },
        { inputId: 'i-telefone', targetId: 'telefone', originalText: '[TELEFONE]' },
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

        targetElement.textContent = config.originalText;

        inputElement.addEventListener('input', () => {
            if (inputElement.value.trim() === '') {
                targetElement.textContent = config.originalText;
                return;
            }

            let valor = inputElement.value;

            if (config.inputId === 'i-data') {
                valor = formatarData(valor);
            }

            targetElement.textContent = valor;
        });
    });
});