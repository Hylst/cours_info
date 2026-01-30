// ============ SECTION 10: Events - Bubbling Visualizer & Debounce Demo ============

let eventLog = [];
let normalCounter = 0;
let debounceCounter = 0;

// ========== BUBBLING VISUALIZER ==========

function setupBubbling(useCapture = false) {
    const container = document.getElementById('bubble-container');
    const parent = document.getElementById('bubble-parent');
    const child = document.getElementById('bubble-child');

    // Remove existing listeners
    const newContainer = container.cloneNode(true);
    const newParent = newContainer.querySelector('#bubble-parent');
    const newChild = newContainer.querySelector('#bubble-child');
    container.parentNode.replaceChild(newContainer, container);

    // Add new listeners
    const mode = useCapture ? 'Capturing' : 'Bubbling';

    newContainer.addEventListener('click', (e) => {
        logEvent('Container', mode, useCapture ? 'capture' : 'bubble');
    }, useCapture);

    newParent.addEventListener('click', (e) => {
        logEvent('Parent', mode, useCapture ? 'capture' : 'bubble');
    }, useCapture);

    newChild.addEventListener('click', (e) => {
        logEvent('Enfant (Target)', mode, useCapture ? 'capture' : 'bubble');
    }, useCapture);

    clearLog();
    logEvent(`Mode ${mode} activé`, 'info', 'info');
}

function logEvent(element, mode, type) {
    const logDiv = document.getElementById('bubble-log');
    const timestamp = new Date().toLocaleTimeString('fr-FR', { hour12: false, millisecond: true });

    const entry = document.createElement('div');
    entry.className = `log-entry log-${type}`;

    let icon = '📍';
    if (type === 'capture') icon = '⬇️';
    if (type === 'bubble') icon = '⬆️';
    if (type === 'info') icon = 'ℹ️';

    entry.innerHTML = `${icon} <strong>${element}</strong> <span style="opacity:0.6; font-size:0.8rem">(${timestamp})</span>`;

    if (logDiv.querySelector('.log-entry')) {
        logDiv.insertBefore(entry, logDiv.firstChild);
    } else {
        logDiv.innerHTML = '';
        logDiv.appendChild(entry);
    }
}

function clearLog() {
    const logDiv = document.getElementById('bubble-log');
    logDiv.innerHTML = '<div style="opacity:0.5; text-align:center">Cliquez sur l\'enfant pour voir le flow</div>';
}

// ========== DEBOUNCE DEMO ==========

// Debounce function
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

// Normal input handler
function handleNormalInput(value) {
    normalCounter++;
    document.getElementById('counter-normal').textContent = normalCounter;
}

// Debounced input handler
function handleDebounceInput(value) {
    debounceCounter++;
    document.getElementById('counter-debounce').textContent = debounceCounter;
}

const debouncedHandler = debounce(handleDebounceInput, 300);

// Setup event listeners on page load
document.addEventListener('DOMContentLoaded', () => {
    // Setup bubbling demo (default mode)
    setupBubbling(false);

    // Setup debounce demo
    const normalInput = document.getElementById('input-normal');
    const debounceInput = document.getElementById('input-debounce');

    if (normalInput) {
        normalInput.addEventListener('input', (e) => handleNormalInput(e.target.value));
    }

    if (debounceInput) {
        debounceInput.addEventListener('input', (e) => debouncedHandler(e.target.value));
    }
});

// ========== DEMO FUNCTIONS FOR CONSOLE ==========

function demoEventDelegation() {
    console.log("=== Event Delegation Demo ===");

    // Create a list
    const ul = document.createElement('ul');
    ul.style.cssText = 'background: #333; padding: 20px; margin: 20px;';

    for (let i = 1; i <= 5; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        li.className = 'demo-item';
        li.style.cssText = 'padding: 10px; margin: 5px; background: #555; cursor: pointer; list-style: none;';
        ul.appendChild(li);
    }

    // Event delegation (1 listener on parent)
    ul.addEventListener('click', (e) => {
        if (e.target.matches('.demo-item')) {
            console.log('Clicked:', e.target.textContent);
            e.target.style.background = '#4caf50';
        }
    });

    document.body.appendChild(ul);
    console.log("List created. Click on items to see delegation in action.");

    // Cleanup after 10 seconds
    setTimeout(() => {
        ul.remove();
        console.log("Demo list removed");
    }, 10000);
}

function demoDebounceThrottle() {
    console.log("=== Debounce vs Throttle ===");

    let normalCount = 0;
    let debounceCount = 0;
    let throttleCount = 0;

    // Normal
    const normal = () => {
        normalCount++;
        console.log(`Normal: ${normalCount}`);
    };

    // Debounce
    const debouncedFn = debounce(() => {
        debounceCount++;
        console.log(`Debounced: ${debounceCount}`);
    }, 500);

    // Throttle
    function throttle(fn, delay) {
        let lastCall = 0;
        return function (...args) {
            const now = Date.now();
            if (now - lastCall >= delay) {
                lastCall = now;
                fn(...args);
            }
        };
    }

    const throttledFn = throttle(() => {
        throttleCount++;
        console.log(`Throttled: ${throttleCount}`);
    }, 500);

    // Simulate rapid calls
    console.log("Simulating 10 rapid calls...");
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            normal();
            debouncedFn();
            throttledFn();
        }, i * 50);
    }

    setTimeout(() => {
        console.log("\nResults:");
        console.log(`Normal: ${normalCount} calls (all executed)`);
        console.log(`Debounced: ${debounceCount} call (only last one)`);
        console.log(`Throttled: ${throttleCount} calls (limited frequency)`);
    }, 2000);
}

function demoCustomEvent() {
    console.log("=== Custom Event Demo ===");

    // Create custom event
    const myEvent = new CustomEvent('userLoggedIn', {
        detail: { userId: 123, username: 'Alice' }
    });

    // Listen for custom event
    document.addEventListener('userLoggedIn', (e) => {
        console.log('User logged in:', e.detail);
    });

    // Dispatch event
    document.dispatchEvent(myEvent);
}
