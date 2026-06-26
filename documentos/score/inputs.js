document.addEventListener('DOMContentLoaded', () => {

    Formatacao.bindFields([
        {
            inputId: 'i-cnpj',
            tags: ['cnpj']
        },

        {
            inputId: 'i-nomecompleto',
            targetId: 'nomecompleto',
            originalText: '[NOME]',
        },

        {
            inputId: 'i-cpf',
            targetId: 'cpf',
            originalText: '[CPF]',
            tags: ['cpf']
        },

        {
            inputId: 'i-pontuacao',
            targetId: 'pontuacao',
            originalText: '[?]',
        },
        
        {
            inputId: 'i-limite',
            targetId: 'limite',
            originalText: '[LIMITE]',
            tags: ['money']
        }
    ]);

});