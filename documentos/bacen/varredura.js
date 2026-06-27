document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checkbox-cnpj");
    const cnpjInput = document.getElementById("i-cnpj-varredura");
    const campoVarredura = document.getElementById("campo-cnpj");

    // função para atualizar a classe
    function atualizarBotao() {
        if (checkbox.checked) {
            cnpjInput.classList.remove("disabled");
            cnpjInput.disabled = false;
            campoVarredura.style.display = '';
        } else {
            cnpjInput.classList.add("disabled");
            cnpjInput.disabled = true;
            cnpjInput.value = ""; // opcional: limpa o campo
            campoVarredura.style.display = 'none';
        }
    }

    // executa sempre que o checkbox mudar
    checkbox.addEventListener("change", atualizarBotao);

    // garante estado inicial
    atualizarBotao();
});