// ============ SECTION 9: DOM - Interactive Builder ============

let codeHistory = [];
let elementCounter = 0;

function addElement(tag, text) {
    const preview = document.getElementById('builder-preview');

    // Clear placeholder if first element
    if (elementCounter === 0) {
        preview.innerHTML = '';
    }

    // Create element
    const el = document.createElement(tag);
    el.textContent = text || '';
    el.className = 'builder-element';
    el.style.cssText = 'margin: 10px; padding: 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--card);';

    if (tag === 'button') {
        el.style.cursor = 'pointer';
        el.onclick = () => alert('Button clicked!');
    }

    if (tag === 'input') {
        el.placeholder = 'Type here...';
        el.style.width = '200px';
    }

    preview.appendChild(el);
    elementCounter++;

    // Generate code
    const code = `const el${elementCounter} = document.createElement('${tag}');
${text ? `el${elementCounter}.textContent = '${text}';` : ''}
el${elementCounter}.className = 'builder-element';
document.body.appendChild(el${elementCounter});`;

    codeHistory.push(code);
    updateCodeDisplay();
}

function toggleClass() {
    const preview = document.getElementById('builder-preview');
    const elements = preview.querySelectorAll('.builder-element');

    elements.forEach(el => {
        if (el.style.background === 'var(--card)') {
            el.style.background = 'rgba(99,102,241,0.2)';
            el.style.borderColor = 'var(--primary)';
        } else {
            el.style.background = 'var(--card)';
            el.style.borderColor = 'var(--border)';
        }
    });

    const code = `elements.forEach(el => el.classList.toggle('active'));`;
    codeHistory.push(code);
    updateCodeDisplay();
}

function clearBuilder() {
    const preview = document.getElementById('builder-preview');
    preview.innerHTML = '<div style="opacity:0.5; text-align:center">Cliquez sur les boutons pour construire</div>';
    elementCounter = 0;
    codeHistory = [];
    updateCodeDisplay();
}

function updateCodeDisplay() {
    const codeDiv = document.getElementById('builder-code');

    if (codeHistory.length === 0) {
        codeDiv.innerHTML = '<div style="opacity:0.5">Code généré...</div>';
        return;
    }

    let html = '<div style="margin-bottom:10px"><strong style="color:var(--accent)">📝 Code JavaScript généré :</strong></div>';
    html += '<div style="opacity:0.9; line-height:1.8">';

    codeHistory.forEach((code, idx) => {
        html += `<div style="margin:5px 0; padding-left:10px; border-left:2px solid var(--muted)">
            <span style="color:var(--muted); font-size:0.8rem">// Step ${idx + 1}</span><br>
            ${code.split('\n').join('<br>')}
        </div>`;
    });

    html += '</div>';
    codeDiv.innerHTML = html;
}

// Demo functions for console
function demoPerformance() {
    console.log("=== Performance Demo ===");
    console.time("Bad (multiple reflows)");

    // Bad: Multiple reflows
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.textContent = i;
        document.body.appendChild(div);
    }

    console.timeEnd("Bad (multiple reflows)");

    console.time("Good (single reflow)");

    // Good: Single reflow
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.textContent = i;
        fragment.appendChild(div);
    }
    document.body.appendChild(fragment);

    console.timeEnd("Good (single reflow)");

    // Cleanup
    document.querySelectorAll('body > div').forEach(el => el.remove());
}

function demoSelection() {
    console.log("=== Selection Methods ===");

    // querySelector
    const first = document.querySelector('.demo-btn');
    console.log("First button:", first);

    // querySelectorAll
    const all = document.querySelectorAll('.demo-btn');
    console.log("All buttons:", all.length);

    // Convert NodeList to Array
    const arr = Array.from(all);
    console.log("As array:", arr);

    // Traversal
    if (first) {
        console.log("Parent:", first.parentElement);
        console.log("Next sibling:", first.nextElementSibling);
    }
}

function demoManipulation() {
    console.log("=== DOM Manipulation ===");

    // Create
    const div = document.createElement('div');
    div.className = 'demo-box';
    div.textContent = 'Created dynamically';
    div.style.cssText = 'padding: 20px; background: #333; color: white; margin: 10px;';

    // Append
    document.body.appendChild(div);

    // Modify
    setTimeout(() => {
        div.classList.add('active');
        div.textContent = 'Modified!';
    }, 1000);

    // Remove
    setTimeout(() => {
        div.remove();
        console.log("Element removed");
    }, 3000);
}
