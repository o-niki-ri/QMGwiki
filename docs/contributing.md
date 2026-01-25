# How to Add a New Page

The first step is to consider whether your file should be an addition to an existing SOP, or should be the start of a new SOP tree. Let's explore the difference.

---

## Adding to an Existing File

Open that file, make changes, commit those changes, and push it to the main branch.

**Step 1:** Navigate to the file on GitHub

![Step 1](_static/add-to-existing/add-to-existing-1.png)

**Step 2:** Click the edit button

![Step 2](_static/add-to-existing/add-to-existing-2.png)

**Step 3:** Make your changes

![Step 3](_static/add-to-existing/add-to-existing-3.png)

**Step 4:** Write a commit message

![Step 4](_static/add-to-existing/add-to-existing-4.png){ width="60%" }

**Step 5:** Commit changes

![Step 5](_static/add-to-existing/add-to-existing-5.png){ width="60%" }

**Step 6:** Verify your changes

![Step 6](_static/add-to-existing/add-to-existing-6.png){ width="60%" }

---

## Creating a New SOP File

Prepare your document offline as much as possible before adding it to the wiki. Once ready, follow these steps:

**Step 1:** Navigate to the docs folder

![Step 1](_static/add-to-new/add-to-new-1.png)

**Step 2:** Click "Add file"

![Step 2](_static/add-to-new/add-to-new-2.png)

**Step 3:** Create your new file

![Step 3](_static/add-to-new/add-to-new-3.png)

**Step 4:** Write your content

![Step 4](_static/add-to-new/add-to-new-4.png){ width="50%" }

**Step 5:** Commit the new file

![Step 5](_static/add-to-new/add-to-new-5.png)

**Step 6:** Verify it appears

![Step 6](_static/add-to-new/add-to-new-6.png){ width="70%" }

---

## Markdown Syntax

This wiki uses **Markdown** (`.md` files) instead of reStructuredText.

### Basic Formatting

```markdown
# Heading 1
## Heading 2
### Heading 3

**bold text**
*italic text*

- bullet point
- another point

1. numbered list
2. second item

[Link text](https://example.com)
```

### Adding Images

Images should be stored in `docs/_static/`. Either directly or in a folder for multiple pictures.

```markdown
![Alt text](../_static/your-image.png)

<!-- With custom width -->
![Alt text](../_static/your-image.png){ width="50%" }
```

### Adding Notes/Warnings

```markdown
!!! note
    This is a note box.

!!! warning
    This is a warning box.

!!! tip
    This is a tip box.
```

---

!!! tip
    Always check your changes have rendered the way you expect on the [QMG Wiki](https://o-niki-ri.github.io/QMGwiki/).
