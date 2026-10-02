# 周志阳 · Java 后端与 AI 应用开发

静态在线简历，HTML + CSS + 原生 JavaScript，无依赖、无构建步骤。

## 本地预览

在仓库根目录运行：

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 http://127.0.0.1:4173/ 。

## 内容与 PDF

- `index.html` 包含网页完整版和投递精简文案，屏幕及 A4 样式位于 `assets/resume.css`。
- 网页保留六个项目的原文背景、职责与亮点，以及专业技能和个人优势；工作说明只展开慧咨、创维，运享通和思特奇仅保留公司、部门岗位与时间。
- `.web-only` 内容只在网页显示；`.print-only` 内容只在打印显示。公共信息、项目标题和最近两段工作说明共用。修改前四个项目的事实和指标时，同时检查完整与精简文案。
- 网站只保留“下载 PDF”，直接下载 `output/pdf/zhou-zhiyang-resume.pdf`，不显示篇幅提示或版本差异说明。PDF 仅保留前四个项目，不包含个人优势，当前版本控制在三页内。
- PDF 中运享通和思特奇各为一行，依次显示公司、部门岗位与时间。
- 修改正文或样式后，用 Chrome 打开网站，通过浏览器菜单或 Cmd+P 打印，选择 A4、100% 缩放、开启背景图形、关闭浏览器页眉页脚，另存到上述 PDF 路径。打印边距使用 CSS 默认值。
- Chrome DevTools Protocol 导出时，清除媒体模拟覆盖，使用 `Page.printToPDF`，参数为 `printBackground: true, preferCSSPageSize: true, displayHeaderFooter: false`。
- 更新 PDF 后检查页数，并渲染三页检查缺字、分页和裁切；临时检查产物放入已忽略的 `tmp/`。
- 部署时同时包含 HTML、CSS、JS、头像及 PDF；无需改变现有 CNAME。

详细内容与排版规范见 `SPEC.md`。
