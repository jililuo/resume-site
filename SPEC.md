# 周志阳 - 个人简历网站设计规范

## 1. Concept & Vision

一个展现后端工程师技术底蕴与职业深度的个人主页。视觉上以深邃的暗色调为基底，辅以克制的霓虹蓝/青绿高光，营造"代码编辑器 × 科技感"的专业氛围。交互追求流畅克制——不炫技但处处有回应，给访客一种"这个人很靠谱"的感觉。

## 2. Design Language

**Aesthetic direction**: 深色科技风 —— 受 VS Code Dark+ / Linear App 启发，极简但不冷淡，高信息密度但有呼吸感。

**Color Palette**:
- Background primary: `#0a0e17`
- Background secondary: `#0f1623`
- Background card: `#131b2e`
- Border subtle: `#1e2a40`
- Accent primary (Cyan): `#00d4ff`
- Accent secondary (Blue): `#4f8ef7`
- Accent warm (Purple): `#7c5af0`
- Text primary: `#e8edf5`
- Text secondary: `#8892a4`
- Text muted: `#4a5568`
- Success/tag: `#10b981`

**Typography**:
- 标题: `Syne` (Google Fonts) — 几何感强，科技气质
- 正文: `DM Sans` (Google Fonts) — 现代、清晰
- 代码/标签: `JetBrains Mono` (Google Fonts) — 等宽、精确
- 字号体系: 64/48/32/24/18/16/14/12px

**Spatial System**:
- Base unit: 8px
- Section padding: 120px vertical
- Container max-width: 1100px
- Card padding: 32px
- Gap between cards: 24px

**Motion Philosophy**:
- 页面加载: 逐字符打字机效果显示名字，subtle fade-up
- 滚动触发: Intersection Observer，staggered fade-up-in（每项延迟 80ms）
- 悬浮: 微妙的 scale(1.02) + glow shadow + border 高光
- 背景: 缓慢移动的网格线 / 粒子光点（subtle，不抢焦点）
- 时间线: 滚动时线条从顶部向下生长的动画
- 技能条: 数字从 0 滚动到目标值的计数动画

**Visual Assets**:
- Icons: Lucide Icons（CDN inline SVG）
- 头像: 用户提供的 URL 保留
- 装饰: CSS 网格背景、渐变光晕（radial-gradient halos）
- 无 emoji，全用 SVG icon

## 3. Layout & Structure

```
[Sticky Nav] — Logo + 锚点链接，滚动时背景模糊
[Hero] — 全屏，居中：头像 + 姓名（打字机）+ Title + 一句话简介 + 社交图标
[About] — 左文右数据卡片布局
[Skills] — 分类标签云 + 熟练度进度条
[Experience] — 左侧时间线（PC）/ 垂直列表（Mobile）
[Projects] — 卡片网格（2列），hover 展开详情
[Footer] — 极简，联系方式 + 版权
```

**Responsive Strategy**:
- Desktop (>1024px): 双栏布局，时间线左侧
- Tablet (768-1024px): 单栏，卡片2列
- Mobile (<768px): 全单栏，时间线简化为垂直卡片

## 4. Features & Interactions

**Hero Section**:
- 头像带渐变边框光环，微呼吸动画
- 姓名打字机效果（光标闪烁）
- 鼠标移动时背景网格产生微妙视差
- 向下滚动箭头 bounce 动画

**Skills Section**:
- 技能分三类：语言、框架、数据库
- 每个技能带熟练度进度条（动画填充）
- 框架/工具以 tag pill 形式展示，带 icon
- 熟练度数字计数动画（0 → %）

**Experience Timeline**:
- 垂直时间线，线条随滚动生长
- 每段经历卡片悬浮高亮
- 显示公司名、职位、时间段、关键成果

**Projects Section**:
- 卡片带项目名、简介、技术栈 tag
- Hover 显示项目难点/成果
- 技术栈以 pill tag 展示

**Nav**:
- 固定顶部，滚动后背景毛玻璃效果
- 当前 section 对应链接高亮
- 平滑滚动到锚点

## 5. Component Inventory

**NavBar**: 固定顶部，高度 64px，logo 左侧 + 导航链接右侧，PC 端展示，Mobile 端 hamburger
**HeroSection**: 全屏容器，居中 flex 布局，粒子/网格背景
**SectionTitle**: 大号标题 + 下划线渐变装饰
**SkillCategory**: 标题 + SkillBar 数组
**SkillBar**: 标签名 + 动画进度条 + 百分比
**TimelineItem**: 时间线圆点 + 连接线 + 卡片内容
**ProjectCard**: 标题 + 描述 + TechPill 数组 + hover overlay
**TechPill**: 小圆角 tag，带浅色背景
**SocialIcon**: SVG 图标，hover 上浮 + 主题色

## 6. Technical Approach

- **Framework**: 纯 HTML5 + CSS3 + Vanilla JS（零依赖，单文件可运行）
- **CSS**: CSS Custom Properties 管理主题变量，CSS Grid + Flexbox 布局
- **JS**: Intersection Observer 实现滚动动画，requestAnimationFrame 做计数动画
- **字体**: Google Fonts CDN
- **图标**: Lucide Icons CDN inline SVG
- **构建**: 无需构建，直接用 `npx serve` 或任意静态服务器
- **部署**: 构建 dist 后上传云服务器 or 使用 Vercel/Netlify 一键部署