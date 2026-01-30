// ============ SECTION 18: Cheatsheets ============

// Tab switching functionality
function switchTab(tabName) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab content
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    // Add active class to clicked tab
    event.target.classList.add('active');

    // Update URL hash without scrolling
    history.replaceState(null, null, '#' + tabName);
}

// Search functionality
function searchCheatsheet() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const activeTab = document.querySelector('.tab-content.active');

    if (!activeTab) return;

    const tables = activeTab.querySelectorAll('table');

    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        let visibleCount = 0;

        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(filter)) {
                row.style.display = '';
                visibleCount++;
            } else {
                row.style.display = 'none';
            }
        });

        // Show/hide entire table if no results
        const tableContainer = table.closest('.ref-table-container');
        if (tableContainer) {
            tableContainer.style.display = visibleCount > 0 ? '' : 'none';
        }
    });

    // Update result count
    updateSearchResults(filter);
}

function updateSearchResults(filter) {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;

    const visibleRows = activeTab.querySelectorAll('tbody tr:not([style*="display: none"])');
    const resultDiv = document.getElementById('search-results');

    if (resultDiv) {
        if (filter) {
            resultDiv.textContent = `${visibleRows.length} résultat(s) trouvé(s)`;
            resultDiv.style.display = 'block';
        } else {
            resultDiv.style.display = 'none';
        }
    }
}

// Copy code to clipboard
function copyCode(button) {
    const codeBlock = button.nextElementSibling;
    const code = codeBlock.textContent;

    navigator.clipboard.writeText(code).then(() => {
        button.textContent = '✓ Copié';
        button.style.background = 'var(--green)';

        setTimeout(() => {
            button.textContent = '📋 Copier';
            button.style.background = '';
        }, 2000);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check for hash in URL and activate corresponding tab
    const hash = window.location.hash.substring(1);
    if (hash) {
        const tabButton = document.querySelector(`[onclick*="${hash}"]`);
        if (tabButton) {
            tabButton.click();
        }
    } else {
        // Activate first tab by default
        const firstTab = document.querySelector('.tab-btn');
        if (firstTab) firstTab.click();
    }
});
