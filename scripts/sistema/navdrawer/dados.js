const BASE_URL = window.location.hostname.includes('github.io')
    ? '/SistemaAssessoria/'
    : '/';

window.BASE_URL = BASE_URL;

export const menuConfig = {
  top: [
    {
      icon: 'home',
      text: 'Painel Inicial',
      path: '',
      href: '${BASE_URL}'
    },

    'divider',

    {
      icon: 'request_quote',
      text: 'Orçamento',
      path: 'documentos/orcamento/',
      href: '${BASE_URL}documentos/orcamento/'
    },
    {
      icon: 'insert_chart',
      text: 'EVE e SWOT',
      path: 'documentos/eve/',
      href: '${BASE_URL}documentos/eve/'
    },
    {
      icon: 'bid_landscape',
      text: 'Business',
      path: 'documentos/business/',
      href: '${BASE_URL}documentos/business/'
    },
    {
      icon: 'table',
      text: 'DMPL',
      path: 'documentos/dmpl/',
      href: '${BASE_URL}documentos/dmpl/'
    },
    {
      icon: 'receipt_long',
      text: 'Nota Fiscal',
      path: 'documentos/notafiscal/',
      href: '${BASE_URL}documentos/notafiscal/'
    },

    'divider',

    {
      icon: 'splitscreen_landscape',
      text: 'Conciliação',
      path: 'documentos/conciliacao/',
      href: '${BASE_URL}documentos/conciliacao/'
    },
    {
      icon: 'account_balance',
      text: 'GovBR',
      path: 'documentos/govbr/',
      href: '${BASE_URL}documentos/govbr/'
    },
    {
      icon: 'speed',
      text: 'Score',
      path: 'documentos/score/',
      href: '${BASE_URL}documentos/score/'
    },
    {
      icon: 'table_chart_view',
      text: 'Varredura',
      path: 'documentos/varredura/',
      href: '${BASE_URL}documentos/varredura/'
    }
  ],

  bottom: [
    'divider',

    {
      icon: 'help',
      text: 'Ajuda',
      path: 'ajuda/',
      href: '${BASE_URL}ajuda/'
    },
    {
      icon: 'settings',
      text: 'Configurações',
      path: 'configuracoes/',
      href: '${BASE_URL}configuracoes/'
    },
    {
      icon: 'logout',
      text: 'Sair do Sistema',
      href: 'https://www.google.com'
    }
  ]
};