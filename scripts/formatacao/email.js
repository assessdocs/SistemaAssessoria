document.addEventListener('DOMContentLoaded', function() {
    const inputEmail = document.getElementById('i-email');

    inputEmail.addEventListener('input', function() {
        let valor = inputEmail.value;
        
        // Conta quantos "@" existem no valor
        let count = (valor.match(/@/g) || []).length;

        // Se houver mais de um "@", remove os excessos
        if (count > 1) {
            // Divide o valor em partes antes e depois do último "@"
            let partes = valor.split('@');
            // Reconstitui o valor com apenas uma parte antes e uma parte depois do último "@"
            valor = partes.shift() + '@' + partes.join('');
        }

        // Atualiza o valor do input com a versão corrigida
        inputEmail.value = valor;
    });
});