document.addEventListener('DOMContentLoaded', function () {

    const selectMes = document.getElementById('select-mes');

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    // Seleciona apenas IDs mes1 até mes5
    const elementosMes = [];

    for (let i = 1; i <= 5; i++) {

        const elemento = document.getElementById(`mes${i}`);

        if (elemento) {
            elementosMes.push(elemento);
        }
    }

    // Salva o conteúdo original
    const textosOriginais = {};

    elementosMes.forEach(elemento => {
        textosOriginais[elemento.id] = elemento.textContent;
    });

    function atualizarMeses() {

        const mesSelecionado = selectMes.value;

        // Volta ao padrão
        if (mesSelecionado === '[MÊS 01]') {

            elementosMes.forEach(elemento => {
                elemento.textContent = textosOriginais[elemento.id];
            });

            return;
        }

        // Índice do mês escolhido
        const indiceInicial = meses.indexOf(mesSelecionado);

        elementosMes.forEach((elemento, index) => {

            // mes1 = mês escolhido
            // mes2 = próximo
            // mes3 = próximo...
            const indiceMes = (indiceInicial + index) % meses.length;

            elemento.textContent = meses[indiceMes];
        });
    }

    selectMes.addEventListener('change', atualizarMeses);

});