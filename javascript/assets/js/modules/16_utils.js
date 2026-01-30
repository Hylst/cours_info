// ============ SECTION 16: Utilitaires - Interactive Playground ============

function playMath() {
    const output = document.getElementById('playground-output');

    const num = 4.7;
    const arr = [5, 2, 8, 1, 9];
    const random = Math.floor(Math.random() * 100);

    output.innerHTML = `
        <div style="margin-bottom:15px">
            <strong style="color:var(--accent)">🔢 Math Demonstrations</strong>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Arrondis de ${num} :</strong><br>
            <code>Math.round(${num}) = ${Math.round(num)}</code><br>
            <code>Math.ceil(${num}) = ${Math.ceil(num)}</code><br>
            <code>Math.floor(${num}) = ${Math.floor(num)}</code><br>
            <code>Math.trunc(${num}) = ${Math.trunc(num)}</code>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Min/Max de ${JSON.stringify(arr)} :</strong><br>
            <code>Math.min(...arr) = ${Math.min(...arr)}</code><br>
            <code>Math.max(...arr) = ${Math.max(...arr)}</code>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Puissance & Racine :</strong><br>
            <code>2 ** 3 = ${2 ** 3}</code><br>
            <code>Math.sqrt(16) = ${Math.sqrt(16)}</code><br>
            <code>Math.cbrt(27) = ${Math.cbrt(27)}</code>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Aléatoire :</strong><br>
            <code>Random 0-99 = ${random}</code><br>
            <code>Math.PI = ${Math.PI.toFixed(5)}</code><br>
            <code>Math.E = ${Math.E.toFixed(5)}</code>
        </div>
    `;
}

function playDate() {
    const output = document.getElementById('playground-output');

    const now = new Date();
    const specific = new Date('2024-12-25T14:30:00');
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const diff = tomorrow - now;
    const hoursDiff = (diff / (1000 * 60 * 60)).toFixed(2);

    output.innerHTML = `
        <div style="margin-bottom:15px">
            <strong style="color:var(--accent)">📅 Date Demonstrations</strong>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Date actuelle :</strong><br>
            <code>toLocaleDateString() = ${now.toLocaleDateString('fr-FR')}</code><br>
            <code>toLocaleTimeString() = ${now.toLocaleTimeString('fr-FR')}</code><br>
            <code>toISOString() = ${now.toISOString()}</code>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Getters :</strong><br>
            <code>getFullYear() = ${now.getFullYear()}</code><br>
            <code>getMonth() = ${now.getMonth()} (0-11, ${now.getMonth()} = ${['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'][now.getMonth()]})</code><br>
            <code>getDate() = ${now.getDate()}</code><br>
            <code>getDay() = ${now.getDay()} (0-6, ${['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'][now.getDay()]})</code>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Calculs :</strong><br>
            <code>Demain = ${tomorrow.toLocaleDateString('fr-FR')}</code><br>
            <code>Différence = ${hoursDiff} heures</code><br>
            <code>Timestamp = ${now.getTime()}</code>
        </div>
    `;
}

function playJSON() {
    const output = document.getElementById('playground-output');

    const obj = {
        name: 'Alice',
        age: 25,
        active: true,
        scores: [10, 20, 30],
        metadata: { created: '2024-01-01' }
    };

    const json = JSON.stringify(obj);
    const pretty = JSON.stringify(obj, null, 2);
    const filtered = JSON.stringify(obj, ['name', 'age']);

    output.innerHTML = `
        <div style="margin-bottom:15px">
            <strong style="color:var(--accent)">📦 JSON Demonstrations</strong>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Objet original :</strong><br>
            <code>${JSON.stringify(obj)}</code>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>JSON.stringify() compact :</strong><br>
            <code>${json}</code>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>JSON.stringify() avec indentation :</strong><br>
            <pre style="margin:5px 0; font-size:0.85rem">${pretty}</pre>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>JSON.stringify() filtré (name, age) :</strong><br>
            <code>${filtered}</code>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>JSON.parse() :</strong><br>
            <code>Parsed object = ${JSON.stringify(JSON.parse(json))}</code>
        </div>
    `;
}

function playIntl() {
    const output = document.getElementById('playground-output');

    const num = 1234567.89;
    const price = 99.99;
    const percent = 0.75;
    const date = new Date();

    const numFR = new Intl.NumberFormat('fr-FR').format(num);
    const numUS = new Intl.NumberFormat('en-US').format(num);
    const currencyEUR = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
    const currencyUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    const percentFmt = new Intl.NumberFormat('fr-FR', { style: 'percent' }).format(percent);

    const dateFR = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short' }).format(date);
    const dateUS = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);

    const rtf = new Intl.RelativeTimeFormat('fr', { numeric: 'auto' });

    output.innerHTML = `
        <div style="margin-bottom:15px">
            <strong style="color:var(--accent)">🌍 Intl Demonstrations</strong>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Nombres (${num}) :</strong><br>
            <code>FR: ${numFR}</code><br>
            <code>US: ${numUS}</code>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Devises (${price}) :</strong><br>
            <code>EUR: ${currencyEUR}</code><br>
            <code>USD: ${currencyUSD}</code>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Pourcentage :</strong><br>
            <code>${percent} = ${percentFmt}</code>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Dates :</strong><br>
            <code>FR: ${dateFR}</code><br>
            <code>US: ${dateUS}</code>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin:8px 0">
            <strong>Dates relatives :</strong><br>
            <code>-1 day: ${rtf.format(-1, 'day')}</code><br>
            <code>+2 weeks: ${rtf.format(2, 'week')}</code><br>
            <code>-3 months: ${rtf.format(-3, 'month')}</code>
        </div>
    `;
}

function playConsole() {
    const output = document.getElementById('playground-output');

    // Log to actual console
    console.log('%c🖥️ Console Demo Started', 'color: #6366f1; font-weight: bold; font-size: 14px');
    console.log('Message simple');
    console.warn('Avertissement');
    console.error('Erreur de démo');

    const user = { name: 'Alice', age: 25, role: 'admin' };
    console.table([user]);

    console.time('demo-timer');
    setTimeout(() => {
        console.timeEnd('demo-timer');
    }, 100);

    console.group('Groupe de logs');
    console.log('Item 1');
    console.log('Item 2');
    console.groupEnd();

    output.innerHTML = `
        <div style="margin-bottom:15px">
            <strong style="color:var(--accent)">🖥️ Console Demonstrations</strong>
        </div>
        
        <div style="background:rgba(76,175,80,0.1); padding:15px; border-radius:6px; border-left:3px solid #4caf50">
            <strong>✅ Logs envoyés à la console !</strong><br>
            Ouvrez la console du navigateur (F12) pour voir :
            <ul style="margin:10px 0; padding-left:20px">
                <li>Logs colorés et stylés</li>
                <li>Tableau formaté (console.table)</li>
                <li>Timer de performance</li>
                <li>Groupe de logs</li>
            </ul>
        </div>
        
        <div style="background:rgba(99,102,241,0.1); padding:12px; border-radius:6px; margin-top:15px">
            <strong>Méthodes disponibles :</strong><br>
            <code>console.log(), .info(), .warn(), .error()</code><br>
            <code>console.table(), .dir(), .group()</code><br>
            <code>console.time(), .timeEnd()</code><br>
            <code>console.count(), .assert(), .trace()</code>
        </div>
    `;
}

// ========== DEMO FUNCTIONS FOR CONSOLE ==========

function demoMathUtils() {
    console.log("=== Math Utilities Demo ===");

    // Random integer between min and max
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log("Random 1-10:", randomInt(1, 10));

    // Round to N decimals
    function round(num, decimals) {
        const factor = 10 ** decimals;
        return Math.round(num * factor) / factor;
    }
    console.log("Round 3.14159 to 2 decimals:", round(3.14159, 2));

    // Clamp value
    function clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }
    console.log("Clamp 150 between 0-100:", clamp(150, 0, 100));
}

function demoDateUtils() {
    console.log("=== Date Utilities Demo ===");

    const now = new Date();
    console.log("Now:", now.toLocaleString('fr-FR'));

    // Add days
    function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    console.log("Tomorrow:", addDays(now, 1).toLocaleDateString('fr-FR'));

    // Format date
    const formatted = new Intl.DateTimeFormat('fr-FR', {
        dateStyle: 'full',
        timeStyle: 'short'
    }).format(now);
    console.log("Formatted:", formatted);
}

function demoJSONUtils() {
    console.log("=== JSON Utilities Demo ===");

    const obj = { name: 'Alice', age: 25, scores: [10, 20, 30] };

    // Safe parse
    function safeJSONParse(str, fallback = null) {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.error("JSON parse error:", e.message);
            return fallback;
        }
    }

    console.log("Valid:", safeJSONParse('{"key": "value"}'));
    console.log("Invalid:", safeJSONParse('invalid', {}));

    // Pretty print
    console.log("Pretty:\n" + JSON.stringify(obj, null, 2));
}
