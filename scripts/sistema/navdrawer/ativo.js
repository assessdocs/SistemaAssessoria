export function ativarMenuAtual() {

  const currentPath =
    location.pathname.toLowerCase();

  const links =
    document.querySelectorAll(
      '.navdrawer-option[data-path]'
    );

  let encontrouAtivo = false;

  links.forEach(link => {

    link.classList.remove('ativo');

    const path =
      link.dataset.path.toLowerCase();

    if (!path) return;

    if (currentPath.includes(`/${path}`)) {

      link.classList.add('ativo');

      encontrouAtivo = true;
    }
  });

  if (!encontrouAtivo) {

    document
      .querySelector(
        '.navdrawer-option[data-path=""]'
      )
      ?.classList.add('ativo');
  }
}