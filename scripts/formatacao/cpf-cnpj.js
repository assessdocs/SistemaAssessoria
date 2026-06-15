document.addEventListener('DOMContentLoaded', function () {

    const inputDocumento = document.getElementById('i-cnpj');

    if (!inputDocumento) return;

    inputDocumento.addEventListener('input', function () {

        // Mantém apenas números e limita a 14 dígitos
        let valor = inputDocumento.value.replace(/\D/g, '').substring(0, 14);

        let formatado = '';

        // CPF (até 11 dígitos)
        if (valor.length <= 11) {

            formatado = valor.substring(0, 3);

            if (valor.length > 3) {
                formatado += '.' + valor.substring(3, 6);
            }

            if (valor.length > 6) {
                formatado += '.' + valor.substring(6, 9);
            }

            if (valor.length > 9) {
                formatado += '-' + valor.substring(9, 11);
            }

        }
        // CNPJ (12 a 14 dígitos)
        else {

            formatado = valor.substring(0, 2);

            if (valor.length > 2) {
                formatado += '.' + valor.substring(2, 5);
            }

            if (valor.length > 5) {
                formatado += '.' + valor.substring(5, 8);
            }

            if (valor.length > 8) {
                formatado += '/' + valor.substring(8, 12);
            }

            if (valor.length > 12) {
                formatado += '-' + valor.substring(12, 14);
            }
        }

        // Tamanho máximo da versão formatada do CNPJ
        inputDocumento.maxLength = 18;
        inputDocumento.value = formatado;
    });

});