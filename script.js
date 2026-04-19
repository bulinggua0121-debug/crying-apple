const EMBEDDED = {
  highlightSrc: "data:image/png;base64,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",
  badgeSrc: "data:image/png;base64,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",
};

const CONFIG = {
  inputSize: { w: 1280, h: 720 },
  cropTop: { left: 65, right: 65, bottom: 456 },
  cropBottom: { left: 65, right: 65, bottom: 50 },
  cropW: 1150,
  cropTopH: 264,
  cropBottomH: 670,
  cropFiveBottomH: 404,

  output: {
    w: 1224,
    h: 1633,
    bg: "#F1EFD8",
    stackW: 1150,
    stackH4: 264 * 3 + 670,
  },

  localUI: {
    // 数字标注的 x 坐标基于最终输出画布（1224 宽），y 坐标随每张图的 drawY 叠加
    paletteUnderlineSearch: { x1: 150, x2: 950, y1: 12, y2: 75 },
    paletteCircleCenterY: 28,

    bars: {
      hue: {
        detect: { x1: 470, x2: 835, y1: 78, y2: 120 },
        stepRange: { start: 489, end: 814 },
        segments: [6, 9, 8, 7],
        badgeLeft:  { x: 460, y: 91 },
        badgeRight: { x: 857, y: 91 },
      },
      vivid: {
        detect: { x1: 470, x2: 835, y1: 126, y2: 170 },
        stepRange: { start: 490, end: 814 },
        steps: 15,
        badgeLeft:  { x: 460, y: 144 },
        badgeRight: { x: 857, y: 144 },
      },
      bright: {
        detect: { x1: 470, x2: 835, y1: 176, y2: 220 },
        stepRange: { start: 490, end: 814 },
        steps: 15,
        badgeLeft:  { x: 460, y: 197 },
        badgeRight: { x: 857, y: 197 },
      },
    },
  },

  highlight: {
    size: 85,
  },

  badge: {
    size: 51,
    fontSize: 35,
    fontFamily: "AaHeiBottom",
    color: "#FFFFFF",
  },

  // highlight：固定最终画布 x，只根据青色短线找 y
  highlightFixedX: 322,
  highlightFixedY: 57,
  highlightCircleY: 36,

  hueDot: {
    radius: 3,
    color: "#FF4E4E",
    y: 132,
  },

  // 明确以最终 1224 画布为基准：
  // 鲜艳度 / 亮度 15 个格子的中心点，从 x=519 到 x=827，步长 22。
  lrGrid: {
    firstCenterX: 519,
    lastCenterX: 827,
    step: 22,
    count: 15,
  },

  // 色调小格：以最终 1224 画布为基准
  // 每格宽 11px，最左边一格左边缘 x=519，因此格心是 524.5 开始
  hueGrid: {
    firstLeftX: 519,
    cellWidth: 11,
    count: 30,
  },
};

CONFIG.output.offsetX = Math.round((CONFIG.output.w - CONFIG.output.stackW) / 2);
CONFIG.output.offsetY = Math.round((CONFIG.output.h - CONFIG.output.stackH4) / 2);
CONFIG.output.topAnchorY = CONFIG.output.offsetY;

const state = {
  files: [],
  bitmaps: [],
  renderedBlobUrl: null,
  downloadName: "switch-design-merged.png",
  groupedClasses: [],
  outputs: [],
  activeOutputIndex: 0,
  style:{
    highlight:0,
    badge:0,
    text:"#FFFFFF"
  },
  custom:{
    highlight:null,
    badge:null
  },
  lang: localStorage.getItem("ac_tool_lang") === "en" ? "en" : "zh",
  uploadPromptKey: "upload_prompt",
  statusKey: "status_waiting",
  statusData: null,
  processToken: 0,
  previewToken: 0,
};

const runtime = {
  isElectron: /Electron/i.test(navigator.userAgent || ""),
  isMobile: !/Electron/i.test(navigator.userAgent || "") && /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || ""),
};

document.documentElement.classList.toggle("realMobile", runtime.isMobile);

const els = {
  fileInput: document.getElementById("fileInput"),
  dropzone: document.getElementById("dropzone"),
  processBtn: document.getElementById("processBtn"),
  downloadBtn: document.getElementById("downloadBtn"),
  clearBtn: document.getElementById("clearBtn"),
  thumbs: document.getElementById("thumbs"),
  classifiedGroups: document.getElementById("classifiedGroups"),
  outputGallery: document.getElementById("outputGallery"),
  status: document.getElementById("status"),
  canvas: document.getElementById("preview"),
  langToggle: document.getElementById("langToggle"),
  donateBtn: document.getElementById("donateBtn"),
  mobileDownloadBtn: document.getElementById("mobileDownloadBtn"),
  mobileResetBtn: document.getElementById("mobileResetBtn"),
  donateModal: document.getElementById("donateModal"),
  closeDonateBtn: document.getElementById("closeDonateBtn"),
  wechatQr: document.getElementById("wechatQr"),
  alipayQr: document.getElementById("alipayQr"),
  qrPreviewModal: document.getElementById("qrPreviewModal"),
  qrPreviewImage: document.getElementById("qrPreviewImage"),
  donateHint: document.getElementById("donateHint"),
  donateDownloadLink: document.getElementById("donateDownloadLink"),
  donateHintAfter: document.getElementById("donateHintAfter"),
};
const ctx = els.canvas.getContext("2d");

const mobileLayoutSlots = {
  stylePanel: {
    el: document.getElementById("stylePanelInline"),
  },
  clockPanel: {
    el: document.getElementById("rightClockWrap"),
  },
};

if (mobileLayoutSlots.stylePanel.el) {
  mobileLayoutSlots.stylePanel.parent = mobileLayoutSlots.stylePanel.el.parentNode;
  mobileLayoutSlots.stylePanel.next = mobileLayoutSlots.stylePanel.el.nextSibling;
}
if (mobileLayoutSlots.clockPanel.el) {
  mobileLayoutSlots.clockPanel.parent = mobileLayoutSlots.clockPanel.el.parentNode;
  mobileLayoutSlots.clockPanel.next = mobileLayoutSlots.clockPanel.el.nextSibling;
}

const I18N = {
  zh: {
    page_title: "动森图纸标注站",
    title: "动森图纸标注站",
    subtitle_batch: "支持批量处理 100 张截图",
    subtitle_flow: "自动去重、分组、裁切、拼接、标注",
    subtitle_platform: "支持 Switch / Lite / OLED",
    upload_prompt: "拖入截图或点击上传文件夹",
    upload_prompt_mobile: "点击上传截图",
    upload_loaded: "载入成功",
    upload_success: "标注完成",
    upload_downloaded: "下载完成，继续标注",
    start_button: "开始标注",
    download_button: "下载图片",
    reset_button: "重新开始",
    style_title: "更多样式",
    style_desc: "可切换 highlight、标注样式和文字颜色",
    highlight_label: "Highlight",
    badge_label: "标注样式",
    text_color_label: "文字颜色",
    preset_count: "3 个预设 + 1 个自定义",
    threshold_label: "分类灵敏度：",
    credit_tool_designer: "工具设计师：不灵瓜",
    credit_typeface_designer: "字体设计师：鹿尤",
    preview_title: "点击预览",
    clock_bless: "早点休息哦宝贝",
    donate_button_web: "macOS客户端",
    donate_button_mobile: "打赏支持",
    donate_title_mobile: "打赏支持",
    donate_desc_mobile: "如果这个工具帮到了你，欢迎扫码支持一下这个小项目。",
    donate_title_web: "下载与支持",
    donate_desc_web: "桌面版下载入口和支持二维码都在这里。",
    donate_button_desktop: "打赏支持",
    donate_title_desktop: "支持这个工具",
    donate_desc_desktop: "如果这个工具帮到了你，欢迎请作者喝杯咖啡。",
    donate_wechat: "微信",
    donate_alipay: "支付宝",
    donate_close: "关闭",
    donate_hint_before: "🙇🏻 拜见各位原始股东",
    donate_hint_after: "🙇🏻‍♀️",
    download_inline: "点击下载",
    style_toggle_aria: "展开或收起更多样式",
    lang_toggle: "EN",
    donate_wechat_alt: "微信打赏码",
    donate_alipay_alt: "支付宝打赏码",
    invalid_size: ({ fileName, width, height, expectedW, expectedH }) => `${fileName || "图片"} 尺寸为 ${width}x${height}，目前仅支持 ${expectedW}x${expectedH} 的原始截图。`,
    status_waiting: "等待截图…",
    status_assets_loading: "素材仍在加载，请稍后再试。",
    status_processing: "正在生成，请稍候…",
    status_complete: ({ inputCount, dedupedCount, classCount, outputCount }) => [
      "已生成批量结果。",
      `原始 ${inputCount} 张，去重后 ${dedupedCount} 张，分成 ${classCount} 组，生成 ${outputCount} 张结果。`
    ],
    status_failed: ({ message }) => `处理失败：\n${message}`,
    status_loaded: ({ count }) => [
      `已载入 ${count} 张截图。`,
      "点击“开始标注”开始处理。"
    ],
    group_box_head: ({ index, count }) => `第 ${index} 组 · ${count} 张`,
  },
  en: {
    page_title: "Animal Crossing Pattern Hub",
    title: "Animal Crossing Pattern Hub",
    subtitle_batch: "Batch process up to 100 screenshots",
    subtitle_flow: "Auto dedupe, group, crop, stitch, and annotate",
    subtitle_platform: "Supports Switch / Lite / OLED",
    upload_prompt: "Drop screenshots here or click to upload a folder",
    upload_prompt_mobile: "Tap to upload screenshots",
    upload_loaded: "Loaded",
    upload_success: "Completed",
    upload_downloaded: "Downloaded, continue annotating",
    start_button: "Start Annotating",
    download_button: "Download Images",
    reset_button: "Reset",
    style_title: "More Styles",
    style_desc: "Switch highlight, badge style, and text color",
    highlight_label: "Highlight",
    badge_label: "Badge Style",
    text_color_label: "Text Color",
    preset_count: "3 presets + 1 custom",
    threshold_label: "Grouping Sensitivity:",
    credit_tool_designer: "Tool Designer: Bulinggua",
    credit_typeface_designer: "Typeface Designer: Luyou",
    preview_title: "Preview Output",
    clock_bless: "Tag it. Mark it. Share it.",
    donate_button_web: "Desktop for macOS",
    donate_button_mobile: "Support the Project",
    donate_title_mobile: "Support the Project",
    donate_desc_mobile: "If this tool helped you, you can support this small project by scanning one of the QR codes below.",
    donate_title_web: "Download & Support",
    donate_desc_web: "The desktop download entry and support QR codes are both here.",
    donate_button_desktop: "Support the Project",
    donate_title_desktop: "Support This Tool",
    donate_desc_desktop: "If this tool helped you, you can support the project with a coffee.",
    donate_wechat: "WeChat",
    donate_alipay: "Alipay",
    donate_close: "Close",
    donate_hint_before: "🙇🏻 Thanks for helping this little project grow",
    donate_hint_after: "🙇🏻‍♀️",
    download_inline: "Click to Download",
    style_toggle_aria: "Expand or collapse more styles",
    lang_toggle: "中文",
    donate_wechat_alt: "WeChat donation QR code",
    donate_alipay_alt: "Alipay donation QR code",
    invalid_size: ({ fileName, width, height, expectedW, expectedH }) => `${fileName || "Image"} is ${width}x${height}. Only original ${expectedW}x${expectedH} screenshots are supported right now.`,
    status_waiting: "Waiting for screenshots…",
    status_assets_loading: "Assets are still loading. Please try again in a moment.",
    status_processing: "Generating output, please wait…",
    status_complete: ({ inputCount, dedupedCount, classCount, outputCount }) => [
      "Batch results are ready.",
      `${inputCount} input images, ${dedupedCount} after dedupe, ${classCount} groups, ${outputCount} outputs generated.`
    ],
    status_failed: ({ message }) => `Processing failed:\n${message}`,
    status_loaded: ({ count }) => [
      `${count} screenshots loaded.`,
      "Click “Start Annotating” to begin processing."
    ],
    group_box_head: ({ index, count }) => `Group ${index} · ${count} items`,
  }
};

const DONATE_CONFIG = {
  wechatQr: "./wechat-pay.png",
  alipayQr: "./alipay-pay.png",
};

function createDonatePlaceholder(label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320"><rect width="320" height="320" rx="28" fill="#FFFDF8"/><rect x="28" y="28" width="264" height="264" rx="20" fill="#F3EEE1" stroke="#D7D3BA" stroke-width="2"/><text x="160" y="145" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#4B4A3F">${label}</text><text x="160" y="180" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#7F7A63">Replace this QR in script.js</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getMessage(key, data = {}) {
  const pack = I18N[state.lang] || I18N.zh;
  const value = pack[key];
  if (typeof value === "function") return value(data);
  return value != null ? value : key;
}

function setStatus(lines) {
  els.status.textContent = Array.isArray(lines) ? lines.join("\n") : String(lines);
}

function setStatusMessage(key, data = null) {
  state.statusKey = key;
  state.statusData = data;
  setStatus(getMessage(key, data || {}));
}

function rerenderStatus() {
  setStatus(getMessage(state.statusKey, state.statusData || {}));
}

function syncUploadPrompt() {
  const uploadPrompt = document.querySelector('[data-i18n="upload_prompt"]');
  if (!uploadPrompt) return;
  const baseKey = state.uploadPromptKey || "upload_prompt";
  const mobileKey = `${baseKey}_mobile`;
  const resolvedKey = runtime.isMobile && I18N[state.lang]?.[mobileKey] ? mobileKey : baseKey;
  uploadPrompt.textContent = getMessage(resolvedKey);
}

function syncDonateAssets() {
  if (els.wechatQr) {
    els.wechatQr.src = DONATE_CONFIG.wechatQr || createDonatePlaceholder(getMessage("donate_wechat"));
    els.wechatQr.alt = getMessage("donate_wechat_alt");
  }
  if (els.alipayQr) {
    els.alipayQr.src = DONATE_CONFIG.alipayQr || createDonatePlaceholder(getMessage("donate_alipay"));
    els.alipayQr.alt = getMessage("donate_alipay_alt");
  }
}

function getDonateMessageKey(baseKey) {
  if (!runtime.isElectron && runtime.isMobile && ["donate_button", "donate_title", "donate_desc"].includes(baseKey)) {
    return `${baseKey}_mobile`;
  }
  return runtime.isElectron ? `${baseKey}_desktop` : `${baseKey}_web`;
}

function syncDonateUI() {
  if (els.donateBtn) {
    els.donateBtn.textContent = getMessage(getDonateMessageKey("donate_button"));
  }

  const donateTitle = document.querySelector('[data-i18n="donate_title"]');
  if (donateTitle) {
    donateTitle.textContent = getMessage(getDonateMessageKey("donate_title"));
  }

  const donateDesc = document.querySelector('[data-i18n="donate_desc"]');
  if (donateDesc) {
    donateDesc.textContent = getMessage(getDonateMessageKey("donate_desc"));
  }

  if (els.donateDownloadLink) {
    els.donateDownloadLink.hidden = runtime.isElectron || runtime.isMobile;
  }

  if (els.donateHint) {
    els.donateHint.classList.toggle("donateHintDesktop", runtime.isElectron);
  }

  if (els.closeDonateBtn) {
    els.closeDonateBtn.setAttribute("aria-label", getMessage("donate_close"));
    els.closeDonateBtn.setAttribute("title", getMessage("donate_close"));
  }

  if (els.mobileResetBtn) {
    els.mobileResetBtn.setAttribute("aria-label", getMessage("reset_button"));
    els.mobileResetBtn.setAttribute("title", getMessage("reset_button"));
  }
}

function setMobileResultMode(active) {
  if (!runtime.isMobile || !els.dropzone) return;
  els.dropzone.classList.toggle("mobileResultHidden", !!active);
  document.body.classList.toggle("mobileResultMode", !!active);
}

function setHasGeneratedResults(active) {
  document.body.classList.toggle("hasGeneratedResults", !!active);
  syncMobileGeneratedLayout(!!active);
}

function restoreNodePosition(slot) {
  if (!slot?.el || !slot.parent) return;
  if (slot.next && slot.next.parentNode === slot.parent) {
    slot.parent.insertBefore(slot.el, slot.next);
  } else {
    slot.parent.appendChild(slot.el);
  }
}

function syncMobileGeneratedLayout(active) {
  const stylePanel = mobileLayoutSlots.stylePanel.el;
  const clockPanel = mobileLayoutSlots.clockPanel.el;
  if (!stylePanel || !clockPanel) return;

  if (!runtime.isMobile || !active) {
    restoreNodePosition(mobileLayoutSlots.stylePanel);
    restoreNodePosition(mobileLayoutSlots.clockPanel);
    return;
  }

  const previewCard = els.outputGallery?.parentNode;
  const leftCard = mobileLayoutSlots.stylePanel.parent;
  const creditBlock = document.querySelector(".creditInline");
  if (!previewCard || !leftCard) return;

  previewCard.insertBefore(stylePanel, clockPanel);
  if (creditBlock && creditBlock.parentNode === leftCard) {
    leftCard.insertBefore(clockPanel, creditBlock);
  } else {
    leftCard.appendChild(clockPanel);
  }
}

function scrollToResults() {
  if (!runtime.isMobile) return;
  const target = document.querySelector(".previewWrap") || els.outputGallery;
  if (!target) return;
  requestAnimationFrame(() => {
    try {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (_) {}
  });
}

function applyLanguage() {
  document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
  document.title = getMessage("page_title");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = getMessage(el.dataset.i18n);
  });
  syncUploadPrompt();
  if (els.langToggle) els.langToggle.textContent = getMessage("lang_toggle");
  const styleToggle = document.getElementById("styleToggle");
  if (styleToggle) styleToggle.setAttribute("aria-label", getMessage("style_toggle_aria"));
  document.querySelectorAll(".groupBoxHead[data-group-index]").forEach(el => {
    const index = Number(el.dataset.groupIndex || 0);
    const count = Number(el.dataset.groupCount || 0);
    el.textContent = getMessage("group_box_head", { index, count });
  });
  rerenderStatus();
  updateClockUI();
  syncDonateAssets();
  syncDonateUI();
}

function toggleLanguage() {
  state.lang = state.lang === "zh" ? "en" : "zh";
  localStorage.setItem("ac_tool_lang", state.lang);
  applyLanguage();
}

function openDonateModal() {
  if (!els.donateModal) return;
  els.donateModal.classList.remove("hidden");
  els.donateModal.setAttribute("aria-hidden", "false");
}

function closeDonateModal() {
  if (!els.donateModal) return;
  els.donateModal.classList.add("hidden");
  els.donateModal.setAttribute("aria-hidden", "true");
}

function openQrPreview(src, alt = "") {
  if (!els.qrPreviewModal || !els.qrPreviewImage || !src) return;
  els.qrPreviewImage.src = src;
  els.qrPreviewImage.alt = alt;
  els.qrPreviewModal.classList.remove("hidden");
  els.qrPreviewModal.setAttribute("aria-hidden", "false");
}

function closeQrPreview() {
  if (!els.qrPreviewModal || !els.qrPreviewImage) return;
  els.qrPreviewModal.classList.add("hidden");
  els.qrPreviewModal.setAttribute("aria-hidden", "true");
  els.qrPreviewImage.removeAttribute("src");
}

function showPreviewLoading(){
  state.previewToken += 1;
  const el = document.getElementById("previewLoading");
  const snap = document.getElementById("previewLoadingSnapshot");
  const frame = document.getElementById("previewLoadingFrame");
  if (snap && els && els.canvas) {
    try {
      snap.src = els.canvas.toDataURL("image/png");
      const rect = els.canvas.getBoundingClientRect();
      if (frame) {
        frame.style.width = rect.width + "px";
        frame.style.height = rect.height + "px";
      }
    } catch (_) {
      snap.removeAttribute("src");
    }
  }
  if (el) el.classList.add("show");
  if (els && els.outputGallery) els.outputGallery.classList.add("loading");
}
function hidePreviewLoading(){
  const el = document.getElementById("previewLoading");
  const snap = document.getElementById("previewLoadingSnapshot");
  const frame = document.getElementById("previewLoadingFrame");
  if (el) el.classList.remove("show");
  if (snap) snap.removeAttribute("src");
  if (frame) {
    frame.style.width = "";
    frame.style.height = "";
  }
  if (els && els.outputGallery) els.outputGallery.classList.remove("loading");
}

function paintActionButton(btn, active) {
  if (!btn) return;
  const icon = btn.querySelector(".btnIcon");
  btn.style.background = active ? "#33B4A7" : "#F0ECE2";
  btn.style.color = active ? "#FFFFFF" : "#7A7568";
  btn.style.boxShadow = active ? "0 8px 18px rgba(51,180,167,.24)" : "none";
  btn.style.borderColor = active ? "transparent" : "";
  if (icon) {
    icon.style.background = active ? "rgba(255,255,255,.22)" : "rgba(87,83,71,.08)";
    icon.style.color = active ? "#FFFFFF" : "inherit";
  }
}

function getActiveOutputItem() {
  const item = state.outputs[state.activeOutputIndex];
  return item || state.outputs[0] || null;
}

async function downloadOutputsForMobile() {
  if (!state.outputs.length) return false;

  const files = state.outputs.map(item => new File([item.blob], item.name || "switch-design-merged.png", {
    type: item.blob.type || "image/png",
  }));

  // Prefer sharing all generated images at once on mobile.
  if (files.length > 1 && navigator.share && navigator.canShare && navigator.canShare({ files })) {
    await navigator.share({
      files,
      title: "Crying Apple",
    });
    return true;
  }

  const item = getActiveOutputItem();
  if (!item || !item.blob) return false;

  const file = new File([item.blob], item.name || "switch-design-merged.png", {
    type: item.blob.type || "image/png",
  });

  // On mobile, prefer the native share/save sheet so users can save to Photos.
  if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({
      files: [file],
      title: item.name || "Crying Apple",
    });
    return true;
  }

  const a = document.createElement("a");
  a.href = item.blobUrl || URL.createObjectURL(item.blob);
  a.download = item.name || "switch-design-merged.png";
  a.target = "_blank";
  a.rel = "noopener";
  a.click();
  return true;
}

function setActionButtonsIdle() {
  paintActionButton(els.processBtn, false);
  paintActionButton(els.downloadBtn, false);
  paintActionButton(els.clearBtn, false);
  paintActionButton(els.mobileDownloadBtn, false);
  if (els.mobileDownloadBtn) els.mobileDownloadBtn.disabled = true;
}

function setActionButtonsUploaded() {
  paintActionButton(els.processBtn, true);
  paintActionButton(els.downloadBtn, false);
  paintActionButton(els.clearBtn, false);
  paintActionButton(els.mobileDownloadBtn, false);
  if (els.mobileDownloadBtn) els.mobileDownloadBtn.disabled = true;
}

function setActionButtonsDownloadedReset() {
  paintActionButton(els.processBtn, false);
  paintActionButton(els.downloadBtn, false);
  paintActionButton(els.clearBtn, false);
  paintActionButton(els.mobileDownloadBtn, false);
  els.downloadBtn.disabled = true;
  if (els.mobileDownloadBtn) els.mobileDownloadBtn.disabled = true;
}

function setActionButtonsDone() {
  paintActionButton(els.processBtn, false);
  paintActionButton(els.downloadBtn, true);
  paintActionButton(els.clearBtn, false);
  paintActionButton(els.mobileDownloadBtn, true);
  if (els.mobileDownloadBtn) els.mobileDownloadBtn.disabled = false;
}

function captureScrollY(){
  return window.scrollY || window.pageYOffset || 0;
}
function restoreScrollY(y){
  try { window.scrollTo(0, y); } catch (_) {}
  requestAnimationFrame(() => {
    try { window.scrollTo(0, y); } catch (_) {}
  });
  setTimeout(() => {
    try { window.scrollTo(0, y); } catch (_) {}
  }, 60);
}

const highlightImg = new Image();
const badgeImg = new Image();
highlightImg.src = EMBEDDED.highlightSrc;
badgeImg.src = EMBEDDED.badgeSrc;

const PRESET_HIGHLIGHTS = [
  EMBEDDED.highlightSrc,
  'data:image/png;base64,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',
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABMCAYAAADDYoEWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAA/dJREFUeAHtnOFR3DAQhdce/h9UgKgAUkGOElJB6ICkgtBBSAekgkw6gAoCFbBXAXcVXLRn2chGT7IuAe6s/WZkibVsRm9WWknnUUU7wnq9NjY7dMkvz7yyn2KMqTNk6RK7/M6m26qq7kOVK3pFPDH8fOaVW3tuI98SEe6TFZB9Y7ZwVoxhoyXfNzG24cKK97P9AwpnBTqz2dymY2rEkL+nKMhYpPt+aD2vJ5zrWpc2XVC5AsX4YYX7IoVOOCfaH1LBYrAV7kQKB57xG72vaOzlbXlBz9FumGIsbQNTdXq4sbsdp2VY+h6oZqSevLtyD/yiZjz737CXS1rRc7hvbTSMWLuA1eWRGhGHyDh3Lx4nys5pPP58R9LeiJGJTENMwC7euBHuIvLwLTUTQXYv4twusMcsgN3I5SDy4MkEvOZfYGDfxIE6UqF0UM+Syf5GOFSh9GkJA7uRS0w4Q2XDwG7kIsKhQVAnwmG6MU67aoBIYEwKZ0gJaiPL01hUnZEC56wxjzsihYE96nHHpMDVgwaHLdHgEIeB3dRu0Y6ih3pdmMPaFbS7hmFgn6WEM6QEaYVjcN+QEqQVbkVKCAZ2ox63JakxTifBgJRwuuwCpLqqehwgJVzp8zjU/pXO4+Ig4Z42wumyK5/aK+uy6yUG2Fe+cJz5cMksfeGiP/kXCuptyzFd1VC5jBKOMx8uATSPZfW4LfGFuwd1Sl49GGBXj0sAx7jhV+drUPGooA8KO5AeVouqHtiYwhQXINxX+CFYLkPhkFedUXnAbiqXoXAPmS+ZMlnCMaisHjdgrHAlfrmEhGO5qMdtyVjhDJUH3P2VS0849/lmKLIeFrihmRUcuhsBDCkdIeHQmlXHOY+QcGhDU4XzyPE4Q2VhgB2OcUi4U1IEKByDBwwpHS+ES/zGakjZUAM76q5zKgf4e4NckHBol0QjqyPX4wyVQ9buSItG1sTuSBBZl64xRaxZU+0PepyLrAzeOaeJE5k9dAfB1JHn74B9TtPHADu3hZhwJY9zn4G9W8fHjkEzNnsEtyfxO6tro0yxJD+l/nFvIb7adl9LoUq8+Am8RI5APKcdxjtkqhXCUDOp9f/O5SR4flzgn4u6l+A223T+1qfheIL4ohzT65+Y2HOWlHCGcHftXmjTb3JnLxE4ggxEqqHNb7Dc26UjJHtHJlWp2rbBV9ScLVcq4gQytt34xqRwghXvhnCkmSIilvQgmZJdh3rQKOGEiYrH9CzSgyvfjhm3RwsnuG4rwWIfll3tviK7tKC+UNnHQfpkCSe4Qf7Kpo/0frslTP1TohcD26sfEJgtnI8VcU7NlEBEbKMfinw8wubvPg8PFpW6y105DPAvzrh+na2/u30AAAAASUVORK5CYII=',
];
const PRESET_BADGES = [
  EMBEDDED.badgeSrc,
  'data:image/png;base64,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',
  'data:image/png;base64,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',
];
const DISPLAY_BADGES = [PRESET_BADGES[0], PRESET_BADGES[2], PRESET_BADGES[1]];
const PRESET_TEXT_COLORS = ["#FFFFFF", "#000000", "#EB9F25"];

function revokeBlobUrl() {
  if (state.renderedBlobUrl) {
    URL.revokeObjectURL(state.renderedBlobUrl);
    state.renderedBlobUrl = null;
  }
  clearObjectUrlList(state.outputs);
  clearObjectUrlList(state.groupedClasses.flat ? state.groupedClasses.flat() : []);
  state.outputs = [];
  state.groupedClasses = [];
  els.outputGallery.innerHTML = "";
  els.classifiedGroups.innerHTML = "";
}

function resetCanvas() {
  ctx.fillStyle = CONFIG.output.bg;
  ctx.fillRect(0, 0, CONFIG.output.w, CONFIG.output.h);
}

function getStackHeight(croppedList) {
  return croppedList.reduce((sum, canvas) => sum + canvas.height, 0);
}

function sortFiles(files) {
  return [...files]
    .filter(f => f.type && f.type.startsWith("image/"))
    .slice(0, 100)
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }));
}

async function loadImages(files) {
  const bitmaps = [];
  for (const file of files) {
    const bitmap = await createImageBitmap(file);
    bitmaps.push(bitmap);
  }
  return bitmaps;
}

function renderThumbs() {
  if (!els.thumbs) return;
  if (els.thumbs) els.thumbs.innerHTML = "";
}

function clearObjectUrlList(list) {
  (list || []).forEach(item => {
    if (item && item.previewUrl) {
      try { URL.revokeObjectURL(item.previewUrl); } catch (_) {}
    }
    if (item && item.blobUrl) {
      try { URL.revokeObjectURL(item.blobUrl); } catch (_) {}
    }
  });
}

function revokeCustomStyleUrl(type) {
  if (!type || !state.custom || !state.custom[type]) return;
  try { URL.revokeObjectURL(state.custom[type]); } catch (_) {}
  state.custom[type] = null;
}

function renderClassifiedGroups() {
  els.classifiedGroups.innerHTML = "";
  if (!state.groupedClasses.length) return;
  state.groupedClasses.forEach((group, idx) => {
    const box = document.createElement("div");
    box.className = "groupBox";
    const head = document.createElement("div");
    head.className = "groupBoxHead";
    head.dataset.groupIndex = String(idx + 1);
    head.dataset.groupCount = String(group.length);
    head.textContent = getMessage("group_box_head", { index: idx + 1, count: group.length });
    box.appendChild(head);

    const row = document.createElement("div");
    row.className = "groupThumbRow";
    group.forEach((entry, i) => {
      const mini = document.createElement("div");
      mini.className = "groupThumbMini";
      const img = document.createElement("img");
      const url = URL.createObjectURL(entry.file);
      entry.previewUrl = url;
      img.src = url;
      const meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = `#${i + 1}`;
      mini.appendChild(img);
      mini.appendChild(meta);
      row.appendChild(mini);
    });
    box.appendChild(row);
    els.classifiedGroups.appendChild(box);
  });
}

function drawBlobPreview(blobUrl) {
  const myPreviewToken = state.previewToken;
  const img = new Image();
  img.onload = () => {
    if (myPreviewToken !== state.previewToken) return;

    const scale = Math.min(CONFIG.output.w / img.width, CONFIG.output.h / img.height);
    const dw = Math.round(img.width * scale);
    const dh = Math.round(img.height * scale);
    const dx = Math.round((CONFIG.output.w - dw) / 2);
    const dy = Math.round((CONFIG.output.h - dh) / 2);

    const off = document.createElement("canvas");
    off.width = CONFIG.output.w;
    off.height = CONFIG.output.h;
    const octx = off.getContext("2d");
    octx.fillStyle = CONFIG.output.bg;
    octx.fillRect(0, 0, CONFIG.output.w, CONFIG.output.h);
    octx.drawImage(img, dx, dy, dw, dh);

    if (myPreviewToken !== state.previewToken) return;
    ctx.clearRect(0, 0, CONFIG.output.w, CONFIG.output.h);
    ctx.drawImage(off, 0, 0);
    hidePreviewLoading();
  };
  img.onerror = () => {
    if (myPreviewToken !== state.previewToken) return;
    hidePreviewLoading();
  };
  img.src = blobUrl;
}

function setActiveOutput(index) {
  if (state.activeOutputIndex === index) return;
  state.activeOutputIndex = index;
  state.previewToken += 1;
  [...els.outputGallery.children].forEach((node, i) => {
    node.classList.toggle("active", i === index);
  });
  const item = state.outputs[index];
  if (item && item.blobUrl) drawBlobPreview(item.blobUrl);
}

function renderOutputGallery() {
  const cards = [...els.outputGallery.children];
  if (!state.outputs.length) {
    els.outputGallery.innerHTML = "";
    return;
  }

  // If count differs, rebuild once. Otherwise patch in place to avoid flicker.
  if (cards.length !== state.outputs.length) {
    els.outputGallery.innerHTML = "";
    state.outputs.forEach((item, idx) => {
      const card = document.createElement("div");
      card.className = "outputCard" + (idx === state.activeOutputIndex ? " active" : "");
      const img = document.createElement("img");
      img.src = item.blobUrl;
      const meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = item.name;
      card.appendChild(img);
      card.appendChild(meta);
      card.addEventListener("click", () => setActiveOutput(idx));
      els.outputGallery.appendChild(card);
    });
    return;
  }

  cards.forEach((card, idx) => {
    const item = state.outputs[idx];
    let img = card.querySelector("img");
    let meta = card.querySelector(".meta");
    if (!img) {
      img = document.createElement("img");
      card.prepend(img);
    }
    if (!meta) {
      meta = document.createElement("div");
      meta.className = "meta";
      card.appendChild(meta);
    }
    if (img.src !== item.blobUrl) img.src = item.blobUrl;
    if (meta.textContent !== item.name) meta.textContent = item.name;
    card.classList.toggle("active", idx === state.activeOutputIndex);
    card.onclick = () => setActiveOutput(idx);
  });
}

function connectedComponents(mask, width, height) {
  const visited = new Uint8Array(mask.length);
  const comps = [];
  const stack = new Int32Array(mask.length);
  const neighbors = [[1,0],[-1,0],[0,1],[0,-1]];

  for (let i = 0; i < mask.length; i++) {
    if (!mask[i] || visited[i]) continue;
    let top = 0;
    stack[top++] = i;
    visited[i] = 1;

    let minX = width, minY = height, maxX = 0, maxY = 0, area = 0;
    let sumX = 0, sumY = 0;

    while (top > 0) {
      const idx = stack[--top];
      const y = Math.floor(idx / width);
      const x = idx - y * width;
      area++;
      sumX += x;
      sumY += y;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;

      for (const [dx, dy] of neighbors) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
        const nidx = ny * width + nx;
        if (!mask[nidx] || visited[nidx]) continue;
        visited[nidx] = 1;
        stack[top++] = nidx;
      }
    }
    comps.push({
      area,
      minX, minY, maxX, maxY,
      width: maxX - minX + 1,
      height: maxY - minY + 1,
      cx: sumX / area,
      cy: sumY / area,
    });
  }
  return comps;
}

function getImageDataFromCanvas(sourceCanvas) {
  const ictx = sourceCanvas.getContext("2d");
  return ictx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);
}

function makeCropCanvas(bitmap, mode = "top") {
  const c = document.createElement("canvas");
  c.width = CONFIG.cropW;

  let cfg = CONFIG.cropTop;
  let targetHeight = CONFIG.cropTopH;

  if (mode === "bottom") {
    cfg = CONFIG.cropBottom;
    targetHeight = CONFIG.cropBottomH;
  } else if (mode === "fiveBottom") {
    cfg = CONFIG.cropBottom;
    targetHeight = CONFIG.cropFiveBottomH;
  }

  c.height = targetHeight;
  const cctx = c.getContext("2d");
  const sx = cfg.left;
  const sw = bitmap.width - cfg.left - cfg.right;

  if (mode === "fiveBottom") {
    const cropWidth = Math.min(CONFIG.cropW, sw);
    const cropHeight = Math.min(CONFIG.cropFiveBottomH, bitmap.height);
    const cropX = Math.max(0, Math.round((bitmap.width - cropWidth) / 2));
    const cropY = 0;
    cctx.drawImage(bitmap, cropX, cropY, cropWidth, cropHeight, 0, 0, c.width, c.height);
    return c;
  }

  const sy = 0;
  const sh = bitmap.height - cfg.bottom;
  cctx.drawImage(bitmap, sx, sy, sw, sh, 0, 0, c.width, c.height);
  return c;
}

function assertValidInputBitmap(bitmap, fileName) {
  const expectedW = CONFIG.inputSize.w;
  const expectedH = CONFIG.inputSize.h;
  if (bitmap.width !== expectedW || bitmap.height !== expectedH) {
    throw new Error(getMessage("invalid_size", {
      fileName,
      width: bitmap.width,
      height: bitmap.height,
      expectedW,
      expectedH,
    }));
  }
}

function detectUnderlineCenter(localCanvas) {
  // 只识别顶部色盘下方的青色短线，返回短线中心 x
  const box = { x1: 250, y1: 28, x2: 900, y2: 92 };
  const temp = document.createElement("canvas");
  temp.width = box.x2 - box.x1;
  temp.height = box.y2 - box.y1;
  const tctx = temp.getContext("2d");
  tctx.drawImage(localCanvas, box.x1, box.y1, temp.width, temp.height, 0, 0, temp.width, temp.height);

  const img = tctx.getImageData(0, 0, temp.width, temp.height);
  const { data, width, height } = img;
  const mask = new Uint8Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      // 更聚焦于青蓝短线，减少背景/圆点干扰
      const isCyan =
        a > 110 &&
        r < 110 &&
        g > 120 &&
        b > 120 &&
        (g - r) > 45 &&
        (b - r) > 45;

      mask[y * width + x] = isCyan ? 1 : 0;
    }
  }

  const comps = connectedComponents(mask, width, height).filter(c =>
    c.area >= 5 &&
    c.area <= 220 &&
    c.width >= 8 &&
    c.width <= 90 &&
    c.height >= 1 &&
    c.height <= 12
  );

  if (!comps.length) return null;

  let best = null;
  let bestScore = -Infinity;
  for (const c of comps) {
    const horiz = c.width / Math.max(1, c.height);
    const sizeScore = -Math.abs(c.width - 24) * 0.6;
    const shapeScore = -Math.abs(horiz - 6.5) * 4.5;
    const yScore = -Math.abs(c.cy - 22) * 0.9;
    const score = sizeScore + shapeScore + yScore;
    if (score > bestScore) {
      bestScore = score;
      best = c;
    }
  }

  if (!best) return null;
  return { x: box.x1 + best.cx, y: box.y1 + best.cy };
}

function detectMarkerX(localCanvas, detectBox) {
  const temp = document.createElement("canvas");
  temp.width = detectBox.x2 - detectBox.x1;
  temp.height = detectBox.y2 - detectBox.y1;
  const tctx = temp.getContext("2d");
  tctx.drawImage(localCanvas, detectBox.x1, detectBox.y1, temp.width, temp.height, 0, 0, temp.width, temp.height);

  const img = tctx.getImageData(0, 0, temp.width, temp.height);
  const { data, width, height } = img;

  const upperH = Math.max(10, Math.floor(height * 0.62));
  const mask = new Uint8Array(width * upperH);

  for (let y = 0; y < upperH; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      const isDark = a > 180 && r < 150 && g < 125 && b < 115;
      mask[y * width + x] = isDark ? 1 : 0;
    }
  }

  const comps = connectedComponents(mask, width, upperH).filter(c =>
    c.area >= 12 &&
    c.area <= 260 &&
    c.width >= 4 &&
    c.width <= 26 &&
    c.height >= 6 &&
    c.height <= 26
  );

  if (!comps.length) return null;

  let best = null;
  let bestScore = -Infinity;
  for (const c of comps) {
    const slender = c.height / Math.max(1, c.width);
    const areaScore = -Math.abs(c.area - 55) * 0.6;
    const yScore = -c.cy * 1.2;
    const shapeScore = -Math.abs(slender - 1.1) * 18;
    const score = areaScore + yScore + shapeScore;
    if (score > bestScore) {
      bestScore = score;
      best = c;
    }
  }
  if (!best) return null;

  let topY = null;
  for (let y = best.minY; y <= best.maxY; y++) {
    let found = false;
    for (let x = best.minX; x <= best.maxX; x++) {
      if (mask[y * width + x]) {
        topY = y;
        found = true;
        break;
      }
    }
    if (found) break;
  }

  if (topY == null) {
    return detectBox.x1 + best.cx;
  }

  let minTopX = Infinity;
  let maxTopX = -Infinity;
  for (let x = best.minX; x <= best.maxX; x++) {
    if (mask[topY * width + x]) {
      if (x < minTopX) minTopX = x;
      if (x > maxTopX) maxTopX = x;
    }
  }

  if (minTopX === Infinity || maxTopX === -Infinity) {
    return detectBox.x1 + best.cx;
  }

  const anchorX = (minTopX + maxTopX) / 2;
  return detectBox.x1 + anchorX;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function stepFromRange(x, start, end, steps) {
  const ratio = clamp((x - start) / (end - start), 0, 1);
  return Math.round(ratio * (steps - 1)) + 1;
}

function detectHueMarkerX(localCanvas, detectBox) {
  const temp = document.createElement("canvas");
  temp.width = detectBox.x2 - detectBox.x1;
  temp.height = detectBox.y2 - detectBox.y1;
  const tctx = temp.getContext("2d");
  tctx.drawImage(localCanvas, detectBox.x1, detectBox.y1, temp.width, temp.height, 0, 0, temp.width, temp.height);

  const img = tctx.getImageData(0, 0, temp.width, temp.height);
  const { data, width, height } = img;

  const mask = new Uint8Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      const isMarker =
        a > 180 &&
        r < 175 &&
        g < 150 &&
        b < 140;

      mask[y * width + x] = isMarker ? 1 : 0;
    }
  }

  const comps = connectedComponents(mask, width, height).filter(c =>
    c.area >= 4 &&
    c.area <= 180 &&
    c.width >= 2 &&
    c.width <= 18 &&
    c.height >= 2 &&
    c.height <= 18
  );

  if (!comps.length) return null;

  let best = null;
  let bestScore = -Infinity;

  for (const c of comps) {
    const slender = c.height / Math.max(1, c.width);
    const areaScore = -Math.abs(c.area - 55) * 0.5;
    const yScore = -Math.abs(c.cy - height * 0.45) * 0.8;
    const shapeScore = -Math.abs(slender - 1.0) * 14;
    const score = areaScore + yScore + shapeScore;

    if (score > bestScore) {
      bestScore = score;
      best = c;
    }
  }

  if (!best) return null;

  let topY = null;
  for (let y = best.minY; y <= best.maxY; y++) {
    let found = false;
    for (let x = best.minX; x <= best.maxX; x++) {
      if (mask[y * width + x]) {
        topY = y;
        found = true;
        break;
      }
    }
    if (found) break;
  }

  if (topY == null) {
    return detectBox.x1 + best.cx;
  }

  let minTopX = Infinity;
  let maxTopX = -Infinity;
  for (let x = best.minX; x <= best.maxX; x++) {
    if (mask[topY * width + x]) {
      if (x < minTopX) minTopX = x;
      if (x > maxTopX) maxTopX = x;
    }
  }

  if (minTopX === Infinity || maxTopX === -Infinity) {
    return detectBox.x1 + best.cx;
  }

  const anchorX = (minTopX + maxTopX) / 2;
  return detectBox.x1 + anchorX;
}

function hueValueFromX(x, drawX) {
  const grid = CONFIG.hueGrid;

  // 先转成最终 1224 画布坐标，再吸附到最近的色调格心
  const absX = drawX + x;

  let bestIdx = 1;
  let bestDist = Infinity;

  for (let i = 0; i < grid.count; i++) {
    const cx = grid.firstLeftX + i * grid.cellWidth + grid.cellWidth / 2;
    const dist = Math.abs(absX - cx);
    if (dist < bestDist) {
      bestDist = dist;
      bestIdx = i + 1; // 1..30
    }
  }

  // 分段规则：6 / 9 / 8 / 7
  if (bestIdx <= 6) {
    return { value: bestIdx, side: "left", idx: bestIdx, showDots: false, snappedX: grid.firstLeftX + (bestIdx - 1) * grid.cellWidth + grid.cellWidth / 2 };
  }
  if (bestIdx <= 15) {
    return { value: bestIdx - 6, side: "left", idx: bestIdx, showDots: true, snappedX: grid.firstLeftX + (bestIdx - 1) * grid.cellWidth + grid.cellWidth / 2 };
  }
  if (bestIdx <= 23) {
    return { value: bestIdx - 15, side: "left", idx: bestIdx, showDots: true, snappedX: grid.firstLeftX + (bestIdx - 1) * grid.cellWidth + grid.cellWidth / 2 };
  }

  // 最后一段 24..30：右侧，从右往左 7..1
  return { value: 31 - bestIdx, side: "right", idx: bestIdx, showDots: false, snappedX: grid.firstLeftX + (bestIdx - 1) * grid.cellWidth + grid.cellWidth / 2 };
}

function lrValueFromX(x, key, drawX) {
  const grid = CONFIG.lrGrid;

  // 把局部截图坐标换成最终 1224 画布坐标后，再吸附到最近格子中心
  const absX = drawX + x;

  let bestIdx = 1;
  let bestDist = Infinity;
  for (let i = 0; i < grid.count; i++) {
    const cx = grid.firstCenterX + i * grid.step;
    const dist = Math.abs(absX - cx);
    if (dist < bestDist) {
      bestDist = dist;
      bestIdx = i + 1; // 1..15
    }
  }

  // 显示规则：
  // 左侧 1..7
  // 第 8 格为中轴，归右侧并显示 7
  // 第 9..15 格从右往左显示 7..1
  if (bestIdx <= 7) {
    return { value: bestIdx, side: "left", idx: bestIdx, snappedX: grid.firstCenterX + (bestIdx - 1) * grid.step };
  }
  if (bestIdx === 8) {
    return { value: 7, side: "right", idx: bestIdx, snappedX: grid.firstCenterX + (bestIdx - 1) * grid.step };
  }

  const value = 16 - bestIdx; // 9->7 ... 15->1
  return { value, side: "right", idx: bestIdx, snappedX: grid.firstCenterX + (bestIdx - 1) * grid.step };
}

function drawBadgeNumber(targetCtx, value, pos) {
  const size = CONFIG.badge.size;
  targetCtx.drawImage(badgeImg, pos.x, pos.y, size, size);
  targetCtx.save();
  targetCtx.fillStyle = state.style?.text || CONFIG.badge.color;
  targetCtx.font = `500 ${CONFIG.badge.fontSize}px "${CONFIG.badge.fontFamily}"`;
  targetCtx.textAlign = "center";
  targetCtx.textBaseline = "middle";
  targetCtx.fillText(String(value), pos.x + size / 2, pos.y + size / 2 - 1);
  targetCtx.restore();
}

function drawHueDot(targetCtx, x, yBase) {
  targetCtx.save();
  targetCtx.fillStyle = CONFIG.hueDot.color;
  targetCtx.beginPath();
  targetCtx.arc(x, yBase + CONFIG.hueDot.y, CONFIG.hueDot.radius, 0, Math.PI * 2);
  targetCtx.fill();
  targetCtx.restore();
}

function drawHueDotsRange(targetCtx, yBase, startIdx, count) {
  const grid = CONFIG.hueGrid;
  for (let i = 0; i < count; i++) {
    const idx = startIdx + i; // whole 30-cell strip index, 1-based
    const x = grid.firstLeftX + (idx - 1) * grid.cellWidth + grid.cellWidth / 2;
    drawHueDot(targetCtx, Math.round(x), yBase);
  }
}

function detectHueHighlightCenter(localCanvas) {
  // v1.25:
  // highlight 改为“固定 x + 固定圆心 y”为主，
  // 短线检测只作为可选微调，不再决定是否绘制。
  const fixed = { x: drawX + (highlightCenter && highlightCenter.x != null ? highlightCenter.x + 2 : (CONFIG.localUI && CONFIG.localUI.paletteCenterX != null ? CONFIG.localUI.paletteCenterX + 2 : 322)), y: CONFIG.highlightCircleY };

  const box = { x1: 260, y1: 18, x2: 780, y2: 95 };
  const temp = document.createElement("canvas");
  temp.width = box.x2 - box.x1;
  temp.height = box.y2 - box.y1;
  const tctx = temp.getContext("2d");
  tctx.drawImage(localCanvas, box.x1, box.y1, temp.width, temp.height, 0, 0, temp.width, temp.height);

  const img = tctx.getImageData(0, 0, temp.width, temp.height);
  const { data, width, height } = img;
  const mask = new Uint8Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      const isCyan =
        a > 120 &&
        g > 95 &&
        b > 90 &&
        r < 145 &&
        (g + b - r) > 150;

      mask[y * width + x] = isCyan ? 1 : 0;
    }
  }

  const comps = connectedComponents(mask, width, height).filter(c =>
    c.area >= 4 &&
    c.area <= 800 &&
    c.width >= 4 &&
    c.width <= 160 &&
    c.height >= 1 &&
    c.height <= 20
  );

  if (!comps.length) return fixed;

  let best = null;
  let bestScore = -Infinity;
  for (const c of comps) {
    const horizScore = c.width * 2.3 - c.height * 3.5;
    const yScore = -Math.abs(c.cy - 40) * 0.9;
    const areaScore = -Math.abs(c.area - 26) * 0.05;
    const score = horizScore + yScore + areaScore;
    if (score > bestScore) {
      bestScore = score;
      best = c;
    }
  }

  if (!best) return fixed;

  // 用短线 y 的中心做轻微修正，但限制在合理范围，避免飘走
  const refinedY = Math.max(30, Math.min(44, box.y1 + best.cy - 6));
  return { x: fixed.x, y: refinedY };
}

function drawHighlight(targetCtx, center) {
  const size = CONFIG.highlight.size;
  const selected = state.style ? state.style.highlight : 0;
  const offsetX = selected === 0 ? 2 : 0;
  const offsetY = selected === 1 ? -5 : 0;
  targetCtx.drawImage(
    highlightImg,
    center.x - size / 2 + offsetX,
    center.y - size / 2 + offsetY,
    size,
    size
  );
}

function renderOutput(croppedList) {
  resetCanvas();
  const logs = [];

  const stackHeight = getStackHeight(croppedList);
  // 所有输出都与 4 张图时的顶部对齐，不再按当前总高度做垂直居中
  // 1 张、2 张、5 张以及所有分组都统一使用 4 张图版本的顶部基准。
  let currentY = CONFIG.output.topAnchorY;
  for (let i = 0; i < croppedList.length; i++) {
    const localCanvas = croppedList[i];
    const drawX = CONFIG.output.offsetX;
    const drawY = currentY;
    ctx.drawImage(localCanvas, drawX, drawY);

    const highlightCenter = detectUnderlineCenter(localCanvas);
    drawHighlight(ctx, {
      x: drawX + (highlightCenter && highlightCenter.x != null ? highlightCenter.x : 322),
      y: drawY + CONFIG.highlightCircleY,
    });
    if (!highlightCenter) {
      logs.push(`第 ${i + 1} 张：highlight 未识别到短线，已使用固定 y 与兜底 x。`);
    }

    const hueX = detectMarkerX(localCanvas, CONFIG.localUI.bars.hue.detect);
    const vividX = detectMarkerX(localCanvas, CONFIG.localUI.bars.vivid.detect);
    const brightX = detectMarkerX(localCanvas, CONFIG.localUI.bars.bright.detect);

    if (hueX != null) {
      const result = hueValueFromX(hueX, drawX);
      const pos = result.side === "left"
        ? CONFIG.localUI.bars.hue.badgeLeft
        : CONFIG.localUI.bars.hue.badgeRight;
      drawBadgeNumber(ctx, result.value, { x: pos.x, y: drawY + pos.y });
      if (result.showDots) {
        const startIdx = result.idx <= 15 ? 7 : 16;
        drawHueDotsRange(ctx, drawY, startIdx, result.value);
      }
    } else {
      logs.push(`第 ${i + 1} 张：未识别到色调指针。`);
    }

    if (vividX != null) {
      const result = lrValueFromX(vividX, "vivid", drawX);
      const pos = result.side === "left"
        ? CONFIG.localUI.bars.vivid.badgeLeft
        : CONFIG.localUI.bars.vivid.badgeRight;
      drawBadgeNumber(ctx, result.value, { x: pos.x, y: drawY + pos.y });
    } else {
      logs.push(`第 ${i + 1} 张：未识别到鲜艳度指针。`);
    }

    if (brightX != null) {
      const result = lrValueFromX(brightX, "bright", drawX);
      const pos = result.side === "left"
        ? CONFIG.localUI.bars.bright.badgeLeft
        : CONFIG.localUI.bars.bright.badgeRight;
      drawBadgeNumber(ctx, result.value, { x: pos.x, y: drawY + pos.y });
    } else {
      logs.push(`第 ${i + 1} 张：未识别到亮度指针。`);
    }

    currentY += localCanvas.height;
  }

  return logs;
}

function fnv1a32FromImageData(imgData, x, y, w, h) {
  const data = imgData.data;
  const stride = imgData.width * 4;
  let hash = 0x811c9dc5;
  for (let yy = y; yy < y + h; yy++) {
    let idx = yy * stride + x * 4;
    const end = idx + w * 4;
    for (; idx < end; idx++) {
      hash ^= data[idx];
      hash = Math.imul(hash, 0x01000193) >>> 0;
    }
  }
  return hash.toString(16).padStart(8, "0");
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function todayStamp() {
  const d = new Date();
  return `${pad2(d.getMonth() + 1)}${pad2(d.getDate())}`;
}

async function buildStoreZip(files) {
  const te = new TextEncoder();
  const parts = [];
  const central = [];
  let offset = 0;

  function crc32(bytes) {
    let crc = ~0;
    for (let i = 0; i < bytes.length; i++) {
      crc ^= bytes[i];
      for (let j = 0; j < 8; j++) crc = (crc >>> 1) ^ (0xEDB88320 & -(crc & 1));
    }
    return (~crc) >>> 0;
  }

  function u16(v) { const a = new Uint8Array(2); new DataView(a.buffer).setUint16(0, v, true); return a; }
  function u32(v) { const a = new Uint8Array(4); new DataView(a.buffer).setUint32(0, v >>> 0, true); return a; }

  for (const file of files) {
    const nameBytes = te.encode(file.name);
    const data = new Uint8Array(await file.blob.arrayBuffer());
    const crc = crc32(data);

    const local = new Uint8Array(30);
    const lv = new DataView(local.buffer);
    lv.setUint32(0, 0x04034b50, true);
    lv.setUint16(4, 20, true);
    lv.setUint16(6, 0, true);
    lv.setUint16(8, 0, true);
    lv.setUint16(10, 0, true);
    lv.setUint16(12, 0, true);
    lv.setUint32(14, crc, true);
    lv.setUint32(18, data.length, true);
    lv.setUint32(22, data.length, true);
    lv.setUint16(26, nameBytes.length, true);
    lv.setUint16(28, 0, true);
    parts.push(local, nameBytes, file.blob);

    const cen = new Uint8Array(46);
    const cv = new DataView(cen.buffer);
    cv.setUint32(0, 0x02014b50, true);
    cv.setUint16(4, 20, true);
    cv.setUint16(6, 20, true);
    cv.setUint16(8, 0, true);
    cv.setUint16(10, 0, true);
    cv.setUint16(12, 0, true);
    cv.setUint16(14, 0, true);
    cv.setUint32(16, crc, true);
    cv.setUint32(20, data.length, true);
    cv.setUint32(24, data.length, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, offset, true);
    central.push(cen, nameBytes);

    offset += local.length + nameBytes.length + data.length;
  }

  const centralSize = central.reduce((s, p) => s + p.length, 0);
  const end = new Uint8Array(22);
  const ev = new DataView(end.buffer);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(8, files.length, true);
  ev.setUint16(10, files.length, true);
  ev.setUint32(12, centralSize, true);
  ev.setUint32(16, offset, true);
  ev.setUint16(20, 0, true);

  return new Blob([...parts, ...central, end], { type: "application/zip" });
}

function extractDHashFromBitmap(bitmap) {
  const size = 32;
  const tempCanvas = document.createElement('canvas');
  const tCtx = tempCanvas.getContext('2d', { willReadFrequently: true });
  tempCanvas.width = bitmap.width;
  tempCanvas.height = bitmap.height;
  tCtx.drawImage(bitmap, 0, 0);
  const imgData = tCtx.getImageData(0, 0, bitmap.width, bitmap.height).data;

  const grayMatrix = [];
  const stepX = bitmap.width / size;
  const stepY = bitmap.height / size;

  for (let y = 0; y < size; y++) {
    const row = [];
    for (let x = 0; x < size; x++) {
      const realX = Math.floor(x * stepX);
      const realY = Math.floor(y * stepY);

      if (
        realX >= 265 && realX <= 1015 &&
        realY >= 54 && realY <= 264
      ) {
        row.push(null);
      } else {
        const idx = (realY * bitmap.width + realX) * 4;
        const gray = imgData[idx] * 0.299 + imgData[idx + 1] * 0.587 + imgData[idx + 2] * 0.114;
        row.push(gray);
      }
    }
    grayMatrix.push(row);
  }

  const fingerprint = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size - 1; x++) {
      if (grayMatrix[y][x] === null || grayMatrix[y][x + 1] === null) {
        fingerprint.push(-1);
      } else {
        fingerprint.push(grayMatrix[y][x] > grayMatrix[y][x + 1] ? 1 : 0);
      }
    }
  }
  return fingerprint;
}

function compareSignatures(sigA, sigB) {
  let matches = 0;
  let total = 0;
  for (let i = 0; i < sigA.length; i++) {
    if (sigA[i] !== -1 && sigB[i] !== -1) {
      total++;
      if (sigA[i] === sigB[i]) matches++;
    }
  }
  return total === 0 ? 0 : (matches / total);
}

async function bitmapToPreparedEntry(file) {
  const bitmap = await createImageBitmap(file);
  try {
    assertValidInputBitmap(bitmap, file.name);
  } catch (err) {
    if (bitmap.close) bitmap.close();
    throw err;
  }
  const c = document.createElement("canvas");
  c.width = bitmap.width;
  c.height = bitmap.height;
  const cctx = c.getContext("2d", { willReadFrequently: true });
  cctx.drawImage(bitmap, 0, 0);
  const img = cctx.getImageData(0, 0, c.width, c.height);
  const fullHash = fnv1a32FromImageData(img, 0, 0, c.width, c.height);
  const classSig = extractDHashFromBitmap(bitmap);
  return { file, bitmap, fullHash, classSig };
}

async function renderAndCollect(croppedList) {
  const logs = renderOutput(croppedList);
  const blob = await new Promise(resolve => els.canvas.toBlob(resolve, "image/png"));
  return { logs, blob };
}

function splitIntoPreferredChunks(list) {
  const n = list.length;
  if (n <= 5) return [list];

  const memo = new Map();

  function solve(remain) {
    if (remain === 0) return [];
    if (remain < 2) return null;
    if (memo.has(remain)) return memo.get(remain);

    let best = null;
    for (const size of [4, 5, 3, 2]) {
      if (size > remain) continue;
      const rest = solve(remain - size);
      if (!rest) continue;
      const candidate = [size, ...rest];
      const score = {
        smallCount: candidate.filter(v => v === 2 || v === 3).length,
        fiveCount: candidate.filter(v => v === 5).length,
        groupCount: candidate.length,
      };
      if (!best) {
        best = { candidate, score };
        continue;
      }
      const b = best.score;
      if (
        score.smallCount < b.smallCount ||
        (score.smallCount === b.smallCount && score.fiveCount < b.fiveCount) ||
        (score.smallCount === b.smallCount && score.fiveCount === b.fiveCount && score.groupCount < b.groupCount)
      ) {
        best = { candidate, score };
      }
    }

    const result = best ? best.candidate : null;
    memo.set(remain, result);
    return result;
  }

  const sizes = solve(n) || [n];
  const chunks = [];
  let start = 0;
  for (const size of sizes) {
    chunks.push(list.slice(start, start + size));
    start += size;
  }
  return chunks;
}

function buildCroppedListForChunk(chunk) {
  if (chunk.length === 5) {
    return chunk.map((entry, idx) => makeCropCanvas(entry.bitmap, idx === 4 ? "fiveBottom" : "top"));
  }
  return chunk.map((entry, idx) => makeCropCanvas(entry.bitmap, idx === chunk.length - 1 ? "bottom" : "top"));
}

async function processBatch(entries) {
  const logs = [];
  const seen = new Set();
  const deduped = [];
  for (const entry of entries) {
    if (seen.has(entry.fullHash)) continue;
    seen.add(entry.fullHash);
    deduped.push(entry);
  }

  const threshold = parseFloat((document.getElementById('thresholdSlider')?.value) || '0.92');
  const classes = [];
  for (const entry of deduped) {
    let placed = false;
    for (const group of classes) {
      if (compareSignatures(entry.classSig, group[0].classSig) >= threshold) {
        group.push(entry);
        placed = true;
        break;
      }
    }
    if (!placed) classes.push([entry]);
  }

  const outputs = [];
  const stamp = todayStamp();
  let index = 1;
  let classIndex = 1;
  for (const list of classes) {
    const chunks = splitIntoPreferredChunks(list);
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const croppedList = buildCroppedListForChunk(chunk);
      const result = await renderAndCollect(croppedList);
      const filename = `${stamp}_${String(index).padStart(2, "0")}.png`;
      outputs.push({ name: filename, blob: result.blob, classIndex, groupIndex: i + 1 });
      logs.push(`分组 ${classIndex} · 第 ${i + 1} 组：${chunk.length} 张 → ${filename}`);
      index++;
    }
    classIndex++;
  }

  return { outputs, logs, dedupedCount: deduped.length, classCount: classes.length, classes };
}

async function processImages() {
  if (!state.files.length) return;
  if (!highlightImg.complete || !badgeImg.complete) {
    setStatusMessage("status_assets_loading");
    return;
  }

  const myToken = ++state.processToken;
  const lockedScrollY = captureScrollY();
  setStatusMessage("status_processing");
  showPreviewLoading();

  try {
    state.bitmaps.forEach(b => b.close && b.close());
    state.bitmaps = [];

    const prepared = [];
    for (const file of state.files) {
      const entry = await bitmapToPreparedEntry(file);
      if (myToken !== state.processToken) return;
      prepared.push(entry);
      state.bitmaps.push(entry.bitmap);
    }

    const { outputs, dedupedCount, classCount, classes } = await processBatch(prepared);
    if (myToken !== state.processToken) return;

    revokeBlobUrl();

    state.groupedClasses = classes;
    renderClassifiedGroups();
    restoreScrollY(lockedScrollY);

    const prevIndex = Number.isInteger(state.activeOutputIndex) ? state.activeOutputIndex : 0;
    state.outputs = outputs
      .map(item => ({ ...item, blobUrl: URL.createObjectURL(item.blob) }))
      .sort((a,b) => a.name.localeCompare(b.name, undefined, {numeric:true, sensitivity:"base"}));

    if (myToken !== state.processToken) return;

    state.activeOutputIndex = Math.min(prevIndex, Math.max(state.outputs.length - 1, 0));
    renderOutputGallery();
    restoreScrollY(lockedScrollY);

    if (state.outputs[state.activeOutputIndex]) {
      drawBlobPreview(state.outputs[state.activeOutputIndex].blobUrl);
    } else {
      resetCanvas();
      hidePreviewLoading();
    }

    if (outputs.length === 1 || runtime.isMobile) {
      state.renderedBlobUrl = URL.createObjectURL(outputs[0].blob);
      state.downloadName = outputs[0].name;
    } else {
      if (myToken !== state.processToken) return;
      const zipBlob = await buildStoreZip(outputs);
      state.renderedBlobUrl = URL.createObjectURL(zipBlob);
      state.downloadName = `${todayStamp()}_batch.zip`;
    }

    if (myToken !== state.processToken) return;

    els.downloadBtn.disabled = false;
    if (els.mobileDownloadBtn) els.mobileDownloadBtn.disabled = false;
    setActionButtonsDone();
    setMobileResultMode(true);
    setHasGeneratedResults(true);

    const previewHint = document.getElementById("previewHint");
    if (previewHint) previewHint.style.display = "block";
    hidePreviewLoading();
    state.uploadPromptKey = "upload_success";
    syncUploadPrompt();
    setStatusMessage("status_complete", {
      inputCount: state.files.length,
      dedupedCount,
      classCount,
      outputCount: outputs.length,
    });
    restoreScrollY(lockedScrollY);
  } catch (err) {
    if (myToken !== state.processToken) return;
    console.error(err);
    hidePreviewLoading();
    restoreScrollY(lockedScrollY);
    setStatusMessage("status_failed", { message: err.message });
  }
}

function clearAll() {
  state.previewToken += 1;
  state.files = [];
  state.uploadPromptKey = "upload_prompt";
  state.bitmaps.forEach(b => b.close && b.close());
  state.bitmaps = [];
  revokeBlobUrl();
  els.fileInput.value = "";
  if (els.thumbs) els.thumbs.innerHTML = "";
  if (els.dropzone) els.dropzone.classList.remove("loaded");
  setMobileResultMode(false);
  setHasGeneratedResults(false);
  els.classifiedGroups.innerHTML = "";
  els.outputGallery.innerHTML = "";
  els.processBtn.disabled = true;
  els.downloadBtn.disabled = true;
  if (els.mobileDownloadBtn) els.mobileDownloadBtn.disabled = true;
  resetCanvas();
  revokeCustomStyleUrl("highlight");
  revokeCustomStyleUrl("badge");
  const previewHint = document.getElementById("previewHint");
  if (previewHint) previewHint.style.display = "none";
  setStatusMessage("status_waiting");
  syncUploadPrompt();
  setActionButtonsIdle();
  setActionButtonsIdle();
}

async function readEntryFiles(entry) {
  if (!entry) return [];
  if (entry.isFile) {
    return await new Promise(resolve => {
      entry.file(file => resolve([file]), () => resolve([]));
    });
  }
  if (entry.isDirectory) {
    const reader = entry.createReader();
    const entries = await new Promise(resolve => {
      const all = [];
      function readBatch() {
        reader.readEntries(results => {
          if (!results.length) return resolve(all);
          all.push(...results);
          readBatch();
        }, () => resolve(all));
      }
      readBatch();
    });
    const nested = await Promise.all(entries.map(readEntryFiles));
    return nested.flat();
  }
  return [];
}

async function getDroppedFiles(dataTransfer) {
  const dtItems = [...(dataTransfer.items || [])];
  const dtFiles = [...(dataTransfer.files || [])];

  // 先尝试用 entry 递归展开文件夹
  if (dtItems.length && typeof dtItems[0].webkitGetAsEntry === "function") {
    const entries = dtItems
      .map(item => {
        try { return item.webkitGetAsEntry(); } catch (_) { return null; }
      })
      .filter(Boolean);

    if (entries.length) {
      const groups = await Promise.all(entries.map(readEntryFiles));
      const expanded = groups.flat().filter(Boolean);
      if (expanded.length) return expanded;
    }
  }

  // 回退：普通拖入文件
  return dtFiles;
}

function openFolderPicker() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.multiple = true;
  input.webkitdirectory = true;
  input.directory = true;
  input.hidden = true;
  input.onchange = (e) => {
    const files = [...(e.target.files || [])];
    setFiles(files);
    input.remove();
  };
  document.body.appendChild(input);
  input.click();
}

function setFiles(fileList) {
  const files = sortFiles(fileList);
  state.files = files;
  state.uploadPromptKey = files.length ? "upload_loaded" : "upload_prompt";
  setMobileResultMode(false);
  setHasGeneratedResults(false);
  if (els.dropzone) els.dropzone.classList.toggle("loaded", files.length > 0);
  syncUploadPrompt();
  renderThumbs();
  els.classifiedGroups.innerHTML = "";
  els.outputGallery.innerHTML = "";
  els.processBtn.disabled = files.length === 0;
  els.downloadBtn.disabled = true;
  if (els.mobileDownloadBtn) els.mobileDownloadBtn.disabled = true;
  revokeBlobUrl();

  if (!files.length) {
    setStatusMessage("status_waiting");
    return;
  }

  setStatusMessage("status_loaded", { count: files.length });
  setActionButtonsUploaded();
}

els.fileInput.addEventListener("change", e => {
  setFiles([...(e.target.files || [])]);
});

els.dropzone.addEventListener("dragover", e => {
  e.preventDefault();
  els.dropzone.classList.add("drag");
});

els.dropzone.addEventListener("dragleave", () => {
  els.dropzone.classList.remove("drag");
});

els.dropzone.addEventListener("drop", async e => {
  e.preventDefault();
  els.dropzone.classList.remove("drag");
  const files = await getDroppedFiles(e.dataTransfer);
  setFiles(files);
});

els.dropzone.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  openFolderPicker();
});

els.processBtn.addEventListener("click", processImages);

function triggerDownload() {
  (async () => {
    if (runtime.isMobile) {
      const handled = await downloadOutputsForMobile();
      if (!handled) {
        if (!state.renderedBlobUrl) return;
        const a = document.createElement("a");
        a.href = state.renderedBlobUrl;
        a.download = state.downloadName || "switch-design-merged.png";
        a.click();
      }
    } else {
      if (!state.renderedBlobUrl) return;
      const a = document.createElement("a");
      a.href = state.renderedBlobUrl;
      a.download = state.downloadName || "switch-design-merged.png";
      a.click();
    }

    state.uploadPromptKey = "upload_downloaded";
    if (els.dropzone) els.dropzone.classList.remove("loaded");
    setStatusMessage("status_waiting");
    syncUploadPrompt();
    setActionButtonsDownloadedReset();
  })().catch(error => {
    console.error(error);
    setStatusMessage("status_failed", { message: error.message || "Download failed" });
  });
}

els.downloadBtn.addEventListener("click", triggerDownload);
if (els.mobileDownloadBtn) els.mobileDownloadBtn.addEventListener("click", triggerDownload);
if (els.mobileResetBtn) els.mobileResetBtn.addEventListener("click", clearAll);

els.clearBtn.addEventListener("click", clearAll);
if (els.langToggle) els.langToggle.addEventListener("click", toggleLanguage);
if (els.donateBtn) els.donateBtn.addEventListener("click", openDonateModal);
if (els.closeDonateBtn) els.closeDonateBtn.addEventListener("click", closeDonateModal);
if (els.donateModal) {
  els.donateModal.addEventListener("click", e => {
    if (e.target && e.target.dataset && e.target.dataset.closeDonate === "true") {
      closeDonateModal();
    }
  });
}
if (els.wechatQr) els.wechatQr.addEventListener("click", () => openQrPreview(els.wechatQr.src, els.wechatQr.alt));
if (els.alipayQr) els.alipayQr.addEventListener("click", () => openQrPreview(els.alipayQr.src, els.alipayQr.alt));
if (els.qrPreviewModal) {
  els.qrPreviewModal.addEventListener("click", e => {
    if (
      (e.target && e.target.dataset && e.target.dataset.closeQrPreview === "true") ||
      e.target === els.qrPreviewModal
    ) {
      closeQrPreview();
    }
  });
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeQrPreview();
    closeDonateModal();
  }
});

const thresholdSlider = document.getElementById('thresholdSlider');
const thresholdVal = document.getElementById('thresholdVal');
if (thresholdSlider && thresholdVal) {
  thresholdSlider.addEventListener('input', () => {
    thresholdVal.textContent = thresholdSlider.value;
  });
  thresholdVal.textContent = thresholdSlider.value;
}

function updateClockUI() {
  const now = new Date();
  const weekdays = state.lang === "en"
    ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    : ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
  const dateEl = document.getElementById('clockDate');
  const timeEl = document.getElementById('clockTime');
  if (!dateEl || !timeEl) return;

  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  dateEl.textContent = `${y}.${m}.${d} ${weekdays[now.getDay()]}`;
  timeEl.textContent = `${hh}:${mm}:${ss}`;
}
setInterval(updateClockUI, 1000);
updateClockUI();

Promise.all([
  highlightImg.decode().catch(() => {}),
  badgeImg.decode().catch(() => {}),
  document.fonts.ready,
]).then(() => {
  resetCanvas();
setActionButtonsIdle();
setHasGeneratedResults(false);
applyLanguage();
});

function scheduleStyleRerender() {
  if (!state.files || !state.files.length) return;
  clearTimeout(state.rerenderTimer);
  state.rerenderTimer = setTimeout(() => {
    try { processImages(); } catch (_) {}
  }, 120);
}

function applyStyle() {
  const highlightSrc = (state.style.highlight === 3 && state.custom.highlight)
    ? state.custom.highlight
    : (PRESET_HIGHLIGHTS[state.style.highlight] || PRESET_HIGHLIGHTS[0]);
  const badgeSrc = (state.style.badge === 3 && state.custom.badge)
    ? state.custom.badge
    : (DISPLAY_BADGES[state.style.badge] || DISPLAY_BADGES[0]);

  if (highlightImg.src !== highlightSrc) highlightImg.src = highlightSrc;
  if (badgeImg.src !== badgeSrc) badgeImg.src = badgeSrc;
  scheduleStyleRerender();
}

function createStyleGrid(container, type, presets){
  container.innerHTML = "";
  presets.forEach((item,i)=>{
    const div = document.createElement("div");
    div.className = "styleItem" + (i===0 ? " active" : "");
    if(item.type==="img"){
      const img = document.createElement("img");
      img.src = item.src;
      div.appendChild(img);
      if (type === "highlight") div.style.background = "#D9D9D9";
    } else {
      div.style.background = item.color;
    }
    div.onclick = () => {
      [...container.children].forEach(n=>n.classList.remove("active"));
      div.classList.add("active");
      if(type === "text"){
        state.style.text = item.color;
      } else {
        state.style[type] = i;
      }
      applyStyle();
    };
    container.appendChild(div);
  });

  const add = document.createElement("div");
  add.className = "styleItem plus";

  if(type === "text"){
    const plusMark = document.createElement("span");
    plusMark.className = "plusMark";
    plusMark.textContent = "+";

    const picker = document.createElement("input");
    picker.type = "color";
    picker.className = "styleColorInput";
    picker.value = /^#/.test(state.style.text||"") ? state.style.text : "#FFFFFF";

    const applyPickedColor = (c) => {
      state.style.text = c;
      picker.value = c;
      add.style.background = c;
      add.classList.add("hasColor");
      [...container.children].forEach(n=>n.classList.remove("active"));
      add.classList.add("active");
      applyStyle();
    };

    picker.addEventListener("input", e => {
      applyPickedColor(e.target.value);
    });
    picker.addEventListener("change", e => {
      applyPickedColor(e.target.value);
    });

    add.appendChild(plusMark);
    add.appendChild(picker);
  } else {
    add.textContent = "+";
    add.onclick = () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/png,image/*";
      input.onchange = e => {
        const file = e.target.files && e.target.files[0];
        if(!file) return;
        revokeCustomStyleUrl(type);
        const url = URL.createObjectURL(file);
        state.custom[type] = url;
        state.style[type] = 3;
        add.innerHTML = "";
        const img = document.createElement("img");
        img.src = url;
        add.appendChild(img);
        if (type === "highlight") add.style.background = "#D9D9D9";
        [...container.children].forEach(n=>n.classList.remove("active"));
        add.classList.add("active");
        applyStyle();
      };
      input.click();
    };
  }

  container.appendChild(add);
}

function initStylePanel(){
  createStyleGrid(
    document.getElementById("highlightStyles"),
    "highlight",
    [
      {type:"img",src:PRESET_HIGHLIGHTS[0]},
      {type:"img",src:PRESET_HIGHLIGHTS[1]},
      {type:"img",src:PRESET_HIGHLIGHTS[2]}
    ]
  );

  createStyleGrid(
    document.getElementById("badgeStyles"),
    "badge",
    [
      {type:"img",src:DISPLAY_BADGES[0]},
      {type:"img",src:DISPLAY_BADGES[1]},
      {type:"img",src:DISPLAY_BADGES[2]}
    ]
  );

  createStyleGrid(
    document.getElementById("textStyles"),
    "text",
    [
      {type:"color",color:PRESET_TEXT_COLORS[0]},
      {type:"color",color:PRESET_TEXT_COLORS[1]},
      {type:"color",color:PRESET_TEXT_COLORS[2]}
    ]
  );
  applyStyle();
}

initStylePanel();
applyLanguage();

// ===== style panel collapse v6 =====
(function(){
  const panel = document.getElementById('stylePanelInline');
  const toggle = document.getElementById('styleToggle');
  if (!panel || !toggle) return;

  function sync(){
    toggle.textContent = panel.classList.contains('collapsed') ? '▸' : '▾';
  }

  panel.classList.add('collapsed');
  sync();

  toggle.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    panel.classList.toggle('collapsed');
    sync();
  });
})();
