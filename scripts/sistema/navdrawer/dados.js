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
      text: 'GovBR (>Não<)',
      href: `${BASE_URL}documentos/govbr/`
    },
    {
      icon: 'speed',
      text: 'Score (>Não<)',
      href: `${BASE_URL}documentos/score/`
    },
    {
      icon: 'table_chart_view',
      text: 'Varredura (>Não<)',
      href: `${BASE_URL}documentos/varredura/`
    }
  ],

  bottom: [
    'divider',

    {
      icon: 'help',
      text: 'Ajuda',
      href: `${BASE_URL}ajuda/`
    },
    {
      icon: 'settings',
      text: 'Configurações',
      href: `${BASE_URL}configuracoes/`
    },
    {
      icon: 'logout',
      text: 'Sair do Sistema',
      href: 'https://www.google.com'
    }
  ]
};