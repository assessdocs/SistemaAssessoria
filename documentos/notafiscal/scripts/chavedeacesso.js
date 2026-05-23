document.addEventListener("DOMContentLoaded", () => {
    const ELEMENT_ID = "chavedeacesso";
    const TOTAL_GRUPOS = 10;
    const TAMANHO_GRUPO = 4;

    // Gera um grupo numérico com zeros à esquerda
    const gerarGrupo = (tamanho) => {
        const max = 10 ** tamanho;

        return Math.floor(Math.random() * max)
            .toString()
            .padStart(tamanho, "0");
    };

    // Gera a chave completa
    const gerarChaveAcesso = (
        totalGrupos = TOTAL_GRUPOS,
        tamanhoGrupo = TAMANHO_GRUPO
    ) => {
        return Array.from(
            { length: totalGrupos },
            () => gerarGrupo(tamanhoGrupo)
        ).join(".");
    };

    // Atualiza o elemento
    const elemento = document.getElementById(ELEMENT_ID);

    if (elemento) {
        elemento.textContent = gerarChaveAcesso();
        
    }

    console.log("Chave de Acesso gerada.");
});