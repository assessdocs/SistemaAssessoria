export function ativarMenuAtual() {
  const currentPath = location.pathname.toLowerCase();

  const links = document.querySelectorAll('.navdrawer-option');

  links.forEach(link => link.classList.remove('ativo'));

  let encontrouAtivo = false;

  links.forEach(link => {
    const href = new URL(link.href).pathname.toLowerCase();

    const isHome =
      href === '/' ||
      href === '/SistemaAssessoria/';

    if (!isHome && currentPath.startsWith(href)) {
      link.classList.add('ativo');
      encontrouAtivo = true;
    }
  });

  const estaNaHome =
    currentPath === '/' ||
    currentPath === '/SistemaAssessoria/';

  if (!encontrouAtivo && estaNaHome) {
    links[0]?.classList.add('ativo');
  }
}