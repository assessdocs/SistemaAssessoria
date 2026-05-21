document.addEventListener("DOMContentLoaded", function() {
    function dataHoje() {
        // Pega a data atual em GMT
        const agora = new Date();

        // Converte para GMT-3
        const fuso = -3;
        const horaLocal = new Date(agora.getTime() + (fuso * 60 * 60 * 1000));
        
        // Extrai os componentes da data
        const dia = String(horaLocal.getUTCDate()).padStart(2, '0');
        const mesesNomes = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
        const mes = mesesNomes[horaLocal.getUTCMonth()];
        const ano = horaLocal.getUTCFullYear();

        return { dia, mes, ano };
    }

    // Pega a data atual e atualiza os elementos da página
    const dataAgora = dataHoje();
    document.getElementById("dia").textContent = dataAgora.dia;
    document.getElementById("mes").textContent = dataAgora.mes;
    document.getElementById("ano1").textContent = dataAgora.ano;

    var orcamento = document.getElementById('orcamento');
    
    if (orcamento) {
        document.getElementById("ano2").textContent = dataAgora.ano;

        console.log("Hoje: Orçamento - Ano 2 automático.");
    } else {
        console.log("Hoje: Tudo configurado.");
    }
});