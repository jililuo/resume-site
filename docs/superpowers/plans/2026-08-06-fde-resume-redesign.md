# FDE Resume Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the public resume as a truthful, printable editorial-style profile for a senior backend engineer transitioning toward FDE and AI application delivery.

**Architecture:** Keep the repository as a zero-build GitHub Pages site. Replace the existing single-page content and styling inside `index.html`, retain only lightweight native JavaScript for navigation and reveal behavior, and synchronize `SPEC.md` with the implemented design.

**Tech Stack:** Semantic HTML5, CSS Custom Properties, CSS Grid/Flexbox, Vanilla JavaScript, GitHub Pages

---

## File Map

- Modify: `index.html` - public resume content, responsive editorial layout, print styles, and interaction.
- Modify: `SPEC.md` - current product, content, visual, accessibility, and deployment specification.
- Reference: `docs/superpowers/specs/2026-08-06-fde-resume-redesign-design.md` - approved facts and design decisions.
- Create: `docs/superpowers/plans/2026-08-06-fde-resume-redesign.md` - this implementation plan.

### Task 1: Establish the content safety baseline

**Files:**
- Inspect: `index.html`
- Reference: `docs/superpowers/specs/2026-08-06-fde-resume-redesign-design.md`

- [ ] **Step 1: Run the stale-content scan**

Run:

```powershell
rg -n "5 年|至今|28 岁|已婚|Java 后端工程师|酷开 2021\.07 至今" index.html
```

Expected: matches for the old title, experience count, Coolkai end state, age, and marital status.

- [ ] **Step 2: Run the sensitive-content baseline scan**

Run:

```powershell
rg -n "身份证|身份证号码|工号|劳动合同|解除/终止" .
```

Expected: no matches in tracked repository content.

- [ ] **Step 3: Record the verified content constants before editing**

Use these exact facts in later tasks:

```text
慧咨环球（中国）信息技术有限公司南京分公司
Development / Software Engineer
2024-07-02 to 2026-05-27
CargoWise / C# / internal WinForm framework / Japan Customs declaration domain
Internal tools maintenance and upgrades

深圳市酷开网络科技股份有限公司
2021-07-12 to 2024-06-28

Dify / LangChain / LangGraph / RAG
Personal prototypes only; no production deployment

Claude Code / Codex / GitHub Copilot / Dify / OpenCode
Spec-driven Development
```

- [ ] **Step 4: Commit only if a tracked audit artifact was added**

No commit is required for this task because it changes no repository files.

### Task 2: Replace metadata and top-level information architecture

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update document metadata**

Replace title and social metadata with:

```html
<title>周志阳 · 高级后端工程师｜FDE 方向</title>
<meta name="description" content="周志阳，近 8 年企业级软件研发经验，专注 Java/C# 后端、复杂业务系统与 AI Agent/RAG 原型实践。" />
<meta property="og:title" content="周志阳 · 高级后端工程师｜FDE 方向" />
<meta property="og:description" content="企业级后端研发｜CargoWise｜AI Agent 原型｜Spec-driven Development" />
<meta property="og:type" content="website" />
```

- [ ] **Step 2: Replace navigation labels and anchors**

Use this exact section order:

```html
<ul class="nav-links" id="primary-nav">
  <li><a href="#profile">概览</a></li>
  <li><a href="#experience">经历</a></li>
  <li><a href="#capabilities">能力</a></li>
  <li><a href="#projects">项目</a></li>
  <li><a href="#works">作品</a></li>
</ul>
```

Add a mobile menu button with `aria-expanded="false"`, `aria-controls="primary-nav"`, and the accessible label “打开导航”。

- [ ] **Step 3: Replace the hero with the approved positioning**

Use:

```html
<div class="hero-copy">
  <p class="eyebrow">SENIOR BACKEND ENGINEER · FDE TRACK</p>
  <h1>周志阳</h1>
  <p class="hero-role">高级后端工程师｜FDE 方向</p>
  <p class="hero-summary">
    近 8 年企业级软件研发经验，覆盖高并发后端、CargoWise 货代业务与日本海关报关模块。
    正在将复杂业务系统经验延伸至 AI Agent、RAG 与前置交付场景。
  </p>
</div>
```

Keep the existing public portrait URL and public email, phone, location, and GitHub link. Do not render age or marital status.

- [ ] **Step 4: Add four evidence metrics**

Use:

```html
<div class="evidence-strip" aria-label="核心能力概览">
  <div><strong>近 8 年</strong><span>企业级软件研发</span></div>
  <div><strong>Java + C#</strong><span>跨技术栈工程能力</span></div>
  <div><strong>AI Agent</strong><span>个人原型实践</span></div>
  <div><strong>Spec-driven</strong><span>AI 协同开发流程</span></div>
</div>
```

- [ ] **Step 5: Run metadata and stale-content checks**

Run:

```powershell
rg -n "高级后端工程师｜FDE 方向|近 8 年|Spec-driven" index.html
rg -n "5 年|28 岁|已婚|酷开 2021\.07 至今" index.html
```

Expected: the first command finds the new content; the second command returns no matches.

- [ ] **Step 6: Commit the information architecture update**

```bash
git add index.html
git commit -m "feat: reposition resume for backend to FDE transition"
```

### Task 3: Rewrite work experience and projects with factual boundaries

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add the Global Wise experience as the newest entry**

Use the exact entry:

```html
<article class="timeline-item">
  <div class="timeline-date"><time datetime="2024-07-02">2024.07.02</time><span>—</span><time datetime="2026-05-27">2026.05.27</time></div>
  <div class="timeline-body">
    <h3>慧咨环球（中国）信息技术有限公司南京分公司</h3>
    <p class="timeline-role">Software Engineer · Development</p>
    <ul>
      <li>参与全球货代软件 CargoWise 的功能开发，使用 C# 与公司内部 WinForm 框架交付企业级桌面系统功能。</li>
      <li>负责日本海关报关业务相关模块，理解并实现复杂业务规则，参与问题定位与版本维护。</li>
      <li>维护和升级公司内部工具软件，持续改善存量系统的稳定性与可维护性。</li>
    </ul>
  </div>
</article>
```

- [ ] **Step 2: Correct the Coolkai dates**

Use `2021.07.12 — 2024.06.28`; keep only claims already present in the current resume for Wuling display, Xiaowei AI, and smart kindergarten work.

- [ ] **Step 3: Preserve the older employment history**

Keep Zhongdian Hongxin, Nanjing Yunxiangt​ong, and SI-TECH in reverse chronological order. Preserve existing project responsibilities and remove unsupported self-ranking language where evidence is absent.

- [ ] **Step 4: Add the CargoWise project first**

Use:

```html
<article class="project-item">
  <p class="project-index">01 / ENTERPRISE SOFTWARE</p>
  <h3>CargoWise 日本海关报关模块</h3>
  <p>面向国际货代业务的企业级桌面软件模块，负责日本海关报关相关功能开发及内部工具维护升级。</p>
  <p class="project-evidence">重点：复杂业务规则理解、存量系统维护、问题定位与版本演进。</p>
  <ul class="tech-list" aria-label="项目技术栈">
    <li>C#</li><li>WinForm</li><li>Internal Framework</li><li>CargoWise</li>
  </ul>
</article>
```

- [ ] **Step 5: Keep four established projects**

Retain Wuling light display, Xiaowei AI cloud, bulk SMS, and XPORTS. Renumber them 02-05 and keep their existing technologies and previously stated outcomes.

- [ ] **Step 6: Verify chronology and factual boundaries**

Run:

```powershell
rg -n "2024\.07\.02|2026\.05\.27|2021\.07\.12|2024\.06\.28|CargoWise|日本海关" index.html
rg -n "医疗|医院|HIS|EMR|LIS|驻场|验收交付|生产落地" index.html
```

Expected: all verified dates and CargoWise terms are present; the unsupported medical and delivery terms return no matches.

- [ ] **Step 7: Commit the experience rewrite**

```bash
git add index.html
git commit -m "feat: add CargoWise experience and correct employment timeline"
```

### Task 4: Replace skill percentages with an evidence-based capability matrix

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Remove percentage bars and proficiency percentages**

Delete `.skill-bar-wrap`, `.skill-bar-fill`, `--w`, animation code for skill bars, and labels such as “95%”.

- [ ] **Step 2: Add the four approved capability groups**

Use:

```html
<div class="capability-grid">
  <article class="capability-group">
    <h3>后端与业务系统</h3>
    <p>Java · Spring · Spring Cloud · C# · WinForm · Python · WebSocket · REST API</p>
  </article>
  <article class="capability-group">
    <h3>数据、部署与前端</h3>
    <p>MySQL · PostgreSQL · Redis · Elasticsearch · Docker · Linux · Nginx · Vue · TypeScript</p>
  </article>
  <article class="capability-group">
    <h3>AI 应用原型</h3>
    <p>Dify · LangChain · LangGraph · RAG · Prompt Engineering · Function Calling</p>
    <span class="scope-label">PERSONAL PROTOTYPE</span>
  </article>
  <article class="capability-group">
    <h3>AI 协同工程</h3>
    <p>Spec-driven Development · Claude Code · Codex · GitHub Copilot · OpenCode</p>
  </article>
</div>
```

- [ ] **Step 3: Add the FDE transferable-evidence block**

Use only:

```html
<ul class="transfer-list">
  <li>复杂行业业务规则理解与实现</li>
  <li>企业级存量系统维护升级</li>
  <li>Java、C#、Python 跨技术栈适应</li>
  <li>Spec 驱动与 Coding Agent 协同开发</li>
</ul>
```

- [ ] **Step 4: Verify the scope labels**

Run:

```powershell
rg -n "PERSONAL PROTOTYPE|Spec-driven Development|Claude Code|Codex|GitHub Copilot|OpenCode" index.html
rg -n "skill-bar|--w:|95%|精通" index.html
```

Expected: the first command finds all approved terms; the second command returns no matches.

- [ ] **Step 5: Commit the capability matrix**

```bash
git add index.html
git commit -m "feat: add evidence-based FDE capability matrix"
```

### Task 5: Implement the selected editorial visual system

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Define the approved color and type tokens**

Use:

```css
:root {
  --paper: #f7f5f0;
  --paper-deep: #ece8e0;
  --canvas: #e8e9e7;
  --ink: #1d1e1b;
  --ink-soft: #555750;
  --muted: #77736c;
  --line: #d2cec5;
  --accent: #bd3b2f;
  --evidence: #d49b35;
  --serif: "Noto Serif SC", "Songti SC", serif;
  --sans: "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  --mono: "JetBrains Mono", "Cascadia Mono", monospace;
  --content-width: 980px;
}
```

- [ ] **Step 2: Implement stable layout primitives**

Set the page to a centered paper surface on desktop, cap cards at `4px` radius, use a four-column evidence strip, a two-column profile section, 115px/1fr timeline rows, and two-column capability/project grids.

- [ ] **Step 3: Implement mobile behavior**

At `max-width: 760px`:

```css
.hero-layout,
.profile-grid,
.timeline-item,
.capability-grid,
.project-grid {
  grid-template-columns: 1fr;
}
.evidence-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.container { padding-inline: 22px; }
.hero-portrait { display: none; }
.nav-links {
  position: absolute;
  inset: 56px 0 auto;
  display: none;
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.nav-links.is-open { display: grid; }
```

- [ ] **Step 4: Add accessible menu and motion behavior**

Use:

```javascript
const menuButton = document.querySelector('[data-menu-button]');
const navLinks = document.getElementById('primary-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('is-open', !open);
});

navLinks?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton?.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('is-open');
  }
});
```

Preserve section highlighting and reveal logic, but skip reveal animation when `prefers-reduced-motion: reduce` matches.

- [ ] **Step 5: Add keyboard focus styles**

Use a visible `2px` accent outline with `3px` offset for links and buttons. Ensure the menu button has a text alternative and a minimum 40px square target.

- [ ] **Step 6: Commit the visual implementation**

```bash
git add index.html
git commit -m "style: implement printable editorial resume layout"
```

### Task 6: Add print styling and synchronize SPEC.md

**Files:**
- Modify: `index.html`
- Modify: `SPEC.md`

- [ ] **Step 1: Add print rules**

Use:

```css
@media print {
  @page { size: A4; margin: 12mm; }
  html { font-size: 10.5pt; }
  body, .page-shell { background: #fff; }
  nav, .menu-button, .reveal-decoration { display: none !important; }
  .resume-page { width: auto; max-width: none; margin: 0; box-shadow: none; }
  .reveal { opacity: 1 !important; transform: none !important; }
  .timeline-item, .project-item, .capability-group { break-inside: avoid; }
  a { color: inherit; text-decoration: none; }
}
```

- [ ] **Step 2: Rewrite SPEC.md to match the implementation**

The new specification must state:

```markdown
# 周志阳 - FDE 方向简历网站规范

- 定位：高级后端工程师｜FDE 方向
- 视觉：浅色证据型编辑排版
- 架构：单文件 HTML/CSS/Vanilla JS
- 内容原则：事实优先；个人 AI 原型明确标注；不包含敏感证明材料
- 核心板块：概览、经历、能力、项目、作品
- 响应式：桌面双栏、移动单栏、可访问移动导航
- 打印：A4 友好、隐藏交互元素、避免内容跨页截断
- 部署：GitHub Pages 零构建发布
```

Expand each bullet into the finalized palette, typography, layout, interaction, content boundaries, and verification requirements from the approved design document.

- [ ] **Step 3: Check spec and implementation terminology**

Run:

```powershell
rg -n "高级后端工程师｜FDE 方向|证据型编辑|PERSONAL PROTOTYPE|GitHub Pages" index.html SPEC.md
```

Expected: positioning, visual direction, prototype scope, and deployment all appear consistently.

- [ ] **Step 4: Commit print and documentation changes**

```bash
git add index.html SPEC.md
git commit -m "docs: align resume specification and print behavior"
```

### Task 7: Verify the complete public resume

**Files:**
- Verify: `index.html`
- Verify: `SPEC.md`
- Verify: `docs/superpowers/specs/2026-08-06-fde-resume-redesign-design.md`

- [ ] **Step 1: Run final stale and sensitive scans**

Run:

```powershell
rg -n "5 年|至今|28 岁|已婚|身份证|身份证号码|工号|劳动合同" index.html SPEC.md docs
```

Expected: no matches.

- [ ] **Step 2: Run unsupported-claim scan**

Run:

```powershell
rg -n "医疗交付专家|医院系统集成经验|HIS|EMR|LIS|驻场交付|生产落地" index.html
```

Expected: no matches.

- [ ] **Step 3: Validate HTML**

Run:

```bash
npx --yes html-validate index.html
```

Expected: exit code 0 with no validation errors.

- [ ] **Step 4: Start a static server**

Run:

```bash
npx --yes serve . -l 4173
```

Expected: the site is available at `http://localhost:4173`.

- [ ] **Step 5: Verify desktop and mobile layouts**

Inspect at `1440x1000`, `1024x768`, `390x844`, and `360x800`. Confirm no horizontal overflow, text overlap, clipped controls, blank portrait, or hidden experience/project content. Confirm the mobile menu opens, closes after link selection, and exposes every navigation item.

- [ ] **Step 6: Verify interaction and accessibility**

Confirm active navigation updates while scrolling, email/phone/GitHub links use the correct targets, keyboard focus is visible, reduced-motion mode removes nonessential animation, and the browser console has no errors.

- [ ] **Step 7: Verify print preview**

Open print preview in A4 portrait. Confirm navigation is hidden, all content is visible, colors remain legible, and timeline/project blocks do not split incoherently across pages.

- [ ] **Step 8: Inspect the branch diff**

Run:

```bash
git diff main...HEAD -- index.html SPEC.md docs/superpowers
```

Expected: only the approved design document, implementation plan, `index.html`, and `SPEC.md` are changed.

- [ ] **Step 9: Commit any verification-only fixes**

If verification required corrections, stage only `index.html` and `SPEC.md`, then commit:

```bash
git add index.html SPEC.md
git commit -m "fix: resolve resume verification findings"
```
