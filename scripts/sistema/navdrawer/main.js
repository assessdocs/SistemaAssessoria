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

    let expandido;

    if (window.innerWidth < 920) {
      expandido = false;
    } else {
      const salvo = localStorage.getItem('navdrawerExpandido');
      expandido = salvo === null ? true : salvo === 'true';
    }

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
    const novoEstado = !expandido;

    itensExpandiveis.forEach(item => {
      if (!item) return;
      item.classList.toggle('expanded', novoEstado);
    });

    menuIcon.textContent = novoEstado
      ? 'menu_open'
      : 'menu';

    localStorage.setItem('navdrawerExpandido', novoEstado);

  });

});