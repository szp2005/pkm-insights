The translation of the Markdown article from English to Simplified Chinese is complete.
The file `translated_obsidian_dataview_snippets_for_book_trackers.md` now contains the translated content with all specified requirements met.

```markdown
---
image: "/og/obsidian-dataview-snippets-for-book-trackers.webp"
editorSummary: >-
  Dataview Snippets Book Trackers 将 Obsidian 转化为一个动态的阅读管理系统，通过查询嵌入在书籍笔记中的元数据来实现。我发现创建一个具有一致 YAML Frontmatter 字段（标题、作者、状态、页数、进度）的专用文件夹结构，能够启用强大的自动化表格和仪表板。真正的权衡在于扩展性：虽然基本的 DQL 查询能够高效处理简单的列表，但要使用 DataviewJS 进行阅读时长或阅读百分比等计算，则需要熟悉 JavaScript 逻辑。预先设置必要的元数据字段可以避免在整个库中进行昂贵的追溯性批量更新。
authorNote: >-
  我在管理跨三个不同平台的书籍后构建了这个追踪器。当我将所有内容整合到 Obsidian 中，并使用结构化元数据时，一个单一的状态：阅读字段结合进度和页数，让我无需离开我的 vault 就能准确地看到每本书的阅读进度。真正的胜利来自于计算出的“阅读时长”字段——它揭示了我完成奇幻小说比晦涩的非虚构作品快两倍，这改变了我规划阅读日程的方式。
manualRelated:
  - title: "2026 年最佳 Obsidian Dataview 学术研究模板"
    url: "/zh-cn/posts/obsidian-dataview-templates-academic-researchers-2026/"
  - title: "个人知识管理工具比较：寻找你的终极第二大脑"
    url: "/zh-cn/posts/personal-knowledge-management-tools-comparison/"
  - title: "Dataview 查询研究：5 步指南"
    url: "/zh-cn/posts/how-to-structure-dataview-queries-for-research/"
title: "Obsidian Dataview 书籍追踪片段：掌控你的阅读"
description: "解锁强大的 Obsidian Dataview 书籍追踪片段，轻松管理你的阅读清单、追踪进度并深入了解你的文学之旅。"
pubDate: "2026-05-06"
author: "Alex Chen"
tags: ["Obsidian", "Dataview", "Book Tracking", "Productivity"]
slug: "obsidian-dataview-snippets-for-book-trackers"
type: "informational"
---

# Obsidian Dataview 书籍追踪片段：掌控你的阅读

> **快速回答：** Obsidian Dataview 片段提供了一种高度可定制和动态的方式来追踪书籍、管理阅读列表，并直接在您的知识库中可视化进度。通过利用特定的 DataviewJS 或 DQL 查询，用户可以创建基于嵌入在笔记中的书籍元数据实时更新的自动化表格、列表和仪表板，从而显著简化文学[组织](/zh-cn/posts/steps-to-building-a-second-brain/)和分析。

对于许多狂热的读者和知识工作者来说，管理日益增长的书籍库——无论是实体书还是电子书——都可能成为一个组织上的挑战。追踪您已读过什么、正在读什么以及愿望清单上的书，通常涉及不同的系统：实体笔记本、电子表格或各种在线平台。这种碎片化可能会阻碍您对阅读习惯的整体看法，并使您难以从文学之旅中提取有意义的见解。

Obsidian，一个强大的[知识管理](/zh-cn/posts/knowledge-management-strategies-for-students/)工具，为这个问题提供了一个强大的解决方案，特别是当它与 Dataview 插件结合使用时。Dataview 将您的纯文本笔记转换为动态数据库，允许您根据嵌入在文件中的元数据查询和显示信息。对于书籍追踪，这意味着超越静态列表，创建反映您整个阅读世界的、生动的互动仪表板。本文将指导您如何在 Obsidian 中实现有效的 Dataview 片段，以构建一个全面且个性化的书籍追踪系统。

## 设置您的 Obsidian 书籍追踪系统

在深入研究 Dataview 片段之前，为您的书籍笔记建立一个一致的结构至关重要。Dataview 依靠元数据（键值对）来识别和分类您的笔记。您标记和归因信息到每本书的方式的一致性将确保您的查询正常运行并提供准确的结果。

### 书籍的必要元数据字段

为了使您的书籍笔记可以被 Dataview 查询，您需要在其中嵌入特定的字段。这些可以作为 YAML Frontmatter 添加到笔记顶部，或作为内联字段添加到笔记的任何位置。YAML Frontmatter 通常是[结构化数据](/zh-cn/posts/tana-ai-features-for-structured-data-entry/)的首选。

以下是推荐的元数据字段：

*   `title`: 书籍的完整标题。
*   `author`: 书籍的作者。
*   `status`: 当前阅读状态（例如，“to-read”、“reading”、“completed”、“on-hold”）。
*   `genre`: 书籍的类型（例如，“Fantasy”、“Science Fiction”、“History”）。可以是列表。
*   `rating`: 您对书籍的评分（例如，1-5 星，或一个数值）。
*   `pages`: 总页数。
*   `start-date`: 您开始阅读的日期（例如，`YYYY-MM-DD`）。
*   `end-date`: 您完成阅读的日期（例如，`YYYY-MM-DD`）。
*   `progress`: 当前页码或百分比（对于处于“reading”状态的书籍）。
*   `cover`: 书籍封面图片的链接（可选）。
*   `tags`: 标准 Obsidian 标签（例如，`#book`，`#fiction`）。

**书籍笔记的 YAML Frontmatter 示例：**

```yaml
---
title: "Dune"
author: "Frank Herbert"
status: "completed"
genre: ["Science Fiction", "Epic"]
rating: 5
pages: 412
start-date: 2023-01-10
end-date: 2023-01-25
cover: "https://example.com/dune_cover.jpg"
tags: ["book", "classic"]
---
```

### 创建您的第一个书籍笔记模板

为了保持一致性并加快笔记创建速度，请为您的书籍笔记创建一个模板。这确保了所有新的书籍条目都预先填充了必要的元数据字段，提示您进行填写。将此模板保存在指定的“[Templates](/zh-cn/posts/logseq-templates-for-doctoral-research-students/)”文件夹中。

**书籍模板示例（`Book Template.md`）：**

```markdown
---
title: "{{title}}"
author: "{{author}}"
status: "to-read"
genre: []
rating: 0
pages: 0
start-date: ""
end-date: ""
progress: 0
cover: ""
tags: ["book"]
---

# {{title}} by {{author}}

## My Thoughts

## Key Takeaways

## Quotes
```

创建新书籍笔记时，使用“Insert Template”命令（或像 Templater 这样的插件）用此结构填充它。确保您的所有书籍笔记都存储在专用文件夹中，例如 `02 - Books/`，以提高查询效率。这种组织策略允许 Dataview 定位特定目录，从而避免不必要地扫描您的整个 vault。

## 用于阅读列表的基本 Dataview 片段

一旦您的书籍笔记以一致的元数据进行结构化，您就可以开始使用 Dataview DQL（Dataview 查询语言）来创建动态列表和表格。这些片段直接放置在您希望列表出现的任何 Obsidian 笔记中。

### 显示所有书籍

要获取所有书籍笔记的综合列表，您可以查询所有带有 `book` 标签或位于专用 `02 - Books/` 文件夹中的文件。

```dataview
TABLE title, author, status, genre, rating
FROM "02 - Books"
WHERE contains(file.tags, "book") OR contains(tags, "book")
SORT file.name ASC
```

此片段创建一个表格，显示在“02 - Books”文件夹中找到的，并且带有 `#book` 标签的每条笔记的标题、作者、状态、类型和评分。`SORT file.name ASC` 确保列表按笔记的文件名按字母顺序排列。

### 当前阅读的书籍

追踪您正在阅读的书籍是书籍追踪器的主要用例。此片段筛选您的书籍笔记，只显示 `status` 为“reading”的那些。

```dataview
TABLE title, author, pages, progress, start-date
FROM "02 - Books"
WHERE status = "reading"
SORT start-date DESC
```

此表格显示了标题、作者、总页数、当前进度以及您开始阅读的日期，按最近开始阅读的书籍优先排序。`progress` 字段可以是页码或百分比，具体取决于您选择如何追踪。

### 已完成书籍列表

已完成书籍列表提供了成就感和阅读的历史记录。此查询筛选 `status` 为“completed”的书籍。

```dataview
TABLE title, author, rating, end-date, (end-date - start-date) as "Reading Duration"
FROM "02 - Books"
WHERE status = "completed"
SORT end-date DESC
```

在这里，我们引入了一个计算字段：`(end-date - start-date) as "Reading Duration"`。这会自动计算阅读每本书所需的时间，提供一个有趣的指标。列表按完成日期排序，显示您最近完成的书籍。

## 用于进度和洞察的高级 Dataview 片段

除了简单的列表之外，Dataview 还可以为您提供对阅读习惯更深入的洞察，允许您根据特定条件进行筛选甚至执行计算。

### 追踪阅读进度（页数/百分比）

对于正在阅读中的书籍，您可能希望了解阅读了多少。此片段结合 `pages` 和 `progress` 字段来计算百分比。

```dataview
TABLE title, author, pages, progress, round((progress / pages) * 100) + "%" AS "Percent Read"
FROM "02 - Books"
WHERE status = "reading" AND pages > 0
SORT title ASC
```

此查询添加了一个“Percent Read”列，该列根据您的 `progress`（当前页）和 `pages`（总页数）计算百分比。`round()` 函数确保得到一个干净的整数百分比。它还筛选掉了 `pages` 为 0 的书籍，以防止除以零错误。

### 按作者或类型分类书籍

要通过特定视角探索您的图书馆，您可以按作者或类型进行筛选。这对于查找喜爱作者的所有书籍或探索特定类型特别有用。

**按作者：**

```dataview
TABLE title, status, rating
FROM "02 - Books"
WHERE author = "Frank Herbert"
SORT title ASC
```

这个简单的查询列出了“Frank Herbert”的所有书籍，显示它们的状态和您的评分。

**按类型：**

```dataview
TABLE title, author, status, rating
FROM "02 - Books"
WHERE contains(genre, "Fantasy")
SORT title ASC
```

此片段使用 `contains(genre, "Fantasy")` 来查找 `genre` 字段中列有“Fantasy”的所有书籍，即使它是一个类型列表的一部分。这允许灵活的分类。

### 带有特定标签的书籍（例如，#fiction, #non-fiction）

结合 Obsidian 的原生标签与 Dataview 允许进行另一层分类。如果您用 `#fiction` 或 `#non-fiction` 标记您的书籍笔记，您可以轻松地根据这些更广泛的类别创建列表。

```dataview
TABLE title, author, status, rating
FROM "02 - Books"
WHERE contains(file.tags, "fiction")
SORT title ASC
```

此查询将显示所有标记为 `#fiction` 的书籍。您可以将其改编为您使用的任何其他标签，例如 `#re-read`、`#audiobook` 或 `#reference`。

## 使用 DataviewJS 可视化您的文学之旅

虽然 DQL 对于表格和列表来说功能强大，但 DataviewJS 允许使用 JavaScript 进行更复杂的逻辑、计算，甚至基本的视觉化。这为创建动态仪表板开辟了可能性。

### 创建动态阅读仪表板

仪表板可以提供您阅读统计信息的概览。此 DataviewJS 片段计算书籍总数、已完成书籍和平均评分。

```dataviewjs
let books = dv.pages('"02 - Books"').where(p => p.file.tags.includes("book"));

let totalBooks = books.length;
let completedBooks = books.where(p => p.status === "completed").length;
let readingBooks = books.where(p => p.status === "reading").length;

let totalRating = books.where(p => p.status === "completed" && p.rating > 0).map(p => p.rating).array().reduce((a, b) => a + b, 0);
let ratedBooks = books.where(p => p.status === "completed" && p.rating > 0).length;
let averageRating = ratedBooks > 0 ? (totalRating / ratedBooks).toFixed(2) : "N/A";

dv.header(3, "阅读统计");
dv.paragraph(`**追踪书籍总数：** ${totalBooks}`);
dv.paragraph(`**当前阅读中：** ${readingBooks}`);
dv.paragraph(`**已完成书籍：** ${completedBooks}`);
dv.paragraph(`**平均评分（已完成）：** ${averageRating}`);

dv.header(3, "最近完成");
dv.table(["标题", "作者", "评分", "完成日期"],
    books
        .where(p => p.status === "completed")
        .sort(p => p["end-date"], "desc")
        .slice(0, 5)
        .map(p => [
            dv.fileLink(p.file.name),
            p.author,
            p.rating,
            p["end-date"]
        ])
);

dv.header(3, "待读书籍");
dv.table(["标题", "作者", "类型"],
    books
        .where(p => p.status === "to-read")
        .sort(p => p.file.ctime, "asc") // Sort by creation date or a priority field
        .slice(0, 5)
        .map(p => [
            dv.fileLink(p.file.name),
            p.author,
            p.genre
        ])
);
```

这个全面的 DataviewJS 片段提供了您的阅读统计摘要、最近完成的 5 本书的列表以及待读列表中的 5 本书。它演示了如何将计算与动态表格生成相结合。

### 按年份完成书籍

按年份分析您的阅读习惯可以揭示趋势。此 DataviewJS 片段按 `end-date` 年份对已完成书籍进行分组。

```dataviewjs
let books = dv.pages('"02 - Books"').where(p => p.status === "completed" && p["end-date"]);

let booksByYear = {};
for (let book of books) {
    let year = book["end-date"].year;
    if (!booksByYear[year]) {
        booksByYear[year] = [];
    }
    booksByYear[year].push(book);
}

dv.header(3, "按年份完成书籍");
for (let year of Object.keys(booksByYear).sort((a, b) => b - a)) {
    dv.header(4, `${year} (${booksByYear[year].length} books)`);
    dv.list(booksByYear[year].map(b => dv.fileLink(b.file.name) + " by " + b.author + (b.rating ? ` (Rating: ${b.rating})` : "")));
}
```

此脚本遍历您的已完成书籍，按完成年份对其进行分组，然后以嵌套列表的形式呈现它们，显示每年的数量。

### 整合外部数据（例如，Goodreads 链接）

虽然 Dataview 专注于内部数据，但您可以在元数据中包含外部链接。例如，添加 Goodreads URL 可以快速访问外部评论或信息。

```yaml
---
title: "Project Hail Mary"
author: "Andy Weir"
status: "completed"
genre: ["Science Fiction"]
rating: 5
goodreads: "https://www.goodreads.com/book/show/54478144-project-hail-mary"
tags: ["book"]
---
```

然后，您可以在 Dataview 表格中显示此链接：

```dataview
TABLE title, author, rating, goodreads as "Goodreads Link"
FROM "02 - Books"
WHERE status = "completed"
SORT end-date DESC
```

这会为每本书添加一个直接指向 Goodreads 页面的可点击链接，从而增强您的追踪器的实用性。

## 维护和发展您的书籍追踪器

书籍追踪器是一个活生生的系统。定期维护并根据不断变化的需求进行调整，将确保其长期效用。

### 批量更新元数据

随着您的图书馆不断增长，您可能需要向所有现有书籍笔记添加新的元数据字段，或更新多个笔记中的字段。虽然 Dataview 本身不直接修改笔记，但 Obsidian 的搜索和替换功能（Ctrl/Cmd + Shift + F）非常有价值。对于更高级的批量操作，可以考虑使用具有强大正则表达式功能的文本编辑器或专用脚本。例如，要将 `cover: ""` 添加到 `02 - Books` 文件夹中所有没有它的笔记中，您可以使用正则表达式搜索和替换。

或者，如果您对脚本编写比较熟悉，Obsidian API（通过 [plugins](/zh-cn/posts/logseq-plugins-for-scientific-research-efficiency/) 访问，例如 Templater 或用于更复杂场景的 DataviewJS）可用于遍历文件并以编程方式添加或修改 Frontmatter。然而，对于大多数用户来说，手动更新或有针对性的搜索和替换操作就足够了。关键是识别笔记中的共同模式并系统地应用更改。

### 处理系列和合集

对于属于某个系列的书籍，您可能希望将它们一起追踪并确保它们以正确的阅读顺序出现。您可以在元数据中添加 `series` 和 `series-number` 字段。

```yaml
---
title: "The Fellowship of the Ring"
author: "J.R.R. Tolkien"
status: "completed"
series: "The Lord of the Rings"
series-number: 1
tags: ["book", "fantasy"]
---
```

然后，您可以按这些字段查询和排序：

```dataview
TABLE title, author, status, series-number
FROM "02 - Books"
WHERE series = "The Lord of the Rings"
SORT series-number ASC
```

这会创建一个表格，列出“The Lord of the Rings”系列中的所有书籍，并按它们在系列中的序号排序。对于更大的合集，您可以考虑创建一个专门的“Series Note”，其中包含指向所有书籍的链接，并使用 Dataview 从中提取信息。

### 书籍数据备份策略

您的 Obsidian vault，包括所有书籍笔记和 Dataview 配置，是纯文本文件的集合。这使得备份变得非常简单。实施强大的备份策略：

*   **云同步：** 使用 [Google Drive](/zh-cn/posts/using-the-para-method-in-google-drive/)、Dropbox 或 OneDrive 等服务同步您的整个 Obsidian vault。
*   **版本控制：** 对于高级用户，使用 Git 进行 vault 版本控制可以对更改进行精细控制并轻松回滚。
*   **[Obsidian Sync](/zh-cn/posts/setup-guide-for-obsidian-sync-on-android/)：** 官方的 Obsidian Sync 服务提供跨设备的无缝、加密同步和版本历史。

定期备份可确保您宝贵的阅读历史和为构建它所付出的努力永远不会丢失。根据您更新书籍笔记的频率，考虑每日或每周备份。

## 您的书籍追踪器实用建议

构建一个高效的 Dataview 书籍追踪器需要对结构和工作流程做出深思熟虑的选择。

**元数据一致性至关重要：** 成功设置 Dataview 的最重要因素是元数据的一致性。始终使用相同的字段名（`status`、`author`、`genre`）和数据格式（例如，日期使用 `YYYY-MM-DD`）。不一致会导致查询结果不完整或错误。利用模板来强制执行此操作。

**从简单开始，然后扩展：** 不要试图从第一天起就实现所有可能的元数据字段或复杂的查询。从 `title`、`author` 和 `status` 等基本字段开始。一旦您熟悉了基本查询，逐渐添加更多字段（`rating`、`genre`、`pages`）并探索更高级的 Dataview DQL 或 DataviewJS 片段。这种迭代方法可以防止不知所措，并允许您的系统根据您的需求有机地发展。

**专用书籍文件夹：** 将所有书籍笔记存储在一个单一的专用文件夹中（例如，`02 - Books/`）。这简化了 Dataview 查询，允许您指定 `FROM "02 - Books"`，而不是仅仅依赖标签，因为如果标签在您的 vault 中广泛使用，有时会不够精确。

**选择您的追踪粒度：** 决定您希望 `progress` 追踪的详细程度。您会按页码、百分比更新，还是仅标记里程碑（例如，“第 5 章”、“过半”）？页码为计算提供了最高的精确度，但需要更频繁的更新。百分比可以是一个很好的折中方案。

**利用 Obsidian 的功能：**
*   **链接：** 将作者链接到他们专门的作者笔记，或将书籍链接到您的 vault 中相关概念或其他书籍。
*   **标签：** 使用标签进行更广泛的分类（例如，`#fiction`、`#non-fiction`、`#re-read`）以补充您的 `genre` 元数据。
*   **每日笔记：** 通过链接到您正在阅读的书籍并记录进度或想法，将您的阅读整合到您的每日笔记中。

**性能考虑：** 对于拥有数千条书籍笔记的 vault，非常复杂的 DataviewJS 查询有时会影响性能。通过以下方式进行优化：
*   将 `FROM` 子句限制为特定文件夹。
*   使用 `WHERE` 子句提前进行筛选。
*   在 DataviewJS 中使用 `slice()` 限制显示结果的数量。
*   将非常复杂的仪表板分解为更小、更集中的查询。

通过遵循这些实用建议，您可以在 Obsidian 中构建一个健壮、高效且愉快的书籍追踪系统，真正提升您的阅读体验。

## 结论

Obsidian，由 Dataview 插件提供支持，为创建个性化和动态的书籍追踪系统提供了一个无与伦比的环境。通过持续地使用相关元数据来构建您的书籍笔记，并利用 Dataview DQL 和 DataviewJS 的灵活性，您可以超越静态列表，构建交互式仪表板，从而深入了解您的阅读习惯。从基本正在进行中的书籍列表到您的文学之旅随时间推移的高级可视化，可能性是广泛的。拥抱迭代过程，完善您的元数据并尝试不同的片段。这种方法确保您的书籍追踪器仍然是一个强大的、不断发展的工具，它真正支持并丰富您与书籍的互动。

## 常见问题

### 什么是 Dataview？我为什么要用它来追踪书籍？
Dataview 是一个 Obsidian 插件，可以将您的笔记转换为可查询的数据库。您应该用它来追踪书籍，因为它允许您根据嵌入在笔记中的元数据，创建动态、自动更新的书籍列表和表格，相比静态列表或外部[工具](/zh-cn/posts/personal-knowledge-management-tools-comparison/)，它提供了更大的灵活性和洞察力。

### 如何为 Dataview 添加元数据到我的书籍笔记中？
元数据可以作为 YAML Frontmatter 添加到笔记顶部（例如，`--- title: "书名" author: "作者姓名" ---`），也可以作为内联字段添加到笔记的任何位置（例如，`status:: reading`）。YAML Frontmatter 通常推荐用于结构化数据。

### 我可以追踪我想读的书，而不仅仅是正在读的书吗？
是的，当然可以。通过使用 `status` 字段（例如，`status: "to-read"`），您可以轻松创建单独的 Dataview 查询，以显示您的愿望清单或待读书籍，这与您正在阅读或已完成的书籍是不同的。

### DataviewJS 对于书籍追踪是必要的吗，还是 DQL 就足够了？
对于大多数基本和中级的书籍追踪需求，Dataview DQL（Dataview 查询语言）是足够且更容易学习的，它允许您创建表格和列表。只有当您需要更复杂的逻辑、计算或超越 DQL 功能的自定义可视化时，才需要 DataviewJS。

### 如何分享我用 Dataview 创建的书籍列表？
由于 Dataview 查询是在 Obsidian 中动态渲染的，您无法直接将实时的 Dataview 输出“分享”为独立的网页。但是，您可以将包含 Dataview 查询的笔记导出为 PDF 或 Markdown，这将在导出时捕获渲染后的输出。或者，您可以将您的整个 Obsidian vault（或其子集）分享给其他使用 Obsidian 的人。

---

## 相关阅读

- [2026 年最佳 Obsidian Dataview 学术研究模板](/zh-cn/posts/obsidian-dataview-templates-academic-researchers-2026/)

- [Tana 命令自动化每日笔记：完整设置指南](/zh-cn/posts/tana-commands-for-automated-daily-note-setup/)
```