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
  theme: {
    burgundy: "#951c31",
    terracotta: "#d16a49",
    cream: "#fff4df",
    brown: "#5c3f19"
  },
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
  ]
};

const LOCAL_KEY = "casamento_lia_diego_state_v1";
const INITIAL_VISIBLE_GIFTS = 8;
let state = clone(DEFAULT_STATE);
let countdownTimer = null;
let selectedGift = null;
let selectedGiftMethod = null;
let showAllGifts = false;

const config = window.WEDDING_SITE_CONFIG || {};
const apiUrl = (config.apiUrl || "").trim();
const hasBackend = Boolean(apiUrl);

document.addEventListener("DOMContentLoaded", init);

async function init() {
  bindNavigation();
  bindRsvp();
  bindMessages();
  bindGiftModal();
  bindGiftList();
  try {
    state = await loadState();
    applyState();
  } catch (error) {
    console.error(error);
    toast("Não foi possível preparar o site. Usando dados locais.", "error");
    state = mergeState(DEFAULT_STATE, readLocal());
    applyState();
  } finally {
    revealSite();
  }
}

function revealSite() {
  document.body.classList.remove("site-loading");
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function mergeState(base, remote) {
  const merged = clone(base);
  if (!remote || typeof remote !== "object") return merged;
  merged.site = mergeObject(merged.site, remote.site);
  merged.theme = mergeObject(merged.theme, remote.theme);
  merged.visual = mergeObject(merged.visual, remote.visual);
  merged.sections = Array.isArray(remote.sections) && remote.sections.length ? remote.sections : merged.sections;
  merged.gifts = withGiftImages(Array.isArray(remote.gifts) ? remote.gifts : merged.gifts);
  merged.gallery = Array.isArray(remote.gallery) ? remote.gallery : merged.gallery;
  merged.faq = Array.isArray(remote.faq) ? remote.faq : merged.faq;
  merged.lodging = Array.isArray(remote.lodging) ? remote.lodging : merged.lodging;
  merged.messages = Array.isArray(remote.messages) ? remote.messages : merged.messages;
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

async function loadState() {
  if (hasBackend) {
    try {
      const data = await apiGet("bootstrap");
      return mergeState(DEFAULT_STATE, data.state || data);
    } catch (error) {
      toast("Não foi possível carregar os dados online. Usando dados locais.", "error");
      console.error(error);
    }
  }
  return mergeState(DEFAULT_STATE, readLocal());
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

async function apiGet(action) {
  const url = new URL(apiUrl);
  url.searchParams.set("action", action);
  url.searchParams.set("_", Date.now());
  const response = await fetch(url.toString(), { method: "GET" });
  const data = await response.json();
  if (!data.ok) throw new Error(data.error || "Falha na API");
  return data;
}

async function apiPost(action, payload = {}) {
  if (!hasBackend) {
    return { ok: true, local: true };
  }
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ action, ...payload })
  });
  const data = await response.json();
  if (!data.ok) throw new Error(data.error || "Falha na API");
  return data;
}

function applyState() {
  applyTheme();
  applyVisualSettings();
  applyText();
  applySections();
  renderCountdown();
  renderGifts();
  renderGallery();
  renderFaq();
  renderLodging();
  renderMessages();
}

function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty("--burgundy", state.theme.burgundy);
  root.style.setProperty("--burgundy-deep", shade(state.theme.burgundy, -18));
  root.style.setProperty("--terracotta", state.theme.terracotta);
  root.style.setProperty("--terracotta-deep", shade(state.theme.terracotta, -12));
  root.style.setProperty("--cream", state.theme.cream);
  root.style.setProperty("--cream-deep", shade(state.theme.cream, -7));
  root.style.setProperty("--brown", state.theme.brown);
}

function applyVisualSettings() {
  const visual = state.visual || {};
  const root = document.documentElement;
  const menu = visual.menu || {};
  const hero = visual.hero || {};
  const countdown = visual.countdown || {};
  const saveDate = visual.saveDate || {};
  const sections = visual.sections || {};
  const titles = visual.titles || {};
  const blocks = visual.blocks || {};

  setCss(root, "--menu-bg", menu.background);
  setCss(root, "--menu-text", menu.text);
  setCss(root, "--menu-border", rgba(menu.text || "#fff4df", menu.borderOpacity, 0.24));

  setCss(root, "--hero-title-color", hero.titleColor);
  setCss(root, "--hero-title-background", rgba(hero.titleBackground || "#fff4df", hero.titleBackgroundOpacity, 0));
  setPx(root, "--hero-title-top", hero.titleTop);
  setPx(root, "--hero-title-left", hero.titleLeft);
  setPx(root, "--hero-title-width", hero.titleWidth);
  setCss(root, "--hero-tag-color", hero.tagColor);
  setPx(root, "--hero-tag-top", hero.tagTop);
  setPx(root, "--hero-tag-left", hero.tagLeft);
  setPx(root, "--hero-tag-width", hero.tagWidth);

  setPx(root, "--countdown-padding-y", countdown.paddingY);
  setRem(root, "--countdown-eyebrow-size", countdown.eyebrowSize);
  setRem(root, "--countdown-title-size", countdown.titleSize);
  setCss(root, "--countdown-title-color", countdown.titleColor);
  setCss(root, "--countdown-eyebrow-color", countdown.eyebrowColor);

  setPx(root, "--save-date-height", saveDate.minHeight);
  setPx(root, "--gifts-padding-y", sections.giftsPaddingY);
  setPx(root, "--faq-padding-y", sections.faqPaddingY);
  setPx(root, "--gallery-padding-y", sections.galleryPaddingY);
  setPx(root, "--lodging-padding-y", sections.lodgingPaddingY);
  setPx(root, "--messages-padding-y", sections.messagesPaddingY);
  setPx(root, "--story-padding-y", sections.storyPaddingY);
  setPx(root, "--rsvp-padding-y", sections.rsvpPaddingY);

  setCss(root, "--gifts-background", blocks.giftsBackground);
  setCss(root, "--faq-background", blocks.faqBackground);
  setCss(root, "--gallery-background", blocks.galleryBackground);
  setCss(root, "--lodging-background", blocks.lodgingBackground);
  setCss(root, "--messages-background", blocks.messagesBackground);
  setCss(root, "--footer-background", blocks.footerBackground);
  setCss(root, "--footer-text", blocks.footerText);
  setCss(root, "--card-background", rgba(blocks.cardBackground || "#ffffff", blocks.cardOpacity, 0.66));
  setCss(root, "--card-border-color", rgba(blocks.cardBorderColor || "#5c3f19", blocks.cardBorderOpacity, 0.14));

  setRem(root, "--gifts-title-size", titles.giftsTitleSize);
  setRem(root, "--faq-title-size", titles.faqTitleSize);
  setRem(root, "--faq-question-size", titles.faqQuestionSize);
  setRem(root, "--lodging-title-size", titles.lodgingTitleSize);
  setRem(root, "--footer-tagline-size", titles.footerTaglineSize);
}

function applyText() {
  const site = normalizeComputedSite();
  document.title = site.nomes;
  document.querySelectorAll("[data-text]").forEach((el) => {
    const value = getByPath(site, el.dataset.text.replace(/^site\./, ""));
    el.textContent = value || "";
  });
  document.querySelectorAll("[data-html]").forEach((el) => {
    const value = getByPath(site, el.dataset.html.replace(/^site\./, ""));
    el.innerHTML = sanitizeHtml(value || "");
  });
  document.querySelectorAll("[data-img]").forEach((el) => {
    const value = getByPath(site, el.dataset.img.replace(/^site\./, ""));
    if (value) el.src = value;
  });
  document.querySelectorAll("[data-bg]").forEach((el) => {
    const value = getByPath(site, el.dataset.bg.replace(/^site\./, ""));
    if (!value) return;
    const bg = backgroundOptions(el);
    const overlay = el.classList.contains("countdown")
      ? `linear-gradient(${rgba(bg.overlayColor, bg.overlayOpacity, 0.88)}, ${rgba(bg.overlayColor, bg.overlayOpacity, 0.9)})`
      : `linear-gradient(90deg, ${rgba(bg.overlayColor, bg.overlayOpacity, 0.08)}, ${rgba(bg.overlayColor, Number(bg.overlayOpacity || 0) * 0.35, 0.03)} 58%)`;
    el.style.backgroundPosition = bg.imagePosition || "center";
    el.style.backgroundImage = `${overlay}, url("${cssUrl(value)}")`;
  });
}

function backgroundOptions(el) {
  const visual = state.visual || {};
  if (el.classList.contains("countdown")) return visual.countdown || {};
  if (el.classList.contains("save-photo")) return visual.saveDate || {};
  return visual.hero || {};
}

function normalizeComputedSite() {
  const site = { ...state.site };
  site.dateShort = formatDateShort(site.date);
  site.dateLong = formatDateLong(site.date);
  return site;
}

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function applySections() {
  const sectionMap = new Map((state.sections || []).map((section) => [section.id, section]));
  const sectionVisibilityById = new Map();
  document.querySelectorAll("[data-section]").forEach((el) => {
    const item = sectionMap.get(el.dataset.section);
    const isVisible = item ? item.visible !== false : true;
    el.hidden = !isVisible;
    el.style.order = item ? item.order : "";
    if (el.id) sectionVisibilityById.set(el.id, isVisible);
  });
  document.querySelectorAll("[data-menu-links] a[href^='#']").forEach((link) => {
    const targetId = link.getAttribute("href").slice(1);
    link.hidden = sectionVisibilityById.get(targetId) === false;
  });
  const main = document.querySelector("main");
  main.style.display = "flex";
  main.style.flexDirection = "column";
}

function renderCountdown() {
  if (countdownTimer) clearInterval(countdownTimer);
  const container = document.querySelector("[data-countdown]");
  const update = () => {
    const target = new Date(`${state.site.date}T${state.site.time || "00:00"}:00`);
    const diff = Math.max(0, target.getTime() - Date.now());
    const values = [
      ["dias", Math.floor(diff / 86400000)],
      ["horas", Math.floor(diff / 3600000) % 24],
      ["minutos", Math.floor(diff / 60000) % 60],
      ["segundos", Math.floor(diff / 1000) % 60]
    ];
    container.innerHTML = values.map(([label, value]) => `
      <div class="count-box">
        <strong>${String(value).padStart(2, "0")}</strong>
        <span>${label}</span>
      </div>
    `).join("");
  };
  update();
  countdownTimer = setInterval(update, 1000);
}

function renderGifts() {
  const container = document.querySelector("[data-gifts]");
  const moreWrap = document.querySelector("[data-gifts-more]");
  const moreButton = document.querySelector("[data-show-more-gifts]");
  const gifts = state.gifts || [];
  if (!gifts.length) {
    container.innerHTML = "<p>Nenhum presente cadastrado ainda.</p>";
    if (moreWrap) moreWrap.hidden = true;
    return;
  }
  const visibleGifts = showAllGifts ? gifts : gifts.slice(0, INITIAL_VISIBLE_GIFTS);
  container.innerHTML = visibleGifts.map((gift) => {
    const available = Math.max(0, Number(gift.qtdTotal || 0) - Number(gift.qtdComprada || 0));
    const unavailable = available <= 0;
    const image = String(gift.image || "").trim();
    const imageAlt = gift.nome ? `Foto do presente ${gift.nome}` : "Foto do presente";
    return `
      <article class="gift-card ${unavailable ? "unavailable" : ""}">
        ${image ? `<figure class="gift-photo"><img src="${escapeAttr(image)}" alt="${escapeAttr(imageAlt)}" loading="lazy"></figure>` : ""}
        <h3>${escapeHtml(gift.nome)}</h3>
        <p class="gift-value">${formatCurrency(gift.valor)}</p>
        <p>${unavailable ? "Já presenteado" : `${available} de ${gift.qtdTotal || 1} ${available > 1 ? "disponíveis" : "disponível"}`}</p>
        <div class="gift-actions">
          <button class="btn terracotta" type="button" data-buy-gift="${gift.id}" ${unavailable ? "disabled" : ""}>Comprar</button>
        </div>
      </article>
    `;
  }).join("");
  container.querySelectorAll("[data-buy-gift]").forEach((button) => {
    button.addEventListener("click", () => openGiftFlow(button.dataset.buyGift));
  });
  container.querySelectorAll(".gift-photo img").forEach((img) => {
    img.addEventListener("error", () => {
      const photo = img.closest(".gift-photo");
      if (photo) photo.hidden = true;
    });
  });
  const hasExpandableGifts = gifts.length > INITIAL_VISIBLE_GIFTS;
  if (moreWrap) moreWrap.hidden = !hasExpandableGifts;
  if (moreButton) {
    moreButton.textContent = showAllGifts ? "Mostrar menos presentes" : "Mostrar mais presentes";
    moreButton.setAttribute("aria-expanded", String(showAllGifts));
  }
}

function bindGiftList() {
  const button = document.querySelector("[data-show-more-gifts]");
  if (!button) return;
  button.addEventListener("click", () => {
    showAllGifts = !showAllGifts;
    renderGifts();
  });
}

function openGiftFlow(giftId) {
  const gift = state.gifts.find((item) => item.id === giftId);
  if (!gift) return;
  selectedGift = gift;
  selectedGiftMethod = null;
  document.getElementById("giftModalTitle").textContent = gift.nome;
  document.querySelector("[data-gift-modal-copy]").textContent = "Informe seu nome e escolha a forma de pagamento.";
  document.querySelector("[data-gift-buyer]").value = "";
  document.querySelector("[data-confirm-gift]").hidden = true;
  document.querySelector("[data-gift-modal]").hidden = false;
  setTimeout(() => document.querySelector("[data-gift-buyer]").focus(), 20);
}

function bindGiftModal() {
  document.querySelector("[data-close-gift]").addEventListener("click", closeGiftModal);
  document.querySelector("[data-gift-modal]").addEventListener("click", (event) => {
      if (event.target.matches("[data-gift-modal]")) closeGiftModal();
    });
  document.querySelectorAll("[data-start-payment]").forEach((button) => {
    button.addEventListener("click", () => startGiftPayment(button.dataset.startPayment));
  });
  document.querySelector("[data-confirm-gift]").addEventListener("click", async () => {
    const buyer = document.querySelector("[data-gift-buyer]").value.trim();
    if (!buyer) {
      toast("Informe seu nome para registrar o presente.", "error");
      return;
    }
    try {
      if (hasBackend) {
        const data = await apiPost("giftPurchase", { giftId: selectedGift.id, method: selectedGiftMethod, buyer });
        state = mergeState(state, data.state || {});
      } else {
        const gift = state.gifts.find((item) => item.id === selectedGift.id);
        gift.qtdComprada = Number(gift.qtdComprada || 0) + 1;
        gift.compradores = gift.compradores || [];
        gift.compradores.push({ nome: buyer, metodo: selectedGiftMethod, data: new Date().toISOString() });
        saveLocal();
      }
      closeGiftModal();
      renderGifts();
      toast("Presente registrado. Obrigado!");
    } catch (error) {
      console.error(error);
      toast(error.message || "Não foi possível registrar o presente.", "error");
    }
  });
}

function startGiftPayment(method) {
  const buyer = document.querySelector("[data-gift-buyer]").value.trim();
  if (!buyer) {
    toast("Informe seu nome antes de abrir o pagamento.", "error");
    return;
  }
  const link = method === "pix" ? selectedGift.linkPix : selectedGift.linkCartao;
  if (!link) {
    toast(method === "pix" ? "Link PIX não cadastrado para este presente." : "Link de cartão não cadastrado para este presente.", "error");
    return;
  }
  selectedGiftMethod = method;
  window.open(link, "_blank", "noopener,noreferrer");
  document.querySelector("[data-gift-modal-copy]").textContent = "Depois de concluir o pagamento, registre abaixo para avisar os noivos.";
  document.querySelector("[data-confirm-gift]").hidden = false;
}

function closeGiftModal() {
  document.querySelector("[data-gift-modal]").hidden = true;
  selectedGift = null;
  selectedGiftMethod = null;
  document.querySelector("[data-confirm-gift]").hidden = true;
}

function renderGallery() {
  const container = document.querySelector("[data-gallery]");
  container.innerHTML = (state.gallery || []).map((item) => `
    <figure class="stamp">
      <img src="${escapeAttr(item.image || "assets/casal.jpg")}" alt="${escapeAttr(item.label || "Foto do casal")}">
      <span>${escapeHtml(item.label || "")}</span>
    </figure>
  `).join("");
}

function renderFaq() {
  const container = document.querySelector("[data-faq]");
  container.innerHTML = (state.faq || []).map((item) => `
    <article class="faq-item">
      <h3>${escapeHtml(item.q)}</h3>
      <p>${escapeHtml(item.a)}</p>
    </article>
  `).join("");
}

function renderLodging() {
  const container = document.querySelector("[data-lodging]");
  container.innerHTML = (state.lodging || []).map((item) => `
    <article class="lodging-card">
      <p class="eyebrow">${escapeHtml(item.tag || "")}</p>
      <h3>${escapeHtml(item.name || "")}</h3>
      <p>${escapeHtml(item.distance || "")}</p>
      <p>${escapeHtml(item.price || "")}</p>
      ${item.code ? `<p class="code">código: ${escapeHtml(item.code)}</p>` : ""}
    </article>
  `).join("");
}

function renderMessages() {
  const container = document.querySelector("[data-messages]");
  const messages = (state.messages || []).filter((item) => item.visible !== false).slice(0, 9);
  container.innerHTML = messages.map((item) => `
    <article class="message-card">
      <p>"${escapeHtml(item.text)}"</p>
      <strong>${escapeHtml(item.from)}</strong>
    </article>
  `).join("");
}

function bindRsvp() {
  document.querySelector("[data-open-rsvp]").addEventListener("click", () => {
    document.querySelector("[data-rsvp-intro]").hidden = true;
    document.getElementById("rsvpForm").hidden = false;
  });
  document.querySelector("[data-add-guest]").addEventListener("click", () => addGuestRow());
  document.querySelector("[data-new-rsvp]").addEventListener("click", () => {
    document.querySelector("[data-rsvp-intro]").hidden = false;
    document.getElementById("rsvpForm").hidden = true;
    document.querySelector("[data-rsvp-success]").hidden = true;
  });
  document.getElementById("rsvpForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const payload = {
      attending: document.getElementById("rsvpAttending").value,
      responsavel: document.getElementById("rsvpName").value.trim(),
      convidados: [...document.querySelectorAll("[data-guest-list] input")]
        .map((input) => input.value.trim())
        .filter(Boolean)
        .map((nome) => ({ nome })),
      observacoes: document.getElementById("rsvpNotes").value.trim()
    };
    if (!payload.responsavel) {
      toast("Informe seu nome completo.", "error");
      return;
    }
    try {
      if (hasBackend) {
        await apiPost("submitRsvp", payload);
      } else {
        const local = readLocal() || clone(DEFAULT_STATE);
        local.rsvps = local.rsvps || [];
        local.rsvps.push({ ...payload, id: `r${Date.now()}`, data: new Date().toISOString() });
        local.site = state.site;
        local.theme = state.theme;
        local.sections = state.sections;
        local.gifts = state.gifts;
        local.gallery = state.gallery;
        local.faq = state.faq;
        local.lodging = state.lodging;
        local.messages = state.messages;
        localStorage.setItem(LOCAL_KEY, JSON.stringify(local));
      }
      document.getElementById("rsvpForm").reset();
      document.querySelector("[data-guest-list]").innerHTML = "";
      document.getElementById("rsvpForm").hidden = true;
      document.querySelector("[data-rsvp-intro]").hidden = true;
      document.querySelector("[data-rsvp-success-text]").textContent =
        payload.attending === "sim" ? "Que alegria saber que você estará conosco." : "Obrigado por avisar. Sentiremos sua falta.";
      document.querySelector("[data-rsvp-success]").hidden = false;
      toast("Resposta registrada.");
    } catch (error) {
      console.error(error);
      toast(error.message || "Não foi possível enviar sua resposta.", "error");
    }
  });
}

function addGuestRow(value = "") {
  const row = document.createElement("div");
  row.className = "guest-row";
  row.innerHTML = `
    <input type="text" placeholder="Nome completo do acompanhante" value="${escapeAttr(value)}">
    <button class="remove-row" type="button" aria-label="Remover acompanhante">×</button>
  `;
  row.querySelector("button").addEventListener("click", () => row.remove());
  document.querySelector("[data-guest-list]").appendChild(row);
}

function bindMessages() {
  document.getElementById("messageForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const from = document.getElementById("messageName").value.trim();
    const text = document.getElementById("messageText").value.trim();
    if (!from || !text) return;
    try {
      if (hasBackend) {
        const data = await apiPost("addMessage", { from, text });
        state.messages = data.messages || [{ id: `m${Date.now()}`, from, text, visible: true }, ...state.messages];
      } else {
        state.messages = [{ id: `m${Date.now()}`, from, text, data: new Date().toISOString(), visible: true }, ...state.messages];
        saveLocal();
      }
      document.getElementById("messageForm").reset();
      renderMessages();
      toast("Recado enviado.");
    } catch (error) {
      console.error(error);
      toast(error.message || "Não foi possível enviar o recado.", "error");
    }
  });
}

function bindNavigation() {
  const toggle = document.querySelector("[data-menu-toggle]");
  toggle.addEventListener("click", () => document.body.classList.toggle("menu-open"));
  document.querySelectorAll(".menu-links a").forEach((link) => {
    link.addEventListener("click", () => document.body.classList.remove("menu-open"));
  });
}

function formatCurrency(value) {
  return Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatDateShort(iso) {
  if (!iso) return "";
  const [year, month, day] = iso.split("-");
  return `${day} · ${month} · ${year}`;
}

function formatDateLong(iso) {
  if (!iso) return "";
  const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const [year, month, day] = iso.split("-").map(Number);
  return `${String(day).padStart(2, "0")} de ${meses[month - 1]} de ${year}`;
}

function setCss(root, name, value) {
  if (value == null || value === "") return;
  root.style.setProperty(name, value);
}

function setPx(root, name, value) {
  const number = Number(value);
  if (Number.isFinite(number)) root.style.setProperty(name, `${number}px`);
}

function setRem(root, name, value) {
  const number = Number(value);
  if (Number.isFinite(number)) root.style.setProperty(name, `${number}rem`);
}

function rgba(hex, opacityValue, fallbackOpacity) {
  const rgb = hexToRgb(hex || "#fff4df");
  const opacity = clampNumber(opacityValue, fallbackOpacity, 0, 1);
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
}

function hexToRgb(hex) {
  const clean = String(hex || "").replace("#", "").trim();
  const expanded = clean.length === 3 ? clean.split("").map((char) => char + char).join("") : clean;
  if (!/^[0-9a-f]{6}$/i.test(expanded)) return { r: 255, g: 244, b: 223 };
  const num = parseInt(expanded, 16);
  return { r: num >> 16, g: (num >> 8) & 255, b: num & 255 };
}

function clampNumber(value, fallback, min, max) {
  const number = Number(value);
  const safe = Number.isFinite(number) ? number : fallback;
  return Math.max(min, Math.min(max, safe));
}

function shade(hex, percent) {
  const color = hex.replace("#", "");
  const num = parseInt(color, 16);
  const amt = Math.round(2.55 * percent);
  const r = Math.max(0, Math.min(255, (num >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amt));
  const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amt));
  return `#${(0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
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

function cssUrl(value) {
  return String(value).replace(/["\\\n\r]/g, "");
}

function sanitizeHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = String(html || "");
  template.content.querySelectorAll("script, iframe, object, embed, link, meta").forEach((el) => el.remove());
  template.content.querySelectorAll("*").forEach((el) => {
    [...el.attributes].forEach((attr) => {
      if (/^on/i.test(attr.name)) el.removeAttribute(attr.name);
      if (["href", "src"].includes(attr.name) && /^javascript:/i.test(attr.value)) el.removeAttribute(attr.name);
    });
  });
  return template.innerHTML;
}

function toast(message, type = "success") {
  const el = document.createElement("div");
  el.className = `toast ${type === "error" ? "error" : ""}`;
  el.textContent = message;
  document.querySelector("[data-toasts]").appendChild(el);
  setTimeout(() => el.remove(), 4200);
}
