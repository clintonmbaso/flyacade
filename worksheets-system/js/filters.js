// Filters Module - Updated for Lazy Loading
const Filters = {
    currentFilters: {
        grade: 'all',
        subject: 'all',
        week: 'all',
        day: 'all',
        search: ''
    },
    
    availableOptions: {
        grades: new Set(),
        subjects: new Set(),
        weeks: new Set()
    },
    
    allWorksheets: [],
    filteredWorksheets: [],
    
    // Initialize filters
    init() {
        // Populate dropdowns from manifest first
        this.populateFilterDropdownsFromManifest();
        this.setupEventListeners();
        
        // Don't load anything initially - wait for user action
        // Just show empty state
        this.showEmptyState();
    },
    
    // Show empty/initial state
    showEmptyState() {
        document.getElementById('resultsCount').textContent = 'Select filters and click "Apply Filters"';
        document.getElementById('worksheets-container').innerHTML = `
            <div class="empty-state">
                <i class="fas fa-filter fa-3x"></i>
                <h3>No worksheets loaded yet</h3>
                <p>Use the filters above to select worksheets</p>
                <p class="hint">Tip: Select filters and click <strong>"Apply Filters"</strong></p>
            </div>
        `;
    },
    
    // Populate filter dropdowns from manifest
    populateFilterDropdownsFromManifest() {
        if (!window.WorksheetManifest) {
            console.error("WorksheetManifest not found");
            return;
        }
        
        const options = window.WorksheetManifest.getAllOptions();
        
        // Clear existing options
        const gradeFilter = document.getElementById('gradeFilter');
        const subjectFilter = document.getElementById('subjectFilter');
        const weekFilter = document.getElementById('weekFilter');
        
        // Clear all options except "all"
        while (gradeFilter.options.length > 1) gradeFilter.remove(1);
        while (subjectFilter.options.length > 1) subjectFilter.remove(1);
        while (weekFilter.options.length > 1) weekFilter.remove(1);
        
        // Add grade options
        Array.from(options.grades)
            .sort((a, b) => {
                // Sort special grades first, then numeric
                if (a === 'baby') return -1;
                if (b === 'baby') return 1;
                if (a === 'middle') return -1;
                if (b === 'middle') return 1;
                if (a === 'reception') return -1;
                if (b === 'reception') return 1;
                return a - b;
            })
            .forEach(grade => {
                const option = document.createElement('option');
                option.value = grade;
                option.textContent = this.formatGradeName(grade);
                gradeFilter.appendChild(option);
            });
        
        // Add subject options (all initially)
        Array.from(options.subjects)
            .sort()
            .forEach(subject => {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = subject;
                subjectFilter.appendChild(option);
            });
        
        // Add week options
        Array.from(options.weeks)
            .sort((a, b) => a - b)
            .forEach(week => {
                const option = document.createElement('option');
                option.value = week;
                option.textContent = `Week ${week}`;
                weekFilter.appendChild(option);
            });
    },
    
    // Update subject dropdown based on selected grade
    updateSubjectDropdown() {
        if (!window.WorksheetManifest) return;
        
        const selectedGrade = document.getElementById('gradeFilter').value;
        const subjectFilter = document.getElementById('subjectFilter');
        const currentSubject = subjectFilter.value;
        
        // Clear existing options except "all"
        while (subjectFilter.options.length > 1) subjectFilter.remove(1);
        
        if (selectedGrade === 'all') {
            // Show all subjects from manifest
            const allOptions = window.WorksheetManifest.getAllOptions();
            Array.from(allOptions.subjects)
                .sort()
                .forEach(subject => {
                    const option = document.createElement('option');
                    option.value = subject;
                    option.textContent = subject;
                    subjectFilter.appendChild(option);
                });
        } else {
            // Get subjects for selected grade from manifest
            const availableSubjects = this.getSubjectsForGrade(selectedGrade);
            
            if (availableSubjects.size === 0) {
                // No subjects available for this grade
                const option = document.createElement('option');
                option.value = 'none';
                option.textContent = 'No subjects available';
                option.disabled = true;
                subjectFilter.appendChild(option);
                subjectFilter.value = 'none';
            } else {
                // Add available subjects
                Array.from(availableSubjects)
                    .sort()
                    .forEach(subject => {
                        const option = document.createElement('option');
                        option.value = subject;
                        option.textContent = subject;
                        subjectFilter.appendChild(option);
                    });
            }
        }
        
        // Restore previous selection if it's still valid
        if (subjectFilter.querySelector(`option[value="${currentSubject}"]`)) {
            subjectFilter.value = currentSubject;
        } else {
            subjectFilter.value = 'all';
        }
    },
    
    // Update week dropdown based on selected grade and subject
    updateWeekDropdown() {
        if (!window.WorksheetManifest) return;
        
        const selectedGrade = document.getElementById('gradeFilter').value;
        const selectedSubject = document.getElementById('subjectFilter').value;
        const weekFilter = document.getElementById('weekFilter');
        const currentWeek = weekFilter.value;
        
        // Clear existing options except "all"
        while (weekFilter.options.length > 1) weekFilter.remove(1);
        
        if (selectedGrade === 'all' || selectedSubject === 'all') {
            // Show all weeks from manifest
            const allOptions = window.WorksheetManifest.getAllOptions();
            Array.from(allOptions.weeks)
                .sort((a, b) => a - b)
                .forEach(week => {
                    const option = document.createElement('option');
                    option.value = week;
                    option.textContent = `Week ${week}`;
                    weekFilter.appendChild(option);
                });
        } else {
            // Get weeks for selected grade and subject
            const availableWeeks = this.getWeeksForGradeAndSubject(selectedGrade, selectedSubject);
            
            if (availableWeeks.size === 0) {
                // No weeks available
                const option = document.createElement('option');
                option.value = 'none';
                option.textContent = 'No weeks available';
                option.disabled = true;
                weekFilter.appendChild(option);
                weekFilter.value = 'none';
            } else {
                // Add available weeks
                Array.from(availableWeeks)
                    .sort((a, b) => a - b)
                    .forEach(week => {
                        const option = document.createElement('option');
                        option.value = week;
                        option.textContent = `Week ${week}`;
                        weekFilter.appendChild(option);
                    });
            }
        }
        
        // Restore previous selection if it's still valid
        if (weekFilter.querySelector(`option[value="${currentWeek}"]`)) {
            weekFilter.value = currentWeek;
        } else {
            weekFilter.value = 'all';
        }
    },
    
    // Get subjects for a specific grade from manifest
    getSubjectsForGrade(grade) {
        const subjects = new Set();
        
        if (!window.WorksheetManifest) return subjects;
        
        window.WorksheetManifest.files.forEach(filePath => {
            const fileInfo = window.WorksheetManifest.parseFileInfo(filePath);
            if (fileInfo.grade === grade && fileInfo.subject) {
                subjects.add(fileInfo.subject);
            }
        });
        
        return subjects;
    },
    
    // Get weeks for a specific grade and subject from manifest
    getWeeksForGradeAndSubject(grade, subject) {
        const weeks = new Set();
        
        if (!window.WorksheetManifest) return weeks;
        
        window.WorksheetManifest.files.forEach(filePath => {
            const fileInfo = window.WorksheetManifest.parseFileInfo(filePath);
            if (fileInfo.grade === grade && fileInfo.subject === subject && fileInfo.week) {
                weeks.add(fileInfo.week);
            }
        });
        
        return weeks;
    },
    
    // Format grade name for display
    formatGradeName: function(grade) {
        switch(grade) {
            case 'baby': return 'Baby Class';
            case 'middle': return 'Middle Class';
            case 'reception': return 'Reception';
            default: return `Grade ${grade}`;
        }
    },
    
    // Load worksheets based on filters
    loadWorksheets(filters, callback) {
        if (window.DataLoader && window.DataLoader.loadWorksheetsByFilters) {
            // Show loading indicator
            DataLoader.showLoadingIndicator();
            
            // Update current filters
            this.currentFilters = { ...this.currentFilters, ...filters };
            
            // Update UI filters
            this.updateUIFilters();
            
            // Load worksheets
            DataLoader.loadWorksheetsByFilters(this.currentFilters, () => {
                // Worksheets loaded, now process them
                this.collectAvailableOptions();
                this.applyFilters();
                
                // Call callback if provided
                if (callback) callback();
            });
        } else {
            console.error("DataLoader not available");
        }
    },
    
    // Update UI filters from current filters
    updateUIFilters() {
        document.getElementById('gradeFilter').value = this.currentFilters.grade;
        document.getElementById('subjectFilter').value = this.currentFilters.subject;
        document.getElementById('weekFilter').value = this.currentFilters.week;
        document.getElementById('dayFilter').value = this.currentFilters.day;
        document.getElementById('searchInput').value = this.currentFilters.search;
    },
    
    // Collect available options from loaded data
    collectAvailableOptions() {
        if (typeof window.DataLoader !== 'undefined') {
            this.allWorksheets = window.DataLoader.getAllWorksheets();
            const options = window.DataLoader.getAvailableOptions();
            
            this.availableOptions.grades = options.grades;
            this.availableOptions.subjects = options.subjects;
            this.availableOptions.weeks = options.weeks;
        }
    },
    
    // Apply filters and update results
    applyFilters() {
        // First check if we need to load more worksheets
        const needsLoading = this.checkIfNeedsLoading();
        
        if (needsLoading) {
            console.log("Need to load worksheets for filters:", this.currentFilters);
            this.loadWorksheets(this.currentFilters);
            return;
        }
        
        // Filter existing worksheets
        this.filteredWorksheets = this.allWorksheets.filter(worksheet => {
            const metadata = worksheet.metadata;
            
            // Apply grade filter
            if (this.currentFilters.grade !== 'all' && metadata.grade != this.currentFilters.grade) {
                return false;
            }
            
            // Apply subject filter
            if (this.currentFilters.subject !== 'all' && metadata.subject !== this.currentFilters.subject) {
                return false;
            }
            
            // Apply week filter
            if (this.currentFilters.week !== 'all' && metadata.week != this.currentFilters.week) {
                return false;
            }
            
            // Apply search filter
            if (this.currentFilters.search.trim() !== '') {
                const searchTerm = this.currentFilters.search.toLowerCase();
                const searchableText = [
                    metadata.title,
                    metadata.description,
                    metadata.subject,
                    `grade ${metadata.grade}`,
                    `week ${metadata.week}`
                ].join(' ').toLowerCase();
                
                // Also search within day content
                let foundInContent = false;
                for (const day in worksheet.days) {
                    if (day !== 'metadata') {
                        const dayData = worksheet.days[day];
                        const dayContent = [
                            dayData.topic,
                            dayData.subtopic,
                            dayData.lessonContent
                        ].join(' ').toLowerCase();
                        
                        if (dayContent.includes(searchTerm)) {
                            foundInContent = true;
                            break;
                        }
                    }
                }
                
                if (!searchableText.includes(searchTerm) && !foundInContent) {
                    return false;
                }
            }
            
            return true;
        });
        
        console.log(`Filtered to ${this.filteredWorksheets.length} worksheets`);
        
        // Update UI
        this.updateResultsCount();
        this.updateActiveFiltersDisplay();
        this.updateWeekSelector();
        
        // Trigger main app to display filtered worksheets
        if (typeof window.displayFilteredWorksheets === 'function') {
            window.displayFilteredWorksheets(this.filteredWorksheets);
        }
    },
    
    // Check if we need to load more worksheets based on current filters
    checkIfNeedsLoading() {
        // If no filters selected (all), don't load anything
        if (this.currentFilters.grade === 'all' && 
            this.currentFilters.subject === 'all' && 
            this.currentFilters.week === 'all') {
            return false;
        }
        
        // Check if we have any worksheets for the current filter combination
        const hasMatchingWorksheet = this.allWorksheets.some(worksheet => {
            const metadata = worksheet.metadata;
            
            if (this.currentFilters.grade !== 'all' && metadata.grade != this.currentFilters.grade) {
                return false;
            }
            
            if (this.currentFilters.subject !== 'all' && metadata.subject !== this.currentFilters.subject) {
                return false;
            }
            
            if (this.currentFilters.week !== 'all' && metadata.week != this.currentFilters.week) {
                return false;
            }
            
            return true;
        });
        
        return !hasMatchingWorksheet;
    },
    
    // Update results count display
    updateResultsCount() {
        const resultsCount = document.getElementById('resultsCount');
        const count = this.filteredWorksheets.length;
        
        if (count === 0 && this.allWorksheets.length === 0) {
            resultsCount.textContent = 'Select filters and click "Apply Filters"';
        } else if (count === 0) {
            resultsCount.textContent = 'No matching worksheets found';
        } else {
            resultsCount.textContent = `${count} worksheet${count !== 1 ? 's' : ''} found`;
        }
    },
    
    // Update active filters display
    updateActiveFiltersDisplay() {
        const activeFiltersContainer = document.getElementById('activeFilters');
        activeFiltersContainer.innerHTML = '';
        
        // Add filter chips for active filters
        if (this.currentFilters.grade !== 'all') {
            this.addFilterChip('grade', this.formatGradeName(this.currentFilters.grade));
        }
        
        if (this.currentFilters.subject !== 'all') {
            this.addFilterChip('subject', this.currentFilters.subject);
        }
        
        if (this.currentFilters.week !== 'all') {
            this.addFilterChip('week', `Week ${this.currentFilters.week}`);
        }
        
        if (this.currentFilters.day !== 'all') {
            const dayName = this.currentFilters.day.charAt(0).toUpperCase() + this.currentFilters.day.slice(1);
            this.addFilterChip('day', dayName);
        }
        
        if (this.currentFilters.search.trim() !== '') {
            this.addFilterChip('search', `"${this.currentFilters.search}"`);
        }
    },
    
    // Add a filter chip to display
    addFilterChip(type, value) {
        const activeFiltersContainer = document.getElementById('activeFilters');
        const chip = document.createElement('div');
        chip.className = 'filter-chip';
        chip.innerHTML = `
            ${value}
            <button class="remove-filter" data-filter-type="${type}">
                <i class="fas fa-times"></i>
            </button>
        `;
        activeFiltersContainer.appendChild(chip);
    },
    
    // Update week selector based on filtered results
    updateWeekSelector() {
        const weekSelector = document.getElementById('weekSelector');
        weekSelector.innerHTML = '';
        
        // Get unique weeks from filtered worksheets
        const availableWeeks = new Set();
        this.filteredWorksheets.forEach(worksheet => {
            availableWeeks.add(worksheet.metadata.week);
        });
        
        // Sort weeks
        const sortedWeeks = Array.from(availableWeeks).sort((a, b) => a - b);
        
        // Create week buttons
        sortedWeeks.forEach(week => {
            const button = document.createElement('button');
            button.className = `week-btn ${week == this.currentFilters.week ? 'active' : ''}`;
            button.setAttribute('data-week', week);
            button.innerHTML = `<i class="fas fa-calendar-week"></i> Week ${week}`;
            weekSelector.appendChild(button);
        });
        
        // Add event listeners to new week buttons
        weekSelector.querySelectorAll('.week-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const week = e.currentTarget.getAttribute('data-week');
                this.currentFilters.week = week;
                this.updateFilterSelect('weekFilter', week);
                this.applyFilters();
            });
        });
    },
    
    // Update filter select element value
    updateFilterSelect(selectId, value) {
        const select = document.getElementById(selectId);
        if (select) {
            select.value = value;
        }
    },
    
    // Setup event listeners for filters
    setupEventListeners() {
        // Apply filters button - MAIN TRIGGER
        document.getElementById('applyFilters').addEventListener('click', () => {
            this.updateCurrentFiltersFromUI();
            this.applyFilters();
        });
        
        // Reset filters button
        document.getElementById('resetFilters').addEventListener('click', () => {
            this.resetFilters();
        });
        
        // Reset all filters button
        document.getElementById('resetAllFilters').addEventListener('click', () => {
            this.resetFilters();
        });
        
        // Toggle filters button
        document.getElementById('toggleFilters').addEventListener('click', () => {
            const filterControls = document.querySelector('.filter-controls');
            filterControls.style.display = filterControls.style.display === 'none' ? 'grid' : 'none';
        });
        
        // Clear search button
        document.getElementById('clearSearch').addEventListener('click', () => {
            document.getElementById('searchInput').value = '';
            // Just clear the UI, don't apply filters automatically
        });
        
        // Search input (ONLY show search suggestions, don't apply)
        document.getElementById('searchInput').addEventListener('keyup', (e) => {
            // Just track changes, don't apply automatically
            if (e.key === 'Enter') {
                // Allow Enter to trigger apply if user prefers
                document.getElementById('applyFilters').click();
            }
        });
        
        // Grade filter change - ONLY update dropdowns, don't apply filters
        document.getElementById('gradeFilter').addEventListener('change', () => {
            // Update dependent dropdowns
            this.updateSubjectDropdown();
            this.updateWeekDropdown();
            // DON'T call applyFilters() here
        });
        
        // Subject filter change - ONLY update dropdowns, don't apply filters
        document.getElementById('subjectFilter').addEventListener('change', () => {
            this.updateWeekDropdown();
            // DON'T call applyFilters() here
        });
        
        // Week filter change - Just track, don't apply
        document.getElementById('weekFilter').addEventListener('change', () => {
            // Just track the change, don't apply filters
        });
        
        // Day filter change - Just track, don't apply
        document.getElementById('dayFilter').addEventListener('change', () => {
            // Just track the change, don't apply filters
        });
        
        // View toggle buttons
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.currentTarget.getAttribute('data-view');
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                
                const container = document.getElementById('worksheets-container');
                container.className = `${view}-view`;
            });
        });
        
        // Listen for clicks on filter remove buttons (delegated)
        document.getElementById('activeFilters').addEventListener('click', (e) => {
            if (e.target.closest('.remove-filter')) {
                const button = e.target.closest('.remove-filter');
                const filterType = button.getAttribute('data-filter-type');
                this.removeFilter(filterType);
                
                // Update dependent dropdowns when removing grade or subject
                if (filterType === 'grade') {
                    this.updateSubjectDropdown();
                    this.updateWeekDropdown();
                } else if (filterType === 'subject') {
                    this.updateWeekDropdown();
                }
                // DON'T call applyFilters() here - user must click Apply button
            }
        });
    },
    
    // Get current filters from UI without updating object
    getCurrentFiltersFromUI() {
        return {
            grade: document.getElementById('gradeFilter').value,
            subject: document.getElementById('subjectFilter').value,
            week: document.getElementById('weekFilter').value,
            day: document.getElementById('dayFilter').value,
            search: document.getElementById('searchInput').value.trim()
        };
    },
    
    // Update current filters from UI
    updateCurrentFiltersFromUI() {
        this.currentFilters = this.getCurrentFiltersFromUI();
    },
    
    // Remove a specific filter
    removeFilter(filterType) {
        switch(filterType) {
            case 'grade':
                document.getElementById('gradeFilter').value = 'all';
                break;
            case 'subject':
                document.getElementById('subjectFilter').value = 'all';
                break;
            case 'week':
                document.getElementById('weekFilter').value = 'all';
                break;
            case 'day':
                document.getElementById('dayFilter').value = 'all';
                break;
            case 'search':
                document.getElementById('searchInput').value = '';
                break;
        }
        
        // Update dependent dropdowns but don't apply
        if (filterType === 'grade') {
            this.updateSubjectDropdown();
            this.updateWeekDropdown();
        } else if (filterType === 'subject') {
            this.updateWeekDropdown();
        }
        
        // Update UI filters state but don't load worksheets
        this.updateCurrentFiltersFromUI();
        this.updateActiveFiltersDisplay();
        
        // Update results count to show filters are ready
        document.getElementById('resultsCount').textContent = 'Click "Apply Filters" to load worksheets';
    },
    
    // Reset all filters
    resetFilters() {
        document.getElementById('gradeFilter').value = 'all';
        document.getElementById('subjectFilter').value = 'all';
        document.getElementById('weekFilter').value = 'all';
        document.getElementById('dayFilter').value = 'all';
        document.getElementById('searchInput').value = '';
        
        this.currentFilters = {
            grade: 'all',
            subject: 'all',
            week: 'all',
            day: 'all',
            search: ''
        };
        
        // Reset dropdowns to show all options
        this.updateSubjectDropdown();
        this.updateWeekDropdown();
        
        // Clear worksheets and show empty state
        this.allWorksheets = [];
        this.filteredWorksheets = [];
        this.showEmptyState();
        this.updateActiveFiltersDisplay();
        
        // Update results count
        document.getElementById('resultsCount').textContent = 'Select filters and click "Apply Filters"';
        
        // Hide controls
        document.getElementById('weekSelector').style.display = 'none';
        document.querySelector('.controls').style.display = 'none';
        document.getElementById('noResults').style.display = 'none';
    },
    
    // Get filtered worksheets (public method)
    getFilteredWorksheets() {
        return this.filteredWorksheets;
    },
    
    // Get current filters (public method)
    getCurrentFilters() {
        return this.currentFilters;
    }
};