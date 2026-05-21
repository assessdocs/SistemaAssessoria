document.addEventListener('DOMContentLoaded', function () {

    // =========================
    // CONFIGURAÇÃO
    // =========================

    const receitaInputs = [
        'i-receita1',
        'i-receita2',
        'i-receita3',
        'i-receita4',
        'i-receita5'
    ];

    const despesaInputs = [
        'i-despesa1',
        'i-despesa2',
        'i-despesa3',
        'i-despesa4',
        'i-despesa5'
    ];

    const todosInputs = [
        ...receitaInputs,
        ...despesaInputs
    ];

    // Detecta automaticamente:
    // EVE = possui despesas
    // BV = não possui despesas
    const modoEVE =
        document.getElementById('i-despesa1') !== null;

    // =========================
    // INICIALIZAÇÃO
    // =========================

    document.getElementById('calculo-div').style.display = 'none';
    document.getElementById('calculos-resultados').style.display = 'none';

    // =========================
    // FUNÇÕES UTILITÁRIAS
    // =========================

    function parseValue(value) {

        return parseFloat(
            value
                .replace(/\./g, '')
                .replace(',', '.')
        ) || 0;

    }

    function formatCurrency(value) {

        return value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    }

    function mostrarResultados() {

        document.getElementById('calculo-div').style.display = 'block';
        document.getElementById('calculos-resultados').style.display = 'flex';

    }

    function esconderResultados() {

        document.getElementById('calculo-div').style.display = 'none';
        document.getElementById('calculos-resultados').style.display = 'none';

    }

    function todosCamposPreenchidos() {

        const camposNecessarios = modoEVE
            ? todosInputs
            : receitaInputs.slice(0, 3);

        return camposNecessarios.every(id => {

            const campo = document.getElementById(id);

            if (!campo) {
                return false;
            }

            return campo.value.trim() !== '';

        });

    }

    function somarCampos(lista) {

        let total = 0;

        lista.forEach(id => {

            const campo = document.getElementById(id);

            if (!campo) {
                return;
            }

            total += parseValue(campo.value);

        });

        return total;

    }

    // =========================
    // CÁLCULOS
    // =========================

    function calcular() {

        if (!todosCamposPreenchidos()) {
            esconderResultados();
            return;
        }

        // =========================
        // RECEITAS
        // =========================

        const quantidadeReceitas =
            modoEVE ? 5 : 3;

        const receitaTotal =
            somarCampos(
                receitaInputs.slice(0, quantidadeReceitas)
            );

        const receitaMensal =
            receitaTotal / quantidadeReceitas;

        const receitaAnual =
            receitaMensal * 12;

        document.getElementById('receita-anual').textContent =
            formatCurrency(receitaAnual);

        // =========================
        // EVE
        // =========================

        if (modoEVE) {

            const despesaTotal =
                somarCampos(despesaInputs);

            const despesaMensal =
                despesaTotal / 5;

            const despesaAnual =
                despesaMensal * 12;

            const lucroAnual =
                receitaAnual - despesaAnual;

            const calculoVPL =
                ((lucroAnual * 5) -
                ((lucroAnual * 5) / 100 * 34.48)) +
                (lucroAnual + (lucroAnual / 100 * 301.8));

            document.getElementById('despesa-anual').textContent =
                formatCurrency(despesaAnual);

            document.getElementById('lucro-anual').textContent =
                formatCurrency(lucroAnual);

            document.getElementById('calculo-vpl').textContent =
                formatCurrency(calculoVPL);

            document.getElementById('vpl').textContent =
                formatCurrency(calculoVPL);

        }

        // =========================
        // BV
        // =========================

        else {

            const cincoAnos =
                ((receitaAnual * 5) -
                ((receitaAnual * 5) / 100 * 34.48));

            const perpetuidade =
                receitaAnual +
                (receitaAnual / 100 * 301.8);

            const valorTotalEmpresa =
                cincoAnos + perpetuidade;

            document.getElementById('calculo-5anos').textContent =
                formatCurrency(cincoAnos);

            document.getElementById('5anos').textContent =
                formatCurrency(cincoAnos);

            document.getElementById('calculo-perpetuidade').textContent =
                formatCurrency(perpetuidade);

            document.getElementById('perpetuidade').textContent =
                formatCurrency(perpetuidade);

            document.getElementById('calculo-valortotalempresa').textContent =
                formatCurrency(valorTotalEmpresa);

            document.getElementById('valortotalempresa').textContent =
                formatCurrency(valorTotalEmpresa);

        }

        mostrarResultados();

        atualizarGrafico();

    }

    // =========================
    // GRÁFICO
    // =========================

    function atualizarGrafico() {

        const listaGrafico = modoEVE
            ? [...receitaInputs, ...despesaInputs]
            : receitaInputs.slice(0, 3);

        const valores = listaGrafico.map(id => {

            const campo = document.getElementById(id);

            if (!campo) {
                return 0;
            }

            return parseValue(campo.value);

        });

        const maxValor = Math.max(...valores);

        const baseValor =
            Math.ceil(maxValor / 5000) * 5000;

        document.getElementById('gfc-1').textContent =
            formatCurrency(baseValor);

        document.getElementById('gfc-2').textContent =
            formatCurrency((baseValor * 3) / 4);

        document.getElementById('gfc-3').textContent =
            formatCurrency(baseValor / 2);

        document.getElementById('gfc-4').textContent =
            formatCurrency(baseValor / 4);

        const maxHeight = 248;

        function calcularAltura(valor) {

            return Math.max(
                1,
                (valor / baseValor) * maxHeight
            );

        }

        listaGrafico.forEach((id, index) => {

            const coluna =
                document.getElementById(
                    id.replace('i-', '')
                );

            if (!coluna) {
                return;
            }

            coluna.style.height =
                calcularAltura(valores[index]) + 'px';

        });

    }

    // =========================
    // EVENTOS
    // =========================

    todosInputs.forEach(id => {

        const campo = document.getElementById(id);

        if (!campo) {
            return;
        }

        campo.addEventListener('input', calcular);

    });

});