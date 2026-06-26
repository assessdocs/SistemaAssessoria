document.addEventListener('DOMContentLoaded', () => {

    Formatacao.bindFields([
        {
            inputId: 'i-cnpj',
            tags: ['cpfCnpj']
        },

        {
            inputId: 'i-agencia',
            targetId: 'agencia',
            originalText: '[AGÊNCIA]'
        },

        {
            inputId: 'i-conta',
            targetId: 'conta',
            originalText: '[CONTA]'
        },

        {
            inputId: 'i-instituicao',
            targetId: 'instituicao',
            originalText: '[INSTITUIÇÃO]'
        },

        {
            inputId: 'i-chave',
            targetId: 'chave',
            originalText: '[CHAVE]'
        },

        {
            inputId: 'i-data',
            targetId: 'data',
            originalText: '[DATA]',
            tags: ['date']
        },
    ]);

});