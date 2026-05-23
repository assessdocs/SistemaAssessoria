document.addEventListener('DOMContentLoaded', function () {

    const telefoneInput = document.getElementById('i-telefone');

    if (!telefoneInput) return;

    telefoneInput.addEventListener('input', function (event) {
        let input = event.target.value.replace(/\D/g, ''); // só números

        // Limita a 11 dígitos
        if (input.length > 11) {
            input = input.slice(0, 11);
        }

        let formatado = '';

        if (input.length > 0) {
            formatado += '(' + input.substring(0, 2);
        }

        if (input.length >= 3) {
            formatado += ') ';

            if (input.length <= 10) {
                // Telefone fixo (10 dígitos)
                formatado += input.substring(2, 6);

                if (input.length >= 7) {
                    formatado += '-' + input.substring(6, 10);
                }
            } else {
                // Celular (11 dígitos)
                formatado += input.substring(2, 3) + ' ';
                formatado += input.substring(3, 7);

                if (input.length >= 8) {
                    formatado += '-' + input.substring(7, 11);
                }
            }
        }

        event.target.value = formatado;
    });

});