// Print utility functions

function printCurrentWorksheet() {
    const activeWorksheets = document.querySelectorAll('.worksheet-container.active');
    if (activeWorksheets.length > 0) {
        // Hide all worksheets first
        document.querySelectorAll('.worksheet-container').forEach(w => {
            w.style.display = 'none';
        });
        
        // Show only active worksheets
        activeWorksheets.forEach(w => {
            w.style.display = 'block';
        });
        
        window.print();
        
        // Restore display
        document.querySelectorAll('.worksheet-container').forEach(w => {
            w.style.display = '';
        });
    }
}

function printAllWorksheets() {
    // Show all worksheets for printing
    document.querySelectorAll('.worksheet-container').forEach(w => {
        w.style.display = 'block';
    });
    window.print();
    // Return to normal view
    const activeDay = document.querySelector('.day-btn.active').getAttribute('data-day');
    showWorksheet(activeDay);
}