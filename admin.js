const DEFAULT_STATE = {
  site: {
    nomes: "Lia e Diego",
    tagline: "onde o amor se senta à mesa",
    heroPhrase: "Há um lugar reservado à mesa para cada história que importa.",
    date: "2026-11-01",
    time: "10:00",
    location: "Itapetininga",
    address: "Endereço a definir",
    heroImage: "assets/casal.jpg",
    countdownImage: "assets/casal.jpg",
    storyImage: "assets/casal.jpg",
    storyHtml: "<p>Os noivos editarão este texto depois da publicação.</p>",
    giftsIntro: "Cada presente é um gesto que nos acompanhará para sempre."
  },
  theme: { burgundy: "#951c31", terracotta: "#d16a49", cream: "#fff4df", brown: "#5c3f19" },
  sections: [
    { id: "hero", label: "Início", visible: true, order: 1 },
    { id: "countdown", label: "Contagem", visible: true, order: 2 },
    { id: "story", label: "História", visible: true, order: 3 },
    { id: "saveDate", label: "Save the date", visible: true, order: 4 },
    { id: "gifts", label: "Presentes", visible: true, order: 5 },
    { id: "gallery", label: "Galeria", visible: true, order: 6 },
    { id: "rsvp", label: "RSVP", visible: true, order: 7 },
    { id: "faq", label: "FAQ", visible: true, order: 8 },
    { id: "lodging", label: "Acomodações", visible: true, order: 9 },
    { id: "messages", label: "Recados", visible: true, order: 10 },
    { id: "footer", label: "Rodapé", visible: true, order: 11 }
  ],
  gifts: [
    { id: "p1", nome: "Jogo de taças de cristal", valor: 280, qtdTotal: 2, qtdComprada: 0, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p2", nome: "Aparelho de jantar", valor: 650, qtdTotal: 1, qtdComprada: 0, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p3", nome: "Jogo de panelas", valor: 890, qtdTotal: 1, qtdComprada: 0, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p4", nome: "Jogo de cama king size", valor: 420, qtdTotal: 2, qtdComprada: 0, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p5", nome: "Cafeteira italiana", valor: 320, qtdTotal: 1, qtdComprada: 0, linkPix: "", linkCartao: "", compradores: [] },
    { id: "p6", nome: "Liquidificador profissional", valor: 480, qtdTotal: 1, qtdComprada: 0, linkPix: "", linkCartao: "", compradores: [] }
  ],
  gallery: [
    { label: "2019 · o encontro", image: "assets/casal.jpg" },
    { label: "Holambra · 2021", image: "assets/casal.jpg" },
    { label: "Pedido · 2024", image: "assets/casal.jpg" },
    { label: "Família", image: "assets/casal.jpg" },
    { label: "Viagens", image: "assets/casal.jpg" },
    { label: "01 · 11 · 2026", image: "assets/casal.jpg" }
  ],
  faq: [
    { q: "Que horas devo chegar?", a: "Recomendamos chegar com antecedência para se acomodar antes da cerimônia." },
    { q: "Posso levar acompanhante?", a: "Por favor, confirme no RSVP os acompanhantes que estarão com você." },
    { q: "Qual é o dress code?", a: "Sugerimos traje leve e confortável, alinhado ao horário e ao local da celebração." }
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
  renderJsonEditors();
  renderGiftsEditor();
  renderRsvp();
  renderMessages();
}

function bindFields() {
  document.querySelectorAll("[data-field]").forEach((field) => {
    field.value = getPath(state, field.dataset.field) || "";
    field.oninput = () => setPath(state, field.dataset.field, field.value);
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

function renderJsonEditors() {
  document.querySelectorAll("[data-json-field]").forEach((textarea) => {
    const key = textarea.dataset.jsonField;
    textarea.value = JSON.stringify(state[key] || [], null, 2);
    textarea.oninput = () => {
      textarea.dataset.dirty = "true";
    };
  });
}

function syncJsonEditors() {
  document.querySelectorAll("[data-json-field]").forEach((textarea) => {
    const key = textarea.dataset.jsonField;
    try {
      state[key] = JSON.parse(textarea.value || "[]");
      textarea.dataset.dirty = "false";
    } catch (error) {
      throw new Error(`JSON inválido em ${key}.`);
    }
  });
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
    syncJsonEditors();
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
  ["site", "theme"].forEach((key) => {
    merged[key] = { ...merged[key], ...(remote[key] || {}) };
  });
  ["sections", "gifts", "gallery", "faq", "lodging", "messages", "rsvps"].forEach((key) => {
    if (Array.isArray(remote[key])) merged[key] = remote[key];
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
