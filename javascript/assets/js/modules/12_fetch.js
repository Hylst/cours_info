// ============ SECTION 12: Fetch & API - Interactive Playground ============

const endpoints = {
    users: 'https://jsonplaceholder.typicode.com/users/1',
    posts: 'https://jsonplaceholder.typicode.com/posts/1',
    todos: 'https://jsonplaceholder.typicode.com/todos/1',
    random: 'https://randomuser.me/api/'
};

function selectEndpoint(type) {
    // Visual feedback
    document.querySelectorAll('.endpoint-btn').forEach(btn => btn.classList.remove('active'));
    event.target.closest('.endpoint-btn').classList.add('active');

    // Set URL
    const urlInput = document.getElementById('url-input');
    urlInput.value = endpoints[type];

    // Reset method to GET
    document.getElementById('method-select').value = 'GET';

    // Clear body for GET requests
    document.getElementById('body-input').value = '';
}

async function sendRequest() {
    const method = document.getElementById('method-select').value;
    const url = document.getElementById('url-input').value;
    const bodyText = document.getElementById('body-input').value;
    const output = document.getElementById('api-response');

    if (!url) {
        output.innerHTML = '<div style="color:#f44336">❌ Veuillez entrer une URL</div>';
        return;
    }

    // Show loading
    output.innerHTML = '<div style="text-align:center; padding:40px"><div style="color:var(--accent); font-size:1.2rem">⏳ Chargement...</div></div>';

    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // Add body for POST/PUT
        if ((method === 'POST' || method === 'PUT') && bodyText) {
            try {
                options.body = bodyText;
                // Validate JSON
                JSON.parse(bodyText);
            } catch (e) {
                throw new Error('Body JSON invalide');
            }
        }

        const startTime = performance.now();
        const res = await fetch(url, options);
        const endTime = performance.now();
        const duration = (endTime - startTime).toFixed(0);

        // Parse response
        const contentType = res.headers.get('content-type');
        let data;

        if (contentType && contentType.includes('application/json')) {
            data = await res.json();
        } else {
            data = await res.text();
        }

        // Display response
        displayResponse(res, data, duration);

    } catch (error) {
        output.innerHTML = `
            <div style="color:#f44336; padding:20px">
                <strong>❌ Erreur :</strong><br>
                ${error.message}
            </div>
        `;
    }
}

function displayResponse(res, data, duration) {
    const output = document.getElementById('api-response');

    // Status color
    let statusColor = '#4caf50';
    if (res.status >= 400) statusColor = '#f44336';
    else if (res.status >= 300) statusColor = '#ff9800';

    let html = `
        <div class="response-header">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px">
                <div>
                    <strong style="color:${statusColor}; font-size:1.1rem">${res.status} ${res.statusText}</strong>
                </div>
                <div style="opacity:0.8; font-size:0.85rem">⏱️ ${duration}ms</div>
            </div>
            <div style="font-size:0.85rem; opacity:0.8">
                <strong>URL:</strong> ${res.url}
            </div>
        </div>

        <div style="margin:15px 0">
            <strong style="color:var(--accent)">📊 Headers :</strong>
            <div style="background:rgba(0,0,0,0.2); padding:10px; border-radius:6px; margin-top:8px; font-size:0.85rem">
    `;

    // Show some important headers
    const importantHeaders = ['content-type', 'content-length', 'date', 'server'];
    importantHeaders.forEach(header => {
        const value = res.headers.get(header);
        if (value) {
            html += `<div><span style="color:var(--muted)">${header}:</span> ${value}</div>`;
        }
    });

    html += `
            </div>
        </div>

        <div>
            <strong style="color:var(--accent)">📦 Body :</strong>
            <div class="response-body">
                <pre style="margin:0; white-space:pre-wrap; word-wrap:break-word">${JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    `;

    output.innerHTML = html;
}

function clearResponse() {
    const output = document.getElementById('api-response');
    output.innerHTML = '<div style="opacity:0.5; text-align:center">Sélectionnez un endpoint et cliquez sur Envoyer</div>';

    // Reset form
    document.getElementById('method-select').value = 'GET';
    document.getElementById('url-input').value = '';
    document.getElementById('body-input').value = '';

    // Remove active state
    document.querySelectorAll('.endpoint-btn').forEach(btn => btn.classList.remove('active'));
}

// ========== DEMO FUNCTIONS FOR CONSOLE ==========

async function demoFetchBasic() {
    console.log("=== Basic Fetch Demo ===");

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await res.json();
        console.log("User:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function demoFetchPost() {
    console.log("=== POST Request Demo ===");

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Test Post',
                body: 'This is a test',
                userId: 1
            })
        });

        const data = await res.json();
        console.log("Created:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function demoFetchError() {
    console.log("=== Error Handling Demo ===");

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/999999');

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Data:", data);
    } catch (error) {
        console.error("Caught error:", error.message);
    }
}

async function demoAbortController() {
    console.log("=== AbortController Demo ===");

    const controller = new AbortController();

    // Abort after 100ms
    setTimeout(() => {
        controller.abort();
        console.log("Request aborted!");
    }, 100);

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
            signal: controller.signal
        });
        const data = await res.json();
        console.log("Data:", data);
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log("Request was cancelled");
        } else {
            console.error("Error:", error);
        }
    }
}
