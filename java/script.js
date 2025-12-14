document.addEventListener('DOMContentLoaded', () => {
    // Copy Code Feature
    const codeBlocks = document.querySelectorAll('.code');

    codeBlocks.forEach(block => {
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '📋';
        copyBtn.className = 'copy-btn';
        copyBtn.style.position = 'absolute';
        copyBtn.style.top = '10px';
        copyBtn.style.right = '10px';
        copyBtn.style.background = 'transparent';
        copyBtn.style.border = 'none';
        copyBtn.style.cursor = 'pointer';
        copyBtn.style.fontSize = '1.2rem';
        copyBtn.style.opacity = '0.5';
        copyBtn.style.transition = 'opacity 0.2s';

        copyBtn.addEventListener('mouseenter', () => copyBtn.style.opacity = '1');
        copyBtn.addEventListener('mouseleave', () => copyBtn.style.opacity = '0.5');

        copyBtn.addEventListener('click', () => {
            const code = block.querySelector('pre').innerText;
            navigator.clipboard.writeText(code).then(() => {
                copyBtn.innerHTML = '✅';
                setTimeout(() => copyBtn.innerHTML = '📋', 2000);
            });
        });

        block.appendChild(copyBtn);
    });
});
