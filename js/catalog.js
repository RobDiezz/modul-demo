(() => {
  'use strict';
  // Dimensions are fictional demo values in millimetres: width × depth × height.
  const models = [
  {
    "id": "modul-02",
    "slug": "terra-02",
    "name": "TERRA",
    "number": "02",
    "fullName": "TERRA 02",
    "category": "storage",
    "categoryLabel": "Шкаф",
    "shortDescription": "Высокий шкаф со спокойным фасадом и цельным архитектурным силуэтом.",
    "dimensions": {
      "width": 1200,
      "depth": 600,
      "height": 2200
    },
    "finishes": [
      "oak",
      "walnut",
      "graphite"
    ],
    "imageSlot": "product-terra-02",
    "pageUrl": "products/terra-02.html"
  },
  {
    "id": "modul-05",
    "slug": "mono-05",
    "name": "MONO",
    "number": "05",
    "fullName": "MONO 05",
    "category": "storage",
    "categoryLabel": "Шкаф",
    "shortDescription": "Лаконичный шкаф с цельным фасадом и минимальным визуальным шумом.",
    "dimensions": {
      "width": 900,
      "depth": 580,
      "height": 2100
    },
    "finishes": [
      "greige",
      "graphite",
      "oak"
    ],
    "imageSlot": "product-mono-05",
    "pageUrl": "products/mono-05.html"
  },
  {
    "id": "modul-06",
    "slug": "alto-06",
    "name": "ALTO",
    "number": "06",
    "fullName": "ALTO 06",
    "category": "storage",
    "categoryLabel": "Шкаф",
    "shortDescription": "Высокий узкий шкаф, использующий вертикаль пространства для хранения.",
    "dimensions": {
      "width": 700,
      "depth": 520,
      "height": 2300
    },
    "finishes": [
      "oak",
      "walnut",
      "greige"
    ],
    "imageSlot": "product-alto-06",
    "pageUrl": "products/alto-06.html"
  },
  {
    "id": "modul-01",
    "slug": "linea-01",
    "name": "LINEA",
    "number": "01",
    "fullName": "LINEA 01",
    "category": "dressers",
    "categoryLabel": "Комод",
    "shortDescription": "Низкий комод с чистой геометрией и акцентом на горизонтальные пропорции.",
    "dimensions": {
      "width": 1800,
      "depth": 450,
      "height": 720
    },
    "finishes": [
      "oak",
      "walnut",
      "greige"
    ],
    "imageSlot": "product-linea-01",
    "pageUrl": "products/linea-01.html"
  },
  {
    "id": "modul-07",
    "slug": "riva-07",
    "name": "RIVA",
    "number": "07",
    "fullName": "RIVA 07",
    "category": "dressers",
    "categoryLabel": "Комод",
    "shortDescription": "Комод с ритмичным фасадом и сбалансированными пропорциями для жилой зоны.",
    "dimensions": {
      "width": 1400,
      "depth": 450,
      "height": 820
    },
    "finishes": [
      "walnut",
      "greige",
      "graphite"
    ],
    "imageSlot": "product-riva-07",
    "pageUrl": "products/riva-07.html"
  },
  {
    "id": "modul-08",
    "slug": "plano-08",
    "name": "PLANO",
    "number": "08",
    "fullName": "PLANO 08",
    "category": "dressers",
    "categoryLabel": "Комод",
    "shortDescription": "Компактная система хранения с широкими фасадами и спокойной геометрией.",
    "dimensions": {
      "width": 1200,
      "depth": 420,
      "height": 760
    },
    "finishes": [
      "oak",
      "greige",
      "graphite"
    ],
    "imageSlot": "product-plano-08",
    "pageUrl": "products/plano-08.html"
  },
  {
    "id": "modul-04",
    "slug": "nodo-04",
    "name": "NODO",
    "number": "04",
    "fullName": "NODO 04",
    "category": "nightstands",
    "categoryLabel": "Тумба",
    "shortDescription": "Компактная тумба с простой формой для спальни или жилого пространства.",
    "dimensions": {
      "width": 500,
      "depth": 420,
      "height": 520
    },
    "finishes": [
      "oak",
      "greige",
      "graphite"
    ],
    "imageSlot": "product-nodo-04",
    "pageUrl": "products/nodo-04.html"
  },
  {
    "id": "modul-09",
    "slug": "luno-09",
    "name": "LUNO",
    "number": "09",
    "fullName": "LUNO 09",
    "category": "nightstands",
    "categoryLabel": "Тумба",
    "shortDescription": "Невысокая тумба для спальни с визуально лёгкими и спокойными пропорциями.",
    "dimensions": {
      "width": 460,
      "depth": 400,
      "height": 480
    },
    "finishes": [
      "oak",
      "walnut",
      "greige"
    ],
    "imageSlot": "product-luno-09",
    "pageUrl": "products/luno-09.html"
  },
  {
    "id": "modul-10",
    "slug": "cubo-10",
    "name": "CUBO",
    "number": "10",
    "fullName": "CUBO 10",
    "category": "nightstands",
    "categoryLabel": "Тумба",
    "shortDescription": "Геометричная тумба, построенная вокруг компактного почти кубического объёма.",
    "dimensions": {
      "width": 520,
      "depth": 450,
      "height": 520
    },
    "finishes": [
      "walnut",
      "greige",
      "graphite"
    ],
    "imageSlot": "product-cubo-10",
    "pageUrl": "products/cubo-10.html"
  },
  {
    "id": "modul-03",
    "slug": "frame-03",
    "name": "FRAME",
    "number": "03",
    "fullName": "FRAME 03",
    "category": "shelving",
    "categoryLabel": "Стеллаж",
    "shortDescription": "Открытый стеллаж, построенный на ритме вертикальных и горизонтальных линий.",
    "dimensions": {
      "width": 1200,
      "depth": 360,
      "height": 1900
    },
    "finishes": [
      "walnut",
      "greige",
      "graphite"
    ],
    "imageSlot": "product-frame-03",
    "pageUrl": "products/frame-03.html"
  },
  {
    "id": "modul-11",
    "slug": "grid-11",
    "name": "GRID",
    "number": "11",
    "fullName": "GRID 11",
    "category": "shelving",
    "categoryLabel": "Стеллаж",
    "shortDescription": "Открытая система хранения с регулярной сеткой для книг и предметов.",
    "dimensions": {
      "width": 1600,
      "depth": 360,
      "height": 1800
    },
    "finishes": [
      "oak",
      "greige",
      "graphite"
    ],
    "imageSlot": "product-grid-11",
    "pageUrl": "products/grid-11.html"
  },
  {
    "id": "modul-12",
    "slug": "vert-12",
    "name": "VERT",
    "number": "12",
    "fullName": "VERT 12",
    "category": "shelving",
    "categoryLabel": "Стеллаж",
    "shortDescription": "Вертикальный стеллаж для компактного хранения без перегрузки пространства.",
    "dimensions": {
      "width": 700,
      "depth": 340,
      "height": 2000
    },
    "finishes": [
      "oak",
      "walnut",
      "graphite"
    ],
    "imageSlot": "product-vert-12",
    "pageUrl": "products/vert-12.html"
  },
  {
    "id": "modul-13",
    "slug": "forma-13",
    "name": "FORMA",
    "number": "13",
    "fullName": "FORMA 13",
    "category": "desks",
    "categoryLabel": "Стол",
    "shortDescription": "Рабочий стол с ясной геометрией и свободной рабочей поверхностью.",
    "dimensions": {
      "width": 1400,
      "depth": 700,
      "height": 750
    },
    "finishes": [
      "oak",
      "walnut",
      "graphite"
    ],
    "imageSlot": "product-forma-13",
    "pageUrl": "products/forma-13.html"
  },
  {
    "id": "modul-14",
    "slug": "piano-14",
    "name": "PIANO",
    "number": "14",
    "fullName": "PIANO 14",
    "category": "desks",
    "categoryLabel": "Стол",
    "shortDescription": "Компактный стол для домашнего рабочего пространства и ежедневных задач.",
    "dimensions": {
      "width": 1200,
      "depth": 600,
      "height": 750
    },
    "finishes": [
      "oak",
      "greige",
      "graphite"
    ],
    "imageSlot": "product-piano-14",
    "pageUrl": "products/piano-14.html"
  },
  {
    "id": "modul-15",
    "slug": "arco-15",
    "name": "ARCO",
    "number": "15",
    "fullName": "ARCO 15",
    "category": "desks",
    "categoryLabel": "Стол",
    "shortDescription": "Обеденный стол с цельной столешницей и спокойным архитектурным силуэтом.",
    "dimensions": {
      "width": 1800,
      "depth": 900,
      "height": 750
    },
    "finishes": [
      "oak",
      "walnut",
      "greige"
    ],
    "imageSlot": "product-arco-15",
    "pageUrl": "products/arco-15.html"
  }
];
  const activeModels = new Set(['linea-01', 'terra-02', 'frame-03', 'nodo-04']);
  const finishLabels = {
    oak: 'Светлый дуб', walnut: 'Тёплый орех',
    greige: 'Мягкий greige', graphite: 'Глубокий графит'
  };
  const categories = ['storage', 'dressers', 'nightstands', 'shelving', 'desks'];
  const grid = document.querySelector('#catalog-grid');
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#catalog-empty');
  const finishSelect = document.querySelector('#finish-filter');
  const categoryButtons = [...document.querySelectorAll('[data-category]')];
  let category = 'all';
  let finish = 'all';

  function modelWord(number) {
    const lastTwo = number % 100, last = number % 10;
    if (lastTwo >= 11 && lastTwo <= 14) return 'моделей';
    if (last === 1) return 'модель';
    return last >= 2 && last <= 4 ? 'модели' : 'моделей';
  }

  function renderCard(model) {
    const {width, depth, height} = model.dimensions;
    const isActive = activeModels.has(model.slug);
    const details = isActive ? `<a class="text-link" href="${model.pageUrl}" aria-label="Подробнее о ${model.fullName}">Подробнее ↗</a>` : `<p class="catalog-coming-soon-note">Модель находится в разработке.</p>`;
    const visual = isActive ? `<div class="image-slot photo-object" data-image-slot="${model.imageSlot}">
        <img src="assets/images/${model.slug}/${model.slug}-main-${model.slug === 'linea-01' ? 1536 : 1122}.webp" srcset="assets/images/${model.slug}/${model.slug}-main-480.webp 480w, assets/images/${model.slug}/${model.slug}-main-960.webp 960w, assets/images/${model.slug}/${model.slug}-main-${model.slug === 'linea-01' ? 1536 : 1122}.webp ${model.slug === 'linea-01' ? 1536 : 1122}w" sizes="(max-width: 600px) calc(100vw - 44px), (max-width: 1100px) 45vw, 440px" width="${model.slug === 'linea-01' ? 1536 : 1122}" height="${model.slug === 'linea-01' ? 1024 : 1402}" alt="${model.categoryLabel} ${model.fullName} — основной ракурс" loading="lazy" decoding="async">
      </div>` : `<div class="image-slot catalog-coming-soon" data-image-slot="${model.imageSlot}">
        <span class="slot-label"><span class="catalog-coming-soon-brand">MODUL.</span><small>СКОРО В КОЛЛЕКЦИИ</small></span>
      </div>`;
    return `<article class="catalog-card" data-model-id="${model.id}">
      ${visual}
      <p class="catalog-card-category">${model.categoryLabel}</p>
      <h3>${model.fullName}</h3>
      <p class="catalog-card-description">${model.shortDescription}</p>
      <dl class="catalog-card-specs"><div><dt>Ш × Г × В</dt><dd>${width} × ${depth} × ${height} мм</dd></div><div><dt>Отделки</dt><dd>${model.finishes.map(key => finishLabels[key]).join(' · ')}</dd></div></dl>
      ${details}
    </article>`;
  }

  function render() {
    const visible = models.filter(model =>
      (category === 'all' || model.category === category) &&
      (finish === 'all' || model.finishes.includes(finish))
    );
    categoryButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
    finishSelect.value = finish;
    grid.innerHTML = visible.map(renderCard).join('');
    empty.hidden = visible.length !== 0;
    count.textContent = `${visible.length} ${modelWord(visible.length)}`;
  }

  function readURL() {
    const params = new URLSearchParams(window.location.search);
    category = categories.includes(params.get('category')) ? params.get('category') : 'all';
    finish = Object.hasOwn(finishLabels, params.get('finish')) ? params.get('finish') : 'all';
  }

  function writeURL() {
    const url = new URL(window.location.href);
    for (const [key, value] of [['category', category], ['finish', finish]]) {
      if (value === 'all') url.searchParams.delete(key);
      else url.searchParams.set(key, value);
    }
    if (url.href !== window.location.href) {
      // Filtering also works when opened directly as a local file.
      try { window.history.pushState(null, '', url); } catch { /* Keep the in-page filters usable. */ }
    }
  }

  categoryButtons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.category;
    writeURL();
    render();
  }));
  finishSelect.addEventListener('change', () => {
    finish = finishSelect.value;
    writeURL();
    render();
  });
  function resetFilters() {
    category = finish = 'all';
    writeURL();
    render();
  }
  document.querySelector('#reset-filters').addEventListener('click', resetFilters);
  document.querySelector('#empty-reset').addEventListener('click', () => {
    resetFilters();
    categoryButtons[0].focus({preventScroll: true});
  });
  window.addEventListener('popstate', () => { readURL(); render(); });
  readURL();
  render();
})();
