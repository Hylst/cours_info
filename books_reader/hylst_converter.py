import os
import json
import re
import argparse
from datetime import datetime

def parse_text_to_html(content):
    """
    Parses a .txt or .md content into semantic HTML compatible with Hylst Reader.
    Ported and adapted from build_books.py logic.
    """
    lines = content.splitlines()
    html_parts = []
    first_paragraph_done = False

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Handle empty lines (logical breaks)
        if not line:
            empty_count = 0
            while i < len(lines) and not lines[i].strip():
                empty_count += 1
                i += 1
            if empty_count >= 3:
                html_parts.append('<div class="vertical-spacer"></div>')
            continue

        # End of chapter ornament
        if line == '###':
            html_parts.append('<hr class="chapter-end-ornament">')
            i += 1
            continue

        # Markdown-style titles
        if line.startswith('# '):
            html_parts.append(f'<h1 class="chapter-main-title">{line[2:].strip()}</h1>')
            i += 1
            continue
        if line.startswith('## '):
            html_parts.append(f'<h2 class="chapter-subtitle">{line[3:].strip()}</h2>')
            i += 1
            continue
        if line.startswith('### '):
            html_parts.append(f'<h3 class="labeled-section">{line[4:].strip()}</h3>')
            i += 1
            continue

        # PARTIE separator
        if re.match(r'^PARTIE\s+(I{1,3}|IV|V|VI|VII|VIII|IX|X)$', line, re.IGNORECASE):
            html_parts.append(f'<div class="partie-separator"><span>{line.title()}</span></div>')
            i += 1
            continue

        # Regular Paragraph
        if line:
            css_class = 'chapter-paragraph'
            # Apply dropcap to the first significant paragraph
            if not first_paragraph_done and len(line) > 60:
                css_class = 'dropcap'
                first_paragraph_done = True
            
            # Simple markdown replacements
            line = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line)
            line = re.sub(r'\*(.*?)\*', r'<em>\1</em>', line)
            
            html_parts.append(f'<p class="{css_class}">{line}</p>')

        i += 1

    return '\n'.join(html_parts)

def convert_file(input_path, output_path=None, title=None, author=None, year=None):
    if not os.path.exists(input_path):
        print(f"Error: File {input_path} not found.")
        return

    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Automatic metadata extraction if not provided
    filename = os.path.basename(input_path)
    if not title:
        title = filename.rsplit('.', 1)[0].replace('_', ' ').replace('-', ' ').title()
    
    if not author:
        author = "Importé"
    
    if not year:
        year = datetime.now().year

    book_id = re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')

    # Basic structure for a linear book
    book_data = {
        "id": book_id,
        "title": title,
        "author": author,
        "year": year,
        "design": {
            "variables": {
                "--book-font-size": "1.05rem",
                "--book-line-height": "1.85"
            }
        },
        "introHtml": f"<h1>{title}</h1><p class='dropcap'>Importé depuis {filename}.</p>",
        "chapters": [
            {
                "id": "chap-1",
                "title": "Texte Intégral",
                "html": parse_text_to_html(content)
            }
        ]
    }

    if not output_path:
        output_path = f"{book_id}.json"

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(book_data, f, ensure_ascii=False, indent=2)

    print(f"✅ Conversion réussie : {output_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convertit un fichier TXT/MD au format JSON compatible Hylst Reader.")
    parser.add_argument("input", help="Fichier source (.txt ou .md)")
    parser.add_argument("--output", help="Nom du fichier de sortie (.json)")
    parser.add_argument("--title", help="Titre du livre")
    parser.add_argument("--author", help="Auteur du livre")
    parser.add_argument("--year", type=int, help="Année de publication")

    args = parser.parse_args()
    convert_file(args.input, args.output, args.title, args.author, args.year)
