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
  lastResults: []
};

const $ = id => document.getElementById(id);
const currency = value => `¥${Math.round(value).toLocaleString("zh-CN")}`;
const decimal = value => Number(value || 0);

function rowToRate(row) {
  return {
    name: String(row[0] || "").trim(),
    channel: String(row[1] || "").trim(),
    country: String(row[2] || "").trim(),
    zone: String(row[3] || "").trim(),
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

function loadStoredRates() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed.rates) && parsed.rates.length ? parsed : null;
  } catch {
    return null;
  }
}

function persistRates(sourceName) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      sourceName,
      importedAt: new Date().toISOString(),
      rates: state.rates
    }));
    return true;
  } catch {
    return false;
  }
}

async function loadPublishedRates() {
  try {
    const response = await fetch(`data/rates.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return null;
    const parsed = await response.json();
    return Array.isArray(parsed.rates) && parsed.rates.length ? parsed : null;
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
  const zones = unique(state.rates.filter(rate => rate.country === country).map(rate => rate.zone || "不限分区"));
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
    zone: $("zone").value === "不限分区" ? "" : $("zone").value,
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
    .filter(rate => !rate.zone || rate.zone === input.zone)
    .reduce((groups, rate) => {
      const key = `${rate.name}|${rate.channel}|${rate.country}|${rate.zone || ""}`;
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
  const input = getInputs();
  const results = [...chooseTier(input).values()].map(rate => {
    const billWeight = Math.ceil(Math.max(input.chargeableWeight, rate.minWeight) / rate.stepWeight) * rate.stepWeight;
    const surcharges = calcSurcharges(rate, input, billWeight);
    const blocked = surcharges.lines.some(line => line.blocked);
    const cost = billWeight * (rate.unitPrice + surcharges.perKgTotal) + surcharges.fixedTotal;
    return { ...rate, billWeight, cost, avg: cost / Math.max(input.chargeableWeight, 1), surchargeLines: surcharges.lines, blocked };
  }).filter(row => state.channel === "all" || row.channel === state.channel)
    .sort((a, b) => Number(a.blocked) - Number(b.blocked) || a.cost - b.cost);

  state.lastResults = results;
  renderSummary(results, input);
  renderResults(results);
}

function renderSummary(results, input) {
  const available = results.filter(row => !row.blocked);
  const best = available[0];
  $("chargeableWeight").textContent = `${input.chargeableWeight.toFixed(1)} kg`;
  $("bestCost").textContent = best ? currency(best.cost) : "-";
  $("availableCount").textContent = String(available.length);
  $("bestRoute").textContent = best ? `${best.channel} · ${best.zone || best.country}` : "-";
  $("rateCount").textContent = `${state.rates.length} 条价格`;
}

function renderResults(results) {
  if (!results.length) {
    $("resultsBody").innerHTML = `<tr><td colspan="10" class="unavailable">当前条件没有匹配渠道，请调整国家、分区或渠道筛选。</td></tr>`;
    return;
  }

  $("resultsBody").innerHTML = results.map((row, index) => {
    const surchargeText = row.surchargeLines.length
      ? row.surchargeLines.map(line => `<span class="chip">${escapeHtml(line.label)}</span>`).join("")
      : `<span class="muted">无额外勾选附加费</span>`;
    const blocked = row.blocked ? `<div class="unavailable">属性需单独确认或渠道不收</div>` : "";
    return `
      <tr class="${index === 0 && !row.blocked ? "best-row" : ""}">
        <td><span class="rank">${index + 1}</span></td>
        <td><strong>${escapeHtml(row.name)}</strong><div class="muted">${escapeHtml(row.note)}</div>${blocked}</td>
        <td>${escapeHtml(row.channel)}<div class="muted">${row.taxIncluded ? "含税" : "自税"}</div></td>
        <td>${escapeHtml(row.country)}${row.zone ? ` / ${escapeHtml(row.zone)}` : ""}</td>
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
    const key = `${rate.name}|${rate.country}|${rate.zone || "不限分区"}`;
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
  state.channel = "all";
  const saved = shouldPersist ? persistRates(sourceName) : false;
  initOptions(false);
  renderRules();
  calculate();
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
  state.channel = "all";
  initOptions(false);
  renderRules();
  calculate();
  setImportStatus(published ? `已恢复网站发布模板：${published.sourceName || "rates.json"}` : "已恢复内置模板数据。");
}

function setImportStatus(text) {
  $("importStatus").textContent = text;
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
    calculate();
  });
});

$("country").addEventListener("change", () => {
  updateZones(false);
  calculate();
});
$("copyCsv").addEventListener("click", copyCsv);
$("templateFile").addEventListener("change", handleImport);
$("resetRates").addEventListener("click", resetRates);
$("quoteForm").addEventListener("input", calculate);
$("quoteForm").addEventListener("change", calculate);

const pageTitles = {
  freight: "运费试算",
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
  const stored = loadStoredRates();
  if (stored) {
    state.rates = stored.rates;
    setImportStatus(`当前使用本机已导入模板：${stored.sourceName || "未命名模板"}`);
  } else {
    const published = await loadPublishedRates();
    if (published) {
      state.rates = published.rates;
      setImportStatus(`当前使用网站发布模板：${published.sourceName || "rates.json"}`);
    } else {
      state.rates = DEFAULT_RATES;
      setImportStatus("当前使用内置模板。");
    }
  }
  initOptions(false);
  renderRules();
  calculate();
}

bootstrap();

window.freightApp = {
  importRows,
  parseCsv,
  normalizeTemplateRows,
  getRates: () => state.rates
};
