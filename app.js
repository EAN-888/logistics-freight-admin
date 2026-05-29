const DEFAULT_RATES = [
  ["飞特-以星海派限时达", "海运", "美国", "美西", 12, 1, 13.8, 0, "是", "16-18天提取", "单箱实重不能超22KG，带电+1，带磁+1，笔+1，木制品+1", "开船超20个自然日没有提取，第21天开始按规则赔退。"],
  ["飞特-以星海派限时达", "海运", "美国", "美中", 12, 1, 14.8, 0, "是", "16-19天提取", "单箱实重不能超22KG，带电+1，带磁+1，笔+1，木制品+1", "开船超20个自然日没有提取，第21天开始按规则赔退。"],
  ["飞特-以星海派限时达", "海运", "美国", "美东", 12, 1, 15.8, 0, "是", "16-20天提取", "单箱实重不能超22KG，带电+1，带磁+1，笔+1，木制品+1", "开船超20个自然日没有提取，第21天开始按规则赔退。"],
  ["飞特-以星海派限时达", "海运", "美国", "美西", 100, 1, 9.8, 0, "是", "16-21天提取", "单箱实重不能超22KG，带电+1，带磁+1，笔+1，木制品+1", "开船超20个自然日没有提取，第21天开始按规则赔退。"],
  ["飞特-以星海派限时达", "海运", "美国", "美中", 100, 1, 10.8, 0, "是", "16-22天提取", "单箱实重不能超22KG，带电+1，带磁+1，笔+1，木制品+1", "开船超20个自然日没有提取，第21天开始按规则赔退。"],
  ["飞特-以星海派限时达", "海运", "美国", "美东", 100, 1, 11.8, 0, "是", "16-23天提取", "单箱实重不能超22KG，带电+1，带磁+1，笔+1，木制品+1", "开船超20个自然日没有提取，第21天开始按规则赔退。"],
  ["拓威-大陆ups红单包税直发", "快递", "美国", "", 25, 1, 66, 150, "是", "5天左右签收", "150/票手续费，当天提取，免附加费，不走带电带磁，免偏远费，不免超级偏远", "不走带电带磁；超级偏远需另核。"],
  ["飞特-美国空派经济线", "空派", "美国", "美西", 12, 1, 69, 0, "是", "7-8天提取", "木制品+1，不收带电带磁，不收笔，单箱实重超22KG有165超重费", "单箱实重超22KG有165元超重费。"],
  ["飞特-美国空派经济线", "空派", "美国", "美中", 12, 1, 70, 0, "是", "7-8天提取", "木制品+1，不收带电带磁，不收笔，单箱实重超22KG有165超重费", "单箱实重超22KG有165元超重费。"],
  ["飞特-美国空派经济线", "空派", "美国", "美东", 12, 1, 71, 0, "是", "7-8天提取", "木制品+1，不收带电带磁，不收笔，单箱实重超22KG有165超重费", "单箱实重超22KG有165元超重费。"],
  ["飞特-美国空派经济线", "空派", "美国", "美西", 71, 1, 66, 0, "是", "7-8天提取", "木制品+1，不收带电带磁，不收笔，单箱实重超22KG有165超重费", "单箱实重超22KG有165元超重费。"],
  ["飞特-美国空派经济线", "空派", "美国", "美中", 71, 1, 67, 0, "是", "7-8天提取", "木制品+1，不收带电带磁，不收笔，单箱实重超22KG有165超重费", "单箱实重超22KG有165元超重费。"],
  ["飞特-美国空派经济线", "空派", "美国", "美东", 71, 1, 68, 0, "是", "7-8天提取", "木制品+1，不收带电带磁，不收笔，单箱实重超22KG有165超重费", "单箱实重超22KG有165元超重费。"],
  ["飞特-美国空派经济线", "空派", "美国", "美西", 101, 1, 63, 0, "是", "7-8天提取", "木制品+1，不收带电带磁，不收笔，单箱实重超22KG有165超重费", "单箱实重超22KG有165元超重费。"],
  ["飞特-美国空派经济线", "空派", "美国", "美中", 101, 1, 64, 0, "是", "7-8天提取", "木制品+1，不收带电带磁，不收笔，单箱实重超22KG有165超重费", "单箱实重超22KG有165元超重费。"],
  ["飞特-美国空派经济线", "空派", "美国", "美东", 101, 1, 65, 0, "是", "7-8天提取", "木制品+1，不收带电带磁，不收笔，单箱实重超22KG有165超重费", "单箱实重超22KG有165元超重费。"],
  ["方鸿-英国卡航包税", "卡航", "英国", "", 21, 1, 22, 0, "是", "发车后20-25个自然日提取", "纯纺织品+4，笔+2", "包税渠道。"],
  ["方鸿-英国卡航包税", "卡航", "英国", "", 100, 1, 16, 0, "是", "发车后20-25个自然日提取", "纯纺织品+4，笔+2", "包税渠道。"],
  ["方鸿-英国卡航自税", "卡航", "英国", "", 21, 1, 20, 300, "否", "发车后20-25个自然日提取", "纯纺织品+4，笔+2；另含300元/票", "自税渠道，税费需客户另行承担。"],
  ["方鸿-英国卡航自税", "卡航", "英国", "", 100, 1, 13.5, 300, "否", "发车后20-25个自然日提取", "纯纺织品+4，笔+2；另含300元/票", "自税渠道，税费需客户另行承担。"]
].map(rowToRate);

const STORAGE_KEY = "fba-freight-rates-v1";
const SHIPMENT_STORAGE_KEY = "fba-shipment-records-v1";

const SURCHARGE_RULES = {
  battery: { label: "带电", perKg: 1, applies: rate => /带电\+?1/.test(rate.surchargeText) },
  magnetic: { label: "带磁", perKg: 1, applies: rate => /带磁\+?1/.test(rate.surchargeText) },
  pen: { label: "笔类", perKg: rate => rate.country === "英国" ? 2 : 1, applies: rate => /笔.*\+?2|笔.*\+?1/.test(rate.surchargeText) },
  wood: { label: "木制品", perKg: 1, applies: rate => /木制品\+?1/.test(rate.surchargeText) },
  textile: { label: "纯纺织品", perKg: 4, applies: rate => /纯纺织品\+?4/.test(rate.surchargeText) },
  remote: { label: "偏远/超级偏远", perKg: 0, applies: rate => rate.channel === "快递" }
};

const state = {
  mode: "actual",
  channel: "all",
  rates: DEFAULT_RATES,
  rateSignature: "",
  filteredCarrierRates: [],
  shipments: [],
  filteredShipments: [],
  shipmentSource: "",
  freightPage: 1,
  freightPageSize: 100,
  shipmentPage: 1,
  shipmentPageSize: 100,
  editingShipmentKey: "",
  lastResults: []
};

const $ = id => document.getElementById(id);
const currency = value => `¥${Math.round(value).toLocaleString("zh-CN")}`;
const decimal = value => Number(value || 0);

function cleanShipmentCreateArea() {
  const toggleButton = $("toggleShipmentForm");
  if (toggleButton) toggleButton.textContent = "新增";
  $("resetShipments")?.remove();
  document.querySelectorAll(".orders-tools > #manualShipmentForm").forEach(form => {
    if (!form.closest("#shipmentFormModal")) {
      form.classList.add("hidden");
      form.style.display = "none";
    }
  });
}

function rowToRate(row) {
  return {
    name: String(row[0] || "").trim(),
    channel: String(row[1] || "").trim(),
    country: String(row[2] || "").trim(),
    zone: normalizeZone(row[3]),
    minWeight: Number(row[4] || 0),
    stepWeight: Number(row[5] || 1) || 1,
    unitPrice: Number(row[6] || 0),
    fixedFee: Number(row[7] || 0),
    taxIncluded: String(row[8] || "是").trim() !== "否",
    eta: String(row[9] || "").trim(),
    surchargeText: String(row[10] || "").trim(),
    note: String(row[11] || "").trim()
  };
}

function normalizeZone(value) {
  const zone = String(value || "").trim();
  return zone === "不分区" || zone === "不限分区" ? "" : zone;
}

function normalizeRate(rate) {
  return { ...rate, zone: normalizeZone(rate.zone) };
}

function loadStoredRates() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed.rates) && parsed.rates.length ? { ...parsed, rates: parsed.rates.map(normalizeRate) } : null;
  } catch {
    return null;
  }
}

function persistRates(sourceName) {
  try {
    const payload = JSON.stringify({
      sourceName,
      importedAt: new Date().toISOString(),
      rates: state.rates
    });
    localStorage.setItem(STORAGE_KEY, payload);
    state.rateSignature = getRateSignature(state.rates);
    return true;
  } catch {
    return false;
  }
}

function getRateSignature(rates) {
  return JSON.stringify(rates.map(rate => [
    rate.name,
    rate.channel,
    rate.country,
    normalizeZone(rate.zone),
    Number(rate.minWeight || 0),
    Number(rate.stepWeight || 1),
    Number(rate.unitPrice || 0),
    Number(rate.fixedFee || 0),
    Boolean(rate.taxIncluded),
    rate.eta,
    rate.surchargeText,
    rate.note
  ]));
}

function syncRatesFromCarrierManager() {
  const stored = loadStoredRates();
  if (!stored) return false;
  const signature = getRateSignature(stored.rates);
  if (signature === state.rateSignature) return false;
  state.rates = stored.rates;
  state.rateSignature = signature;
  initOptions(true);
  renderRules();
  renderCarrierManager();
  return true;
}

async function loadPublishedRates() {
  try {
    const response = await fetch(`data/rates.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return null;
    const parsed = await response.json();
    return Array.isArray(parsed.rates) && parsed.rates.length ? { ...parsed, rates: parsed.rates.map(normalizeRate) } : null;
  } catch {
    return null;
  }
}

function unique(values) {
  return [...new Set(values)].filter(Boolean);
}

function initOptions(keepSelection = true) {
  const previousCountry = $("country").value;
  const countries = unique(state.rates.map(rate => rate.country));
  $("country").innerHTML = countries.map(country => `<option value="${escapeHtml(country)}">${escapeHtml(country)}</option>`).join("");
  $("country").value = keepSelection && countries.includes(previousCountry) ? previousCountry : countries[0] || "";
  updateZones(keepSelection);
  updateTabs();
}

function updateZones(keepSelection = true) {
  const previousZone = $("zone").value;
  const country = $("country").value;
  const countryRates = state.rates.filter(rate => rate.country === country);
  const zonedValues = unique(countryRates.map(rate => normalizeZone(rate.zone)).filter(Boolean));
  const zones = zonedValues.length ? zonedValues : ["不分区"];
  $("zone").innerHTML = zones.map(zone => `<option value="${escapeHtml(zone)}">${escapeHtml(zone)}</option>`).join("");
  $("zone").value = keepSelection && zones.includes(previousZone) ? previousZone : zones[0] || "";
}

function updateTabs() {
  const channels = ["all", ...unique(state.rates.map(rate => rate.channel))];
  $("channelTabs").innerHTML = channels.map(channel => {
    const label = channel === "all" ? "全部" : channel;
    const active = channel === state.channel ? " active" : "";
    return `<button type="button" class="tab${active}" data-channel="${escapeHtml(channel)}">${escapeHtml(label)}</button>`;
  }).join("");
  if (!channels.includes(state.channel)) state.channel = "all";
  document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      state.channel = button.dataset.channel;
      calculate();
    });
  });
}

function getInputs() {
  const cartons = Math.max(1, Math.ceil(decimal($("cartons").value)));
  const actualWeight = Math.max(0, decimal($("actualWeight").value));
  const singleActual = actualWeight / cartons;
  const volumeWeight = state.mode === "volume"
    ? (decimal($("lengthCm").value) * decimal($("widthCm").value) * decimal($("heightCm").value) * cartons) / decimal($("volumeDivisor").value)
    : 0;

  return {
    country: $("country").value,
    zone: normalizeZone($("zone").value),
    cartons,
    actualWeight,
    singleActual,
    volumeWeight,
    chargeableWeight: Math.max(actualWeight, volumeWeight),
    manualPerKg: decimal($("manualPerKg").value),
    manualFixed: decimal($("manualFixed").value),
    selectedAttributes: Object.keys(SURCHARGE_RULES).filter(id => $(id).checked)
  };
}

function chooseTier(input) {
  return state.rates
    .filter(rate => rate.country === input.country)
    .filter(rate => !normalizeZone(rate.zone) || normalizeZone(rate.zone) === input.zone)
    .reduce((groups, rate) => {
      const key = `${rate.name}|${rate.channel}|${rate.country}|${normalizeZone(rate.zone)}`;
      const current = groups.get(key);
      if (!current) {
        groups.set(key, rate);
      } else if (rate.minWeight <= input.chargeableWeight && rate.minWeight > current.minWeight) {
        groups.set(key, rate);
      } else if (current.minWeight > input.chargeableWeight && rate.minWeight < current.minWeight) {
        groups.set(key, rate);
      }
      return groups;
    }, new Map());
}

function calcSurcharges(rate, input, billWeight) {
  const lines = [];
  let perKgTotal = input.manualPerKg;
  let fixedTotal = input.manualFixed + rate.fixedFee;

  input.selectedAttributes.forEach(id => {
    const rule = SURCHARGE_RULES[id];
    if (!rule) return;
    if (isRestricted(rate, id)) {
      lines.push({ label: `${rule.label}：渠道限制`, blocked: true });
      return;
    }
    if (rule.applies(rate)) {
      const value = typeof rule.perKg === "function" ? rule.perKg(rate) : rule.perKg;
      perKgTotal += value;
      lines.push({ label: `${rule.label}+${value}/kg` });
    }
  });

  if (/超22KG|超22kg/i.test(rate.surchargeText) && input.singleActual > 22) {
    const amount = Number((rate.surchargeText.match(/(\d+(?:\.\d+)?)\s*超重费/) || [])[1] || 165);
    fixedTotal += amount;
    lines.push({ label: `单箱超22kg+${amount}/票` });
  }
  if (rate.fixedFee) lines.push({ label: `固定费用+${rate.fixedFee}/票` });
  if (input.manualPerKg) lines.push({ label: `手工+${input.manualPerKg}/kg` });
  if (input.manualFixed) lines.push({ label: `手工固定+${input.manualFixed}/票` });

  return { perKgTotal, fixedTotal, lines };
}

function isRestricted(rate, attributeId) {
  const text = rate.surchargeText;
  if (attributeId === "battery") return /不走带电|不收带电/.test(text);
  if (attributeId === "magnetic") return /不走带电带磁|不收带电带磁|不收带磁/.test(text);
  if (attributeId === "pen") return /不收笔/.test(text);
  if (attributeId === "remote") return /不免超级偏远/.test(text);
  return false;
}

function calculate() {
  syncRatesFromCarrierManager();
  const input = getInputs();
  const allResults = [...chooseTier(input).values()].map(rate => {
    const billWeight = Math.ceil(Math.max(input.chargeableWeight, rate.minWeight) / rate.stepWeight) * rate.stepWeight;
    const surcharges = calcSurcharges(rate, input, billWeight);
    const blocked = surcharges.lines.some(line => line.blocked);
    const cost = billWeight * (rate.unitPrice + surcharges.perKgTotal) + surcharges.fixedTotal;
    return { ...rate, billWeight, cost, avg: cost / Math.max(input.chargeableWeight, 1), surchargeLines: surcharges.lines, blocked };
  }).sort((a, b) => Number(a.blocked) - Number(b.blocked) || a.cost - b.cost);
  const results = allResults.filter(row => state.channel === "all" || row.channel === state.channel);

  state.lastResults = results;
  state.freightPage = 1;
  renderSummary(allResults, input);
  renderResults(results);
}

function renderSummary(results, input) {
  const available = results.filter(row => !row.blocked);
  const best = available[0];
  $("chargeableWeight").textContent = `${input.chargeableWeight.toFixed(1)} kg`;
  $("bestCost").textContent = best ? currency(best.cost) : "-";
  $("availableCount").textContent = String(available.length);
  renderRecommendations(available);
  $("rateCount").textContent = `${state.rates.length} 条价格`;
}

function renderRecommendations(available) {
  const categories = [
    { key: "海运", label: "海运", match: row => row.channel.includes("海运") },
    { key: "快递", label: "快递", match: row => row.channel.includes("快递") },
    { key: "空派", label: "空派", match: row => row.channel.includes("空派") }
  ];
  const picks = categories.map(category => {
    const rows = available.filter(category.match).sort((a, b) => a.cost - b.cost);
    return rows[0] ? { ...rows[0], category: category.label } : null;
  }).filter(Boolean).sort((a, b) => a.cost - b.cost);

  $("recommendationCards").innerHTML = picks.length ? picks.map(row => `
    <div class="recommendation-card">
      <span>${escapeHtml(row.category)}</span>
      <strong>${currency(row.cost)}</strong>
      <em>${escapeHtml(row.name)}</em>
    </div>
  `).join("") : `<div class="muted">暂无海运、快递、空派可推荐渠道</div>`;
}

function renderResults(results) {
  const totalPages = Math.max(1, Math.ceil(results.length / state.freightPageSize));
  state.freightPage = Math.min(Math.max(1, state.freightPage), totalPages);
  updatePager("freight", results.length, state.freightPage, state.freightPageSize);
  if (!results.length) {
    $("resultsBody").innerHTML = `<tr><td colspan="10" class="unavailable">当前条件没有匹配渠道，请调整国家、分区或渠道筛选。</td></tr>`;
    return;
  }

  const start = (state.freightPage - 1) * state.freightPageSize;
  const visible = results.slice(start, start + state.freightPageSize);
  $("resultsBody").innerHTML = visible.map((row, index) => {
    const surchargeText = row.surchargeLines.length
      ? row.surchargeLines.map(line => `<span class="chip">${escapeHtml(line.label)}</span>`).join("")
      : `<span class="muted">无额外勾选附加费</span>`;
    const blocked = row.blocked ? `<div class="unavailable">属性需单独确认或渠道不收</div>` : "";
    return `
      <tr class="${index === 0 && !row.blocked ? "best-row" : ""}">
        <td><span class="rank">${start + index + 1}</span></td>
        <td><strong>${escapeHtml(row.name)}</strong><div class="muted">${escapeHtml(row.note)}</div>${blocked}</td>
        <td>${escapeHtml(row.channel)}<div class="muted">${row.taxIncluded ? "含税" : "自税"}</div></td>
        <td>${escapeHtml(row.country)}${normalizeZone(row.zone) ? ` / ${escapeHtml(normalizeZone(row.zone))}` : ""}</td>
        <td>${row.minWeight}kg起<br><span class="muted">按${row.billWeight.toFixed(1)}kg计</span></td>
        <td>¥${row.unitPrice}/kg</td>
        <td class="money">${currency(row.cost)}</td>
        <td>${currency(row.avg)}</td>
        <td>${escapeHtml(row.eta)}</td>
        <td>${surchargeText}<div class="muted">${escapeHtml(row.surchargeText)}</div></td>
      </tr>
    `;
  }).join("");
}

function renderRules() {
  const grouped = state.rates.reduce((map, rate) => {
    const key = `${rate.name}|${rate.country}|${normalizeZone(rate.zone) || "全分区适用"}`;
    const rows = map.get(key) || [];
    rows.push(rate);
    map.set(key, rows);
    return map;
  }, new Map());

  $("ruleGrid").innerHTML = [...grouped.entries()].map(([key, rows]) => {
    const [name, country, zone] = key.split("|");
    const tiers = rows.sort((a, b) => a.minWeight - b.minWeight)
      .map(row => `${row.minWeight}kg起 ¥${row.unitPrice}/kg${row.fixedFee ? ` + ¥${row.fixedFee}/票` : ""}`)
      .join("；");
    return `<article class="rule-card"><strong>${escapeHtml(name)}</strong><p>${escapeHtml(country)} / ${escapeHtml(zone)}<br>${escapeHtml(tiers)}<br>${escapeHtml(rows[0].surchargeText)}</p></article>`;
  }).join("");
}

function refreshFreightViews() {
  initOptions(true);
  renderRules();
  calculate();
  renderCarrierManager();
}

async function handleImport(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  setImportStatus("正在读取模板...");
  try {
    const rows = file.name.toLowerCase().endsWith(".csv")
      ? parseCsv(await file.text())
      : await parseXlsx(await file.arrayBuffer());
    importRows(rows, file.name, true);
  } catch (error) {
    setImportStatus(`导入失败：${error.message}`);
  } finally {
    event.target.value = "";
  }
}

function importRows(rows, sourceName, shouldPersist) {
  const rates = normalizeTemplateRows(rows);
  if (!rates.length) throw new Error("没有识别到有效价格行");
  state.rates = rates;
  state.rateSignature = getRateSignature(state.rates);
  state.channel = "all";
  const saved = shouldPersist ? persistRates(sourceName) : false;
  refreshFreightViews();
  setImportStatus(`已导入 ${rates.length} 条价格，旧数据已清空并覆盖。${saved ? "已保存到本机浏览器。" : ""}`);
}

function normalizeTemplateRows(rows) {
  const [header, ...body] = rows.filter(row => row.some(cell => String(cell ?? "").trim()));
  const index = name => header.findIndex(cell => String(cell || "").replace(/\s/g, "") === name);
  const idx = {
    name: index("物流方式"),
    channel: index("渠道"),
    country: index("国家名称"),
    zone: index("分区"),
    minWeight: index("起重重量(kg)"),
    startFee: index("起重费用"),
    stepWeight: index("续重重量(kg)"),
    unitPrice: index("续重费用"),
    tax: index("含税"),
    eta: index("参考时效"),
    surcharge: index("附加费"),
    note: index("备注")
  };
  if ([idx.name, idx.channel, idx.country, idx.minWeight, idx.unitPrice].some(value => value < 0)) {
    throw new Error("模板表头不匹配，请保留：物流方式、渠道、国家名称、起重重量(kg)、续重费用等列");
  }

  return body.map(row => {
    const formula = String(row[idx.startFee] || "");
    const fixedFee = parseFixedFee(formula);
    return rowToRate([
      row[idx.name],
      row[idx.channel],
      row[idx.country],
      row[idx.zone],
      row[idx.minWeight],
      row[idx.stepWeight] || 1,
      row[idx.unitPrice],
      fixedFee,
      row[idx.tax],
      row[idx.eta],
      row[idx.surcharge],
      row[idx.note]
    ]);
  }).filter(rate => rate.name && rate.channel && rate.country && rate.minWeight > 0 && rate.unitPrice > 0);
}

function parseFixedFee(formula) {
  const text = String(formula || "");
  const match = text.match(/[+＋]\s*(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : 0;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === '"' && quoted && text[i + 1] === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && text[i + 1] === "\n") i += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  rows.push(row);
  return rows;
}

async function parseXlsx(buffer) {
  if (!("DecompressionStream" in window)) {
    throw new Error("当前浏览器不支持直接解析xlsx，请用最新版Chrome/Edge，或另存为CSV后导入。");
  }
  const files = await unzip(new Uint8Array(buffer));
  const sharedStrings = readSharedStrings(files["xl/sharedStrings.xml"]);
  const sheetPath = files["xl/worksheets/sheet1.xml"] ? "xl/worksheets/sheet1.xml" : Object.keys(files).find(name => /^xl\/worksheets\/sheet\d+\.xml$/.test(name));
  if (!sheetPath) throw new Error("没有找到工作表");
  return readSheet(files[sheetPath], sharedStrings);
}

async function unzip(bytes) {
  const view = new DataView(bytes.buffer);
  const eocd = findEndOfCentralDirectory(bytes);
  const entryCount = view.getUint16(eocd + 10, true);
  const centralOffset = view.getUint32(eocd + 16, true);
  const files = {};
  let ptr = centralOffset;

  for (let i = 0; i < entryCount; i += 1) {
    if (view.getUint32(ptr, true) !== 0x02014b50) throw new Error("xlsx目录结构异常");
    const method = view.getUint16(ptr + 10, true);
    const compressedSize = view.getUint32(ptr + 20, true);
    const fileNameLength = view.getUint16(ptr + 28, true);
    const extraLength = view.getUint16(ptr + 30, true);
    const commentLength = view.getUint16(ptr + 32, true);
    const localOffset = view.getUint32(ptr + 42, true);
    const name = decodeUtf8(bytes.slice(ptr + 46, ptr + 46 + fileNameLength));
    const localNameLength = view.getUint16(localOffset + 26, true);
    const localExtraLength = view.getUint16(localOffset + 28, true);
    const dataStart = localOffset + 30 + localNameLength + localExtraLength;
    const compressed = bytes.slice(dataStart, dataStart + compressedSize);
    files[name] = method === 0 ? decodeUtf8(compressed) : decodeUtf8(await inflateRaw(compressed));
    ptr += 46 + fileNameLength + extraLength + commentLength;
  }
  return files;
}

function findEndOfCentralDirectory(bytes) {
  for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 66000); i -= 1) {
    if (bytes[i] === 0x50 && bytes[i + 1] === 0x4b && bytes[i + 2] === 0x05 && bytes[i + 3] === 0x06) return i;
  }
  throw new Error("不是有效的xlsx文件");
}

async function inflateRaw(bytes) {
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

function readSharedStrings(xml) {
  if (!xml) return [];
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  return [...doc.getElementsByTagName("si")].map(si => [...si.getElementsByTagName("t")].map(t => t.textContent).join(""));
}

function readSheet(xml, sharedStrings) {
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  const rows = [];
  [...doc.getElementsByTagName("row")].forEach(rowNode => {
    const row = [];
    [...rowNode.getElementsByTagName("c")].forEach(cell => {
      const ref = cell.getAttribute("r") || "";
      const col = columnIndex(ref.replace(/\d/g, ""));
      const type = cell.getAttribute("t");
      const formula = cell.getElementsByTagName("f")[0]?.textContent;
      const value = cell.getElementsByTagName("v")[0]?.textContent || "";
      const inline = cell.getElementsByTagName("t")[0]?.textContent || "";
      row[col] = formula ? `=${formula}` : type === "s" ? sharedStrings[Number(value)] || "" : type === "inlineStr" ? inline : value;
    });
    rows.push(row.map(cell => cell ?? ""));
  });
  return rows;
}

function columnIndex(letters) {
  return [...letters].reduce((sum, letter) => sum * 26 + letter.charCodeAt(0) - 64, 0) - 1;
}

function decodeUtf8(bytes) {
  return new TextDecoder("utf-8").decode(bytes);
}

async function resetRates() {
  localStorage.removeItem(STORAGE_KEY);
  const published = await loadPublishedRates();
  state.rates = published?.rates || DEFAULT_RATES;
  state.rateSignature = getRateSignature(state.rates);
  state.channel = "all";
  refreshFreightViews();
  setImportStatus(published ? `已恢复网站发布模板：${published.sourceName || "rates.json"}` : "已恢复内置模板数据。");
}

function populateCarrierFilters() {
  const setOptions = (id, values, label) => {
    const current = $(id).value;
    const options = ["", ...unique(values.map(value => normalizeZone(value) || value).filter(Boolean)).sort((a, b) => String(a).localeCompare(String(b), "zh-CN"))];
    $(id).innerHTML = options.map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value || label)}</option>`).join("");
    if (options.includes(current)) $(id).value = current;
  };
  setOptions("carrierChannel", state.rates.map(rate => rate.channel), "全部渠道");
  setOptions("carrierCountry", state.rates.map(rate => rate.country), "全部国家");
  setOptions("carrierZone", state.rates.map(rate => normalizeZone(rate.zone)), "全部分区");
}

function renderCarrierManager() {
  if (!$("carrierBody")) return;
  populateCarrierFilters();
  filterCarrierRates();
}

function filterCarrierRates() {
  if (!$("carrierBody")) return;
  const keyword = $("carrierKeyword").value.trim().toLowerCase();
  const channel = $("carrierChannel").value;
  const country = $("carrierCountry").value;
  const zone = normalizeZone($("carrierZone").value);
  state.filteredCarrierRates = state.rates.map((rate, index) => ({ ...rate, index })).filter(rate => {
    const haystack = [rate.name, rate.channel, rate.country, rate.zone, rate.eta, rate.surchargeText, rate.note].join(" ").toLowerCase();
    return (!keyword || haystack.includes(keyword))
      && (!channel || rate.channel === channel)
      && (!country || rate.country === country)
      && (!zone || normalizeZone(rate.zone) === zone);
  }).sort((a, b) => String(a.name).localeCompare(String(b.name), "zh-CN") || a.minWeight - b.minWeight);
  $("carrierRateCount").textContent = `${state.filteredCarrierRates.length.toLocaleString("zh-CN")} / ${state.rates.length.toLocaleString("zh-CN")} 条价格`;
  renderCarrierTable();
}

function renderCarrierTable() {
  const rows = state.filteredCarrierRates;
  $("carrierBody").innerHTML = rows.length ? rows.map(rate => `
    <tr>
      <td><button type="button" class="small-action" data-edit-rate="${rate.index}">编辑</button></td>
      <td>${escapeHtml(rate.name)}</td>
      <td>${escapeHtml(rate.channel)}</td>
      <td>${escapeHtml(rate.country)}</td>
      <td>${escapeHtml(normalizeZone(rate.zone) || "全分区")}</td>
      <td>${rate.minWeight}</td>
      <td>${rate.stepWeight}</td>
      <td>${rate.unitPrice}</td>
      <td>${rate.fixedFee || ""}</td>
      <td>${rate.taxIncluded ? "是" : "否"}</td>
      <td>${escapeHtml(rate.eta)}</td>
      <td>${escapeHtml(rate.surchargeText)}</td>
    </tr>
  `).join("") : `<tr><td colspan="12" class="unavailable">没有匹配的物流商价格。</td></tr>`;
}

function carrierField(form, name) {
  return form.elements.namedItem(name);
}

function openCarrierEdit(index) {
  const rate = state.rates[index];
  if (!rate) return;
  const form = $("carrierEditForm");
  carrierField(form, "rateIndex").value = String(index);
  carrierField(form, "name").value = rate.name || "";
  carrierField(form, "channel").value = rate.channel || "";
  carrierField(form, "country").value = rate.country || "";
  carrierField(form, "zone").value = normalizeZone(rate.zone) || "";
  carrierField(form, "minWeight").value = rate.minWeight || 0;
  carrierField(form, "stepWeight").value = rate.stepWeight || 1;
  carrierField(form, "unitPrice").value = rate.unitPrice || 0;
  carrierField(form, "fixedFee").value = rate.fixedFee || 0;
  carrierField(form, "taxIncluded").value = String(Boolean(rate.taxIncluded));
  carrierField(form, "eta").value = rate.eta || "";
  carrierField(form, "surchargeText").value = rate.surchargeText || "";
  carrierField(form, "note").value = rate.note || "";
  $("carrierEditPanel").classList.remove("hidden");
  form.classList.remove("hidden");
  form.style.display = "";
}

function saveCarrierEdit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const index = Number(carrierField(form, "rateIndex").value);
  if (!state.rates[index]) return;
  state.rates[index] = normalizeRate({
    name: carrierField(form, "name").value,
    channel: carrierField(form, "channel").value,
    country: carrierField(form, "country").value,
    zone: carrierField(form, "zone").value,
    minWeight: Number(carrierField(form, "minWeight").value || 0),
    stepWeight: Number(carrierField(form, "stepWeight").value || 1),
    unitPrice: Number(carrierField(form, "unitPrice").value || 0),
    fixedFee: Number(carrierField(form, "fixedFee").value || 0),
    taxIncluded: carrierField(form, "taxIncluded").value === "true",
    eta: carrierField(form, "eta").value,
    surchargeText: carrierField(form, "surchargeText").value,
    note: carrierField(form, "note").value
  });
  persistRates("物流商管理手动维护");
  $("carrierEditPanel").classList.add("hidden");
  setImportStatus("已保存单条物流商价格修改，本机浏览器将使用修改后的数据。");
  refreshFreightViews();
}

function setImportStatus(text) {
  $("importStatus").textContent = text;
}

function updatePager(prefix, total, page, pageSize) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const info = $(`${prefix}PageInfo`);
  const prev = $(`${prefix}PrevPage`);
  const next = $(`${prefix}NextPage`);
  if (info) info.textContent = `第 ${page} / ${totalPages} 页，共 ${total.toLocaleString("zh-CN")} 条`;
  if (prev) prev.disabled = page <= 1;
  if (next) next.disabled = page >= totalPages;
}

function loadStoredShipments() {
  try {
    const stored = localStorage.getItem(SHIPMENT_STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed.records) && parsed.records.length ? parsed : null;
  } catch {
    return null;
  }
}

function persistShipments(sourceName) {
  try {
    localStorage.setItem(SHIPMENT_STORAGE_KEY, JSON.stringify({
      sourceName,
      importedAt: new Date().toISOString(),
      records: state.shipments
    }));
    return true;
  } catch {
    return false;
  }
}

async function loadPublishedShipments() {
  try {
    const response = await fetch(`data/shipping-records.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return null;
    const parsed = await response.json();
    return Array.isArray(parsed.records) ? parsed : null;
  } catch {
    return null;
  }
}

function shipmentKey(record) {
  return `${record.fbaOrderNo || ""}|${record.trackingNo || ""}`.toLowerCase();
}

function normalizeShipment(record) {
  return {
    shipDate: String(record.shipDate || "").slice(0, 10),
    batchNo: String(record.batchNo || "").trim(),
    operator: String(record.operator || "").trim(),
    fbaOrderNo: String(record.fbaOrderNo || "").trim(),
    trackingNo: String(record.trackingNo || "").trim(),
    cartons: Number(record.cartons || 0),
    company: String(record.company || "").trim(),
    actualWeight: Number(record.actualWeight || 0),
    volumeWeight: Number(record.volumeWeight || 0),
    chargeWeight: Number(record.chargeWeight || 0),
    ticketWeight: Number(record.ticketWeight || 0),
    route: String(record.route || "").trim(),
    country: String(record.country || "").trim(),
    unitPrice: Number(record.unitPrice || 0),
    otherFee: Number(record.otherFee || 0),
    remark: String(record.remark || "").trim(),
    warehouseCode: String(record.warehouseCode || "").trim()
  };
}

function normalizeShipmentRows(rows) {
  const [header, ...body] = rows.filter(row => row.some(cell => String(cell ?? "").trim()));
  const cleaned = header.map(cell => String(cell || "").replace(/\s|\n/g, "").replace(/（/g, "(").replace(/）/g, ")"));
  const index = (...names) => names.map(name => cleaned.indexOf(name)).find(pos => pos >= 0);
  const idx = {
    shipDate: index("发货日期"),
    batchNo: index("内部批次号"),
    operator: index("运营姓名"),
    fbaOrderNo: index("FBA订单号"),
    trackingNo: index("运单号"),
    cartons: index("箱数"),
    company: index("所属公司"),
    actualWeight: index("实际重量(KG)"),
    volumeWeight: index("体积重(KG)"),
    chargeWeight: index("物流计费重量(KG)", "物流计费重量(KG)"),
    ticketWeight: index("单票计费重(KG)"),
    route: index("走货方式(物流商-渠道)"),
    country: index("目的国家"),
    unitPrice: index("计费单价"),
    otherFee: index("其它费用"),
    remark: index("备注"),
    warehouseCode: index("仓库代码")
  };
  if ([idx.shipDate, idx.fbaOrderNo, idx.trackingNo, idx.route].some(pos => pos === undefined)) {
    throw new Error("发货记录表头不匹配，请保留发货日期、FBA订单号、运单号、走货方式等列");
  }
  return body.map(row => normalizeShipment({
    shipDate: row[idx.shipDate],
    batchNo: row[idx.batchNo],
    operator: row[idx.operator],
    fbaOrderNo: row[idx.fbaOrderNo],
    trackingNo: row[idx.trackingNo],
    cartons: row[idx.cartons],
    company: row[idx.company],
    actualWeight: row[idx.actualWeight],
    volumeWeight: row[idx.volumeWeight],
    chargeWeight: row[idx.chargeWeight],
    ticketWeight: row[idx.ticketWeight],
    route: row[idx.route],
    country: row[idx.country],
    unitPrice: row[idx.unitPrice],
    otherFee: row[idx.otherFee],
    remark: row[idx.remark],
    warehouseCode: row[idx.warehouseCode]
  })).filter(record => record.fbaOrderNo || record.trackingNo);
}

function mergeShipments(records) {
  const map = new Map(state.shipments.map(record => [shipmentKey(record), record]));
  records.forEach(record => {
    const key = shipmentKey(record);
    if (key !== "|") map.set(key, record);
  });
  state.shipments = [...map.values()];
}

function populateShipmentFilters() {
  const setOptions = (id, values, label) => {
    const current = $(id).value;
    const options = ["", ...unique(values).sort((a, b) => String(a).localeCompare(String(b), "zh-CN"))];
    $(id).innerHTML = options.map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value || label)}</option>`).join("");
    if (options.includes(current)) $(id).value = current;
  };
  setOptions("shipOperator", state.shipments.map(r => r.operator), "全部运营");
  setOptions("shipCountry", state.shipments.map(r => r.country), "全部国家");
  setOptions("shipRoute", state.shipments.map(r => r.route), "全部走货方式");
  setOptions("shipCompany", state.shipments.map(r => r.company), "全部公司");
  setOptions("shipWarehouse", state.shipments.map(r => r.warehouseCode), "全部仓库");
}

function filterShipments() {
  const from = $("shipDateFrom").value;
  const to = $("shipDateTo").value;
  const operator = $("shipOperator").value;
  const country = $("shipCountry").value;
  const route = $("shipRoute").value;
  const company = $("shipCompany").value;
  const warehouse = $("shipWarehouse").value;
  const keyword = $("shipKeyword").value.trim().toLowerCase();
  state.filteredShipments = state.shipments.filter(record => {
    const haystack = [record.batchNo, record.fbaOrderNo, record.trackingNo, record.remark, record.route, record.company].join(" ").toLowerCase();
    return (!from || record.shipDate >= from)
      && (!to || record.shipDate <= to)
      && (!operator || record.operator === operator)
      && (!country || record.country === country)
      && (!route || record.route === route)
      && (!company || record.company === company)
      && (!warehouse || record.warehouseCode === warehouse)
      && (!keyword || haystack.includes(keyword));
  }).sort((a, b) => String(b.shipDate).localeCompare(String(a.shipDate)));
  state.shipmentPage = 1;
  renderShipments();
}

function renderShipmentSummary(records) {
  const cartons = records.reduce((sum, record) => sum + Number(record.cartons || 0), 0);
  const weight = records.reduce((sum, record) => sum + Number(record.chargeWeight || 0), 0);
  const cost = records.reduce((sum, record) => sum + Number(record.chargeWeight || 0) * Number(record.unitPrice || 0) + Number(record.otherFee || 0), 0);
  $("shipTotal").textContent = records.length.toLocaleString("zh-CN");
  $("shipCartons").textContent = cartons.toLocaleString("zh-CN");
  $("shipWeight").textContent = `${Math.round(weight).toLocaleString("zh-CN")} kg`;
  $("shipCost").textContent = currency(cost);
}

function renderShipments() {
  renderShipmentSummary(state.filteredShipments);
  $("shipmentSource").textContent = `${state.shipmentSource || "发货记录"} · ${state.shipments.length.toLocaleString("zh-CN")} 条`;
  const totalPages = Math.max(1, Math.ceil(state.filteredShipments.length / state.shipmentPageSize));
  state.shipmentPage = Math.min(Math.max(1, state.shipmentPage), totalPages);
  updatePager("shipment", state.filteredShipments.length, state.shipmentPage, state.shipmentPageSize);
  const start = (state.shipmentPage - 1) * state.shipmentPageSize;
  const visible = state.filteredShipments.slice(start, start + state.shipmentPageSize);
  $("shipmentBody").innerHTML = visible.length ? visible.map(record => `
    <tr>
      <td>${escapeHtml(record.shipDate)}</td>
      <td>${escapeHtml(record.batchNo)}</td>
      <td>${escapeHtml(record.operator)}</td>
      <td>${escapeHtml(record.fbaOrderNo)}</td>
      <td>${escapeHtml(record.trackingNo)}</td>
      <td>${record.cartons || ""}</td>
      <td>${escapeHtml(record.company)}</td>
      <td>${record.chargeWeight || ""}</td>
      <td>${escapeHtml(record.route)}</td>
      <td>${escapeHtml(record.country)}</td>
      <td>${record.unitPrice || ""}</td>
      <td>${escapeHtml(record.warehouseCode)}</td>
      <td>${escapeHtml(record.remark)}</td>
      <td><button type="button" class="text-button table-action" data-shipment-edit="${escapeHtml(shipmentKey(record))}">编辑</button></td>
    </tr>
  `).join("") : `<tr><td colspan="14" class="unavailable">没有匹配的发货记录。</td></tr>`;
}

async function handleShipmentImport(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  $("shipmentImportStatus").textContent = "正在导入发货数据...";
  try {
    const rows = file.name.toLowerCase().endsWith(".csv")
      ? parseCsv(await file.text())
      : await parseXlsx(await file.arrayBuffer());
    const records = normalizeShipmentRows(rows);
    mergeShipments(records);
    state.shipmentSource = file.name;
    persistShipments(file.name);
    populateShipmentFilters();
    filterShipments();
    $("shipmentImportStatus").textContent = `已导入 ${records.length} 条，重复订单已按 FBA订单号 + 运单号 更新。`;
  } catch (error) {
    $("shipmentImportStatus").textContent = `导入失败：${error.message}`;
  } finally {
    event.target.value = "";
  }
}

function setShipmentEditMode(record) {
  const form = $("manualShipmentForm");
  state.editingShipmentKey = record ? shipmentKey(record) : "";
  $("shipmentFormTitle").textContent = record ? "编辑发货记录" : "新增发货记录";
  $("manualShipmentSubmit").textContent = record ? "保存修改" : "保存发货记录";
  $("cancelShipmentEdit").classList.toggle("hidden", !record);
  form.reset();
  if (record) {
    Object.entries(record).forEach(([key, value]) => {
      if (form.elements[key]) form.elements[key].value = value || "";
    });
  }
  openShipmentFormModal();
  form.elements.shipDate?.focus();
}

function openShipmentFormModal() {
  const modal = $("shipmentFormModal");
  modal.classList.remove("hidden");
  modal.style.display = "grid";
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeShipmentFormModal() {
  state.editingShipmentKey = "";
  $("manualShipmentForm").reset();
  $("shipmentFormTitle").textContent = "新增发货记录";
  $("manualShipmentSubmit").textContent = "保存发货记录";
  $("cancelShipmentEdit").classList.add("hidden");
  const modal = $("shipmentFormModal");
  modal.classList.add("hidden");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function addManualShipment(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const record = normalizeShipment(data);
  if (!record.fbaOrderNo || !record.trackingNo) {
    $("shipmentImportStatus").textContent = "请填写 FBA订单号和运单号。";
    return;
  }
  const wasEditing = Boolean(state.editingShipmentKey);
  if (wasEditing) {
    state.shipments = state.shipments.filter(item => shipmentKey(item) !== state.editingShipmentKey);
  }
  mergeShipments([record]);
  state.shipmentSource = "本机手动维护";
  persistShipments(state.shipmentSource);
  populateShipmentFilters();
  filterShipments();
  event.currentTarget.reset();
  state.editingShipmentKey = "";
  $("manualShipmentSubmit").textContent = "保存发货记录";
  $("cancelShipmentEdit").classList.add("hidden");
  closeShipmentFormModal();
  $("shipmentImportStatus").textContent = wasEditing ? "已保存发货记录修改。" : "已保存 1 条发货记录。";
}

async function bootstrapShipments() {
  const stored = loadStoredShipments();
  if (stored) {
    state.shipments = stored.records.map(normalizeShipment);
    state.shipmentSource = stored.sourceName || "本机发货记录";
  } else {
    const published = await loadPublishedShipments();
    state.shipments = (published?.records || []).map(normalizeShipment);
    state.shipmentSource = published?.sourceName || "默认发货记录";
  }
  populateShipmentFilters();
  filterShipments();
}

function copyCsv() {
  const headers = ["排名", "物流方式", "渠道", "国家", "分区", "计费重量", "总费用", "平均/kg", "参考时效"];
  const lines = state.lastResults.map((row, index) => [index + 1, row.name, row.channel, row.country, row.zone || "", row.billWeight, Math.round(row.cost), Math.round(row.avg), row.eta]);
  const csv = [headers, ...lines].map(row => row.map(cell => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  navigator.clipboard?.writeText(csv);
  $("copyCsv").textContent = "已复制";
  setTimeout(() => $("copyCsv").textContent = "复制", 1200);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

document.querySelectorAll(".segment").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    state.mode = button.dataset.mode;
    $("volumeFields").classList.toggle("hidden", state.mode !== "volume");
  });
});

$("country").addEventListener("change", () => {
  updateZones(false);
});
$("copyCsv").addEventListener("click", copyCsv);
$("templateFile").addEventListener("change", handleImport);
$("resetRates").addEventListener("click", resetRates);
$("carrierFilters").addEventListener("submit", event => {
  event.preventDefault();
  filterCarrierRates();
});
$("resetCarrierFilters").addEventListener("click", () => {
  $("carrierFilters").reset();
  filterCarrierRates();
});
$("carrierBody").addEventListener("click", event => {
  const button = event.target.closest("[data-edit-rate]");
  if (button) openCarrierEdit(Number(button.dataset.editRate));
});
$("carrierEditForm").addEventListener("submit", saveCarrierEdit);
$("cancelCarrierEdit").addEventListener("click", () => {
  $("carrierEditPanel").classList.add("hidden");
});
$("quoteForm").addEventListener("submit", event => {
  event.preventDefault();
  calculate();
});
$("freightPageSize").addEventListener("change", event => {
  state.freightPageSize = Number(event.target.value) || 100;
  state.freightPage = 1;
  renderResults(state.lastResults);
});
$("freightPrevPage").addEventListener("click", () => {
  state.freightPage -= 1;
  renderResults(state.lastResults);
});
$("freightNextPage").addEventListener("click", () => {
  state.freightPage += 1;
  renderResults(state.lastResults);
});
$("shipmentFilters").addEventListener("submit", event => {
  event.preventDefault();
  filterShipments();
});
$("resetShipmentFilters").addEventListener("click", () => {
  $("shipmentFilters").reset();
  filterShipments();
});
$("shipmentFile").addEventListener("change", handleShipmentImport);
$("toggleShipmentForm").addEventListener("click", () => {
  setShipmentEditMode(null);
});
$("manualShipmentForm").addEventListener("submit", addManualShipment);
$("closeShipmentForm").addEventListener("click", closeShipmentFormModal);
$("cancelShipmentEdit").addEventListener("click", closeShipmentFormModal);
$("shipmentFormModal").addEventListener("click", event => {
  if (event.target.id === "shipmentFormModal") closeShipmentFormModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !$("shipmentFormModal").classList.contains("hidden")) {
    closeShipmentFormModal();
  }
});
$("shipmentBody").addEventListener("click", event => {
  const button = event.target.closest("[data-shipment-edit]");
  if (!button) return;
  const record = state.shipments.find(item => shipmentKey(item) === button.dataset.shipmentEdit);
  if (record) setShipmentEditMode(record);
});
$("shipmentPageSize").addEventListener("change", event => {
  state.shipmentPageSize = Number(event.target.value) || 100;
  state.shipmentPage = 1;
  renderShipments();
});
$("shipmentPrevPage").addEventListener("click", () => {
  state.shipmentPage -= 1;
  renderShipments();
});
$("shipmentNextPage").addEventListener("click", () => {
  state.shipmentPage += 1;
  renderShipments();
});

const pageTitles = {
  freight: "运费查询",
  carriers: "物流商管理",
  orders: "订单管理",
  tracking: "物流跟踪",
  stats: "数据统计",
  settings: "系统设置"
};

document.querySelectorAll(".nav-item").forEach(button => {
  button.addEventListener("click", () => {
    const page = button.dataset.page;
    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".page-view").forEach(view => view.classList.remove("active"));
    button.classList.add("active");
    $(`${page}Page`).classList.add("active");
    $("pageTitle").textContent = pageTitles[page] || "物流管理台";
  });
});

async function bootstrap() {
  cleanShipmentCreateArea();
  const stored = loadStoredRates();
  if (stored) {
    state.rates = stored.rates;
    state.rateSignature = getRateSignature(state.rates);
    setImportStatus(`当前使用本机已导入模板：${stored.sourceName || "未命名模板"}`);
  } else {
    const published = await loadPublishedRates();
    if (published) {
      state.rates = published.rates;
      state.rateSignature = getRateSignature(state.rates);
      setImportStatus(`当前使用网站发布模板：${published.sourceName || "rates.json"}`);
    } else {
      state.rates = DEFAULT_RATES;
      state.rateSignature = getRateSignature(state.rates);
      setImportStatus("当前使用内置模板。");
    }
  }
  initOptions(false);
  renderRules();
  calculate();
  renderCarrierManager();
  await bootstrapShipments();
}

bootstrap();

window.freightApp = {
  importRows,
  parseCsv,
  normalizeTemplateRows,
  getRates: () => state.rates
};
