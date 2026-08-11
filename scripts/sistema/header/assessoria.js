const STORAGE_KEY = 'assessoria-selecionada';

const assessorias = [
    { id: 'solution', label: 'Solution Assessoria', icon: 'counter_1' },
    { id: 'ace', label: 'Ace Assessoria', icon: 'counter_2' },
    { id: 'teste', label: 'Teste Assessoria', icon: 'counter_3' }
];

let el = {};
let currentAssessoriaId = null;

/* =========================
   INIT
========================= */
export function initAssessoriaSystem() {
    const wait = setInterval(() => {

        el.toggle = document.getElementById('trailing-assessoria');
        el.menu = document.getElementById('menu-assessoria');
        el.nome = document.getElementById('assessoria-ativa');
        el.options = document.getElementById('assessoria-options');

        if (!el.toggle || !el.menu || !el.options) return;

        clearInterval(wait);

        render();
        bind();
        init();
        setMenu(false);

    }, 30);
}

/* =========================
   RENDER
========================= */
function render() {
    el.options.innerHTML = assessorias.map((a, index) => `
        <input type="radio" name="assessoria" value="${a.id}" id="assessoria-${a.id}">
        <label for="assessoria-${a.id}" class="${index === 0 ? 'top' : ''}">
            <span class="material-symbols-rounded">${a.icon}</span>
            <span>${a.label}</span>
        </label>
    `).join('');
}

/* =========================
   BIND
========================= */
function bind() {
    el.toggle.onclick = (e) => {
        e.stopPropagation();
        setMenu(!el.menu.classList.contains('open'));
    };

    document.addEventListener('click', () => setMenu(false));

    el.options.onchange = (e) => {
        if (e.target.name === 'assessoria') {
            setAssessoria(e.target.value);
        }
    };

    document.getElementById('sair')?.addEventListener('click', () => {
        location.href = 'https://www.google.com';
    });
}

/* =========================
   MENU
========================= */
function setMenu(open) {
    el.toggle.classList.toggle('ativo', open);
    el.menu.classList.toggle('open', open);
}

/* =========================
   CORE
========================= */
function setAssessoria(id) {
    currentAssessoriaId = id;

    localStorage.setItem(STORAGE_KEY, id);
    document.querySelector(`input[value="${id}"]`).checked = true;

    applyActive(id);
    load(id);
}

function applyActive(id) {
    document.querySelectorAll('input[name="assessoria"]').forEach(r => {
        const label = document.querySelector(`label[for="${r.id}"]`);
        label?.classList.toggle('ativo', r.value === id);
    });
}

/* =========================
   LOAD
========================= */
async function load(id) {
    try {
        const mod = await import(`../assessoria/${id}/index.js`);
        applyData(mod.default);
    } catch {
        if (id !== 'creta') setAssessoria('creta');
    }
}

/* =========================
   DATA APPLY
========================= */
function applyData(data) {
    if (!data) return;

    if (data.nome && el.nome) {
        el.nome.textContent = data.nome;
    }

    applyTextos(data.textos);
    applyAssets(resolveAssets(currentAssessoriaId, data.assets));
    applyTheme(data.theme);

    document.dispatchEvent(new CustomEvent('assessoria-change', {
        detail: {
            id: currentAssessoriaId,
            ...data
        }
    }));
}

/* =========================
   ASSETS RESOLVER (NOVO)
========================= */
function resolveAssets(id, assets = {}) {

    const base = `${window.BASE_URL || '/'}scripts/sistema/assessoria/${id}/assets/`;

    const resolved = {};

    for (const [key, file] of Object.entries(assets.img || {})) {
        resolved[key] = base + file;
    }

    return resolved;
}

/* =========================
   HELPERS
========================= */
function applyTextos(textos = {}) {
    Object.entries(textos).forEach(([cls, val]) => {
        document.querySelectorAll(`.${cls}`).forEach(e => e.textContent = val);
    });
}

function applyAssets(img = {}) {
    Object.entries(img).forEach(([id, src]) => {
        const elImg = document.getElementById(id);
        if (elImg) elImg.src = src;
    });
}

function applyTheme(theme = {}) {
    const root = document.documentElement;

    Object.entries(theme).forEach(([k, v]) => {
        if (typeof v === 'string') {
            root.style.setProperty(k, v);
            return;
        }

        if (v?.base) {
            root.style.setProperty(
                k,
                v.alpha < 1 ? hexToRgba(v.base, v.alpha ?? 1) : v.base
            );
        }
    });
}

function hexToRgba(hex, a = 1) {
    const h = hex.replace('#', '');
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${a})`;
}

/* =========================
   INIT
========================= */
function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const valid = assessorias.some(a => a.id === saved);

    setAssessoria(valid ? saved : assessorias[0].id);
}