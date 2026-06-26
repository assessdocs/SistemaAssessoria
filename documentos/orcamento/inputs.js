document.addEventListener('DOMContentLoaded', () => {

    Formatacao.bindFields([
        {
            inputId: 'i-cnpj',
            tags: ['cnpj']
        },

        {
            inputId: 'i-orcamentode',
            targetId: 'orcamentode',
            originalText: '[DOCUMENTO]'
        },

        {
            inputId: 'i-valortotal',
            tags: ['money']
        },
        
        {
            inputId: 'i-telefone',
            targetId: 'telefone',
            originalText: '[TELEFONE]',
            tags: ['phone']
        },
    ]);

});