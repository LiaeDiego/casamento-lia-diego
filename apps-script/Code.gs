const SETTINGS_SHEET = 'settings';
const RSVP_SHEET = 'rsvps';
const MESSAGES_SHEET = 'messages';
const STATE_KEY = 'state';

function setup() {
  ensureSheets_();
  if (!getSetting_(STATE_KEY)) {
    setSetting_(STATE_KEY, JSON.stringify(defaultState_()));
  }
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty('ADMIN_PASSWORD')) {
    props.setProperty('ADMIN_PASSWORD', 'troque-esta-senha');
  }
}

function doGet(e) {
  try {
    const action = (e.parameter.action || 'bootstrap').toString();
    if (action !== 'bootstrap') {
      return json_({ ok: false, error: 'Ação GET inválida.' });
    }
    return json_({ ok: true, state: publicState_() });
  } catch (error) {
    return json_({ ok: false, error: error.message || String(error) });
  }
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    ensureSheets_();
    const body = JSON.parse(e.postData && e.postData.contents ? e.postData.contents : '{}');
    const action = body.action;

    if (action === 'submitRsvp') {
      appendRsvp_({
        id: 'r' + Date.now() + Math.floor(Math.random() * 10000),
        data: new Date().toISOString(),
        attending: body.attending || 'sim',
        responsavel: body.responsavel || '',
        convidados: body.convidados || [],
        observacoes: body.observacoes || ''
      });
      return json_({ ok: true });
    }

    if (action === 'giftPurchase') {
      const state = getState_();
      const gifts = state.gifts || [];
      const gift = gifts.find(function(item) { return item.id === body.giftId; });
      if (!gift) throw new Error('Presente não encontrado.');
      const total = Number(gift.qtdTotal || 0);
      const bought = Number(gift.qtdComprada || 0);
      if (total > 0 && bought >= total) throw new Error('Este presente já foi totalmente presenteado.');
      gift.qtdComprada = bought + 1;
      gift.compradores = gift.compradores || [];
      gift.compradores.push({
        nome: body.buyer || '',
        metodo: body.method || '',
        data: new Date().toISOString()
      });
      saveState_(state);
      return json_({ ok: true, state: publicState_() });
    }

    if (action === 'addMessage') {
      appendMessage_({
        id: 'm' + Date.now() + Math.floor(Math.random() * 10000),
        data: new Date().toISOString(),
        from: body.from || '',
        text: body.text || '',
        visible: true
      });
      return json_({ ok: true, messages: listMessages_(true) });
    }

    assertAdmin_(body.password);

    if (action === 'adminBootstrap') {
      return json_({
        ok: true,
        state: publicState_(),
        rsvps: listRsvps_(),
        messages: listMessages_(false)
      });
    }

    if (action === 'adminSaveState') {
      const current = getState_();
      const incoming = normalizeStateForStorage_(body.state || {});
      saveState_(Object.assign(current, incoming));
      return json_({ ok: true, state: publicState_() });
    }

    if (action === 'adminUpsertRsvp') {
      upsertRsvp_(body.rsvp || {});
      return json_({ ok: true, rsvps: listRsvps_() });
    }

    if (action === 'adminDeleteRsvp') {
      deleteRowById_(RSVP_SHEET, body.id);
      return json_({ ok: true, rsvps: listRsvps_() });
    }

    if (action === 'adminDeleteMessage') {
      deleteRowById_(MESSAGES_SHEET, body.id);
      return json_({ ok: true, messages: listMessages_(false) });
    }

    return json_({ ok: false, error: 'Ação POST inválida.' });
  } catch (error) {
    return json_({ ok: false, error: error.message || String(error) });
  } finally {
    lock.releaseLock();
  }
}

function publicState_() {
  const state = getState_();
  state.messages = listMessages_(true);
  return state;
}

function getState_() {
  const raw = getSetting_(STATE_KEY);
  if (!raw) return defaultState_();
  try {
    return Object.assign(defaultState_(), JSON.parse(raw));
  } catch (error) {
    return defaultState_();
  }
}

function saveState_(state) {
  setSetting_(STATE_KEY, JSON.stringify(normalizeStateForStorage_(state)));
}

function normalizeStateForStorage_(state) {
  const copy = JSON.parse(JSON.stringify(state || {}));
  delete copy.rsvps;
  delete copy.messages;
  return copy;
}

function appendRsvp_(rsvp) {
  if (!rsvp.responsavel) throw new Error('Nome obrigatório.');
  const sheet = SpreadsheetApp.getActive().getSheetByName(RSVP_SHEET);
  sheet.appendRow([
    rsvp.id || ('r' + Date.now()),
    rsvp.data || new Date().toISOString(),
    rsvp.attending || 'sim',
    rsvp.responsavel || '',
    JSON.stringify(rsvp.convidados || []),
    rsvp.observacoes || ''
  ]);
}

function upsertRsvp_(rsvp) {
  if (!rsvp.responsavel) throw new Error('Nome obrigatório.');
  rsvp.id = rsvp.id || ('r' + Date.now());
  rsvp.data = rsvp.data || new Date().toISOString();
  const sheet = SpreadsheetApp.getActive().getSheetByName(RSVP_SHEET);
  const row = findRowById_(sheet, rsvp.id);
  const values = [[
    rsvp.id,
    rsvp.data,
    rsvp.attending || 'sim',
    rsvp.responsavel || '',
    JSON.stringify(rsvp.convidados || []),
    rsvp.observacoes || ''
  ]];
  if (row > 0) {
    sheet.getRange(row, 1, 1, 6).setValues(values);
  } else {
    sheet.appendRow(values[0]);
  }
}

function listRsvps_() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(RSVP_SHEET);
  const values = sheet.getDataRange().getValues();
  return values.slice(1).filter(function(row) { return row[0]; }).map(function(row) {
    return {
      id: row[0],
      data: row[1],
      attending: row[2] || 'sim',
      responsavel: row[3] || '',
      convidados: parseJson_(row[4], []),
      observacoes: row[5] || ''
    };
  });
}

function appendMessage_(message) {
  if (!message.from || !message.text) throw new Error('Nome e mensagem são obrigatórios.');
  const sheet = SpreadsheetApp.getActive().getSheetByName(MESSAGES_SHEET);
  sheet.appendRow([
    message.id || ('m' + Date.now()),
    message.data || new Date().toISOString(),
    message.from || '',
    message.text || '',
    message.visible !== false
  ]);
}

function listMessages_(publicOnly) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(MESSAGES_SHEET);
  const values = sheet.getDataRange().getValues();
  return values.slice(1).filter(function(row) { return row[0]; }).map(function(row) {
    return {
      id: row[0],
      data: row[1],
      from: row[2] || '',
      text: row[3] || '',
      visible: row[4] !== false
    };
  }).filter(function(message) {
    return publicOnly ? message.visible !== false : true;
  }).reverse();
}

function deleteRowById_(sheetName, id) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  const row = findRowById_(sheet, id);
  if (row > 0) sheet.deleteRow(row);
}

function findRowById_(sheet, id) {
  if (!id) return -1;
  const values = sheet.getRange(1, 1, sheet.getLastRow(), 1).getValues();
  for (var i = 1; i < values.length; i++) {
    if (String(values[i][0]) === String(id)) return i + 1;
  }
  return -1;
}

function getSetting_(key) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(SETTINGS_SHEET);
  const values = sheet.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    if (values[i][0] === key) return values[i][1];
  }
  return '';
}

function setSetting_(key, value) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(SETTINGS_SHEET);
  const values = sheet.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    if (values[i][0] === key) {
      sheet.getRange(i + 1, 2, 1, 2).setValues([[value, new Date().toISOString()]]);
      return;
    }
  }
  sheet.appendRow([key, value, new Date().toISOString()]);
}

function ensureSheets_() {
  const ss = SpreadsheetApp.getActive();
  ensureSheet_(ss, SETTINGS_SHEET, ['key', 'value', 'updatedAt']);
  ensureSheet_(ss, RSVP_SHEET, ['id', 'data', 'attending', 'responsavel', 'convidadosJson', 'observacoes']);
  ensureSheet_(ss, MESSAGES_SHEET, ['id', 'data', 'from', 'text', 'visible']);
}

function ensureSheet_(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }
}

function assertAdmin_(password) {
  const expected = PropertiesService.getScriptProperties().getProperty('ADMIN_PASSWORD');
  if (!expected) throw new Error('Configure ADMIN_PASSWORD nas propriedades do script.');
  if (String(password || '') !== String(expected)) throw new Error('Senha inválida.');
}

function parseJson_(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function defaultState_() {
  return {
    site: {
      nomes: 'Lia e Diego',
      tagline: 'onde o amor se senta à mesa',
      heroPhrase: 'Há um lugar reservado à mesa para cada história que importa.',
      date: '2026-11-01',
      time: '10:00',
      location: 'Itapetininga',
      address: 'Endereço a definir',
      heroImage: 'assets/casal.jpg',
      countdownImage: 'assets/casal.jpg',
      storyImage: 'assets/casal.jpg',
      storyHtml: '<p>Os noivos editarão este texto depois da publicação.</p>',
      giftsIntro: 'Cada presente é um gesto que nos acompanhará para sempre.'
    },
    theme: {
      burgundy: '#951c31',
      terracotta: '#d16a49',
      cream: '#fff4df',
      brown: '#5c3f19'
    },
    sections: [
      { id: 'hero', label: 'Início', visible: true, order: 1 },
      { id: 'countdown', label: 'Contagem', visible: true, order: 2 },
      { id: 'story', label: 'História', visible: true, order: 3 },
      { id: 'saveDate', label: 'Save the date', visible: true, order: 4 },
      { id: 'gifts', label: 'Presentes', visible: true, order: 5 },
      { id: 'gallery', label: 'Galeria', visible: true, order: 6 },
      { id: 'rsvp', label: 'RSVP', visible: true, order: 7 },
      { id: 'faq', label: 'FAQ', visible: true, order: 8 },
      { id: 'lodging', label: 'Acomodações', visible: true, order: 9 },
      { id: 'messages', label: 'Recados', visible: true, order: 10 },
      { id: 'footer', label: 'Rodapé', visible: true, order: 11 }
    ],
    gifts: [
      { id: 'p1', nome: 'Jogo de taças de cristal', valor: 280, qtdTotal: 2, qtdComprada: 0, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p2', nome: 'Aparelho de jantar', valor: 650, qtdTotal: 1, qtdComprada: 0, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p3', nome: 'Jogo de panelas', valor: 890, qtdTotal: 1, qtdComprada: 0, linkPix: '', linkCartao: '', compradores: [] }
    ],
    gallery: [
      { label: '2019 · o encontro', image: 'assets/casal.jpg' },
      { label: 'Holambra · 2021', image: 'assets/casal.jpg' },
      { label: 'Pedido · 2024', image: 'assets/casal.jpg' },
      { label: 'Família', image: 'assets/casal.jpg' }
    ],
    faq: [
      { q: 'Que horas devo chegar?', a: 'Recomendamos chegar com antecedência para se acomodar antes da cerimônia.' },
      { q: 'Posso levar acompanhante?', a: 'Por favor, confirme no RSVP os acompanhantes que estarão com você.' },
      { q: 'Qual é o dress code?', a: 'Sugerimos traje leve e confortável, alinhado ao horário e ao local da celebração.' }
    ],
    lodging: [
      { name: 'Hotel recomendado', tag: 'recomendado', distance: 'Distância a definir', price: 'Valor a definir', code: '' },
      { name: 'Pousada próxima', tag: 'alternativa', distance: 'Distância a definir', price: 'Valor a definir', code: '' },
      { name: 'Hospedagem em grupo', tag: 'em grupo', distance: 'Distância a definir', price: 'Valor a definir', code: '' }
    ]
  };
}
