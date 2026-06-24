document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="tipo-score"]');

    const caixa1 = document.getElementById('caixa1')
    const caixa1Icone = document.getElementById('caixa1-icone');
    const caixa1Texto = document.getElementById('caixa1-texto');
    const caixa1Botao = document.getElementById('caixa1-botao');
    const caixa2Texto = document.getElementById('caixa2-texto');

    function atualizarTipoScore() {
        const selecionado = document.querySelector('input[name="tipo-score"]:checked').value;

        if (selecionado === 'consulta') {
            caixa1.style.backgroundColor = '#426DA9';
            caixa1Icone.textContent = 'keyboard_double_arrow_up';
            caixa1Texto.textContent = 'Solicitar aumento de Score';
            caixa1Botao.textContent = 'Solicitar';
            caixa1Botao.style.fontWeight = '500';
            caixa1Botao.style.color = '#426DA9';
            caixa2Texto.textContent = 'Para esta negociação considere a solicitação de aumento de Score.';

        } else {
            caixa1.style.backgroundColor = '#0F9D58';
            caixa1Icone.textContent = 'priority';
            caixa1Texto.textContent = 'Status da solicitação de aumento';
            caixa1Botao.textContent = 'Aprovado';
            caixa1Botao.style.fontWeight = '700';
            caixa1Botao.style.color = '#0F9D58';
            caixa2Texto.textContent = 'Aumento de Score habilitado.';
        }
    }

    radios.forEach(radio => {
        radio.addEventListener('change', atualizarTipoScore);
    });

    atualizarTipoScore();
});