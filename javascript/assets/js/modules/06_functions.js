// ============ SECTION 6: Functions - This Playground ============

function testThis(type) {
    const output = document.getElementById('this-output');

    // Visual feedback
    document.querySelectorAll('.this-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    let code = '';
    let result = '';
    let explanation = '';

    switch (type) {
        case 'method':
            code = `const obj = {
    name: "Alice",
    greet: function() {
        return this.name;
    }
};
obj.greet();`;
            result = '"Alice"';
            explanation = `Quand appelée comme méthode (<code>obj.greet()</code>), <code>this</code> pointe vers l'objet <code>obj</code>.`;
            break;

        case 'standalone':
            code = `function greet() {
    return this;
}
greet(); // Appel simple`;
            result = 'undefined (strict mode) ou window';
            explanation = `En mode strict, <code>this</code> est <code>undefined</code> dans un appel simple. En mode non-strict, c'est l'objet global (<code>window</code>).`;
            break;

        case 'arrow':
            code = `const obj = {
    name: "Alice",
    greet: () => {
        return this; // Lexical this
    }
};
obj.greet();`;
            result = 'window (ou undefined en module)';
            explanation = `Les arrow functions n'ont PAS leur propre <code>this</code>. Elles héritent du <code>this</code> du scope parent (ici, global).`;
            break;

        case 'call':
            code = `function greet() {
    return this.name;
}
const custom = { name: "Bob" };
greet.call(custom);`;
            result = '"Bob"';
            explanation = `<code>call()</code> permet de définir explicitement <code>this</code>. Ici, <code>this</code> = <code>custom</code>.`;
            break;

        case 'bind':
            code = `function greet() {
    return this.name;
}
const custom = { name: "Charlie" };
const boundGreet = greet.bind(custom);
boundGreet();`;
            result = '"Charlie"';
            explanation = `<code>bind()</code> crée une nouvelle fonction avec <code>this</code> fixé de manière permanente. Peu importe comment on l'appelle ensuite.`;
            break;
    }

    output.innerHTML = `
        <div style="margin-bottom:15px">
            <div style="color:var(--accent); font-weight:bold; margin-bottom:8px">📝 Code :</div>
            <pre style="background:rgba(0,0,0,0.3); padding:12px; border-radius:6px; overflow-x:auto"><code class="language-javascript">${code}</code></pre>
        </div>
        <div style="margin-bottom:15px">
            <div style="color:var(--primary); font-weight:bold; margin-bottom:8px">📊 Valeur de this :</div>
            <div style="background:rgba(99,102,241,0.2); padding:12px; border-radius:6px; border-left:3px solid var(--primary); font-weight:bold">${result}</div>
        </div>
        <div>
            <div style="color:var(--muted); font-weight:bold; margin-bottom:8px">💡 Explication :</div>
            <div style="opacity:0.9; line-height:1.6">${explanation}</div>
        </div>
    `;

    // Re-highlight if Prism available
    if (window.Prism) {
        setTimeout(() => window.Prism.highlightAll(), 50);
    }
}

// Closure demo (can be called from console)
function demoClosures() {
    console.log("=== Closure Demo ===");

    function createCounter() {
        let count = 0;
        return function () {
            count++;
            console.log(`Count: ${count}`);
            return count;
        };
    }

    const counter1 = createCounter();
    const counter2 = createCounter();

    console.log("Counter 1:");
    counter1(); // 1
    counter1(); // 2
    counter1(); // 3

    console.log("\nCounter 2 (indépendant):");
    counter2(); // 1
    counter2(); // 2

    console.log("\nChaque closure a sa propre copie de 'count' !");
}

// Pure vs Impure demo
function demoPureVsImpure() {
    console.log("=== Pure vs Impure ===");

    // Impure
    let total = 0;
    function addImpure(n) {
        total += n;
        return total;
    }

    console.log("Impure:");
    console.log(addImpure(5)); // 5
    console.log(addImpure(5)); // 10 (différent !)

    // Pure
    function addPure(a, b) {
        return a + b;
    }

    console.log("\nPure:");
    console.log(addPure(5, 5)); // 10
    console.log(addPure(5, 5)); // 10 (toujours pareil)
}
