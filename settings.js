document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const settingsForm = document.querySelector('.settings-form');
    settingsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        saveProfileChanges();
    });

    // Handle notification toggles
    document.querySelectorAll('.switch input').forEach(toggle => {
        toggle.addEventListener('change', function(e) {
            updateNotificationPreference(e.target);
        });
    });

    // Handle security buttons
    document.querySelectorAll('.security-options .action-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (e.target.textContent === 'Change Password') {
                showChangePasswordModal();
            } else if (e.target.textContent === 'Two-Factor Authentication') {
                configureTwoFactor();
            }
        });
    });
});

function saveProfileChanges() {
    const formData = new FormData(document.querySelector('.settings-form'));
    // Implementation for saving profile changes
    console.log('Saving profile changes:', Object.fromEntries(formData));
    showSaveConfirmation();
}

function updateNotificationPreference(toggle) {
    const type = toggle.closest('.option-item').querySelector('span').textContent;
    const enabled = toggle.checked;
    // Implementation for updating notification preferences
    console.log(`Updating ${type} to ${enabled}`);
}

function showChangePasswordModal() {
    // Implementation for password change modal
    console.log('Showing password change modal');
}

function configureTwoFactor() {
    // Implementation for 2FA setup
    console.log('Configuring two-factor authentication');
}

function showSaveConfirmation() {
    // Implementation for showing save confirmation
    const message = document.createElement('div');
    message.className = 'save-confirmation';
    message.textContent = 'Settings saved successfully!';
    document.querySelector('.settings-container').appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
} 