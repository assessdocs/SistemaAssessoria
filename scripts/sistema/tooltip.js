document.addEventListener('DOMContentLoaded', () => {

    const tooltipGlobal = document.createElement('div');
    tooltipGlobal.className = 'tooltip-global';

    document.body.appendChild(tooltipGlobal);

    document.addEventListener('mouseover', (event) => {

        const tooltip = event.target.closest('.tooltip');

        if (!tooltip) return;

        tooltipGlobal.textContent = tooltip.dataset.tooltip;
        tooltipGlobal.classList.add('ativo');

        requestAnimationFrame(() => {

            const rect = tooltip.getBoundingClientRect();

            let left =
                rect.left +
                (rect.width / 2) -
                (tooltipGlobal.offsetWidth / 2);

            left = Math.max(
                8,
                Math.min(left, window.innerWidth - tooltipGlobal.offsetWidth - 8)
            );

            tooltipGlobal.style.left = left + 'px';
            tooltipGlobal.style.top = (rect.bottom + 8) + 'px';
        });
    });

    document.addEventListener('mouseout', (event) => {

        const tooltip = event.target.closest('.tooltip');

        if (!tooltip) return;

        tooltipGlobal.classList.remove('ativo');
    });

});