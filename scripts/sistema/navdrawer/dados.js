const BASE_URL = window.location.hostname.includes('github.io')
  ? '/SistemaAssessoria/'
  : '/';

export const menuConfig = {
  top: [
    {
      icon: 'home',
      text: 'Painel Inicial',
      href: `${BASE_URL}`
    },

    'divider',

    {
      icon: 'request_quote',
      text: 'Orçamento',
      href: `${BASE_URL}documentos/orcamento/`
    },
    {
      icon: 'insert_chart',
      text: 'EVE e SWOT',
      href: `${BASE_URL}documentos/eve/`
    },
    {
      icon: 'bid_landscape',
      text: 'Business',
      href: `${BASE_URL}documentos/business/`
    },
    {
      icon: 'table',
      text: 'DMPL',
      href: `${BASE_URL}documentos/dmpl/`
    },
    {
      icon: 'receipt_long',
      text: 'Nota Fiscal',
      href: `${BASE_URL}documentos/notafiscal/`
    },

    'divider',

    {
      icon: 'splitscreen_landscape',
      text: 'Conciliação',
      href: `${BASE_URL}documentos/conciliacao/`
    },
    {
      icon: 'account_balance',
      text: 'GovBR',
      href: `${BASE_URL}documentos/govbr/`
    },
    {
      icon: 'speed',
      text: 'Score',
      href: `${BASE_URL}documentos/score/`
    },
    {
      icon: 'paid',
      text: 'BACEN',
      href: `${BASE_URL}documentos/bacen/`
    }
  ]
};