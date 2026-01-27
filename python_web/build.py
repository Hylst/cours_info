from pathlib import Path
import json

root = Path(__file__).parent
src_dir = root / "src"
parts_dir = src_dir / "parts"
content_dir = src_dir / "content"

layout = (src_dir / "layout.html").read_text(encoding="utf-8")

parts = {
    "HEAD": (parts_dir / "head.html").read_text(encoding="utf-8"),
    "HEADER": (parts_dir / "header.html").read_text(encoding="utf-8"),
    "HERO": (parts_dir / "hero.html").read_text(encoding="utf-8"),
    "INTRO": (parts_dir / "intro.html").read_text(encoding="utf-8"),
    "TOC": (parts_dir / "toc.html").read_text(encoding="utf-8"),
    "QUIZ": (parts_dir / "quiz.html").read_text(encoding="utf-8"),
    "FOOTER": (parts_dir / "footer.html").read_text(encoding="utf-8"),
    "SCRIPTS": (parts_dir / "scripts.html").read_text(encoding="utf-8"),
}

data_dir = root / "data"
if data_dir.exists():
    for json_path in sorted(data_dir.glob("*.json")):
        json.loads(json_path.read_text(encoding="utf-8"))

content_files = sorted(content_dir.glob("*.html"))
content = "\n".join(path.read_text(encoding="utf-8") for path in content_files)
output = layout.replace("{{CONTENT}}", content)

for key, value in parts.items():
    output = output.replace(f"{{{{{key}}}}}", value)

(root / "index.html").write_text(output.strip() + "\n", encoding="utf-8")
