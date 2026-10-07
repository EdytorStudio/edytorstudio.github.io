(function () {
  var L = {
    en: { tagline: 'A small studio building simple, fast and convenient apps and tools. Open source, clean interfaces, nothing extra.', projects: 'Projects', search: 'Search projects', site: 'Website', releases: 'Releases', close: 'Close', empty: 'Nothing found. Try another query.', loading: 'Loading...', fail: 'Could not load README.md. Open the repository: ' },
    uk: { tagline: 'Невелика студія, що робить прості, швидкі й зручні програми та інструменти. Відкритий код, чисті інтерфейси, нічого зайвого.', projects: 'Проекти', search: 'Пошук проектів', site: 'Сайт', releases: 'Релізи', close: 'Закрити', empty: 'Нічого не знайдено. Спробуйте інший запит.', loading: 'Завантаження...', fail: 'Не вдалося завантажити README.md. Відкрийте репозиторій: ' },
    ru: { tagline: 'Небольшая студия, создающая простые, быстрые и удобные программы и инструменты. Открытый исходный код, чистые интерфейсы, ничего лишнего.', projects: 'Проекты', search: 'Поиск проектов', site: 'Сайт', releases: 'Релизы', close: 'Закрыть', empty: 'Ничего не найдено. Попробуйте другой запрос.', loading: 'Загрузка...', fail: 'Не удалось загрузить README.md. Откройте репозиторий: ' },
    de: { tagline: 'Ein kleines Studio für einfache, schnelle und praktische Apps und Tools. Open Source, klare Oberflächen, nichts Überflüssiges.', projects: 'Projekte', search: 'Projekte suchen', site: 'Website', releases: 'Releases', close: 'Schließen', empty: 'Nichts gefunden. Versuche eine andere Suche.', loading: 'Wird geladen...', fail: 'README.md konnte nicht geladen werden. Repository öffnen: ' },
    es: { tagline: 'Un pequeño estudio que crea aplicaciones y herramientas sencillas, rápidas y cómodas. Código abierto, interfaces limpias, nada de más.', projects: 'Proyectos', search: 'Buscar proyectos', site: 'Sitio web', releases: 'Versiones', close: 'Cerrar', empty: 'No se encontró nada. Prueba otra búsqueda.', loading: 'Cargando...', fail: 'No se pudo cargar README.md. Abre el repositorio: ' },
    pl: { tagline: 'Małe studio tworzące proste, szybkie i wygodne aplikacje oraz narzędzia. Otwarty kod, czyste interfejsy, nic zbędnego.', projects: 'Projekty', search: 'Szukaj projektów', site: 'Strona', releases: 'Wydania', close: 'Zamknij', empty: 'Nic nie znaleziono. Spróbuj innego zapytania.', loading: 'Ładowanie...', fail: 'Nie udało się wczytać README.md. Otwórz repozytorium: ' }
  };
  var names = { en: 'English', uk: 'Українська', ru: 'Русский', de: 'Deutsch', es: 'Español', pl: 'Polski' };
  var cur = 'en';

  function detect() {
    var s;
    try { s = localStorage.getItem('lang'); } catch (e) {}
    if (s && L[s]) return s;
    var n = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < n.length; i++) {
      var c = n[i].slice(0, 2).toLowerCase();
      if (c === 'ua') c = 'uk';
      if (L[c]) return c;
    }
    return 'en';
  }

  var I = window.I18N = {
    names: names,
    get lang() { return cur; },
    t: function (k) { return (L[cur] && L[cur][k]) || L.en[k] || k; },
    /* рядок або об'єкт {en, uk, ru, ...} -> текст поточною мовою */
    loc: function (v) {
      if (v && typeof v === 'object') return v[cur] || v.en || v.uk || v[Object.keys(v)[0]] || '';
      return v || '';
    },
    all: function (v) { return v && typeof v === 'object' ? Object.keys(v).map(function (k) { return v[k]; }).join(' ') : (v || ''); },
    apply: function () {
      document.documentElement.lang = cur;
      [].forEach.call(document.querySelectorAll('[data-i18n]'), function (e) { e.textContent = I.t(e.getAttribute('data-i18n')); });
      [].forEach.call(document.querySelectorAll('[data-i18n-ph]'), function (e) { e.placeholder = I.t(e.getAttribute('data-i18n-ph')); });
    },
    set: function (l) {
      if (!L[l]) return;
      cur = l;
      try { localStorage.setItem('lang', l); } catch (e) {}
      I.apply();
      if (I.onchange) I.onchange();
    },
    init: function () { cur = detect(); I.apply(); }
  };
})();
