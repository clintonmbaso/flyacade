        let allLessonPlans = [];

function displayWeeklyFocus(lessonPlans) {
    const weeklyFocusTable = document.getElementById('weekly-focus-table');
    weeklyFocusTable.innerHTML = ''; // Clear previous contents

    // Create table headers
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Week</th>
        <th>Days</th>
        <th>Topic</th>
        <th>Objectives</th>
        <th>Methods</th>
        <th>T/L Aids</th>  
        <th>References</th>
        <th>Comments</th>
    `;
    weeklyFocusTable.appendChild(headerRow);

    if (lessonPlans.length === 0) {
        const noDataRow = document.createElement('tr');
        noDataRow.classList.add('no-data');
        noDataRow.innerHTML = `<td colspan="8">No lessons found for the selected filters</td>`;
        weeklyFocusTable.appendChild(noDataRow);
        return;
    }

    let currentWeek = null;
    let rowspan = 0;

    // Loop through the filtered lesson plans and add them to the table
    lessonPlans.forEach((plan, index) => {
        // If the week number changes, reset the rowspan and set currentWeek to the new week
        if (plan.week !== currentWeek) {
            currentWeek = plan.week;
            rowspan = 1;
        } else {
            rowspan++;
        }

        const row = document.createElement('tr');

        // Merge week cells if there are multiple lessons for the same week
        if (rowspan > 1 && index > 0 && lessonPlans[index - 1].week === plan.week) {
            row.innerHTML = `
                <td></td> <!-- Empty cell for merged week -->
                <td>${plan.lessonNumber}</td>
                <td>${plan.topic}</td>
                <td><ul>${plan.objectives.map(objective => `<li>${objective}</li>`).join('')}</ul></td>
                <td>${plan.methodology}</td>
                <td><ul>${plan.materials.map(materials => `<li>${materials}</li>`).join('')}</ul></td>
                <td>${plan.references}</td>
                <td>${plan.comments}</td>
            `;
        } else {
            row.innerHTML = `
                <td rowspan="${rowspan}">${plan.week}</td> <!-- Week number with rowspan -->
                <td>${plan.lessonNumber}</td>
                <td>${plan.topic}</td>
                <td><ul>${plan.objectives.map(objective => `<li>${objective}</li>`).join('')}</ul></td>
                <td>${plan.methodology}</td>
                <td><ul>${plan.materials.map(materials => `<li>${materials}</li>`).join('')}</ul></td>
                <td>${plan.references}</td>
                <td>${plan.comments}</td>
            `;
        }

        weeklyFocusTable.appendChild(row);
    });
}

function checkLessonCompletion() {
    const requiredWeeks = [2, 3, 4, 5, 7, 8, 9, 10]; // Define the required weeks
    const statusParagraph = document.getElementById('lessonStatus');

    if (!allLessonPlans || allLessonPlans.length === 0) {
        // If no lessons are loaded
        statusParagraph.textContent = 'No lessons are available. Please load lesson plans.';
        statusParagraph.style.color = 'red';
        console.log('No lessons are available.'); // Debugging
        return;
    }

    // Extract unique weeks from the lesson plans
    const uniqueWeeks = [...new Set(allLessonPlans.map(plan => parseInt(plan.week, 10)))];
    console.log('Unique weeks loaded:', uniqueWeeks); // Debugging

    // Check for missing weeks
    const missingWeeks = requiredWeeks.filter(week => !uniqueWeeks.includes(week));
    console.log('Missing weeks:', missingWeeks); // Debugging

    if (missingWeeks.length === 0) {
        // All required weeks are present
        statusParagraph.textContent = 'All lessons are available.';
        statusParagraph.style.color = 'green';
    } else {
        // Some required weeks are missing
        statusParagraph.textContent = `Lessons are incomplete. Missing weeks: ${missingWeeks.join(', ')}.`;
        statusParagraph.style.color = 'red';
    }
}

        // Filter function for week, class, subject, and term
        function filterLessonPlans() {
            const weekFilter = document.getElementById('weekFilter').value;
            const gradeFilter = document.getElementById('gradeFilter').value;
            const subjectFilter = document.getElementById('subjectFilter').value;
            const termFilter = document.getElementById('termFilter').value;

            // Apply filters
            const filteredPlans = allLessonPlans.filter(plan => {
                const weekMatch = (weekFilter === 'all' || plan.week === weekFilter);
                const gradeMatch = (gradeFilter === 'all' || plan.grade === gradeFilter);
                const subjectMatch = (subjectFilter === 'all' || plan.subject === subjectFilter);
                const termMatch = (termFilter === 'all' || plan.term === termFilter);
                return weekMatch && gradeMatch && subjectMatch && termMatch;
            });

            displayWeeklyFocus(filteredPlans);

                // Check lesson completion only when "All Weeks" is selected
    if (weekFilter === 'all') {
        checkLessonCompletion();
    }
}

        // Populate the dropdowns with unique values from the lesson plans
        function populateFilters(lessonPlans) {
            const weekSet = new Set();
            const gradeSet = new Set();
            const subjectSet = new Set();
            const termSet = new Set();

            lessonPlans.forEach(plan => {
                weekSet.add(plan.week);
                gradeSet.add(plan.grade);
                subjectSet.add(plan.subject);
                termSet.add(plan.term);
            });

            // Populate week dropdown
            const weekSelect = document.getElementById('weekFilter');
            weekSet.forEach(week => {
                const option = document.createElement('option');
                option.value = week;
                option.textContent = `Week ${week}`;
                weekSelect.appendChild(option);
            });

            // Populate class dropdown
            const gradeSelect = document.getElementById('gradeFilter');
            gradeSet.forEach(cls => {
                const option = document.createElement('option');
                option.value = cls;
                option.textContent = cls;
                gradeSelect.appendChild(option);
            });

            // Populate subject dropdown
            const subjectSelect = document.getElementById('subjectFilter');
            subjectSet.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = subject;
                subjectSelect.appendChild(option);
            });

            // Populate term dropdown
            const termSelect = document.getElementById('termFilter');
            termSet.forEach(term => {
                const option = document.createElement('option');
                option.value = term;
                option.textContent = term;
                termSelect.appendChild(option);
            });

            // Add event listeners to dropdowns for filtering
            weekSelect.addEventListener('change', filterLessonPlans);
            gradeSelect.addEventListener('change', filterLessonPlans);
            subjectSelect.addEventListener('change', filterLessonPlans);
            termSelect.addEventListener('change', filterLessonPlans);
        }

        // Example usage:
        window.onload = function() {
            // Combine all lesson plans from different files
            const lessonPlansArray = [
            
                typeof lessonPlans1a !== 'undefined' ? lessonPlans1a : [],
                typeof lessonPlans1b !== 'undefined' ? lessonPlans1b : [],
                typeof lessonPlans1c !== 'undefined' ? lessonPlans1c : [],
                typeof lessonPlans2a !== 'undefined' ? lessonPlans2a : [],
                typeof lessonPlans2b !== 'undefined' ? lessonPlans2b : [],
                typeof lessonPlans2c !== 'undefined' ? lessonPlans2c : [],
                typeof lessonPlans3a !== 'undefined' ? lessonPlans3a : [],
                typeof lessonPlans3b !== 'undefined' ? lessonPlans3b : [],
                typeof lessonPlans3c !== 'undefined' ? lessonPlans3c : [],
                typeof lessonPlans4a !== 'undefined' ? lessonPlans4a : [],
                typeof lessonPlans4b !== 'undefined' ? lessonPlans4b : [],
                typeof lessonPlans4c !== 'undefined' ? lessonPlans4c : [],
                typeof lessonPlans5a !== 'undefined' ? lessonPlans5a : [],
                typeof lessonPlans5b !== 'undefined' ? lessonPlans5b : [],
                typeof lessonPlans5c !== 'undefined' ? lessonPlans5c : [],
                typeof lessonPlans6a !== 'undefined' ? lessonPlans6a : [],
                typeof lessonPlans6b !== 'undefined' ? lessonPlans6b : [],
                typeof lessonPlans6c !== 'undefined' ? lessonPlans6c : [],
                typeof lessonPlans7a !== 'undefined' ? lessonPlans7a : [],
                typeof lessonPlans7b !== 'undefined' ? lessonPlans7b : [],
                typeof lessonPlans7c !== 'undefined' ? lessonPlans7c : [],
                typeof lessonPlans8a !== 'undefined' ? lessonPlans8a : [],
                typeof lessonPlans8b !== 'undefined' ? lessonPlans8b : [],
                typeof lessonPlans8c !== 'undefined' ? lessonPlans8c : [],
                typeof lessonPlans9a !== 'undefined' ? lessonPlans9a : [],
                typeof lessonPlans9b !== 'undefined' ? lessonPlans9b : [],
                typeof lessonPlans9c !== 'undefined' ? lessonPlans9c : [],
                typeof lessonPlans10a !== 'undefined' ? lessonPlans10a : [],
                typeof lessonPlans10b !== 'undefined' ? lessonPlans10b : [],
                typeof lessonPlans10c !== 'undefined' ? lessonPlans10c : [],
                typeof lessonPlans11a !== 'undefined' ? lessonPlans11a : [],
                typeof lessonPlans11b !== 'undefined' ? lessonPlans11b : [],
                typeof lessonPlans11c !== 'undefined' ? lessonPlans11c : [],
                typeof lessonPlans12a !== 'undefined' ? lessonPlans12a : [],
                typeof lessonPlans12b !== 'undefined' ? lessonPlans12b : [],
                typeof lessonPlans12c !== 'undefined' ? lessonPlans12c : [],
                typeof lessonPlans13a !== 'undefined' ? lessonPlans13a : [],
                typeof lessonPlans13b !== 'undefined' ? lessonPlans13b : [],
                typeof lessonPlans13c !== 'undefined' ? lessonPlans13c : [],
                typeof lessonPlans14a !== 'undefined' ? lessonPlans14a : [],
                typeof lessonPlans14b !== 'undefined' ? lessonPlans14b : [],
                typeof lessonPlans14c !== 'undefined' ? lessonPlans14c : [],
                typeof lessonPlans15a !== 'undefined' ? lessonPlans15a : [],
                typeof lessonPlans15b !== 'undefined' ? lessonPlans15b : [],
                typeof lessonPlans15c !== 'undefined' ? lessonPlans15c : [],
                typeof lessonPlans16a !== 'undefined' ? lessonPlans16a : [],
                typeof lessonPlans16b !== 'undefined' ? lessonPlans16b : [],
                typeof lessonPlans16c !== 'undefined' ? lessonPlans16c : [],
                typeof lessonPlans17a !== 'undefined' ? lessonPlans17a : [],
                typeof lessonPlans17b !== 'undefined' ? lessonPlans17b : [],
                typeof lessonPlans17c !== 'undefined' ? lessonPlans17c : [],
                typeof lessonPlans18a !== 'undefined' ? lessonPlans18a : [],
                typeof lessonPlans18b !== 'undefined' ? lessonPlans18b : [],
                typeof lessonPlans18c !== 'undefined' ? lessonPlans18c : [],
                typeof lessonPlans19a !== 'undefined' ? lessonPlans19a : [],
                typeof lessonPlans19b !== 'undefined' ? lessonPlans19b : [],
                typeof lessonPlans19c !== 'undefined' ? lessonPlans19c : [],
                typeof lessonPlans20a !== 'undefined' ? lessonPlans20a : [],
                typeof lessonPlans20b !== 'undefined' ? lessonPlans20b : [],
                typeof lessonPlans20c !== 'undefined' ? lessonPlans20c : [],
                typeof lessonPlans21a !== 'undefined' ? lessonPlans21a : [],
                typeof lessonPlans21b !== 'undefined' ? lessonPlans21b : [],
                typeof lessonPlans21c !== 'undefined' ? lessonPlans21c : [],
                typeof lessonPlans22a !== 'undefined' ? lessonPlans22a : [],
                typeof lessonPlans22b !== 'undefined' ? lessonPlans22b : [],
                typeof lessonPlans22c !== 'undefined' ? lessonPlans22c : [],
                typeof lessonPlans23a !== 'undefined' ? lessonPlans23a : [],
                typeof lessonPlans23b !== 'undefined' ? lessonPlans23b : [],
                typeof lessonPlans23c !== 'undefined' ? lessonPlans23c : [],
                typeof lessonPlans24a !== 'undefined' ? lessonPlans24a : [],
                typeof lessonPlans24b !== 'undefined' ? lessonPlans24b : [],
                typeof lessonPlans24c !== 'undefined' ? lessonPlans24c : [],
                typeof lessonPlans25a !== 'undefined' ? lessonPlans25a : [],
                typeof lessonPlans25b !== 'undefined' ? lessonPlans25b : [],
                typeof lessonPlans25c !== 'undefined' ? lessonPlans25c : [],
                typeof lessonPlans26a !== 'undefined' ? lessonPlans26a : [],
                typeof lessonPlans26b !== 'undefined' ? lessonPlans26b : [],
                typeof lessonPlans26c !== 'undefined' ? lessonPlans26c : [],
                typeof lessonPlans27a !== 'undefined' ? lessonPlans27a : [],
                typeof lessonPlans27b !== 'undefined' ? lessonPlans27b : [],
                typeof lessonPlans27c !== 'undefined' ? lessonPlans27c : [],
                typeof lessonPlans28a !== 'undefined' ? lessonPlans28a : [],
                typeof lessonPlans28b !== 'undefined' ? lessonPlans28b : [],
                typeof lessonPlans28c !== 'undefined' ? lessonPlans28c : [],
                typeof lessonPlans29a !== 'undefined' ? lessonPlans29a : [],
                typeof lessonPlans29b !== 'undefined' ? lessonPlans29b : [],
                typeof lessonPlans29c !== 'undefined' ? lessonPlans29c : [],
                typeof lessonPlans30a !== 'undefined' ? lessonPlans30a : [],
                typeof lessonPlans30b !== 'undefined' ? lessonPlans30b : [],
                typeof lessonPlans30c !== 'undefined' ? lessonPlans30c : [],
                typeof lessonPlans31a !== 'undefined' ? lessonPlans31a : [],
                typeof lessonPlans31b !== 'undefined' ? lessonPlans31b : [],
                typeof lessonPlans31c !== 'undefined' ? lessonPlans31c : [],
                typeof lessonPlans32a !== 'undefined' ? lessonPlans32a : [],
                typeof lessonPlans32b !== 'undefined' ? lessonPlans32b : [],
                typeof lessonPlans32c !== 'undefined' ? lessonPlans32c : [],
                typeof lessonPlans33a !== 'undefined' ? lessonPlans33a : [],
                typeof lessonPlans33b !== 'undefined' ? lessonPlans33b : [],
                typeof lessonPlans33c !== 'undefined' ? lessonPlans33c : [],
                typeof lessonPlans34a !== 'undefined' ? lessonPlans34a : [],
                typeof lessonPlans34b !== 'undefined' ? lessonPlans34b : [],
                typeof lessonPlans34c !== 'undefined' ? lessonPlans34c : [],
                typeof lessonPlans35a !== 'undefined' ? lessonPlans35a : [],
                typeof lessonPlans35b !== 'undefined' ? lessonPlans35b : [],
                typeof lessonPlans35c !== 'undefined' ? lessonPlans35c : [],
                typeof lessonPlans35a !== 'undefined' ? lessonPlans35a : [],
                typeof lessonPlans35b !== 'undefined' ? lessonPlans35b : [],
                typeof lessonPlans35c !== 'undefined' ? lessonPlans35c : [],
                typeof lessonPlans36a !== 'undefined' ? lessonPlans36a : [],
                typeof lessonPlans36b !== 'undefined' ? lessonPlans36b : [],
                typeof lessonPlans36c !== 'undefined' ? lessonPlans36c : [],
                typeof lessonPlans37a !== 'undefined' ? lessonPlans37a : [],
                typeof lessonPlans37b !== 'undefined' ? lessonPlans37b : [],
                typeof lessonPlans37c !== 'undefined' ? lessonPlans37c : [],
                typeof lessonPlans38a !== 'undefined' ? lessonPlans38a : [],
                typeof lessonPlans38b !== 'undefined' ? lessonPlans38b : [],
                typeof lessonPlans38c !== 'undefined' ? lessonPlans38c : [],
                typeof lessonPlans39a !== 'undefined' ? lessonPlans39a : [],
                typeof lessonPlans39b !== 'undefined' ? lessonPlans39b : [],
                typeof lessonPlans39c !== 'undefined' ? lessonPlans39c : [],
                typeof lessonPlans40a !== 'undefined' ? lessonPlans40a : [],
                typeof lessonPlans40b !== 'undefined' ? lessonPlans40b : [],
                typeof lessonPlans40c !== 'undefined' ? lessonPlans40c : [],
                typeof lessonPlans41a !== 'undefined' ? lessonPlans41a : [],
                typeof lessonPlans41b !== 'undefined' ? lessonPlans41b : [],
                typeof lessonPlans41c !== 'undefined' ? lessonPlans41c : [],
                typeof lessonPlans42a !== 'undefined' ? lessonPlans42a : [],
                typeof lessonPlans42b !== 'undefined' ? lessonPlans42b : [],
                typeof lessonPlans42c !== 'undefined' ? lessonPlans42c : [],
                typeof lessonPlans43a !== 'undefined' ? lessonPlans43a : [],
                typeof lessonPlans43b !== 'undefined' ? lessonPlans43b : [],
                typeof lessonPlans43c !== 'undefined' ? lessonPlans43c : [],
                typeof lessonPlans44a !== 'undefined' ? lessonPlans44a : [],
                typeof lessonPlans44b !== 'undefined' ? lessonPlans44b : [],
                typeof lessonPlans44c !== 'undefined' ? lessonPlans44c : [],
                typeof lessonPlans45a !== 'undefined' ? lessonPlans45a : [],
                typeof lessonPlans45b !== 'undefined' ? lessonPlans45b : [],
                typeof lessonPlans45c !== 'undefined' ? lessonPlans45c : [],
                typeof lessonPlans46a !== 'undefined' ? lessonPlans46a : [],
                typeof lessonPlans46b !== 'undefined' ? lessonPlans46b : [],
                typeof lessonPlans46c !== 'undefined' ? lessonPlans46c : [],
                typeof lessonPlans47a !== 'undefined' ? lessonPlans47a : [],
                typeof lessonPlans47b !== 'undefined' ? lessonPlans47b : [],
                typeof lessonPlans47c !== 'undefined' ? lessonPlans47c : [],
                typeof lessonPlans48a !== 'undefined' ? lessonPlans48a : [],
                typeof lessonPlans48b !== 'undefined' ? lessonPlans48b : [],
                typeof lessonPlans48c !== 'undefined' ? lessonPlans48c : [],
                typeof lessonPlans49a !== 'undefined' ? lessonPlans49a : [],
                typeof lessonPlans49b !== 'undefined' ? lessonPlans49b : [],
                typeof lessonPlans49c !== 'undefined' ? lessonPlans49c : [],
                typeof lessonPlans50a !== 'undefined' ? lessonPlans50a : [],
                typeof lessonPlans50b !== 'undefined' ? lessonPlans50b : [],
                typeof lessonPlans50c !== 'undefined' ? lessonPlans50c : [],
                typeof lessonPlans51a !== 'undefined' ? lessonPlans51a : [],
                typeof lessonPlans51b !== 'undefined' ? lessonPlans51b : [],
                typeof lessonPlans51c !== 'undefined' ? lessonPlans51c : [],
                typeof lessonPlans52a !== 'undefined' ? lessonPlans52a : [],
                typeof lessonPlans52b !== 'undefined' ? lessonPlans52b : [],
                typeof lessonPlans52c !== 'undefined' ? lessonPlans52c : [],
                typeof lessonPlans53a !== 'undefined' ? lessonPlans53a : [],
                typeof lessonPlans53b !== 'undefined' ? lessonPlans53b : [],
                typeof lessonPlans53c !== 'undefined' ? lessonPlans53c : [],
                typeof lessonPlans54a !== 'undefined' ? lessonPlans54a : [],
                typeof lessonPlans54b !== 'undefined' ? lessonPlans54b : [],
                typeof lessonPlans54c !== 'undefined' ? lessonPlans54c : [],
                typeof lessonPlans55a !== 'undefined' ? lessonPlans55a : [],
                typeof lessonPlans55b !== 'undefined' ? lessonPlans55b : [],
                typeof lessonPlans55c !== 'undefined' ? lessonPlans55c : [],
                typeof lessonPlans56a !== 'undefined' ? lessonPlans56a : [],
                typeof lessonPlans56b !== 'undefined' ? lessonPlans56b : [],
                typeof lessonPlans56c !== 'undefined' ? lessonPlans56c : [],
                typeof lessonPlans56a !== 'undefined' ? lessonPlans56a : [],
                typeof lessonPlans56b !== 'undefined' ? lessonPlans56b : [],
                typeof lessonPlans56c !== 'undefined' ? lessonPlans56c : [],
                typeof lessonPlans57a !== 'undefined' ? lessonPlans57a : [],
                typeof lessonPlans57b !== 'undefined' ? lessonPlans57b : [],
                typeof lessonPlans57c !== 'undefined' ? lessonPlans57c : [],
                typeof lessonPlans58a !== 'undefined' ? lessonPlans58a : [],
                typeof lessonPlans58b !== 'undefined' ? lessonPlans58b : [],
                typeof lessonPlans58c !== 'undefined' ? lessonPlans58c : [],
                typeof lessonPlans59a !== 'undefined' ? lessonPlans59a : [],
                typeof lessonPlans59b !== 'undefined' ? lessonPlans59b : [],
                typeof lessonPlans59c !== 'undefined' ? lessonPlans59c : [],
                typeof lessonPlans60a !== 'undefined' ? lessonPlans60a : [],
                typeof lessonPlans60b !== 'undefined' ? lessonPlans60b : [],
                typeof lessonPlans60c !== 'undefined' ? lessonPlans60c : [],
                typeof lessonPlans61a !== 'undefined' ? lessonPlans61a : [],
                typeof lessonPlans61b !== 'undefined' ? lessonPlans61b : [],
                typeof lessonPlans61c !== 'undefined' ? lessonPlans61c : [],
                typeof lessonPlans62a !== 'undefined' ? lessonPlans62a : [],
                typeof lessonPlans62b !== 'undefined' ? lessonPlans62b : [],
                typeof lessonPlans62c !== 'undefined' ? lessonPlans62c : [],
                typeof lessonPlans63a !== 'undefined' ? lessonPlans63a : [],
                typeof lessonPlans63b !== 'undefined' ? lessonPlans63b : [],
                typeof lessonPlans63c !== 'undefined' ? lessonPlans63c : [],
                typeof lessonPlans64a !== 'undefined' ? lessonPlans64a : [],
                typeof lessonPlans64b !== 'undefined' ? lessonPlans64b : [],
                typeof lessonPlans64c !== 'undefined' ? lessonPlans64c : [],
                typeof lessonPlans65a !== 'undefined' ? lessonPlans65a : [],
                typeof lessonPlans65b !== 'undefined' ? lessonPlans65b : [],
                typeof lessonPlans65c !== 'undefined' ? lessonPlans65c : [],
                typeof lessonPlans66a !== 'undefined' ? lessonPlans66a : [],
                typeof lessonPlans66b !== 'undefined' ? lessonPlans66b : [],
                typeof lessonPlans66c !== 'undefined' ? lessonPlans66c : [],
                typeof lessonPlans67a !== 'undefined' ? lessonPlans67a : [],
                typeof lessonPlans67b !== 'undefined' ? lessonPlans67b : [],
                typeof lessonPlans67c !== 'undefined' ? lessonPlans67c : [],
                typeof lessonPlans68a !== 'undefined' ? lessonPlans68a : [],
                typeof lessonPlans68b !== 'undefined' ? lessonPlans68b : [],
                typeof lessonPlans68c !== 'undefined' ? lessonPlans68c : [],
                typeof lessonPlans69a !== 'undefined' ? lessonPlans69a : [],
                typeof lessonPlans69b !== 'undefined' ? lessonPlans69b : [],
                typeof lessonPlans69c !== 'undefined' ? lessonPlans69c : []

            ];


            
            allLessonPlans = [].concat(...lessonPlansArray); // Combine all loaded lesson plans

            if (allLessonPlans.length > 0) {
                populateFilters(allLessonPlans); // Populate the dropdown filters
                displayWeeklyFocus(allLessonPlans); // Display all lesson plans initially
                checkLessonCompletion(); // Check lesson completion status
            } else {
                console.error('Lesson plans not found!');
            }
        };