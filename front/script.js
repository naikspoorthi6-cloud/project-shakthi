document.addEventListener('DOMContentLoaded', () => {
    const emergencyBtn = document.getElementById('emergencyBtn');
    const emergencyBtn = document.getElementById('emergencyBtn');
    

    emergencyBtn.addEventListener('click', () => {
        const phoneNumber = emergencyBtn.getAttribute('data-number');
        
        // Optional: Add a confirmation to prevent accidental dials
        const confirmCall = `Call ${phoneNumber}?`
        
        if (confirmCall) {
            window.location.href = `tel:${phoneNumber}`;
        }
    });


});

