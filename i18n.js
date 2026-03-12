/* ════════════════════════════════════════════════════════
   i18n.js — система переводов Warpath Guide
   Языки: ru (по умолчанию) · en · vi
   
   Использование в HTML:
     <span data-i18n="nav.home"></span>
     <div data-i18n="hero.title"></div>
   
   Вызов из JS:
     t('nav.home')  → возвращает строку на текущем языке
   ════════════════════════════════════════════════════════ */

const TRANSLATIONS = {

  ru: {
    /* ── nav ── */
    'nav.home':        'Главная',
    'nav.unit-builder':'Unit Builder',
    'nav.army-builder':'Army Builder',
    'nav.tier-list':   'Тир-лист',
    'nav.wiki':        'Wiki',
    'nav.youtubers':   'YouTubers',
    'nav.donate-bar':  '🍺 Донатный бар',
    'nav.telegram':    '✈ Telegram',

    /* ── footer ── */
    'footer.tools':    'Инструменты',
    'footer.content':  'Контент',
    'footer.community':'Сообщество',
    'footer.desc':     'Официальный ресурс русскоязычных блогеров Warpath: Ace Shooter. Гайды, инструменты, вики.',
    'footer.copy':     '© 2025–2026 Warpath Guide · Официальный ресурс блогеров',
    'footer.disclaimer':'Не является официальным сайтом Lilith Games',
    'footer.suggest':  'Предложить гайд',
    'footer.donate':   'Донаты блогерам',

    /* ── ticker ── */
    'ticker.label':    'НОВОСТИ',

    /* ── index ── */
    'hero.badge':      'Официальный ресурс · RU · Патч 13.4',
    'hero.title1':     'ВСЁ ОБ',
    'hero.title2':     'WARPATH',
    'hero.title3':     'НА РУССКОМ',
    'hero.desc':       'Гайды, механики, исследования — объяснено понятным языком. Unit Builder, Army Builder, тир-листы, вики — всё в одном месте.',
    'hero.btn.builder':'⚔ Unit Builder',
    'hero.btn.wiki':   '📖 Wiki',
    'hero.stat.units': 'Типов юнитов',
    'hero.stat.patch': 'Актуальный патч',
    'hero.stat.bloggers':'Блогера',
    'hero.stat.lang':  'Язык',

    'section.nav-title':   'Быстрый доступ',
    'section.nav-tag':     '🗺 Разделы',
    'section.bloggers':    'Блогеры сообщества',
    'section.bloggers-sub':'Наведи — лента замирает. Нажми — перейдёшь на канал.',
    'section.all-bloggers':'Все блогеры →',
    'section.community':   'Сообщество',
    'section.tools-tag':   '⚙ Инструменты',
    'section.tools-title': 'Интерактивные калькуляторы',
    'section.tools-sub':   'Всё считает прямо в браузере — без регистрации и установки',

    'donate.title':    '🍺 Донатный Бар',
    'donate.desc':     'Введи количество кружек и бокалов которые у тебя есть на это открытие.',
    'donate.cups':     '🍺 Кружки',
    'donate.glasses':  '🥂 Бокалы',
    'donate.open-bot': '✈ Открыть бота',
    'donate.full-calc':'🧮 Полный калькулятор',

    'community.members':  'Участников',
    'community.rooms':    'Разделов чата',
    'community.lang':     'Только русский',
    'community.join':     '✈ Вступить в Telegram',
    'community.bloggers': '👥 Блогеры',

    /* ── youtubers ── */
    'yt.title':        'Блогеры сообщества',
    'yt.sub':          'Русскоязычные авторы, которые делают контент по Warpath: Ace Shooter',
    'yt.partner':      '✓ Партнёр',
    'yt.pending':      '✦ Скоро',
    'yt.partner-desc': '— официальный партнёр Lilith Games',
    'yt.pending-desc': '— ожидает подтверждения',
    'yt.latest':       'Последние видео',
    'yt.subs':         'подписчиков',
    'yt.videos':       'видео',
    'yt.guides':       'гайдов',
    'yt.star-note':    '✦ — блогер ещё не получил официальный статус партнёра, но уже является частью нашего сообщества.',

    /* ── wiki ── */
    'wiki.title':      'WIKI',
    'wiki.sub':        'Юниты, офицеры, механики — разрабатывается сообществом блогеров. Данные пополняются.',
    'wiki.units':      '🛡 Юниты',
    'wiki.officers':   '🎖 Офицеры',
    'wiki.mechanics':  '⚙ Механики',
    'wiki.economy':    '💰 Экономика',
    'wiki.coming-soon':'Скоро',

    /* ── donate bar page ── */
    'db.title':        '🍺 Донатный Бар',
    'db.sub':          'Введи количество кружек и бокалов которые у тебя есть на это открытие.',
    'db.calc-label':   'Расчёт на месяц',
    'db.cups-label':   'Пивных кружек (макс. учитывается 120)',
    'db.cups-hint':    '3 кружки = 1 бокал при расчёте',
    'db.glasses-label':'Бокалов',
    'db.open-bot':     '✈ Открыть бота в Telegram',
    'db.reset':        '↺ Сбросить',
    'db.tiers-title':  'Пороги открытия',
    'db.tier1-lbl':    'бесплатных',
    'db.tier1-sub':    '< 15 бокалов — копи кружки',
    'db.tier2-lbl':    'напитков',
    'db.tier2-sub':    '15–51 бокал (15 + 5)',
    'db.tier3-lbl':    'напитков',
    'db.tier3-sub':    '52+ бокала (65 + 5)',
  },

  en: {
    'nav.home':        'Home',
    'nav.unit-builder':'Unit Builder',
    'nav.army-builder':'Army Builder',
    'nav.tier-list':   'Tier List',
    'nav.wiki':        'Wiki',
    'nav.youtubers':   'YouTubers',
    'nav.donate-bar':  '🍺 Donate Bar',
    'nav.telegram':    '✈ Telegram',

    'footer.tools':    'Tools',
    'footer.content':  'Content',
    'footer.community':'Community',
    'footer.desc':     'Official resource of Russian-speaking Warpath: Ace Shooter bloggers. Guides, tools, wiki.',
    'footer.copy':     '© 2025–2026 Warpath Guide · Official blogger resource',
    'footer.disclaimer':'Not an official Lilith Games site',
    'footer.suggest':  'Submit a guide',
    'footer.donate':   'Support bloggers',

    'ticker.label':    'NEWS',

    'hero.badge':      'Official Resource · EN · Patch 13.4',
    'hero.title1':     'ALL ABOUT',
    'hero.title2':     'WARPATH',
    'hero.title3':     'IN ENGLISH',
    'hero.desc':       'Guides, mechanics, research — explained in plain language. Unit Builder, Army Builder, tier lists, wiki — all in one place.',
    'hero.btn.builder':'⚔ Unit Builder',
    'hero.btn.wiki':   '📖 Wiki',
    'hero.stat.units': 'Unit types',
    'hero.stat.patch': 'Current patch',
    'hero.stat.bloggers':'Bloggers',
    'hero.stat.lang':  'Language',

    'section.nav-title':   'Quick access',
    'section.nav-tag':     '🗺 Sections',
    'section.bloggers':    'Community bloggers',
    'section.bloggers-sub':'Hover to pause · Click to visit channel',
    'section.all-bloggers':'All bloggers →',
    'section.community':   'Community',
    'section.tools-tag':   '⚙ Tools',
    'section.tools-title': 'Interactive calculators',
    'section.tools-sub':   'Everything runs in your browser — no login required',

    'donate.title':    '🍺 Donate Bar',
    'donate.desc':     'Enter the number of mugs and glasses you have for this opening.',
    'donate.cups':     '🍺 Mugs',
    'donate.glasses':  '🥂 Glasses',
    'donate.open-bot': '✈ Open bot',
    'donate.full-calc':'🧮 Full calculator',

    'community.members':  'Members',
    'community.rooms':    'Chat rooms',
    'community.lang':     'Russian only',
    'community.join':     '✈ Join Telegram',
    'community.bloggers': '👥 Bloggers',

    'yt.title':        'Community bloggers',
    'yt.sub':          'Content creators covering Warpath: Ace Shooter',
    'yt.partner':      '✓ Partner',
    'yt.pending':      '✦ Soon',
    'yt.partner-desc': '— official Lilith Games partner',
    'yt.pending-desc': '— pending confirmation',
    'yt.latest':       'Latest videos',
    'yt.subs':         'subscribers',
    'yt.videos':       'videos',
    'yt.guides':       'guides',
    'yt.star-note':    '✦ — blogger has not yet received official partner status but is already part of our community.',

    'wiki.title':      'WIKI',
    'wiki.sub':        'Units, officers, mechanics — built by the blogger community. Data is being updated.',
    'wiki.units':      '🛡 Units',
    'wiki.officers':   '🎖 Officers',
    'wiki.mechanics':  '⚙ Mechanics',
    'wiki.economy':    '💰 Economy',
    'wiki.coming-soon':'Coming soon',

    'db.title':        '🍺 Donate Bar',
    'db.sub':          'Enter the number of mugs and glasses you have for this opening.',
    'db.calc-label':   'Monthly calculation',
    'db.cups-label':   'Beer mugs (max 120 counted)',
    'db.cups-hint':    '3 mugs = 1 glass in calculation',
    'db.glasses-label':'Glasses',
    'db.open-bot':     '✈ Open Telegram bot',
    'db.reset':        '↺ Reset',
    'db.tiers-title':  'Opening thresholds',
    'db.tier1-lbl':    'free',
    'db.tier1-sub':    '< 15 glasses — save mugs',
    'db.tier2-lbl':    'drinks',
    'db.tier2-sub':    '15–51 glasses (15 + 5)',
    'db.tier3-lbl':    'drinks',
    'db.tier3-sub':    '52+ glasses (65 + 5)',
  },

  vi: {
    'nav.home':        'Trang chủ',
    'nav.unit-builder':'Unit Builder',
    'nav.army-builder':'Army Builder',
    'nav.tier-list':   'Bảng xếp hạng',
    'nav.wiki':        'Wiki',
    'nav.youtubers':   'YouTubers',
    'nav.donate-bar':  '🍺 Donate Bar',
    'nav.telegram':    '✈ Telegram',

    'footer.tools':    'Công cụ',
    'footer.content':  'Nội dung',
    'footer.community':'Cộng đồng',
    'footer.desc':     'Tài nguyên chính thức của các blogger Warpath: Ace Shooter. Hướng dẫn, công cụ, wiki.',
    'footer.copy':     '© 2025–2026 Warpath Guide · Tài nguyên blogger chính thức',
    'footer.disclaimer':'Không phải trang web chính thức của Lilith Games',
    'footer.suggest':  'Đề xuất hướng dẫn',
    'footer.donate':   'Ủng hộ blogger',

    'ticker.label':    'TIN TỨC',

    'hero.badge':      'Tài nguyên chính thức · VI · Bản vá 13.4',
    'hero.title1':     'TẤT CẢ VỀ',
    'hero.title2':     'WARPATH',
    'hero.title3':     'BẰNG TIẾNG VIỆT',
    'hero.desc':       'Hướng dẫn, cơ chế, nghiên cứu — được giải thích bằng ngôn ngữ đơn giản. Unit Builder, Army Builder, bảng xếp hạng, wiki — tất cả trong một nơi.',
    'hero.btn.builder':'⚔ Unit Builder',
    'hero.btn.wiki':   '📖 Wiki',
    'hero.stat.units': 'Loại đơn vị',
    'hero.stat.patch': 'Bản vá hiện tại',
    'hero.stat.bloggers':'Blogger',
    'hero.stat.lang':  'Ngôn ngữ',

    'section.nav-title':   'Truy cập nhanh',
    'section.nav-tag':     '🗺 Mục',
    'section.bloggers':    'Blogger cộng đồng',
    'section.bloggers-sub':'Di chuột để dừng · Nhấp để truy cập kênh',
    'section.all-bloggers':'Tất cả blogger →',
    'section.community':   'Cộng đồng',
    'section.tools-tag':   '⚙ Công cụ',
    'section.tools-title': 'Máy tính tương tác',
    'section.tools-sub':   'Tất cả chạy trực tiếp trên trình duyệt — không cần đăng nhập',

    'donate.title':    '🍺 Donate Bar',
    'donate.desc':     'Nhập số cốc bia và ly bạn có cho lần mở này.',
    'donate.cups':     '🍺 Cốc bia',
    'donate.glasses':  '🥂 Ly',
    'donate.open-bot': '✈ Mở bot',
    'donate.full-calc':'🧮 Máy tính đầy đủ',

    'community.members':  'Thành viên',
    'community.rooms':    'Kênh chat',
    'community.lang':     'Tiếng Nga',
    'community.join':     '✈ Tham gia Telegram',
    'community.bloggers': '👥 Blogger',

    'yt.title':        'Blogger cộng đồng',
    'yt.sub':          'Các tác giả tạo nội dung về Warpath: Ace Shooter',
    'yt.partner':      '✓ Đối tác',
    'yt.pending':      '✦ Sắp có',
    'yt.partner-desc': '— đối tác chính thức của Lilith Games',
    'yt.pending-desc': '— đang chờ xác nhận',
    'yt.latest':       'Video mới nhất',
    'yt.subs':         'người đăng ký',
    'yt.videos':       'video',
    'yt.guides':       'hướng dẫn',
    'yt.star-note':    '✦ — blogger chưa nhận được trạng thái đối tác chính thức nhưng đã là một phần của cộng đồng.',

    'wiki.title':      'WIKI',
    'wiki.sub':        'Đơn vị, sĩ quan, cơ chế — được xây dựng bởi cộng đồng blogger. Dữ liệu đang được cập nhật.',
    'wiki.units':      '🛡 Đơn vị',
    'wiki.officers':   '🎖 Sĩ quan',
    'wiki.mechanics':  '⚙ Cơ chế',
    'wiki.economy':    '💰 Kinh tế',
    'wiki.coming-soon':'Sắp có',

    'db.title':        '🍺 Donate Bar',
    'db.sub':          'Nhập số cốc bia và ly bạn có cho lần mở này.',
    'db.calc-label':   'Tính toán hàng tháng',
    'db.cups-label':   'Cốc bia (tối đa 120)',
    'db.cups-hint':    '3 cốc = 1 ly khi tính',
    'db.glasses-label':'Ly',
    'db.open-bot':     '✈ Mở bot Telegram',
    'db.reset':        '↺ Đặt lại',
    'db.tiers-title':  'Ngưỡng mở',
    'db.tier1-lbl':    'miễn phí',
    'db.tier1-sub':    '< 15 ly — tích lũy cốc',
    'db.tier2-lbl':    'đồ uống',
    'db.tier2-sub':    '15–51 ly (15 + 5)',
    'db.tier3-lbl':    'đồ uống',
    'db.tier3-sub':    '52+ ly (65 + 5)',
  },

};

/* ════════════════════════════════════════════
   ENGINE
   ════════════════════════════════════════════ */
const I18N_KEY = 'wg-lang';
const LANGS = [
  { code:'ru', label:'RU', flag:'🇷🇺' },
  { code:'en', label:'EN', flag:'🇬🇧' },
  { code:'vi', label:'VI', flag:'🇻🇳' },
];

let currentLang = localStorage.getItem(I18N_KEY) || 'ru';

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS['ru'])[key]
      || TRANSLATIONS['ru'][key]
      || key;
}

function applyLang() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  /* обновить переключатель */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  /* вызвать колбэк страницы если есть */
  if (typeof onLangChange === 'function') onLangChange(currentLang);
}

function setLang(code) {
  currentLang = code;
  localStorage.setItem(I18N_KEY, code);
  applyLang();
}

/* вставляет переключатель — вызывается из nav.js */
function buildLangSwitcher() {
  const wrap = document.createElement('div');
  wrap.className = 'lang-switcher';
  LANGS.forEach(l => {
    const btn = document.createElement('button');
    btn.className = 'lang-btn' + (l.code === currentLang ? ' active' : '');
    btn.dataset.lang = l.code;
    btn.textContent = l.flag + ' ' + l.label;
    btn.onclick = () => setLang(l.code);
    wrap.appendChild(btn);
  });
  return wrap;
}

document.addEventListener('DOMContentLoaded', applyLang);
