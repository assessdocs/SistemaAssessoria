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
        },

        {
            inputId: 'i-receita4',
            tags: ['money']
        },

        {
            inputId: 'i-receita5',
            tags: ['money']
        },

        {
            inputId: 'i-despesa1',
            tags: ['money']
        },

        {
            inputId: 'i-despesa2',
            tags: ['money']
        },

        {
            inputId: 'i-despesa3',
            tags: ['money']
        },

        {
            inputId: 'i-despesa4',
            tags: ['money']
        },

        {
            inputId: 'i-despesa5',
            tags: ['money']
        },
    ]);

});