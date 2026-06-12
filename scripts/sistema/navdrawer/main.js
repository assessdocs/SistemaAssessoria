import { inserirNavdrawer } from './build.js';
import { ativarMenuAtual } from './ativo.js';

document.addEventListener('DOMContentLoaded', () => {

  inserirNavdrawer();
  ativarMenuAtual();

  const menuButton = document.getElementById('navdrawer-menu');
  const menuIcon = document.getElementById('navdrawer-menu-icon');

  const itensExpandiveis = [
    document.body,
    document.getElementById('navdrawer'),
    document.getElementById('pagina'),
    ...document.querySelectorAll(
      '.sistema-navdrawer, .navdrawer-text, .navdrawer-div'
    ),
  ];

  function atualizarEstadoTela() {
    const expandido = window.innerWidth >= 920;

    itensExpandiveis.forEach(item => {
      if (!item) return;
      item.classList.toggle('expanded', expandido);
    });

    menuIcon.textContent = expandido
      ? 'menu_open'
      : 'menu';
  }

  // Estado inicial
  atualizarEstadoTela();

  // Atualiza ao redimensionar
  window.addEventListener('resize', atualizarEstadoTela);

  menuButton?.addEventListener('click', () => {

    const expandido = document.body.classList.contains('expanded');

    itensExpandiveis.forEach(item => {
      if (!item) return;
      item.classList.toggle('expanded', !expandido);
    });

    menuIcon.textContent = expandido
      ? 'menu'
      : 'menu_open';

  });

});