/* ════════════════════════════════════════════════════════
   OFFICERS DATABASE — Warpath Guide
   
   КАК ДОБАВИТЬ КАРТИНКУ:
   1. Залей PNG в папку /officers/ на GitHub
   2. В поле img укажи имя файла: 'jackson-hayes.png'
   3. Картинка подтянется автоматически
   
   СТРУКТУРА ОФИЦЕРА:
   img     — имя файла в папке /officers/ (или null)
   domain  — 'land' | 'air' | 'sea'
   gen     — 1..5 (поколение)
   tier    — 'S' | 'A' | 'B' | 'C'
   focus   — 'atk' | 'def' | 'bal' | 'spc'
   atk/def — бонус % (число)
   skills  — массив из 4 навыков {t, name, desc}
             t: 'atk'|'def'|'bal'|'spc'
   units   — массив строк (типы юнитов)
   awaken  — описание пробуждения
   rec     — рекомендация
   ════════════════════════════════════════════════════════ */

const OFFICERS_DB = [

  /* ════════════════════════════════
     🛡 НАЗЕМНЫЕ — 56 офицеров
     ════════════════════════════════ */

  /* ── 5 ПОКОЛЕНИЕ ── */
  {
    id:'jackson-hayes', name:'Джексон Хейз', img:'jackson-hayes.png',
    domain:'land', gen:5, tier:'S', focus:'atk', atk:30, def:30,
    skills:[
      {t:'atk', name:'Пространственный удар',     desc:'Урон коэф. 1800. В танковом/вертолётном подр. интенсивность урона +15% на 8 сек.'},
      {t:'spc', name:'[Навык 2 — уточнить]',      desc:''},
      {t:'spc', name:'[Навык 3 — уточнить]',      desc:''},
      {t:'spc', name:'[Навык 4 — уточнить]',      desc:''},
    ],
    awaken:'[Описание пробуждения — уточнить]',
    units:['Лёгкий танк','Средний танк','Тяжёлый танк','SH','MB','Вертолёт'],
    rec:'Лучший атакующий офицер 5 поколения.',
  },
  {
    id:'officer-land-5-02', name:'[Имя — вставить]', img:null,
    domain:'land', gen:5, tier:'S', focus:'atk', atk:0, def:0,
    skills:[
      {t:'atk', name:'[Навык 1]', desc:''},
      {t:'atk', name:'[Навык 2]', desc:''},
      {t:'spc', name:'[Навык 3]', desc:''},
      {t:'spc', name:'[Навык 4]', desc:''},
    ],
    awaken:'', units:[], rec:'',
  },
  {
    id:'officer-land-5-03', name:'[Имя — вставить]', img:null,
    domain:'land', gen:5, tier:'A', focus:'def', atk:0, def:0,
    skills:[{t:'def',name:'[Навык 1]',desc:''},{t:'def',name:'[Навык 2]',desc:''},{t:'bal',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],
    awaken:'', units:[], rec:'',
  },

  /* ── 4 ПОКОЛЕНИЕ ── */
  {
    id:'officer-land-4-01', name:'[Имя — вставить]', img:null,
    domain:'land', gen:4, tier:'A', focus:'atk', atk:0, def:0,
    skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'atk',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],
    awaken:'', units:[], rec:'',
  },
  {
    id:'officer-land-4-02', name:'[Имя — вставить]', img:null,
    domain:'land', gen:4, tier:'A', focus:'def', atk:0, def:0,
    skills:[{t:'def',name:'[Навык 1]',desc:''},{t:'def',name:'[Навык 2]',desc:''},{t:'bal',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],
    awaken:'', units:[], rec:'',
  },
  {
    id:'officer-land-4-03', name:'[Имя — вставить]', img:null,
    domain:'land', gen:4, tier:'B', focus:'bal', atk:0, def:0,
    skills:[{t:'bal',name:'[Навык 1]',desc:''},{t:'bal',name:'[Навык 2]',desc:''},{t:'atk',name:'[Навык 3]',desc:''},{t:'def',name:'[Навык 4]',desc:''}],
    awaken:'', units:[], rec:'',
  },
  {
    id:'officer-land-4-04', name:'[Имя — вставить]', img:null,
    domain:'land', gen:4, tier:'B', focus:'atk', atk:0, def:0,
    skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'spc',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'atk',name:'[Навык 4]',desc:''}],
    awaken:'', units:[], rec:'',
  },

  /* ── 3 ПОКОЛЕНИЕ ── */
  {id:'officer-land-3-01',name:'[Имя]',img:null,domain:'land',gen:3,tier:'B',focus:'atk',atk:0,def:0,skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'atk',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-land-3-02',name:'[Имя]',img:null,domain:'land',gen:3,tier:'B',focus:'def',atk:0,def:0,skills:[{t:'def',name:'[Навык 1]',desc:''},{t:'def',name:'[Навык 2]',desc:''},{t:'bal',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-land-3-03',name:'[Имя]',img:null,domain:'land',gen:3,tier:'B',focus:'bal',atk:0,def:0,skills:[{t:'bal',name:'[Навык 1]',desc:''},{t:'bal',name:'[Навык 2]',desc:''},{t:'atk',name:'[Навык 3]',desc:''},{t:'def',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-land-3-04',name:'[Имя]',img:null,domain:'land',gen:3,tier:'C',focus:'atk',atk:0,def:0,skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'spc',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'atk',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-land-3-05',name:'[Имя]',img:null,domain:'land',gen:3,tier:'C',focus:'def',atk:0,def:0,skills:[{t:'def',name:'[Навык 1]',desc:''},{t:'def',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-land-3-06',name:'[Имя]',img:null,domain:'land',gen:3,tier:'C',focus:'bal',atk:0,def:0,skills:[{t:'bal',name:'[Навык 1]',desc:''},{t:'bal',name:'[Навык 2]',desc:''},{t:'atk',name:'[Навык 3]',desc:''},{t:'def',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},

  /* ── 2 ПОКОЛЕНИЕ ── */
  {id:'officer-land-2-01',name:'[Имя]',img:null,domain:'land',gen:2,tier:'C',focus:'atk',atk:0,def:0,skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'atk',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-land-2-02',name:'[Имя]',img:null,domain:'land',gen:2,tier:'C',focus:'def',atk:0,def:0,skills:[{t:'def',name:'[Навык 1]',desc:''},{t:'def',name:'[Навык 2]',desc:''},{t:'bal',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-land-2-03',name:'[Имя]',img:null,domain:'land',gen:2,tier:'C',focus:'bal',atk:0,def:0,skills:[{t:'bal',name:'[Навык 1]',desc:''},{t:'bal',name:'[Навык 2]',desc:''},{t:'atk',name:'[Навык 3]',desc:''},{t:'def',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-land-2-04',name:'[Имя]',img:null,domain:'land',gen:2,tier:'C',focus:'atk',atk:0,def:0,skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'spc',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'atk',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},

  /* ── 1 ПОКОЛЕНИЕ ── */
  {id:'officer-land-1-01',name:'[Имя]',img:null,domain:'land',gen:1,tier:'C',focus:'atk',atk:0,def:0,skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'spc',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'atk',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-land-1-02',name:'[Имя]',img:null,domain:'land',gen:1,tier:'C',focus:'def',atk:0,def:0,skills:[{t:'def',name:'[Навык 1]',desc:''},{t:'def',name:'[Навык 2]',desc:''},{t:'bal',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-land-1-03',name:'[Имя]',img:null,domain:'land',gen:1,tier:'C',focus:'bal',atk:0,def:0,skills:[{t:'bal',name:'[Навык 1]',desc:''},{t:'bal',name:'[Навык 2]',desc:''},{t:'atk',name:'[Навык 3]',desc:''},{t:'def',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},

  /* (продолжи до 56 наземных — добавляй по той же схеме) */


  /* ════════════════════════════════
     ✈ АВИАЦИЯ — 23 офицера
     ════════════════════════════════ */

  {
    id:'officer-air-5-01', name:'[Имя — вставить]', img:null,
    domain:'air', gen:5, tier:'S', focus:'atk', atk:0, def:0,
    skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'atk',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],
    awaken:'', units:['Истребитель','Бомбардировщик','Вертолёт'], rec:'',
  },
  {id:'officer-air-4-01',name:'[Имя]',img:null,domain:'air',gen:4,tier:'A',focus:'atk',atk:0,def:0,skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'atk',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],awaken:'',units:['Истребитель','Вертолёт'],rec:''},
  {id:'officer-air-4-02',name:'[Имя]',img:null,domain:'air',gen:4,tier:'A',focus:'def',atk:0,def:0,skills:[{t:'def',name:'[Навык 1]',desc:''},{t:'def',name:'[Навык 2]',desc:''},{t:'bal',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],awaken:'',units:['Бомбардировщик'],rec:''},
  {id:'officer-air-3-01',name:'[Имя]',img:null,domain:'air',gen:3,tier:'B',focus:'atk',atk:0,def:0,skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'spc',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'atk',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-air-3-02',name:'[Имя]',img:null,domain:'air',gen:3,tier:'B',focus:'bal',atk:0,def:0,skills:[{t:'bal',name:'[Навык 1]',desc:''},{t:'bal',name:'[Навык 2]',desc:''},{t:'atk',name:'[Навык 3]',desc:''},{t:'def',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-air-2-01',name:'[Имя]',img:null,domain:'air',gen:2,tier:'C',focus:'atk',atk:0,def:0,skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'spc',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'atk',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-air-2-02',name:'[Имя]',img:null,domain:'air',gen:2,tier:'C',focus:'def',atk:0,def:0,skills:[{t:'def',name:'[Навык 1]',desc:''},{t:'def',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-air-1-01',name:'[Имя]',img:null,domain:'air',gen:1,tier:'C',focus:'atk',atk:0,def:0,skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'spc',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'atk',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},

  /* (продолжи до 23 авиационных) */


  /* ════════════════════════════════
     ⚓ МОРСКИЕ — 8 офицеров
     ════════════════════════════════ */

  {id:'officer-sea-4-01',name:'[Имя]',img:null,domain:'sea',gen:4,tier:'A',focus:'atk',atk:0,def:0,skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'atk',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],awaken:'',units:['Эсминец','Авианосец'],rec:''},
  {id:'officer-sea-3-01',name:'[Имя]',img:null,domain:'sea',gen:3,tier:'B',focus:'def',atk:0,def:0,skills:[{t:'def',name:'[Навык 1]',desc:''},{t:'def',name:'[Навык 2]',desc:''},{t:'bal',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],awaken:'',units:['Подводная лодка'],rec:''},
  {id:'officer-sea-3-02',name:'[Имя]',img:null,domain:'sea',gen:3,tier:'B',focus:'atk',atk:0,def:0,skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'spc',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'atk',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-sea-2-01',name:'[Имя]',img:null,domain:'sea',gen:2,tier:'C',focus:'bal',atk:0,def:0,skills:[{t:'bal',name:'[Навык 1]',desc:''},{t:'bal',name:'[Навык 2]',desc:''},{t:'atk',name:'[Навык 3]',desc:''},{t:'def',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-sea-1-01',name:'[Имя]',img:null,domain:'sea',gen:1,tier:'C',focus:'atk',atk:0,def:0,skills:[{t:'atk',name:'[Навык 1]',desc:''},{t:'spc',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'atk',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-sea-1-02',name:'[Имя]',img:null,domain:'sea',gen:1,tier:'C',focus:'def',atk:0,def:0,skills:[{t:'def',name:'[Навык 1]',desc:''},{t:'def',name:'[Навык 2]',desc:''},{t:'spc',name:'[Навык 3]',desc:''},{t:'spc',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},
  {id:'officer-sea-1-03',name:'[Имя]',img:null,domain:'sea',gen:1,tier:'C',focus:'bal',atk:0,def:0,skills:[{t:'bal',name:'[Навык 1]',desc:''},{t:'bal',name:'[Навык 2]',desc:''},{t:'atk',name:'[Навык 3]',desc:''},{t:'def',name:'[Навык 4]',desc:''}],awaken:'',units:[],rec:''},

];

/* ПУТЬ К КАРТИНКАМ — меняй если папка другая */
const OFFICER_IMG_BASE = 'officers/';

function getOfficerImg(officer) {
  if (!officer.img) return null;
  return OFFICER_IMG_BASE + officer.img;
}
