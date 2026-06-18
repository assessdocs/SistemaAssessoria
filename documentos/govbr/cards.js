document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // CONFIGURAÇÃO DOS ÍCONES
    // =========================

    const icones = [
        {
            label: 'request_quote',
            class: 'fa-file-invoice-dollar'
        },
        {
            label: 'priority',
            class: 'fa-square-check'
        },
        {
            label: 'cancel',
            class: 'fa-circle-xmark'
        },
        {
            label: 'schedule',
            class: 'fa-clock'
        },
        {
            label: 'speed',
            class: 'fa-gauge-high'
        }
    ];

    const MAX_CARDS = 5;
    const activeCards = new Set([1]);

    // =========================
    // HELPERS
    // =========================

    function show(el) {
        if (el) el.style.display = '';
    }

    function hide(el) {
        if (el) el.style.display = 'none';
    }

    function getLastActiveCard() {
        return Math.max(...activeCards);
    }

    function updateAddCardVisibility() {
        const boxAddCard = document.getElementById('box-add-card');

        if (!boxAddCard) return;

        if (activeCards.size >= MAX_CARDS) {
            hide(boxAddCard);
        } else {
            show(boxAddCard);
        }
    }

    function updateCloseButtons() {
        for (let i = 2; i <= MAX_CARDS; i++) {
            const close = document.getElementById(`close${i}`);
            hide(close);
        }

        if (activeCards.size <= 1) return;

        const last = getLastActiveCard();
        const close = document.getElementById(`close${last}`);

        show(close);
    }

    function activateCard(cardNumber) {
        activeCards.add(cardNumber);

        show(document.getElementById(`i-card${cardNumber}`));
        show(document.getElementById(`card${cardNumber}`));

        updateCloseButtons();
        updateAddCardVisibility();
    }

    function deactivateCard(cardNumber) {
        activeCards.delete(cardNumber);

        hide(document.getElementById(`i-card${cardNumber}`));
        hide(document.getElementById(`card${cardNumber}`));

        const addLinha = document.getElementById(`add-linha${cardNumber}`);
        const containerAddLinha = document.getElementById(`container-add-linha${cardNumber}`);

        const deleteBtn = document.getElementById(`delete${cardNumber}`);
        const containerLinha2 = document.getElementById(`container-c${cardNumber}-linha2`);
        const linha2 = document.getElementById(`c${cardNumber}-linha2`);

        const inputLinha1 = document.getElementById(`i-c${cardNumber}-linha1`);
        inputLinha1?.classList.remove('top');

        show(addLinha);
        show(containerAddLinha);
        
        hide(deleteBtn);
        hide(containerLinha2);
        hide(linha2);

        updateCloseButtons();
        updateAddCardVisibility();
    }

    // =========================
    // ESTADO INICIAL
    // =========================

    for (let i = 2; i <= MAX_CARDS; i++) {
        hide(document.getElementById(`i-card${i}`));
        hide(document.getElementById(`card${i}`));
    }

    updateCloseButtons();
    updateAddCardVisibility();

    // =========================
    // ADD CARD
    // =========================

    const addCardButton = document.getElementById('add-card');

    addCardButton?.addEventListener('click', () => {

        for (let i = 2; i <= MAX_CARDS; i++) {

            if (!activeCards.has(i)) {
                activateCard(i);
                break;
            }

        }

    });

    // =========================
    // CONFIGURAÇÃO DOS CARDS
    // =========================

    for (let card = 1; card <= MAX_CARDS; card++) {

        const inputTitulo = document.getElementById(`i-titulo${card}`);
        const titulo = document.getElementById(`titulo${card}`);

        const inputLinha1 = document.getElementById(`i-c${card}-linha1`);
        const linha1 = document.getElementById(`c${card}-linha1`);

        const inputLinha2 = document.getElementById(`i-c${card}-linha2`);
        const linha2 = document.getElementById(`c${card}-linha2`);

        const addLinha = document.getElementById(`add-linha${card}`);
        const containerAddLinha = document.getElementById(`container-add-linha${card}`);
        const deleteLinha = document.getElementById(`delete${card}`);
        const containerLinha2 = document.getElementById(`container-c${card}-linha2`);

        const iconButton = document.getElementById(`i-icone${card}`);
        const iconLabel = document.getElementById(`icone${card}`);
        const finalIcon = document.getElementById(`icon${card}`);

        const closeButton = document.getElementById(`close${card}`);

        // =========================
        // TÍTULO
        // =========================

        inputTitulo?.addEventListener('input', () => {
            if (titulo) {
                titulo.textContent = inputTitulo.value;
            }
        });

        // =========================
        // LINHA 1
        // =========================

        inputLinha1?.addEventListener('input', () => {
            if (linha1) {
                linha1.textContent = inputLinha1.value;
            }
        });

        // =========================
        // LINHA 2
        // =========================

        inputLinha2?.addEventListener('input', () => {
            if (linha2) {
                linha2.textContent = inputLinha2.value;
            }
        });

        hide(containerLinha2);
        hide(deleteLinha);
        hide(linha2);

        addLinha?.addEventListener('click', () => {
            hide(addLinha);
            hide(containerAddLinha);

            show(containerLinha2);
            show(deleteLinha);
            show(linha2);

            inputLinha1?.classList.add('top');
        });

        deleteLinha?.addEventListener('click', () => {
            show(addLinha);
            show(containerAddLinha);

            hide(containerLinha2);
            hide(deleteLinha);
            hide(linha2);

            inputLinha1?.classList.remove('top');
        });

        // =========================
        // ÍCONES
        // =========================

        let currentIconIndex = 0;

        function applyIcon(index) {

            const iconData = icones[index];

            if (iconLabel) {
                iconLabel.textContent = iconData.label;
            }

            if (finalIcon) {

                icones.forEach(icon => {
                    finalIcon.classList.remove(icon.class);
                });

                finalIcon.classList.add(iconData.class);

                // Ajuste específico do ícone speed
                finalIcon.style.marginTop =
                    iconData.label === 'speed'
                        ? '-2px'
                        : '';

            }

        }

        applyIcon(0);

        iconButton?.addEventListener('click', () => {

            currentIconIndex++;

            if (currentIconIndex >= icones.length) {
                currentIconIndex = 0;
            }

            applyIcon(currentIconIndex);

        });

        // =========================
        // CLOSE
        // =========================

        if (card > 1) {

            closeButton?.addEventListener('click', () => {

                if (!activeCards.has(card)) return;

                deactivateCard(card);

            });

        }

    }

});