document.addEventListener("DOMContentLoaded", () => {

    // Gera número com quantidade fixa de dígitos
    const gerarNumero = (digitos) => {
        let numero = "";

        for (let i = 0; i < digitos; i++) {
            numero += Math.floor(Math.random() * 10);
        }

        return numero;
    };

    // Gerar protocolo
    const protocolo = gerarNumero(15);

    // Inserir no elemento
    const elemento = document.getElementById("protocolo");

    if (elemento) {
        elemento.textContent = protocolo;
    }

    console.log("Protocolo gerado.");

});