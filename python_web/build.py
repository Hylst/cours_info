from pathlib import Path
import json
import re

root = Path(__file__).parent
src_dir = root / "src"
parts_dir = src_dir / "parts"
content_dir = src_dir / "content"
data_dir = root / "data"


def read_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def validate_quiz_schema(data, path: Path):
    if not isinstance(data, dict):
        raise ValueError(f"{path.name}: racine invalide")
    meta = data.get("meta")
    questions = data.get("questions")
    if not isinstance(meta, dict):
        raise ValueError(f"{path.name}: meta invalide")
    if not isinstance(meta.get("title"), str) or not meta.get("title").strip():
        raise ValueError(f"{path.name}: meta.title invalide")
    if not isinstance(meta.get("total"), int) or meta.get("total") <= 0:
        raise ValueError(f"{path.name}: meta.total invalide")
    if not isinstance(questions, list) or not questions:
        raise ValueError(f"{path.name}: questions invalide")
    ids = set()
    for idx, question in enumerate(questions, start=1):
        if not isinstance(question, dict):
            raise ValueError(f"{path.name}: question {idx} invalide")
        q_id = question.get("id")
        q_text = question.get("question")
        options = question.get("options")
        answer = question.get("answer")
        explanation = question.get("explanation")
        if not isinstance(q_id, int):
            raise ValueError(f"{path.name}: question {idx} id invalide")
        if q_id in ids:
            raise ValueError(f"{path.name}: question {idx} id dupliqué")
        ids.add(q_id)
        if not isinstance(q_text, str) or not q_text.strip():
            raise ValueError(f"{path.name}: question {idx} texte invalide")
        if not isinstance(options, list) or len(options) < 2 or not all(isinstance(o, str) and o.strip() for o in options):
            raise ValueError(f"{path.name}: question {idx} options invalides")
        if not isinstance(answer, int) or answer < 0 or answer >= len(options):
            raise ValueError(f"{path.name}: question {idx} réponse invalide")
        if not isinstance(explanation, str) or not explanation.strip():
            raise ValueError(f"{path.name}: question {idx} explication invalide")
    if meta.get("total") != len(questions):
        raise ValueError(f"{path.name}: meta.total ne correspond pas aux questions")


def validate_site_structure(data, path: Path):
    if not isinstance(data, dict):
        raise ValueError(f"{path.name}: racine invalide")
    sections = data.get("sections")
    if not isinstance(sections, list) or not sections:
        raise ValueError(f"{path.name}: sections invalide")
    ids = set()
    nums = set()
    for idx, item in enumerate(sections, start=1):
        if not isinstance(item, dict):
            raise ValueError(f"{path.name}: section {idx} invalide")
        section_id = item.get("id")
        num = item.get("num")
        label = item.get("label")
        content = item.get("content")
        nav_label = item.get("navLabel")
        nav = item.get("nav", False)
        if not isinstance(section_id, str) or not section_id.strip():
            raise ValueError(f"{path.name}: section {idx} id invalide")
        if section_id in ids:
            raise ValueError(f"{path.name}: section {idx} id dupliqué")
        ids.add(section_id)
        if not isinstance(num, str) or not num.strip():
            raise ValueError(f"{path.name}: section {idx} num invalide")
        if num in nums:
            raise ValueError(f"{path.name}: section {idx} num dupliqué")
        nums.add(num)
        if not isinstance(label, str) or not label.strip():
            raise ValueError(f"{path.name}: section {idx} label invalide")
        if not isinstance(content, str) or not content.strip():
            raise ValueError(f"{path.name}: section {idx} content invalide")
        if nav:
            if not isinstance(nav_label, str) or not nav_label.strip():
                raise ValueError(f"{path.name}: section {idx} navLabel invalide")


def validate_content_files(sections, content_root: Path):
    for idx, item in enumerate(sections, start=1):
        content_name = item["content"]
        section_id = item["id"]
        content_path = content_root / content_name
        if not content_path.exists():
            raise ValueError(f"{content_name}: fichier manquant pour section {section_id}")
        html = content_path.read_text(encoding="utf-8")
        pattern = rf'<section[^>]*\bid\s*=\s*["\']{re.escape(section_id)}["\']'
        if not re.search(pattern, html):
            raise ValueError(f"{content_name}: id de section manquant ({section_id})")


def build_header_html(sections):
    links = "\n".join(
        f'                <a href="#{item["id"]}">{item["navLabel"]}</a>'
        for item in sections
        if item.get("nav")
    )
    return (
        "    <header>\n"
        "        <div class=\"container header-content\">\n"
        "            <div class=\"logo\">\n"
        "                <div class=\"logo-icon\">🌐</div>Python Web\n"
        "            </div>\n"
        "            <nav>\n"
        f"{links}\n"
        "            </nav>\n"
        "        </div>\n"
        "    </header>"
    )


def build_toc_html(sections):
    links = "\n".join(
        f'                <a href="#{item["id"]}" class="toc-item"><span class="toc-num">{item["num"]}</span>{item["label"]}</a>'
        for item in sections
    )
    return (
        "    <div class=\"toc\">\n"
        "        <div class=\"container\">\n"
        "            <div class=\"toc-grid\">\n"
        f"{links}\n"
        "            </div>\n"
        "        </div>\n"
        "    </div>"
    )

layout = (src_dir / "layout.html").read_text(encoding="utf-8")
site_structure_path = data_dir / "site_structure.json"
site_structure = read_json(site_structure_path)
validate_site_structure(site_structure, site_structure_path)
validate_content_files(site_structure["sections"], content_dir)

for json_path in sorted(data_dir.glob("quiz_*.json")):
    quiz_data = read_json(json_path)
    validate_quiz_schema(quiz_data, json_path)

parts = {
    "HEAD": (parts_dir / "head.html").read_text(encoding="utf-8"),
    "HEADER": build_header_html(site_structure["sections"]),
    "HERO": (parts_dir / "hero.html").read_text(encoding="utf-8"),
    "INTRO": (parts_dir / "intro.html").read_text(encoding="utf-8"),
    "TOC": build_toc_html(site_structure["sections"]),
    "QUIZ": (parts_dir / "quiz.html").read_text(encoding="utf-8"),
    "FOOTER": (parts_dir / "footer.html").read_text(encoding="utf-8"),
    "SCRIPTS": (parts_dir / "scripts.html").read_text(encoding="utf-8"),
}

content_files = [content_dir / item["content"] for item in site_structure["sections"]]
content = "\n".join(path.read_text(encoding="utf-8") for path in content_files)
output = layout.replace("{{CONTENT}}", content)

for key, value in parts.items():
    output = output.replace(f"{{{{{key}}}}}", value)

(root / "index.html").write_text(output.strip() + "\n", encoding="utf-8")
