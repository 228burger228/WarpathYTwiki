/* ═══════════════════════════════════════════
   WARPATH GUIDE — SHARED DATA & UTILITIES
═══════════════════════════════════════════ */

/* ── TICKER ──────────────────────────── */
const TICKER = [
  'Патч 13.5 — обзор от ClanGothic уже на канале!',
  'Дорожная карта 2026 — новые юниты и морской кубок гегемона',
  'Бургер: тест нового офицера Haymeker — смотри на канале',
  'е6ака: лучшие F2P сборки на истребитель 2026',
  'Экспедиции в патче 13.4 — полный разбор от ClanGothic',
  'WarpathHub Telegram: присоединяйся к сообществу!',
  'Unit Builder обновлён — сравнивай два конфига юнитов',
];

/* ── YOUTUBERS DATA ──────────────────── */
/* approved: true = официальный партнёр Lilith · false = ожидает одобрения (звёздочка) */
const YOUTUBERS = [
  {
    id: 'burger',
    name: 'Бургер',
    spec: 'Гайды и нарезки',
    emoji: '🍔',
    approved: false,
    quote: 'Показываю игру такой, какая она есть',
    tags: ['Гайды', 'Нарезки боёв', 'Другие игры', 'О жизни'],
    desc: 'Честный взгляд на Warpath без прикрас. Нарезки эпичных боёв, разборы механик и немного жизни за кадром.',
    subs: '352', videos: 95, guides: 12,
    yt: 'https://www.youtube.com/@burgerdom6/videos',
    tg: 'https://t.me/WarpathHub',
    donate: 'https://t.me/donatebar_bot?start=burger',
    latestVideos: [
      { title: 'Epic1 battle от лица r4 ч1 — Warpath 13.4', url: 'https://youtu.be/Xy1UkZrxkrY?si=A943_6GeXwMOc591' },
      { title: 'Обзор аккаунта лидера .MU. Эпик II — итог трат', url: 'https://youtu.be/sJJxi8jqE1A?si=d7XrNMt-PKBo0MnA' },
    ],
  },
  {
    id: 'ebaka',
    name: 'е6ака',
    spec: 'Тесты и сборки',
    emoji: '🔥',
    approved: false,
    quote: 'Надо удалить игру... надо удалить...',
    tags: ['F2P сборки', 'Тесты механик', 'Авиация', 'Обзоры патчей'],
    desc: 'Сервер 56. Тестирует всё подряд — от новых офицеров до сборок на истребитель. Много реальных цифр и честных выводов.',
    subs: '673', videos: 71, guides: 18,
    yt: 'https://www.youtube.com/@e6aka56',
    tg: 'https://t.me/WarpathHub',
    donate: 'https://t.me/donatebar_bot?start=ebaka',
    latestVideos: [
      { title: 'День рождения Warpath — раздача скинов и подарков', url: 'https://www.youtube.com/@e6aka56' },
      { title: 'Лучшие F2P сборки на истребитель 2026', url: 'https://www.youtube.com/@e6aka56' },
    ],
  },
  {
    id: 'ehson',
    name: 'Ehson',
    spec: 'Аналитика и детали',
    emoji: '🎯',
    approved: false,
    quote: 'Warpath глазами игрока, который любит разбираться в деталях',
    tags: ['Тактика', 'F2P методы', 'Сборки для сноса баз', 'Новичкам'],
    desc: 'Молодой канал с глубоким подходом. Разбирает стратегию и детали — от выбора МБТ до лучших F2P методов фарма золота.',
    subs: '85', videos: 6, guides: 5,
    yt: 'https://www.youtube.com/@ItsEhson',
    tg: 'https://t.me/WarpathHub',
    donate: 'https://t.me/donatebar_bot?start=ehson',
    latestVideos: [
      { title: 'Какой МБТ самый лучший? | Warpath: Ace Shooter', url: 'https://www.youtube.com/@ItsEhson' },
      { title: 'Лучшая F2P сборка для сноса баз!', url: 'https://www.youtube.com/@ItsEhson' },
    ],
  },
  {
    id: 'clangothic',
    name: 'ClanGothic',
    spec: 'Гайды и обзоры патчей',
    emoji: '🏰',
    approved: true,
    quote: 'Клан Gothic — 15 лет в игре, и мы всё ещё здесь',
    tags: ['Обзоры патчей', 'Офицеры', 'Стратегия', 'Экспедиции'],
    desc: 'Официальный партнёр Lilith Games. Крупнейший русскоязычный Warpath-канал. Сократ разбирает каждый патч, офицеров и глобальную стратегию.',
    subs: '27.5K', videos: 890, guides: 120,
    yt: 'https://www.youtube.com/@ClanGothic',
    tg: 'https://t.me/WarpathHub',
    donate: 'https://t.me/donatebar_bot?start=clangothic',
    latestVideos: [
      { title: 'Обзор патча 13.5 — наконец-то это добавляют в игру', url: 'https://www.youtube.com/@ClanGothic' },
      { title: 'Фулл офицеры или нет — ошибки. Часть 16', url: 'https://www.youtube.com/@ClanGothic' },
    ],
  },
  {
    id: 'vnwarpath',
    name: 'VN Warpath',
    spec: 'Мета и офицеры · EN',
    emoji: '🇻🇳',
    approved: false,
    quote: "Don't play Warpath without watching this first",
    tags: ['Мета-анализ', 'Офицеры', 'Экономика', 'F2P vs P2W', 'English'],
    desc: 'Вьетнамский автор с англоязычным контентом.',
    subs: '2.59K', videos: 88, guides: 40,
    yt: 'https://www.youtube.com/@VNwarpath1',
    tg: 'https://t.me/WarpathHub',
    donate: 'https://ko-fi.com/vnwarpath',
    latestVideos: [
      { title: '70% of Warpath Players Are Using the WRONG META', url: 'https://www.youtube.com/@VNwarpath1' },
      { title: 'MUST WATCH To Save Money!', url: 'https://www.youtube.com/@VNwarpath1' },
    ],
  },
];

/* ── UNIT TYPES ──────────────────────── */
const UNIT_TYPES = [
  {id:'infantry',   label:'Infantry',         emoji:'🪖', baseAtk:420,  baseDef:380,  baseHP:8000,  baseMov:55, baseCost:200},
  {id:'light',      label:'Light Tank',        emoji:'🚗', baseAtk:680,  baseDef:520,  baseHP:12000, baseMov:70, baseCost:450},
  {id:'medium',     label:'Medium Tank',       emoji:'🚙', baseAtk:860,  baseDef:760,  baseHP:18000, baseMov:52, baseCost:700},
  {id:'heavy',      label:'Heavy Tank',        emoji:'🛡️', baseAtk:1100, baseDef:1050, baseHP:28000, baseMov:36, baseCost:1100},
  {id:'superheavy', label:'Super Heavy Tank',  emoji:'🦣', baseAtk:1480, baseDef:1320, baseHP:40000, baseMov:24, baseCost:1800},
  {id:'tankhunter', label:'Tank Hunter',       emoji:'🎯', baseAtk:1250, baseDef:520,  baseHP:14000, baseMov:46, baseCost:900},
  {id:'antitank',   label:'Anti-Tank Gun',     emoji:'💣', baseAtk:1100, baseDef:440,  baseHP:10000, baseMov:28, baseCost:750},
  {id:'howitzer',   label:'Howitzer',          emoji:'💥', baseAtk:1400, baseDef:350,  baseHP:9000,  baseMov:22, baseCost:880},
  {id:'launcher',   label:'Launcher',          emoji:'🚀', baseAtk:1600, baseDef:300,  baseHP:8500,  baseMov:30, baseCost:1000},
];

const LEVEL_MULT = {1:1.0,2:1.1,3:1.22,4:1.36,5:1.52,6:1.7,7:1.9,8:2.12,9:2.38,10:2.68};

const OFFICERS = [
  {id:'none',     name:'— Без офицера —',     atkB:0,  defB:0,  hpB:0},
  {id:'martin',   name:'Мартин',              atkB:18, defB:8,  hpB:10},
  {id:'curtis',   name:'Кёртис',              atkB:10, defB:22, hpB:15},
  {id:'isabel',   name:'Иссабель',            atkB:25, defB:5,  hpB:5},
  {id:'takeda',   name:'Такеда',              atkB:20, defB:12, hpB:8},
  {id:'farida',   name:'Фарида',              atkB:15, defB:15, hpB:12},
  {id:'houghton', name:'Хоутон',              atkB:12, defB:10, hpB:20},
  {id:'slater',   name:'Слейтер',             atkB:22, defB:6,  hpB:6},
  {id:'victor',   name:'Виктор',              atkB:8,  defB:20, hpB:18},
];

const EQUIPMENT = [
  {id:'none',    name:'— Без снаряжения —',    atkB:0,  defB:0,  hpB:0},
  {id:'mkII',    name:'Броня Mk.II',            atkB:0,  defB:12, hpB:8},
  {id:'railgun', name:'Рейлган',               atkB:18, defB:0,  hpB:0},
  {id:'shield',  name:'Реактивная броня',       atkB:0,  defB:18, hpB:12},
  {id:'engine',  name:'Форсированный движ.',    atkB:5,  defB:0,  hpB:0},
  {id:'ammo',    name:'Бронебойные снаряды',    atkB:14, defB:-5, hpB:0},
];

/* ── TIER DATA ───────────────────────── */
const TIER_ITEMS = [
  {id:'superheavy', name:'Super Heavy Tank', emoji:'🦣', type:'unit',    role:'Бронетехника', tier:'S', note:'Максимальная броня и HP. Незаменим в эндгейме.'},
  {id:'launcher',   name:'Launcher',         emoji:'🚀', type:'unit',    role:'Артиллерия',   tier:'S', note:'Лучший урон по зданиям и укреплениям.'},
  {id:'martin',     name:'Мартин',           emoji:'🦅', type:'officer', role:'DPS офицер',   tier:'S', note:'+18% атака — лучший выбор для наступления.'},
  {id:'isabel',     name:'Иссабель',         emoji:'⚡', type:'officer', role:'DPS офицер',   tier:'S', note:'+25% атака при потере HP — лучший в затяжных боях.'},
  {id:'tankhunter', name:'Tank Hunter',      emoji:'🎯', type:'unit',    role:'Противотанк',  tier:'A', note:'Контрпик тяжёлых танков. Высокий урон.'},
  {id:'howitzer',   name:'Howitzer',         emoji:'💥', type:'unit',    role:'Артиллерия',   tier:'A', note:'Отличный AoE урон при осаде.'},
  {id:'heavy',      name:'Heavy Tank',       emoji:'🛡️', type:'unit',    role:'Бронетехника', tier:'A', note:'Универсальный линейный юнит эндгейма.'},
  {id:'curtis',     name:'Кёртис',           emoji:'🛡️', type:'officer', role:'Танк офицер',  tier:'A', note:'+22% защита — лучший для обороны.'},
  {id:'takeda',     name:'Такеда',           emoji:'🗡️', type:'officer', role:'Универсал',    tier:'A', note:'Баланс атаки и защиты. Хорош везде.'},
  {id:'slater',     name:'Слейтер',          emoji:'💣', type:'officer', role:'DPS офицер',   tier:'A', note:'Специализация авиация и тяжёлые юниты.'},
  {id:'medium',     name:'Medium Tank',      emoji:'🚙', type:'unit',    role:'Бронетехника', tier:'B', note:'Баланс скорости и брони. Основа средних армий.'},
  {id:'antitank',   name:'Anti-Tank Gun',    emoji:'💣', type:'unit',    role:'Противотанк',  tier:'B', note:'Хорош в засаде против техники.'},
  {id:'farida',     name:'Фарида',           emoji:'🔥', type:'officer', role:'Универсал',    tier:'B', note:'Ровные бонусы без ярко выраженной специализации.'},
  {id:'victor',     name:'Виктор',           emoji:'⚔️', type:'officer', role:'Защита',       tier:'B', note:'Хорош для обороны базы и гарнизона.'},
  {id:'houghton',   name:'Хоутон',           emoji:'🎯', type:'officer', role:'HP офицер',    tier:'B', note:'+20% HP — живучесть для тяжёлых юнитов.'},
  {id:'light',      name:'Light Tank',       emoji:'🚗', type:'unit',    role:'Разведка',     tier:'C', note:'Высокая мобильность. Для рейдов ресурсов.'},
  {id:'infantry',   name:'Infantry',         emoji:'🪖', type:'unit',    role:'Пехота',       tier:'C', note:'Дёшев, быстро строится. Для гарнизона.'},
];

/* ── WIKI DATA ───────────────────────── */
const UNIT_WIKI = [
  {emoji:'🪖', label:'Infantry',        id:'infantry',   desc:'Дешёвые и быстро тренируются. Отличный выбор для защиты базы в начале игры. Уязвимы к бронетехнике.',           tip:'Строй в начале для экономии ресурсов. Используй для гарнизона базы.'},
  {emoji:'🚗', label:'Light Tank',      id:'light',      desc:'Высокая мобильность. Идеальны для разведки и быстрых рейдов. Слабая броня делает их уязвимыми в лобовых столкновениях.',  tip:'Используй для грабежа ресурсных точек и отвлечения врага.'},
  {emoji:'🚙', label:'Medium Tank',     id:'medium',     desc:'Универсальный юнит. Хороший баланс брони, атаки и скорости. Основа большинства армий среднего уровня.',          tip:'Основная рабочая лошадка — прокачай исследования и офицеров.'},
  {emoji:'🛡️', label:'Heavy Tank',      id:'heavy',      desc:'Высокий урон и отличная броня. Медленные, но эффективны в осаде. Требуют прокачки исследований.',                 tip:'Кор юнит эндгейма. Ставь офицера Кёртис для максимальной живучести.'},
  {emoji:'🦣', label:'Super Heavy Tank',id:'superheavy', desc:'Максимальная броня и HP. Почти неуязвимы в лобовой атаке. Очень дороги и медленны — эндгейм юнит.',               tip:'Только для эндгейма. Не строй пока не прокачаешь все исследования до max.'},
  {emoji:'🎯', label:'Tank Hunter',     id:'tankhunter', desc:'Специализируются на уничтожении бронетехники. Высокий урон против танков, но слабы против пехоты.',               tip:'Контрпик против Heavy и Super Heavy. Используй засаду.'},
  {emoji:'💣', label:'Anti-Tank Gun',   id:'antitank',   desc:'Стационарная противотанковая установка. Огромный урон в засаде. Низкая мобильность.',                              tip:'Размещай в засаде у ресурсных точек для защиты от рейдов.'},
  {emoji:'💥', label:'Howitzer',        id:'howitzer',   desc:'Дальнобойная артиллерия с уроном по площади. Незаменима при осаде. Требует защиты от контратак.',                  tip:'Держи в тылу армии. Никогда не выдвигай в первую линию.'},
  {emoji:'🚀', label:'Launcher',        id:'launcher',   desc:'Ракетная установка — максимальный урон. Идеальна для уничтожения баз и укреплений. Хрупкая.',                       tip:'Лучший выбор для осады альянсовых баз. Нужна сильная защита.'},
];

const MECHANICS_WIKI = [
  {icon:'⚔️', title:'Система урона',      sub:'Основы',    desc:'Урон зависит от типа юнита, офицера, исследований и типа цели. Каждый тип имеет преимущества и уязвимости против других типов.',          tip:'Камень-ножницы-бумага: танки бьют пехоту, пехота уязвима к артиллерии, артиллерия беззащитна без охраны.'},
  {icon:'🛡️', title:'Броня и пробитие',   sub:'Механика',  desc:'Броня уменьшает входящий урон в процентах. Пробитие снижает эффективную броню цели. Превышение пробития даёт бонусный урон.',              tip:'Если пробитие 60% > броня 40% → 20% сверх = +12% бонусного урона к финальному пулу.'},
  {icon:'⚡', title:'Очки силы (Power)',   sub:'Основы',    desc:'Power — общий показатель развития. Высокий Power ≠ сильный игрок. Можно иметь 50М силы и проигрывать игроку с 20М при правильной прокачке.',   tip:'Фокусируйся на правильных исследованиях, а не на простом наборе очков силы.'},
  {icon:'🏹', title:'Формирования',        sub:'Тактика',   desc:'Порядок юнитов в отряде влияет на бой. Передние ряды принимают удар, задние — наносят урон издали.',                                         tip:'Тяжёлые танки — вперёд. Артиллерия и пехота — назад. Никогда не ставь артиллерию в первый ряд.'},
  {icon:'📦', title:'Снабжение армии',     sub:'Логистика', desc:'Юниты расходуют припасы во время марша. Чем дальше — тем больше потребляют. Без прокачки логистики армия встанет в поле.',                    tip:'Прокачай ветку снабжения до 5-го уровня прежде чем строить крупные армии.'},
  {icon:'🏰', title:'Зоны контроля',       sub:'Стратегия', desc:'Контроль зон даёт пассивные бонусы альянсу: скорость маршей, бонус добычи, защитный периметр.',                                              tip:'Оценивай зону не по размеру, а по ресурсам внутри и расстоянию до вражеских баз.'},
];

/* ── HELPERS ─────────────────────────── */
function fmt(n) {
  if (n >= 1000000) return (n/1000000).toFixed(1)+'M';
  if (n >= 1000)    return (n/1000).toFixed(1)+'K';
  return n.toString();
}

function calcUnit(typeId, level, offId, eqId) {
  const u = UNIT_TYPES.find(x => x.id === typeId) || UNIT_TYPES[0];
  const m = LEVEL_MULT[level] || 1;
  const o = OFFICERS.find(x => x.id === offId) || OFFICERS[0];
  const e = EQUIPMENT.find(x => x.id === eqId)  || EQUIPMENT[0];
  const am = 1 + (o.atkB + e.atkB) / 100;
  const dm = 1 + (o.defB + e.defB) / 100;
  const hm = 1 + (o.hpB  + e.hpB)  / 100;
  return {
    atk:   Math.round(u.baseAtk  * m * am),
    def:   Math.round(u.baseDef  * m * dm),
    hp:    Math.round(u.baseHP   * m * hm),
    mov:   u.baseMov,
    cost:  Math.round(u.baseCost * m),
    power: Math.round((u.baseAtk + u.baseDef + u.baseHP * 0.05) * m * ((am+dm+hm)/3)),
  };
}

function buildTicker() {
  const el = document.getElementById('ticker-track');
  if (!el) return;
  [...TICKER,...TICKER].forEach(t => {
    const s = document.createElement('span');
    s.className = 'ticker-item';
    s.textContent = t;
    el.appendChild(s);
  });
}

function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const h = a.getAttribute('href').split('/').pop();
    a.classList.toggle('active', h === page);
  });
}

function buildYtStrip(id) {
  const el = document.getElementById(id);
  if (!el) return;
  [...YOUTUBERS,...YOUTUBERS].forEach(y => {
    const a = document.createElement('a');
    a.className = 'yt-card'; a.href = y.yt; a.target = '_blank';
    a.innerHTML = `<div class="yt-avatar">${y.emoji}</div><div><div class="yt-name">${y.name}${y.approved?'':' ✦'}</div><div class="yt-subs">${y.subs} подписчиков</div><div class="yt-red">▶ YouTube</div></div>`;
    el.appendChild(a);
  });
}

function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

function initModals() {
  document.querySelectorAll('.modal-bg').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.querySelectorAll('.modal-bg.open').forEach(m => m.classList.remove('open'));
  });
}

function initFadeUp() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.07 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

function initShared() {
  buildTicker();
  setActiveNav();
  initFadeUp();
  initModals();
}
