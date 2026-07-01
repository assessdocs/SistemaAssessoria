document.addEventListener('DOMContentLoaded', function () {
    
    const elementosTexto = [
        { class: 'assessoria-cnpj', texto: '31.000.873/0001-28' },

        { class: 'assessoria-nome', texto: 'Creta Assessoria' },
        { class: 'assessoria-nome-ALT', texto: 'Creta Assessoria' },

        { class: 'assessoria-nomeCAPS', texto: 'CRETA ASSESSORIA' },
        { class: 'assessoria-nomeCAPS-ALT', texto: 'CRETA ASSESSORIA' },

        { class: 'assessoria-razaosocial', texto: 'Creta Assessoria em Gestao Empresarial LTDA' },
        { class: 'assessoria-razaosocialCAPS', texto: 'CRETA ASSESSORIA EM GESTAO EMPRESARIAL LTDA' },
        
        { class: 'assessoria-comprovante', texto: 'CRETA ASSESSORIA' },
        { class: 'assessoria-agencia', texto: '0001' },
        { class: 'assessoria-conta', texto: '41192137-4' },

        { class: 'assessoria-logradouro', texto: 'Rua Nascimento Silva' },
        { class: 'assessoria-numero', texto: '103' },
        { class: 'assessoria-bairro', texto: 'Ipanema' },
        { class: 'assessoria-cidade', texto: 'Rio de Janeiro' },
        { class: 'assessoria-estado', texto: 'Rio de Janeiro' },
        { class: 'assessoria-uf', texto: 'RJ' },
        { class: 'assessoria-cep', texto: '22421-025' },

        { class: 'assessoria-diretor', texto: 'João Vicente Scarano' },

        { class: 'assessoria-email', texto: 'contato@cretaassessoria.com' },
    ];

    elementosTexto.forEach(item => {
        const elementos = document.querySelectorAll(`.${item.class}`);
        elementos.forEach(el => {
            el.dataset.originalText = el.textContent;
            el.textContent = item.texto;
        });
    });
});