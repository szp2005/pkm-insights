---
image: "/og/what-is-folgezettel-numbering-in-zettelkasten-systems.webp"
editorSummary: >-
  Folgezettel Numbering Zettelkasten Systems uses an alphanumeric branching ID method (like
  1a1b2) to organize interconnected notes without rigid folder hierarchies. I found the
  historical context illuminating: Luhmann's physical wooden cabinets required this system to
  insert new cards without disrupting existing sequences. The article explores a critical
  trade-off in digital environments—time-based IDs offer simplicity, but Folgezettel preserves
  semantic meaning and creates readable "trains of thought" that reveal your intellectual
  effort. This branching identification system is not merely a filing mechanism; it shapes how
  you develop and structure thoughts over time.
authorNote: >-
  I tested this system when migrating my research notes from timestamped IDs to Folgezettel
  numbering in Obsidian. The friction point emerged immediately: deciding whether a new
  insight should branch as 2a1 or 2b forced me to clarify its relationship to prior concepts.
  After three weeks, I noticed my deepest explorations naturally developed longer sequences
  (like 1a2b1a), visually showing where I'd invested cognitive effort. The trade-off was worth
  it—my notes felt less like scattered entries and more like an emerging argument.
manualRelated:
  - title: "Old PKM Note Refactoring: 5-Step System"
    url: "/zh-cn/posts/how-to-refactor-old-notes-in-your-pkm/"
  - title: "Take Smart Notes: A Comprehensive Summary and Practical Guide"
    url: "/zh-cn/posts/how-to-take-smart-notes-summary/"
  - title: "The Zettelkasten Method Explained: A Comprehensive Guide to Master Personal Knowledge Management"
    url: "/zh-cn/posts/zettelkasten-method-explained/"
title: "Zettelkasten 系统中的 Folgezettel 编号：完整指南"
description: "了解 Zettelkasten 系统中的 Folgezettel 编号。探索这种分支 ID 方法如何为更好的知识管理创建无限连接。"
pubDate: "2026-05-07"
author: "Alex Chen"
tags: ["zettelkasten", "pkm", "note-taking", "knowledge management"]
slug: "what-is-folgezettel-numbering-in-zettelkasten-systems"
type: "informational"
---

# Zettelkasten 系统中的 Folgezettel 编号：完整指南

> **快速回答：** Zettelkasten 系统中的 Folgezettel 编号是社会学家 Niklas Luhmann 创建的一种字母数字识别方法（例如 1、1a、1a1、1b）。它允许记笔记者在现有序列中的任何位置插入新想法，创建无限的、分支的思想路径，而无需依赖僵化的、自上而下的文件夹层次结构。

个人知识管理常常陷入过度分类的困境。当我们遇到一条新信息时，我们的第一反应是问：“这应该放在哪个文件夹里？”这种自上而下的方法迫使思想进入僵化的信息孤岛，有效地将它们隐藏起来，并阻止不同概念之间形成有机的、偶然的联系。

由多产的德国社会学家 Niklas Luhmann 推广的 Zettelkasten 方法通过完全消除文件夹来解决这个问题。相反，Luhmann 利用了一个相互连接的索引卡片（Zettel）的平面结构。为了导航这个包含超过 90,000 条笔记的庞大物理数据库，他开发了一种独特的组织惯例，这在现代笔记社区中仍然是一个激烈争论和着迷的话题。

如果你正在探索个人知识管理，你将不可避免地遇到德语术语 *Folgezettel*。了解 Zettelkasten 系统中的 Folgezettel 编号对于任何希望构建弹性、可扩展且真正有用的外部大脑的人来说都至关重要。这种分支识别系统不仅仅是一种归档机制；它是一种积极的认知工具，塑造着你在一生中发展、排序和构建思想的方式。

## Folgezettel ID 的剖析

*Folgezettel* 这个词大致翻译为“后续便条”或“后续笔记”。其核心概念是笔记不是按主题分类的，而是按它们与紧随其后的笔记的关系分类的。为了实现这一点，编号系统必须允许在任何两个现有节点之间无限扩展。

Luhmann 使用数字和字母的交替序列实现了这一点。一个基本的字符串可能看起来像这样：`1a1a1`。

以下是语法如何实际构建自身：

*   **1：** 一个起始思想。（例如，“记笔记的方法很重要。”）
*   **2：** 一个完全不同、不相关的起始思想。（例如，“罗马帝国因经济不稳定而崩溃。”）
*   **1a：** 对笔记 1 的延续、阐述或直接结果。（例如，“Zettelkasten 是一种特定的记笔记方法。”）
*   **1b：** 与 1a 平行的思想，也直接延续自笔记 1。（例如，“大纲是另一种特定的记笔记方法。”）
*   **1a1：** 专门针对笔记 1a 的阐述。（例如，“Zettelkasten 依赖于相互连接的纸条。”）
*   **1a2：** 与 1a1 平行的阐述。（例如，“Zettelkasten 需要索引才能正常运行。”）

通过交替使用数字和字母，你创建了一个无限的分形树。如果你后来决定要在 `1a1` 和 `1a2` 之间添加一个笔记，你只需创建 `1a1a`。如果你想在 `1a1a` 和 `1a1b` 之间添加一个笔记，你创建 `1a1a1`。

这种字母数字语法确保你永远不会用完空间。你可以在一个超特定的子主题上深入无限细节，而不会扰乱其周围更广泛概念的数字序列。

## Folgezettel 与传统层次结构的差异

要完全理解 Zettelkasten 系统中的 Folgezettel 编号是什么，你必须忘掉几十年来使用计算机操作系统所养成的数字归档习惯。传统层次结构按主题分类，并像盒子里的盒子一样运作。

传统的文件夹层次结构如下所示：
*   生产力（文件夹）
    *   笔记（文件夹）
        *   Zettelkasten.txt
        *   Outlining.txt

在这个系统中，笔记必须干净地放入一个预设的类别。如果一个笔记连接了两个概念——例如，Zettelkasten 系统如何反映人脑（生物学）的结构——你必须人工选择一个文件夹而不是另一个，或者复制文件。

另一方面，Folgezettel 作为关联的分支树运作。笔记被放置在激发它们的想法旁边。如果你正在写关于生物学的内容，而这个想法触发了关于 Zettelkasten 方法的领悟，那么新笔记只需从生物学笔记中分支出来。

这种结构是自下而上的、涌现的、有机的。你不需要预先定义类别；类别会自然地从形成最长字母数字序列的数字簇中浮现。像 `43a5b2a1` 这样的 ID 表示一个深入探索的思想路径，直观地展示了你的知识库中你投入最多认知努力的领域。

## 催生该系统的物理限制

理解 Luhmann 的卡片盒的历史背景至关重要。Luhmann 没有使用软件；他使用的是装满 A6 纸条的物理木柜。

如果他只是按顺序编号他的卡片（1、2、3、4），他就会遇到物理障碍。如果他写了卡片 1、2、3 和 4，然后突然有一个绝妙的想法直接阐述了卡片 1，他不能简单地插入一张新的“卡片 2”并将数万张卡片向后移动以腾出空间。

他需要一种方法将新卡片物理地插入卡片 1 的后面，而不会扰乱卡片 2。字母数字的 Folgezettel 系统巧妙地解决了这个物理限制。卡片 `1a` 巧妙地滑到卡片 1 后面，而原始的卡片 2 则保持不动，在抽屉的更深处。

由于系统是物理的，编号系统充当了绝对坐标。如果 Luhmann 从盒子中取出一张卡片来写手稿，ID `12b4` 会告诉他当需要将其放回时，这张卡片具体在哪里。此外，这种物理接近创造了一个独特的优势：当浏览他的卡片盒时，扫描放置在笔记正后方的卡片提供了一条线性的“思想轨迹”，这是他多年前发展起来的。

## 数字 Zettelkasten 应用中的时间戳与 Folgezettel

随着 Obsidian、Logseq 和 Roam Research 等数字笔记应用的出现，促使 Folgezettel 编号出现的物理限制已经消失。我们不再需要手动将纸质卡片插入木制抽屉。数字链接（例如 `[[我的笔记]]`）可以即时连接任何两个文档。

这种技术转变在个人知识管理社区引发了一场大规模的争论：在数字环境中，你仍然需要 Folgezettel ID 吗？

现代数字替代 Folgezettel 的是**基于时间戳的 ID**（通常称为 Zettelkasten ID 或 UID）。该系统根据笔记创建的确切时间生成 ID，通常格式为 `YYYYMMDDHHMM`（例如 `202605071430`）。

### 支持时间戳 ID 的论点
纯时间戳 ID 的支持者认为 Folgezettel 是物理时代的遗物。在软件中，笔记没有单一的物理位置。ID 为 `202605071430` 的笔记可以使用双向维基链接同时链接到数十个其他笔记。结构通过这些链接、标签和中央“内容地图”（MOC）索引笔记来维护，而不是僵化的文件名。这消除了决定新笔记应该是 `1a1` 还是 `1b` 的认知摩擦。

### 支持 Folgezettel 的论点
Folgezettel 方法的捍卫者认为，时间戳 ID 错过了 Luhmann 系统的全部要点。Folgezettel 不仅仅是一种归档机制；它是一种思维工具。

当你使用基于时间戳的 ID 时，标识符 `202605071430` 没有语义意义。它只告诉你笔记是在何时写的。像 `3a1b` 这样的 Folgezettel ID 本身就告诉你这个想法在你更广泛的知识框架中确切地处于什么位置。它迫使你思考：“这个想法直接承接了哪个想法？”

此外，Folgezettel 创造了明确的“思想轨迹”。在纯维基链接系统中，查看你的笔记网络图通常看起来像一团混乱、难以辨认的毛线球。Folgezettel 创建了线性的、可读的论证序列。你可以打开笔记 `1`，然后按顺序阅读 `1a`、`1a1`、`1a2` 和 `1b`，就像阅读一本自然形成的章节草稿一样。

## 实用建议：如何实施 Folgezettel 编号

如果你决定将这种分支系统应用于自己的笔记实践，你必须建立明确的惯例以防止语法变得难以管理。无论你使用的是实体索引卡片还是 Obsidian 中的数字保险库，规则都相似。

### 步骤 1：建立广泛的顶级类别
首先，将你的个位数分配给广泛的兴趣领域。你不需要列出所有可能的主题，只需列出你当前正在探索的主题。
*   1 - 心理学
*   2 - 计算机科学
*   3 - 创意写作

### 步骤 2：使用字母表示延续
当你想延续一条思想线索时，附加一个字母。
*   `1` 心理学
*   `1a` 认知偏差
*   `1b` 行为条件反射

### 步骤 3：使用数字表示阐述和分支
当你想深入探讨字母笔记中提到的特定概念时，附加一个数字。
*   `1a` 认知偏差
*   `1a1` 确认偏误
*   `1a2` 锚定效应

### 步骤 4：谨慎处理“平行”想法
一个常见的困惑是当字母或数字用完时该怎么办。如果你有 `1a` 到 `1z`，接下来是什么？一些实践者使用双字母（`1aa`），而另一些人则建议重新思考结构，因为一个单一思想的 26 个直接延续通常表明一个序列已经变得过于宽泛，需要拆分。

### 步骤 5：实施索引
如果找不到起点，Folgezettel 序列就毫无用处。你必须维护一个单独的索引（或“枢纽”笔记）。索引充当入口点，将你的主题翻译成字母数字序列。
*   *索引条目：* 确认偏误 -> `1a1`
*   *索引条目：* 锚定 -> `1a2`

你不需要索引每一条笔记。你只需要索引你主要思想分支的入口点。一旦你导航到 `1a1`，你就可以简单地沿着字母数字路径找到周围的想法。

## 分支方法的优点和缺点

采用 Zettelkasten 系统中的 Folgezettel 编号需要付出巨大的努力。它将记笔记从被动捕获习惯转变为主动的、充满摩擦的认知练习。

### 核心优势

**上下文保留：** 当你查看一个标记为 `4b3a` 的笔记时，你立即知道它与 `4b3` 和 `4b` 相关。想法的上下文直接烘焙到文件名中，防止笔记变成漂浮在数字空白中的孤立无意义的片段。

**草稿生成：** 如果你是一名作家、学者或内容创作者，Folgezettel 序列会自然地组合成大纲。一个深入发展的分支笔记本质上是一篇预先写好的文章。你只需提取序列，按顺序阅读，你就有了第一稿。

**偶然发现：** 通过强迫自己将一个新想法物理或数字地放置在一个旧想法旁边，你被迫重新阅读你的旧思想。这种摩擦保证你与你过去的知识互动，经常激发你否则会错过的联系。

### 主要缺点

**高认知摩擦：** 在标准数字系统中，你写一个笔记，添加一个标签，然后继续。使用 Folgezettel，你必须停下来，在你的卡片盒中搜索最相关的现有笔记，分析其 ID，并计算下一个可用的字母数字序列。这种摩擦会显著减慢捕获过程。

**结构瘫痪：** 许多初学者都患有“放置焦虑”。如果一个关于人工智能的笔记既与计算机科学（`2`）又与心理学（`1`）相关，它应该放在哪里？它会变成 `2a5` 还是 `1c4`？Luhmann 的建议是，简单地把它放在它 *最初* 最适合的地方，然后使用链接（交叉引用）将其连接到另一个分支。

**丑陋的文件名：** 在数字系统中，看着侧边栏中充满了像 `3a2b1 算法的影响` 这样的标题，与干净的自然语言文件名相比，可能会让人感到杂乱和令人生畏。

## 关于结构化 ID 的最终思考

确定 Zettelkasten 系统中的 Folgezettel 编号是什么，最终揭示的是一种思维哲学，而不仅仅是一个归档技巧。它是一种旨在映射人脑形成关联的有机、非线性方式的方法。

虽然现代数字工具提供了完全依赖搜索功能和双向链接的便利，但这样做往往会导致一个断开连接的数据库，而不是一个真正的知识引擎。整合 Folgezettel——即使是其修改、简化版本——也会迫使你将笔记视为与过去的自己的持续对话。

通过要求每一个新想法都占据特定序列中的特定位置，Folgezettel 将你的笔记从被动存档转变为主动的、结构化的终身学习框架。无论你是通过复杂的数字插件还是通过简单的索引卡片来应用它，掌握这种分支序列都是释放 Zettelkasten 方法真正生成能力的关键。

## 常见问题

### Folgezettel 是什么意思？
Folgezettel 是一个德语复合词，翻译为“后续便条”或“后续笔记”。它指的是 Niklas Luhmann 将新想法直接放在他物理卡片盒中相关现有想法后面的技术，从而按顺序将它们连接起来。

### Folgezettel 和时间戳有什么区别？
Folgezettel ID（如 1a2）规定了结构，显示笔记在特定思想轨迹中的确切位置。时间戳或 Zettelkasten UID（如 202605071200）仅规定了时间顺序，完全依赖于内部超链接来创建笔记之间的关系。

### 我可以在 Obsidian 中使用 Folgezettel 编号吗？
是的。你可以通过在笔记标题前加上字母数字 ID 来手动实现（例如，“1a1 - Obsidian 笔记”）。Obsidian 也有社区插件可以自动化 Folgezettel 字母数字序列的创建和跟踪。

### 对于数字 Zettelkasten 来说，Folgezettel 是严格必要的吗？
不，它并非严格必要。许多现代 PKM 专家使用纯链接、标签和内容地图（MOC）来构建他们的数字保险库。然而，一些用户仍然偏爱 Folgezettel，因为它强制执行了纯链接网络通常缺乏的严格的线性结构。

### 如果一个笔记属于两个不同的 Folgezettel 分支怎么办？
Luhmann 的规则是将其放置在撰写时最相关的序列之后。为了将其连接到第二个分支，他只需在卡片上添加一个超链接（交叉引用）指向另一个序列。你不需要复制笔记。

---

## 相关阅读

- [如何在 PKM 中重构旧笔记：5 步系统](/zh-cn/posts/how-to-refactor-old-notes-in-your-pkm/)

- [2026 年大学生最佳 Capacities 模板](/zh-cn/posts/best-capacities-templates-for-university-students/)
