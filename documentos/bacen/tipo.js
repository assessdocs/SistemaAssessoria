document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="tipo-bacen"]');

    const bg = document.getElementById('bacen-background');
    const h1 = document.getElementById('bacen-h1');
    const pendencia = document.getElementById('bacen-pendencia');
    const varredura = document.getElementById('bacen-varredura');

    const areaBoxes = document.getElementById('area-boxes');
    const menuInferior = document.getElementById('menu-inferior');

    const colunaConsulta = document.getElementById('coluna-consulta');

    const boxVarredura = document.getElementById('box-varredura');
    const boxPendencia = document.getElementById('box-pendencias');

    function atualizarTipoBacen() {
        const selecionado = document.querySelector('input[name="tipo-bacen"]:checked').value;

        if (selecionado === 'varredura') {
            bg.classList.remove('pendencia');
            h1.textContent = 'Serviços';
            pendencia.style.display = 'none';
            varredura.style.display = 'flex';

            colunaConsulta.style.display = 'none';
            boxVarredura.style.display = '';
            boxPendencia.style.display = 'none';

            areaBoxes.classList.add('mono');
            menuInferior.classList.add('mono');

        } else {
            bg.classList.add('pendencia');
            h1.textContent = 'Verificação de Pendências';
            pendencia.style.display = 'flex';
            varredura.style.display = 'none';

            colunaConsulta.style.display = '';
            boxVarredura.style.display = 'none';
            boxPendencia.style.display = '';

            areaBoxes.classList.remove('mono');
            menuInferior.classList.remove('mono');
        }
    }

    radios.forEach(radio => {
        radio.addEventListener('change', atualizarTipoBacen);
    });

    atualizarTipoBacen();
});