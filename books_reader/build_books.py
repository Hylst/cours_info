import os
import json
import shutil
import re

SOURCE_DIR = 'livres_pour_import'
PUBLIC_DIR = 'public'
BOOKS_DIR = os.path.join(PUBLIC_DIR, 'books')
COVERS_DIR = os.path.join(PUBLIC_DIR, 'covers')

os.makedirs(BOOKS_DIR, exist_ok=True)
os.makedirs(COVERS_DIR, exist_ok=True)

books_index = []


def parse_chapter_txt(content):
    """
    Parses a .txt chapter with rich structure into semantic HTML.
    Upgrade: Intelligent splitting of long paragraphs and preservation of meaningful breaks.
    """
    lines = content.splitlines()
    html_parts = []
    first_paragraph_done = False

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # --- Handle empty lines (logical breaks) ---
        if not line:
            empty_count = 0
            while i < len(lines) and not lines[i].strip():
                empty_count += 1
                i += 1
            if empty_count >= 3:
                html_parts.append('<div class="vertical-spacer"></div>')
            continue

        # --- End of chapter ornament ---
        if line == '###':
            html_parts.append('<hr class="chapter-end-ornament">')
            i += 1
            continue

        # --- Continuation footer ---
        if line.startswith('À suivre') or (line.startswith('*') and len(line) <= 5):
            html_parts.append(f'<p class="chapter-continuation">{line.strip("*").strip()}</p>')
            i += 1
            continue

        # --- "Prochaine partie" block ---
        if line.startswith('Prochaine partie') or (line.startswith('II —') and len(line) < 80):
            html_parts.append(f'<p class="chapter-next-part">{line}</p>')
            i += 1
            continue

        # --- PARTIE separator ---
        if re.match(r'^PARTIE\s+(I{1,3}|IV|V|VI|VII|VIII|IX|X)$', line, re.IGNORECASE):
            html_parts.append(f'<div class="partie-separator"><span>{line.title()}</span></div>')
            i += 1
            continue

        # --- Titles ---
        if line.isupper() and 5 < len(line) < 60 and i < 5:
            html_parts.append(f'<h1 class="chapter-main-title">{line.title()}</h1>')
            i += 1
            continue
        if i < 10 and len(line) < 80 and html_parts and 'chapter-main-title' in html_parts[-1]:
            html_parts.append(f'<h2 class="chapter-subtitle">{line}</h2>')
            i += 1
            continue

        # --- Roman section headings ---
        if re.match(r'^(I{1,3}V?|IV|VI{0,3}|IX|X{0,3})\.\s+.+', line) and len(line) < 120:
            html_parts.append(f'<h2 class="section-heading"><span class="section-number">{line.split(".")[0]}.</span> {".".join(line.split(".")[1:]).strip()}</h2>')
            i += 1
            continue

        # --- Subsection headings ---
        sub_match = re.match(r'^(\d+\.\d+)\s+(.+)', line)
        if sub_match:
            html_parts.append(f'<h3 class="subsection-heading"><span class="subsection-number">{sub_match.group(1)}</span> {sub_match.group(2)}</h3>')
            i += 1
            continue

        # --- Labeled sections ---
        if re.match(r'^(Prologue|Conclusion|Épilogue|Introduction)\s*:', line, re.IGNORECASE):
            html_parts.append(f'<h3 class="labeled-section">{line.rstrip(":")}<span class="section-colon">:</span></h3>')
            i += 1
            continue

        # --- Period subtitle ---
        if re.search(r'\(\d{4}[–—-]\d{4}\)', line) and len(line) < 100:
            html_parts.append(f'<p class="period-subtitle">{line}</p>')
            i += 1
            continue

        # --- Highlighted formula ---
        if len(line) < 80 and '>' in line and re.match(r'^[a-zàâéèêëïîôùûüœæç\s>]+[>]+\s*\S', line, re.IGNORECASE):
            html_parts.append(f'<p class="highlight-formula">{line}</p>')
            i += 1
            continue

        # --- Lists ---
        if len(line) < 100 and (line.endswith('.') or line.endswith('…')) and line[0].isupper():
            next_line = lines[i+1].strip() if i+1 < len(lines) else ''
            if next_line and len(next_line) < 100 and next_line[0].isupper() and (next_line.endswith('.') or next_line.endswith('…')):
                items = [f'<li>{line}</li>']
                i += 1
                while i < len(lines):
                    nl = lines[i].strip()
                    if nl and len(nl) < 100 and (nl.endswith('.') or nl.endswith('…')):
                        items.append(f'<li>{nl}</li>')
                        i += 1
                    else:
                        break
                html_parts.append(f'<ul class="chapter-list">{"".join(items)}</ul>')
                continue

        # --- Regular Paragraph ---
        if line:
            css_class = 'chapter-paragraph'
            # Apply dropcap to the first significant paragraph of the chapter
            if not first_paragraph_done and len(line) > 60:
                css_class = 'dropcap'
                first_paragraph_done = True
            
            html_parts.append(f'<p class="{css_class}">{line}</p>')

        i += 1

    return '\n'.join(html_parts)


if os.path.exists(SOURCE_DIR):
    for book_folder in os.listdir(SOURCE_DIR):
        folder_path = os.path.join(SOURCE_DIR, book_folder)
        if not os.path.isdir(folder_path):
            continue

        config_path = os.path.join(folder_path, 'config.json')
        if not os.path.exists(config_path):
            print(f"Skipping {book_folder}: Missing config.json")
            continue

        try:
            with open(config_path, 'r', encoding='utf-8') as f:
                config = json.load(f)
        except Exception as e:
            print(f"Error reading config in {book_folder}: {e}")
            continue

        book_id = re.sub(r'[^a-z0-9]+', '-', config.get('title', book_folder).lower()).strip('-')
        book_out_dir = os.path.join(BOOKS_DIR, book_id)
        os.makedirs(book_out_dir, exist_ok=True)

        # 1. Handle Cover - support .jpg, .jpeg, .webp
        cover_ext = None
        for ext in ['.jpg', '.jpeg', '.webp']:
            base = 'cover'
            src = os.path.join(folder_path, f'{base}{ext}')
            dst_base = os.path.join(COVERS_DIR, f'{book_id}{ext}')
            if os.path.exists(src):
                shutil.copy2(src, dst_base)
                cover_ext = ext
                break

        # Also check if cover already exists in public/covers (pre-generated)
        if not cover_ext:
            for ext in ['.jpg', '.jpeg', '.webp']:
                if os.path.exists(os.path.join(COVERS_DIR, f'{book_id}{ext}')):
                    cover_ext = ext
                    break

        cover_path = f"covers/{book_id}{cover_ext}" if cover_ext else None

        # 2. Handle Intro
        intro_html = ""
        intro_path = None
        has_intro_file = False

        for ext in ['.txt', '.html']:
            intro_file = os.path.join(folder_path, f'intro{ext}')
            if os.path.exists(intro_file):
                has_intro_file = True
                with open(intro_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if ext == '.txt':
                        intro_html = parse_chapter_txt(content)
                    else:
                        intro_html = content

                with open(os.path.join(book_out_dir, 'intro.html'), 'w', encoding='utf-8') as f:
                    f.write(intro_html)
                intro_path = f"books/{book_id}/intro.html"
                break

        if not has_intro_file:
            title = config.get("title", "Titre Inconnu")
            author = config.get("author", "Auteur Inconnu")
            intro_html = f"""<div class="book-intro-generated">
  <h2>Préface</h2>
  <hr class="ornament">
  <p class="dropcap">Cet ouvrage, intitulé <strong>{title}</strong>, a été traité pour l'intégration dans Hylst Reader à partir de fichiers textes.</p>
  <p class="chapter-paragraph">L'interface s'adapte dynamiquement aux couleurs et à la typographie choisies pour ce livre afin d'offrir une immersion optimale lors de votre lecture.</p>
  <p class="chapter-continuation">Bonne lecture — {author}</p>
</div>"""
            with open(os.path.join(book_out_dir, 'intro.html'), 'w', encoding='utf-8') as f:
                f.write(intro_html)
            intro_path = f"books/{book_id}/intro.html"

        # 3. Handle Chapters
        chapters_data = []
        chap_dir = os.path.join(folder_path, 'chapitres')
        if not os.path.exists(chap_dir) and os.path.exists(os.path.join(folder_path, 'chapters')):
            chap_dir = os.path.join(folder_path, 'chapters')
        if not os.path.exists(chap_dir):
            chap_dir = folder_path

        if os.path.exists(chap_dir):
            chap_files = sorted([
                f for f in os.listdir(chap_dir)
                if (f.endswith('.txt') or f.endswith('.html')) and not f.startswith('intro') and f != 'config.json'
            ])

            for chap_file in chap_files:
                chap_path = os.path.join(chap_dir, chap_file)
                with open(chap_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                if chap_file.endswith('.txt'):
                    chap_html = parse_chapter_txt(content)
                else:
                    chap_html = content

                out_chap_name = re.sub(r'\s+', '-', chap_file.replace('.txt', '').replace('.html', '').lower()).strip('-') + '.html'
                with open(os.path.join(book_out_dir, out_chap_name), 'w', encoding='utf-8') as f:
                    f.write(chap_html)

                title_match = re.search(r'^(\d+)-(.*)$', out_chap_name.replace('.html', ''))
                if title_match:
                    chap_title = title_match.group(2).replace('-', ' ').title()
                else:
                    chap_title = chap_file.split('.')[0].replace('-', ' ').replace('  ', ' ').title()

                chapters_data.append({
                    "id": chap_file,
                    "title": chap_title,
                    "path": f"books/{book_id}/{out_chap_name}"
                })

        books_index.append({
            "id": book_id,
            "title": config.get("title", ""),
            "author": config.get("author", ""),
            "year": config.get("year", ""),
            "design": config.get("design", {}),
            "coverPath": cover_path,
            "introPath": intro_path,
            "chapters": chapters_data
        })
        print(f"✅ Processed: {config.get('title')} ({len(chapters_data)} chapter(s))")

with open(os.path.join(PUBLIC_DIR, 'books.json'), 'w', encoding='utf-8') as f:
    json.dump(books_index, f, ensure_ascii=False, indent=2)

print("✅ Build completed. Check public/books.json")
