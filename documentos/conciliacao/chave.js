document.addEventListener('DOMContentLoaded', () => {
    const btnGerar = document.getElementById('gerar');
    const inputChave = document.getElementById('i-chave');

    if (!btnGerar || !inputChave) return;

    // Formatação do campo
    inputChave.addEventListener('input', () => {
        let valor = inputChave.value
            .toUpperCase()
            .replace(/[^A-Z0-9]/g, '') // Apenas letras maiúsculas e números
            .slice(0, 24); // Limite de 24 caracteres

        valor = valor.match(/.{1,4}/g)?.join('-') || '';

        inputChave.value = valor;
    });

    // Geração de código alfanumérico de 24 caracteres
    btnGerar.addEventListener('click', () => {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let codigo = '';

        for (let i = 0; i < 24; i++) {
            codigo += caracteres.charAt(
                Math.floor(Math.random() * caracteres.length)
            );
        }

        inputChave.value = codigo.match(/.{1,4}/g).join('-');

        // Dispara evento caso outros scripts dependam dele
        inputChave.dispatchEvent(new Event('input', { bubbles: true }));
    });
});