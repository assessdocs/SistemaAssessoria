document.addEventListener('DOMContentLoaded', () => {

    const STORAGE_KEY = 'theme';
    const switchTheme = document.getElementById('i-tema');
    const logo = document.getElementById('logo');

    function aplicarTema(dark) {
        const logo = document.getElementById('logo');

        if (dark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem(STORAGE_KEY, 'dark');

            if (logo) {
                logo.src = `${BASE_URL}sistema/logo-dark.svg`;
            }

        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem(STORAGE_KEY, 'light');

            if (logo) {
                logo.src = `${BASE_URL}sistema/logo.svg`;
            }
        }

        if (switchTheme) {
            switchTheme.selected = dark;
        }
    }

    // Carrega preferência salva
    aplicarTema(localStorage.getItem(STORAGE_KEY) === 'dark');

    // Atualiza tema
    switchTheme?.addEventListener('change', () => {
        aplicarTema(switchTheme.selected);
    });

});