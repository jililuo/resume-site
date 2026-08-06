# AI 应用方向简历重构实施计划

> 日期：2026-08-06  
> 分支：`codex/fde-resume-redesign`

## 目标

在零构建 GitHub Pages 架构下重构单页简历，更新真实工作经历，保留高级后端工程能力，并用项目证据呈现 AI 原生应用与 Code Agent 开发能力。

页面只使用可举证的项目和内部实践，不展示未落地个人原型，不添加医疗、医院驻场、HIS/EMR/LIS 对接等未具备经历。

## 变更范围

- `index.html`
- `SPEC.md`
- `docs/superpowers/specs/2026-08-06-fde-resume-redesign-design.md`
- 本实施计划

## 任务 1：更新职业事实

- 慧咨环球任职时间：2024-07-02 至 2026-05-27
- 慧咨岗位：Development / Software Engineer
- CargoWise 日本海关报关模块、C#、公司内部框架和内部桌面应用系统
- 慧咨内部工具中的定制 Agent 开发
- 酷开任职结束时间：2024-06-28
- 移除鸿信工作经历
- 移除年龄、婚姻状态及全部敏感证明信息

## 任务 2：收紧职业概览

职业概览保持单段，覆盖：

- 计算机科学与技术本科
- 近 8 年企业级软件研发
- Java、C#、Python 后端与复杂业务系统
- 小维 AI 的知识图谱、Dify 工作流、Milvus 内部知识库 RAG
- 慧咨内部工具的定制 Agent 开发

不设置 FDE 可迁移能力面板，不使用 WinForm 或个人原型实践表述。

## 任务 3：重组能力矩阵

四组能力固定为：

1. 后端与业务系统  
   Java、Spring、Spring Cloud、C#、Python、WebSocket、REST API
2. 数据、部署与前端  
   MySQL、PostgreSQL、Redis、Elasticsearch、Docker、Linux、Nginx、Vue、TypeScript
3. AI 原生应用相关技术  
   Dify、LangChain、LangGraph、Milvus、Neo4j、RAG 调优
4. Code Agent 技术  
   上下文管理、记忆系统、Hooks 系统、MCP 协议接入、Skill 系统、多 Agent 协同、Pi 框架定制开发

不显示技能百分比、个人原型标签或工具品牌罗列面板。

## 任务 4：更新项目证据

### CargoWise 日本海关报关模块

- 复杂货代和海关报关业务规则
- C# 与公司内部框架
- 存量系统维护、问题定位、版本演进和内部工具升级

### 创维小维 AI 云平台

- 知识图谱项目开发
- Dify 业务工作流
- Milvus 向量数据库
- 内部知识库 RAG 系统搭建与使用
- Neo4j、Elasticsearch 等相关组件

其余真实项目保留，不增加无法举证的量化结果。

## 任务 5：精简页面结构

页面顺序：

1. 首屏
2. 职业概览
3. 工作经历
4. 能力矩阵
5. 核心项目
6. 页脚

移除“实践与作品”模块和个人仓库地址。头像在桌面首屏右侧居中，移动端自然折叠。

## 任务 6：同步响应式与打印样式

- 桌面能力矩阵采用 2×2 布局
- 移动端折叠为单列
- 长技术词条允许自然换行
- 页面无横向溢出或文字遮挡
- 打印时隐藏导航和动画，使用白色背景并展开全部内容

## 任务 7：验证

运行：

```powershell
npx --yes html-validate index.html
```

检查以下视口：

- 1614×986
- 390×844
- 360×800

验收项：

- 四段工作经历、五个核心项目、三项首屏证据和四组能力完整
- 头像加载成功
- 桌面与移动端无横向溢出
- 浏览器控制台无错误
- 打印导航隐藏、正文可见、背景为白色
- 页面不出现 WinForm、个人原型、Spec-Driven、FDE 可迁移面板或“实践与作品”
- 页面与仓库不包含身份证号、工号或离职证明材料
- `index.html`、`SPEC.md`、设计文档与本计划口径一致
