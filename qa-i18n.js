/**
 * Q&A ページ — ガイドデータの言語オーバーレイ
 */
var QA_GUIDE_MAP = {
  APP_REGISTRATION_GUIDE: 'registration',
  APP_PT_LINE_GUIDE: 'ptLine',
  APP_CREDIT_CARD_GUIDE: 'creditCard',
  APP_OPTION_GUIDE: 'option',
  APP_CROWD_STATUS_GUIDE: 'crowd',
  APP_CORPORATE_SECTION: 'corporate',
  APP_REJOIN_SECTION: 'rejoin',
  APP_CAMPAIGN_APPLY_GUIDE: 'campaign',
  APP_UNPAID_GUIDE: 'unpaid',
  APP_ONLINE_LESSON_GUIDE: 'onlineLesson'
};

function qaCatalogPath(path) {
  if (!window.JoyfitI18n || JoyfitI18n.getLanguage() === 'ja') return undefined;
  var page = window.JOYFIT_LOCALES && window.JOYFIT_LOCALES.qa;
  var lang = JoyfitI18n.getLanguage();
  if (!page || !page[lang]) return undefined;
  return path.split('.').reduce(function (acc, key) {
    return acc && acc[key] != null ? acc[key] : undefined;
  }, page[lang]);
}

function qaT(key, fallback) {
  if (!window.JoyfitI18n) return fallback;
  var val = qaCatalogPath(key);
  return val != null ? val : fallback;
}

function qaUi(key, fallback) {
  return qaT('ui.' + key, fallback);
}

function mergeTranslated(base, overlay) {
  if (overlay === undefined || overlay === null) return base;
  if (typeof overlay === 'string') return overlay;
  if (Array.isArray(overlay)) {
    if (!Array.isArray(base)) return overlay;
    return base.map(function (item, i) {
      return mergeTranslated(item, overlay[i]);
    });
  }
  if (typeof overlay === 'object') {
    if (typeof base !== 'object' || base === null) return overlay;
    var out = Array.isArray(base) ? base.slice() : Object.assign({}, base);
    Object.keys(overlay).forEach(function (key) {
      out[key] = mergeTranslated(base[key], overlay[key]);
    });
    return out;
  }
  return base;
}

function cloneData(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function getQAGuide(varName) {
  var base = window[varName];
  if (!base) return base;
  var mapKey = QA_GUIDE_MAP[varName];
  if (!mapKey) return base;
  var overlay = qaCatalogPath('guides.' + mapKey);
  if (!overlay) return base;
  return mergeTranslated(cloneData(base), overlay);
}

function getQASections() {
  return QA_MASTER.sections.map(function (section) {
    var secTr = qaCatalogPath('sections.' + section.id);
    if (!secTr) return section;
    var out = Object.assign({}, section);
    if (secTr.title) out.title = secTr.title;
    if (secTr.items && section.items.length) {
      out.items = section.items.map(function (item, i) {
        var it = secTr.items[i];
        return it ? Object.assign({}, item, it) : item;
      });
    }
    return out;
  });
}

function qaFormatTapAction(action) {
  var html = qaT('ui.tapSearchHtml', '');
  if (html) {
    return html.replace(/\{action\}/g, '<span class="guide-search-btn">' + action + '</span>');
  }
  return '<span class="guide-search-btn">' + action + '</span>をタップ';
}

function qaTrainerAlt(nameSei, nameMei) {
  var suffix = qaUi('trainerSuffix', 'トレーナー');
  return nameSei + ' ' + nameMei + suffix;
}
