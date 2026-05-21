// Theme Manager — переключение тёмной/светлой темы
class ThemeManager {
  constructor() {
    this.STORAGE_KEY = 'warpath-theme';
    this.DARK_THEME = 'dark';
    this.LIGHT_THEME = 'light';
    this.init();
  }

  init() {
    // Загружаем сохранённую тему или используем тёмную по умолчанию
    const savedTheme = localStorage.getItem(this.STORAGE_KEY) || this.DARK_THEME;
    this.setTheme(savedTheme);
    this.createThemeToggle();
  }

  setTheme(theme) {
    const root = document.documentElement;
    
    if (theme === this.LIGHT_THEME) {
      // Светлая тема
      root.style.setProperty('--bg', '#f5f3f0');
      root.style.setProperty('--bg2', '#ede9e4');
      root.style.setProperty('--bg3', '#e5dfd8');
      root.style.setProperty('--panel', '#f0ebe4');
      root.style.setProperty('--border', 'rgba(100,100,100,0.2)');
      root.style.setProperty('--border2', 'rgba(100,100,100,0.35)');
      root.style.setProperty('--text', '#1a1a1a');
      root.style.setProperty('--dim', '#4a4a4a');
      root.style.setProperty('--muted', '#6a6a6a');
      
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      // Тёмная тема (по умолчанию)
      root.style.setProperty('--bg', '#07080a');
      root.style.setProperty('--bg2', '#0b0d10');
      root.style.setProperty('--bg3', '#0f1215');
      root.style.setProperty('--panel', '#131720');
      root.style.setProperty('--border', 'rgba(180,150,60,0.14)');
      root.style.setProperty('--border2', 'rgba(200,165,70,0.32)');
      root.style.setProperty('--text', '#d8d0bc');
      root.style.setProperty('--dim', '#8a8478');
      root.style.setProperty('--muted', '#5a5e6a');
      
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }

    localStorage.setItem(this.STORAGE_KEY, theme);
    this.updateToggleButton(theme);
  }

  createThemeToggle() {
    // Ищем место для кнопки в навигации
    const navRight = document.querySelector('.nav-right');
    if (!navRight) return;

    // Проверяем, не создана ли уже кнопка
    if (document.getElementById('theme-toggle')) return;

    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.className = 'theme-toggle-btn';
    btn.title = 'Переключить тему';
    btn.setAttribute('aria-label', 'Переключить тему');
    
    const currentTheme = localStorage.getItem(this.STORAGE_KEY) || this.DARK_THEME;
    btn.textContent = currentTheme === this.DARK_THEME ? '☀️' : '🌙';

    btn.addEventListener('click', () => {
      const theme = localStorage.getItem(this.STORAGE_KEY) || this.DARK_THEME;
      const newTheme = theme === this.DARK_THEME ? this.LIGHT_THEME : this.DARK_THEME;
      this.setTheme(newTheme);
    });

    // Вставляем перед кнопкой AI Chat
    const aiBtn = navRight.querySelector('.nav-ai-btn');
    if (aiBtn) {
      navRight.insertBefore(btn, aiBtn);
    } else {
      navRight.appendChild(btn);
    }
  }

  updateToggleButton(theme) {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.textContent = theme === this.DARK_THEME ? '☀️' : '🌙';
    }
  }
}

// Инициализация при загрузке
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
  });
} else {
  new ThemeManager();
}
