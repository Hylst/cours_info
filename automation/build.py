import os

def read_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        print(f"Warning: File not found: {path}")
        return ""

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Define the order of assembly
    structure = [
        "partials/head.html",
        "partials/nav.html",
        "modules/intro_hero.html",
        "modules/01_ecosystem.html",
        "modules/02_ai.html",
        "modules/03_n8n.html",
        "modules/04_agents.html",
        "modules/05_stack.html",
        "modules/06_governance.html",
        "modules/07_opensource.html",
        "modules/08_data_modeling.html",
        "modules/12_api_mastery.html",
        "modules/13_ui_ux.html",
        "modules/14_code_snippets.html",
        "modules/09_roadmap.html",
        "modules/10_business.html",
        "modules/11_bonus.html",
        "modules/quiz.html",
        "partials/footer.html"
    ]
    
    full_content = ""
    
    for relative_path in structure:
        full_path = os.path.join(base_dir, relative_path)
        print(f"Processing {relative_path}...")
        content = read_file(full_path)
        full_content += content + "\n"
        
    output_path = os.path.join(base_dir, "index.html")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(full_content)
        
    print(f"Successfully built index.html ({len(full_content)} bytes)")

if __name__ == "__main__":
    main()
