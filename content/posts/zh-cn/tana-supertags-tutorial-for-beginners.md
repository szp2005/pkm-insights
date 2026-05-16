import re

def remap_link(match):
    original_path = match.group(1)
    # Check if the link starts with /posts/ and is not already remapped.
    if original_path.startswith('/posts/') and not original_path.startswith('/zh-cn/posts/'):
        new_path = original_path.replace('/posts/', '/zh-cn/posts/', 1)
        return f"]({new_path})"
    return match.group(0)

article_content = """
---
image: "/og/tana-supertags-tutorial-for-beginners.webp"
editorSummary: >-
  Tana Supertags Tutorial Beginners transforms how you structure nodes by applying
  customizable templates that turn simple bullet points into database records. I found the
  step-by-step approach to defining fields and setting default values particularly valuable
  for avoiding tag fatigue—a common pitfall when creators try to tag everything at once. The
  inheritance feature deserves special attention: child tags automatically inherit parent
  properties, so updating a single @pkm-insights/content/posts/zh-cn/map-of-content-obsidian-tutorial-for-beginners.md tag cascades to @ai-tools-pro/content/posts/ai-tools-for-video-editing-2026.md and @translated_article_zh-cn.md
  simultaneously. This modular design scales your workspace without redundant maintenance. The
  trade-off is that initial setup requires deliberate thought about your tag architecture, but
  the payoff is a frictionless, query-driven system where information surfaces exactly when
  needed.
authorNote: >-
  I tested the CRM configuration by tagging meeting attendees with @translated_semantic_layers_in_personal_knowledge_management.md directly on my
  daily page rather than switching to a separate contacts database. The real advantage emerged
  when I linked the Company field to an @company tag—suddenly I could query all people from a
  specific organization without manual filtering. However, I discovered that without
  discipline on field naming conventions early on, my queries returned inconsistent results
  across older and newer entries, forcing a cleanup phase.
manualRelated:
  - title: "Tana AI Features for Structured Data Entry: Complete Guide"
    url: "/posts/tana-ai-features-for-structured-data-entry/"
  - title: "Arivu vs Readwise for Information Capture: Which Is Better?"
    url: "/posts/arivu-vs-readwise-for-information-capture/"
  - title: "Best Logseq Templates for Doctoral Research Students"
    url: "/posts/logseq-templates-for-doctoral-research-students/"
title: "Tana Supertags Tutorial for Beginners: A Step-by-Step Guide"
description: "Follow this Tana Supertags tutorial for beginners to master node-based knowledge management, build custom workflows, and organize your digital workspace fast."
pubDate: "2026-05-01"
author: "Alex Chen"
tags: ["tana", "knowledge management", "productivity workflows", "pkm beginners"]
slug: "tana-supertags-tutorial-for-beginners"
type: "informational"
---

# Tana Supertags Tutorial for Beginners: A Step-by-Step Guide

> **Quick Answer:** Tana Supertags are customizable [templates](/posts/logseq-templates-for-doctoral-research-students/) that apply structure, properties, and relationships to individual nodes (bullet points) within your workspace. By typing ` @` followed by a tag name, you instantly inherit fields like dates, statuses, or assignees, transforming a simple text bullet into a structured database record.

Tana represents a fundamental shift in [personal knowledge management](/posts/digital-decluttering-for-information-overload/) (PKM). Instead of relying on rigid folder hierarchies or purely text-based bi-directional links, Tana operates entirely on nodes and tags. If you have recently opened Tana and felt overwhelmed by the blank daily page, you are not alone. The power of this tool lies under the surface, specifically within its tagging architecture.

This Tana Supertags tutorial for beginners will walk you through the foundational concepts of Tana's object-oriented approach. By the end of this guide, you will understand how to build your own functional workspace, transitioning from chaotic plain-text notes to a highly structured, query-driven database. Supertags are the engine that makes Tana work. When you master them, you eliminate the need to manually file information away, relying instead on search and context to surface what you need, exactly when you need it.

## The Foundation: What Are Tana Supertags?

At its core, every line of text in Tana is a node. In traditional [note-taking](/posts/zettelkasten-method-explained/) apps, a bullet point is just text. In Tana, a node can act as a document, a folder, a task, or a database entry. A Supertag is what defines the behavior and structure of that node.

Think of a Supertag as a class in object-oriented programming, or a highly advanced template. When you assign a Supertag to a node by typing ` @`, you apply a predefined set of fields and characteristics to it. For example, applying the ` @person` Supertag to the name "Jane Doe" might automatically generate fields for Email, Company, and Last Contact Date.

This approach solves the primary problem of traditional database [tools](/posts/personal-knowledge-management-tools-comparison/) like [Notion](/posts/what-is-personal-knowledge-management/), where information is locked inside specific tables. In Tana, information lives anywhere—most commonly on your daily page—and the Supertag dictates how that information is formatted and retrieved. This bottom-up structure allows you to capture ideas at the speed of thought without context switching.

## Setting Up Your First Supertag

Creating your first Supertag is the best way to understand how they function. Let us build a fundamental tag that almost every workspace requires: the ` @task` tag.

### Step 1: Create the Tag
Open your Tana workspace and navigate to your daily page. Type `Task` and press enter to create a new node. Click on the node, type ` @`, and type `task`. Since this tag does not exist yet, Tana will prompt you to create it. Select "Create supertag '#task'".

### Step 2: Define the Fields
Click the configuration icon (the gear or simply click the tag itself) to open the Supertag configuration menu. Here, you will define the properties of your task.
Add a new field called `Status`. Change the field type to "Options" and define the choices: To Do, In Progress, and Done.
Add another field called `Due Date` and set the field type to "Date".

### Step 3: Set Default Values
In the Supertag configuration, you can set default values so that new nodes automatically populate with specific data. For your ` @task` tag, set the default `Status` to "To Do". Now, every time you tag a new node with ` @task`, it will automatically be marked as "To Do" without any extra clicks.

## Building Advanced Structures with Inheritance

One of the most powerful features of Tana Supertags is inheritance. This concept allows you to create child tags that inherit the properties of a parent tag, while adding their own specific fields. This prevents redundant work and keeps your database schema clean.

### Understanding Parent and Child Tags
Imagine you manage different types of content: articles, videos, and podcasts. You could create an overarching ` @content` tag that includes fields applicable to all formats, such as `Publish Date`, `Author`, and `Status`.

Then, you can create a ` @video` tag. In the configuration for ` @video`, you can set its parent tag to ` @content`. The ` @video` tag instantly inherits the `Publish Date`, `Author`, and `Status` fields. You can then add specific fields to the ` @video` tag, such as `[YouTube](/posts/logseq-workflow-for-managing-youtube-scripts/) URL` or `B-Roll Required`.

If you decide later that all content needs a `Target Audience` field, you only need to add it to the parent ` @content` tag. All child tags, including ` @video` and ` @article`, will automatically update to include the new field. This modular approach is essential for maintaining a complex PKM system over time.

## How to Query Supertags

Structuring your data with Supertags is only half the process. The real value of Tana emerges when you retrieve that data using Live Searches. Because every tagged node is essentially a database record, you can build powerful views to aggregate information scattered across your workspace.

### Building a Basic Search
To find all your tasks, type `/search` in any node and select "Find nodes". In the query builder, set the parameter to "WITH tag" and select ` @task`. Tana will immediately display a list of every node in your workspace tagged as a task.

### Refining with Filters
You rarely want to see every task you have ever created. You need to narrow the scope. In the search node, add another parameter: "Status IS NOT Done". This filters the list to show only active tasks.

### Creating Views
By default, Tana displays search results as a simple list. However, because your ` @task` tag has structured fields, you can view this data in different ways. Click the view options on your search node and select "Board". Set the grouping to the `Status` field. You have just created a fully functional Kanban board pulling tasks from every corner of your workspace, driven entirely by your Supertags.

## Practical Tana Supertag Architectures for Beginners

When starting out, it is tempting to create a tag for everything. This leads to friction and tag fatigue. Instead, [focus](/posts/managing-digital-information-overload-tips/) on a few core architectures that provide immediate value.

### The CRM Configuration
Managing contacts is a perfect use case for Supertags.
Create a ` @person` tag with fields: `Email` (URL field), `Company` (Node field linked to an ` @company` tag), and `Relationship Strength` (Number or Options field).
Whenever you have a meeting, you simply tag the attendees on your daily page with ` @person`. You never have to open a separate "Contacts" database to add them; they are integrated directly into your [workflow](/posts/using-the-para-method-in-google-drive/).

### The Meeting Notes System
Meetings generate actionable data that often gets lost in long text documents.
Create a ` @meeting` tag. Inside its configuration, you can build a default template. This means whenever you tag a node with ` @meeting`, it automatically populates child nodes such as "Agenda," "Notes," and "Action Items."
Because you already have a ` @task` tag, you can drop tasks directly into the "Action Items" section of your meeting node. A global task query will automatically pull these action items into your daily to-do list, preserving the context of the meeting they originated from.

### The Content Consumption Tracker
To manage articles, books, and videos you want to consume, create a ` @resource` tag. Include fields for `URL`, `Author`, `Topic`, and a `Status` option (To Read, Reading, Finished). You can build a search query on your daily page that surfaces unread resources whenever you have free time, filtered by specific topics.

## Best Practices for Managing Your Tags

As your workspace grows, maintaining a clean tag architecture becomes critical. Here are specific recommendations for beginners to avoid common pitfalls.

1.  **Start small:** Limit yourself to fewer than ten Supertags during your first month. Good candidates are ` @task`, ` @meeting`, ` @person`, ` @resource`, and ` @note`.
2.  **Use the daily page:** Resist the urge to build rigid folder structures. Do your work on the daily page and let your tags and search queries organize the data automatically.
3.  **Consolidate similar tags:** If you have a ` @book` tag and an ` @article` tag with almost identical fields, merge them into a single ` @source` or ` @resource` tag and use an "Options" field to define the format.
4.  **Leverage command nodes:** Tana allows you to build commands directly into tags. For example, you can add a button to your ` @task` tag that automatically changes the status to "Done" and records the completion date. Start experimenting with commands once you are comfortable with basic fields.

## Conclusion

Mastering Tana requires a mental shift from placing files into folders to applying structure to nodes. This Tana Supertags tutorial for beginners serves as your foundation for that transition. By leveraging Supertags to define fields, utilizing inheritance for efficient database design, and surfacing your data through targeted queries, you can build a personalized knowledge management system that scales infinitely. The initial setup requires deliberate thought, but the result is a frictionless workflow where information is never lost.

## Frequently Asked Questions

### What is the difference between a normal tag and a Supertag in Tana?
A normal tag in other apps simply groups notes together. A Tana Supertag applies [structured data](/posts/top-tana-alternatives-for-structured-data/) fields, default values, and inheritance rules to a specific piece of text, effectively turning it into a database row.

### Can I change a Supertag after I have already used it on many nodes?
Yes. If you add a new field to a Supertag, every single node that already has that tag will instantly update to include the new field. This makes iterative design very safe in Tana.

### Do I need to know how to code to use Tana Supertags?
No coding is required. While the concept is based on object-oriented programming, the interface is entirely visual. You build fields, set options, and create queries using dropdown menus and point-and-click logic.

### How many Supertags should a beginner start with?
Beginners should start with 3 to 5 core Supertags, such as ` @task`, ` @meeting`, and ` @person`. Keeping the number low prevents overwhelm and allows you to understand the search and query mechanics before scaling up.

### Why use Tana over Notion for database management?
Notion forces you to create data within specific tables, leading to context switching. Tana allows you to capture structured data anywhere—like the middle of a meeting note on your daily page—and automatically aggregates it using Supertags and live searches.

---

## Related Reading

- [Tana AI Features for Structured Data Entry: Complete Guide](/posts/tana-ai-features-for-structured-data-entry/)
- [Arivu vs Readwise for Information Capture: Which Is Better?](/posts/arivu-vs-readwise-for-information-capture/)
---
"""

frontmatter_match = re.match(r"---(.*?)---", article_content, re.DOTALL)
frontmatter = frontmatter_match.group(0)
body = article_content[len(frontmatter):]

# Translate frontmatter title and description
translated_frontmatter = frontmatter.replace(
    'title: "Tana Supertags Tutorial for Beginners: A Step-by-Step Guide"',
    'title: "Tana Supertags新手教程：分步指南"'
).replace(
    'description: "Follow this Tana Supertags tutorial for beginners to master node-based knowledge management, build custom workflows, and organize your digital workspace fast."',
    'description: "遵循这份Tana Supertags新手教程，掌握基于节点的知识管理，构建自定义工作流，并快速组织您的数字工作空间。"'
)

# Translate the body content. I will provide the full translated content.
translated_body = """
# Tana Supertags新手教程：分步指南

> **快速回答：** Tana Supertags是可定制的[模板](/zh-cn/posts/logseq-templates-for-doctoral-research-students/)，可将结构、属性和关系应用于工作空间中的单个节点（项目符号）。通过键入`@`后跟标签名称，您可以立即继承日期、状态或受让人等字段，将简单的文本项目符号转换为结构化的数据库记录。

Tana代表了[个人知识管理](/zh-cn/posts/digital-decluttering-for-information-overload/)（PKM）的根本性转变。Tana不依赖僵硬的文件夹层次结构或纯文本的双向链接，而是完全基于节点和标签运行。如果您最近打开Tana并感到被空白的每日页面所淹没，那么您并不孤单。这个工具的力量在于其表面之下，特别是在其标签架构中。

这份Tana Supertags新手教程将引导您了解Tana面向对象方法的基本概念。在本指南结束时，您将了解如何构建自己的功能性工作空间，从混乱的纯文本笔记过渡到高度结构化、查询驱动的数据库。Supertags是Tana工作的引擎。当您掌握它们时，您无需手动归档信息，而是依靠搜索和上下文来准确地在需要时浮现信息。

## 基础：什么是Tana Supertags？

其核心是，Tana中的每一行文本都是一个节点。在传统的[笔记记录](/zh-cn/posts/zettelkasten-method-explained/)应用程序中，项目符号只是文本。在Tana中，节点可以充当文档、文件夹、任务或数据库条目。Supertag定义了该节点的行为和结构。

将Supertag视为面向对象编程中的类，或高度先进的模板。当您通过键入`@`将Supertag分配给节点时，您会对其应用一组预定义的字段和特性。例如，将`@person` Supertag应用于名称“Jane Doe”可能会自动生成电子邮件、公司和上次联系日期等字段。

这种方法解决了传统数据库[工具](/zh-cn/posts/personal-knowledge-management-tools-comparison/)（如[Notion](/zh-cn/posts/what-is-personal-knowledge-management/)）的主要问题，即信息被锁定在特定表格中。在Tana中，信息无处不在——最常见的是在您的每日页面上——而Supertag决定了信息的格式和检索方式。这种自下而上的结构允许您以思考的速度捕获想法，而无需上下文切换。

## 设置您的第一个Supertag

创建您的第一个Supertag是了解其功能的最佳方式。让我们构建一个几乎每个工作空间都需要的基本标签：`@task`标签。

### 步骤1：创建标签
打开您的Tana工作空间并导航到您的每日页面。键入`Task`并按Enter键创建新节点。单击节点，键入`@`，然后键入`task`。由于此标签尚不存在，Tana将提示您创建它。选择“创建supertag '#task'”。

### 2：定义字段
单击配置图标（齿轮或直接单击标签本身）打开Supertag配置菜单。在这里，您将定义任务的属性。
添加一个名为`Status`的新字段。将字段类型更改为“Options”并定义选择：“To Do”、“In Progress”和“Done”。
添加另一个名为`Due Date`的字段，并将字段类型设置为“Date”。

### 步骤3：设置默认值
在Supertag配置中，您可以设置默认值，以便新节点自动填充特定数据。对于您的`@task`标签，将默认`Status`设置为“To Do”。现在，每当您使用`@task`标记新节点时，它都会自动标记为“To Do”，无需额外点击。

## 使用继承构建高级结构

Tana Supertags最强大的功能之一是继承。这个概念允许您创建子标签，这些子标签继承父标签的属性，同时添加自己的特定字段。这可以防止重复工作并保持您的数据库模式干净。

### 理解父子标签
假设您管理不同类型的内容：文章、视频和播客。您可以创建一个包含适用于所有格式的字段的总体`@content`标签，例如`Publish Date`、`Author`和`Status`。

然后，您可以创建一个`@video`标签。在`@video`的配置中，您可以将其父标签设置为`@content`。`@video`标签会立即继承`Publish Date`、`Author`和`Status`字段。然后，您可以向`@video`标签添加特定字段，例如`[YouTube](/zh-cn/posts/logseq-workflow-for-managing-youtube-scripts/) URL`或`B-Roll Required`。

如果您稍后决定所有内容都需要一个`Target Audience`字段，您只需将其添加到父`@content`标签。所有子标签，包括`@video`和`@article`，都将自动更新以包含新字段。这种模块化方法对于长期维护复杂的PKM系统至关重要。

## 如何查询Supertag

使用Supertags构建数据结构只是过程的一半。Tana的真正价值在于您使用Live Searches检索数据时。因为每个标记的节点本质上都是一个数据库记录，所以您可以构建强大的视图来聚合散布在工作空间中的信息。

### 构建基本搜索
要查找所有任务，请在任何节点中键入`/search`并选择“Find nodes”。在查询构建器中，将参数设置为“WITH tag”并选择`@task`。Tana将立即显示工作空间中所有标记为任务的节点列表。

### 使用过滤器进行优化
您很少想查看您创建的每个任务。您需要缩小范围。在搜索节点中，添加另一个参数：“Status IS NOT Done”。这会将列表过滤为仅显示活动任务。

### 创建视图
默认情况下，Tana将搜索结果显示为简单列表。但是，因为您的`@task`标签具有结构化字段，所以您可以以不同的方式查看此数据。单击搜索节点上的视图选项并选择“Board”。将分组设置为`Status`字段。您刚刚创建了一个功能齐全的看板，它从工作空间的各个角落拉取任务，完全由您的Supertags驱动。

## Tana Supertag新手实用架构

刚开始时，为所有内容创建标签很诱人。这会导致摩擦和标签疲劳。相反，[专注于](/zh-cn/posts/managing-digital-information-overload-tips/)几个核心架构，这些架构可立即提供价值。

### CRM配置
管理联系人是Supertags的完美用例。
创建一个`@person`标签，其中包含字段：`Email`（URL字段）、`Company`（链接到`@company`标签的节点字段）和`Relationship Strength`（数字或选项字段）。
每当您开会时，您只需在每日页面上使用`@person`标记与会者。您无需打开单独的“联系人”数据库即可添加他们；他们直接集成到您的[工作流](/zh-cn/posts/using-the-para-method-in-google-drive/)中。

### 会议笔记系统
会议会生成可操作的数据，这些数据经常在长文本文档中丢失。
创建一个`@meeting`标签。在其配置内部，您可以构建一个默认模板。这意味着每当您使用`@meeting`标记节点时，它都会自动填充子节点，例如“Agenda”、“Notes”和“Action Items”。
因为您已经有一个`@task`标签，所以您可以直接将任务放入会议节点的“Action Items”部分。全局任务查询会自动将这些行动项目拉入您的每日待办事项列表，从而保留它们源自的会议上下文。

### 内容消费跟踪器
要管理您想要消费的文章、书籍和视频，请创建一个`@resource`标签。包含`URL`、`Author`、`Topic`和`Status`选项（“To Read”、“Reading”、“Finished”）的字段。您可以在每日页面上构建一个搜索查询，该查询可在您有空闲时间时浮现未读资源，并按特定主题进行过滤。

## 管理标签的最佳实践

随着工作空间的增长，保持清晰的标签架构至关重要。以下是一些针对初学者的具体建议，以避免常见的陷阱。

1.  **从小处开始：** 在第一个月内将Supertags的数量限制在十个以内。`@task`、`@meeting`、`@person`、`@resource`和`@note`是很好的候选者。
2.  **使用每日页面：** 抵制构建僵硬文件夹结构的冲动。在每日页面上完成您的工作，让您的标签和搜索查询自动组织数据。
3.  **整合相似标签：** 如果您有一个`@book`标签和一个`@article`标签，它们具有几乎相同的字段，请将它们合并为单个`@source`或`@resource`标签，并使用“Options”字段定义格式。
4.  **利用命令节点：** Tana允许您直接在标签中构建命令。例如，您可以向`@task`标签添加一个按钮，该按钮会自动将状态更改为“Done”并记录完成日期。一旦您熟悉了基本字段，就可以开始尝试命令。

## 结论

掌握Tana需要将思维模式从将文件放入文件夹转变为将结构应用于节点。这份Tana Supertags新手教程是您实现这种转变的基础。通过利用Supertags定义字段、利用继承进行高效的数据库设计以及通过有针对性的查询浮现数据，您可以构建一个可无限扩展的个性化知识管理系统。最初的设置需要深思熟虑，但结果是一个无摩擦的工作流，信息永不丢失。

## 常见问题

### 普通标签和Tana Supertag有什么区别？
其他应用程序中的普通标签只是将笔记分组在一起。Tana Supertag将[结构化数据](/zh-cn/posts/top-tana-alternatives-for-structured-data/)字段、默认值和继承规则应用于特定文本，从而有效地将其转换为数据库行。

### 我使用过许多节点后，还可以更改Supertag吗？
是的。如果您向Supertag添加新字段，所有已经具有该标签的节点都将立即更新以包含新字段。这使得Tana中的迭代设计非常安全。

### 我需要了解如何编码才能使用Tana Supertags吗？
无需编码。虽然概念基于面向对象编程，但界面完全是可视化的。您可以使用下拉菜单和点击逻辑构建字段、设置选项并创建查询。

### 初学者应该从多少个Supertag开始？
初学者应该从3到5个核心Supertag开始，例如`@task`、`@meeting`和`@person`。保持数量少可以防止不堪重负，并允许您在扩展之前了解搜索和查询机制。

### 为什么使用Tana而不是Notion进行数据库管理？
Notion强制您在特定表格中创建数据，导致上下文切换。Tana允许您在任何地方捕获结构化数据（例如在每日页面上的会议笔记中间），并使用Supertags和实时搜索自动聚合它。

---

## 相关阅读

- [Tana AI Features for Structured Data Entry: Complete Guide](/zh-cn/posts/tana-ai-features-for-structured-data-entry/)
- [Arivu vs Readwise for Information Capture: Which Is Better?](/zh-cn/posts/arivu-vs-readwise-for-information-capture/)
---
"""

final_output = f"{translated_frontmatter}\n{translated_body}"

# Remap links in the entire final_output
final_translated_parts = []
current_position = 0
for match in re.finditer(r"\]\((.*?)\)", final_output):
    final_translated_parts.append(final_output[current_position:match.start()])
    final_translated_parts.append(remap_link(match))
    current_position = match.end()
final_translated_parts.append(final_output[current_position:])
final_translated_markdown = "".join(final_translated_parts)

print(final_translated_markdown)
```
```markdown
---
image: "/og/tana-supertags-tutorial-for-beginners.webp"
editorSummary: >-
  Tana Supertags Tutorial Beginners transforms how you structure nodes by applying
  customizable templates that turn simple bullet points into database records. I found the
  step-by-step approach to defining fields and setting default values particularly valuable
  for avoiding tag fatigue—a common pitfall when creators try to tag everything at once. The
  inheritance feature deserves special attention: child tags automatically inherit parent
  properties, so updating a single @pkm-insights/content/posts/zh-cn/map-of-content-obsidian-tutorial-for-beginners.md tag cascades to @ai-tools-pro/content/posts/ai-tools-for-video-editing-2026.md and @translated_article_zh-cn.md
  simultaneously. This modular design scales your workspace without redundant maintenance. The
  trade-off is that initial setup requires deliberate thought about your tag architecture, but
  the payoff is a frictionless, query-driven system where information surfaces exactly when
  needed.
authorNote: >-
  I tested the CRM configuration by tagging meeting attendees with @translated_semantic_layers_in_personal_knowledge_management.md directly on my
  daily page rather than switching to a separate contacts database. The real advantage emerged
  when I linked the Company field to an @company tag—suddenly I could query all people from a
  specific organization without manual filtering. However, I discovered that without
  discipline on field naming conventions early on, my queries returned inconsistent results
  across older and newer entries, forcing a cleanup phase.
manualRelated:
  - title: "Tana AI Features for Structured Data Entry: Complete Guide"
    url: "/zh-cn/posts/tana-ai-features-for-structured-data-entry/"
  - title: "Arivu vs Readwise for Information Capture: Which Is Better?"
    url: "/zh-cn/posts/arivu-vs-readwise-for-information-capture/"
  - title: "Best Logseq Templates for Doctoral Research Students"
    url: "/zh-cn/posts/logseq-templates-for-doctoral-research-students/"
title: "Tana Supertags新手教程：分步指南"
description: "遵循这份Tana Supertags新手教程，掌握基于节点的知识管理，构建自定义工作流，并快速组织您的数字工作空间。"
pubDate: "2026-05-01"
author: "Alex Chen"
tags: ["tana", "knowledge management", "productivity workflows", "pkm beginners"]
slug: "tana-supertags-tutorial-for-beginners"
type: "informational"
---

# Tana Supertags新手教程：分步指南

> **快速回答：** Tana Supertags是可定制的[模板](/zh-cn/posts/logseq-templates-for-doctoral-research-students/)，可将结构、属性和关系应用于工作空间中的单个节点（项目符号）。通过键入`@`后跟标签名称，您可以立即继承日期、状态或受让人等字段，将简单的文本项目符号转换为结构化的数据库记录。

Tana代表了[个人知识管理](/zh-cn/posts/digital-decluttering-for-information-overload/)（PKM）的根本性转变。Tana不依赖僵硬的文件夹层次结构或纯文本的双向链接，而是完全基于节点和标签运行。如果您最近打开Tana并感到被空白的每日页面所淹没，那么您并不孤单。这个工具的力量在于其表面之下，特别是在其标签架构中。

这份Tana Supertags新手教程将引导您了解Tana面向对象方法的基本概念。在本指南结束时，您将了解如何构建自己的功能性工作空间，从混乱的纯文本笔记过渡到高度结构化、查询驱动的数据库。Supertags是Tana工作的引擎。当您掌握它们时，您无需手动归档信息，而是依靠搜索和上下文来准确地在需要时浮现信息。

## 基础：什么是Tana Supertags？

其核心是，Tana中的每一行文本都是一个节点。在传统的[笔记记录](/zh-cn/posts/zettelkasten-method-explained/)应用程序中，项目符号只是文本。在Tana中，节点可以充当文档、文件夹、任务或数据库条目。Supertag定义了该节点的行为和结构。

将Supertag视为面向对象编程中的类，或高度先进的模板。当您通过键入`@`将Supertag分配给节点时，您会对其应用一组预定义的字段和特性。例如，将`@person` Supertag应用于名称“Jane Doe”可能会自动生成电子邮件、公司和上次联系日期等字段。

这种方法解决了传统数据库[工具](/zh-cn/posts/personal-knowledge-management-tools-comparison/)（如[Notion](/zh-cn/posts/what-is-personal-knowledge-management/)）的主要问题，即信息被锁定在特定表格中。在Tana中，信息无处不在——最常见的是在您的每日页面上——而Supertag决定了信息的格式和检索方式。这种自下而上的结构允许您以思考的速度捕获想法，而无需上下文切换。

## 设置您的第一个Supertag

创建您的第一个Supertag是了解其功能的最佳方式。让我们构建一个几乎每个工作空间都需要的基本标签：`@task`标签。

### 步骤1：创建标签
打开您的Tana工作空间并导航到您的每日页面。键入`Task`并按Enter键创建新节点。单击节点，键入`@`，然后键入`task`。由于此标签尚不存在，Tana将提示您创建它。选择“创建supertag '#task'”。

### 2：定义字段
单击配置图标（齿轮或直接单击标签本身）打开Supertag配置菜单。在这里，您将定义任务的属性。
添加一个名为`Status`的新字段。将字段类型更改为“Options”并定义选择：“To Do”、“In Progress”和“Done”。
添加另一个名为`Due Date`的字段，并将字段类型设置为“Date”。

### 步骤3：设置默认值
在Supertag配置中，您可以设置默认值，以便新节点自动填充特定数据。对于您的`@task`标签，将默认`Status`设置为“To Do”。现在，每当您使用`@task`标记新节点时，它都会自动标记为“To Do”，无需额外点击。

## 使用继承构建高级结构

Tana Supertags最强大的功能之一是继承。这个概念允许您创建子标签，这些子标签继承父标签的属性，同时添加自己的特定字段。这可以防止重复工作并保持您的数据库模式干净。

### 理解父子标签
假设您管理不同类型的内容：文章、视频和播客。您可以创建一个包含适用于所有格式的字段的总体`@content`标签，例如`Publish Date`、`Author`和`Status`。

然后，您可以创建一个`@video`标签。在`@video`的配置中，您可以将其父标签设置为`@content`。`@video`标签会立即继承`Publish Date`、`Author`和`Status`字段。然后，您可以向`@video`标签添加特定字段，例如`[YouTube](/zh-cn/posts/logseq-workflow-for-managing-youtube-scripts/) URL`或`B-Roll Required`。

如果您稍后决定所有内容都需要一个`Target Audience`字段，您只需将其添加到父`@content`标签。所有子标签，包括`@video`和`@article`，都将自动更新以包含新字段。这种模块化方法对于长期维护复杂的PKM系统至关重要。

## 如何查询Supertag

使用Supertags构建数据结构只是过程的一半。Tana的真正价值在于您使用Live Searches检索数据时。因为每个标记的节点本质上都是一个数据库记录，所以您可以构建强大的视图来聚合散布在工作空间中的信息。

### 构建基本搜索
要查找所有任务，请在任何节点中键入`/search`并选择“Find nodes”。在查询构建器中，将参数设置为“WITH tag”并选择`@task`。Tana将立即显示工作空间中所有标记为任务的节点列表。

### 使用过滤器进行优化
您很少想查看您创建的每个任务。您需要缩小范围。在搜索节点中，添加另一个参数：“Status IS NOT Done”。这会将列表过滤为仅显示活动任务。

### 创建视图
默认情况下，Tana将搜索结果显示为简单列表。但是，因为您的`@task`标签具有结构化字段，所以您可以以不同的方式查看此数据。单击搜索节点上的视图选项并选择“Board”。将分组设置为`Status`字段。您刚刚创建了一个功能齐全的看板，它从工作空间的各个角落拉取任务，完全由您的Supertags驱动。

## Tana Supertag新手实用架构

刚开始时，为所有内容创建标签很诱人。这会导致摩擦和标签疲劳。相反，[专注于](/zh-cn/posts/managing-digital-information-overload-tips/)几个核心架构，这些架构可立即提供价值。

### CRM配置
管理联系人是Supertags的完美用例。
创建一个`@person`标签，其中包含字段：`Email`（URL字段）、`Company`（链接到`@company`标签的节点字段）和`Relationship Strength`（数字或选项字段）。
每当您开会时，您只需在每日页面上使用`@person`标记与会者。您无需打开单独的“联系人”数据库即可添加他们；他们直接集成到您的[工作流](/zh-cn/posts/using-the-para-method-in-google-drive/)中。

### 会议笔记系统
会议会生成可操作的数据，这些数据经常在长文本文档中丢失。
创建一个`@meeting`标签。在其配置内部，您可以构建一个默认模板。这意味着每当您使用`@meeting`标记节点时，它都会自动填充子节点，例如“Agenda”、“Notes”和“Action Items”。
因为您已经有一个`@task`标签，所以您可以直接将任务放入会议节点的“Action Items”部分。全局任务查询会自动将这些行动项目拉入您的每日待办事项列表，从而保留它们源自的会议上下文。

### 内容消费跟踪器
要管理您想要消费的文章、书籍和视频，请创建一个`@resource`标签。包含`URL`、`Author`、`Topic`和`Status`选项（“To Read”、“Reading”、“Finished”）的字段。您可以在每日页面上构建一个搜索查询，该查询可在您有空闲时间时浮现未读资源，并按特定主题进行过滤。

## 管理标签的最佳实践

随着工作空间的增长，保持清晰的标签架构至关重要。以下是一些针对初学者的具体建议，以避免常见的陷阱。

1.  **从小处开始：** 在第一个月内将Supertags的数量限制在十个以内。`@task`、`@meeting`、`@person`、`@resource`和`@note`是很好的候选者。
2.  **使用每日页面：** 抵制构建僵硬文件夹结构的冲动。在每日页面上完成您的工作，让您的标签和搜索查询自动组织数据。
3.  **整合相似标签：** 如果您有一个`@book`标签和一个`@article`标签，它们具有几乎相同的字段，请将它们合并为单个`@source`或`@resource`标签，并使用“Options”字段定义格式。
4.  **利用命令节点：** Tana允许您直接在标签中构建命令。例如，您可以向`@task`标签添加一个按钮，该按钮会自动将状态更改为“Done”并记录完成日期。一旦您熟悉了基本字段，就可以开始尝试命令。

## 结论

掌握Tana需要将思维模式从将文件放入文件夹转变为将结构应用于节点。这份Tana Supertags新手教程是您实现这种转变的基础。通过利用Supertags定义字段、利用继承进行高效的数据库设计以及通过有针对性的查询浮现数据，您可以构建一个可无限扩展的个性化知识管理系统。最初的设置需要深思熟虑，但结果是一个无摩擦的工作流，信息永不丢失。

## 常见问题

### 普通标签和Tana Supertag有什么区别？
其他应用程序中的普通标签只是将笔记分组在一起。Tana Supertag将[结构化数据](/zh-cn/posts/top-tana-alternatives-for-structured-data/)字段、默认值和继承规则应用于特定文本，从而有效地将其转换为数据库行。

### 我使用过许多节点后，还可以更改Supertag吗？
是的。如果您向Supertag添加新字段，所有已经具有该标签的节点都将立即更新以包含新字段。这使得Tana中的迭代设计非常安全。

### 我需要了解如何编码才能使用Tana Supertags吗？
无需编码。虽然概念基于面向对象编程，但界面完全是可视化的。您可以使用下拉菜单和点击逻辑构建字段、设置选项并创建查询。

### 初学者应该从多少个Supertag开始？
初学者应该从3到5个核心Supertag开始，例如`@task`、`@meeting`和`@person`。保持数量少可以防止不堪重负，并允许您在扩展之前了解搜索和查询机制。

### 为什么使用Tana而不是Notion进行数据库管理？
Notion强制您在特定表格中创建数据，导致上下文切换。Tana允许您在任何地方捕获结构化数据（例如在每日页面上的会议笔记中间），并使用Supertags和实时搜索自动聚合它。

---

## 相关阅读

- [Tana AI Features for Structured Data Entry: Complete Guide](/zh-cn/posts/tana-ai-features-for-structured-data-entry/)
- [Arivu vs Readwise for Information Capture: Which Is Better?](/zh-cn/posts/arivu-vs-readwise-for-information-capture/)
---