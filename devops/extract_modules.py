#!/usr/bin/env python3
"""
Extract modules from DevOps index.html into separate files.
This script automatically identifies module boundaries and extracts them.
Updated with correct regex patterns based on actual file content.
"""

import re
import os

def extract_modules():
    print("🔍 Reading index.html...")
    
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Define module patterns and their target files
    # Using more flexible regex to catch actual comments
    modules = [
        (r'<!-- MODULE 00: RÉSEAUX.*?-->.*?(?=<!-- MODULE 01:|<section id="quiz">)', 'm00-reseaux.html', 'm0'),
        (r'<!-- MODULE 01: CULTURE.*?-->.*?(?=<!-- MODULE 02:|<section id="quiz">)', 'm01-culture.html', 'm1'),
        (r'<!-- MODULE 02: GIT.*?-->.*?(?=<!-- MODULE 03:|<section id="quiz">)', 'm02-git.html', 'm2'),
        (r'<!-- MODULE 03: CONTINUOUS INTEGRATION.*?-->.*?(?=<!-- MODULE 04:|<section id="quiz">)', 'm03-ci.html', 'm3'),
        (r'<!-- MODULE 04: CONTINUOUS DELIVERY.*?-->.*?(?=<!-- MODULE 05:|<section id="quiz">)', 'm04-cd.html', 'm4'),
        (r'<!-- MODULE 05: DOCKER.*?-->.*?(?=<!-- MODULE 06:|<section id="quiz">)', 'm05-docker.html', 'm5'),
        (r'<!-- MODULE 06: KUBERNETES.*?-->.*?(?=<!-- MODULE 07:|<section id="quiz">)', 'm06-kubernetes.html', 'm6'),
        (r'<!-- MODULE 07: INFRASTRUCTURE AS CODE.*?-->.*?(?=<!-- MODULE 08:|<section id="quiz">)', 'm07-iac.html', 'm7'),
        (r'<!-- MODULE 08: OBSERVABILITY.*?-->.*?(?=<!-- MODULE 09:|<section id="quiz">)', 'm08-observabilite.html', 'm8'),
        (r'<!-- MODULE 09: DEVSECOPS.*?-->.*?(?=<!-- MODULE 10:|<section id="quiz">)', 'm09-devsecops.html', 'm9'),
        (r'<!-- MODULE 10: SRE.*?-->.*?(?=<section id="quiz">)', 'm10-sre.html', 'm10'),
    ]
    
    if not os.path.exists('src/modules'):
        os.makedirs('src/modules')

    count = 0
    for pattern, filename, module_id in modules:
        match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
        
        if match:
            module_content = match.group(0).strip()
            
            # Write to file
            output_path = f'src/modules/{filename}'
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(module_content + '\n')
            
            # Get stats
            lines = module_content.count('\n') + 1
            print(f"📦 Extracted {filename}: {lines} lines")
            count += 1
        else:
            print(f"⚠️  Failed to extract {filename} (Pattern mismatch)")
    
    print(f"\n✨ Extraction complete: {count}/11 modules extracted")

if __name__ == '__main__':
    extract_modules()
