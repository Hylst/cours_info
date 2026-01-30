// ============ SECTION 17: Strings & Regex - Interactive Tester ============

function testRegex() {
    const pattern = document.getElementById('regex-pattern').value;
    const text = document.getElementById('regex-text').value;
    const output = document.getElementById('regex-output');

    // Get flags
    let flags = '';
    if (document.getElementById('flag-g').checked) flags += 'g';
    if (document.getElementById('flag-i').checked) flags += 'i';
    if (document.getElementById('flag-m').checked) flags += 'm';

    try {
        const regex = new RegExp(pattern, flags);

        // Test if matches
        const matches = text.match(regex);
        const testResult = regex.test(text);

        // Highlight matches in text
        let highlightedText = text;
        if (matches && matches.length > 0) {
            // Reset regex for global flag
            const highlightRegex = new RegExp(pattern, flags);
            highlightedText = text.replace(highlightRegex, match =>
                `<span class="match-highlight">${match}</span>`
            );
        }

        output.innerHTML = `
            <div style="margin-bottom:15px">
                <strong style="color:var(--accent)">🔍 Résultats du Test</strong>
            </div>
            
            <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
                <strong>Pattern :</strong> <code>/${pattern}/${flags}</code>
            </div>
            
            <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
                <strong>Test :</strong> ${testResult ? '<span style="color:#4caf50">✅ Match trouvé</span>' : '<span style="color:#f44336">❌ Aucun match</span>'}
            </div>
            
            ${matches ? `
                <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
                    <strong>Correspondances (${matches.length}) :</strong><br>
                    <code>${JSON.stringify(matches)}</code>
                </div>
            ` : ''}
            
            <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
                <strong>Texte avec surlignage :</strong><br>
                <div style="margin-top:8px; line-height:1.6">${highlightedText}</div>
            </div>
        `;

    } catch (error) {
        output.innerHTML = `
            <div style="background:rgba(244,67,54,0.1); padding:15px; border-radius:6px; border-left:3px solid #f44336">
                <strong style="color:#f44336">❌ Erreur de Regex :</strong><br>
                ${error.message}
            </div>
        `;
    }
}

// ========== DEMO FUNCTIONS FOR CONSOLE ==========

function demoStringMethods() {
    console.log("=== String Methods Demo ===");

    const str = "  Hello World  ";

    console.log("Original:", `"${str}"`);
    console.log("trim():", `"${str.trim()}"`);
    console.log("toLowerCase():", str.toLowerCase());
    console.log("toUpperCase():", str.toUpperCase());
    console.log("includes('World'):", str.includes('World'));
    console.log("startsWith('  He'):", str.startsWith('  He'));
    console.log("slice(2, 7):", `"${str.slice(2, 7)}"`);
    console.log("replace('World', 'JS'):", str.replace('World', 'JS'));
}

function demoTemplateLiterals() {
    console.log("=== Template Literals Demo ===");

    const name = "Alice";
    const age = 25;

    const message = `Hello ${name}, you are ${age} years old`;
    console.log(message);

    const multiline = `
        Line 1
        Line 2
        Line 3
    `;
    console.log(multiline);

    // Tagged template
    function highlight(strings, ...values) {
        return strings.reduce((result, str, i) => {
            return result + str + (values[i] ? `**${values[i]}**` : '');
        }, '');
    }

    const tagged = highlight`Name: ${name}, Age: ${age}`;
    console.log("Tagged:", tagged);
}

function demoRegex() {
    console.log("=== Regex Demo ===");

    const text = "Hello World 123, hello universe 456";

    // Test
    console.log("/hello/i.test():", /hello/i.test(text));

    // Match
    console.log("match(/hello/gi):", text.match(/hello/gi));
    console.log("match(/\\d+/g):", text.match(/\d+/g));

    // Replace
    console.log("replace(/hello/gi, 'Hi'):", text.replace(/hello/gi, 'Hi'));

    // Split
    console.log("'a1b2c3'.split(/\\d/):", "a1b2c3".split(/\d/));
}

function demoRegexValidation() {
    console.log("=== Regex Validation Demo ===");

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("Valid email:", emailRegex.test("user@example.com"));
    console.log("Invalid email:", emailRegex.test("invalid.email"));

    // Phone (FR)
    const phoneRegex = /^0[1-9](\d{2}){4}$/;
    console.log("Valid phone:", phoneRegex.test("0612345678"));
    console.log("Invalid phone:", phoneRegex.test("123456"));

    // URL
    const urlRegex = /^https?:\/\/.+/;
    console.log("Valid URL:", urlRegex.test("https://example.com"));
}

function demoSlugify() {
    console.log("=== Slugify Demo ===");

    function slugify(text) {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }

    console.log(slugify("Hello World!"));
    console.log(slugify("  JavaScript  ES6+  "));
    console.log(slugify("Café & Thé"));
}

function demoCapitalize() {
    console.log("=== Capitalize Demo ===");

    function capitalize(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    console.log(capitalize("hello world"));
    console.log(capitalize("javascript is awesome"));
}
