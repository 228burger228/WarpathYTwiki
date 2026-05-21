// FAQ данные — вопросы и ответы по категориям
const FAQ_DATA = {
  categories: [
    { id: 'mechanics', name: 'Механика', icon: '⚙️' },
    { id: 'units', name: 'Юниты', icon: '⚔️' },
    { id: 'officers', name: 'Офицеры', icon: '🎖️' },
    { id: 'strategy', name: 'Стратегия', icon: '🎯' },
    { id: 'economy', name: 'Экономика', icon: '💰' },
    { id: 'events', name: 'События', icon: '🎪' }
  ],
  questions: [
    // ═══ МЕХАНИКА ═══
    {
      id: 'mech-1',
      category: 'mechanics',
      question: 'Что такое боевая мощь (Power)?',
      answer: 'Боевая мощь — это общий показатель силы юнита, зависящий от уровня, звёзд, офицера и снаряжения. Чем выше мощь, тем сильнее юнит в бою.',
      tags: ['power', 'stats', 'базовое']
    },
    {
      id: 'mech-2',
      category: 'mechanics',
      question: 'Как работает система уровней?',
      answer: 'Юниты имеют уровни от 1 до 60. Каждый уровень требует опыт и ресурсы. Повышение уровня увеличивает все характеристики юнита.',
      tags: ['level', 'progression', 'базовое']
    },
    {
      id: 'mech-3',
      category: 'mechanics',
      question: 'Что такое звёзды (Stars)?',
      answer: 'Звёзды — это редкость юнита (1-5 звёзд). Больше звёзд = выше базовые характеристики. Звёзды повышаются через слияние дубликатов.',
      tags: ['stars', 'rarity', 'базовое']
    },
    {
      id: 'mech-4',
      category: 'mechanics',
      question: 'Как работает система офицеров?',
      answer: 'Офицер даёт бонусы к характеристикам юнита. Каждый офицер имеет специальные навыки. Офицер может быть назначен только одному юниту.',
      tags: ['officers', 'skills', 'intermediate']
    },
    {
      id: 'mech-5',
      category: 'mechanics',
      question: 'Что такое Arms Race?',
      answer: 'Arms Race — ежедневное событие, где игроки выполняют задания и получают очки. По очкам определяется ранг и награды.',
      tags: ['arms-race', 'events', 'intermediate']
    },

    // ═══ ЮНИТЫ ═══
    {
      id: 'unit-1',
      category: 'units',
      question: 'Сколько типов юнитов в игре?',
      answer: 'В Warpath 9 основных типов: Танки, ПТ, САУ, ЗСУ, Артиллерия, Миномёты, Истребители, Бомбардировщики, Вертолёты.',
      tags: ['types', 'units', 'базовое']
    },
    {
      id: 'unit-2',
      category: 'units',
      question: 'Какой юнит лучше всего?',
      answer: 'Нет "лучшего" юнита — всё зависит от стратегии и противника. Каждый тип имеет свои преимущества и недостатки.',
      tags: ['meta', 'strategy', 'intermediate']
    },
    {
      id: 'unit-3',
      category: 'units',
      question: 'Как получить новый юнит?',
      answer: 'Юниты получаются через: боевые награды, магазин, события, боевые пропуски. Редкие юниты требуют больше времени.',
      tags: ['acquisition', 'progression', 'intermediate']
    },
    {
      id: 'unit-4',
      category: 'units',
      question: 'Что такое слияние юнитов?',
      answer: 'Слияние — объединение двух одинаковых юнитов для повышения звёзд. Требует ресурсы и опыт.',
      tags: ['merge', 'progression', 'intermediate']
    },

    // ═══ ОФИЦЕРЫ ═══
    {
      id: 'off-1',
      category: 'officers',
      question: 'Сколько офицеров в игре?',
      answer: 'В игре более 50 офицеров разных рангов. Каждый имеет уникальные навыки и бонусы.',
      tags: ['officers', 'count', 'базовое']
    },
    {
      id: 'off-2',
      category: 'officers',
      question: 'Как выбрать офицера для юнита?',
      answer: 'Выбирайте офицера, чьи навыки дополняют тип юнита. Например, для танка — офицер с защитой, для артиллерии — с атакой.',
      tags: ['officers', 'strategy', 'intermediate']
    },
    {
      id: 'off-3',
      category: 'officers',
      question: 'Можно ли переназначить офицера?',
      answer: 'Да, офицера можно переназначить другому юниту без штрафа. Это полезно для экспериментов.',
      tags: ['officers', 'mechanics', 'intermediate']
    },

    // ═══ СТРАТЕГИЯ ═══
    {
      id: 'strat-1',
      category: 'strategy',
      question: 'Как собрать хорошую армию?',
      answer: 'Сбалансируйте типы юнитов: танки (защита), артиллерия (урон), авиация (мобильность). Не берите только один тип.',
      tags: ['strategy', 'army-building', 'intermediate']
    },
    {
      id: 'strat-2',
      category: 'strategy',
      question: 'Какая тактика лучше в PvP?',
      answer: 'Адаптируйтесь к противнику. Если враг использует танки — берите ПТ. Если авиацию — берите ЗСУ.',
      tags: ['pvp', 'strategy', 'advanced']
    },
    {
      id: 'strat-3',
      category: 'strategy',
      question: 'Как выиграть в Arms Race?',
      answer: 'Выполняйте все задания, используйте бонусы времени, выбирайте юниты под задачи. Планируйте заранее.',
      tags: ['arms-race', 'strategy', 'intermediate']
    },

    // ═══ ЭКОНОМИКА ═══
    {
      id: 'econ-1',
      category: 'economy',
      question: 'Как получить ресурсы быстрее?',
      answer: 'Выполняйте задания, участвуйте в событиях, играйте в PvP, используйте боевые пропуски.',
      tags: ['resources', 'economy', 'intermediate']
    },
    {
      id: 'econ-2',
      category: 'economy',
      question: 'Стоит ли тратить реальные деньги?',
      answer: 'Игра полностью играется бесплатно. Реальные деньги ускоряют прогресс, но не обязательны.',
      tags: ['monetization', 'f2p', 'базовое']
    },
    {
      id: 'econ-3',
      category: 'economy',
      question: 'Как эффективно использовать ресурсы?',
      answer: 'Приоритизируйте: 1) Основные юниты, 2) Офицеры, 3) Снаряжение. Не распыляйтесь на всех сразу.',
      tags: ['resources', 'strategy', 'intermediate']
    },

    // ═══ СОБЫТИЯ ═══
    {
      id: 'event-1',
      category: 'events',
      question: 'Когда проходят события?',
      answer: 'События проходят постоянно. Основные: Arms Race (ежедневно), Экспедиции (еженедельно), Сезонные события (ежемесячно).',
      tags: ['events', 'schedule', 'базовое']
    },
    {
      id: 'event-2',
      category: 'events',
      question: 'Как получить максимум наград из события?',
      answer: 'Выполняйте все задания, используйте бонусы, участвуйте в командных челленджах, не пропускайте дни.',
      tags: ['events', 'rewards', 'intermediate']
    },
    {
      id: 'event-3',
      category: 'events',
      question: 'Что такое боевой пропуск?',
      answer: 'Боевой пропуск — подписка на сезон события. Даёт дополнительные награды за выполнение заданий.',
      tags: ['battle-pass', 'monetization', 'intermediate']
    }
  ]
};
