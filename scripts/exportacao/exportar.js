document.addEventListener("DOMContentLoaded", function () {
    const confirmacao = document.getElementById("confirmacao");
    const exportar = document.getElementById("exportar");

    // função para atualizar a classe
    function atualizarBotao() {
        if (confirmacao.checked) {
            exportar.classList.add("enabled");
            exportar.classList.remove("disabled");
        } else {
            exportar.classList.remove("enabled");
            exportar.classList.add("disabled");
        }
    }

    // executa sempre que o checkbox mudar
    confirmacao.addEventListener("change", atualizarBotao);

    // garante estado inicial
    atualizarBotao();

    document.getElementById('exportar').innerHTML = `
        <span class="material-symbols-rounded icon">download</span>Baixar
    `;
});