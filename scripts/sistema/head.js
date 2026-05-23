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

    <!-- ÍCONE MATERIAL SYMBOLS -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-25..200&display=block">

    <!-- ÍCONE PIX -->
    <link rel="stylesheet" href="${BASE_URL}estilos/icones.css">

    <!-- CORES -->
    <link rel="stylesheet" href="${BASE_URL}estilos/cores.css">
`);