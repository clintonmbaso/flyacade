// Data Loader Module - Updated for Lazy Loading
const DataLoader = {
    allWorksheets: [],
    loadedFiles: new Set(),
    
    // Register workbook/worksheet data
    registerWorksheet: function(worksheetData) {
        if (worksheetData && worksheetData.metadata) {
            worksheetData.registeredTime = Date.now();
            this.allWorksheets.push({
                variableName: `grade${worksheetData.metadata.grade}_${worksheetData.metadata.subject}_week${worksheetData.metadata.week}`,
                metadata: worksheetData.metadata,
                days: worksheetData
            });
            console.log(`Registered: ${worksheetData.metadata.subject} Grade ${worksheetData.metadata.grade} Week ${worksheetData.metadata.week}`);
        }
    },
    
    // Lazy load worksheets based on filters
    loadWorksheetsByFilters: function(filters, callback) {
        if (!window.WorksheetManifest) {
            console.error("WorksheetManifest not found");
            return;
        }
        
        // Get files to load based on filters
        const filesToLoad = WorksheetManifest.getFilesByFilter(filters);
        console.log(`Loading ${filesToLoad.length} files based on filters`);
        
        // Clear previously loaded worksheets that don't match filters
        this.clearFilteredWorksheets(filters);
        
        // Load each file dynamically
        let loadedCount = 0;
        const totalFiles = filesToLoad.length;
        
        filesToLoad.forEach(filePath => {
            // Skip if already loaded
            if (this.loadedFiles.has(filePath)) {
                loadedCount++;
                if (loadedCount === totalFiles && callback) callback();
                return;
            }
            
            // Create script element
            const script = document.createElement('script');
            script.src = filePath;
            script.async = true;
            
            script.onload = () => {
                this.loadedFiles.add(filePath);
                loadedCount++;
                
                // Update UI with progress if many files
                if (totalFiles > 5) {
                    this.updateLoadingProgress(loadedCount, totalFiles);
                }
                
                if (loadedCount === totalFiles && callback) {
                    this.hideLoadingIndicator();
                    callback();
                }
            };
            
            script.onerror = () => {
                console.error(`Failed to load: ${filePath}`);
                loadedCount++;
                if (loadedCount === totalFiles && callback) {
                    this.hideLoadingIndicator();
                    callback();
                }
            };
            
            document.head.appendChild(script);
        });
        
        // If no files to load, just callback
        if (filesToLoad.length === 0 && callback) {
            callback();
        }
    },
    
    // Clear worksheets that don't match current filters
    clearFilteredWorksheets: function(filters) {
        if (filters.grade === 'all' && filters.subject === 'all' && filters.week === 'all') {
            // Keep all worksheets if no filters
            return;
        }
        
        // Filter out worksheets that don't match
        this.allWorksheets = this.allWorksheets.filter(worksheet => {
            const metadata = worksheet.metadata;
            
            if (filters.grade !== 'all' && metadata.grade != filters.grade) {
                return false;
            }
            
            if (filters.subject !== 'all' && metadata.subject !== filters.subject) {
                return false;
            }
            
            if (filters.week !== 'all' && metadata.week != filters.week) {
                return false;
            }
            
            return true;
        });
    },
    
    // Show loading indicator
    showLoadingIndicator: function() {
        let indicator = document.getElementById('loadingIndicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'loadingIndicator';
            indicator.className = 'loading-indicator';
            indicator.innerHTML = `
                <div class="loading-content">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Loading worksheets...</p>
                    <div class="loading-progress" id="loadingProgress"></div>
                </div>
            `;
            document.body.appendChild(indicator);
        }
        indicator.style.display = 'flex';
    },
    
    // Update loading progress
    updateLoadingProgress: function(loaded, total) {
        const progress = document.getElementById('loadingProgress');
        if (progress) {
            const percentage = Math.round((loaded / total) * 100);
            progress.innerHTML = `${loaded}/${total} files (${percentage}%)`;
        }
    },
    
    // Hide loading indicator
    hideLoadingIndicator: function() {
        const indicator = document.getElementById('loadingIndicator');
        if (indicator) {
            setTimeout(() => {
                indicator.style.display = 'none';
            }, 500);
        }
    },
    
    // Get all worksheets
    getAllWorksheets: function() {
        return this.allWorksheets;
    },
    
    // Get available options for filters (from loaded worksheets)
    getAvailableOptions: function() {
        const options = {
            grades: new Set(),
            subjects: new Set(),
            weeks: new Set()
        };
        
        this.allWorksheets.forEach(worksheet => {
            options.grades.add(worksheet.metadata.grade);
            options.subjects.add(worksheet.metadata.subject);
            options.weeks.add(worksheet.metadata.week);
        });
        
        return options;
    }
};

// Make it globally accessible
window.DataLoader = DataLoader;

// Also expose registration function for backward compatibility
window.registerWorksheet = function(worksheetData) {
    DataLoader.registerWorksheet(worksheetData);
};