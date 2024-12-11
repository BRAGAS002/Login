document.addEventListener('DOMContentLoaded', function() {
    // Handle report period changes
    const reportPeriod = document.querySelector('.report-period');
    reportPeriod.addEventListener('change', function(e) {
        updateReports(e.target.value);
    });

    // Handle generate report button
    const generateBtn = document.querySelector('.generate-report-btn');
    generateBtn.addEventListener('click', function() {
        generateNewReport();
    });

    // Handle download buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (e.target.textContent === 'Download PDF') {
                downloadReport(e.target.closest('.report-card'));
            } else if (e.target.textContent === 'Share') {
                shareReport(e.target.closest('.report-card'));
            }
        });
    });
});

function updateReports(period) {
    // Implementation for fetching and updating reports based on period
    console.log(`Updating reports for period: ${period}`);
}

function generateNewReport() {
    // Implementation for generating new report
    console.log('Generating new report...');
}

function downloadReport(reportCard) {
    // Implementation for downloading report
    const reportTitle = reportCard.querySelector('h3').textContent;
    console.log(`Downloading report: ${reportTitle}`);
}

function shareReport(reportCard) {
    // Implementation for sharing report
    const reportTitle = reportCard.querySelector('h3').textContent;
    console.log(`Sharing report: ${reportTitle}`);
} 