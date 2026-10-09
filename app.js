(function () {
  var L = {
    en: { tagline: 'Edytor Studio develops apps and tools: programs for Android TV, utilities, emulators and more. Open source, clean interfaces, nothing extra.', missing: 'Missing a feature? We will add it.', projects: 'Projects', search: 'Search projects', site: 'Website', releases: 'Releases', close: 'Close', empty: 'Nothing found. Try another query.', loading: 'Loading...', fail: 'Could not load README.md. Open the repository: ', dberr: 'Could not load database.js. The file must be in the repository root and named exactly database.js.' },
    uk: { tagline: 'Edytor Studio розробляє застосунки та інструменти: програми для Android TV, утиліти, емулятори та інше. Відкритий код, чисті інтерфейси, нічого зайвого.', missing: 'Якщо якоїсь функції не вистачає, ми її додамо.', projects: 'Проекти', search: 'Пошук проектів', site: 'Сайт', releases: 'Релізи', close: 'Закрити', empty: 'Нічого не знайдено. Спробуйте інший запит.', loading: 'Завантаження...', fail: 'Не вдалося завантажити README.md. Відкрийте репозиторій: ', dberr: 'Не вдалося завантажити database.js. Файл має лежати в корені репозиторію і називатися саме database.js.' },
    ru: { tagline: 'Edytor Studio разрабатывает приложения и инструменты: программы для Android TV, утилиты, эмуляторы и другое. Открытый исходный код, чистые интерфейсы, ничего лишнего.', missing: 'Если какой-то функции не хватает, мы её добавим.', projects: 'Проекты', search: 'Поиск проектов', site: 'Сайт', releases: 'Релизы', close: 'Закрыть', empty: 'Ничего не найдено. Попробуйте другой запрос.', loading: 'Загрузка...', fail: 'Не удалось загрузить README.md. Откройте репозиторий: ', dberr: 'Не удалось загрузить database.js. Файл должен лежать в корне репозитория и называться именно database.js.' },
    de: { tagline: 'Edytor Studio entwickelt Apps und Tools: Programme für Android TV, Dienstprogramme, Emulatoren und mehr. Open Source, klare Oberflächen, nichts Überflüssiges.', missing: 'Fehlt eine Funktion? Wir fügen sie hinzu.', projects: 'Projekte', search: 'Projekte suchen', site: 'Website', releases: 'Releases', close: 'Schließen', empty: 'Nichts gefunden. Versuche eine andere Suche.', loading: 'Wird geladen...', fail: 'README.md konnte nicht geladen werden. Repository öffnen: ', dberr: 'database.js konnte nicht geladen werden. Die Datei muss im Stammverzeichnis des Repositorys liegen und genau so heißen.' },
    es: { tagline: 'Edytor Studio desarrolla aplicaciones y herramientas: programas para Android TV, utilidades, emuladores y más. Código abierto, interfaces limpias, nada de más.', missing: '¿Falta alguna función? La añadiremos.', projects: 'Proyectos', search: 'Buscar proyectos', site: 'Sitio web', releases: 'Versiones', close: 'Cerrar', empty: 'No se encontró nada. Prueba otra búsqueda.', loading: 'Cargando...', fail: 'No se pudo cargar README.md. Abre el repositorio: ', dberr: 'No se pudo cargar database.js. El archivo debe estar en la raíz del repositorio y llamarse exactamente database.js.' },
    pl: { tagline: 'Edytor Studio tworzy aplikacje i narzędzia: programy na Android TV, narzędzia, emulatory i nie tylko. Otwarty kod, czyste interfejsy, nic zbędnego.', missing: 'Brakuje jakiejś funkcji? Dodamy ją.', projects: 'Projekty', search: 'Szukaj projektów', site: 'Strona', releases: 'Wydania', close: 'Zamknij', empty: 'Nic nie znaleziono. Spróbuj innego zapytania.', loading: 'Ładowanie...', fail: 'Nie udało się wczytać README.md. Otwórz repozytorium: ', dberr: 'Nie udało się wczytać database.js. Plik musi leżeć w katalogu głównym repozytorium i nazywać się dokładnie database.js.' }
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

function start() {
  var I = window.I18N;
  var dbError = !Array.isArray(window.PROJECTS);
  var data = dbError ? [] : window.PROJECTS;
  var $ = function (s) { return document.querySelector(s); };
  var list = $('#list'), q = $('#q'), count = $('#count'), empty = $('#empty');
  var view = $('#view'), doc = $('#doc');

  function parseRepo(url) {
    var m = (url || '').match(/github\.com\/([^\/]+)\/([^\/#?]+)/);
    return m ? { o: m[1], r: m[2].replace(/\.git$/, '') } : null;
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function link(text, href, cls) {
    var a = el('a', 'btn ' + (cls || ''), text);
    a.href = href; a.target = '_blank'; a.rel = 'noopener';
    return a;
  }

  function card(p) {
    var c = el('article', 'card');
    var t = el('div', 'thumb');
    var ph = function () {
      t.textContent = '';
      t.appendChild(el('span', 'ph', (I.loc(p.name) || '?').charAt(0).toUpperCase()));
    };
    if (p.icon) {
      var img = el('img');
      img.src = p.icon; img.alt = ''; img.loading = 'lazy';
      img.onerror = ph;
      t.appendChild(img);
    } else ph();
    c.appendChild(t);

    var b = el('div', 'body');
    b.appendChild(el('h3', '', I.loc(p.name)));
    b.appendChild(el('p', '', I.loc(p.description)));
    var a = el('div', 'actions');
    var repo = parseRepo(p.github);

    if (p.site) a.appendChild(link(I.t('site'), p.site, 'main'));
    else if (repo) {
      var rb = el('button', 'btn main', 'README');
      rb.type = 'button';
      rb.onclick = function () { openReadme(p, repo); };
      a.appendChild(rb);
    }
    if (p.github) a.appendChild(link('GitHub', p.github));
    if (repo) a.appendChild(link(I.t('releases'), 'https://github.com/' + repo.o + '/' + repo.r + '/releases'));
    b.appendChild(a);
    c.appendChild(b);
    return c;
  }

  var text = data.map(function (p) {
    return (I.all(p.name) + ' ' + I.all(p.description) + ' ' + (p.tags || []).join(' ')).toLowerCase();
  });

  function render() {
    var s = q.value.trim().toLowerCase(), n = 0;
    list.textContent = '';
    data.forEach(function (p, i) {
      if (!s || text[i].indexOf(s) !== -1) { list.appendChild(card(p)); n++; }
    });
    count.textContent = n + ' / ' + data.length;
    empty.textContent = I.t(dbError ? 'dberr' : 'empty');
    empty.hidden = n > 0;
  }

  var timer;
  q.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(render, 120); });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== q) { e.preventDefault(); q.focus(); }
    if (e.key === 'Escape') closeView();
  });

  /* README (Markdown + базовий HTML з README) */
  function md(s, base, repoUrl) {
    var esc = function (t) { return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
    var q = function (t) { return t.replace(/"/g, '&quot;'); };
    var blocks = [];
    var keep = function (h) { blocks.push(h); return '\u0000' + (blocks.length - 1) + '\u0000'; };
    var abs = function (u) { return /^(https?:|mailto:)/i.test(u); };
    var imgUrl = function (u) { return (abs(u) ? u : base + u.replace(/^\.?\//, '')).replace(/"/g, '%22'); };
    var linkUrl = function (u) {
      if (!abs(u)) u = u.charAt(0) === '#' ? repoUrl + u : repoUrl + '/blob/HEAD/' + u.replace(/^\.?\//, '');
      return u.replace(/"/g, '%22');
    };

    /* 1. блоки коду */
    s = s.replace(/```[^\n]*\n([\s\S]*?)```/g, function (_, c) { return '\n' + keep('<pre><code>' + esc(c) + '</code></pre>') + '\n'; });

    /* 2. HTML з README: img, a, br, h1-h6 підтримуємо, решту тегів прибираємо */
    s = s.replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<img\b[^>]*>/gi, function (t) {
        var src = (t.match(/\bsrc=["']([^"']+)["']/i) || [])[1];
        if (!src) return '';
        var alt = (t.match(/\balt=["']([^"']*)["']/i) || [])[1] || '';
        var h = (t.match(/\bheight=["']?(\d{1,3})/i) || [])[1];
        var w = (t.match(/\bwidth=["']?(\d{1,3})/i) || [])[1];
        var st = (h ? 'height:' + h + 'px;' : '') + (w ? 'width:' + w + 'px;' : '');
        return keep('<img src="' + esc(imgUrl(src)) + '" alt="' + q(esc(alt)) + '"' + (st ? ' style="' + st + '"' : '') + '>');
      })
      .replace(/<a\b[^>]*?\bhref=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, function (_, h, c) { return '[' + c.replace(/\s+/g, ' ').trim() + '](' + h + ')'; })
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, function (_, n, c) { return '\n' + '######'.slice(0, +n) + ' ' + c.replace(/<[^>]*>/g, '').trim() + '\n'; })
      .replace(/<\/?[a-z][^>]*>/gi, '');

    s = esc(s);

    /* 3. рядкові елементи */
    var inl = function (t) {
      return t.replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g, function (_, a, u) { return keep('<img alt="' + q(a) + '" src="' + imgUrl(u) + '">'); })
        .replace(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g, function (_, a, u) { return '<a href="' + linkUrl(u) + '" target="_blank" rel="noopener">' + a + '</a>'; })
        .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
        .replace(/\*([^*]+)\*/g, '<i>$1</i>');
    };

    /* 4. блоки: заголовки, списки, таблиці, цитати */
    var cells = function (l) { return l.trim().replace(/^\||\|$/g, '').split('|').map(function (c) { return c.trim(); }); };
    var sep = /^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/;
    var lines = s.split('\n'), out = [], list = null, para = [];
    var flush = function () { if (para.length) { out.push('<p>' + inl(para.join(' ')) + '</p>'); para = []; } };
    var close = function () { if (list) { out.push('</' + list + '>'); list = null; } };
    var cell = function (tag) { return function (c) { return '<' + tag + '>' + inl(c) + '</' + tag + '>'; }; };

    for (var i = 0; i < lines.length; i++) {
      var l = lines[i], m;
      if ((m = l.match(/^\u0000(\d+)\u0000$/)) && /^<pre>/.test(blocks[m[1]])) { flush(); close(); out.push(blocks[m[1]]); }
      else if (l.indexOf('|') !== -1 && i + 1 < lines.length && lines[i + 1].indexOf('|') !== -1 && sep.test(lines[i + 1])) {
        flush(); close();
        var t = '<div class="tw"><table><thead><tr>' + cells(l).map(cell('th')).join('') + '</tr></thead><tbody>';
        i += 2;
        while (i < lines.length && lines[i].trim() && lines[i].indexOf('|') !== -1) { t += '<tr>' + cells(lines[i]).map(cell('td')).join('') + '</tr>'; i++; }
        i--;
        out.push(t + '</tbody></table></div>');
      }
      else if ((m = l.match(/^(#{1,6})\s+(.*)/))) { flush(); close(); out.push('<h' + m[1].length + '>' + inl(m[2]) + '</h' + m[1].length + '>'); }
      else if (/^&gt;/.test(l)) {
        flush(); close();
        var bq = [];
        while (i < lines.length && /^&gt;/.test(lines[i])) { bq.push(lines[i].replace(/^&gt;\s?/, '')); i++; }
        i--;
        var head = '', a = (bq[0] || '').match(/^\[!(\w+)\]\s*(.*)$/);
        if (a) { head = '<b>' + a[1].charAt(0) + a[1].slice(1).toLowerCase() + '</b><br>'; bq[0] = a[2]; }
        out.push('<blockquote>' + head + inl(bq.join(' ').trim()) + '</blockquote>');
      }
      else if ((m = l.match(/^\s*([-*+]|\d+[.)])\s+(.*)/))) {
        flush();
        var tag = /\d/.test(m[1]) ? 'ol' : 'ul';
        if (list !== tag) { close(); out.push('<' + tag + '>'); list = tag; }
        out.push('<li>' + inl(m[2]) + '</li>');
      }
      else if (/^\s*(---+|\*\*\*+|___+)\s*$/.test(l)) { flush(); close(); out.push('<hr>'); }
      else if (!l.trim()) { flush(); close(); }
      else { close(); para.push(l.trim()); }
    }
    flush(); close();
    return out.join('').replace(/\u0000(\d+)\u0000/g, function (_, n) { return blocks[n]; });
  }

  function openReadme(p, repo) {
    var base = 'https://raw.githubusercontent.com/' + repo.o + '/' + repo.r + '/HEAD/';
    doc.textContent = I.t('loading');
    view.hidden = false;
    document.body.classList.add('lock');
    fetch(base + 'README.md')
      .then(function (r) { if (!r.ok) throw 0; return r.text(); })
      .then(function (t) { doc.innerHTML = md(t, base, 'https://github.com/' + repo.o + '/' + repo.r); })
      .catch(function () {
        doc.textContent = I.t('fail');
        doc.appendChild(link('GitHub', p.github));
      });
  }

  function closeView() { view.hidden = true; document.body.classList.remove('lock'); }
  $('#close').onclick = closeView;
  view.addEventListener('click', function (e) { if (e.target === view) closeView(); });

  var sel = $('#lang');
  Object.keys(I.names).forEach(function (k) {
    var o = el('option', '', I.names[k]); o.value = k; sel.appendChild(o);
  });
  I.onchange = render;
  I.init();
  sel.value = I.lang;
  sel.onchange = function () { I.set(sel.value); };
  render();
}

/* Завантаження database.js з кореня сайту (з обходом кешу), потім запуск */
(function () {
  var s = document.createElement('script');
  s.src = 'database.js?v=' + Date.now();
  s.onload = s.onerror = start;
  document.head.appendChild(s);
})();
