document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="tipo-id"]');

    const colunaConsulta = document.getElementById('coluna-consulta');
    const boxDados = document.getElementById('box-dados');

    const cnpjSpan = document.getElementById('cnpj');
    const razaoSpan = document.getElementById('razaosocial');
    const cpfSpan = document.getElementById('cpf');
    const nomeSpan = document.getElementById('nomecompleto');

    function cpf() {
        colunaConsulta.style.display = 'none';
        boxDados.style.display = '';
        
        cnpjSpan.style.display = 'none';
        razaoSpan.style.display = 'none';
        cpfSpan.style.display = '';
        nomeSpan.style.display = '';
    }

    function cnpj() {
        colunaConsulta.style.display = '';
        boxDados.style.display = 'none';
        
        cnpjSpan.style.display = '';
        razaoSpan.style.display = '';
        cpfSpan.style.display = 'none';
        nomeSpan.style.display = 'none';
    }

    function atualizarTipoId() {
        const selecionado = document.querySelector('input[name="tipo-id"]:checked')?.value;

        if (selecionado === 'cpf') {
            cpf();
        } else {
            cnpj();
        }
    }

    radios.forEach(radio => {
        radio.addEventListener('change', atualizarTipoId);
    });

    atualizarTipoId();
});