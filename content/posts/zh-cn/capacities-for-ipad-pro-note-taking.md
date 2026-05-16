---
image: "/og/capacities-for-ipad-pro-note-taking.webp"
editorSummary: >-
  iPad Pro 上的笔记体验在将 Capacities 与 Magic Keyboard 结合后发生了质的改变，它从一个多媒体平板电脑转变为一个结构化的、基于对象的知识中心。我发现斜杠命令工作流和 Daily Note 的自定义功能极大地减少了在移动设备上进行研究和项目管理的阻力。基于对象的方法——即问“这属于什么类型的对象？”而不是“我应该把它归档在哪里？”——在 iPad 的触摸界面上感觉非常直观。然而，这种取舍也是显而易见的：Capacities 更倾向于键盘输入而非 Apple Pencil 墨迹书写，这使得它不太适合重度依赖手写的工作流。对于在移动中进行网络化、基于数据库的笔记记录，这套配置表现出色。
authorNote: >-
  我在 iPad Pro 上使用 Split View 与 Safari 测试了 Capacities，将 PDF 阅读器与该应用并排摆放以捕获研究资料。拖放功能会自动将图片分类为对象，消除了手动标记的麻烦。我设置了四种核心对象类型——Meetings（会议）、People（人物）、Projects（项目）和 Resources（资源）——保持侧边栏易于通过触摸导航。通过 WhatsApp 集成的 Mobile Capture Pipeline 对于记录快速闪现的想法极其有用，这些想法会出现在我的 Daily Note 收件箱中以便后续处理。与传统的基于文件夹的应用相比，这种工作流显著降低了我的记录阻力。
manualRelated:
  - title: "Capacities Believer 计划与基础版对比：哪个最好？"
    url: "/zh-cn/posts/capacities-believer-plan-vs-basic-comparison/"
  - title: "终极指南：构建第二大脑以实现生产力最大化的步骤"
    url: "/zh-cn/posts/steps-to-building-a-second-brain/"
  - title: "Anytype 评测（针对本地优先的隐私爱好者）：深入探讨数据控制"
    url: "/zh-cn/posts/anytype-review-local-first-privacy-lovers/"
title: "在 iPad Pro 上使用 Capacities 记笔记：完整配置指南"
description: "优化在 iPad Pro 上使用 Capacities 记笔记的体验。学习经过验证的工作流、Magic Keyboard 快捷键以及基于对象的 PKM 策略，以组织您的知识。"
pubDate: "2026-05-03"
author: "Alex Chen"
tags: ["capacities", "ipad pro", "note taking", "pkm"]
slug: "capacities-for-ipad-pro-note-taking"
type: "informational"
---

# 在 iPad Pro 上使用 Capacities 记笔记：完整配置指南

> **快速解答：**在 iPad Pro 上使用 Capacities 记笔记，能将该设备从简单的多媒体平板电脑转变为结构化的、基于对象的知识中心。虽然它主要依赖键盘输入而非原生的 Apple Pencil 墨迹书写，但将 iPad Pro 与 Magic Keyboard 配对后，您可以利用 Capacities 的动态链接、[Daily Notes](/zh-cn/posts/tana-commands-for-automated-daily-note-setup/) 和自定义对象类型，在移动中进行高效的[研究](/zh-cn/posts/progressive-summarization-workflow-for-deep-research-papers/)、会议管理和项目[组织](/zh-cn/posts/steps-to-building-a-second-brain/)。

iPad Pro 一直被誉为终极的便携设备，然而要找到一款能够充分利用其性能而又不会迫使您陷入僵化文件夹结构的[个人知识管理](/zh-cn/posts/digital-decluttering-for-information-overload/)（PKM）工具，仍然是一个挑战。传统的[笔记](/zh-cn/posts/remnote-vs-logseq-for-medical-students-comparison/)应用通常将 iPad 视为数字纸张，严重侧重于手写。然而，随着[工作流](/zh-cn/posts/getting-things-done-for-knowledge-workers/)变得越来越复杂和互联，在移动设备上采用网络化、基于数据库的方法的需求也显著增长。

这就是 Capacities 融入生态系统的地方。通过引入一种基于对象而非文件和文件夹的类似工作室的环境，它从根本上改变了信息的存储和检索方式。Capacities 不会问“我应该把这条笔记保存在哪里？”，而是提示您问“这属于什么类型的对象？”——是一个人、一次会议、一本书还是一个项目。

将这种基于对象的方法与 iPad Pro 的硬件功能相结合，创造了一种独特的动态体验。无论您是需要对讲座材料进行分类的学生、整理资料的研究人员，还是追踪客户互动的专业人士，了解如何优化在 iPad Pro 上使用 Capacities 记笔记，都将大幅降低您日常工作流中的阻力。本指南涵盖了使这一组合高效运作的基本配置、局限性和策略。

## iPad OS 上的基于对象方法

要掌握 iPad Pro 上的 Capacities，您必须首先理解其核心理念。传统系统使用分层结构：一个文件夹包含一个子文件夹，子文件夹包含一个文档。Capacities 使用的是基于对象的系统。每一条信息都是一个具有特定“类型”的“对象”。

在 iPad Pro 以触摸为先的界面上工作时，这种基于对象的方法出奇地直观。您不需要在平板电脑上繁琐地点击嵌套的文件夹，而是通过一个集中的对象仪表板进行导航。如果您需要查找会议笔记，只需点击“Meeting”对象类型。如果您需要查找某个概念，可以导航到“[Zettelkasten](/zh-cn/posts/zettelkasten-method-explained/)”或“Idea”对象。

这种扁平的、网络化的架构意味着，当您在 iPad 上进行多任务处理时（例如在 Split View 中一边阅读 PDF 一边记笔记），您可以快速创建一个新对象，将其链接到现有属性，然后继续阅读，而不会打断您的思路去管理文件目录。

## Capacities for iPad Pro 的核心功能

Capacities 的 iPad OS 应用将强大的桌面体验转化为移动端友好的界面。虽然它在跨平台一致性方面进行了深度优化，但某些 iPad 特有的功能决定了您应该如何与该应用进行交互。

### Magic Keyboard 集成与命令导航

对于大量的文本输入和结构化操作，Magic Keyboard（或任何兼容的蓝牙键盘）几乎是充分发挥 iPad Pro 上 Capacities 潜力的必备工具。与 [Notion](/zh-cn/posts/personal-knowledge-management-tools-comparison/) 类似，Capacities 严重依赖斜杠命令（`/`）和基于块的编辑。

使用 Magic Keyboard，您可以立即唤出命令面板，无需触摸屏幕即可转换文本块、嵌入图像或创建新的链接对象。触觉反馈和触控板支持意味着您可以无缝地导航您的 Daily Notes、拖放文本块并建立双向链接。因为该 iPad 应用支持标准的键盘快捷键（如 `Cmd + K` 用于链接或 `Cmd + Enter` 用于完成任务），您在桌面应用中养成的肌肉[记忆](/zh-cn/posts/how-to-remember-what-you-read-effectively/)可以直接转移到移动端配置上。

### Apple Pencil 与 Scribble 工作流

需要澄清当前的一个局限性：Capacities 并不是像 GoodNotes 或 Notability 那样被设计成自由形式的手写应用。您不能直接在无限画布上绘图。然而，Apple Pencil 仍然可以通过 iPadOS 的 Scribble 功能发挥作用。

Scribble 允许您在 Capacities 的任何文本字段中书写，iPad 会自动将您的手写内容转换为输入文本。这对于快速捕获非常有用。如果您在平板模式下使用 iPad（脱离键盘），您可以使用 Pencil 在 Daily Note 中记下快速闪现的想法、创建任务或填写新对象的属性。对于必须手绘图表的视觉思考者来说，最好的工作流是在苹果原生的 Freeform 或 Notes 应用中草绘您的图表，截图或导出为图像，然后直接粘贴到 Capacities 对象中。

### Split View 与多任务处理功能

现代 iPad Pro 中的 M 系列芯片可以轻松应对高强度的多任务处理，而 Capacities 能够从 Split View 和 Slide Over 中显著受益。一个极其高效的研究工作流是将 Safari 或 PDF 阅读器放在屏幕一侧，将 Capacities 放在另一侧。

由于 Capacities 使用基于块的编辑器，您可以从网页中突出显示文本并将其直接拖入您的 Capacities 笔记中。更重要的是，在从网络保存图像或文件时，将它们拖入 Capacities 会自动提示应用将它们分类为“Image”或“File”对象，从而使您的媒体文件保持井然有序，无需手动标记。

## 设置您的 Capacities 工作区

为了在 iPad Pro 上流畅地使用 Capacities 记笔记，您需要配置您的空间以提高移动端的效率。桌面显示器上杂乱的工作区或许尚可管理，但在 11 英寸或 12.9 英寸的屏幕上，视觉层级至关重要。

### 定义您的核心对象类型

首先定义 4 到 5 种基本的自定义对象类型。如果您的数据库中充斥着几十种类型，移动端界面将变得难以导航。一个标准的、非常高效的设置包括：

1. **Meetings（会议）：** 包含 Date（日期）、Attendees（参会人员，链接到 People 对象）和 Project（项目，链接到 Projects 对象）等属性。
2. **People（人物）：** 包含 Company（公司）、Role（角色）和 Contact Info（联系信息）等属性。
3. **Projects（项目）：** 包含 Status（状态）、Due Date（截止日期）和 Priority（优先级）等属性。
4. **Resources/Sources（资源/来源）：** 包含 URL（网址）、Author（作者）和 Topic（主题）等属性。
5. **Ideas（想法）：** 一个以文本为主的简单对象，用于记录尚未完善的想法。

通过限制您的对象类型，iPad 上的侧边栏将保持整洁，并且易于通过触摸目标进行访问。

### 自定义 Daily Note

Daily Note 是 Capacities 的控制中心，在移动设备上尤其如此。当您打开 iPad 应用时，它默认显示今天的笔记。您应该将它视为您的收件箱。与其导航到特定项目去撰写更新，不如将更新输入到 Daily Note 中，并使用 `@` 命令将其链接到相关项目。

您可以在桌面应用中自定义 Daily Note 模板，这些更改会同步到您的 iPad 上。添加一个每日检查清单、一个用于会议笔记的部分，以及一个草稿本。这可以将您在匆忙时需要点击菜单的需求降至最低。

## iPad Pro 高级笔记工作流

一旦您的工作区配置完毕，您就可以开始利用专为 iPad Pro 的外形尺寸和功能量身定制的特定工作流了。

### 移动捕获管道 (Mobile Capture Pipeline)

PKM 系统面临的最大挑战之一是如何在离开桌面时将信息输入其中。Capacities 通过其集成功能出色地解决了这个问题，当与 iPad Pro 结合使用时，这些功能尤为强大。

Capacities 原生集成了 WhatsApp 和 Telegram 等消息传递应用。通过连接您的帐户，您可以直接从 iPad（或 iPhone）将想法、链接或照片以文本形式发送给 Capacities 机器人。当您稍后坐在 iPad Pro 前时，这些消息已经在 Daily Note 或专用的 Inbox 中等您，准备好被处理、标记并转换为特定对象。这就消除了在您只有几秒钟时间时，必须打开应用、找到正确的页面并打字记录想法的阻力。

### 视觉研究与媒体摄取

iPad Pro 拥有高保真显示屏和优秀的摄像头，使其成为进行视觉研究的强大工具。如果您是建筑师、设计师或视觉学习者，Capacities 处理媒体的能力要远远好于标准的基于 Markdown 的应用。

当您使用 iPad 拍摄白板或文档的照片时，您可以将其插入 Capacities。因为图像被视为一等对象，您可以为图像本身添加属性。您可以为白板照片标记项目名称，添加描述，并将其链接到该会议的参会人员。稍后，您可以在“Gallery”（画廊）视图中查看您的数据库，将您的 iPad 变成一个高度组织化的、视觉化的媒体捕获情绪板。

## Capacities 与传统 iPad 笔记应用的对比

了解 Capacities 在更广泛的 iPad 应用生态系统中的位置，将帮助您确定它是否是满足您特定需求的正确工具。

**Capacities vs. GoodNotes / Notability：**
GoodNotes 和 Notability 是无限画布应用，主要专为手写和 PDF 标记设计。它们复制了实体笔记本的体验。如果您的首要目标是[书写](/zh-cn/posts/atomic-notes-writing-guide/)复杂的数学公式、手绘线框图或使用 Apple Pencil 在教科书上高亮显示，传统应用会更胜一筹。Capacities 不是一款手写应用；它是一个知识数据库。您使用 Capacities 是在提取信息*之后*对其进行综合处理。

**Capacities vs. [Obsidian](/zh-cn/posts/what-is-personal-knowledge-management/)：**
Obsidian 是一款高度可定制的、[本地优先的](/zh-cn/posts/anytype-review-local-first-privacy-lovers/) Markdown 编辑器。Obsidian 的 iPad 应用功能强大，但需要大量的配置、社区插件和同步解决方案（如 Obsidian Sync 或 iCloud）才能正常工作。Capacities 提供了更干净的、开箱即用的移动体验。其基于对象的结构不需要任何编码或插件管理，对于希望在 iPad 上获得即时实用性而又不想管理复杂后端的最终用户来说，它要容易上手得多。

**Capacities vs. Notion：**
Notion 和 Capacities 共享基于块的编辑风格，但它们的架构有所不同。Notion 是分层的；您在页面中构建页面，并手动构建数据库。在 iPad 上，导航深层的 Notion 层级结构可能会显得缓慢且笨重。Capacities 扁平的结构和将 Daily Note 作为收件箱的依赖，使得在触摸界面上捕获和检索信息的速度显著加快。

## 给 iPad Pro 用户的实用建议

为确保在您的 iPad Pro 上获得无阻力的 Capacities 体验，请落实以下实用建议：

1. **利用命令面板：** 命令面板是您最好的朋友。在 Magic Keyboard 上按下 `Cmd + /`（或您配置的快捷键）即可打开它。在这里，您可以在整个数据库中进行搜索、创建新对象或更改主题，而双手无需离开键盘。
2. **战略性地使用 Collections：** 在一种对象类型（例如“Books”）内，您可以创建 Collections（例如“Currently Reading”、“Finished”）。使用它们来过滤您的视图。在 iPad 上，特定集合的视觉网格或画廊视图能提供出色的、易于触摸的仪表板。
3. **掌握块拖放：** iPad 应用支持块的拖放。如果您在 Daily Note 中写下了一个粗略的想法，您可以在分屏中打开一个特定的项目对象（或导航到它），然后实际地将这个块从日常笔记拖入永久对象中。
4. **管理离线预期：** 作为一款云优先的应用，Capacities 需要互联网连接才能实现全部功能。虽然开发团队不断在改进缓存和离线支持，但如果您经常在没有 Wi-Fi 或蜂窝网络的地方工作，您不应该像对待 Obsidian 那样依赖它作为完全离线的金库。请据此规划您的笔记习惯。
5. **保持属性简洁：** 在定义对象属性时，请坚持使用基本的元数据（如 Date、Status、Related Project）。过多的属性会迫使您在 iPad 屏幕上大量滚动才能填写基本信息，这会产生阻力并阻碍信息捕获。

## 结论

要在 iPad Pro 上熟练使用 Capacities 记笔记，需要视角的转变。您必须不应仅仅将 iPad 视为手写的数字画布，而是将其视为知识图谱的便携式指挥中心。通过重度依赖 Magic Keyboard 进行文本输入，利用 Split View 进行无缝的媒体摄取，并依靠 Daily Note 作为您的通用收件箱，您可以构建一个随身携带的、高度结构化的、基于对象的 PKM 系统。虽然它不会取代您的素描应用，但 Capacities 提供了 iPad Pro 生态系统极度渴望的强大的关系数据库，使您能够以空前的清晰度将想法、会议和项目连接起来。

## 常见问题解答

### 我可以使用 Apple Pencil 直接在 Capacities 中手写笔记吗？
不能，Capacities 没有原生的自由手绘图画布。但是，您可以将 Apple Pencil 与 iPadOS Scribble 结合使用，在任何文本字段中书写，系统会自动将您的手写内容转换为应用内的输入文本。

### Capacities 可以在 iPad Pro 上完全离线工作吗？
Capacities 主要是一款云优先的应用。虽然它会缓存最近打开的笔记并提供一些有限的离线查看功能，但您不能依赖它进行全面的离线创建和数据库管理。强烈建议在活跃的互联网连接下使用以获得无缝体验。

### 如何在我的 iPad Pro 和 Mac 或 PC 之间同步我的 Capacities 数据？
同步工作通过 Capacities 的云服务器自动处理。只要两台设备都连接到互联网，您在 iPad Pro 上所做的任何更改都会立即反映在桌面或 Web 应用中。您不需要管理 iCloud 文件或第三方同步服务。

### 我可以将 Notion 或 Obsidian 中的现有笔记导入到 iPad 上的 Capacities 中吗？
虽然为了提高效率和检查错误，批量导入最好在台式电脑上进行，但 Capacities 确实支持导入 Markdown 文件和 CSV。强烈建议在将日常工作流过渡到 iPad Pro 之前，先在 Mac 或 PC 上执行初始数据库迁移。

### Capacities 的 iPad 版本是否缺少主要的桌面功能？
iPad 应用功能异常丰富，几乎达到了与 Web 和桌面版本同等的水平。您可以创建对象、管理属性、查看图表并利用命令面板。主要的区别纯粹在人体工程学方面，与屏幕空间和以触摸为先的导航模式有关。

---

## 相关阅读

- [Capacities Believer 计划与基础版对比：哪个最好？](/zh-cn/posts/capacities-believer-plan-vs-basic-comparison/)

- [终极指南：构建第二大脑以实现生产力最大化的步骤](/zh-cn/posts/steps-to-building-a-second-brain/)

- [Anytype 评测（针对本地优先的隐私爱好者）：深入探讨数据控制](/zh-cn/posts/anytype-review-local-first-privacy-lovers/)