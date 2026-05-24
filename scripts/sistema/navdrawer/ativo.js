export function ativarMenuAtual() {
  const currentPath = location.pathname.toLowerCase();

  const links = [...document.querySelectorAll('.navdrawer-option')];

  // Remove de todos
  links.forEach(link => link.classList.remove('ativo'));

  const homePaths = ['/', '/sistemaassessoria/'];

  let linkAtivo = null;
  let maiorComprimento = 0;

  links.forEach(link => {
    const href = new URL(link.href).pathname.toLowerCase();

    // Ignora a Home nesta etapa
    if (homePaths.includes(href)) return;

    if (
      currentPath.startsWith(href) &&
      href.length > maiorComprimento
    ) {
      linkAtivo = link;
      maiorComprimento = href.length;
    }
  });

  // Se encontrou uma página correspondente, ativa somente ela
  if (linkAtivo) {
    linkAtivo.classList.add('ativo');
    return;
  }

  // Caso contrário, ativa a Home somente se estiver na Home
  if (homePaths.includes(currentPath)) {
    links[0]?.classList.add('ativo');
  }
}