const confettiScript = document.createElement('script');
confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
document.head.appendChild(confettiScript);

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-feedback');
    const nameInput = document.getElementById('name'); 
    const emailInput = document.getElementById('email'); 
    const feedbackInput = document.getElementById('feedback'); 

    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            if (nameInput) {
                nameInput.value = ''; 
            }
            if (emailInput) {
                emailInput.value = '';  
            }
            if (feedbackInput) {
                feedbackInput.value = '';  
            }

            confetti({
                particleCount: 1500,
                spread: 1000,
                origin: { y: 0.6 }
            });
        });
    }
});
