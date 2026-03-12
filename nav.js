/* nav.js — shared nav + ticker + footer + lang switcher */
(function(){

document.body.insertAdjacentHTML('afterbegin',`
<nav class="nav">
  <div class="nav-logo">WARPATH <span class="dot">GUIDE</span></div>
  <ul class="nav-links">
    <li><a href="index.html"        data-i18n="nav.home"></a></li>
    <li><a href="unit-builder.html" data-i18n="nav.unit-builder"></a></li>
    <li><a href="army-builder.html" data-i18n="nav.army-builder"></a></li>
    <li><a href="tier-list.html"    data-i18n="nav.tier-list"></a></li>
    <li><a href="wiki.html"         data-i18n="nav.wiki"></a></li>
    <li><a href="youtubers.html"    data-i18n="nav.youtubers"></a></li>
    <li><a href="donate-bar.html"   data-i18n="nav.donate-bar"></a></li>
  </ul>
  <div class="nav-right">
    <a href="https://t.me/WarpathHub" target="_blank" class="nav-tg" data-i18n="nav.telegram"></a>
    <div id="nav-lang-switcher"></div>
  </div>
</nav>
<style>
  .lang-switcher {
    display: flex; gap: 3px; align-items: center;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px; padding: 3px;
  }
  .lang-btn {
    background: transparent; border: none; border-radius: 5px;
    color: var(--muted); font-size: .72rem; font-weight: 600;
    padding: 3px 7px; cursor: pointer; transition: all .15s;
    white-space: nowrap; letter-spacing: .3px;
  }
  .lang-btn:hover { background: rgba(255,255,255,0.08); color: var(--text); }
  .lang-btn.active { background: var(--gold); color: #000; }
</style>
<div class="ticker-bar">
  <div class="ticker-lbl" data-i18n="ticker.label"></div>
  <div class="ticker-overflow"><div class="ticker-track" id="ticker-track"></div></div>
</div>`);

document.body.insertAdjacentHTML('beforeend',`
<div class="divider"></div>
<footer class="footer">
  <div class="footer-grid">
    <div>
      <div class="footer-logo">⊕ WARPATH GUIDE</div>
      <div class="footer-desc" data-i18n="footer.desc"></div>
      <div style="margin-top:1rem"><a href="https://t.me/WarpathHub" target="_blank" class="btn-tg" style="display:inline-flex">✈ Telegram</a></div>
    </div>
    <div class="footer-col"><h4 data-i18n="footer.tools"></h4><ul>
      <li onclick="location.href='unit-builder.html'" data-i18n="nav.unit-builder"></li>
      <li onclick="location.href='army-builder.html'" data-i18n="nav.army-builder"></li>
      <li onclick="location.href='tier-list.html'"    data-i18n="nav.tier-list"></li>
      <li onclick="location.href='donate-bar.html'"   data-i18n="nav.donate-bar"></li>
    </ul></div>
    <div class="footer-col"><h4 data-i18n="footer.content"></h4><ul>
      <li onclick="location.href='wiki.html'"       data-i18n="nav.wiki"></li>
      <li onclick="location.href='youtubers.html'"  data-i18n="nav.youtubers"></li>
      <li onclick="location.href='index.html'"      data-i18n="nav.home"></li>
    </ul></div>
    <div class="footer-col"><h4 data-i18n="footer.community"></h4><ul>
      <li><a href="https://t.me/WarpathHub"      target="_blank" data-i18n="nav.telegram"></a></li>
      <li><a href="https://t.me/donatebar_bot"   target="_blank" data-i18n="footer.donate"></a></li>
      <li data-i18n="footer.suggest"></li>
    </ul></div>
  </div>
  <div class="footer-bottom">
    <span data-i18n="footer.copy"></span>
    <span data-i18n="footer.disclaimer"></span>
  </div>
</footer>`);

/* вставить переключатель языка после рендера DOM */
document.addEventListener('DOMContentLoaded', () => {
  const slot = document.getElementById('nav-lang-switcher');
  if (slot && typeof buildLangSwitcher === 'function') {
    slot.appendChild(buildLangSwitcher());
  }
});

})();
