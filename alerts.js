document.addEventListener('DOMContentLoaded', function() {
    // Handle alert filtering
    const alertFilter = document.querySelector('.alert-filter');
    alertFilter.addEventListener('change', function(e) {
        filterAlerts(e.target.value);
    });

    // Handle alert actions
    document.querySelectorAll('.alert-actions .action-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const alertItem = e.target.closest('.alert-item');
            if (e.target.textContent === 'Acknowledge') {
                acknowledgeAlert(alertItem);
            } else if (e.target.textContent === 'Details') {
                showAlertDetails(alertItem);
            }
        });
    });

    // Start real-time alerts update
    startRealTimeUpdates();
});

function filterAlerts(type) {
    const alerts = document.querySelectorAll('.alert-item');
    alerts.forEach(alert => {
        if (type === 'all' || alert.classList.contains(type)) {
            alert.style.display = 'flex';
        } else {
            alert.style.display = 'none';
        }
    });
}

function acknowledgeAlert(alertItem) {
    // Implementation for acknowledging alert
    console.log('Acknowledging alert:', alertItem);
    alertItem.style.opacity = '0.5';
}

function showAlertDetails(alertItem) {
    // Implementation for showing alert details
    const alertTitle = alertItem.querySelector('h3').textContent;
    console.log('Showing details for:', alertTitle);
}

function startRealTimeUpdates() {
    // Implementation for real-time updates
    setInterval(() => {
        checkNewAlerts();
    }, 30000); // Check every 30 seconds
}

function checkNewAlerts() {
    // Implementation for checking new alerts
    console.log('Checking for new alerts...');
} 