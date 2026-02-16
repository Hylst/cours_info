
import json
import os

files = [
    r'd:\0CODE\AntiGravity\Cours_Memos\Docker\html\quiz_html.json',
    r'd:\0CODE\AntiGravity\Cours_Memos\Docker\css\quiz_css.json',
    r'd:\0CODE\AntiGravity\Cours_Memos\Docker\java\quiz_java.json' # Fixed path
]

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        questions = data.get('questions', [])
        print(f"Checking {os.path.basename(file_path)}: {len(questions)} questions.")
        
        seen_ids = set()
        seen_qs = set()
        
        for q in questions:
            qid = q.get('id')
            qtext = q.get('question')
            
            if qid in seen_ids:
                print(f"  [ERROR] Duplicate ID: {qid}")
            seen_ids.add(qid)
            
            if qtext in seen_qs:
                 print(f"  [WARNING] Duplicate Question Text: {qtext}")
            seen_qs.add(qtext)
            
            # Check options length
            if len(q.get('options', [])) < 2:
                 print(f"  [ERROR] Question {qid} has fewer than 2 options.")
                 
            # Check answer index validity
            if not (0 <= q.get('answer', -1) < len(q.get('options', []))):
                print(f"  [ERROR] Question {qid} has invalid answer index {q.get('answer')}.")

    except Exception as e:
        print(f"Error processing {file_path}: {e}")
