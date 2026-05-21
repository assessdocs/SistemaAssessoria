document.addEventListener("DOMContentLoaded", () => {

    // Gera número com quantidade fixa de dígitos
    const gerarNumero = (digitos) => {
        return Math.floor(Math.random() * (10 ** digitos))
            .toString()
            .padStart(digitos, "0");
    };

    // Número da nota
    const numeroNota = gerarNumero(8);

    // Elementos que receberão o valor
    [
        "numero-nota1",
        "numero-nota2"
    ].forEach((id) => {
        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.textContent = numeroNota;
        }
    });

    console.log("Número da Nota Fiscal gerado.");

});