document.addEventListener('DOMContentLoaded', function () {

    const inputCPF = document.getElementById('i-cpf');

    if (!inputCPF) return;

    inputCPF.addEventListener('input', function () {

        // Mantém apenas números e limita a 11 dígitos
        let valor = inputCPF.value.replace(/\D/g, '').substring(0, 11);

        let formatado = valor.substring(0, 3);

        if (valor.length > 3) {
            formatado += '.' + valor.substring(3, 6);
        }

        if (valor.length > 6) {
            formatado += '.' + valor.substring(6, 9);
        }

        if (valor.length > 9) {
            formatado += '-' + valor.substring(9, 11);
        }

        inputCPF.maxLength = 14; // 000.000.000-00
        inputCPF.value = formatado;
    });

});