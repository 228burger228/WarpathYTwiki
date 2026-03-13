/* nav.js — shared nav + ticker + footer
   ТРЕБУЕТ: i18n.js подключён ДО этого файла
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
    <li><a href="youtubers.html"    data-i18n="nav.youtubers"></a></li>
    <li><a href="donate-bar.html"   data-i18n="nav.donate-bar"></a></li>
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
    <a href="https://t.me/WarpathHub" target="_blank" class="nav-mobile-tg">✈ Telegram</a>
  </nav>
  <div class="nav-mobile-lang" id="nav-mobile-lang"></div>
</div>

<style>
/* ═══════════════════════════════════════
   NAV STYLES
   ═══════════════════════════════════════ */
.nav {
  position: fixed; top: 0; width: 100%; z-index: 900;
  background: rgba(7,8,10,.97);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  gap: .5rem;
  box-sizing: border-box;
}
.nav-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 3px;
  color: var(--gold2);
  display: flex;
  align-items: center;
  gap: .4rem;
  flex-shrink: 0;
  text-decoration: none;
  white-space: nowrap;
}
.nav-logo::before { content: '⊕'; font-size: .85rem; color: var(--gold); }
.nav-logo .dot { color: var(--orange); }

.nav-links {
  display: flex;
  list-style: none;
  margin: 0; padding: 0;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.nav-links li { flex-shrink: 0; }
.nav-links a {
  display: block;
  padding: 0 .6rem;
  height: 56px;
  line-height: 56px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--muted);
  border-bottom: 2px solid transparent;
  transition: all .18s;
  white-space: nowrap;
  text-decoration: none;
}
.nav-links a:hover,
.nav-links a.active { color: var(--gold2); border-bottom-color: var(--gold); }

.nav-right {
  display: flex;
  align-items: center;
  gap: .4rem;
  flex-shrink: 0;
}
.nav-tg-btn {
  display: flex;
  align-items: center;
  gap: .3rem;
  background: rgba(41,182,246,.1);
  border: 1px solid rgba(41,182,246,.25);
  color: #5bb8f5;
  padding: .28rem .65rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all .18s;
  text-decoration: none;
  white-space: nowrap;
}
.nav-tg-btn:hover { background: rgba(41,182,246,.2); }

/* Lang switcher */
.lang-switcher {
  display: flex;
  gap: 2px;
  align-items: center;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 7px;
  padding: 2px;
  flex-shrink: 0;
}
.lang-btn {
  background: transparent;
  border: none;
  border-radius: 5px;
  color: var(--muted);
  font-size: .65rem;
  font-weight: 700;
  padding: 3px 5px;
  cursor: pointer;
  transition: all .15s;
  white-space: nowrap;
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: .5px;
  line-height: 1;
}
.lang-btn:hover { background: rgba(255,255,255,.08); color: var(--text); }
.lang-btn.active { background: var(--gold); color: #000; }

/* Hamburger */
.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  padding: 7px 6px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: transparent;
  flex-shrink: 0;
}
.nav-hamburger span {
  display: block;
  width: 18px; height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all .22s;
}
.nav-hamburger.is-open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.nav-hamburger.is-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.nav-hamburger.is-open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* Mobile overlay */
.nav-mobile-overlay {
  display: none;
  position: fixed; inset: 0;
  background: rgba(0,0,0,.65);
  z-index: 1000;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}
.nav-mobile-overlay.is-open { display: block; }

/* Mobile drawer */
.nav-mobile-menu {
  position: fixed;
  top: 0; right: -290px;
  width: 270px; height: 100vh;
  background: #0b0d10;
  border-left: 1px solid var(--border);
  z-index: 1001;
  transition: right .28s cubic-bezier(.4,0,.2,1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overscroll-behavior: contain;
}
.nav-mobile-menu.is-open { right: 0; }

.nav-mobile-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .9rem 1.2rem;
  border-bottom: 1px solid var(--border);
  min-height: 56px;
  flex-shrink: 0;
}
.nav-mobile-close {
  background: none;
  border: 1px solid var(--border);
  color: var(--muted);
  width: 28px; height: 28px;
  border-radius: 5px;
  cursor: pointer;
  font-size: .85rem;
  display: flex; align-items: center; justify-content: center;
  transition: all .15s;
}
.nav-mobile-close:hover { border-color: var(--gold); color: var(--gold); }

.nav-mobile-links {
  display: flex;
  flex-direction: column;
  padding: .4rem 0;
  flex: 1;
}
.nav-mobile-links a {
  display: block;
  padding: .7rem 1.3rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .85rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--muted);
  border-left: 3px solid transparent;
  transition: all .15s;
  text-decoration: none;
}
.nav-mobile-links a:hover,
.nav-mobile-links a.active {
  color: var(--gold2);
  border-left-color: var(--gold);
  background: rgba(200,150,28,.05);
}
.nav-mobile-tg {
  color: #5bb8f5 !important;
  border-left-color: rgba(41,182,246,.4) !important;
  margin-top: .3rem;
  border-top: 1px solid var(--border);
}

.nav-mobile-lang {
  padding: .9rem 1.2rem;
  border-top: 1px solid var(--border);
  flex-shrink: 0;
}
.nav-mobile-lang .lang-switcher {
  width: 100%;
  justify-content: stretch;
}
.nav-mobile-lang .lang-btn {
  flex: 1;
  text-align: center;
  padding: 5px 0;
  font-size: .72rem;
}

/* ═══════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════ */
@media (max-width: 1180px) {
  .nav-links a { padding: 0 .45rem; font-size: .66rem; letter-spacing: .7px; }
}
@media (max-width: 960px) {
  .nav-tg-btn { display: none; }
  .nav-links a { padding: 0 .38rem; font-size: .63rem; }
}
@media (max-width: 768px) {
  .nav-links { display: none !important; }
  .nav-hamburger { display: flex !important; }
  #nav-lang-switcher { display: none; }
  .nav { padding: 0 1rem; }
}

/* ═══════════════════════════════════════
   TICKER
   ═══════════════════════════════════════ */
.ticker-bar {
  margin-top: 56px;
  background: linear-gradient(90deg,#1a0404,#2e0808,#1a0404);
  border-bottom: 1px solid var(--border);
  height: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* ═══════════════════════════════════════
   GLOBAL MOBILE FIXES (все страницы)
   ═══════════════════════════════════════ */
@media (max-width: 768px) {
  /* Hero */
  .hero-wrap   { padding: 5rem 1rem 2rem !important; min-height: auto !important; }
  .hero h1     { font-size: clamp(2.4rem,8vw,3.5rem) !important; }
  .hero-desc   { font-size: .88rem !important; }
  .hero-stats  { grid-template-columns: repeat(2,1fr) !important; }
  .hero-btns   { flex-direction: column !important; }
  .hero-btns .btn { width: 100%; text-align: center; box-sizing: border-box; }
  .patch-banner { flex-direction: column; gap: .5rem; }
  .patch-soon   { align-self: flex-start; }

  /* Nav cards */
  .nav-cards { grid-template-columns: repeat(2,1fr) !important; }

  /* Community */
  .community-wrap  { grid-template-columns: 1fr !important; padding: 1.4rem 1rem !important; }
  .community-stats { flex-direction: row !important; flex-wrap: wrap; gap: 1.2rem; align-items: flex-start !important; }

  /* Donate */
  .donate-wrap { grid-template-columns: 1fr !important; gap: 1.2rem !important; }

  /* Spacing */
  .section    { padding: 2.5rem 0 !important; }
  .section-sm { padding: 1.8rem 0 !important; }
  .wrap       { padding: 0 1rem !important; }

  /* Tier list */
  .tier-row-wrap    { flex-direction: column !important; min-height: auto !important; }
  .tier-letter      { width: 100% !important; height: 38px !important; border-right: none !important; border-bottom: 1px solid var(--border); }
  .tier-cards-row   { padding: .5rem !important; }
  .t-card           { min-width: 100px !important; }

  /* Army builder */
  .army-layout  { grid-template-columns: 1fr !important; }
  .army-totals  { position: static !important; }
  .army-grid    { grid-template-columns: repeat(2,1fr) !important; }

  /* Unit builder */
  .builder-layout { grid-template-columns: 1fr !important; }

  /* Wiki */
  .wiki-layout  { grid-template-columns: 1fr !important; }
  .wiki-sidebar { position: static !important; }
  .wiki-wrap    { grid-template-columns: 1fr !important; }

  /* YouTubers */
  .yt-page-grid { grid-template-columns: 1fr !important; }

  /* Donate bar */
  .db-tiers { grid-template-columns: 1fr !important; }
  .db-page  { padding: 1.5rem 1rem 4rem !important; }

  /* Modals */
  .modal-bg  { padding: .75rem !important; align-items: flex-end !important; }
  .modal-box { max-height: 90vh !important; border-radius: 8px 8px 0 0 !important; }

  /* Tables */
  table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }

  /* Footer */
  .footer-grid   { grid-template-columns: 1fr 1fr !important; gap: 1.5rem !important; }
  .footer-bottom { flex-direction: column !important; text-align: center !important; gap: .4rem !important; }
}

@media (max-width: 480px) {
  .nav-cards { grid-template-columns: 1fr !important; }
  .army-grid { grid-template-columns: 1fr !important; }
  .footer-grid { grid-template-columns: 1fr !important; }
  .hero-stats { grid-template-columns: repeat(2,1fr) !important; }
  .stat-grid  { grid-template-columns: 1fr !important; }
  .stat-row.full { grid-column: 1 !important; }
}

/* ═══════════════════════════════════════
   SCROLL TO TOP
   ═══════════════════════════════════════ */
.g-scroll-top {
  position: fixed;
  bottom: 1.5rem; right: 1.5rem;
  width: 40px; height: 40px;
  background: var(--gold);
  color: #000;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 799;
  transition: opacity .2s, transform .2s;
  box-shadow: 0 4px 12px rgba(200,150,28,.3);
}
.g-scroll-top.visible { display: flex; }
.g-scroll-top:hover { opacity: .85; transform: translateY(-2px); }
</style>

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
    /* Lang switcher → desktop nav */
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

    /* Hamburger логика */
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

    /* Применяем переводы */
    if (typeof applyLang === 'function') applyLang();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }

})();
