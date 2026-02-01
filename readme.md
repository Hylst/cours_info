# Docker Course Memo

A comprehensive, modularized course memo for learning Docker, covering everything from basic concepts to orchestration and security. Designed as a static website for easy deployment and access.

## Features

- **Modular Architecture**: Content broken down into manageable HTML modules.
- **Responsive Design**: Mobile-friendly navigation and layout.
- **Interactive Quiz**: Built-in quiz engine to test knowledge.
- **Code Highlighting**: Clear and readable code snippets for commands and configurations.
- **SEO Optimized**: Meta tags, Open Graph data, and semantic HTML.
- **Dark Mode**: Modern dark-themed UI with "Outfit" and "JetBrains Mono" fonts.

## Installation & Usage

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/docker-memo.git
    cd docker-memo
    ```

2.  **Build the project**:
    This project uses a Python script to assemble the static HTML file from modules.
    ```bash
    python scripts/build.py
    ```
    This will generate `docker/index.html`.

3.  **Run locally**:
    Open `docker/index.html` in your browser.
    
    Or serve it with a lightweight server:
    ```bash
    cd docker
    python -m http.server 8000
    ```
    Access at `http://localhost:8000`.

## Project Structure

- `docker/`: Main content directory.
    - `modules/`: Individual HTML chapters.
    - `templates/`: Base HTML template.
    - `assets/`: CSS, JS, and images.
    - `index.html`: Generated final file.
- `scripts/`: Utility scripts (build system).

## Deployment

The site is designed to be hosted on any static file server (Nginx, Apache, GitHub Pages, Netlify).
For Docker deployment (ironically):

```dockerfile
FROM nginx:alpine
COPY docker /usr/share/nginx/html
```

## Credits

Created by **Geoffroy Streit**.
Assisted by AI for content synthesis and code generation.
