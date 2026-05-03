---
image: "/og/tana-supertags-tutorial-for-beginners.webp"
title: "Tana Supertags Tutorial for Beginners: A Step-by-Step Guide"
description: "Follow this Tana Supertags tutorial for beginners to master node-based knowledge management, build custom workflows, and organize your digital workspace fast."
pubDate: "2026-05-01"
author: "Alex Chen"
tags: ["tana", "knowledge management", "productivity workflows", "pkm beginners"]
slug: "tana-supertags-tutorial-for-beginners"
type: "informational"
---

# Tana Supertags Tutorial for Beginners: A Step-by-Step Guide

> **Quick Answer:** Tana Supertags are customizable templates that apply structure, properties, and relationships to individual nodes (bullet points) within your workspace. By typing `@` followed by a tag name, you instantly inherit fields like dates, statuses, or assignees, transforming a simple text bullet into a structured database record.

Tana represents a fundamental shift in [personal knowledge management](/posts/digital-decluttering-for-information-overload/) (PKM). Instead of relying on rigid folder hierarchies or purely text-based bi-directional links, Tana operates entirely on nodes and tags. If you have recently opened Tana and felt overwhelmed by the blank daily page, you are not alone. The power of this tool lies under the surface, specifically within its tagging architecture.

This Tana Supertags tutorial for beginners will walk you through the foundational concepts of Tana's object-oriented approach. By the end of this guide, you will understand how to build your own functional workspace, transitioning from chaotic plain-text notes to a highly structured, query-driven database. Supertags are the engine that makes Tana work. When you master them, you eliminate the need to manually file information away, relying instead on search and context to surface what you need, exactly when you need it.

## The Foundation: What Are Tana Supertags?

At its core, every line of text in Tana is a node. In traditional [note-taking](/posts/zettelkasten-method-explained/) apps, a bullet point is just text. In Tana, a node can act as a document, a folder, a task, or a database entry. A Supertag is what defines the behavior and structure of that node.

Think of a Supertag as a class in object-oriented programming, or a highly advanced template. When you assign a Supertag to a node by typing `@`, you apply a predefined set of fields and characteristics to it. For example, applying the `@person` Supertag to the name "Jane Doe" might automatically generate fields for Email, Company, and Last Contact Date. 

This approach solves the primary problem of traditional database tools like [Notion](/posts/what-is-personal-knowledge-management/), where information is locked inside specific tables. In Tana, information lives anywhere—most commonly on your daily page—and the Supertag dictates how that information is formatted and retrieved. This bottom-up structure allows you to capture ideas at the speed of thought without context switching.

## Setting Up Your First Supertag

Creating your first Supertag is the best way to understand how they function. Let us build a fundamental tag that almost every workspace requires: the `@task` tag.

### Step 1: Create the Tag
Open your Tana workspace and navigate to your daily page. Type `Task` and press enter to create a new node. Click on the node, type `@`, and type `task`. Since this tag does not exist yet, Tana will prompt you to create it. Select "Create supertag '#task'".

### Step 2: Define the Fields
Click the configuration icon (the gear or simply click the tag itself) to open the Supertag configuration menu. Here, you will define the properties of your task.
Add a new field called `Status`. Change the field type to "Options" and define the choices: To Do, In Progress, and Done.
Add another field called `Due Date` and set the field type to "Date".

### Step 3: Set Default Values
In the Supertag configuration, you can set default values so that new nodes automatically populate with specific data. For your `@task` tag, set the default `Status` to "To Do". Now, every time you tag a new node with `@task`, it will automatically be marked as "To Do" without any extra clicks.

## Building Advanced Structures with Inheritance

One of the most powerful features of Tana Supertags is inheritance. This concept allows you to create child tags that inherit the properties of a parent tag, while adding their own specific fields. This prevents redundant work and keeps your database schema clean.

### Understanding Parent and Child Tags
Imagine you manage different types of content: articles, videos, and podcasts. You could create an overarching `@content` tag that includes fields applicable to all formats, such as `Publish Date`, `Author`, and `Status`.

Then, you can create a `@video` tag. In the configuration for `@video`, you can set its parent tag to `@content`. The `@video` tag instantly inherits the `Publish Date`, `Author`, and `Status` fields. You can then add specific fields to the `@video` tag, such as `YouTube URL` or `B-Roll Required`.

If you decide later that all content needs a `Target Audience` field, you only need to add it to the parent `@content` tag. All child tags, including `@video` and `@article`, will automatically update to include the new field. This modular approach is essential for maintaining a complex PKM system over time.

## How to Query Supertags

Structuring your data with Supertags is only half the process. The real value of Tana emerges when you retrieve that data using Live Searches. Because every tagged node is essentially a database record, you can build powerful views to aggregate information scattered across your workspace.

### Building a Basic Search
To find all your tasks, type `/search` in any node and select "Find nodes". In the query builder, set the parameter to "WITH tag" and select `@task`. Tana will immediately display a list of every node in your workspace tagged as a task.

### Refining with Filters
You rarely want to see every task you have ever created. You need to narrow the scope. In the search node, add another parameter: "Status IS NOT Done". This filters the list to show only active tasks. 

### Creating Views
By default, Tana displays search results as a simple list. However, because your `@task` tag has structured fields, you can view this data in different ways. Click the view options on your search node and select "Board". Set the grouping to the `Status` field. You have just created a fully functional Kanban board pulling tasks from every corner of your workspace, driven entirely by your Supertags.

## Practical Tana Supertag Architectures for Beginners

When starting out, it is tempting to create a tag for everything. This leads to friction and tag fatigue. Instead, focus on a few core architectures that provide immediate value.

### The CRM Configuration
Managing contacts is a perfect use case for Supertags. 
Create a `@person` tag with fields: `Email` (URL field), `Company` (Node field linked to an `@company` tag), and `Relationship Strength` (Number or Options field).
Whenever you have a meeting, you simply tag the attendees on your daily page with `@person`. You never have to open a separate "Contacts" database to add them; they are integrated directly into your workflow.

### The Meeting Notes System
Meetings generate actionable data that often gets lost in long text documents.
Create a `@meeting` tag. Inside its configuration, you can build a default template. This means whenever you tag a node with `@meeting`, it automatically populates child nodes such as "Agenda," "Notes," and "Action Items."
Because you already have a `@task` tag, you can drop tasks directly into the "Action Items" section of your meeting node. A global task query will automatically pull these action items into your daily to-do list, preserving the context of the meeting they originated from.

### The Content Consumption Tracker
To manage articles, books, and videos you want to consume, create a `@resource` tag. Include fields for `URL`, `Author`, `Topic`, and a `Status` option (To Read, Reading, Finished). You can build a search query on your daily page that surfaces unread resources whenever you have free time, filtered by specific topics.

## Best Practices for Managing Your Tags

As your workspace grows, maintaining a clean tag architecture becomes critical. Here are specific recommendations for beginners to avoid common pitfalls.

1. **Start small:** Limit yourself to fewer than ten Supertags during your first month. Good candidates are `@task`, `@meeting`, `@person`, `@resource`, and `@note`.
2. **Use the daily page:** Resist the urge to build rigid folder structures. Do your work on the daily page and let your tags and search queries organize the data automatically.
3. **Consolidate similar tags:** If you have a `@book` tag and an `@article` tag with almost identical fields, merge them into a single `@source` or `@resource` tag and use an "Options" field to define the format.
4. **Leverage command nodes:** Tana allows you to build commands directly into tags. For example, you can add a button to your `@task` tag that automatically changes the status to "Done" and records the completion date. Start experimenting with commands once you are comfortable with basic fields.

## Conclusion

Mastering Tana requires a mental shift from placing files into folders to applying structure to nodes. This Tana Supertags tutorial for beginners serves as your foundation for that transition. By leveraging Supertags to define fields, utilizing inheritance for efficient database design, and surfacing your data through targeted queries, you can build a personalized knowledge management system that scales infinitely. The initial setup requires deliberate thought, but the result is a frictionless workflow where information is never lost.

## Frequently Asked Questions

### What is the difference between a normal tag and a Supertag in Tana?
A normal tag in other apps simply groups notes together. A Tana Supertag applies structured data fields, default values, and inheritance rules to a specific piece of text, effectively turning it into a database row.

### Can I change a Supertag after I have already used it on many nodes?
Yes. If you add a new field to a Supertag, every single node that already has that tag will instantly update to include the new field. This makes iterative design very safe in Tana.

### Do I need to know how to code to use Tana Supertags?
No coding is required. While the concept is based on object-oriented programming, the interface is entirely visual. You build fields, set options, and create queries using dropdown menus and point-and-click logic.

### How many Supertags should a beginner start with?
Beginners should start with 3 to 5 core Supertags, such as `@task`, `@meeting`, and `@person`. Keeping the number low prevents overwhelm and allows you to understand the search and query mechanics before scaling up.

### Why use Tana over Notion for database management?
Notion forces you to create data within specific tables, leading to context switching. Tana allows you to capture structured data anywhere—like the middle of a meeting note on your daily page—and automatically aggregates it using Supertags and live searches.

---

## Related Reading

- [Tana AI Features for Structured Data Entry: Complete Guide](/posts/tana-ai-features-for-structured-data-entry/)
- [Arivu vs Readwise for Information Capture: Which Is Better?](/posts/arivu-vs-readwise-for-information-capture/)
