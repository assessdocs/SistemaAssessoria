export function ativarMenuAtual() {
  const currentPath = location.pathname.toLowerCase();

  const links = document.querySelectorAll('.navdrawer-option');

  let encontrouAtivo = false;

  links.forEach(link => {
    link.classList.remove('ativo');

    const href = new URL(link.href).pathname.toLowerCase();

    if (
      href !== '/' &&
      href !== '/SistemaAssessoria/' &&
      currentPath.startsWith(href)
    ) {
      link.classList.add('ativo');
      encontrouAtivo = true;
    }
  });

  if (!encontrouAtivo) {
    links[0]?.classList.add('ativo');
  }
}