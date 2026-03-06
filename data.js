/* ═══════════════════════════════════════════
   WARPATH GUIDE — SHARED DATA & UTILITIES
═══════════════════════════════════════════ */

/* ── TICKER ──────────────────────────── */
const TICKER = [
  'Патч 13.4 — новые юниты Super Heavy и ивент Тихого океана',
  'Army Builder: сохраняй составы прямо в браузере',
  'Тир-лист обновлён под патч 13.3 — Мартин поднялся в S',
  'Wiki: добавлен раздел «Механики пробития» с формулами',
  'TankCommander — разбор лучших билдов тяжёлых танков 2025',
  'Unit Builder теперь поддерживает сравнение двух конфигов',
  'WarpathHub Telegram: 5000+ участников, присоединяйся!',
];

/* ── YOUTUBERS DATA ──────────────────── */
const YOUTUBERS = [
  {id:'warpathru',    name:'WarpathRU',      spec:'Общие гайды',   emoji:'🦊',
   desc:'Первый официальный русскоязычный блогер Warpath. Стартовые гайды, механики, актуальные новости.',
   subs:'48K', videos:95, guides:32,
   yt:'https://youtube.com/@warpathru',     tg:'https://t.me/warpathru',
   donate:'https://t.me/donatebar_bot?start=warpathru'},
  {id:'tankcommander',name:'TankCommander',  spec:'Бронетехника',  emoji:'⚔️',
   desc:'Эксперт по наземным операциям. Точные цифры, проверенные билды, анализ формирований танков.',
   subs:'35K', videos:72, guides:28,
   yt:'https://youtube.com/@tankcommander', tg:'https://t.me/tankcommander',
   donate:'https://t.me/donatebar_bot?start=tankcommander'},
  {id:'aceflyer',     name:'AceFlyer',       spec:'Авиация',       emoji:'✈️',
   desc:'Всё об авиации: бомбардировщики, истребители, синергии с наземными юнитами после патча 13.3.',
   subs:'29K', videos:58, guides:21,
   yt:'https://youtube.com/@aceflyer',      tg:'https://t.me/aceflyer',
   donate:'https://t.me/donatebar_bot?start=aceflyer'},
  {id:'offcoach',     name:'OffCoach',        spec:'Офицеры',      emoji:'🎖️',
   desc:'Глубокий анализ каждого офицера. Сравнения, синергии, тир-листы после каждого патча.',
   subs:'22K', videos:44, guides:19,
   yt:'https://youtube.com/@offcoach',      tg:'https://t.me/offcoach',
   donate:'https://t.me/donatebar_bot?start=offcoach'},
  {id:'pvpmaster',    name:'PvPMaster',      spec:'PvP тактика',   emoji:'💥',
   desc:'Топ-1 сервера. Тактики PvP, разборы боёв, учит выигрывать даже при слабости.',
   subs:'41K', videos:89, guides:17,
   yt:'https://youtube.com/@pvpmaster',     tg:'https://t.me/pvpmaster',
   donate:'https://t.me/donatebar_bot?start=pvpmaster'},
  {id:'navywolf',     name:'NavyWolf',       spec:'Флот',          emoji:'⚓',
   desc:'Единственный русскоязычный специалист по флоту. Морские операции, корабли, стратегия.',
   subs:'14K', videos:31, guides:12,
   yt:'https://youtube.com/@navywolf',      tg:'https://t.me/navywolf',
   donate:'https://t.me/donatebar_bot?start=navywolf'},
  {id:'ecoking',      name:'EcoKing',        spec:'Экономика',     emoji:'⛏️',
   desc:'Ресурсный менеджмент, экономика альянса, пассивный доход. Оптимизация без платежей.',
   subs:'18K', videos:39, guides:15,
   yt:'https://youtube.com/@ecoking',       tg:'https://t.me/ecoking',
   donate:'https://t.me/donatebar_bot?start=ecoking'},
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
  {icon:'⚔️', title:'Система урона',      sub:'Основы',    desc:'Урон зависит от типа юнита, офицера, исследований и типа цели. Каждый тип имеет преимущества и уязвимости против других типов.',          tip:'Каменьножницы-бумага: танки бьют пехоту, пехота уязвима к артиллерии, артиллерия беззащитна без охраны.'},
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
    a.innerHTML = `<div class="yt-avatar">${y.emoji}</div><div><div class="yt-name">${y.name}</div><div class="yt-subs">${y.subs} подписчиков</div><div class="yt-red">▶ YouTube</div></div>`;
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

// Called by each page on DOMContentLoaded
function initShared() {
  buildTicker();
  setActiveNav();
  initFadeUp();
  initModals();
}
