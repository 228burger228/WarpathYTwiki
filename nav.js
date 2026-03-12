/* Injects shared nav + ticker + footer into every page */
(function(){
  document.body.insertAdjacentHTML('afterbegin',`
<nav class="nav">
  <div class="nav-logo">WARPATH <span class="dot">GUIDE</span></div>
  <ul class="nav-links">
    <li><a href="index.html">Главная</a></li>
    <li><a href="unit-builder.html">Unit Builder</a></li>
    <li><a href="army-builder.html">Army Builder</a></li>
    <li><a href="tier-list.html">Тир-лист</a></li>
    <li><a href="wiki.html">Wiki</a></li>
    <li><a href="youtubers.html">YouTubers</a></li>
    <li><a href="donate-bar.html">🍺 Донатный бар</a></li>
  </ul>
  <div class="nav-right">
    <a href="https://t.me/WarpathHub" target="_blank" class="nav-tg">✈ Telegram</a>
  </div>
</nav>
<div class="ticker-bar">
  <div class="ticker-lbl">НОВОСТИ</div>
  <div class="ticker-overflow"><div class="ticker-track" id="ticker-track"></div></div>
</div>`);

  document.body.insertAdjacentHTML('beforeend',`
<div class="divider"></div>
<footer class="footer">
  <div class="footer-grid">
    <div>
      <div class="footer-logo">⊕ WARPATH GUIDE</div>
      <div class="footer-desc">Официальный ресурс русскоязычных блогеров Warpath: Ace Shooter. Гайды, инструменты, вики.</div>
      <div style="margin-top:1rem"><a href="https://t.me/WarpathHub" target="_blank" class="btn-tg" style="display:inline-flex">✈ Наш Telegram</a></div>
    </div>
    <div class="footer-col"><h4>Инструменты</h4><ul>
      <li onclick="location.href='unit-builder.html'">Unit Builder</li>
      <li onclick="location.href='army-builder.html'">Army Builder</li>
      <li onclick="location.href='tier-list.html'">Тир-лист</li>
      <li onclick="location.href='donate-bar.html'">🍺 Донатный бар</li>
    </ul></div>
    <div class="footer-col"><h4>Контент</h4><ul>
      <li onclick="location.href='wiki.html'">Wiki</li>
      <li onclick="location.href='youtubers.html'">YouTubers</li>
      <li onclick="location.href='index.html'">Главная</li>
    </ul></div>
    <div class="footer-col"><h4>Сообщество</h4><ul>
      <li><a href="https://t.me/WarpathHub" target="_blank">Telegram-чат</a></li>
      <li><a href="https://t.me/donatebar_bot" target="_blank">Донаты блогерам</a></li>
      <li>Предложить гайд</li>
    </ul></div>
  </div>
  <div class="footer-bottom">
    <span>© 2025–2026 Warpath Guide · Официальный ресурс блогеров</span>
    <span>Не является официальным сайтом Lilith Games</span>
  </div>
</footer>`);
})();
