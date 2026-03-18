/* nav.js — shared nav + ticker + footer
   ТРЕБУЕТ: i18n.js подключён ДО этого файла

   ИСПРАВЛЕНО:
   1. Убраны дублирующие стили .nav-hamburger из nav.js —
      они конфликтовали со стилями в style.css по специфичности
      и делали бургер прозрачным/невидимым.
      Теперь все стили бургера только в style.css.
   2. Убраны дублирующие медиа-запросы которые уже есть в style.css.
   3. Глобальные mobile-fixes перенесены в style.css (уже там есть).
*/
(function () {

  /* ── 1. Вставляем NAV + TICKER ── */
  document.body.insertAdjacentHTML('afterbegin', `
<nav class="nav" id="main-nav">
  <a class="nav-logo" href="index.html">WARPATH <span class="dot">GUIDE</span></a>
  <ul class="nav-links" id="nav-links-list">
    <li><a href="index.html"        data-i18n="nav.home"></a></li>
    <li><a href="unit-builder.html" data-i18n="nav.unit-builder"></a></li>
    <li><a href="army-builder.html" data-i18n="nav.army-builder"></a></li>
    <li><a href="tier-list.html"    data-i18n="nav.tier-list"></a></li>
    <li><a href="wiki.html"         data-i18n="nav.wiki"></a></li>
    <li><a href="daily.html"        data-i18n="nav.daily"></a></li>
    <li><a href="leaderboard.html"  data-i18n="nav.leaderboard"></a></li>
    <li><a href="ai-chat.html" class="nav-ai-link" data-i18n="nav.ai-chat"></a></li>
  </ul>
  <div class="nav-right">
    <a href="https://t.me/WarpathHub" target="_blank" class="nav-tg nav-tg-btn">✈ Telegram</a>
    <div id="nav-lang-switcher"></div>
    <button class="nav-hamburger" id="nav-hb" aria-label="Меню">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="nav-mobile-overlay" id="nav-overlay"></div>
<div class="nav-mobile-menu" id="nav-mobile">
  <div class="nav-mobile-head">
    <span style="font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:3px;color:var(--gold2)">⊕ WARPATH <span style="color:var(--orange)">GUIDE</span></span>
    <button class="nav-mobile-close" id="nav-mobile-close">✕</button>
  </div>
  <nav class="nav-mobile-links">
    <a href="index.html"        data-i18n="nav.home"></a>
    <a href="unit-builder.html" data-i18n="nav.unit-builder"></a>
    <a href="army-builder.html" data-i18n="nav.army-builder"></a>
    <a href="tier-list.html"    data-i18n="nav.tier-list"></a>
    <a href="wiki.html"         data-i18n="nav.wiki"></a>
    <a href="youtubers.html"    data-i18n="nav.youtubers"></a>
    <a href="donate-bar.html"   data-i18n="nav.donate-bar"></a>
    <a href="daily.html"        data-i18n="nav.daily"></a>
    <a href="leaderboard.html"  data-i18n="nav.leaderboard"></a>
    <a href="ai-chat.html"      data-i18n="nav.ai-chat" class="nav-mobile-ai"></a>
    <a href="https://t.me/WarpathHub" target="_blank" class="nav-mobile-tg">✈ Telegram</a>
  </nav>
  <div class="nav-mobile-lang" id="nav-mobile-lang"></div>
</div>

<div class="ticker-bar">
  <div class="ticker-lbl" data-i18n="ticker.label">НОВОСТИ</div>
  <div class="ticker-overflow">
    <div class="ticker-track" id="ticker-track"></div>
  </div>
</div>`);

  /* ── 2. Вставляем FOOTER ── */
  document.body.insertAdjacentHTML('beforeend', `
<div class="divider"></div>
<footer class="footer">
  <div class="footer-grid">
    <div>
      <div class="footer-logo">⊕ WARPATH GUIDE</div>
      <div class="footer-desc" data-i18n="footer.desc"></div>
      <div style="margin-top:1rem">
        <a href="https://t.me/WarpathHub" target="_blank" class="btn-tg" style="display:inline-flex">✈ Telegram</a>
      </div>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.tools"></h4>
      <ul>
        <li onclick="location.href='unit-builder.html'" data-i18n="nav.unit-builder"></li>
        <li onclick="location.href='army-builder.html'" data-i18n="nav.army-builder"></li>
        <li onclick="location.href='tier-list.html'"    data-i18n="nav.tier-list"></li>
        <li onclick="location.href='donate-bar.html'"   data-i18n="nav.donate-bar"></li>
        <li onclick="location.href='daily.html'"        data-i18n="nav.daily"></li>
        <li onclick="location.href='leaderboard.html'"  data-i18n="nav.leaderboard"></li>
        <li onclick="location.href='ai-chat.html'"      data-i18n="nav.ai-chat"></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.content"></h4>
      <ul>
        <li onclick="location.href='wiki.html'"      data-i18n="nav.wiki"></li>
        <li onclick="location.href='youtubers.html'" data-i18n="nav.youtubers"></li>
        <li onclick="location.href='index.html'"     data-i18n="nav.home"></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.community"></h4>
      <ul>
        <li onclick="window.open('https://t.me/WarpathHub','_blank')"    data-i18n="nav.telegram"></li>
        <li onclick="window.open('https://t.me/donatebar_bot','_blank')" data-i18n="footer.donate"></li>
        <li data-i18n="footer.suggest"></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span data-i18n="footer.copy"></span>
    <span data-i18n="footer.disclaimer"></span>
  </div>
</footer>

<button class="g-scroll-top" id="g-scroll-top" title="Наверх"
  onclick="window.scrollTo({top:0,behavior:'smooth'})">↑</button>`);

  /* ── 3. Инициализация ── */
  function initNav() {
    /* Lang switcher → desktop */
    const slot = document.getElementById('nav-lang-switcher');
    if (slot && typeof buildLangSwitcher === 'function') {
      slot.appendChild(buildLangSwitcher());
    }
    /* Lang switcher → мобильное меню */
    const mslot = document.getElementById('nav-mobile-lang');
    if (mslot && typeof buildLangSwitcher === 'function') {
      mslot.appendChild(buildLangSwitcher());
    }

    /* Активная ссылка */
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .nav-mobile-links a').forEach(a => {
      const h = (a.getAttribute('href') || '').split('/').pop();
      a.classList.toggle('active', h === page);
    });

    /* Hamburger */
    const hb      = document.getElementById('nav-hb');
    const mMenu   = document.getElementById('nav-mobile');
    const overlay = document.getElementById('nav-overlay');

    function openMobileMenu() {
      mMenu.classList.add('is-open');
      overlay.classList.add('is-open');
      hb.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    function closeMobileMenu() {
      mMenu.classList.remove('is-open');
      overlay.classList.remove('is-open');
      hb.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    if (hb)      hb.addEventListener('click', openMobileMenu);
    if (overlay) overlay.addEventListener('click', closeMobileMenu);
    const closeBtn = document.getElementById('nav-mobile-close');
    if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);

    /* Закрывать меню при навигации */
    if (mMenu) {
      mMenu.querySelectorAll('a').forEach(a => {
        if (!a.target) a.addEventListener('click', closeMobileMenu);
      });
    }

    /* Scroll-to-top */
    const stb = document.getElementById('g-scroll-top');
    if (stb) {
      window.addEventListener('scroll', () => {
        stb.classList.toggle('visible', window.scrollY > 350);
      }, { passive: true });
    }

    /* Переводы */
    if (typeof applyLang === 'function') applyLang();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }

})();
