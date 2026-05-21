document.addEventListener("DOMContentLoaded", function() {
    const iTotal = document.getElementById('i-valortotal');
    const total = document.getElementById('total');
    const tributos = document.getElementById('tributos');

    function formatCurrency(value) {
        // Remove todos os caracteres que não são dígitos, ponto ou vírgula
        value = value.replace(/[^\d.,]/g, '');
                
        // Substituir vírgula por ponto para converter para número flutuante
        value = value.replace(/,/g, '.');
                
        // Converte o valor para número flutuante
        let floatValue = parseFloat(value);
                
        if (isNaN(floatValue)) {
            return '';
        }

        // Formatar como dinheiro (sem símbolo)
        return floatValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    iTotal.addEventListener('input', function() {
        let formattedValue = formatCurrency(iTotal.value);
        total.textContent = formattedValue;

        // Calcula o valor dos tributos subtraindo 350 do valor numérico
        let numericValue = parseFloat(formattedValue.replace(/\./g, '').replace(',', '.'));
        if (!isNaN(numericValue)) {
            let tributosValue = numericValue - 350;
            tributos.textContent = tributosValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else {
            tributos.textContent = '';
        }
    });
});