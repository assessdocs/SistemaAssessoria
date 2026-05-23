document.addEventListener("DOMContentLoaded", function () {

    // Função para gerar número aleatório
    function gerarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Função para preencher um campo
    function preencherCampo(id, tamanho, max) {
        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.textContent = gerarNumeroAleatorio(0, max)
                .toString()
                .padStart(tamanho, "0");
        }
    }

    // Gera os campos de 1 até 7
    for (let i = 1; i <= 7; i++) {

        preencherCampo(`codigo-prod${i}`, 6, 999999);

        preencherCampo(`ncm${i}`, 8, 99999999);

        preencherCampo(`cst${i}`, 3, 999);

        preencherCampo(`cfop${i}`, 4, 9999);
    }

    console.log("Dados de produtos gerados.");
});