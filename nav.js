/* nav.js — новая шапка с дропдаун меню
   ТРЕБУЕТ: i18n.js подключён ДО этого файла
*/
(function () {

  document.body.insertAdjacentHTML('afterbegin', `
<nav class="nav" id="main-nav">
  <a class="nav-logo" href="index.html">WARPATH <span class="dot">GUIDE</span></a>

  <ul class="nav-links" id="nav-links-list">

    <!-- Инструменты — дропдаун -->
    <li class="nav-dropdown">
      <span class="nav-drop-trigger" data-i18n="nav.tools">ИНСТРУМЕНТЫ</span>
      <div class="nav-drop-menu">
        <a href="unit-builder.html" data-i18n="nav.unit-builder">
          <span class="ndm-ico">⚔️</span>
          <span class="ndm-text"><b data-i18n="nav.unit-builder">Юнит-билдер</b><em>Калькулятор юнита</em></span>
        </a>
        <a href="army-builder.html" data-i18n="nav.army-builder">
          <span class="ndm-ico">🏗️</span>
          <span class="ndm-text"><b data-i18n="nav.army-builder">Сборщик армии</b><em>Боевая мощь армии</em></span>
        </a>
        <a href="donate-bar.html">
          <span class="ndm-ico">🍺</span>
          <span class="ndm-text"><b data-i18n="nav.donate-bar">Донатный Бар</b><em>Калькулятор напитков</em></span>
        </a>
      </div>
    </li>

    <!-- Ресурсы — дропдаун -->
    <li class="nav-dropdown">
      <span class="nav-drop-trigger" data-i18n="nav.resources">РЕСУРСЫ</span>
      <div class="nav-drop-menu">
        <a href="wiki.html">
          <span class="ndm-ico">📖</span>
          <span class="ndm-text"><b data-i18n="nav.wiki">Вики</b><em>База знаний игры</em></span>
        </a>
        <a href="tier-list.html">
          <span class="ndm-ico">🎖️</span>
          <span class="ndm-text"><b data-i18n="nav.tier-list">Тир-лист</b><em>Рейтинг юнитов</em></span>
        </a>
        <a href="leaderboard.html">
          <span class="ndm-ico">🏆</span>
          <span class="ndm-text"><b data-i18n="nav.leaderboard">Таблица лидеров</b><em>Топ игроков</em></span>
        </a>
        <a href="youtubers.html">
          <span class="ndm-ico">▶</span>
          <span class="ndm-text"><b data-i18n="nav.youtubers">Блогеры</b><em>YouTube контент</em></span>
        </a>
      </div>
    </li>

    <li><a href="daily.html" data-i18n="nav.daily">ЕЖЕДНЕВНО</a></li>
    <li><a href="community.html" data-i18n="nav.community">К СООБЩЕСТВУ</a></li>

  </ul>

  <div class="nav-right">
    <a href="ai-chat.html" class="nav-ai-btn">
      <span class="nav-ai-plus">+</span>
      <span data-i18n="nav.ai-chat">AI ПОМОЩНИК</span>
      <span class="nav-ai-badge">NEW</span>
    </a>
    <div id="nav-lang-switcher"></div>
    <a href="https://t.me/WarpathHub" target="_blank" class="nav-tg-icon" title="Telegram">✈</a>
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
    <div class="nml-section">ИНСТРУМЕНТЫ</div>
    <a href="unit-builder.html"  data-i18n="nav.unit-builder">⚔️ Юнит-билдер</a>
    <a href="army-builder.html"  data-i18n="nav.army-builder">🏗️ Сборщик армии</a>
    <a href="donate-bar.html"    data-i18n="nav.donate-bar">🍺 Донатный Бар</a>
    <div class="nml-section">РЕСУРСЫ</div>
    <a href="wiki.html"          data-i18n="nav.wiki">📖 Вики</a>
    <a href="tier-list.html"     data-i18n="nav.tier-list">🎖️ Тир-лист</a>
    <a href="leaderboard.html"   data-i18n="nav.leaderboard">🏆 Лидерборд</a>
    <a href="youtubers.html"     data-i18n="nav.youtubers">▶ Блогеры</a>
    <div class="nml-section">ПРОЧЕЕ</div>
    <a href="daily.html"         data-i18n="nav.daily">📅 Ежедневно</a>
    <a href="community.html"     data-i18n="nav.community">💬 Сообщество</a>
    <a href="ai-chat.html"       class="nav-mobile-ai">🤖 AI Помощник <span class="nav-ai-badge" style="font-size:.55rem">NEW</span></a>
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
        <li onclick="location.href='community.html'"    data-i18n="nav.community"></li>
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

  function initNav() {
    const slot = document.getElementById('nav-lang-switcher');
    if (slot && typeof buildLangSwitcher === 'function') slot.appendChild(buildLangSwitcher());
    const mslot = document.getElementById('nav-mobile-lang');
    if (mslot && typeof buildLangSwitcher === 'function') mslot.appendChild(buildLangSwitcher());

    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .nav-mobile-links a').forEach(a => {
      const h = (a.getAttribute('href') || '').split('/').pop();
      a.classList.toggle('active', h === page);
    });

    /* Дропдаун — открытие по клику/hover */
    document.querySelectorAll('.nav-dropdown').forEach(dd => {
      const trigger = dd.querySelector('.nav-drop-trigger');
      if (trigger) {
        trigger.addEventListener('click', () => {
          const isOpen = dd.classList.contains('open');
          document.querySelectorAll('.nav-dropdown.open').forEach(o => o.classList.remove('open'));
          if (!isOpen) dd.classList.add('open');
        });
      }
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('.nav-dropdown')) {
        document.querySelectorAll('.nav-dropdown.open').forEach(o => o.classList.remove('open'));
      }
    });

    const hb = document.getElementById('nav-hb');
    const mMenu = document.getElementById('nav-mobile');
    const overlay = document.getElementById('nav-overlay');
    function openMobileMenu() { mMenu.classList.add('is-open'); overlay.classList.add('is-open'); hb.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
    function closeMobileMenu() { mMenu.classList.remove('is-open'); overlay.classList.remove('is-open'); hb.classList.remove('is-open'); document.body.style.overflow = ''; }
    if (hb) hb.addEventListener('click', openMobileMenu);
    if (overlay) overlay.addEventListener('click', closeMobileMenu);
    const closeBtn = document.getElementById('nav-mobile-close');
    if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
    if (mMenu) mMenu.querySelectorAll('a').forEach(a => { if (!a.target) a.addEventListener('click', closeMobileMenu); });

    const stb = document.getElementById('g-scroll-top');
    if (stb) window.addEventListener('scroll', () => { stb.classList.toggle('visible', window.scrollY > 350); }, { passive: true });

    if (typeof applyLang === 'function') applyLang();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initNav);
  else initNav();
})();
