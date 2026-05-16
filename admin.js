const GIFT_IMAGE_URLS = {
  p3: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=900&q=80",
  p1778448357143: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=900&q=80",
  p1778448526380: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80",
  p1778448531247: "assets/Tampão de ouvido.png",
  p1778448531362: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80",
  p1778448531555: "https://images.unsplash.com/photo-1612800317101-ed7de737b36f?auto=format&fit=crop&w=900&q=80",
  p1778448531927: "https://images.unsplash.com/photo-1647381518264-97ff1835026f?auto=format&fit=crop&w=900&q=80",
  p1778448532096: "assets/Massagem relaxante noivo.png",
  p1778448532248: "assets/Aspirador .png",
  p1778448532366: "assets/Multa do noivo .png",
  p1778448532543: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=900&q=80",
  p1778448532679: "assets/Um ano de streaming .png",
  p1778448532827: "assets/Barbeiro.png",
  p1778448532967: "assets/Academia.png",
  p1778448533103: "https://images.unsplash.com/photo-1613067532415-90df85362423?auto=format&fit=crop&w=900&q=80",
  p1778448533272: "https://images.unsplash.com/photo-1613067532415-90df85362423?auto=format&fit=crop&w=900&q=80",
  p1778448533415: "https://images.unsplash.com/photo-1738484708927-c1f45df0b56e?auto=format&fit=crop&w=900&q=80",
  p1778448533551: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&w=900&q=80",
  p1778448533700: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=900&q=80",
  p1778448533983: "https://images.unsplash.com/photo-1621215052063-6ed29c948b31?auto=format&fit=crop&w=900&q=80",
  p1778448534143: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80",
  p1778448534395: "assets/Um ano de pelada.png",
  p1778448534619: "https://images.unsplash.com/photo-1669211659110-3f3db4119b65?auto=format&fit=crop&w=900&q=80",
  p1778448534739: "https://images.unsplash.com/photo-1668435528344-b70cedd6df88?auto=format&fit=crop&w=900&q=80",
  p1778448534883: "assets/Cadeiras.png",
  p1778448535027: "https://images.unsplash.com/photo-1584990347193-6bebebfeaeee?auto=format&fit=crop&w=900&q=80",
  p1778448535195: "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?auto=format&fit=crop&w=900&q=80",
  p1778448535323: "assets/Aposentadoria.png",
  p1778457652624: "https://images.unsplash.com/photo-1648538923547-074724ca7a18?auto=format&fit=crop&w=900&q=80"
};

const LEGACY_GIFT_IMAGE_URLS = {
  p1778448531247: "https://images.unsplash.com/photo-1603336540413-009bd9dc5133?auto=format&fit=crop&w=900&q=80",
  p1778448532096: "https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?auto=format&fit=crop&w=900&q=80",
  p1778448532248: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?auto=format&fit=crop&w=900&q=80",
  p1778448532366: "https://images.unsplash.com/photo-1635930919419-f935f8902b0f?auto=format&fit=crop&w=900&q=80",
  p1778448532679: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=900&q=80",
  p1778448532827: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
  p1778448532967: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  p1778448534395: "https://images.unsplash.com/photo-1546608235-3310a2494cdf?auto=format&fit=crop&w=900&q=80",
  p1778448534883: "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?auto=format&fit=crop&w=900&q=80",
  p1778448535323: "https://images.unsplash.com/photo-1634474588707-de99f09285c0?auto=format&fit=crop&w=900&q=80"
};

const DEFAULT_STATE = {
  site: {
    nomes: "Lia e Diego",
    tagline: "onde o amor se senta à mesa",
    heroPhrase: "Há um lugar reservado à mesa para cada história que importa.",
    date: "2026-11-01",
    time: "10:00",
    location: "Itapetininga",
    address: "Endereço a definir",
    heroImage: "assets/PreWedding Lia e Diego-213.jpg",
    countdownImage: "assets/casal.jpg",
    storyImage: "assets/PreWedding Lia e Diego-17.jpg",
    saveDateImage: "assets/casal.jpg",
    heroChairsImage: "assets/chairs.png",
    footerChairsImage: "assets/chairs.png",
    storyHtml: `<p>Nos conhecemos na faculdade, por meio de amigos em comum, sem imaginar que ali começava a nossa história.

Entre conversas, encontros entre amigos e um guarda-chuva esquecido, fomos nos aproximando. Nosso primeiro encontro não foi exatamente perfeito — na verdade, foi um bem desajeitado, cheio de nervosismo e silêncios. Um começo bem alternativo de comédia romântica, mas, de alguma forma, foi justamente ali que tudo começou.

Depois daquela noite, vieram novas (e melhores) conversas, novos encontros e junto com um de chocolate, uma carta e um pedido para tentar de novo.

A partir daí, a história foi acontecendo naturalmente. Os dois com rodinhas nos pés viajaram vários quilômetros, tiveram momentos em família, vários dates de cafés da manhã, o pedido de namoro em Holambra, a fase do namoro à distância, as conquistas profissionais, a formatura e muitas memórias construídas juntos.

Hoje, celebramos tudo o que vivemos até aqui e damos o próximo passo da nossa história: o começo da nossa família.</p>`,
    giftsIntro: "Não há necessidade de presentes em caixas – sua presença é realmente o melhor presente que poderíamos pedir. Mas se você desejar nos presentear com algo, criamos uma lista com alguns itens pra nos auxiliar nessa nova jornada."
  },
  theme: { burgundy: "#951c31", terracotta: "#d16a49", cream: "#fff4df", brown: "#5c3f19" },
  visual: {
    menu: { background: "#951c31", text: "#fff4df", borderOpacity: 0.24 },
    hero: {
      titleColor: "#951c31",
      titleBackground: "#fff4df",
      titleBackgroundOpacity: 0,
      titleTop: 112,
      titleLeft: 80,
      titleWidth: 300,
      tagColor: "#951c31",
      tagTop: 470,
      tagLeft: 138,
      tagWidth: 280,
      imagePosition: "center",
      overlayColor: "#fff4df",
      overlayOpacity: 0.08
    },
    countdown: {
      paddingY: 82,
      eyebrowSize: 0.86,
      titleSize: 4.9,
      titleColor: "#5c3f19",
      eyebrowColor: "#d16a49",
      imagePosition: "center",
      overlayColor: "#fff4df",
      overlayOpacity: 0.88
    },
    saveDate: { minHeight: 280, imagePosition: "center", overlayColor: "#fff4df", overlayOpacity: 0.08 },
    sections: { giftsPaddingY: 82, faqPaddingY: 82, galleryPaddingY: 86, lodgingPaddingY: 88, messagesPaddingY: 82, storyPaddingY: 92, rsvpPaddingY: 100 },
    titles: { giftsTitleSize: 5.8, faqTitleSize: 5.4, faqQuestionSize: 1.75, lodgingTitleSize: 5.9, footerTaglineSize: 2.15 },
    blocks: {
      giftsBackground: "#fff4df",
      faqBackground: "#fff4df",
      galleryBackground: "#f4e5c8",
      lodgingBackground: "#d16a49",
      messagesBackground: "#f4e5c8",
      footerBackground: "#951c31",
      footerText: "#fff4df",
      cardBackground: "#ffffff",
      cardOpacity: 0.66,
      cardBorderColor: "#5c3f19",
      cardBorderOpacity: 0.14
    }
  },
  sections: [
    { id: "hero", label: "Início", visible: true, order: 1 },
    { id: "story", label: "História", visible: true, order: 2 },
    { id: "countdown", label: "Contagem", visible: true, order: 3 },
    { id: "saveDate", label: "Save the date", visible: false, order: 4 },
    { id: "gifts", label: "Presentes", visible: true, order: 5 },
    { id: "gallery", label: "Galeria", visible: true, order: 6 },
    { id: "rsvp", label: "RSVP", visible: true, order: 7 },
    { id: "faq", label: "FAQ", visible: true, order: 8 },
    { id: "lodging", label: "Acomodações", visible: true, order: 9 },
    { id: "messages", label: "Recados", visible: true, order: 10 },
    { id: "footer", label: "Rodapé", visible: true, order: 11 }
  ],
  gifts: [
    { id: "p3", nome: "Cofrinho “Fundo emergencial para TPM”", valor: 89, qtdTotal: 2, qtdComprada: 0, image: GIFT_IMAGE_URLS.p3, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448357143", nome: "Caneca “eu nao preciso de google, minha esposa sabe tudo”", valor: 65, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448357143, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448526380", nome: "Pedágios da Lua de Mel", valor: 100, qtdTotal: 2, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448526380, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448531247", nome: "Tampão de ouvido pra noiva não ouvir o ronco do noivo", valor: 79, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448531247, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448531362", nome: "Lanchinho pra saciar a faminta da noiva", valor: 27.5, qtdTotal: 1000, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448531362, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448531555", nome: "Pano de chão pra casa dos noivos", valor: 125, qtdTotal: 5, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448531555, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448531927", nome: "Faxina paga pros noivos descansarem", valor: 150, qtdTotal: 4, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448531927, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448532096", nome: "Massagem relaxante para o noivo depois de ver a conta do casamento", valor: 200, qtdTotal: 2, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532096, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448532248", nome: "Aspirador vertical", valor: 210, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532248, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448532366", nome: "Pagar as multas de trânsito da Noiva", valor: 220, qtdTotal: 5, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532366, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448532543", nome: "Cobertor pra noiva estar sempre coberta de razão", valor: 239, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532543, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448532679", nome: "Um ano de streamings pra garantir a sessão cinema", valor: 264.99, qtdTotal: 3, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532679, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448532827", nome: "6 meses de barbeiro pro noivo", valor: 289, qtdTotal: 2, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532827, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448532967", nome: "Academia pros Noivos entrarem em forma depois da Lua de Mel", valor: 299, qtdTotal: 3, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448532967, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448533103", nome: "Primeiro lugar na fila do buffet", valor: 325, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448533103, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448533272", nome: "Segundo lugar na fila do buffet", valor: 300, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448533272, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448533415", nome: "Aparelho de Jantar", valor: 320, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448533415, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448533551", nome: "Alexa pra noiva não mandar só no noivo ", valor: 389, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448533551, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448533700", nome: "Jogar o Buque na sua direção", valor: 350, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448533700, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448533983", nome: "Prioridade no quarto de visitas", valor: 499, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448533983, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448534143", nome: "Spa Day pra noiva relaxar", valor: 450, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448534143, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448534395", nome: "Pro noivo poder jogar uma pelada toda semana", valor: 500, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448534395, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448534619", nome: "Purificador de água pros noivos ficarem bem hidratados", valor: 530, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448534619, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448534739", nome: "Diária na Lua de mel", valor: 599, qtdTotal: 6, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448534739, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448534883", nome: "Cadeira ergonômica pro escritório pra não ter dor nas costas", valor: 855, qtdTotal: 2, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448534883, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448535027", nome: "Jogo de panelas", valor: 700, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448535027, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448535195", nome: "Smart TV", valor: 3195, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448535195, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778448535323", nome: "Ajuda pra aposentadoria dos noivos", valor: 1755, qtdTotal: 2, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778448535323, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p1778457652624", nome: "Ir junto com os noivos pra Lua de Mel ", valor: 150000, qtdTotal: 1, qtdComprada: 0, image: GIFT_IMAGE_URLS.p1778457652624, linkPix: "", linkCartao: "", compradores: [] }
  ],
  gallery: [
    { label: "2019 · o encontro", image: "assets/PreWedding Lia e Diego-103.jpg" },
    { label: "Holambra · 2021", image: "assets/PreWedding Lia e Diego-111.jpg" },
    { label: "Pedido · 2024", image: "assets/PreWedding Lia e Diego-171.jpg" },
    { label: "Família", image: "assets/PreWedding Lia e Diego-103.jpg" }
  ],
  faq: [
    { q: "Que horas devo chegar?", a: "Recomendamos que chegue por volta das 9h30 da manhã para que tenha tempo de se acomodar antes do início da cerimônia." },
    { q: "Posso levar acompanhante?", a: "Como se trata de uma celebração pequena e íntima, pedimos gentilmente que compareçam apenas as pessoas listadas no convite. Caso tenha alguma dúvida, é só falar com a gente." },
    { q: "Qual é o dress code?", a: "Sugerimos um traje leve e confortável, no estilo esporte fino, alinhado ao período da manhã. Tecidos mais fluidos, e sapatos confortáveis são bem-vindos." }
  ],
  lodging: [
    { name: "Hotel recomendado", tag: "recomendado", distance: "Distância a definir", price: "Valor a definir", code: "" },
    { name: "Pousada próxima", tag: "alternativa", distance: "Distância a definir", price: "Valor a definir", code: "" },
    { name: "Hospedagem em grupo", tag: "em grupo", distance: "Distância a definir", price: "Valor a definir", code: "" }
  ],
  messages: [
    { id: "m1", from: "Família", text: "Que este novo capítulo seja cheio de amor.", data: new Date().toISOString(), visible: true }
  ],
  rsvps: []
};

const LOCAL_KEY = "casamento_lia_diego_state_v1";
const config = window.WEDDING_SITE_CONFIG || {};
const apiUrl = (config.apiUrl || "").trim();
const hasBackend = Boolean(apiUrl);

let state = clone(DEFAULT_STATE);
let adminPassword = "";
let editingRsvpId = null;

document.addEventListener("DOMContentLoaded", initAdmin);

function initAdmin() {
  document.querySelector("[data-local-warning]").hidden = hasBackend;
  document.querySelector("[data-login-button]").addEventListener("click", login);
  document.querySelector("[data-admin-password]").addEventListener("keydown", (event) => {
    if (event.key === "Enter") login();
  });
  document.querySelector("[data-save-state]").addEventListener("click", saveState);
  document.querySelectorAll("[data-tab-button]").forEach((button) => {
    button.addEventListener("click", () => openTab(button.dataset.tabButton));
  });
  document.querySelector("[data-add-gift]").addEventListener("click", addGift);
  document.querySelector("[data-add-gallery]").addEventListener("click", addGalleryItem);
  document.querySelector("[data-add-faq]").addEventListener("click", addFaqItem);
  document.querySelector("[data-add-lodging]").addEventListener("click", addLodgingItem);
  document.querySelector("[data-add-rsvp]").addEventListener("click", () => openRsvpDialog());
  document.querySelector("[data-export-rsvp]").addEventListener("click", exportRsvps);
  document.querySelector("[data-close-rsvp-dialog]").addEventListener("click", () => document.querySelector("[data-rsvp-dialog]").close());
  document.querySelector("[data-rsvp-form]").addEventListener("submit", submitRsvpDialog);
}

async function login() {
  adminPassword = document.querySelector("[data-admin-password]").value.trim();
  if (!adminPassword && hasBackend) {
    toast("Informe a senha.", "error");
    return;
  }
  try {
    if (hasBackend) {
      const data = await apiPost("adminBootstrap", { password: adminPassword });
      state = mergeState(DEFAULT_STATE, data.state || {});
      state.rsvps = data.rsvps || [];
      state.messages = data.messages || state.messages || [];
    } else {
      state = mergeState(DEFAULT_STATE, readLocal());
    }
    document.querySelector("[data-login]").hidden = true;
    document.querySelector("[data-workspace]").hidden = false;
    renderAll();
    toast("Painel carregado.");
  } catch (error) {
    console.error(error);
    toast(error.message || "Não foi possível entrar.", "error");
  }
}

function renderAll() {
  bindFields();
  renderSections();
  renderListEditors();
  renderGiftsEditor();
  renderRsvp();
  renderMessages();
}

function bindFields() {
  document.querySelectorAll("[data-field]").forEach((field) => {
    const value = getPath(state, field.dataset.field);
    if (field.type === "checkbox") {
      field.checked = Boolean(value);
    } else {
      field.value = value == null ? "" : value;
    }
    field.oninput = () => {
      let next;
      if (field.type === "checkbox") next = field.checked;
      else if (["number", "range"].includes(field.type)) next = Number(field.value || 0);
      else next = field.value;
      setPath(state, field.dataset.field, next);
    };
    field.onchange = field.oninput;
  });
}

function renderSections() {
  const tbody = document.querySelector("[data-sections-list]");
  tbody.innerHTML = state.sections.map((section, index) => `
    <tr>
      <td><input type="checkbox" data-section-visible="${index}" ${section.visible !== false ? "checked" : ""}></td>
      <td>${escapeHtml(section.label)}</td>
      <td><input type="number" min="1" step="1" value="${Number(section.order || index + 1)}" data-section-order="${index}"></td>
    </tr>
  `).join("");
  tbody.querySelectorAll("[data-section-visible]").forEach((input) => {
    input.addEventListener("change", () => {
      state.sections[Number(input.dataset.sectionVisible)].visible = input.checked;
    });
  });
  tbody.querySelectorAll("[data-section-order]").forEach((input) => {
    input.addEventListener("input", () => {
      state.sections[Number(input.dataset.sectionOrder)].order = Number(input.value || 0);
    });
  });
}

function renderListEditors() {
  renderGalleryEditor();
  renderFaqEditor();
  renderLodgingEditor();
}

function renderGalleryEditor() {
  const container = document.querySelector("[data-gallery-editor]");
  state.gallery = Array.isArray(state.gallery) ? state.gallery : [];
  container.innerHTML = state.gallery.map((item, index) => `
    <article class="list-editor" data-gallery-index="${index}">
      <h3>Foto ${index + 1}</h3>
      <div class="list-editor-grid">
        <label><span>Legenda</span><input data-gallery-field="label" value="${escapeAttr(item.label || "")}"></label>
        <label><span>Imagem URL/caminho</span><input data-gallery-field="image" value="${escapeAttr(item.image || "")}"></label>
      </div>
      <div class="actions-row">
        <button type="button" class="danger" data-remove-gallery="${index}">Excluir foto</button>
      </div>
    </article>
  `).join("");
  bindListInputs(container, "gallery", "gallery");
}

function renderFaqEditor() {
  const container = document.querySelector("[data-faq-editor]");
  state.faq = Array.isArray(state.faq) ? state.faq : [];
  container.innerHTML = state.faq.map((item, index) => `
    <article class="list-editor" data-faq-index="${index}">
      <h3>Pergunta ${index + 1}</h3>
      <div class="list-editor-grid">
        <label class="full"><span>Pergunta</span><input data-faq-field="q" value="${escapeAttr(item.q || "")}"></label>
        <label class="full"><span>Resposta</span><textarea rows="4" data-faq-field="a">${escapeHtml(item.a || "")}</textarea></label>
      </div>
      <div class="actions-row">
        <button type="button" class="danger" data-remove-faq="${index}">Excluir pergunta</button>
      </div>
    </article>
  `).join("");
  bindListInputs(container, "faq", "faq");
}

function renderLodgingEditor() {
  const container = document.querySelector("[data-lodging-editor]");
  state.lodging = Array.isArray(state.lodging) ? state.lodging : [];
  container.innerHTML = state.lodging.map((item, index) => `
    <article class="list-editor" data-lodging-index="${index}">
      <h3>Acomodação ${index + 1}</h3>
      <div class="list-editor-grid">
        <label><span>Nome</span><input data-lodging-field="name" value="${escapeAttr(item.name || "")}"></label>
        <label><span>Tag</span><input data-lodging-field="tag" value="${escapeAttr(item.tag || "")}"></label>
        <label><span>Distância</span><input data-lodging-field="distance" value="${escapeAttr(item.distance || "")}"></label>
        <label><span>Valor</span><input data-lodging-field="price" value="${escapeAttr(item.price || "")}"></label>
        <label class="full"><span>Código/observação</span><input data-lodging-field="code" value="${escapeAttr(item.code || "")}"></label>
      </div>
      <div class="actions-row">
        <button type="button" class="danger" data-remove-lodging="${index}">Excluir acomodação</button>
      </div>
    </article>
  `).join("");
  bindListInputs(container, "lodging", "lodging");
}

function bindListInputs(container, stateKey, datasetKey) {
  container.querySelectorAll(`[data-${datasetKey}-field]`).forEach((input) => {
    input.addEventListener("input", () => {
      const wrap = input.closest(`[data-${datasetKey}-index]`);
      const item = state[stateKey][Number(wrap.dataset[`${datasetKey}Index`])];
      item[input.dataset[`${datasetKey}Field`]] = input.value;
    });
  });
  container.querySelectorAll(`[data-remove-${datasetKey}]`).forEach((button) => {
    button.addEventListener("click", () => {
      state[stateKey].splice(Number(button.dataset[`remove${capitalize(datasetKey)}`]), 1);
      renderListEditors();
    });
  });
}

function addGalleryItem() {
  state.gallery = Array.isArray(state.gallery) ? state.gallery : [];
  state.gallery.push({ label: "Nova foto", image: "assets/casal.jpg" });
  renderGalleryEditor();
}

function addFaqItem() {
  state.faq = Array.isArray(state.faq) ? state.faq : [];
  state.faq.push({ q: "Nova pergunta", a: "Resposta" });
  renderFaqEditor();
}

function addLodgingItem() {
  state.lodging = Array.isArray(state.lodging) ? state.lodging : [];
  state.lodging.push({ name: "Nova acomodação", tag: "", distance: "", price: "", code: "" });
  renderLodgingEditor();
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderGiftsEditor() {
  const container = document.querySelector("[data-gifts-editor]");
  container.innerHTML = state.gifts.map((gift, index) => `
    <article class="gift-editor" data-gift-index="${index}">
      <div class="gift-editor-grid">
        <label><span>Nome</span><input data-gift-field="nome" value="${escapeAttr(gift.nome)}"></label>
        <label><span>Valor</span><input type="number" min="0" step="0.01" data-gift-field="valor" value="${Number(gift.valor || 0)}"></label>
        <label><span>Qtd. total</span><input type="number" min="0" step="1" data-gift-field="qtdTotal" value="${Number(gift.qtdTotal || 0)}"></label>
        <label><span>Qtd. comprada</span><input type="number" min="0" step="1" data-gift-field="qtdComprada" value="${Number(gift.qtdComprada || 0)}"></label>
      </div>
      <div class="gift-editor-links">
        <label class="gift-editor-wide"><span>Foto do presente URL</span><input data-gift-field="image" placeholder="https://... ou assets/presente.jpg" value="${escapeAttr(gift.image || "")}"></label>
        <label><span>Link PIX</span><input data-gift-field="linkPix" value="${escapeAttr(gift.linkPix || "")}"></label>
        <label><span>Link cartão</span><input data-gift-field="linkCartao" value="${escapeAttr(gift.linkCartao || "")}"></label>
      </div>
      <div class="actions-row">
        <button type="button" class="danger" data-remove-gift="${index}">Excluir presente</button>
      </div>
    </article>
  `).join("");
  container.querySelectorAll("[data-gift-field]").forEach((input) => {
    input.addEventListener("input", () => {
      const wrap = input.closest("[data-gift-index]");
      const gift = state.gifts[Number(wrap.dataset.giftIndex)];
      const key = input.dataset.giftField;
      gift[key] = ["valor", "qtdTotal", "qtdComprada"].includes(key) ? Number(input.value || 0) : input.value;
    });
  });
  container.querySelectorAll("[data-remove-gift]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.removeGift);
      if (!confirm(`Excluir o presente "${state.gifts[index].nome}"?`)) return;
      state.gifts.splice(index, 1);
      renderGiftsEditor();
    });
  });
}

function addGift() {
  state.gifts.push({
    id: `p${Date.now()}`,
    nome: "Novo presente",
    valor: 0,
    qtdTotal: 1,
    qtdComprada: 0,
    image: "",
    linkPix: "",
    linkCartao: "",
    compradores: []
  });
  renderGiftsEditor();
}

async function saveState() {
  try {
    state.sections.sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
    if (hasBackend) {
      await apiPost("adminSaveState", { password: adminPassword, state: publicState() });
    } else {
      saveLocal();
    }
    renderSections();
    toast("Alterações salvas.");
  } catch (error) {
    console.error(error);
    toast(error.message || "Não foi possível salvar.", "error");
  }
}

function publicState() {
  const copy = clone(state);
  delete copy.rsvps;
  return copy;
}

function renderRsvp() {
  const list = state.rsvps || [];
  const confirmed = list.filter((item) => item.attending !== "nao");
  const companions = confirmed.reduce((sum, item) => sum + (item.convidados || []).length, 0);
  document.querySelector("[data-rsvp-stats]").innerHTML = `
    <div class="stat"><strong>${list.length}</strong><span>respostas</span></div>
    <div class="stat"><strong>${confirmed.length}</strong><span>confirmaram</span></div>
    <div class="stat"><strong>${list.length - confirmed.length}</strong><span>não poderão ir</span></div>
    <div class="stat"><strong>${confirmed.length + companions}</strong><span>pessoas confirmadas</span></div>
  `;
  const wrap = document.querySelector("[data-rsvp-table]");
  if (!list.length) {
    wrap.innerHTML = "<p class='empty'>Nenhuma resposta registrada ainda.</p>";
    return;
  }
  wrap.innerHTML = `
    <table>
      <thead>
        <tr><th>Presença</th><th>Nome</th><th>Acompanhantes</th><th>Observações</th><th>Data</th><th>Ações</th></tr>
      </thead>
      <tbody>
        ${list.map((rsvp) => `
          <tr>
            <td>${rsvp.attending === "nao" ? "Não" : "Sim"}</td>
            <td><strong>${escapeHtml(rsvp.responsavel)}</strong></td>
            <td>${(rsvp.convidados || []).map((guest) => escapeHtml(guest.nome || guest)).join("<br>") || "—"}</td>
            <td>${escapeHtml(rsvp.observacoes || "") || "—"}</td>
            <td>${rsvp.data ? new Date(rsvp.data).toLocaleString("pt-BR") : "—"}</td>
            <td class="actions">
              <button type="button" data-edit-rsvp="${rsvp.id}">Editar</button>
              <button type="button" class="danger" data-delete-rsvp="${rsvp.id}">Excluir</button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
  wrap.querySelectorAll("[data-edit-rsvp]").forEach((button) => {
    button.addEventListener("click", () => openRsvpDialog(button.dataset.editRsvp));
  });
  wrap.querySelectorAll("[data-delete-rsvp]").forEach((button) => {
    button.addEventListener("click", () => deleteRsvp(button.dataset.deleteRsvp));
  });
}

function openRsvpDialog(id = null) {
  editingRsvpId = id;
  const record = id ? state.rsvps.find((item) => item.id === id) : null;
  document.querySelector("[data-rsvp-dialog-title]").textContent = record ? "Editar confirmação" : "Nova confirmação";
  setDialogField("attending", record?.attending || "sim");
  setDialogField("responsavel", record?.responsavel || "");
  setDialogField("convidadosText", (record?.convidados || []).map((guest) => guest.nome || guest).join("\n"));
  setDialogField("observacoes", record?.observacoes || "");
  document.querySelector("[data-rsvp-dialog]").showModal();
}

async function submitRsvpDialog(event) {
  event.preventDefault();
  const record = {
    id: editingRsvpId || `r${Date.now()}`,
    attending: getDialogField("attending"),
    responsavel: getDialogField("responsavel").trim(),
    convidados: getDialogField("convidadosText").split(/\n+/).map((nome) => nome.trim()).filter(Boolean).map((nome) => ({ nome })),
    observacoes: getDialogField("observacoes").trim(),
    data: editingRsvpId ? state.rsvps.find((item) => item.id === editingRsvpId)?.data : new Date().toISOString()
  };
  if (!record.responsavel) {
    toast("Informe o nome.", "error");
    return;
  }
  try {
    if (hasBackend) {
      const data = await apiPost("adminUpsertRsvp", { password: adminPassword, rsvp: record });
      state.rsvps = data.rsvps || state.rsvps;
    } else {
      const index = state.rsvps.findIndex((item) => item.id === record.id);
      if (index >= 0) state.rsvps[index] = record;
      else state.rsvps.push(record);
      saveLocal();
    }
    document.querySelector("[data-rsvp-dialog]").close();
    renderRsvp();
    toast("Confirmação salva.");
  } catch (error) {
    console.error(error);
    toast(error.message || "Não foi possível salvar a confirmação.", "error");
  }
}

async function deleteRsvp(id) {
  const record = state.rsvps.find((item) => item.id === id);
  if (!record || !confirm(`Excluir a resposta de "${record.responsavel}"?`)) return;
  try {
    if (hasBackend) {
      const data = await apiPost("adminDeleteRsvp", { password: adminPassword, id });
      state.rsvps = data.rsvps || state.rsvps.filter((item) => item.id !== id);
    } else {
      state.rsvps = state.rsvps.filter((item) => item.id !== id);
      saveLocal();
    }
    renderRsvp();
    toast("Resposta excluída.");
  } catch (error) {
    console.error(error);
    toast(error.message || "Não foi possível excluir.", "error");
  }
}

function exportRsvps() {
  const header = ["Presença", "Nome", "Qtd. acompanhantes", "Acompanhantes", "Observações", "Data"];
  const rows = (state.rsvps || []).map((rsvp) => [
    rsvp.attending === "nao" ? "Não poderei ir" : "Confirmado",
    rsvp.responsavel,
    (rsvp.convidados || []).length,
    (rsvp.convidados || []).map((guest) => guest.nome || guest).join(" | "),
    rsvp.observacoes || "",
    rsvp.data ? new Date(rsvp.data).toLocaleString("pt-BR") : ""
  ]);
  downloadCsv([header, ...rows], `confirmacoes-casamento-${new Date().toISOString().slice(0, 10)}.csv`);
}

function renderMessages() {
  const list = state.messages || [];
  const wrap = document.querySelector("[data-messages-table]");
  if (!list.length) {
    wrap.innerHTML = "<p class='empty'>Nenhum recado registrado.</p>";
    return;
  }
  wrap.innerHTML = `
    <table>
      <thead><tr><th>Nome</th><th>Mensagem</th><th>Data</th><th>Ações</th></tr></thead>
      <tbody>
        ${list.map((msg) => `
          <tr>
            <td>${escapeHtml(msg.from)}</td>
            <td>${escapeHtml(msg.text)}</td>
            <td>${msg.data ? new Date(msg.data).toLocaleString("pt-BR") : "—"}</td>
            <td class="actions"><button type="button" class="danger" data-delete-message="${msg.id}">Excluir</button></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
  wrap.querySelectorAll("[data-delete-message]").forEach((button) => {
    button.addEventListener("click", () => deleteMessage(button.dataset.deleteMessage));
  });
}

async function deleteMessage(id) {
  if (!confirm("Excluir este recado?")) return;
  try {
    if (hasBackend) {
      const data = await apiPost("adminDeleteMessage", { password: adminPassword, id });
      state.messages = data.messages || state.messages.filter((item) => item.id !== id);
    } else {
      state.messages = state.messages.filter((item) => item.id !== id);
      saveLocal();
    }
    renderMessages();
    toast("Recado excluído.");
  } catch (error) {
    console.error(error);
    toast(error.message || "Não foi possível excluir o recado.", "error");
  }
}

function openTab(tab) {
  document.querySelectorAll("[data-tab-button]").forEach((button) => {
    button.classList.toggle("active", button.dataset.tabButton === tab);
  });
  document.querySelectorAll("[data-tab]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.tab === tab);
  });
}

async function apiPost(action, payload = {}) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action, ...payload })
  });
  const data = await response.json();
  if (!data.ok) throw new Error(data.error || "Falha na API");
  return data;
}

function readLocal() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || "null");
  } catch (error) {
    return null;
  }
}

function saveLocal() {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
}

function mergeState(base, remote) {
  const merged = clone(base);
  if (!remote || typeof remote !== "object") return merged;
  ["site", "theme", "visual"].forEach((key) => {
    merged[key] = mergeObject(merged[key], remote[key]);
  });
  ["sections", "gifts", "gallery", "faq", "lodging", "messages", "rsvps"].forEach((key) => {
    if (Array.isArray(remote[key])) merged[key] = remote[key];
  });
  merged.gifts = withGiftImages(merged.gifts);
  return merged;
}

function withGiftImages(gifts) {
  return (gifts || []).map((gift) => ({
    ...gift,
    image: resolveGiftImage(gift)
  }));
}

function resolveGiftImage(gift) {
  const defaultImage = GIFT_IMAGE_URLS[gift.id] || "";
  const currentImage = String(gift.image || "").trim();
  if (!defaultImage) return currentImage;
  if (!currentImage || currentImage === LEGACY_GIFT_IMAGE_URLS[gift.id]) return defaultImage;
  return gift.image;
}

function mergeObject(baseValue, incomingValue) {
  const merged = clone(baseValue || {});
  if (!incomingValue || typeof incomingValue !== "object" || Array.isArray(incomingValue)) return merged;
  Object.entries(incomingValue).forEach(([key, value]) => {
    if (value && typeof value === "object" && !Array.isArray(value) && merged[key] && typeof merged[key] === "object" && !Array.isArray(merged[key])) {
      merged[key] = mergeObject(merged[key], value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}

function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function setPath(obj, path, value) {
  const parts = path.split(".");
  const last = parts.pop();
  const target = parts.reduce((acc, key) => {
    acc[key] = acc[key] || {};
    return acc[key];
  }, obj);
  target[last] = value;
}

function setDialogField(name, value) {
  document.querySelector(`[data-rsvp-field="${name}"]`).value = value;
}

function getDialogField(name) {
  return document.querySelector(`[data-rsvp-field="${name}"]`).value;
}

function downloadCsv(rows, filename) {
  const csv = rows.map((row) => row.map((cell) => `"${String(cell == null ? "" : cell).replace(/"/g, '""')}"`).join(";")).join("\r\n");
  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function toast(message, type = "success") {
  const el = document.createElement("div");
  el.className = `toast ${type === "error" ? "error" : ""}`;
  el.textContent = message;
  document.querySelector("[data-toasts]").appendChild(el);
  setTimeout(() => el.remove(), 4200);
}
