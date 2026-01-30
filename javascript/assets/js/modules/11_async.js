// ============ SECTION 11: Async Basics - Event Loop & Execution Order ============

// ========== EXECUTION ORDER PLAYGROUND ==========

function runExecutionOrder() {
    const output = document.getElementById('exec-output');
    const results = [];
    let order = 1;

    // Clear previous
    output.innerHTML = '';

    // Capture console.log
    const originalLog = console.log;
    const captureLog = (msg, type) => {
        results.push({ order: order++, msg, type });
    };

    // Execute the code
    captureLog('1: Sync', 'sync');

    setTimeout(() => {
        captureLog('2: Macro (setTimeout)', 'macro');
        displayResults();
    }, 0);

    Promise.resolve().then(() => {
        captureLog('3: Micro (Promise)', 'micro');
    });

    captureLog('4: Sync', 'sync');

    queueMicrotask(() => {
        captureLog('5: Micro (queueMicrotask)', 'micro');
    });

    // Wait for async operations to complete
    setTimeout(() => {
        displayResults();
    }, 100);

    function displayResults() {
        if (results.length < 5) return; // Wait for all

        let html = '<div style="margin-bottom:15px"><strong style="color:var(--accent)">📊 Ordre d\'exécution réel :</strong></div>';

        results.forEach((result, idx) => {
            const className = `exec-line exec-${result.type}`;
            let icon = '📍';
            if (result.type === 'sync') icon = '🔴';
            if (result.type === 'macro') icon = '🟠';
            if (result.type === 'micro') icon = '🟢';

            html += `<div class="${className}">${icon} <strong>${idx + 1}.</strong> ${result.msg}</div>`;
        });

        html += '<div style="margin-top:20px; padding:12px; background:rgba(99,102,241,0.1); border-radius:6px">';
        html += '<strong>Explication :</strong><br>';
        html += '1. Code synchrone s\'exécute d\'abord (1, 4)<br>';
        html += '2. Microtasks ensuite (Promises) (3, 5)<br>';
        html += '3. Macrotasks en dernier (setTimeout) (2)';
        html += '</div>';

        output.innerHTML = html;
    }
}

function resetExecution() {
    const output = document.getElementById('exec-output');
    output.innerHTML = '<div style="opacity:0.5; text-align:center">Cliquez sur Exécuter pour voir l\'ordre</div>';
}

// ========== EVENT LOOP VISUALIZATION (STATIC) ==========

function visualizeEventLoop() {
    // This is a static visualization
    // In a real app, you could animate the movement of tasks between queues
    console.log("Event Loop Visualization:");
    console.log("1. Call Stack executes synchronous code");
    console.log("2. Microtask Queue (Promises) has priority");
    console.log("3. Macrotask Queue (setTimeout) executes last");
}

// ========== DEMO FUNCTIONS FOR CONSOLE ==========

function demoCallbackHell() {
    console.log("=== Callback Hell Demo ===");

    // Simulate async operations
    function getData(callback) {
        setTimeout(() => callback('Data A'), 100);
    }

    function getMoreData(data, callback) {
        setTimeout(() => callback(data + ' -> Data B'), 100);
    }

    // Callback hell
    getData(function (a) {
        console.log(a);
        getMoreData(a, function (b) {
            console.log(b);
            getMoreData(b, function (c) {
                console.log(c);
                console.log("😱 This is callback hell!");
            });
        });
    });
}

async function demoAsyncAwait() {
    console.log("=== Async/Await Demo ===");

    // Simulate async operations
    const getData = () => new Promise(resolve => setTimeout(() => resolve('Data A'), 100));
    const getMoreData = (data) => new Promise(resolve => setTimeout(() => resolve(data + ' -> Data B'), 100));

    // Clean async/await
    const a = await getData();
    console.log(a);
    const b = await getMoreData(a);
    console.log(b);
    const c = await getMoreData(b);
    console.log(c);
    console.log("✅ Much cleaner with async/await!");
}

function demoMicroVsMacro() {
    console.log("=== Microtask vs Macrotask Demo ===");
    console.log("Starting...");

    setTimeout(() => console.log("Macrotask 1 (setTimeout)"), 0);

    Promise.resolve().then(() => console.log("Microtask 1 (Promise)"));

    setTimeout(() => console.log("Macrotask 2 (setTimeout)"), 0);

    Promise.resolve().then(() => console.log("Microtask 2 (Promise)"));

    console.log("Synchronous");

    // Expected order:
    // "Starting..."
    // "Synchronous"
    // "Microtask 1 (Promise)"
    // "Microtask 2 (Promise)"
    // "Macrotask 1 (setTimeout)"
    // "Macrotask 2 (setTimeout)"
}

function demoSetInterval() {
    console.log("=== setInterval Demo ===");

    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        console.log(`Tick ${count}`);

        if (count >= 5) {
            clearInterval(intervalId);
            console.log("Interval cleared!");
        }
    }, 500);

    console.log("Interval started (will run 5 times)");
}

// Legacy demo functions (keep for compatibility)
function demoPromise() {
    const output = document.getElementById('demo-async-output');
    output.textContent = 'Chargement...';

    new Promise(resolve => setTimeout(() => resolve('✅ Promise résolue !'), 1500))
        .then(result => output.textContent = result);
}

async function demoAsync() {
    const output = document.getElementById('demo-async-output');
    output.textContent = 'Chargement...';

    const wait = ms => new Promise(r => setTimeout(r, ms));
    await wait(1000);
    output.textContent = '✅ Async/Await terminé !';
}
