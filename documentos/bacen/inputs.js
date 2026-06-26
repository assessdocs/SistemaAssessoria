document.addEventListener('DOMContentLoaded', () => {

    Formatacao.bindFields([
        {
            inputId: 'i-cnpj',
            tags: ['cnpj']
        },

        {
            inputId: 'i-nomecompleto',
            targetId: 'nomecompleto',
            originalText: '[NOME]'
        },
        
        {
            inputId: 'i-cpf',
            targetId: 'cpf',
            originalText: '[CPF]',
            tags: ['cpf']
        },

        {
            inputId: 'i-cnpj-varredura',
            targetId: 'cnpj-varredura',
            originalText: '[CNPJ]',
            tags: ['cnpj']
        },

        {
            inputId: 'i-instituicao',
            targetId: 'instituicao',
            originalText: '[INSTITUIÇÃO]'
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
            inputId: 'i-valor',
            targetId: 'valor',
            originalText: '[VALOR]',
            tags: ['money']
        },

        {
            inputId: 'i-pendencia',
            targetId: 'pendencia',
            originalText: '[PENDÊNCIA]'
        }
    ]);

});