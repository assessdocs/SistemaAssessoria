(function (global) {

    const rules = {

        number: (value) =>
            value.replace(/[^0-9.,]/g, ''),

        money: (value) => {
            let digits = value.replace(/\D/g, '');
            if (!digits) return '';

            digits = digits.padStart(3, '0');

            let cents = digits.slice(-2);
            let integer = digits.slice(0, -2);

            integer = integer.replace(/^0+/, '') || '0';
            integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

            return `${integer},${cents}`;
        },

        email: (value) =>
            value
                .replace(/\s/g, '')
                .replace(/[^a-zA-Z0-9@._+-]/g, '')
                .replace(/\.{2,}/g, '.')
                .replace(/@{2,}/g, '@'),

        phone: (value) => {
            let d = value.replace(/\D/g, '').slice(0, 11);
            if (!d) return '';

            const ddd = d.slice(0, 2);
            const rest = d.slice(2);

            let out = `(${ddd}`;
            if (d.length >= 3) out += ') ';

            if (rest.length <= 8) {
                out += rest.slice(0, 4);
                if (rest.length > 4) out += '-' + rest.slice(4);
            } else {
                out += rest.slice(0, 1) + ' ' + rest.slice(1, 5);
                if (rest.length > 5) out += '-' + rest.slice(5);
            }

            return out;
        },

        cpf: (value) => {
            let v = value.replace(/\D/g, '').slice(0, 11);

            return v
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        },

        cnpj: (value) => {
            let v = value.replace(/\D/g, '').slice(0, 14);

            return v
                .replace(/^(\d{2})(\d)/, '$1.$2')
                .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
                .replace(/\.(\d{3})(\d)/, '.$1/$2')
                .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
        },

        cpfCnpj: (value) => {
            let v = value.replace(/\D/g, '').slice(0, 14);
            return v.length <= 11
                ? rules.cpf(value)
                : rules.cnpj(value);
        },

        date: (value) => {
            if (!value) return '';

            const [ano, mes, dia] = value.split('-');

            if (!ano || !mes || !dia) return value;

            return `${dia}/${mes}/${ano}`;
        },

        time: (value) => value
    };

    function applyRules(value, tags = []) {
        return tags.reduce((acc, tag) => {
            const rule = rules[tag];
            return rule ? rule(acc) : acc;
        }, value);
    }

    function bindField({ inputId, targetId, originalText, tags = [] }) {
        const input = document.getElementById(inputId);
        const target = targetId ? document.getElementById(targetId) : null;

        if (!input) return;

        if (target && originalText !== undefined) {
            target.textContent = originalText;
        }

        input.addEventListener('input', () => {
            let inputValue = input.value;
            let displayValue = applyRules(inputValue, tags);

            // Só altera o value do input se NÃO for um input nativo de data/hora
            if (
                input.type !== 'date' &&
                input.type !== 'time' &&
                displayValue !== inputValue
            ) {
                input.value = displayValue;
            }

            if (target) {
                target.textContent = displayValue.trim() === ''
                    ? (originalText ?? '')
                    : displayValue;
            }
        });
    }

    function bindFields(fields) {
        fields.forEach(bindField);
    }

    global.Formatacao = {
        bindFields
    };

})(window);