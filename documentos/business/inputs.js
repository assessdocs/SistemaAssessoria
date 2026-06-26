document.addEventListener('DOMContentLoaded', () => {

    Formatacao.bindFields([
        {
            inputId: 'i-cnpj',
            tags: ['cnpj']
        },

        {
            inputId: 'i-email',
            targetId: 'email',
            originalText: '[E-MAIL]',
            tags: ['email']
        },
        
        {
            inputId: 'i-telefone',
            targetId: 'telefone',
            originalText: '[TELEFONE]',
            tags: ['phone']
        },

        {
            inputId: 'i-receita1',
            tags: ['money']
        },

        {
            inputId: 'i-receita2',
            tags: ['money']
        },

        {
            inputId: 'i-receita3',
            tags: ['money']
        }
    ]);

});