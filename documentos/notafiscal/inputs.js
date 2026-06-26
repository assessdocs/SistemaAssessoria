document.addEventListener('DOMContentLoaded', () => {

    Formatacao.bindFields([
        {
            inputId: 'i-cnpj',
            tags: ['cnpj']
        },

        {
            inputId: 'i-data',
            targetId: 'data1',
            originalText: '[DATA 1]',
            tags: ['date']
        },
        
        {
            inputId: 'i-data',
            targetId: 'data2',
            originalText: '[DATA 2]',
            tags: ['date']
        },

        {
            inputId: 'i-data',
            targetId: 'data3',
            originalText: '[DATA 3]',
            tags: ['date']
        },

        {
            inputId: 'i-hora',
            targetId: 'hora1',
            originalText: '[HORA 1]',
            tags: ['time']
        },

        {
            inputId: 'i-hora',
            targetId: 'hora2',
            originalText: '[HORA 2]',
            tags: ['time']
        },

        {
            inputId: 'i-telefone',
            targetId: 'telefone',
            originalText: '[TELEFONE]',
            tags: ['phone']
        },

        {
            inputId: 'i-valor1',
            tags: ['money']
        },

        {
            inputId: 'i-valor2',
            tags: ['money']
        },

        {
            inputId: 'i-valor3',
            tags: ['money']
        },

        {
            inputId: 'i-valor4',
            tags: ['money']
        },

        {
            inputId: 'i-valor5',
            tags: ['money']
        },

        {
            inputId: 'i-valor6',
            tags: ['money']
        },

        {
            inputId: 'i-valor7',
            tags: ['money']
        },
    ]);

});