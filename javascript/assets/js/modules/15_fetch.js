// ============ SECTION 15: Fetch ============
async function demoFetch() {
    const output = document.getElementById('demo-fetch-output');
    output.innerHTML = '⏳ Récupération...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) throw new Error('Erreur réseau');

        const data = await response.json();
        output.innerHTML = `
            <div><strong>Nom:</strong> ${data.name}</div>
            <div><strong>Email:</strong> ${data.email}</div>
            <div><strong>Ville:</strong> ${data.address.city}</div>
        `;
    } catch (err) {
        output.innerHTML = `❌ Erreur: ${err.message}`;
    }
}
