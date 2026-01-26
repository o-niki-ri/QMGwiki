# How to Add a New Page

This wiki is built with **MkDocs** using the **Material theme** and hosted on GitHub Pages. Changes pushed to the `main` branch are automatically deployed.

The first step is to consider whether your file should be an addition to an existing SOP, or should be the start of a new SOP tree.

Whether you want to update a page or make a new one, you will first have to navigate to the `docs` folder in the [QMG Wiki](https://o-niki-ri.github.io/QMGwiki/).

![Navigate to docs](_static/docs-nav.png)


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

**Step 6:** Update `mkdocs.yml`

!!! warning "Don't skip this step!"
    If you don't add your page to the `nav:` section in `mkdocs.yml`, it won't appear in the navigation menu.

Open `mkdocs.yml` in the repository root and add your new page to the `nav:` section:

```yaml
nav:
  - Home: index.md
  - SOPs:
      - Fabrication Methods: sops/fabrication.md
      - Your New Page: sops/your-new-page.md  # Add your page here
```

Commit this change as well.

**Step 7:** Verify it appears on the wiki

![Step 7](_static/add-to-new/add-to-new-6.png){ width="70%" }

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

---

## Local Preview (Optional)

To preview changes locally before pushing:

```bash
pip install mkdocs-material
mkdocs serve
```

Then open `http://127.0.0.1:8000` in your browser.

---

!!! tip
    Always check your changes have rendered the way you expect on the [QMG Wiki](https://o-niki-ri.github.io/QMGwiki/).
