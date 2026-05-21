/* nav.js — простое и надёжное меню */
(function () {
  // Вставляем навигацию в начало body
  document.body.insertAdjacentHTML('afterbegin', `
<nav class="nav">
  <a class="nav-logo" href="index.html">⊕ WARPATH <span class="nav-logo-guide">GUIDE</span></a>
  
  <div class="nav-center">
    <a href="unit-builder.html" class="nav-link">⚔ Unit Builder</a>
    <a href="army-builder.html" class="nav-link">🏗 Army Builder</a>
    <a href="wiki.html" class="nav-link">📖 Wiki</a>
    <a href="faq.html" class="nav-link">❓ FAQ</a>
    <a href="tier-list.html" class="nav-link">🎖 Tier List</a>
    <a href="youtubers.html" class="nav-link">▶ Youtubers</a>
    <a href="daily.html" class="nav-link">📅 Daily</a>
    <a href="community.html" class="nav-link">💬 Community</a>
  </div>
  
  <div class="nav-right">
    <a href="ai-chat.html" class="nav-ai-btn">🤖 AI Chat</a>
    <a href="https://t.me/WarpathHub" target="_blank" class="nav-tg-btn">✈ Telegram</a>
    <button class="nav-burger" id="nav-burger">☰</button>
  </div>
</nav>

<div class="nav-mobile" id="nav-mobile">
  <a href="unit-builder.html" class="nav-mobile-link">⚔ Unit Builder</a>
  <a href="army-builder.html" class="nav-mobile-link">🏗 Army Builder</a>
  <a href="wiki.html" class="nav-mobile-link">📖 Wiki</a>
  <a href="faq.html" class="nav-mobile-link">❓ FAQ</a>
  <a href="tier-list.html" class="nav-mobile-link">🎖 Tier List</a>
  <a href="youtubers.html" class="nav-mobile-link">▶ Youtubers</a>
  <a href="daily.html" class="nav-mobile-link">📅 Daily</a>
  <a href="community.html" class="nav-mobile-link">💬 Community</a>
  <a href="ai-chat.html" class="nav-mobile-link">🤖 AI Chat</a>
  <a href="https://t.me/WarpathHub" target="_blank" class="nav-mobile-link">✈ Telegram</a>
</div>

<div class="nav-overlay" id="nav-overlay"></div>
  `);

  // Вставляем footer в конец body
  document.body.insertAdjacentHTML('beforeend', `
<footer class="footer">
  <div class="footer-content">
    <div class="footer-col">
      <h3>⊕ WARPATH GUIDE</h3>
      <p>Русскоязычный гайд по игре Warpath</p>
      <a href="https://t.me/WarpathHub" target="_blank" class="footer-link">Telegram</a>
    </div>
    <div class="footer-col">
      <h4>Инструменты</h4>
      <a href="unit-builder.html" class="footer-link">Unit Builder</a>
      <a href="army-builder.html" class="footer-link">Army Builder</a>
      <a href="tier-list.html" class="footer-link">Tier List</a>
      <a href="donate-bar.html" class="footer-link">Donate Bar</a>
    </div>
    <div class="footer-col">
      <h4>Ресурсы</h4>
      <a href="wiki.html" class="footer-link">Wiki</a>
      <a href="youtubers.html" class="footer-link">Youtubers</a>
      <a href="leaderboard.html" class="footer-link">Leaderboard</a>
      <a href="daily.html" class="footer-link">Daily</a>
    </div>
    <div class="footer-col">
      <h4>Сообщество</h4>
      <a href="community.html" class="footer-link">Community</a>
      <a href="feedback.html" class="footer-link">Feedback</a>
      <a href="ai-chat.html" class="footer-link">AI Chat</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Warpath Guide. Все права защищены.</p>
  </div>
</footer>

<button class="scroll-top" id="scroll-top" title="Наверх">↑</button>
  `);

  // Инициализация
  function init() {
    // Определяем текущую страницу
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    
    // Подсвечиваем активную ссылку
    document.querySelectorAll('.nav-link, .nav-mobile-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      }
    });

    // Мобильное меню
    const burger = document.getElementById('nav-burger');
    const mobile = document.getElementById('nav-mobile');
    const overlay = document.getElementById('nav-overlay');

    burger.addEventListener('click', () => {
      mobile.classList.toggle('open');
      overlay.classList.toggle('open');
      document.body.style.overflow = mobile.classList.contains('open') ? 'hidden' : '';
    });

    overlay.addEventListener('click', () => {
      mobile.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    });

    document.querySelectorAll('.nav-mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobile.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Кнопка "Наверх"
    const scrollTop = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
      scrollTop.classList.toggle('visible', window.scrollY > 300);
    });

    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Запускаем когда DOM готов
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
