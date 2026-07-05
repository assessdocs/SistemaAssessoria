const BASE_URL = window.location.hostname.includes('github.io')
    ? '/SistemaAssessoria/'
    : '/';

window.BASE_URL = BASE_URL;

document.head.insertAdjacentHTML('beforeend', `
    <!-- DADOS META -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- FAVICON -->
        <link rel="icon" href="${BASE_URL}favicon.png">

    <!-- MATERIAL SYMBOLS -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-25..200&display=block">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-25..200&display=block">

    <!-- ÍCONE PIX -->
        <link rel="stylesheet" href="${BASE_URL}estilos/icones.css">

    <!-- TEMA M3 -->
        <link rel="stylesheet" href="${BASE_URL}estilos/m3/color.css">
        <link rel="stylesheet" href="${BASE_URL}estilos/m3/elevation.css">
        <link rel="stylesheet" href="${BASE_URL}estilos/m3/motion.css">
        <link rel="stylesheet" href="${BASE_URL}estilos/m3/navdrawer.css">

    <!-- FONTES -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap">

    <!-- FONT AWESOME ANTIGO -->
        <link rel="stylesheet" href="${BASE_URL}estilos/font-awesome/fontawesome.css">
`);

window.addEventListener('load', () => {
    setTimeout(() => {

        const fontes = [
            'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-25..200&display=block',
            'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-25..200&display=block',
            'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap',
            `${BASE_URL}estilos/font-awesome/fontawesome.css`
        ];

        fontes.forEach(href => {
            const antigo = document.querySelector(`link[href="${href}"]`);

            if (antigo) {
                antigo.remove();
            }

            const novo = document.createElement('link');
            novo.rel = 'stylesheet';
            novo.href = href;

            document.head.appendChild(novo);
        });

    }, 200);
});