document.addEventListener('DOMContentLoaded', function () {
    const exportar = document.getElementById('exportar');

    const navdrawer = document.getElementById('navdrawer');
    const sistema = document.getElementById('conteudo');
    const documento = document.getElementById('documento');

    function base() {
        const navdrawer = document.getElementById('navdrawer');

        if (navdrawer) {
            navdrawer.style.display = 'flex'; // alterar para flex após editar
        }

        sistema.style.display = 'flex'; // alterar para flex após editar
    }
    
    function doc() {
        documento.style.display = 'none'; // alterar para none após editar
    }

    base();
    doc();

    function basePRINT() {
        const navdrawer = document.getElementById('navdrawer');

        if (navdrawer) {
            navdrawer.style.display = 'none';
        }

        sistema.style.display = 'none';
    }

    function docPRINT() {
        documento.style.display = 'flex';
    }

    if (exportar) {
        exportar.addEventListener('click', () => {
            if (exportar.classList.contains('enabled')) {
                
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
