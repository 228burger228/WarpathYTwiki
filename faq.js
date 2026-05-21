// FAQ система — поиск, фильтрация, аккордеон
class FAQSystem {
  constructor() {
    this.allQuestions = FAQ_DATA.questions;
    this.categories = FAQ_DATA.categories;
    this.filteredQuestions = [...this.allQuestions];
    this.activeCategory = null;
    this.searchTerm = '';
    this.expandedQuestions = new Set();
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderCategories();
    this.renderQuestions();
  }

  setupEventListeners() {
    const searchInput = document.getElementById('faq-search');
    const clearBtn = document.getElementById('faq-clear');
    const categoryBtns = document.querySelectorAll('.faq-category-btn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearFilters());
    }

    categoryBtns.forEach(btn => {
      btn.addEventListener('click', (e) => this.handleCategoryFilter(e.target.dataset.category));
    });
  }

  renderCategories() {
    const container = document.getElementById('faq-categories');
    if (!container) return;

    container.innerHTML = this.categories.map(cat => `
      <button class="faq-category-btn" data-category="${cat.id}">
        <span class="faq-cat-icon">${cat.icon}</span>
        <span class="faq-cat-name">${cat.name}</span>
        <span class="faq-cat-count">(${this.allQuestions.filter(q => q.category === cat.id).length})</span>
      </button>
    `).join('');

    // Переподключаем слушатели после рендера
    document.querySelectorAll('.faq-category-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleCategoryFilter(e.currentTarget.dataset.category));
    });
  }

  renderQuestions() {
    const container = document.getElementById('faq-questions');
    if (!container) return;

    if (this.filteredQuestions.length === 0) {
      container.innerHTML = '<div class="faq-no-results">Вопросы не найдены</div>';
      return;
    }

    container.innerHTML = this.filteredQuestions.map(q => `
      <div class="faq-item" data-id="${q.id}">
        <button class="faq-question" data-id="${q.id}">
          <span class="faq-q-text">${this.highlightSearch(q.question)}</span>
          <span class="faq-q-icon">▼</span>
        </button>
        <div class="faq-answer" style="display: none;">
          <div class="faq-answer-text">${this.highlightSearch(q.answer)}</div>
          <div class="faq-tags">
            ${q.tags.map(tag => `<span class="faq-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    // Подключаем слушатели аккордеона
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', (e) => this.toggleQuestion(e.currentTarget.dataset.id));
    });

    // Восстанавливаем развёрнутые вопросы
    this.expandedQuestions.forEach(id => {
      const item = document.querySelector(`[data-id="${id}"]`);
      if (item) {
        const answer = item.querySelector('.faq-answer');
        const btn = item.querySelector('.faq-question');
        if (answer) answer.style.display = 'block';
        if (btn) btn.classList.add('active');
      }
    });

    // Обновляем счётчик результатов
    const resultCount = document.getElementById('faq-result-count');
    if (resultCount) {
      resultCount.textContent = `${this.filteredQuestions.length} результатов`;
    }
  }

  handleSearch(term) {
    this.searchTerm = term.toLowerCase();
    this.applyFilters();
  }

  handleCategoryFilter(categoryId) {
    this.activeCategory = this.activeCategory === categoryId ? null : categoryId;
    
    // Обновляем активную кнопку
    document.querySelectorAll('.faq-category-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === this.activeCategory);
    });

    this.applyFilters();
  }

  applyFilters() {
    this.filteredQuestions = this.allQuestions.filter(q => {
      const matchesCategory = !this.activeCategory || q.category === this.activeCategory;
      const matchesSearch = !this.searchTerm || 
        q.question.toLowerCase().includes(this.searchTerm) ||
        q.answer.toLowerCase().includes(this.searchTerm) ||
        q.tags.some(tag => tag.toLowerCase().includes(this.searchTerm));
      
      return matchesCategory && matchesSearch;
    });

    this.renderQuestions();
  }

  toggleQuestion(id) {
    const item = document.querySelector(`[data-id="${id}"]`);
    if (!item) return;

    const answer = item.querySelector('.faq-answer');
    const btn = item.querySelector('.faq-question');
    const isOpen = answer.style.display === 'block';

    if (isOpen) {
      answer.style.display = 'none';
      btn.classList.remove('active');
      this.expandedQuestions.delete(id);
    } else {
      answer.style.display = 'block';
      btn.classList.add('active');
      this.expandedQuestions.add(id);
    }

    // Сохраняем состояние в sessionStorage
    sessionStorage.setItem('faq-expanded', JSON.stringify(Array.from(this.expandedQuestions)));
  }

  clearFilters() {
    this.searchTerm = '';
    this.activeCategory = null;
    this.expandedQuestions.clear();

    document.getElementById('faq-search').value = '';
    document.querySelectorAll('.faq-category-btn').forEach(btn => btn.classList.remove('active'));

    this.applyFilters();
  }

  highlightSearch(text) {
    if (!this.searchTerm) return text;
    
    const regex = new RegExp(`(${this.searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  new FAQSystem();
});
