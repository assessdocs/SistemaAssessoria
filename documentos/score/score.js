document.addEventListener('DOMContentLoaded', function () {
    const inputSCORE = document.getElementById('i-pontuacao');
    const scoreValue = document.getElementById('pontuacao');
    const grafico = document.getElementById('score-medidor');

    inputSCORE.addEventListener('input', function () {

        // caso vazio → inativo
        if (inputSCORE.value.trim() === '') {
            scoreValue.textContent = '[?]';
            grafico.src = '../../sistema/score/inativo.svg';
            return;
        }

        let inputValue = parseInt(inputSCORE.value);

        if (isNaN(inputValue) || inputValue < 0) {
            inputValue = 0;
        } else if (inputValue > 1000) {
            inputValue = 1000;
        }

        inputSCORE.value = inputValue;
        scoreValue.textContent = inputValue;

        if (inputValue <= 100) {
            grafico.src = '../../sistema/score/score1.svg';
        } else if (inputValue <= 250) {
            grafico.src = '../../sistema/score/score2.svg';
        } else if (inputValue <= 600) {
            grafico.src = '../../sistema/score/score3.svg';
        } else {
            grafico.src = '../../sistema/score/score4.svg';
        }
    });
});