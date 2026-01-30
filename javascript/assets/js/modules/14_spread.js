// ============ SECTION 14: Spread & Rest - Interactive Visualizer ============

function vizSpreadArray() {
    const output = document.getElementById('viz-output');

    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2];

    output.innerHTML = `
        <div class="viz-step">
            <strong>📦 Tableaux originaux :</strong><br>
            <code>arr1 = ${JSON.stringify(arr1)}</code><br>
            <code>arr2 = ${JSON.stringify(arr2)}</code>
        </div>
        <div class="viz-step">
            <strong>🔄 Opération :</strong><br>
            <code>const combined = [...arr1, ...arr2];</code>
        </div>
        <div class="viz-step">
            <strong>✅ Résultat :</strong><br>
            <code>combined = ${JSON.stringify(combined)}</code>
        </div>
        <div style="margin-top:15px; padding:12px; background:rgba(76,175,80,0.1); border-radius:6px; border-left:3px solid #4caf50">
            <strong>💡 Explication :</strong> Le spread <code>...</code> "décompresse" chaque tableau en éléments individuels, qui sont ensuite recombinés dans un nouveau tableau.
        </div>
    `;
}

function vizSpreadObject() {
    const output = document.getElementById('viz-output');

    const user = { name: 'Alice', age: 25 };
    const location = { city: 'Paris', country: 'France' };
    const merged = { ...user, ...location };

    // Test override
    const override = { ...user, age: 26, role: 'Admin' };

    output.innerHTML = `
        <div class="viz-step">
            <strong>📦 Objets originaux :</strong><br>
            <code>user = ${JSON.stringify(user)}</code><br>
            <code>location = ${JSON.stringify(location)}</code>
        </div>
        <div class="viz-step">
            <strong>🔄 Fusion :</strong><br>
            <code>const merged = { ...user, ...location };</code><br>
            <code>merged = ${JSON.stringify(merged)}</code>
        </div>
        <div class="viz-step">
            <strong>🔄 Override de propriété :</strong><br>
            <code>const override = { ...user, age: 26, role: 'Admin' };</code><br>
            <code>override = ${JSON.stringify(override)}</code>
        </div>
        <div style="margin-top:15px; padding:12px; background:rgba(76,175,80,0.1); border-radius:6px; border-left:3px solid #4caf50">
            <strong>💡 Explication :</strong> Les propriétés sont copiées dans l'ordre. Si une clé existe déjà, elle est écrasée par la dernière valeur.
        </div>
    `;
}

function vizRestParams() {
    const output = document.getElementById('viz-output');

    // Simuler l'appel de fonction
    function sum(...numbers) {
        return numbers.reduce((total, n) => total + n, 0);
    }

    const result = sum(1, 2, 3, 4, 5);

    output.innerHTML = `
        <div class="viz-step">
            <strong>📝 Définition de fonction :</strong><br>
            <code>function sum(...numbers) {</code><br>
            <code>&nbsp;&nbsp;return numbers.reduce((total, n) => total + n, 0);</code><br>
            <code>}</code>
        </div>
        <div class="viz-step">
            <strong>📞 Appel :</strong><br>
            <code>sum(1, 2, 3, 4, 5)</code>
        </div>
        <div class="viz-step">
            <strong>📥 Collecte des arguments :</strong><br>
            <code>numbers = [1, 2, 3, 4, 5]</code> (Array)
        </div>
        <div class="viz-step">
            <strong>✅ Résultat :</strong><br>
            <code>${result}</code>
        </div>
        <div style="margin-top:15px; padding:12px; background:rgba(33,150,243,0.1); border-radius:6px; border-left:3px solid #2196f3">
            <strong>💡 Explication :</strong> Le paramètre rest <code>...numbers</code> collecte tous les arguments passés dans un vrai tableau (contrairement à <code>arguments</code>).
        </div>
    `;
}

function vizRestDestructure() {
    const output = document.getElementById('viz-output');

    const array = [1, 2, 3, 4, 5];
    const [first, second, ...others] = array;

    const person = { name: 'Bob', age: 30, city: 'Lyon', job: 'Dev' };
    const { name, age, ...rest } = person;

    output.innerHTML = `
        <div class="viz-step">
            <strong>📦 Array Destructuring :</strong><br>
            <code>const array = ${JSON.stringify(array)}</code><br>
            <code>const [first, second, ...others] = array;</code>
        </div>
        <div class="viz-step">
            <strong>✅ Résultat :</strong><br>
            <code>first = ${first}</code><br>
            <code>second = ${second}</code><br>
            <code>others = ${JSON.stringify(others)}</code>
        </div>
        <hr style="border:none; border-top:1px solid var(--border); margin:20px 0">
        <div class="viz-step">
            <strong>📦 Object Destructuring :</strong><br>
            <code>const person = ${JSON.stringify(person)}</code><br>
            <code>const { name, age, ...rest } = person;</code>
        </div>
        <div class="viz-step">
            <strong>✅ Résultat :</strong><br>
            <code>name = "${name}"</code><br>
            <code>age = ${age}</code><br>
            <code>rest = ${JSON.stringify(rest)}</code>
        </div>
        <div style="margin-top:15px; padding:12px; background:rgba(33,150,243,0.1); border-radius:6px; border-left:3px solid #2196f3">
            <strong>💡 Explication :</strong> Rest dans le destructuring collecte les éléments/propriétés restants. Très utile pour séparer certaines valeurs du reste.
        </div>
    `;
}

function vizClone() {
    const output = document.getElementById('viz-output');

    const original = { name: 'Alice', scores: [10, 20, 30] };
    const spreadClone = { ...original };
    const reference = original;

    // Modifier le clone
    spreadClone.name = 'Bob';
    spreadClone.scores.push(40);  // Attention : shallow copy !

    // Modifier la référence
    reference.name = 'Charlie';

    output.innerHTML = `
        <div class="viz-step">
            <strong>📦 Objet original :</strong><br>
            <code>const original = { name: 'Alice', scores: [10, 20, 30] }</code>
        </div>
        <div class="viz-step">
            <strong>🔄 Clone avec spread :</strong><br>
            <code>const spreadClone = { ...original };</code><br>
            <code>spreadClone.name = 'Bob';</code><br>
            <code>spreadClone.scores.push(40);</code>
        </div>
        <div class="viz-step">
            <strong>🔗 Référence (pas de clone) :</strong><br>
            <code>const reference = original;</code><br>
            <code>reference.name = 'Charlie';</code>
        </div>
        <hr style="border:none; border-top:1px solid var(--border); margin:15px 0">
        <div class="viz-step">
            <strong>✅ État final :</strong><br>
            <code>original = ${JSON.stringify(original)}</code><br>
            <code>spreadClone = ${JSON.stringify(spreadClone)}</code><br>
            <code>reference = ${JSON.stringify(reference)}</code>
        </div>
        <div style="margin-top:15px; padding:12px; background:rgba(244,67,54,0.1); border-radius:6px; border-left:3px solid #f44336">
            <strong>⚠️ Attention :</strong> Le spread fait un <strong>clone superficiel</strong> (shallow copy). Les objets/tableaux imbriqués sont toujours partagés ! <code>original.scores</code> et <code>spreadClone.scores</code> pointent vers le même tableau.
        </div>
        <div style="margin-top:10px; padding:12px; background:rgba(76,175,80,0.1); border-radius:6px; border-left:3px solid #4caf50">
            <strong>💡 Solution :</strong> Pour un clone profond, utilisez <code>structuredClone(obj)</code> ou <code>JSON.parse(JSON.stringify(obj))</code> (avec limitations).
        </div>
    `;
}

// ========== DEMO FUNCTIONS FOR CONSOLE ==========

function demoSpreadAdvanced() {
    console.log("=== Advanced Spread Patterns ===");

    // Conditional spread
    const includeExtra = true;
    const obj = {
        name: 'Alice',
        ...(includeExtra && { extra: 'data' })
    };
    console.log("Conditional spread:", obj);

    // Spread with computed properties
    const key = 'dynamicKey';
    const merged = {
        ...{ a: 1 },
        [key]: 'value'
    };
    console.log("Computed property:", merged);
}

function demoRestAdvanced() {
    console.log("=== Advanced Rest Patterns ===");

    // Rest with default values
    function greet(greeting = 'Hello', ...names) {
        return `${greeting} ${names.join(', ')}`;
    }
    console.log(greet('Hi', 'Alice', 'Bob'));

    // Rest in nested destructuring
    const data = {
        user: { name: 'Alice', age: 25 },
        settings: { theme: 'dark', lang: 'fr' }
    };
    const { user: { name }, ...rest } = data;
    console.log("Name:", name);
    console.log("Rest:", rest);
}

function demoImmutablePatterns() {
    console.log("=== Immutable Update Patterns ===");

    const state = {
        todos: ['Task 1', 'Task 2'],
        user: { name: 'Alice' }
    };

    // Add todo (immutable)
    const newState = {
        ...state,
        todos: [...state.todos, 'Task 3']
    };
    console.log("Original:", state);
    console.log("Updated:", newState);
}
