document.addEventListener("DOMContentLoaded", () => {
    const MAX_SERVICOS = 7;

    const botaoAdicionar = document.getElementById("adicionar");
    const iconeBotao = document.getElementById("icone-adicionar");
    const textoBotao = document.getElementById("texto-adicionar");

    let servicosVisiveis = 1;

    // =========================
    // FORMATAÇÃO
    // =========================

    function formatarMoeda(valor) {
        return valor.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    function obterNumero(input) {
        const numeros = input.value.replace(/\D/g, "");

        if (!numeros) return 0;

        return Number(numeros) / 100;
    }

    function formatarInputMoeda(input) {
        const valor = obterNumero(input);
        input.value = formatarMoeda(valor);
    }

    // =========================
    // SERVIÇOS
    // =========================

    function atualizarServico(numero) {
        const input = document.getElementById(`i-servico${numero}`);
        const span = document.getElementById(`servico${numero}`);

        if (!input || !span) return;

        span.textContent = input.value.trim() || `[SERVIÇO ${numero}]`;
    }

    function atualizarValor(numero) {
        const input = document.getElementById(`i-valor${numero}`);
        const linha = document.getElementById(`linha${numero}`);

        if (!input || !linha) return;

        const valorFormatado = input.value || "0,00";

        linha.querySelectorAll(".valor").forEach(elemento => {
            elemento.textContent = valorFormatado;
        });

        atualizarTotal();
    }

    // =========================
    // TOTAL
    // =========================

    function atualizarTotal() {
        let total = 0;

        for (let i = 1; i <= servicosVisiveis; i++) {
            const container = document.getElementById(`c-servico${i}`);

            if (!container) continue;

            const visivel =
                i === 1 ||
                getComputedStyle(container).display !== "none";

            if (!visivel) continue;

            const inputValor = document.getElementById(`i-valor${i}`);

            if (!inputValor) continue;

            total += obterNumero(inputValor);
        }

        const totalFormatado = formatarMoeda(total);

        ["total1", "total2", "total3"].forEach(id => {
            const elemento = document.getElementById(id);

            if (elemento) {
                elemento.textContent = totalFormatado;
            }
        });
    }

    // =========================
    // EXIBIÇÃO INICIAL
    // =========================

    for (let i = 2; i <= MAX_SERVICOS; i++) {
        const container = document.getElementById(`c-servico${i}`);
        const linha = document.getElementById(`linha${i}`);

        if (container) {
            container.style.display = "none";
        }

        if (linha) {
            linha.style.display = "none";
        }
    }

    // =========================
    // BOTÃO ADICIONAR / REFAZER
    // =========================

    botaoAdicionar.addEventListener("click", () => {
        // Modo Refazer
        if (servicosVisiveis === MAX_SERVICOS) {
            for (let i = 2; i <= MAX_SERVICOS; i++) {
                const container = document.getElementById(`c-servico${i}`);
                const linha = document.getElementById(`linha${i}`);

                const inputServico = document.getElementById(`i-servico${i}`);
                const inputValor = document.getElementById(`i-valor${i}`);

                if (container) {
                    container.style.display = "none";
                }

                if (linha) {
                    linha.style.display = "none";
                }

                if (inputServico) {
                    inputServico.value = "";
                }

                if (inputValor) {
                    inputValor.value = "";
                }

                const spanServico = document.getElementById(`servico${i}`);

                if (spanServico) {
                    spanServico.textContent = `[SERVIÇO ${i}]`;
                }

                if (linha) {
                    linha.querySelectorAll(".valor").forEach(elemento => {
                        elemento.textContent = "0,00";
                    });
                }
            }

            servicosVisiveis = 1;

            iconeBotao.textContent = "add_circle";
            textoBotao.textContent = "Adicionar";

            atualizarTotal();
            return;
        }

        // Adiciona próximo serviço
        const proximo = servicosVisiveis + 1;

        const container = document.getElementById(`c-servico${proximo}`);
        const linha = document.getElementById(`linha${proximo}`);

        if (container) {
            container.style.display = "flex";
        }

        if (linha) {
            linha.style.display = "";
        }

        servicosVisiveis++;

        if (servicosVisiveis === MAX_SERVICOS) {
            iconeBotao.textContent = "restart_alt";
            textoBotao.textContent = "Refazer";
        }

        atualizarTotal();
    });

    // =========================
    // EVENTOS DOS INPUTS
    // =========================

    for (let i = 1; i <= MAX_SERVICOS; i++) {
        const inputServico = document.getElementById(`i-servico${i}`);
        const inputValor = document.getElementById(`i-valor${i}`);

        if (inputServico) {
            inputServico.addEventListener("input", () => {
                atualizarServico(i);
            });

            atualizarServico(i);
        }

        if (inputValor) {
            inputValor.addEventListener("input", () => {
                formatarInputMoeda(inputValor);
                atualizarValor(i);
            });

            atualizarValor(i);
        }
    }

    atualizarTotal();
});