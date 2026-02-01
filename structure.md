# Project Structure

## Directory Layout

```
.
├── docker/                 # Web Content Root
│   ├── assets/             # Static Assets
│   │   ├── css/            # Stylesheets
│   │   ├── js/             # JavaScript (Quiz, UI)
│   │   └── img/            # Images (Icon, OG)
│   ├── modules/            # HTML Content Fragments (Chapters)
│   │   ├── 01_decouverte.html
│   │   ├── ...
│   │   └── 11_securite.html
│   ├── templates/          # Build Templates
│   │   └── base.html       # Main HTML Skeleton
│   └── index.html          # Generated Production File
├── scripts/                # Build Tools
│   └── build.py            # Static Site Generator Script
├── about.md                # Project Context
├── changelog.md            # Version History
├── readme.md               # General Info & Usage
└── structure.md            # This File
```

## Build Process

1.  **Input**: `scripts/build.py` reads `docker/templates/base.html`.
2.  **Collection**: It scans `docker/modules/` for `.html` files and sorts them alphabetically.
3.  **Assembly**: It concatenates the module contents.
4.  **Injection**: It replaces the `<!-- MODULES_CONTENT -->` placeholder in `base.html` with the assembled content.
5.  **Output**: It writes the result to `docker/index.html`.

## Key Files

- **`base.html`**: Contains the `<head>`, navigation, basic layout, scripts, and footer. It defines the "shell" of the application.
- **`modules/*.html`**: Contain only the `<section>` elements and their internal content. They do not contain `<html>`, `<head>`, or `<body>` tags.
