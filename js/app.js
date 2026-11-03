/* ==========================================================================
   NOKRA — app runtime
   brand · i18n engine · smart routing · hero stack · project cards · manifesto · method · contact preview
   ========================================================================== */
(() => {
  "use strict";

  const TR = window.TRANSLATIONS;
  const BRAND = window.BRAND;
  const LANGS = ["pt", "en", "it", "es"];
  const LOCALE = { pt: "pt-BR", en: "en-US", it: "it-IT", es: "es-ES" };
  const HTML_LANG = { pt: "pt-BR", en: "en", it: "it", es: "es" };
  const OG_LOCALE = { pt: "pt_BR", en: "en_US", it: "it_IT", es: "es_ES" };
  const STORAGE_KEY = "gf.lang";
  const SWITCH_MS = 150;

  // one door in: Kauã handles every first contact
  const CONTACT = { wa: "5519996691034", email: "equipenokra@gmail.com" };

  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n, l = 2) => String(n).padStart(l, "0");

  /* ====================================================================
     i18n ENGINE
     ==================================================================== */
  let lang = "pt";

  const getPath = (obj, path) => path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);

  function t(path, vars) {
    let v = getPath(TR[lang], path);
    if (v === undefined) v = getPath(TR.pt, path);
    if (v === undefined) { console.warn(`[i18n] missing key: ${path}`); return path; }
    if (typeof v === "string") {
      const all = { brand: BRAND.name, ...vars };
      v = v.replace(/\{(\w+)\}/g, (_, k) => (all[k] ?? ""));
    }
    return v;
  }

  function normalizeLang(v) {
    if (!v) return null;
    const s = String(v).toLowerCase().trim();
    return LANGS.find((l) => s === l || s.startsWith(l + "-") || s.startsWith(l + "_")) || null;
  }

  function detectLang() {
    // 1) URL (?lang=it) — lets us send prospecting links already localized
    const fromUrl = normalizeLang(new URLSearchParams(location.search).get("lang"));
    if (fromUrl) { store(fromUrl); return fromUrl; }
    // 2) previous explicit choice
    let stored = null;
    try { stored = normalizeLang(localStorage.getItem(STORAGE_KEY)); } catch (_) { /* private mode */ }
    if (stored) return stored;
    // 3) browser language
    const navs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language];
    for (const n of navs) { const l = normalizeLang(n); if (l) return l; }
    return "pt";
  }

  function store(l) { try { localStorage.setItem(STORAGE_KEY, l); } catch (_) { /* noop */ } }

  function syncUrl(l) {
    try {
      const url = new URL(location.href);
      url.searchParams.set("lang", l);
      history.replaceState(history.state, "", url);
    } catch (_) { /* file:// or sandboxed — ignore */ }
  }

  // Dev guard: every language must mirror the `pt` structure
  function validateDictionary() {
    const walk = (ref, cmp, path, code) => {
      Object.keys(ref).forEach((k) => {
        const p = path ? `${path}.${k}` : k;
        const a = ref[k], b = cmp ? cmp[k] : undefined;
        if (b === undefined || b === "") { console.warn(`[i18n] "${code}" is missing "${p}"`); return; }
        if (Array.isArray(a)) {
          if (!Array.isArray(b) || a.length !== b.length) console.warn(`[i18n] "${code}" array length mismatch at "${p}"`);
          else a.forEach((item, i) => { if (item && typeof item === "object") walk(item, b[i], `${p}[${i}]`, code); });
        } else if (a && typeof a === "object") walk(a, b, p, code);
      });
    };
    LANGS.filter((l) => l !== "pt").forEach((l) => walk(TR.pt, TR[l], "", l));
  }

  function applyStatic() {
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); }); // trusted dictionary only
    $$("[data-i18n-ph]").forEach((el) => { el.setAttribute("placeholder", t(el.dataset.i18nPh)); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  }

  function updateMeta() {
    root.lang = HTML_LANG[lang];
    document.title = t("meta.title");
    const set = (sel, val) => { const el = $(sel); if (el) el.setAttribute("content", val); };
    set('meta[name="description"]', t("meta.description"));
    set('meta[property="og:title"]', t("meta.title"));
    set('meta[property="og:description"]', t("meta.description"));
    set('meta[property="og:locale"]', OG_LOCALE[lang]);
  }

  function updateLangControls() {
    $$("[data-lang]").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    moveLangIndicator();
  }

  function moveLangIndicator() {
    const sw = $("#lang-switch");
    const active = sw && $(".lang-btn.is-active", sw);
    const ind = sw && $(".lang-switch__indicator", sw);
    if (!active || !ind) return;
    ind.style.width = `${active.offsetWidth}px`;
    ind.style.transform = `translateX(${active.offsetLeft}px)`;
  }

  function renderAll() {
    applyStatic();
    updateMeta();
    updateLangControls();
    renderClock();
    renderWorks();
    renderStatement();
    renderSteps();
    renderContact();
  }

  let switchTimer = null;
  function setLang(next, { animate = true } = {}) {
    next = normalizeLang(next) || "pt";
    const commit = () => {
      lang = next;
      renderAll();
      store(lang);
      syncUrl(lang);
    };
    if (!animate || reduceMotion) { commit(); return; }
    if (next === lang) return;
    root.classList.add("lang-switching");
    clearTimeout(switchTimer);
    switchTimer = setTimeout(() => {
      commit();
      requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("lang-switching")));
    }, SWITCH_MS);
  }

  /* ====================================================================
     STATUS BAR CLOCK (São Paulo)
     ==================================================================== */
  function renderClock() {
    const el = $("#sb-clock");
    if (!el) return;
    const fmt = (tz) => new Intl.DateTimeFormat(LOCALE[lang], { timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date());
    el.textContent = `${t("status.local")} · SP ${fmt("America/Sao_Paulo")}`;
  }

  /* ====================================================================
     PROJECTS · cards (text in i18n `projects.items`, same order as WORKS)
     ==================================================================== */
  const BEHANCE = "https://www.behance.net/gallery/";
  const WORKS = [
    { by: "k", img: "kbyte", host: "kbyte-show.vercel.app", tags: ["PHP", "MySQL", "JavaScript"], links: [["site", "https://kbyte-show.vercel.app/"]] },
    { by: "k", img: "ironpark", host: "iron-park.vercel.app", tags: ["TypeScript", "CSS", "JavaScript"], links: [["site", "https://iron-park.vercel.app/"]] },
    { by: "g", img: "rivlo", host: "behance.net/gustavoclati", tags: ["React", "UI/UX"], links: [["behance", `${BEHANCE}245383311/Rivlo-AI-Powered-Fitness-Training-Platform-Website`]] },
    { by: "g", img: "aurora", host: "behance.net/gustavoclati", tags: ["Web design", "UI/UX"], links: [["behance", `${BEHANCE}245382843/Aurora-Contabil-Institutional-Website-Design`]] },
    { by: "k", img: "food", host: "pizzaria-rest · restaurante-net", tags: ["HTML", "CSS", "JavaScript"], links: [["site", "https://pizzaria-rest.vercel.app/", "La Forno"], ["site", "https://restaurante-net.vercel.app/", "Lumina"]] },
    { by: "k", term: true, host: "~/comunacheck", tags: ["Python", "Git"], links: [["code", "https://github.com/kaua-espindola/ComunaCheck-main"]] }
  ];
  const AUTHOR = { k: "Kauã", g: "Gustavo" };
  // ComunaCheck has no screen: show what the script really prints
  const TERM = [
    "$ python rastreador.py",
    "--- COMUNACHECK: BUSCA REGIONAL ---",
    "Varrendo: ribeirao-preto-franca...",
    "Varrendo: sao-carlos-araraquara...",
    "Varrendo: campinas-regiao...",
    "Analisando manchetes com Gemini 2.5 Flash...",
    "✅ Relatório consolidado em 'relatorio_comunidade.txt'"
  ];

  function workMedia(meta) {
    const bar = `<span class="work__bar mono"><i></i><i></i><i></i><span>${esc(meta.host)}</span></span>`;
    if (meta.term) {
      const lines = TERM.map((l, i) => `<p style="--i:${i}" class="${i === 0 ? "cmd" : i === TERM.length - 1 ? "ok" : ""}">${esc(l)}</p>`).join("");
      return `<div class="work__media work__media--term" aria-hidden="true">${bar}<div class="term mono">${lines}<p class="term__cur" style="--i:${TERM.length}"><span></span></p></div></div>`;
    }
    return `<a class="work__media" href="${esc(meta.links[0][1])}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">${bar}<span class="work__shot"><img src="img/work-${meta.img}.webp" alt="" width="1200" height="750" loading="lazy" decoding="async"></span></a>`;
  }

  function renderWorks() {
    const items = t("projects.items");
    const wrap = $("#works");
    wrap.innerHTML = items.map((w, i) => {
      const meta = WORKS[i];
      const links = meta.links.map(([type, url, label]) =>
        `<a class="work__link mono" href="${esc(url)}" target="_blank" rel="noopener">${esc(label || t(`projects.links.${type}`))}<span aria-hidden="true">↗</span></a>`).join("");
      return `
      <article class="work${i < 2 ? " work--feat" : ""}" id="work-${pad(i + 1)}">
        ${workMedia(meta)}
        <div class="work__body">
          <div class="work__top mono"><span><b>${pad(i + 1)}</b> · ${esc(w.cat)}</span><span>${esc(t("projects.by"))} ${esc(AUTHOR[meta.by])}</span></div>
          <h3 class="work__title">${esc(w.title)}</h3>
          <p class="work__desc">${esc(w.desc)}</p>
          <div class="work__foot"><ul class="tags mono">${meta.tags.map((x) => `<li>${esc(x)}</li>`).join("")}</ul><div class="work__links">${links}</div></div>
        </div>
      </article>`;
    }).join("");
    // cards are re-rendered on language switch — only animate them the first time
    if (!worksSeen) $$(".work", wrap).forEach((el, i) => armReveal(el, "up", i < 2 ? 0 : i % 2));
  }

  // cards lean towards the cursor and a soft light follows it
  function initWorksTilt() {
    if (!finePointer || reduceMotion) return;
    const wrap = $("#works");
    wrap.addEventListener("pointermove", (e) => {
      const card = e.target.closest(".work");
      if (!card) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      const k = card.classList.contains("work--feat") ? 2.4 : 6; // wide cards lean less
      card.classList.add("is-tilting");
      card.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      card.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
      card.style.setProperty("--ry", `${((x - 0.5) * k).toFixed(2)}deg`);
      card.style.setProperty("--rx", `${((0.5 - y) * k).toFixed(2)}deg`);
    });
    wrap.addEventListener("pointerout", (e) => {
      const card = e.target.closest(".work");
      if (!card || card.contains(e.relatedTarget)) return;
      card.classList.remove("is-tilting");
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  }

  /* ====================================================================
     MANIFESTO · orange band: the statement rises word by word,
     the big // drifts while the band crosses the screen
     ==================================================================== */
  function renderStatement() {
    const el = $("#band-statement");
    if (!el) return;
    // words between [brackets] in the dictionary are highlighted
    let hl = false;
    el.innerHTML = t("manifesto.quote").split(" ").map((raw, i) => {
      let word = raw;
      if (word.startsWith("[")) { hl = true; word = word.slice(1); }
      let html = esc(word);
      if (hl) {
        const end = word.indexOf("]");
        // punctuation after the closing bracket stays in the normal colour
        html = end === -1 ? `<b class="hl">${esc(word)}</b>` : `<b class="hl">${esc(word.slice(0, end))}</b>${esc(word.slice(end + 1))}`;
        if (end !== -1) hl = false;
      }
      return `<span class="w"><span style="--w:${i}">${html}</span></span>`;
    }).join(" ");
  }

  function initBand() {
    const band = $("#manifesto");
    if (!band) return;
    if (!("IntersectionObserver" in window)) { band.classList.add("is-in"); return; }
    const io = new IntersectionObserver((en) => {
      if (!en[0].isIntersecting) return;
      band.classList.add("is-in");
      io.disconnect();
    }, { threshold: 0.3 });
    io.observe(band);
    if (reduceMotion) return;
    const mark = $(".band__slashes", band);
    let ticking = false;
    const move = () => {
      const r = band.getBoundingClientRect();
      const p = (window.innerHeight - r.top) / (window.innerHeight + r.height);
      mark.style.setProperty("--bp", Math.max(0, Math.min(1, p)).toFixed(3));
      ticking = false;
    };
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(move); } }, { passive: true });
    move();
  }

  /* ====================================================================
     METHOD · four steps (text in i18n `method.steps`)
     ==================================================================== */
  let stepsSeen = false;
  function renderSteps() {
    const wrap = $("#steps");
    if (!wrap) return;
    wrap.innerHTML = t("method.steps").map((st, i) => `
      <li class="step">
        <span class="step__n mono"><i></i>${pad(i + 1)}</span>
        <h3 class="step__t">${esc(st.t)}</h3>
        <p class="step__d">${esc(st.d)}</p>
        <ul class="step__tags mono">${st.tags.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </li>`).join("");
    if (!stepsSeen) $$(".step", wrap).forEach((el, i) => armReveal(el, "up", 1 + i * 2));
  }

  /* ====================================================================
     BRAND — fills every [data-brand] slot from window.BRAND
     ==================================================================== */
  function applyBrand() {
    $$("[data-brand]").forEach((el) => {
      const key = el.dataset.brand;
      if (key === "lockup") {
        const [a, b = ""] = BRAND.lockup || BRAND.name.toLowerCase().split(" ");
        el.innerHTML = `<b>${esc(a)}</b>${b ? `<span>${esc(b)}</span>` : ""}`;
      }
      else if (key === "wordmark") el.innerHTML = `<span>//</span>${[].concat(BRAND.wordmark).map(esc).join(" ")}`;
      else el.textContent = BRAND[key];
    });
    $$("[data-brand-aria]").forEach((el) => el.setAttribute("aria-label", BRAND.name));
  }

  /* ====================================================================
     HERO · layered stack (headline line ⇄ drawing layer)
     ==================================================================== */
  function initHeroStack() {
    const fig = $("#hero-stack");
    if (!fig) return;
    const lines = $$("#hero-title .line");
    const layers = $$(".layer", fig);
    let idx = 0, timer = null, held = false, visible = true;

    const set = (i) => {
      idx = i;
      lines.forEach((l) => l.classList.toggle("is-on", Number(l.dataset.layer) === i));
      layers.forEach((l) => l.classList.toggle("is-on", Number(l.dataset.layer) === i));
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const play = () => {
      stop();
      if (reduceMotion || held || !visible) return;
      timer = setInterval(() => set((idx + 1) % 3), 2600);
    };
    const hold = (i) => { held = true; stop(); set(i); };
    const release = () => { held = false; play(); };

    [...lines, ...layers].forEach((el) => {
      el.addEventListener("pointerenter", () => hold(Number(el.dataset.layer)));
      el.addEventListener("pointerleave", release);
    });

    // only animate while the hero is on screen
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      visible ? play() : stop();
    }, { threshold: 0.15 }).observe(fig);

    // subtle depth parallax
    if (finePointer && !reduceMotion) {
      const hero = $("#inicio");
      hero.addEventListener("pointermove", (e) => {
        const r = hero.getBoundingClientRect();
        fig.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
        fig.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
      });
      hero.addEventListener("pointerleave", () => { fig.style.setProperty("--mx", 0); fig.style.setProperty("--my", 0); });
    }

    if (!reduceMotion) {
      const hero = $("#inicio");
      let ticking = false;
      const spread = () => {
        const sp = Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight * 0.75)));
        fig.style.setProperty("--sp", sp.toFixed(3));
        ticking = false;
      };
      window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(spread); } }, { passive: true });
    }

    set(0);
    requestAnimationFrame(() => fig.classList.add("is-in"));
    play();
  }

  /* ====================================================================
     CONTACT · business name + project type → live preview, and the
     WhatsApp / e-mail links carry a pre-filled message
     ==================================================================== */
  const contact = { type: "site", name: "" };
  const slugify = (v) => v.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "");

  function renderContact() {
    $$(".chip").forEach((c) => {
      const on = c.dataset.type === contact.type;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-pressed", String(on));
    });
    const typeName = t(`contact.types.${contact.type}`);
    const name = contact.name.trim();
    const msg = t(name ? "contact.msgNamed" : "contact.msg", { type: typeName.toLowerCase(), name });
    const wa = `https://wa.me/${CONTACT.wa}?text=${encodeURIComponent(msg)}`;
    $("#wa-team").href = wa;
    $("#wa-float").href = wa;
    $("#mail").href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(t("contact.subject", { type: typeName }))}&body=${encodeURIComponent(msg)}`;
    renderPreview();
  }

  function renderPreview() {
    const pv = $("#pv");
    const name = contact.name.trim();
    const shown = name || t("contact.nameFallback");
    pv.className = `pv pv--${contact.type}${name ? "" : " is-empty"}`;
    pv.style.setProperty("--len", Math.max(6, shown.length));
    $("#pv-url").textContent = `${slugify(shown) || "nokra"}${t("contact.domain")}`;
    ["#pv-logo", "#pv-name", "#pv-foot"].forEach((sel) => { $(sel).textContent = shown; });
    $("#pv-k").textContent = t(`contact.preview.${contact.type}.k`);
    $("#pv-s").textContent = t(`contact.preview.${contact.type}.s`);
    $("#pv-b").textContent = t(`contact.preview.${contact.type}.b`);
  }

  function initContact() {
    const body = $("#pv-body");
    $("#contact-types").addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip || chip.dataset.type === contact.type) return;
      contact.type = chip.dataset.type;
      renderContact();
      // replay the little "page loads" animation on the preview
      body.classList.remove("is-swap"); void body.offsetWidth; body.classList.add("is-swap");
    });
    $("#biz-name").addEventListener("input", (e) => { contact.name = e.target.value; renderContact(); });
  }

  // floating WhatsApp: only after the hero, and out of the way at the contact section / footer
  function initWaFloat() {
    const btn = $("#wa-float"), hero = $("#inicio"), end = $("#contato");
    if (!btn || !hero || !end) return;
    const update = () => {
      const vh = window.innerHeight;
      const pastHero = hero.getBoundingClientRect().bottom < vh * 0.35;
      const atEnd = end.getBoundingClientRect().top < vh * 0.85; // contact + footer below it
      btn.classList.toggle("is-on", pastHero && !atEnd);
    };
    // two rect reads per scroll event: cheap enough to run directly
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
  }

  /* ====================================================================
     UI · header, menu, magnetic, reveal, scrollspy
     ==================================================================== */
  function initHeader() {
    const header = $("#site-header");
    const toggle = $("#menu-toggle");
    const close = () => { header.classList.remove("menu-open"); toggle.setAttribute("aria-expanded", "false"); };
    toggle.addEventListener("click", () => {
      const open = !header.classList.contains("menu-open");
      header.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$(".mobile-drawer a").forEach((a) => a.addEventListener("click", close));
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 1100) close(); moveLangIndicator(); }, { passive: true });

    // scrollspy
    const links = $$(".nav-link");
    const map = new Map(links.map((l) => [l.getAttribute("href").slice(1), l]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((l) => l.classList.remove("is-current"));
        const l = map.get(en.target.id);
        if (l) l.classList.add("is-current");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["servicos", "projetos", "metodo", "sobre", "contato"].forEach((id) => { const el = document.getElementById(id); if (el) spy.observe(el); });
  }

  function initMagnetic() {
    if (!finePointer || reduceMotion) return;
    $$(".magnetic").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.22}px, ${y * 0.35}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  /* Scroll reveal — [selector, kind, stagger(index)]. Kinds: up (fade + rise),
     clip (titles rising out of a mask), fade (no movement; sec-meta draws its line). */
  const REVEAL_MAP = [
    [".sec-meta", "fade", () => 0],
    [".hero__title .line", "up", (i) => i + 1],
    [".hero__sub", "up", () => 4],
    [".hero__ctas", "up", () => 5],
    [".stack__cap", "fade", () => 7],
    [".sec-title", "clip", () => 0],
    [".sec-intro", "up", () => 2],
    [".service", "up", (i) => i],
    [".band__aside", "up", () => 0],
    [".band__cite", "fade", () => 8],
    [".steps", "line", () => 0],
    [".person", "up", (i) => i * 2],
    [".about__shared", "fade", () => 3],
    [".contact__title", "clip", () => 0],
    [".contact__intro", "up", () => 2],
    [".contact__form .field", "up", (i) => 3 + i],
    [".contact__actions", "up", () => 5],
    [".pv", "up", () => 3],
    [".direct__title", "fade", () => 0],
    [".direct__item", "up", (i) => i + 1],
    [".footer__mark", "up", () => 0],
    [".footer__bottom", "fade", () => 2]
  ];
  let revealIO = null;
  let worksSeen = false;
  const revealTargets = new Map(); // observed element → elements it reveals

  function armReveal(el, kind = "up", d = 0) {
    if (!revealIO || el.dataset.reveal) return;
    if (reduceMotion) kind = "fade"; // fade in place, no rise/clip
    el.dataset.reveal = kind;
    el.style.setProperty("--d", d);
    // a fully clipped element has no visible area, so the observer would never fire for it:
    // let its parent trigger it instead
    const trigger = kind === "clip" ? el.parentElement : el;
    if (!revealTargets.has(trigger)) { revealTargets.set(trigger, []); revealIO.observe(trigger); }
    revealTargets.get(trigger).push(el);
  }

  function landReveal(el) {
    el.classList.add("in");
    if (el.classList.contains("work")) worksSeen = true;
    if (el.classList.contains("step")) stepsSeen = true;
    // once landed, hand the element back to its own styles (hover transitions etc.)
    const d = Number(el.style.getPropertyValue("--d")) || 0;
    setTimeout(() => {
      el.removeAttribute("data-reveal");
      el.classList.remove("in");
      el.style.removeProperty("--d");
    }, 1700 + d * 90);
  }

  function initReveal() {
    if (!("IntersectionObserver" in window)) return; // everything simply stays visible
    revealIO = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        revealIO.unobserve(en.target);
        (revealTargets.get(en.target) || []).forEach(landReveal);
        revealTargets.delete(en.target);
      });
    }, { threshold: 0.12 }); // no negative bottom margin: elements at the very end of the page must still fire
    REVEAL_MAP.forEach(([sel, kind, stagger]) => $$(sel).forEach((el, i) => armReveal(el, kind, stagger(i))));
  }

  function initScrollProgress() {
    const bar = $("#scroll-progress");
    if (!bar) return;
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.setProperty("--p", max > 0 ? (window.scrollY / max).toFixed(4) : 0);
      ticking = false;
    };
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
  }

  /* ====================================================================
     PARTICLES · little "//" marks and dots drifting up like data,
     nudged away by the cursor. One loop per <canvas class="particles">,
     paused while off screen. Reduced motion: slower, no cursor push.
     ==================================================================== */
  function initParticles() {
    const ORANGE = "255, 79, 0", PAPER = "244, 243, 239";
    const speed = reduceMotion ? 0.3 : 1;

    $$("canvas.particles").forEach((canvas) => {
      const ctx = canvas.getContext("2d");
      const host = canvas.parentElement;
      const wanted = Number(canvas.dataset.count) || 40;
      let w = 0, h = 0, dpr = 1, parts = [], onScreen = false, visible = false, raf = 0;
      const mouse = { x: -9999, y: -9999 };

      const spawn = (anywhere) => {
        const slash = Math.random() < 0.28;
        return {
          x: Math.random() * w,
          y: anywhere ? Math.random() * h : h + 20,
          vy: (0.12 + Math.random() * 0.38) * speed,
          sway: Math.random() * Math.PI * 2,
          size: slash ? 7 + Math.random() * 7 : 1 + Math.random() * 1.6,
          slash,
          alpha: slash ? 0.35 + Math.random() * 0.4 : 0.12 + Math.random() * 0.3,
          px: 0, py: 0 // cursor push offset
        };
      };

      const resize = () => {
        const r = host.getBoundingClientRect();
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = r.width; h = r.height;
        canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const n = Math.round(wanted * Math.min(1, w / 1200) + wanted * 0.25);
        parts = Array.from({ length: n }, () => spawn(true));
      };

      const draw = () => {
        ctx.clearRect(0, 0, w, h);
        for (const p of parts) {
          p.y -= p.vy;
          p.sway += 0.01 * speed;
          const x = p.x + Math.sin(p.sway) * 6;
          if (!reduceMotion) {
            const dx = x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
            if (d2 < 120 * 120) { const f = (1 - Math.sqrt(d2) / 120) * 2.2; p.px += (dx / (Math.sqrt(d2) || 1)) * f; p.py += (dy / (Math.sqrt(d2) || 1)) * f; }
            p.px *= 0.92; p.py *= 0.92;
          }
          if (p.y < -20) Object.assign(p, spawn(false));
          const X = x + p.px, Y = p.y + p.py;
          // fade in from the bottom and out near the top
          const edge = Math.min(1, Y / (h * 0.25), (h - Y) / (h * 0.15));
          const a = Math.max(0, p.alpha * edge);
          if (p.slash) {
            ctx.strokeStyle = `rgba(${ORANGE}, ${a})`;
            ctx.lineWidth = 2;
            const s = p.size, k = 0.45;
            ctx.beginPath();
            ctx.moveTo(X - s * k, Y + s); ctx.lineTo(X + s * k * 0.2, Y - s);
            ctx.moveTo(X - s * k + s * 0.75, Y + s); ctx.lineTo(X + s * k * 0.2 + s * 0.75, Y - s);
            ctx.stroke();
          } else {
            ctx.fillStyle = `rgba(${PAPER}, ${a})`;
            ctx.fillRect(X, Y, p.size, p.size);
          }
        }
        raf = visible ? requestAnimationFrame(draw) : 0;
      };

      const start = () => { if (!raf && visible) raf = requestAnimationFrame(draw); };
      resize();
      if ("ResizeObserver" in window) new ResizeObserver(resize).observe(host);
      const update = () => { visible = onScreen && !document.hidden; start(); };
      new IntersectionObserver((en) => { onScreen = en[0].isIntersecting; update(); }).observe(host);
      document.addEventListener("visibilitychange", update);
      if (!reduceMotion && finePointer) {
        host.addEventListener("pointermove", (e) => { const r = host.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
        host.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
      }
    });
  }

  /* ====================================================================
     BOOT
     ==================================================================== */
  function boot() {
    validateDictionary();
    lang = detectLang();

    $$("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

    applyBrand();
    initHeroStack();
    initBand();
    initContact();
    initWaFloat();
    initWorksTilt();
    initHeader();
    initMagnetic();
    initReveal();
    initScrollProgress();
    initParticles();

    renderAll();
    setInterval(renderClock, 1000);

    requestAnimationFrame(() => root.classList.remove("i18n-pending"));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveLangIndicator);
  }

  boot();
})();
