const SETTINGS_SHEET = 'settings';
const RSVP_SHEET = 'rsvps';
const MESSAGES_SHEET = 'messages';
const STATE_KEY = 'state';
const GIFT_IMAGE_URLS = {
  p3: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=900&q=80',
  p1778448357143: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=900&q=80',
  p1778448526380: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80',
  p1778448531247: 'assets/Tampão de ouvido.png',
  p1778448531362: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80',
  p1778448531555: 'https://images.unsplash.com/photo-1612800317101-ed7de737b36f?auto=format&fit=crop&w=900&q=80',
  p1778448531927: 'https://images.unsplash.com/photo-1647381518264-97ff1835026f?auto=format&fit=crop&w=900&q=80',
  p1778448532096: 'assets/Massagem relaxante noivo.png',
  p1778448532248: 'assets/Aspirador .png',
  p1778448532366: 'assets/Multa do noivo .png',
  p1778448532543: 'https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=900&q=80',
  p1778448532679: 'assets/Um ano de streaming .png',
  p1778448532827: 'assets/Barbeiro.png',
  p1778448532967: 'assets/Academia.png',
  p1778448533103: 'https://images.unsplash.com/photo-1613067532415-90df85362423?auto=format&fit=crop&w=900&q=80',
  p1778448533272: 'https://images.unsplash.com/photo-1613067532415-90df85362423?auto=format&fit=crop&w=900&q=80',
  p1778448533415: 'https://images.unsplash.com/photo-1738484708927-c1f45df0b56e?auto=format&fit=crop&w=900&q=80',
  p1778448533551: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&w=900&q=80',
  p1778448533700: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=900&q=80',
  p1778448533983: 'https://images.unsplash.com/photo-1621215052063-6ed29c948b31?auto=format&fit=crop&w=900&q=80',
  p1778448534143: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80',
  p1778448534395: 'assets/Um ano de pelada.png',
  p1778448534619: 'https://images.unsplash.com/photo-1669211659110-3f3db4119b65?auto=format&fit=crop&w=900&q=80',
  p1778448534739: 'https://images.unsplash.com/photo-1668435528344-b70cedd6df88?auto=format&fit=crop&w=900&q=80',
  p1778448534883: 'assets/Cadeiras.png',
  p1778448535027: 'https://images.unsplash.com/photo-1584990347193-6bebebfeaeee?auto=format&fit=crop&w=900&q=80',
  p1778448535195: 'https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?auto=format&fit=crop&w=900&q=80',
  p1778448535323: 'assets/Aposentadoria.png',
  p1778457652624: 'https://images.unsplash.com/photo-1648538923547-074724ca7a18?auto=format&fit=crop&w=900&q=80'
};

const LEGACY_GIFT_IMAGE_URLS = {
  p1778448531247: 'https://images.unsplash.com/photo-1603336540413-009bd9dc5133?auto=format&fit=crop&w=900&q=80',
  p1778448532096: 'https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?auto=format&fit=crop&w=900&q=80',
  p1778448532248: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?auto=format&fit=crop&w=900&q=80',
  p1778448532366: 'https://images.unsplash.com/photo-1635930919419-f935f8902b0f?auto=format&fit=crop&w=900&q=80',
  p1778448532679: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=900&q=80',
  p1778448532827: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80',
  p1778448532967: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
  p1778448534395: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?auto=format&fit=crop&w=900&q=80',
  p1778448534883: 'https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?auto=format&fit=crop&w=900&q=80',
  p1778448535323: 'https://images.unsplash.com/photo-1634474588707-de99f09285c0?auto=format&fit=crop&w=900&q=80'
};

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
      saveState_(mergeDefaults_(current, incoming));
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
  state.gifts = withGiftImages_(state.gifts);
  state.messages = listMessages_(true);
  return state;
}

function getState_() {
  const raw = getSetting_(STATE_KEY);
  if (!raw) return defaultState_();
  try {
    const state = mergeDefaults_(defaultState_(), JSON.parse(raw));
    state.gifts = withGiftImages_(state.gifts);
    return state;
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

function mergeDefaults_(base, incoming) {
  const merged = JSON.parse(JSON.stringify(base || {}));
  if (!incoming || typeof incoming !== 'object') return merged;
  Object.keys(incoming).forEach(function(key) {
    const value = incoming[key];
    if (Array.isArray(value)) {
      merged[key] = value;
    } else if (value && typeof value === 'object' && merged[key] && typeof merged[key] === 'object' && !Array.isArray(merged[key])) {
      merged[key] = mergeDefaults_(merged[key], value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}

function withGiftImages_(gifts) {
  return (gifts || []).map(function(gift) {
    gift.image = resolveGiftImage_(gift);
    return gift;
  });
}

function resolveGiftImage_(gift) {
  var defaultImage = GIFT_IMAGE_URLS[gift.id] || '';
  var currentImage = String(gift.image || '').trim();
  if (!defaultImage) return currentImage;
  if (!currentImage || currentImage === LEGACY_GIFT_IMAGE_URLS[gift.id]) return defaultImage;
  return gift.image;
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
      heroImage: 'assets/PreWedding Lia e Diego-213.jpg',
      countdownImage: 'assets/casal.jpg',
      storyImage: 'assets/PreWedding Lia e Diego-17.jpg',
      saveDateImage: 'assets/casal.jpg',
      heroChairsImage: 'assets/chairs.png',
      footerChairsImage: 'assets/chairs.png',
      storyHtml: '<p>Nos conhecemos na faculdade, por meio de amigos em comum, sem imaginar que ali começava a nossa história.\n\nEntre conversas, encontros entre amigos e um guarda-chuva esquecido, fomos nos aproximando. Nosso primeiro encontro não foi exatamente perfeito — na verdade, foi um bem desajeitado, cheio de nervosismo e silêncios. Um começo bem alternativo de comédia romântica, mas, de alguma forma, foi justamente ali que tudo começou.\n\nDepois daquela noite, vieram novas (e melhores) conversas, novos encontros e junto com um de chocolate, uma carta e um pedido para tentar de novo.\n\nA partir daí, a história foi acontecendo naturalmente. Os dois com rodinhas nos pés viajaram vários quilômetros, tiveram momentos em família, vários dates de cafés da manhã, o pedido de namoro em Holambra, a fase do namoro à distância, as conquistas profissionais, a formatura e muitas memórias construídas juntos.\n\nHoje, celebramos tudo o que vivemos até aqui e damos o próximo passo da nossa história: o começo da nossa família.</p>',
      giftsIntro: 'Não há necessidade de presentes em caixas – sua presença é realmente o melhor presente que poderíamos pedir. Mas se você desejar nos presentear com algo, criamos uma lista com alguns itens pra nos auxiliar nessa nova jornada.'
    },
    theme: {
      burgundy: '#951c31',
      terracotta: '#d16a49',
      cream: '#fff4df',
      brown: '#5c3f19'
    },
    visual: {
      menu: { background: '#951c31', text: '#fff4df', borderOpacity: 0.24 },
      hero: {
        titleColor: '#951c31',
        titleBackground: '#fff4df',
        titleBackgroundOpacity: 0,
        titleTop: 112,
        titleLeft: 80,
        titleWidth: 300,
        tagColor: '#951c31',
        tagTop: 470,
        tagLeft: 138,
        tagWidth: 280,
        imagePosition: 'center',
        overlayColor: '#fff4df',
        overlayOpacity: 0.08
      },
      countdown: {
        paddingY: 82,
        eyebrowSize: 0.86,
        titleSize: 4.9,
        titleColor: '#5c3f19',
        eyebrowColor: '#d16a49',
        imagePosition: 'center',
        overlayColor: '#fff4df',
        overlayOpacity: 0.88
      },
      saveDate: { minHeight: 280, imagePosition: 'center', overlayColor: '#fff4df', overlayOpacity: 0.08 },
      sections: { giftsPaddingY: 82, faqPaddingY: 82, galleryPaddingY: 86, lodgingPaddingY: 88, messagesPaddingY: 82, storyPaddingY: 92, rsvpPaddingY: 100 },
      titles: { giftsTitleSize: 5.8, faqTitleSize: 5.4, faqQuestionSize: 1.75, lodgingTitleSize: 5.9, footerTaglineSize: 2.15 },
      blocks: {
        giftsBackground: '#fff4df',
        faqBackground: '#fff4df',
        galleryBackground: '#f4e5c8',
        lodgingBackground: '#d16a49',
        messagesBackground: '#f4e5c8',
        footerBackground: '#951c31',
        footerText: '#fff4df',
        cardBackground: '#ffffff',
        cardOpacity: 0.66,
        cardBorderColor: '#5c3f19',
        cardBorderOpacity: 0.14
      }
    },
    sections: [
      { id: 'hero', label: 'Início', visible: true, order: 1 },
      { id: 'story', label: 'História', visible: true, order: 2 },
      { id: 'countdown', label: 'Contagem', visible: true, order: 3 },
      { id: 'saveDate', label: 'Save the date', visible: false, order: 4 },
      { id: 'gifts', label: 'Presentes', visible: true, order: 5 },
      { id: 'gallery', label: 'Galeria', visible: true, order: 6 },
      { id: 'rsvp', label: 'RSVP', visible: true, order: 7 },
      { id: 'faq', label: 'FAQ', visible: true, order: 8 },
      { id: 'lodging', label: 'Acomodações', visible: true, order: 9 },
      { id: 'messages', label: 'Recados', visible: true, order: 10 },
      { id: 'footer', label: 'Rodapé', visible: true, order: 11 }
    ],
    gifts: [
      { id: 'p3', nome: 'Cofrinho “Fundo emergencial para TPM”', valor: 89, qtdTotal: 2, qtdComprada: 0, image: GIFT_IMAGE_URLS.p3, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448357143', nome: 'Caneca “eu nao preciso de google, minha esposa sabe tudo”', valor: 65, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448357143, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448526380', nome: 'Pedágios da Lua de Mel', valor: 100, qtdTotal: 2, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448526380, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448531247', nome: 'Tampão de ouvido pra noiva não ouvir o ronco do noivo', valor: 79, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448531247, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448531362', nome: 'Lanchinho pra saciar a faminta da noiva', valor: 27.5, qtdTotal: 1000, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448531362, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448531555', nome: 'Pano de chão pra casa dos noivos', valor: 125, qtdTotal: 5, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448531555, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448531927', nome: 'Faxina paga pros noivos descansarem', valor: 150, qtdTotal: 4, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448531927, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448532096', nome: 'Massagem relaxante para o noivo depois de ver a conta do casamento', valor: 200, qtdTotal: 2, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532096, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448532248', nome: 'Aspirador vertical', valor: 210, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532248, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448532366', nome: 'Pagar as multas de trânsito da Noiva', valor: 220, qtdTotal: 5, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532366, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448532543', nome: 'Cobertor pra noiva estar sempre coberta de razão', valor: 239, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532543, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448532679', nome: 'Um ano de streamings pra garantir a sessão cinema', valor: 264.99, qtdTotal: 3, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532679, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448532827', nome: '6 meses de barbeiro pro noivo', valor: 289, qtdTotal: 2, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532827, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448532967', nome: 'Academia pros Noivos entrarem em forma depois da Lua de Mel', valor: 299, qtdTotal: 3, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532967, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448533103', nome: 'Primeiro lugar na fila do buffet', valor: 325, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448533103, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448533272', nome: 'Segundo lugar na fila do buffet', valor: 300, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448533272, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448533415', nome: 'Aparelho de Jantar', valor: 320, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448533415, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448533551', nome: 'Alexa pra noiva não mandar só no noivo ', valor: 389, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448533551, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448533700', nome: 'Jogar o Buque na sua direção', valor: 350, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448533700, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448533983', nome: 'Prioridade no quarto de visitas', valor: 499, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448533983, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448534143', nome: 'Spa Day pra noiva relaxar', valor: 450, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448534143, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448534395', nome: 'Pro noivo poder jogar uma pelada toda semana', valor: 500, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448534395, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448534619', nome: 'Purificador de água pros noivos ficarem bem hidratados', valor: 530, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448534619, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448534739', nome: 'Diária na Lua de mel', valor: 599, qtdTotal: 6, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448534739, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448534883', nome: 'Cadeira ergonômica pro escritório pra não ter dor nas costas', valor: 855, qtdTotal: 2, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448534883, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448535027', nome: 'Jogo de panelas', valor: 700, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448535027, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448535195', nome: 'Smart TV', valor: 3195, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448535195, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778448535323', nome: 'Ajuda pra aposentadoria dos noivos', valor: 1755, qtdTotal: 2, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448535323, linkPix: '', linkCartao: '', compradores: [] },
      { id: 'p1778457652624', nome: 'Ir junto com os noivos pra Lua de Mel ', valor: 150000, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778457652624, linkPix: '', linkCartao: '', compradores: [] }
    ],
    gallery: [
      { label: '2019 · o encontro', image: 'assets/PreWedding Lia e Diego-103.jpg' },
      { label: 'Holambra · 2021', image: 'assets/PreWedding Lia e Diego-111.jpg' },
      { label: 'Pedido · 2024', image: 'assets/PreWedding Lia e Diego-171.jpg' },
      { label: 'Família', image: 'assets/PreWedding Lia e Diego-103.jpg' }
    ],
    faq: [
      { q: 'Que horas devo chegar?', a: 'Recomendamos que chegue por volta das 9h30 da manhã para que tenha tempo de se acomodar antes do início da cerimônia.' },
      { q: 'Posso levar acompanhante?', a: 'Como se trata de uma celebração pequena e íntima, pedimos gentilmente que compareçam apenas as pessoas listadas no convite. Caso tenha alguma dúvida, é só falar com a gente.' },
      { q: 'Qual é o dress code?', a: 'Sugerimos um traje leve e confortável, no estilo esporte fino, alinhado ao período da manhã. Tecidos mais fluidos, e sapatos confortáveis são bem-vindos.' }
    ],
    lodging: [
      { name: 'Hotel recomendado', tag: 'recomendado', distance: 'Distância a definir', price: 'Valor a definir', code: '' },
      { name: 'Pousada próxima', tag: 'alternativa', distance: 'Distância a definir', price: 'Valor a definir', code: '' },
      { name: 'Hospedagem em grupo', tag: 'em grupo', distance: 'Distância a definir', price: 'Valor a definir', code: '' }
    ]
  };
}
