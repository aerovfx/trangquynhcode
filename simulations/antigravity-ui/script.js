// Simulate AI Flow progression
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.flow-step');
    let currentStep = 2; // Start from "Working"

    // Add a new step after 5 seconds
    setTimeout(() => {
        const flow = document.querySelector('.ai-flow');
        const newStep = document.createElement('div');
        newStep.className = 'flow-step active';
        newStep.innerHTML = `
            <div class="step-indicator pulse"></div>
            <div class="step-content">
                <div class="step-header">Generated</div>
                <div class="step-details">Trang Quynh code UI simulation files created in <code>simulations/antigravity-ui</code></div>
            </div>
        `;

        // Deactivate previous active step
        const prevActive = document.querySelector('.flow-step.active');
        if (prevActive) {
            prevActive.classList.remove('active');
            const indicator = prevActive.querySelector('.step-indicator');
            indicator.classList.remove('pulse');
            indicator.classList.add('success');
        }

        flow.appendChild(newStep);
        newStep.scrollIntoView({ behavior: 'smooth' });
    }, 5000);

    // Simple tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
});
