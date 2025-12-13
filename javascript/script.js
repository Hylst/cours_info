/* =====================================================
   COURS JAVASCRIPT - DEMONSTRATIONS
   Créé par Geoffroy Streit - 2025
   ===================================================== */

// ============ SECTION 1: Variables ============
function demoVariables() {
    const output = document.getElementById('demo-var-output');
    
    let message = "Hello";
    const PI = 3.14159;
    var oldStyle = "var is old";
    
    output.innerHTML = `
        <div>let message = "${message}"</div>
        <div>const PI = ${PI}</div>
        <div>var oldStyle = "${oldStyle}"</div>
        <div style="color: var(--green); margin-top: 10px;">✓ Variables déclarées avec succès!</div>
    `;
}

// ============ SECTION 2: Types de données ============
function demoTypes() {
    const output = document.getElementById('demo-types-output');
    
    const examples = [
        { val: "Hello", type: typeof "Hello" },
        { val: 42, type: typeof 42 },
        { val: 3.14, type: typeof 3.14 },
        { val: true, type: typeof true },
        { val: null, type: "null (object bug)" },
        { val: undefined, type: typeof undefined },
        { val: Symbol('id'), type: typeof Symbol('id') },
        { val: [1, 2, 3], type: "array (object)" },
        { val: { a: 1 }, type: typeof { a: 1 } }
    ];
    
    output.innerHTML = examples.map(e => 
        `<div><span style="color:var(--primary)">${JSON.stringify(e.val)}</span> → <span style="color:var(--green)">${e.type}</span></div>`
    ).join('');
}

// ============ SECTION 3: Opérateurs ============
function demoOperators() {
    const output = document.getElementById('demo-op-output');
    
    const results = [
        `5 + 3 = ${5 + 3}`,
        `10 - 4 = ${10 - 4}`,
        `6 * 7 = ${6 * 7}`,
        `15 / 3 = ${15 / 3}`,
        `17 % 5 = ${17 % 5}`,
        `2 ** 8 = ${2 ** 8}`,
        `"5" == 5 → ${("5" == 5)}`,
        `"5" === 5 → ${("5" === 5)}`,
        `true && false → ${true && false}`,
        `true || false → ${true || false}`
    ];
    
    output.innerHTML = results.map(r => `<div>${r}</div>`).join('');
}

// ============ SECTION 4: Conditions ============
function demoConditions() {
    const input = document.getElementById('demo-cond-input');
    const output = document.getElementById('demo-cond-output');
    const age = parseInt(input.value) || 0;
    
    let result;
    if (age < 0) {
        result = "❌ Âge invalide";
    } else if (age < 13) {
        result = "👶 Enfant";
    } else if (age < 20) {
        result = "🧑 Adolescent";
    } else if (age < 60) {
        result = "👨 Adulte";
    } else {
        result = "👴 Senior";
    }
    
    output.innerHTML = `Âge: ${age} → ${result}`;
}

// ============ SECTION 5: Boucles ============
function demoLoops() {
    const output = document.getElementById('demo-loops-output');
    const fruits = ['🍎', '🍌', '🍊', '🍇', '🍓'];
    
    let forResult = '<strong>for:</strong> ';
    for (let i = 0; i < fruits.length; i++) {
        forResult += fruits[i] + ' ';
    }
    
    let forOfResult = '<strong>for...of:</strong> ';
    for (const fruit of fruits) {
        forOfResult += fruit + ' ';
    }
    
    let mapResult = '<strong>map:</strong> ';
    mapResult += fruits.map(f => f).join(' ');
    
    output.innerHTML = `${forResult}<br>${forOfResult}<br>${mapResult}`;
}

// ============ SECTION 6: Fonctions ============
function demoFunctions() {
    const output = document.getElementById('demo-fn-output');
    
    // Fonction classique
    function add(a, b) {
        return a + b;
    }
    
    // Arrow function
    const multiply = (a, b) => a * b;
    
    // Fonction avec valeur par défaut
    const greet = (name = "Monde") => `Bonjour ${name}!`;
    
    output.innerHTML = `
        <div>add(5, 3) = ${add(5, 3)}</div>
        <div>multiply(4, 7) = ${multiply(4, 7)}</div>
        <div>greet() = "${greet()}"</div>
        <div>greet("JS") = "${greet("JS")}"</div>
    `;
}

// ============ SECTION 7: Arrays ============
function demoArrays() {
    const output = document.getElementById('demo-arr-output');
    
    const numbers = [1, 2, 3, 4, 5];
    
    const results = [
        `Original: [${numbers}]`,
        `map(x => x*2): [${numbers.map(x => x * 2)}]`,
        `filter(x => x>2): [${numbers.filter(x => x > 2)}]`,
        `reduce((a,b) => a+b): ${numbers.reduce((a, b) => a + b)}`,
        `find(x => x>3): ${numbers.find(x => x > 3)}`,
        `some(x => x>4): ${numbers.some(x => x > 4)}`,
        `every(x => x>0): ${numbers.every(x => x > 0)}`
    ];
    
    output.innerHTML = results.map(r => `<div>${r}</div>`).join('');
}

// ============ SECTION 8: Objects ============
function demoObjects() {
    const output = document.getElementById('demo-obj-output');
    
    const user = {
        name: "Alice",
        age: 28,
        skills: ["JS", "CSS", "HTML"],
        greet() {
            return `Hello, I'm ${this.name}`;
        }
    };
    
    const { name, age } = user; // Destructuring
    
    output.innerHTML = `
        <div>user.name: "${user.name}"</div>
        <div>user.age: ${user.age}</div>
        <div>user.skills: [${user.skills.join(', ')}]</div>
        <div>user.greet(): "${user.greet()}"</div>
        <div style="color:var(--purple)">Destructuring: name="${name}", age=${age}</div>
    `;
}

// ============ SECTION 9: DOM ============
function demoDOM() {
    const output = document.getElementById('demo-dom-output');
    const box = document.getElementById('demo-dom-box');
    
    const colors = ['var(--primary)', 'var(--green)', 'var(--purple)', 'var(--pink)', 'var(--accent)'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    box.style.background = randomColor;
    box.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
    
    output.textContent = `Couleur changée: ${randomColor}`;
}

// ============ SECTION 10: Events ============
let clickCount = 0;
function demoEvents() {
    clickCount++;
    const output = document.getElementById('demo-event-output');
    output.textContent = `Clics: ${clickCount} 🖱️`;
}

function demoKeyPress(event) {
    const output = document.getElementById('demo-key-output');
    output.textContent = `Touche: "${event.key}" (code: ${event.keyCode})`;
}

// ============ SECTION 11: Async ============
function demoPromise() {
    const output = document.getElementById('demo-async-output');
    output.innerHTML = '<span style="color:var(--orange)">⏳ Chargement...</span>';
    
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ Données chargées!");
        }, 1500);
    });
    
    promise.then(result => {
        output.innerHTML = `<span style="color:var(--green)">${result}</span>`;
    });
}

async function demoAsync() {
    const output = document.getElementById('demo-async-output');
    output.innerHTML = '<span style="color:var(--orange)">⏳ Async/Await...</span>';
    
    await new Promise(r => setTimeout(r, 1000));
    output.innerHTML = '<span style="color:var(--green)">✅ Async terminé!</span>';
}

// ============ SECTION 12: Storage ============
function demoLocalStorage() {
    const input = document.getElementById('demo-storage-input');
    const output = document.getElementById('demo-storage-output');
    
    if (input.value) {
        localStorage.setItem('memoJS', input.value);
        output.innerHTML = `<span style="color:var(--green)">✓ Sauvegardé: "${input.value}"</span>`;
    }
}

function demoLoadStorage() {
    const output = document.getElementById('demo-storage-output');
    const saved = localStorage.getItem('memoJS');
    
    if (saved) {
        output.innerHTML = `<span style="color:var(--accent)">📦 Stocké: "${saved}"</span>`;
    } else {
        output.innerHTML = '<span style="color:var(--dim)">Rien en mémoire</span>';
    }
}

// ============ SECTION 13: Spread & Rest ============
function demoSpread() {
    const output = document.getElementById('demo-spread-output');
    
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const merged = [...arr1, ...arr2];
    
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, ...obj1 };
    
    function sum(...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
    }
    
    output.innerHTML = `
        <div>Spread array: [${merged}]</div>
        <div>Spread object: ${JSON.stringify(obj2)}</div>
        <div>Rest params sum(1,2,3,4): ${sum(1, 2, 3, 4)}</div>
    `;
}

// ============ SECTION 14: Classes ============
function demoClasses() {
    const output = document.getElementById('demo-class-output');
    
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            return `${this.name} fait du bruit`;
        }
    }
    
    class Dog extends Animal {
        speak() {
            return `${this.name} aboie 🐕`;
        }
    }
    
    const rex = new Dog("Rex");
    
    output.innerHTML = `
        <div>new Dog("Rex")</div>
        <div>rex.name: "${rex.name}"</div>
        <div>rex.speak(): "${rex.speak()}"</div>
        <div style="color:var(--purple)">rex instanceof Animal: ${rex instanceof Animal}</div>
    `;
}

// ============ SECTION 15: Fetch API ============
async function demoFetch() {
    const output = document.getElementById('demo-fetch-output');
    output.innerHTML = '<span style="color:var(--orange)">⏳ Fetching...</span>';
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        
        output.innerHTML = `
            <div style="color:var(--green)">✓ Fetch réussi!</div>
            <div>Name: ${data.name}</div>
            <div>Email: ${data.email}</div>
        `;
    } catch (error) {
        output.innerHTML = `<span style="color:var(--red)">❌ Erreur: ${error.message}</span>`;
    }
}

// ============ SECTION 16: Date ============
function demoDate() {
    const output = document.getElementById('demo-date-output');
    
    const now = new Date();
    
    output.innerHTML = `
        <div>Date: ${now.toLocaleDateString('fr-FR')}</div>
        <div>Heure: ${now.toLocaleTimeString('fr-FR')}</div>
        <div>Timestamp: ${now.getTime()}</div>
        <div>Année: ${now.getFullYear()}, Mois: ${now.getMonth() + 1}, Jour: ${now.getDate()}</div>
    `;
}

// ============ SECTION 17: Math ============
function demoMath() {
    const output = document.getElementById('demo-math-output');
    
    output.innerHTML = `
        <div>Math.PI: ${Math.PI.toFixed(5)}</div>
        <div>Math.random(): ${Math.random().toFixed(4)}</div>
        <div>Math.floor(4.7): ${Math.floor(4.7)}</div>
        <div>Math.ceil(4.2): ${Math.ceil(4.2)}</div>
        <div>Math.round(4.5): ${Math.round(4.5)}</div>
        <div>Math.max(1,5,3): ${Math.max(1, 5, 3)}</div>
        <div>Math.sqrt(16): ${Math.sqrt(16)}</div>
        <div>Math.pow(2, 8): ${Math.pow(2, 8)}</div>
    `;
}

// ============ SECTION 18: String Methods ============
function demoStrings() {
    const output = document.getElementById('demo-string-output');
    const str = "JavaScript est génial!";
    
    output.innerHTML = `
        <div>str = "${str}"</div>
        <div>str.length: ${str.length}</div>
        <div>str.toUpperCase(): "${str.toUpperCase()}"</div>
        <div>str.includes("génial"): ${str.includes("génial")}</div>
        <div>str.split(" "): [${str.split(" ").map(s => `"${s}"`).join(", ")}]</div>
        <div>str.replace("génial", "super"): "${str.replace("génial", "super")}"</div>
        <div>str.slice(0, 10): "${str.slice(0, 10)}"</div>
    `;
}

// ============ Init on load ============
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Mémo JavaScript chargé!');
});
