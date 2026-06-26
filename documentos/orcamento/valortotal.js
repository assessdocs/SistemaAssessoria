document.addEventListener("DOMContentLoaded", function () {
    const iTotal = document.getElementById('i-valortotal');
    const total = document.getElementById('total');
    const tributos = document.getElementById('tributos');

    function parseValue(value) {
        // remove tudo exceto dígitos
        value = value.replace(/\D/g, '');

        // garante centavos (últimos 2 dígitos)
        return (parseInt(value || '0', 10) / 100);
    }

    function formatCurrency(value) {
        if (isNaN(value)) return '';
        return value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    iTotal.addEventListener('input', function () {
        const numericValue = parseValue(iTotal.value);

        total.textContent = formatCurrency(numericValue);

        const tributosValue = numericValue - 350;

        tributos.textContent =
            isNaN(tributosValue)
                ? ''
                : formatCurrency(tributosValue);
    });
});