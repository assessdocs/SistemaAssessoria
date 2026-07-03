document.addEventListener('DOMContentLoaded', function () {
    const exportar = document.getElementById('exportar');

    const header = document.getElementById('header');
    const sistema = document.getElementById('conteudo');
    const documento = document.getElementById('documento');

    function base() {
        const header = document.getElementById('header');

        if (header) {
            header.style.display = 'flex'; // alterar para flex após editar
        }

        sistema.style.display = 'flex'; // alterar para flex após editar
    }
    
    function doc() {
        documento.style.display = 'none'; // alterar para none após editar
    }

    base();
    doc();

    function basePRINT() {
        const header = document.getElementById('header');

        if (header) {
            header.style.display = 'none';
        }

        sistema.style.display = 'none';
    }

    function docPRINT() {
        documento.style.display = 'flex';
    }

    if (exportar) {
        exportar.addEventListener('click', () => {
            if (exportar.classList.contains('enabled')) {

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

                    }, 20);
                });
                
                basePRINT();
                docPRINT();

                window.print();

                setTimeout(() => {
                    base();
                    doc();
                }, 200); // tempo um pouco maior para evitar problemas

            } else {
                alert('Verifique se todos os campos foram preenchidos e marque a caixinha para liberar a exportação.');
                return;
            }
        });
    }
});
