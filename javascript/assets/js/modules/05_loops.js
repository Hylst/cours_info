// ============ SECTION 5: Loops - Interactive Visualizer ============

let vizState = {
    array: [],
    currentIndex: 0,
    loopType: 'for',
    steps: [],
    isRunning: false
};

function parseArray(str) {
    return str.split(',').map(x => x.trim()).filter(x => x);
}

function runLoopViz() {
    const loopType = document.getElementById('loop-type').value;
    const arrayStr = document.getElementById('loop-array').value;
    const array = parseArray(arrayStr);

    vizState = {
        array: array,
        currentIndex: 0,
        loopType: loopType,
        steps: [],
        isRunning: true
    };

    generateSteps();
    displayAllSteps();
}

function generateSteps() {
    const { array, loopType } = vizState;
    const steps = [];

    switch (loopType) {
        case 'for':
            steps.push(`🔧 Initialisation: let i = 0`);
            for (let i = 0; i < array.length; i++) {
                steps.push(`🔍 Condition: i (${i}) < ${array.length} → true`);
                steps.push(`📍 Itération ${i}: array[${i}] = ${array[i]}`);
                steps.push(`➕ Incrémentation: i++ → ${i + 1}`);
            }
            steps.push(`🔍 Condition: i (${array.length}) < ${array.length} → false`);
            steps.push(`✅ Fin de boucle`);
            break;

        case 'forof':
            steps.push(`🔧 Début for...of`);
            array.forEach((val, idx) => {
                steps.push(`📍 Itération ${idx}: val = ${val}`);
            });
            steps.push(`✅ Fin de boucle`);
            break;

        case 'foreach':
            steps.push(`🔧 Appel forEach avec callback`);
            array.forEach((val, idx) => {
                steps.push(`📍 Callback(${val}, ${idx}, array)`);
            });
            steps.push(`✅ Fin de forEach`);
            break;

        case 'while':
            steps.push(`🔧 Initialisation: let i = 0`);
            let i = 0;
            while (i < array.length) {
                steps.push(`🔍 Condition: i (${i}) < ${array.length} → true`);
                steps.push(`📍 Itération: array[${i}] = ${array[i]}`);
                i++;
                steps.push(`➕ Incrémentation: i = ${i}`);
            }
            steps.push(`🔍 Condition: i (${i}) < ${array.length} → false`);
            steps.push(`✅ Fin de boucle`);
            break;
    }

    vizState.steps = steps;
}

function displayAllSteps() {
    const output = document.getElementById('loop-viz-output');
    const { steps, array, loopType } = vizState;

    let html = `
        <div style="margin-bottom:15px; padding:10px; background:rgba(99,102,241,0.2); border-radius:6px">
            <strong>Type:</strong> <code>${loopType}</code> | 
            <strong>Array:</strong> <code>[${array.join(', ')}]</code> | 
            <strong>Longueur:</strong> ${array.length}
        </div>
    `;

    steps.forEach((step, idx) => {
        html += `<div class="viz-step">${idx + 1}. ${step}</div>`;
    });

    output.innerHTML = html;
}

function stepLoopViz() {
    const output = document.getElementById('loop-viz-output');
    const { steps, currentIndex } = vizState;

    if (currentIndex >= steps.length) {
        vizState.currentIndex = 0;
    }

    let html = `<div style="margin-bottom:15px; padding:10px; background:rgba(99,102,241,0.2); border-radius:6px">
        <strong>Step ${vizState.currentIndex + 1}/${steps.length}</strong>
    </div>`;

    steps.forEach((step, idx) => {
        const className = idx === vizState.currentIndex ? 'viz-step viz-current' : 'viz-step';
        const opacity = idx > vizState.currentIndex ? 'opacity:0.3' : '';
        html += `<div class="${className}" style="${opacity}">${idx + 1}. ${step}</div>`;
    });

    output.innerHTML = html;
    vizState.currentIndex++;
}

function resetLoopViz() {
    vizState.currentIndex = 0;
    document.getElementById('loop-viz-output').innerHTML = '<div style="opacity:0.5; text-align:center">Cliquez sur Exécuter pour démarrer</div>';
}
