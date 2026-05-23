document.addEventListener("DOMContentLoaded", () => {

    // Gera número aleatório com 2 dígitos
    const gerarSegundos = () => {
        return Math.floor(Math.random() * 60)
            .toString()
            .padStart(2, "0");
    };

    // Valor gerado
    const segundos = gerarSegundos();

    // Elementos que receberão o valor
    [
        "segundo1",
        "segundo2"
    ].forEach((id) => {
        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.textContent = segundos;
        }
    });

    console.log("Segundos gerados.");

});