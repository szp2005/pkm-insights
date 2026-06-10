_作为亚马逊联盟成员，我们通过符合条件的购买赚取收益。这篇文章可能包含联盟链接。_

# Zotero 与 Mendeley 在 Obsidian 集成方面的 2026 年比较

> **快速回答：** 对于 Obsidian 用户来说，Zotero 是无可争议的冠军，因为它拥有开源架构、强大的本地存储选项以及卓越的社区插件（如 Zotero Integration 和 Citations）。Mendeley 提供了精致的界面，但由于其封闭的生态系统、加密的本地数据库以及对纯云同步机制的依赖，它在 Obsidian 集成方面表现不佳。

在 Obsidian 中构建一个无缝的学术工作流需要一个能够与纯文本、本地文件和第三方插件良好协作的参考管理器。多年来，参考管理领域的两大巨头一直是 Zotero 和 Mendeley。两者都擅长捕获引文、组织 PDF 以及为传统文字处理器格式化参考文献。

然而，当您将个人知识管理 (PKM) 工具 Obsidian 引入其中时，要求会发生显著变化。您不再仅仅需要一个存储 PDF 的地方；您需要一个能够提取注释、生成 Markdown 文献笔记并与您更广泛的知识图谱无缝链接的系统。

这篇全面的比较文章将详细分析 Zotero 和 Mendeley 如何处理 Obsidian 集成，考察插件生态系统、PDF 注释工作流和长期数据可移植性。

要获得完整笔记记录工作流，请将您的参考管理器连接到 [Obsidian 学术论文工作流](/zh-cn/posts/obsidian-academic-workflow-for-thesis-2026/)，这样引文、文献笔记和章节草稿就不会分系统存储。

## 参考管理器概览

在深入了解 Obsidian 特定的工作流之前，了解这两种应用程序的核心理念和架构至关重要，因为这些基本差异决定了它们与外部工具的集成程度。

### 1. [Zotero](https://www.amazon.com/s?k=Zotero&tag=pkm.notes-automate-20)

**最适合：** 学术研究人员、开源倡导者和高级 Obsidian 用户。
**价格：** 免费（开源），云存储定价 2GB 起每年 20 美元。
**评分：** 4.8/5

Zotero 是一款免费的开源参考管理软件，由 Corporation for Digital Scholarship 开发。其主要优势在于其令人难以置信的灵活性和社区驱动的生态系统。由于它是开源的，开发人员可以轻松构建扩展其功能的插件，从而实现与基于 Markdown 的编辑器的深度可定制连接。Zotero 将数据本地存储在可访问的 SQLite 数据库中，使其与本地优先工具高度兼容。

**优点：**
- 完全开源，带有可访问的本地数据库
- 无与伦比的第三方插件生态系统（Better BibTeX, Zotfile）
- 从几乎任何网页源提取高质量元数据
- 优秀的内置 PDF 阅读器，具有注释提取功能

**缺点：**
- 界面与现代替代品相比感觉略显过时
- 免费云存储限制为 300MB（但本地/WebDAV 同步免费）

### 2. [Mendeley Reference Manager](https://www.amazon.com/s?k=Mendeley%20Reference%20Manager&tag=pkm.notes-automate-20)

**最适合：** 协作实验室环境和 Elsevier 生态系统用户。
**价格：** 免费，提供机构计划。
**评分：** 3.5/5（用于 Obsidian）

Mendeley 由学术出版巨头 Elsevier 所有，在弃用 Mendeley Desktop 转而使用基于云的 Mendeley Reference Manager 后，经历了一次巨大的转变。虽然它提供了非常时尚、现代的界面和出色的研究团队协作功能，但其向封闭的云优先架构的转变严重阻碍了其互操作性。本地数据库现在已加密，使得第三方工具难以直接与您的图书馆交互。

**优点：**
- 现代、简洁、直观的用户界面
- 与 Elsevier 庞大的出版物数据库深度集成
- 出色的内置工具，可与研究小组共享论文
- 慷慨的 2GB 免费云存储空间

**缺点：**
- 封闭生态系统，带有加密的本地数据库
- 对第三方 Markdown 集成支持不佳
- 停用了本地文件管理工具（不再有自动 PDF 重命名）

## Obsidian 插件生态系统

将参考管理器与 Obsidian 集成的决定性因素是可用桥接插件的质量和可靠性。这正是两个平台之间架构差异变得非常明显的地方。

### Zotero 的集成武器库

Zotero 的开放架构使 Obsidian 社区能够构建极其强大、自动化的工作流。

1.  **Zotero Integration (前身为 Zotero Roam)：** 这是金标准插件。它直接连接到 Zotero 的本地数据库（或通过 Better BibTeX 插件）将引文、摘要和您的 PDF 亮点直接导入 Obsidian。它使用强大的模板（Nunjucks）精确地按照您想要的方式格式化您的文献笔记。
2.  **Citations 插件：** 一种更轻量级的替代方案，它读取由 Better BibTeX 持续导出的 `.bib` 或 `.json` 文件。它速度极快，非常适合在写作时简单地将 Markdown 引文（例如，`[@smith2023]`）插入到您的笔记中。
3.  **Better BibTeX (Zotero 插件)：** 虽然它本身不是 Obsidian 插件，但这个 Zotero 附加组件是使 Obsidian 连接工作的引擎。它生成稳定、可预测的引文键，并在后台不断更新您的导出文件。

### Mendeley 的集成困境

将 Mendeley 与 Obsidian 集成是一项需要妥协的工作。由于 Elsevier 在较新的 Mendeley Reference Manager 中加密了本地数据库，Obsidian 插件无法直接读取您的本地数据。

1.  **BibTeX 导出变通方法：** 将 Mendeley 数据导入 Obsidian 的主要方法是手动将您的图书馆导出为 `.bib` 文件，或设置一个同步脚本。然后，您可以使用 Obsidian Citations 插件来读取此文件。然而，这是一条单向道；它不能可靠地导入您的 PDF 注释或亮点。
2.  **社区 API 集成：** 一些开发人员尝试构建使用 Mendeley Web API 获取参考文献的插件。这些插件通常速度慢，需要复杂的身份验证设置，并且在 Elsevier 更新其 API 端点时容易中断。
3.  **本地文件控制的丧失：** Mendeley 不再允许您轻松管理您的 PDF 在硬盘上的本地存储位置。这意味着您无法使用 Obsidian 直接链接到您 vault 中的物理 PDF 文件。

## PDF 注释工作流

学术 PKM 的一个关键部分是阅读论文、高亮文本、添加笔记并将这些见解传输到您的知识图谱中。

### Zotero 路径

Zotero 具有内置的带标签 PDF 阅读器。当您高亮文本并添加便笺时，Zotero 会保存这些注释。

使用 Obsidian Zotero Integration 插件，您可以在 Obsidian 中触发“导入笔记”命令。该插件将获取论文的元数据，拉取您的所有亮点，抓取您裁剪的任何图像，并将其格式化为干净的 Markdown 文档。如果您在 Zotero 中使用了颜色编码的高亮（例如，黄色表示方法，红色表示评论），您可以将这些颜色映射到 Obsidian 中的特定 Markdown 格式或标注块。这是一个无缝且高度可定制的管道。

### Mendeley 路径

Mendeley 也拥有出色的内置 PDF 阅读器，可以说比 Zotero 的默认阅读器更流畅。它能很好地处理高亮、便笺和跨设备同步。

当您想将这些注释从 Mendeley 导出到 Obsidian 时，问题就出现了。由于数据被锁定在云端或在本地加密，您无法使用自动化的 Obsidian 插件来拉取您的亮点。您被迫手动将 Mendeley 中的注释导出为文本文件，然后复制粘贴到 Obsidian 笔记中。这种手动摩擦挫败了集成 PKM 系统的目的。

## 数据所有权和未来保障

Obsidian 的核心理念是“本地优先，纯文本”。您永远拥有您的数据。在选择参考管理器时，考虑它是否符合此理念至关重要。

Zotero 与 Obsidian 完美契合。您的数据库存在于您的硬盘上。您可以使用 Zotfile 等插件（或 Zotero 的内置文件管理功能）自动重命名您的 PDF 并将其存储在特定文件夹中——甚至直接存储在您的 Obsidian vault 中。如果 Zotero 明天停止存在，您的 PDF 和导出的 `.bib` 文件仍然完全可访问。

Mendeley 完全朝着相反的方向发展。通过强制用户使用依赖于云的基础设施并加密本地缓存，Elsevier 将您的数据锁定在其生态系统中。如果您失去互联网访问，您的工作流就会降级。如果您将来想从 Mendeley 迁移，提取您组织好的 PDF 和注释是一个众所周知的困难过程。

## 设置工作流的实用建议

如果您致力于在 Obsidian 中构建研究工作流，那么前进的道路是清晰的。以下是构建健壮、可靠系统的方法：

1.  **安装 Zotero：** 下载开源客户端。
2.  **添加 Better BibTeX：** 立即安装此 Zotero 插件。进入其首选项并设置您的引文键格式（例如，`[auth:lower][year]`）。将其设置为自动将您的图书馆 `.json` 导出文件更新到您的 Obsidian vault 中。
3.  **配置文件管理：** 将 Zotero 设置为使用标准格式（作者 - 年份 - 标题）重命名您附加的 PDF，并将其存储在单个本地目录中。
4.  **在 Obsidian 中安装 Zotero Integration：** 安装此社区插件。将其指向您的 Zotero 数据库并配置一个 Nunjucks 模板。首先保持您的模板简单：标题、作者、年份、摘要以及一个打印出您的 PDF 注释的循环。
5.  **养成阅读习惯：** 完全在 Zotero 的原生 PDF 阅读器中阅读和注释。完成后，打开 Obsidian，触发导入命令，并观察您的 Markdown 文献笔记自动生成。

## 结论

在评估 Zotero 与 Mendeley 在 Obsidian 集成方面时，比较结果明显一边倒。Zotero 的开源性质、强大的本地数据库和专门的社区带来了感觉像原生功能的集成工具。它允许引文和注释的自动化、无缝传输直接进入您的 Markdown 笔记。

Mendeley 仍然是传统学术写作和团队协作的强大工具，但其封闭的生态系统和加密架构使其与 Obsidian 用户所需的本地优先、高度连接的工作流根本不兼容。对于 PKM 和笔记制作，Zotero 是必不可少的选择。

## 常见问题

### 我可以将现有的 Mendeley 图书馆迁移到 Zotero 吗？
是的。Zotero 有一个专门针对 Mendeley 的内置导入器。由于 Mendeley 加密了其数据库，您需要遵循 Zotero 的具体说明，这通常涉及通过 Zotero 导入器登录您的 Mendeley 在线帐户以绕过本地加密。

### 我需要为 Zotero 存储付费才能在 Obsidian 中使用它吗？
不需要。只有当您希望 Zotero 托管您的 PDF 文件以在设备之间同步时，才需要为 Zotero 的云存储付费。您的元数据始终免费同步。如果您想要免费的 PDF 同步，您可以将 Zotero 配置为通过任何标准 WebDAV 服务同步您的附件文件，或者简单地将您的 Zotero PDF 文件夹存储在 Dropbox 或 Google Drive 等云盘中。

### Citations 插件和 Zotero Integration 有什么区别？
Citations 插件主要用于搜索您的图书馆并在写作时快速插入 Markdown 引文键。Zotero Integration 是一个更重、更强大的工具，旨在导入整个元数据块并提取 PDF 注释以创建全面的文献笔记。许多用户同时运行这两个插件。

### Mendeley 是否为 Obsidian 开发人员提供任何 API 访问？
Mendeley 确实有 API，但它受到严格限制，需要复杂的 OAuth 身份验证工作流，并且经常以破坏第三方工具的方式进行更新。由于这些开发障碍，目前没有可靠、持久的 Obsidian 插件适用于现代 Mendeley Reference Manager。
```
The translation of the main body and FAQs is complete, including internal link remapping and preservation of technical terms.
I will now update the todo list.
---
image: "/og/zotero-vs-mendeley-for-obsidian-integration-comparison.webp"
evidenceImage:
  src: "/media/article-media/notebook-writing.jpg"
  alt: "研究笔记和论文审阅设置"
  caption: "工作桌上的手写笔记，用于说明研究笔记记录和审阅习惯。"
  credit: "cottonbro studio / Pexels"
  sourceUrl: "https://www.pexels.com/photo/person-writing-on-a-notebook-5185080/"
editorSummary: >-
  Zotero Mendeley Obsidian 集成至关重要，因为 Zotero 与 Mendeley 在 Obsidian
  集成方面的 2026 年比较，将 Zotero 与 Mendeley 在 Obsidian
  集成方面的 2026 年比较，从一个松散的想法转变为一个具体的实际操作决策。我将最密切地关注“参考管理器概览”部分，因为该细节会影响设置能否经受住真实知识系统的考验。需要注意的是，在将其标准化之前，先在一个有代表性的项目上试用该建议；插件设置、文件结构、硬件限制或团队习惯可能会迅速改变结果。小规模测试使建议更容易验证，并防止看起来整洁的设置在以后造成清理工作。
authorNote: >-
  我将在一个活跃的知识系统中测试这一点，将 Zotero 与 Mendeley 在 Obsidian
  集成方面的 2026 年比较应用于实际任务，而不是一次性迁移所有内容。陷阱是假设示例与您自己的命名约定、设备或审阅节奏相匹配。我将记录一周内的摩擦点，然后只保留那些减少重复手动工作的部分。
manualRelated:
  - title: "Obsidian 学术工作流 2026：完整的论文设置指南"
    url: "/zh-cn/posts/obsidian-academic-workflow-for-thesis-2026/"
  - title: "Mendeley 与 Zotero 在 Obsidian 集成方面的 2026 年：终极评测"
    url: "/zh-cn/posts/mendeley-vs-zotero-obsidian-integration-2026/"
  - title: "Logseq 与 Obsidian 的第二大脑：2026 年终极比较"
    url: "/zh-cn/posts/logseq-vs-obsidian-for-second-brain/"
title: "Zotero 与 Mendeley 在 Obsidian 集成方面的 2026 年比较"
description: "深入了解 Zotero 或 Mendeley 哪一个能为您的学术工作流提供最佳 Obsidian 集成，内含插件、同步和 PDF 提取的详细比较。"
pubDate: "2026-05-07"
author: "Alex Chen"
tags: ["obsidian", "reference management", "academic workflow", "pkm"]
slug: "zotero-vs-mendeley-for-obsidian-integration-comparison"
type: "review"
---

_作为亚马逊联盟成员，我们通过符合条件的购买赚取收益。这篇文章可能包含联盟链接。_

# Zotero 与 Mendeley 在 Obsidian 集成方面的 2026 年比较

> **快速回答：** 对于 Obsidian 用户来说，Zotero 是无可争议的冠军，因为它拥有开源架构、强大的本地存储选项以及卓越的社区插件（如 Zotero Integration 和 Citations）。Mendeley 提供了精致的界面，但由于其封闭的生态系统、加密的本地数据库以及对纯云同步机制的依赖，它在 Obsidian 集成方面表现不佳。

在 Obsidian 中构建一个无缝的学术工作流需要一个能够与纯文本、本地文件和第三方插件良好协作的参考管理器。多年来，参考管理领域的两大巨头一直是 Zotero 和 Mendeley。两者都擅长捕获引文、组织 PDF 以及为传统文字处理器格式化参考文献。

然而，当您将个人知识管理 (PKM) 工具 Obsidian 引入其中时，要求会发生显著变化。您不再仅仅需要一个存储 PDF 的地方；您需要一个能够提取注释、生成 Markdown 文献笔记并与您更广泛的知识图谱无缝链接的系统。

这篇全面的比较文章将详细分析 Zotero 和 Mendeley 如何处理 Obsidian 集成，考察插件生态系统、PDF 注释工作流和长期数据可移植性。

要获得完整笔记记录工作流，请将您的参考管理器连接到 [Obsidian 学术论文工作流](/zh-cn/posts/obsidian-academic-workflow-for-thesis-2026/)，这样引文、文献笔记和章节草稿就不会分系统存储。

## 参考管理器概览

在深入了解 Obsidian 特定的工作流之前，了解这两种应用程序的核心理念和架构至关重要，因为这些基本差异决定了它们与外部工具的集成程度。

### 1. [Zotero](https://www.amazon.com/s?k=Zotero&tag=pkm.notes-automate-20)

**最适合：** 学术研究人员、开源倡导者和高级 Obsidian 用户。
**价格：** 免费（开源），云存储定价 2GB 起每年 20 美元。
**评分：** 4.8/5

Zotero 是一款免费的开源参考管理软件，由 Corporation for Digital Scholarship 开发。其主要优势在于其令人难以置信的灵活性和社区驱动的生态系统。由于它是开源的，开发人员可以轻松构建扩展其功能的插件，从而实现与基于 Markdown 的编辑器的深度可定制连接。Zotero 将数据本地存储在可访问的 SQLite 数据库中，使其与本地优先工具高度兼容。

**优点：**
- 完全开源，带有可访问的本地数据库
- 无与伦比的第三方插件生态系统（Better BibTeX, Zotfile）
- 从几乎任何网页源提取高质量元数据
- 优秀的内置 PDF 阅读器，具有注释提取功能

**缺点：**
- 界面与现代替代品相比感觉略显过时
- 免费云存储限制为 300MB（但本地/WebDAV 同步免费）

### 2. [Mendeley Reference Manager](https://www.amazon.com/s?k=Mendeley%20Reference%20Manager&tag=pkm.notes-automate-20)

**最适合：** 协作实验室环境和 Elsevier 生态系统用户。
**价格：** 免费，提供机构计划。
**评分：** 3.5/5（用于 Obsidian）

Mendeley 由学术出版巨头 Elsevier 所有，在弃用 Mendeley Desktop 转而使用基于云的 Mendeley Reference Manager 后，经历了一次巨大的转变。虽然它提供了非常时尚、现代的界面和出色的研究团队协作功能，但其向封闭的云优先架构的转变严重阻碍了其互操作性。本地数据库现在已加密，使得第三方工具难以直接与您的图书馆交互。

**优点：**
- 现代、简洁、直观的用户界面
- 与 Elsevier 庞大的出版物数据库深度集成
- 出色的内置工具，可与研究小组共享论文
- 慷慨的 2GB 免费云存储空间

**缺点：**
- 封闭生态系统，带有加密的本地数据库
- 对第三方 Markdown 集成支持不佳
- 停用了本地文件管理工具（不再有自动 PDF 重命名）

## Obsidian 插件生态系统

将参考管理器与 Obsidian 集成的决定性因素是可用桥接插件的质量和可靠性。这正是两个平台之间架构差异变得非常明显的地方。

### Zotero 的集成武器库

Zotero 的开放架构使 Obsidian 社区能够构建极其强大、自动化的工作流。

1.  **Zotero Integration (前身为 Zotero Roam)：** 这是金标准插件。它直接连接到 Zotero 的本地数据库（或通过 Better BibTeX 插件）将引文、摘要和您的 PDF 亮点直接导入 Obsidian。它使用强大的模板（Nunjucks）精确地按照您想要的方式格式化您的文献笔记。
2.  **Citations 插件：** 一种更轻量级的替代方案，它读取由 Better BibTeX 持续导出的 `.bib` 或 `.json` 文件。它速度极快，非常适合在写作时简单地将 Markdown 引文（例如，`[@smith2023]`）插入到您的笔记中。
3.  **Better BibTeX (Zotero 插件)：** 虽然它本身不是 Obsidian 插件，但这个 Zotero 附加组件是使 Obsidian 连接工作的引擎。它生成稳定、可预测的引文键，并在后台不断更新您的导出文件。

### Mendeley 的集成困境

将 Mendeley 与 Obsidian 集成是一项需要妥协的工作。由于 Elsevier 在较新的 Mendeley Reference Manager 中加密了本地数据库，Obsidian 插件无法直接读取您的本地数据。

1.  **BibTeX 导出变通方法：** 将 Mendeley 数据导入 Obsidian 的主要方法是手动将您的图书馆导出为 `.bib` 文件，或设置一个同步脚本。然后，您可以使用 Obsidian Citations 插件来读取此文件。然而，这是一条单向道；它不能可靠地导入您的 PDF 注释或亮点。
2.  **社区 API 集成：** 一些开发人员尝试构建使用 Mendeley Web API 获取参考文献的插件。这些插件通常速度慢，需要复杂的身份验证设置，并且在 Elsevier 更新其 API 端点时容易中断。
3.  **本地文件控制的丧失：** Mendeley 不再允许您轻松管理您的 PDF 在硬盘上的本地存储位置。这意味着您无法使用 Obsidian 直接链接到您 vault 中的物理 PDF 文件。

## PDF 注释工作流

学术 PKM 的一个关键部分是阅读论文、高亮文本、添加笔记并将这些见解传输到您的知识图谱中。

### Zotero 路径

Zotero 具有内置的带标签 PDF 阅读器。当您高亮文本并添加便笺时，Zotero 会保存这些注释。

使用 Obsidian Zotero Integration 插件，您可以在 Obsidian 中触发“导入笔记”命令。该插件将获取论文的元数据，拉取您的所有亮点，抓取您裁剪的任何图像，并将其格式化为干净的 Markdown 文档。如果您在 Zotero 中使用了颜色编码的高亮（例如，黄色表示方法，红色表示评论），您可以将这些颜色映射到 Obsidian 中的特定 Markdown 格式或标注块。这是一个无缝且高度可定制的管道。

### Mendeley 路径

Mendeley 也拥有出色的内置 PDF 阅读器，可以说比 Zotero 的默认阅读器更流畅。它能很好地处理高亮、便笺和跨设备同步。

当您想将这些注释从 Mendeley 导出到 Obsidian 时，问题就出现了。由于数据被锁定在云端或在本地加密，您无法使用自动化的 Obsidian 插件来拉取您的亮点。您被迫手动将 Mendeley 中的注释导出为文本文件，然后复制粘贴到 Obsidian 笔记中。这种手动摩擦挫败了集成 PKM 系统的目的。

## 数据所有权和未来保障

Obsidian 的核心理念是“本地优先，纯文本”。您永远拥有您的数据。在选择参考管理器时，考虑它是否符合此理念至关重要。

Zotero 与 Obsidian 完美契合。您的数据库存在于您的硬盘上。您可以使用 Zotfile 等插件（或 Zotero 的内置文件管理功能）自动重命名您的 PDF 并将其存储在特定文件夹中——甚至直接存储在您的 Obsidian vault 中。如果 Zotero 明天停止存在，您的 PDF 和导出的 `.bib` 文件仍然完全可访问。

Mendeley 完全朝着相反的方向发展。通过强制用户使用依赖于云的基础设施并加密本地缓存，Elsevier 将您的数据锁定在其生态系统中。如果您失去互联网访问，您的工作流就会降级。如果您将来想从 Mendeley 迁移，提取您组织好的 PDF 和注释是一个众所周知的困难过程。

## 设置工作流的实用建议

如果您致力于在 Obsidian 中构建研究工作流，那么前进的道路是清晰的。以下是构建健壮、可靠系统的方法：

1.  **安装 Zotero：** 下载开源客户端。
2.  **添加 Better BibTeX：** 立即安装此 Zotero 插件。进入其首选项并设置您的引文键格式（例如，`[auth:lower][year]`）。将其设置为自动将您的图书馆 `.json` 导出文件更新到您的 Obsidian vault 中。
3.  **配置文件管理：** 将 Zotero 设置为使用标准格式（作者 - 年份 - 标题）重命名您附加的 PDF，并将其存储在单个本地目录中。
4.  **在 Obsidian 中安装 Zotero Integration：** 安装此社区插件。将其指向您的 Zotero 数据库并配置一个 Nunjucks 模板。首先保持您的模板简单：标题、作者、年份、摘要以及一个打印出您的 PDF 注释的循环。
5.  **养成阅读习惯：** 完全在 Zotero 的原生 PDF 阅读器中阅读和注释。完成后，打开 Obsidian，触发导入命令，并观察您的 Markdown 文献笔记自动生成。

## 结论

在评估 Zotero 与 Mendeley 在 Obsidian 集成方面时，比较结果明显一边倒。Zotero 的开源性质、强大的本地数据库和专门的社区带来了感觉像原生功能的集成工具。它允许引文和注释的自动化、无缝传输直接进入您的 Markdown 笔记。

Mendeley 仍然是传统学术写作和团队协作的强大工具，但其封闭的生态系统和加密架构使其与 Obsidian 用户所需的本地优先、高度连接的工作流根本不兼容。对于 PKM 和笔记制作，Zotero 是必不可少的选择。

## 常见问题

### 我可以将现有的 Mendeley 图书馆迁移到 Zotero 吗？
是的。Zotero 有一个专门针对 Mendeley 的内置导入器。由于 Mendeley 加密了其数据库，您需要遵循 Zotero 的具体说明，这通常涉及通过 Zotero 导入器登录您的 Mendeley 在线帐户以绕过本地加密。

### 我需要为 Zotero 存储付费才能在 Obsidian 中使用它吗？
不需要。只有当您希望 Zotero 托管您的 PDF 文件以在设备之间同步时，才需要为 Zotero 的云存储付费。您的元数据始终免费同步。如果您想要免费的 PDF 同步，您可以将 Zotero 配置为通过任何标准 WebDAV 服务同步您的附件文件，或者简单地将您的 Zotero PDF 文件夹存储在 Dropbox 或 Google Drive 等云盘中。

### Citations 插件和 Zotero Integration 有什么区别？
Citations 插件主要用于搜索您的图书馆并在写作时快速插入 Markdown 引文键。Zotero Integration 是一个更重、更强大的工具，旨在导入整个元数据块并提取 PDF 注释以创建全面的文献笔记。许多用户同时运行这两个插件。

### Mendeley 是否为 Obsidian 开发人员提供任何 API 访问？
Mendeley 确实有 API，但它受到严格限制，需要复杂的 OAuth 身份验证工作流，并且经常以破坏第三方工具的方式进行更新。由于这些开发障碍，目前没有可靠、持久的 Obsidian 插件适用于现代 Mendeley Reference Manager。