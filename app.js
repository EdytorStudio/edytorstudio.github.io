(function () {
  var I = window.I18N;
  var data = window.PROJECTS || [];
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
    if (p.icon) {
      var img = el('img');
      img.src = p.icon; img.alt = ''; img.loading = 'lazy';
      img.onerror = function () { t.style.display = 'none'; };
      t.appendChild(img);
    } else t.style.display = 'none';
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
    empty.hidden = n > 0;
  }

  var timer;
  q.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(render, 120); });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== q) { e.preventDefault(); q.focus(); }
    if (e.key === 'Escape') closeView();
  });

  /* README (Markdown) */
  function md(s, base) {
    var esc = function (t) { return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
    var blocks = [];
    s = s.replace(/```[^\n]*\n([\s\S]*?)```/g, function (_, c) {
      blocks.push('<pre><code>' + esc(c) + '</code></pre>');
      return '\u0000' + (blocks.length - 1) + '\u0000';
    });
    s = esc(s.replace(/<!--[\s\S]*?-->/g, '').replace(/<\/?[a-z][^>]*>/gi, ''));
    var url = function (u) {
      u = /^(https?:|mailto:|#)/.test(u) ? u : base + u.replace(/^\.?\//, '');
      return u.replace(/"/g, '%22');
    };
    var inl = function (t) {
      return t.replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g, function (_, a, u) { return '<img alt="' + a + '" src="' + url(u) + '">'; })
        .replace(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g, function (_, a, u) { return '<a href="' + url(u) + '" target="_blank" rel="noopener">' + a + '</a>'; })
        .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
        .replace(/\*([^*]+)\*/g, '<i>$1</i>');
    };
    var out = [], ul = false, para = [];
    var flush = function () { if (para.length) { out.push('<p>' + inl(para.join(' ')) + '</p>'); para = []; } };
    var close = function () { if (ul) { out.push('</ul>'); ul = false; } };
    s.split('\n').forEach(function (l) {
      var m;
      if ((m = l.match(/^\u0000(\d+)\u0000$/))) { flush(); close(); out.push(blocks[m[1]]); }
      else if ((m = l.match(/^(#{1,6})\s+(.*)/))) { flush(); close(); out.push('<h' + m[1].length + '>' + inl(m[2]) + '</h' + m[1].length + '>'); }
      else if ((m = l.match(/^\s*[-*+]\s+(.*)/))) { flush(); if (!ul) { out.push('<ul>'); ul = true; } out.push('<li>' + inl(m[1]) + '</li>'); }
      else if ((m = l.match(/^&gt;\s?(.*)/))) { flush(); close(); out.push('<blockquote>' + inl(m[1]) + '</blockquote>'); }
      else if (/^\s*(---|\*\*\*)\s*$/.test(l)) { flush(); close(); out.push('<hr>'); }
      else if (!l.trim()) { flush(); close(); }
      else { close(); para.push(l.trim()); }
    });
    flush(); close();
    return out.join('');
  }

  function openReadme(p, repo) {
    var base = 'https://raw.githubusercontent.com/' + repo.o + '/' + repo.r + '/HEAD/';
    doc.textContent = I.t('loading');
    view.hidden = false;
    document.body.classList.add('lock');
    fetch(base + 'README.md')
      .then(function (r) { if (!r.ok) throw 0; return r.text(); })
      .then(function (t) { doc.innerHTML = md(t, base); })
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
})();
