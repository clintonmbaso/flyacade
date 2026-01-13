// Add at the beginning of main.js
function initApp() {
    // Check if DataLoader is ready
    if (typeof DataLoader === 'undefined') {
        console.log("DataLoader not found, retrying in 500ms...");
        setTimeout(initApp, 500);
        return;
    }
    
    // Initialize filters
    Filters.init();
    
    // Print buttons
    document.getElementById('printCurrentBtn').addEventListener('click', printCurrentWorksheet);
    document.getElementById('printAllBtn').addEventListener('click', printAllWorksheets);
    
    console.log("App initialized successfully");
    console.log("Worksheets loaded:", DataLoader.allWorksheets.length);
}

// Update the initialization to wait for scripts to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize app after a short delay to ensure scripts are loaded
    setTimeout(initApp, 100);
});

// Application state
const appState = {
    currentWeek: 1,
    currentDay: 'monday',
    currentWorksheets: []
};

// Day name mapping
const dayNames = {
    monday: "Monday",
    tuesday: "Tuesday", 
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday"
};

// Function to display filtered worksheets
window.displayFilteredWorksheets = function(filteredWorksheets) {
    appState.currentWorksheets = filteredWorksheets;
    const container = document.getElementById('worksheets-container');
    
    if (filteredWorksheets.length === 0) {
        // Show no results message
        document.getElementById('noResults').style.display = 'block';
        container.innerHTML = '';
        document.getElementById('weekSelector').style.display = 'none';
        document.querySelector('.controls').style.display = 'none';
        return;
    }
    
    // Hide no results message
    document.getElementById('noResults').style.display = 'none';
    document.getElementById('weekSelector').style.display = 'flex';
    document.querySelector('.controls').style.display = 'flex';
    
    // Clear container
    container.innerHTML = '';
    
    // Display all filtered worksheets
    filteredWorksheets.forEach((worksheetData, index) => {
        const metadata = worksheetData.metadata;
        const worksheetId = `grade${metadata.grade}-${metadata.subject.toLowerCase()}-week${metadata.week}`;
        
        // Create worksheet header
        const worksheetHeader = `
            <div class="worksheet-header-card" data-worksheet-id="${worksheetId}">
                <h3>${metadata.subject} - Grade ${metadata.grade} - Week ${metadata.week}</h3>
                <p>${metadata.title}</p>
                <p class="worksheet-description">${metadata.description}</p>
            </div>
        `;
        
        // Add days for this worksheet
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
        days.forEach(day => {
            if (worksheetData.days[day]) {
                container.innerHTML += createWorksheet(day, worksheetData.days, metadata);
            }
        });
    });
    
    // Show first worksheet by default
    if (filteredWorksheets.length > 0) {
        showWorksheet('monday');
    }
    
    // Update day selector
    updateDaySelector();
    
    // Auto-fill dates
    autoFillDates();
};

// Function to create a worksheet for a specific day
function createWorksheet(day, weekData, metadata) {
    const data = weekData[day];
    if (!data) return '';
    
    const dayName = dayNames[day];
    const worksheetId = `grade${metadata.grade}-${metadata.subject.toLowerCase()}-week${metadata.week}-${day}`;
    
    return `
        <div class="worksheet-container" id="${worksheetId}">
            <div class="worksheet-card">
                <div class="worksheet-header">
                    <div class="day-indicator">${dayName}</div>
                    <h3>${metadata.subject} - ${data.topic}</h3>
                    <p class="subtitle">Grade ${metadata.grade} - Week ${metadata.week} - ${data.subtopic}</p>
                </div>
                
                <div class="worksheet-content">
                    <!-- Student Info -->
                    <div class="info-section">
                        <div class="info-box">
                            <h4><i class="fas fa-user"></i> Student Name</h4>
                            <div class="answer-space" style="min-width: 200px;"></div>
                        </div>
                        <div class="info-box">
                            <h4><i class="fas fa-calendar"></i> Date</h4>
                            <div class="answer-space" style="min-width: 150px;"></div>
                        </div>
                        <div class="info-box">
                            <h4><i class="fas fa-graduation-cap"></i> Class</h4>
                            <p>Grade ${metadata.grade} ${metadata.subject}</p>
                        </div>
                        <div class="info-box">
                            <h4><i class="fas fa-calendar-week"></i> Week</h4>
                            <p>Week ${metadata.week}</p>
                        </div>
                    </div>
                    
                    <!-- Lesson Content -->
                    <div class="section">
                        <div class="section-title">
                            <i class="fas fa-chalkboard-teacher"></i> Today's Lesson
                        </div>
                        <div class="content-box">
                            ${data.lessonContent}
                        </div>
                    </div>
                    
                    <!-- Examples -->
                    <div class="section">
                        <div class="section-title">
                            <i class="fas fa-eye"></i> Examples
                        </div>
                        ${data.examples || ''}
                        ${day === 'friday' ? (data.revisionContent || '') : ''}
                    </div>
                    
                    <!-- Task -->
                    <div class="section">
                        <div class="section-title">
                            <i class="fas fa-tasks"></i> Practice Time
                        </div>
                        <div class="task-box">
                            <div class="task-instructions">
                                <i class="fas fa-bullhorn"></i> ${data.taskInstructions}
                            </div>
                            ${day === 'friday' ? (data.revisionTask || data.taskContent) : data.taskContent}
                        </div>
                    </div>
                    
                    <!-- Homework -->
                    ${data.homework ? `
                    <div class="homework-section">
                        <div class="homework-title">
                            <i class="fas fa-home"></i> Homework
                            ${data.homeworkDue ? `<span class="due-date">Due: ${data.homeworkDue}</span>` : ''}
                        </div>
                        <p>${data.homework}</p>
                    </div>
                    ` : ''}
                    
                    <!-- Footer -->
                    <div class="worksheet-footer">
                        <div class="signature-box">
                            <p><strong>Teacher's Comments:</strong></p>
                            <div class="drawing-area" style="height: 60px;"></div>
                            <div class="signature-line"></div>
                            <p>Teacher's Signature</p>
                        </div>
                        <div class="signature-box">
                            <p><strong>Parent's Comments:</strong></p>
                            <div class="drawing-area" style="height: 60px;"></div>
                            <div class="signature-line"></div>
                            <p>Parent's Signature</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to update day selector
function updateDaySelector() {
    const daySelector = document.getElementById('daySelector');
    daySelector.innerHTML = '';
    
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    
    days.forEach(day => {
        // Check if any worksheet has this day
        const hasDay = appState.currentWorksheets.some(worksheet => worksheet.days[day]);
        
        if (hasDay) {
            const button = document.createElement('button');
            button.className = `day-btn ${day === appState.currentDay ? 'active' : ''}`;
            button.setAttribute('data-day', day);
            button.innerHTML = `<i class="fas fa-calendar-day"></i> ${dayNames[day]}`;
            daySelector.appendChild(button);
        }
    });
    
    // Add event listeners to day buttons
    daySelector.querySelectorAll('.day-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const day = this.getAttribute('data-day');
            
            // Update active button
            daySelector.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected worksheet
            showWorksheet(day);
        });
    });
}

// Function to show a specific worksheet
function showWorksheet(day) {
    // Hide all worksheets
    document.querySelectorAll('.worksheet-container').forEach(w => {
        w.classList.remove('active');
    });
    
    // Show all worksheets for the selected day
    const dayWorksheets = document.querySelectorAll(`.worksheet-container[id$="-${day}"]`);
    
    if (dayWorksheets.length > 0) {
        dayWorksheets.forEach(worksheet => {
            worksheet.classList.add('active');
        });
        
        appState.currentDay = day;
        
        // Scroll to first worksheet of the day
        dayWorksheets[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Function to auto-fill dates
function autoFillDates() {
    const today = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', dateOptions);
    
    document.querySelectorAll('.info-box:nth-child(2) .answer-space').forEach(el => {
        el.textContent = dateString;
    });
}

// Function to initialize the application
function initApp() {
    // Initialize filters
    Filters.init();
    
    // Print buttons
    document.getElementById('printCurrentBtn').addEventListener('click', printCurrentWorksheet);
    document.getElementById('printAllBtn').addEventListener('click', printAllWorksheets);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initApp); 