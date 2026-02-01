import os
import re

def build_site():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    docker_dir = os.path.join(base_dir, 'docker')
    modules_dir = os.path.join(docker_dir, 'modules')
    templates_dir = os.path.join(docker_dir, 'templates')
    output_file = os.path.join(docker_dir, 'index.html')

    print(f"Building site from {docker_dir}...")

    # Read base template
    with open(os.path.join(templates_dir, 'base.html'), 'r', encoding='utf-8') as f:
        template = f.read()

    # Read and sort modules
    modules = []
    for filename in os.listdir(modules_dir):
        if filename.endswith('.html'):
            modules.append(filename)
    
    modules.sort() # Ensure correct order (01_, 02_, etc.)

    content = ""
    for module in modules:
        print(f"Adding module: {module}")
        with open(os.path.join(modules_dir, module), 'r', encoding='utf-8') as f:
            content += f.read() + "\n"

    # Inject content
    final_html = template.replace('<!-- MODULES_CONTENT -->', content)

    # Write output
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(final_html)

    print(f"Build complete! Output written to {output_file}")

if __name__ == '__main__':
    build_site()
