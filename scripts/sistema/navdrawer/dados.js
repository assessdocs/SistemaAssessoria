export const menuConfig = {
  top: [
    {
      icon: 'home',
      text: 'Painel Inicial',
      path: '',
      href: '/'
    },

    'divider',

    {
      icon: 'request_quote',
      text: 'Orçamento',
      path: 'documentos/orcamento/',
      href: '/documentos/orcamento/'
    },
    {
      icon: 'insert_chart',
      text: 'EVE e SWOT',
      path: 'documentos/eve/',
      href: '/documentos/eve/'
    },
    {
      icon: 'bid_landscape',
      text: 'Business',
      path: 'documentos/business/',
      href: '/documentos/business/'
    },
    {
      icon: 'table',
      text: 'DMPL',
      path: 'documentos/dmpl/',
      href: '/documentos/dmpl/'
    },
    {
      icon: 'receipt_long',
      text: 'Nota Fiscal',
      path: 'documentos/notafiscal/',
      href: '/documentos/notafiscal/'
    },

    'divider',

    {
      icon: 'splitscreen_landscape',
      text: 'Conciliação',
      path: 'documentos/conciliacao/',
      href: '/documentos/conciliacao/'
    },
    {
      icon: 'account_balance',
      text: 'GovBR',
      path: 'documentos/govbr/',
      href: '/documentos/govbr/'
    },
    {
      icon: 'speed',
      text: 'Score',
      path: 'documentos/score/',
      href: '/documentos/score/'
    },
    {
      icon: 'table_chart_view',
      text: 'Varredura',
      path: 'documentos/varredura/',
      href: '/documentos/varredura/'
    }
  ],

  bottom: [
    'divider',

    {
      icon: 'help',
      text: 'Ajuda',
      path: 'ajuda/',
      href: '/ajuda/'
    },
    {
      icon: 'settings',
      text: 'Configurações',
      path: 'configuracoes/',
      href: '/configuracoes/'
    },
    {
      icon: 'logout',
      text: 'Sair do Sistema',
      href: 'https://www.google.com'
    }
  ]
};