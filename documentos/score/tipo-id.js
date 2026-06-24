document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="tipo-id"]');

    const identificacao = document.getElementById('identificacao');
    const scoreTitulo = document.getElementById('score-titulo');

    function atualizarTipoId() {
        const selecionado = document.querySelector('input[name="tipo-id"]:checked').value;

        if (selecionado === 'cpf') {
            identificacao.textContent = 'CPF:';
            scoreTitulo.textContent = 'Score do CPF consultado';
        } else {
            identificacao.textContent = 'CNPJ:';
            scoreTitulo.textContent = 'Score do CNPJ consultado';
        }
    }

    radios.forEach(radio => {
        radio.addEventListener('change', atualizarTipoId);
    });

    atualizarTipoId();
});