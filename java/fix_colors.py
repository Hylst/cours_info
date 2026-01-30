# Script de Correction Automatique des Couleurs Mermaid
# Remplace les couleurs hardcodées par les variables du système

import re
import os
from pathlib import Path

# Mapping des anciennes couleurs vers les nouvelles
COLOR_MAPPINGS = {
    # Backgrounds
    '#21262d': '#1c2128',  # bg-card
    '#161b22': '#161b22',  # bg-muted (unchanged)
    '#0d1117': '#0d1117',  # bg-background (unchanged)
    
    # Colors
    '#f89820': '#ffa94d',  # Orange accent (brighter)
    '#5382a1': '#79c0ff',  # Blue primary (brighter)
    '#2ea043': '#3fb950',  # Green success (brighter)
    '#f85149': '#ff7b72',  # Red danger (brighter)
    '#d29922': '#e3b341',  # Yellow warning (brighter)
    '#db6d28': '#ff7b72',  # Old orange → new red
    
    # Borders
    '#30363d': '#3d444d',  # border-border (brighter)
    '#333': '#3d444d',     # Generic border
    
    # Text colors
    '#fff': '#f0f6fc',     # White text (warmer)
    '#000': '#0d1117',     # Black text (for light backgrounds)
}

def fix_mermaid_colors(file_path):
    """Fix hardcoded colors in a single HTML file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    changes_made = []
    
    # Replace colors in Mermaid style declarations
    for old_color, new_color in COLOR_MAPPINGS.items():
        # Match patterns like: fill:#xxx, stroke:#xxx, color:#xxx
        patterns = [
            (f'fill:{old_color}', f'fill:{new_color}'),
            (f'stroke:{old_color}', f'stroke:{new_color}'),
            (f'color:{old_color}', f'color:{new_color}'),
        ]
        
        for old_pattern, new_pattern in patterns:
            if old_pattern in content:
                count = content.count(old_pattern)
                content = content.replace(old_pattern, new_pattern)
                changes_made.append(f"  - {old_pattern} → {new_pattern} ({count}x)")
    
    # Write back if changes were made
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return changes_made
    return None

def main():
    modules_dir = Path(r'd:\0CODE\AntiGravity\Cours_Memos\Docker\java\modules')
    
    print("🎨 Correction Automatique des Couleurs Mermaid")
    print("=" * 60)
    
    total_files = 0
    total_changes = 0
    
    for html_file in sorted(modules_dir.glob('*.html')):
        changes = fix_mermaid_colors(html_file)
        if changes:
            total_files += 1
            total_changes += len(changes)
            print(f"\n✅ {html_file.name}")
            for change in changes:
                print(change)
    
    print("\n" + "=" * 60)
    print(f"✨ Terminé ! {total_files} fichiers modifiés, {total_changes} remplacements effectués.")

if __name__ == '__main__':
    main()
