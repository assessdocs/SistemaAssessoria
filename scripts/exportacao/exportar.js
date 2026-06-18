document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('menu-inferior').innerHTML = `
        <div class="confirmacao">
            <label for="confirmacao" class="label-confirmacao">
                Todos os campos foram preenchidos?
            </label>
            <md-checkbox touch-target="wrapper" id="confirmacao"></md-checkbox>
        </div>
                        
        <button class="medium filled" id="exportar">
            <span class="material-symbols-rounded p24">download</span>
            <span>Baixar</span>
        </button>
    `;

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

    if (document.getElementById("dmpl")) {
        document.getElementById("menu-inferior").classList.add("mono");
    }
});