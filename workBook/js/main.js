document.addEventListener('DOMContentLoaded', function() {
    // Global variables
    let currentWorkbook = null;
    let currentPageIndex = 0;
    
    // DOM elements
    const workbookList = document.getElementById('workbook-list');
    const workbookContent = document.getElementById('workbook-content');
    const workbookTitle = document.getElementById('workbook-title');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageIndicator = document.getElementById('page-indicator');
    const completeWorkbookBtn = document.getElementById('complete-workbook');
    const workbookProgress = document.getElementById('workbook-progress');
    const progressPercentage = document.getElementById('progress-percentage');
    const themeToggle = document.getElementById('theme-toggle');
    const printBtn = document.getElementById('print-btn');
    const gradeSelect = document.getElementById('grade-select');
    const termSelect = document.getElementById('term-select');
    const subjectSelect = document.getElementById('subject-select');
    const showResultsBtn = document.getElementById('show-results');
    const printAnswersBtn = document.getElementById('print-answers');
    const classInfoContainer = document.getElementById('class-info');

    // Class data with logos and teachers
    const classData = {
        'baby': {
            name: 'Baby Birds',
            logo: '../images/Classes_1.png',
            teacher: {
                name: 'Teacher Siazyana',
                picture: '../images/teachers/FS20BC0012.jpg'
            }
        },
        'middle': {
            name: 'Sky Sprouts',
            logo: '../images/Classes_2.png',
            teacher: {
                name: 'Teacher Siazyana',
                picture: '../images/teachers/FS20BC0012.jpg'
            }
        },
        'reception': {
            name: 'Nestlings Navigators',
            logo: '../images/Classes_3.png',
            teacher: {
                name: 'Teacher Loveness',
                picture: '../images/teachers/FS20BC0003.jpg'
            }
        },
        '1': {
            name: 'Feather Flyers',
            logo: '../images/Classes_4.png',
            teacher: {
                name: 'Teacher Loveness',
                picture: '../images/teachers/FS20BC0003.jpg'
            }
        },
        '2': {
            name: 'Cloud Chicks',
            logo: '../images/Classes_5.png',
            teacher: {
                name: 'Teacher Faith',
                picture: '../images/teachers/FS20BC0011.jpg'
            }
        },
        '3': {
            name: 'Wing Whiz',
            logo: '../images/Classes_6.png',
            teacher: {
                name: 'Teacher Faith',
                picture: '../images/teachers/FS20BC0011.jpg'
            }
        },
        '4': {
            name: 'Sky Soarers',
            logo: '../images/Classes_7.png',
            teacher: {
                name: 'Mr. Mbaso',
                picture: '../images/teachers/FS20BC0001.jpg'
            }
        },
        '5': {
            name: 'Avian Aces',
            logo: '../images/Classes_8.png',
            teacher: {
                name: 'Mr. Mbaso',
                picture: '../images/teachers/FS20BC0001.jpg'
            }
        },
        '6': {
            name: 'Nimbus Navigators',
            logo: '../images/Classes_9.png',
            teacher: {
                name: 'Mr. Mbaso',
                picture: '../images/teachers/FS20BC0001.jpg'
            }
        },
        '7': {
            name: 'Fledgling Falcons',
            logo: '../images/Classes_10.png',
            teacher: {
                name: 'Mr. Mbaso',
                picture: '../images/teachers/FS20BC0001.jpg'
            }
        }
    };

    // Question templates for interactive activities
    const questionTemplates = {
        coloring: {
            title: "Coloring Activity",
            template: (data, questionId) => `
                <div class="interactive-question coloring-question">
                    <h4>Color the ${data.item}</h4>
                    <img src="${data.image}" class="coloring-image" alt="${data.item}">
                    <div class="color-palette">
                        ${data.colors.map(color => `
                            <button class="color-btn" style="background-color: ${color}" 
                                    data-color="${color}" data-question-id="${questionId}"></button>
                        `).join('')}
                    </div>
                </div>
            `
        },
        tracing: {
            title: "Tracing Practice",
            template: (data, questionId) => `
                <div class="interactive-question tracing-question">
                    <h4>Trace the ${data.item}</h4>
                    <div class="tracing-container">
                        <img src="${data.image}" class="tracing-image" alt="${data.item}">
                        <canvas class="tracing-canvas" data-question-id="${questionId}"></canvas>
                        <button class="clear-tracing" data-question-id="${questionId}">Clear</button>
                    </div>
                </div>
            `
        },
        listening: {
            title: "Listening Activity",
            template: (data, questionId) => `
                <div class="interactive-question listening-question">
                    <h4>${data.question}</h4>
                    <audio controls src="${data.audio}"></audio>
                    <div class="options">
                        ${data.options.map((option, index) => `
                            <div class="option">
                                <input type="radio" 
                                       id="${questionId}_${index}" 
                                       name="${questionId}" 
                                       class="answer-input" 
                                       value="${index}"
                                       ${option.correct ? 'data-correct="true"' : ''}>
                                <label for="${questionId}_${index}">${option.text}</label>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `
        },
        counting: {
            title: "Counting Activity",
            template: (data, questionId) => `
                <div class="interactive-question counting-question">
                    <h4>${data.question}</h4>
                    <img src="${data.image}" class="counting-image" alt="Counting items">
                    <div class="number-options">
                        ${Array.from({length: 10}, (_, i) => i + 1).map(num => `
                            <button class="number-btn" data-number="${num}" data-question-id="${questionId}">
                                ${num}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `
        }
    };

    // Initialize the app
    function init() {
        if (!window.workbooks) window.workbooks = [];
        updateFilterOptions();
        setupEventListeners();
        loadThemePreference();
        renderWorkbookList();
    }

    function updateFilterOptions() {
        const grades = new Set();
        const terms = new Set();
        const subjects = new Set();

        window.workbooks.forEach(workbook => {
            grades.add(workbook.grade);
            terms.add(workbook.term);
            subjects.add(workbook.subject);
        });

        populateSelect(gradeSelect, [...grades].sort());
        populateSelect(termSelect, [...terms].sort());
        populateSelect(subjectSelect, [...subjects].sort());
    }

    function populateSelect(selectElement, options) {
        selectElement.innerHTML = '';
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = 'All ' + selectElement.id.replace('-select', '') + 's';
        selectElement.appendChild(allOption);

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = selectElement.id === 'grade-select' ? 
                             classData[option]?.name || `Grade ${option}` : 
                             option;
            selectElement.appendChild(opt);
        });
    }

    function getRandomQuestions(questions, limit) {
        if (!limit || questions.length <= limit) return questions.slice();
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, limit);
    }

    function shuffleOptions(options) {
        const shuffled = [...options].sort(() => 0.5 - Math.random());
        return shuffled;
    }

    function applyFilters() {
        const grade = gradeSelect.value;
        const term = termSelect.value;
        const subject = subjectSelect.value;
        
        const filtered = window.workbooks.filter(workbook => {
            return (grade === 'all' || workbook.grade.toString() === grade) &&
                   (term === 'all' || workbook.term.toString() === term) &&
                   (subject === 'all' || workbook.subject === subject);
        });
        
        renderWorkbookList(filtered);
    }

    function setupEventListeners() {
        prevPageBtn.addEventListener('click', goToPreviousPage);
        nextPageBtn.addEventListener('click', goToNextPage);
        completeWorkbookBtn.addEventListener('click', markWorkbookAsComplete);
        themeToggle.addEventListener('click', toggleTheme);
        printBtn.addEventListener('click', () => window.print());
        gradeSelect.addEventListener('change', applyFilters);
        termSelect.addEventListener('change', applyFilters);
        subjectSelect.addEventListener('change', applyFilters);
        showResultsBtn.addEventListener('click', showResults);
        printAnswersBtn.addEventListener('click', printAnswerKey);
        
        workbookContent.addEventListener('change', function(e) {
            if (e.target.classList.contains('answer-input') || e.target.classList.contains('free-response')) {
                saveAnswers();
                updateProgress();
                checkCompletionStatus();
            }
        });
    }

    function createWorkbookCard(workbook) {
        const progress = getWorkbookProgress(workbook.id);
        const isCompleted = localStorage.getItem(`workbook_${workbook.id}_completed`) === 'true';
        const classInfo = classData[workbook.grade] || {};
        
        const workbookCard = document.createElement('div');
        workbookCard.className = 'workbook-card';
        workbookCard.dataset.id = workbook.id;
        workbookCard.innerHTML = `
            <div class="workbook-card-header">
                <div id="why" style="display: flex; justify-content: space-between;">
                <img src="${classInfo.logo || ''}" class="workbook-class-logo" alt="${classInfo.name || ''}">
                    <h3>${workbook.title}</h3>
                </div>
                    <p>${workbook.description}</p>        
            </div>
            <div class="meta">
                <span>${classInfo.name || `Grade ${workbook.grade}`} • Term ${workbook.term}</span>
                <span>${workbook.pages.length} pages</span>
            </div>
            <div class="progress-bar" style="width: ${progress}%"></div>
            ${isCompleted ? '<div class="completion-badge"><i class="fas fa-check"></i> Completed</div>' : ''}
        `;
        
        workbookCard.addEventListener('click', () => loadWorkbook(workbook.id));
        workbookList.appendChild(workbookCard);
    }

    function renderWorkbookList(filteredWorkbooks = window.workbooks) {
        workbookList.innerHTML = '';
        
        const recentWorkbooks = [...filteredWorkbooks]
            .sort((a, b) => b.registeredTime - a.registeredTime)
            .slice(0, 3);
        
        if (filteredWorkbooks.length > 3) {
            const viewAllBtn = document.createElement('button');
            viewAllBtn.className = 'btn-secondary view-all-btn';
            viewAllBtn.textContent = `View All (${filteredWorkbooks.length})`;
            viewAllBtn.addEventListener('click', () => renderFullWorkbookList(filteredWorkbooks));
            workbookList.appendChild(viewAllBtn);
        }
        
        recentWorkbooks.forEach(workbook => createWorkbookCard(workbook));
    }

    function renderFullWorkbookList(workbooks) {
        workbookList.innerHTML = '';
        workbooks.forEach(workbook => createWorkbookCard(workbook));
        
        const backBtn = document.createElement('button');
        backBtn.className = 'btn-secondary back-btn';
        backBtn.textContent = 'Back to Recent';
        backBtn.addEventListener('click', () => renderWorkbookList(workbooks));
        workbookList.appendChild(backBtn);
    }

    function loadWorkbook(workbookId) {
        // Clear any previous answers for this workbook when loading
        localStorage.removeItem(`workbook_${workbookId}_answers`);
        
        currentWorkbook = window.workbooks.find(wb => wb.id === workbookId);
        currentPageIndex = 0;
        
        if (!currentWorkbook) {
            console.error('Workbook not found:', workbookId);
            return;
        }
        
        // Process questions with limits and shuffling
        currentWorkbook.pages.forEach(page => {
            page.processedExercises = page.exercises.map(exercise => {
                const questions = getRandomQuestions(exercise.questions, page.questionLimit);
                return {
                    ...exercise,
                    questions: questions.map(q => {
                        if (q.shuffleOptions && q.options) {
                            const originalCorrect = q.options[q.correctAnswer];
                            const shuffledOptions = shuffleOptions(q.options);
                            return {
                                ...q,
                                options: shuffledOptions,
                                correctAnswer: shuffledOptions.indexOf(originalCorrect)
                            };
                        }
                        return q;
                    })
                };
            });
        });
        
        // Update class info display
        const classInfo = classData[currentWorkbook.grade] || {};
        classInfoContainer.innerHTML = `
        <!--<div id="why" style="display: flex; justify-content: space-between;">-->
            <div class="teacher-info">
                <img src="${classInfo.teacher?.picture || ''}" class="teacher-picture" alt="${classInfo.teacher?.name || ''}">
                <img src="${classInfo.logo || ''}" class="class-logo" alt="${classInfo.name || ''}">
                <div>
                <h3>${classInfo.name || `Grade ${currentWorkbook.grade}`}</h3>
                    <p>${classInfo.teacher?.name || 'No teacher assigned'}</p>
                </div>
            </div>
        <!--</div>-->
        `;
        
        // Reset UI
        workbookTitle.textContent = currentWorkbook.title;
        prevPageBtn.disabled = true;
        nextPageBtn.disabled = currentWorkbook.pages.length <= 1;
        completeWorkbookBtn.disabled = true;
        
        renderPage(currentPageIndex);
        updatePageIndicator();
        updateProgress();
    }

    function renderQuestion(question, questionId, savedAnswer) {
        let questionHTML = '';
        
        switch(question.type) {
            case 'coloring':
            case 'tracing':
            case 'listening':
            case 'counting':
                questionHTML = questionTemplates[question.type].template(question, questionId);
                break;
                
            case 'multiple-choice':
                questionHTML = `
                    <div class="options">
                        ${question.options.map((option, optIndex) => `
                            <div class="option">
                                <input type="radio" 
                                       id="${questionId}_${optIndex}" 
                                       name="${questionId}" 
                                       class="answer-input" 
                                       value="${optIndex}"
                                       ${savedAnswer === optIndex.toString() ? 'checked' : ''}>
                                <label for="${questionId}_${optIndex}">${option}</label>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;
                
            case 'true-false':
                questionHTML = `
                    <div class="options">
                        <div class="option">
                            <input type="radio" 
                                   id="${questionId}_true" 
                                   name="${questionId}" 
                                   class="answer-input" 
                                   value="true"
                                   ${savedAnswer === 'true' ? 'checked' : ''}>
                            <label for="${questionId}_true">True</label>
                        </div>
                        <div class="option">
                            <input type="radio" 
                                   id="${questionId}_false" 
                                   name="${questionId}" 
                                   class="answer-input" 
                                   value="false"
                                   ${savedAnswer === 'false' ? 'checked' : ''}>
                            <label for="${questionId}_false">False</label>
                        </div>
                    </div>
                `;
                break;
                
            case 'free-response':
                questionHTML = `
                    <textarea class="free-response" 
                              data-question-id="${questionId}"
                              placeholder="Write your answer here...">${savedAnswer || ''}</textarea>
                `;
                break;
                
            default:
                questionHTML = `
                    <div class="question-text">${question.text}</div>
                    <p>Unsupported question type</p>
                `;
        }
        
        return questionHTML;
    }

    function renderPage(pageIndex) {
        if (!currentWorkbook || pageIndex < 0 || pageIndex >= currentWorkbook.pages.length) return;
        
        const page = currentWorkbook.pages[pageIndex];
        const savedAnswers = getSavedAnswers();
        const pageAnswers = savedAnswers[page.id] || {};
        
        let pageHTML = `
            <div class="workbook-page active" data-page-id="${page.id}">
                <h2 class="page-title">${page.title}</h2>
        `;
        
        page.processedExercises.forEach((exercise, exIndex) => {
            pageHTML += `
                <div class="exercise" data-exercise-id="${exercise.id}">
                    <h3>${exercise.title}</h3>
            `;
            
            exercise.questions.forEach((question, qIndex) => {
                const questionId = `${page.id}_${exercise.id}_${qIndex}`;
                const savedAnswer = pageAnswers[questionId];
                
                pageHTML += `
                    <div class="question">
                        <div class="question-text">${qIndex + 1}. ${question.text || question.question || questionTemplates[question.type]?.title || 'Activity'}</div>
                        ${renderQuestion(question, questionId, savedAnswer)}
                    </div>
                `;
            });
            
            pageHTML += `</div>`;
        });
        
        pageHTML += `</div>`;
        workbookContent.innerHTML = pageHTML;
        
        // Set up interactive elements after rendering
        setupInteractiveQuestions();
    }

    function setupInteractiveQuestions() {
        // Coloring questions
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const color = this.dataset.color;
                const questionId = this.dataset.questionId;
                const coloringImage = this.closest('.coloring-question').querySelector('.coloring-image');
                
                // Apply color effect
                coloringImage.style.filter = `grayscale(100%) brightness(1.1) sepia(100%) hue-rotate(${getHueRotation(color)}) saturate(1000%)`;
                
                // Save the selected color
                const currentPage = currentWorkbook.pages[currentPageIndex];
                const savedAnswers = getSavedAnswers();
                const pageAnswers = savedAnswers[currentPage.id] || {};
                pageAnswers[questionId] = color;
                savedAnswers[currentPage.id] = pageAnswers;
                localStorage.setItem(`workbook_${currentWorkbook.id}_answers`, JSON.stringify(savedAnswers));
                
                updateProgress();
                checkCompletionStatus();
            });
        });
        
        // Tracing questions
        document.querySelectorAll('.tracing-canvas').forEach(canvas => {
            setupTracingCanvas(canvas);
        });
        
        // Clear tracing buttons
        document.querySelectorAll('.clear-tracing').forEach(btn => {
            btn.addEventListener('click', function() {
                const questionId = this.dataset.questionId;
                const canvas = this.previousElementSibling;
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Clear saved drawing
                const currentPage = currentWorkbook.pages[currentPageIndex];
                const savedAnswers = getSavedAnswers();
                const pageAnswers = savedAnswers[currentPage.id] || {};
                delete pageAnswers[questionId];
                savedAnswers[currentPage.id] = pageAnswers;
                localStorage.setItem(`workbook_${currentWorkbook.id}_answers`, JSON.stringify(savedAnswers));
                
                updateProgress();
                checkCompletionStatus();
            });
        });
        
        // Counting buttons
        document.querySelectorAll('.number-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const number = this.dataset.number;
                const questionId = this.dataset.questionId;
                
                // Save the selected number
                const currentPage = currentWorkbook.pages[currentPageIndex];
                const savedAnswers = getSavedAnswers();
                const pageAnswers = savedAnswers[currentPage.id] || {};
                pageAnswers[questionId] = number;
                savedAnswers[currentPage.id] = pageAnswers;
                localStorage.setItem(`workbook_${currentWorkbook.id}_answers`, JSON.stringify(savedAnswers));
                
                // Visual feedback
                this.classList.add('selected');
                
                updateProgress();
                checkCompletionStatus();
            });
        });
    }

    function setupTracingCanvas(canvas) {
        const ctx = canvas.getContext('2d');
        let isDrawing = false;
        
        // Set canvas dimensions
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);
        
        function startDrawing(e) {
            isDrawing = true;
            draw(e);
        }
        
        function draw(e) {
            if (!isDrawing) return;
            
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#0000ff';
            
            ctx.lineTo(
                e.clientX - canvas.getBoundingClientRect().left,
                e.clientY - canvas.getBoundingClientRect().top
            );
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(
                e.clientX - canvas.getBoundingClientRect().left,
                e.clientY - canvas.getBoundingClientRect().top
            );
        }
        
        function stopDrawing() {
            isDrawing = false;
            ctx.beginPath();
            
            // Save the drawing
            const questionId = canvas.dataset.questionId;
            const currentPage = currentWorkbook.pages[currentPageIndex];
            const savedAnswers = getSavedAnswers();
            const pageAnswers = savedAnswers[currentPage.id] || {};
            pageAnswers[questionId] = true; // Mark as answered
            savedAnswers[currentPage.id] = pageAnswers;
            localStorage.setItem(`workbook_${currentWorkbook.id}_answers`, JSON.stringify(savedAnswers));
            
            updateProgress();
            checkCompletionStatus();
        }
    }

    function getHueRotation(color) {
        // Convert hex color to hue rotation value
        const hex = color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16) / 255;
        const g = parseInt(hex.substring(2, 4), 16) / 255;
        const b = parseInt(hex.substring(4, 6), 16) / 255;
        
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h;
        
        if (max === min) {
            h = 0;
        } else if (max === r) {
            h = ((g - b) / (max - min)) % 6;
        } else if (max === g) {
            h = (b - r) / (max - min) + 2;
        } else {
            h = (r - g) / (max - min) + 4;
        }
        
        h = Math.round(h * 60);
        if (h < 0) h += 360;
        
        return `${h - 60}deg`; // Adjust for sepia starting point
    }

    function goToPreviousPage() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            renderPage(currentPageIndex);
            updatePageIndicator();
            nextPageBtn.disabled = false;
            if (currentPageIndex === 0) prevPageBtn.disabled = true;
        }
    }

    function goToNextPage() {
        if (currentPageIndex < currentWorkbook.pages.length - 1) {
            currentPageIndex++;
            renderPage(currentPageIndex);
            updatePageIndicator();
            prevPageBtn.disabled = false;
            if (currentPageIndex === currentWorkbook.pages.length - 1) nextPageBtn.disabled = true;
        }
    }

    function updatePageIndicator() {
        if (currentWorkbook) {
            pageIndicator.textContent = `Page ${currentPageIndex + 1} of ${currentWorkbook.pages.length}`;
        }
    }

    function saveAnswers() {
        if (!currentWorkbook) return;
        
        const currentPage = currentWorkbook.pages[currentPageIndex];
        const savedAnswers = getSavedAnswers();
        const pageAnswers = {};
        
        const answerInputs = workbookContent.querySelectorAll('.answer-input, .free-response');
        
        answerInputs.forEach(input => {
            const questionId = input.classList.contains('free-response') 
                ? input.dataset.questionId 
                : input.name;
            
            if (input.type === 'radio' && input.checked) {
                pageAnswers[questionId] = input.value;
            } else if (input.type === 'textarea' || input.type === 'text') {
                pageAnswers[questionId] = input.value;
            }
        });
        
        savedAnswers[currentPage.id] = pageAnswers;
        localStorage.setItem(`workbook_${currentWorkbook.id}_answers`, JSON.stringify(savedAnswers));
    }

    function getSavedAnswers() {
        if (!currentWorkbook) return {};
        const saved = localStorage.getItem(`workbook_${currentWorkbook.id}_answers`);
        return saved ? JSON.parse(saved) : {};
    }

    function updateProgress() {
        if (!currentWorkbook) return;
        
        const savedAnswers = getSavedAnswers();
        let answeredQuestions = 0;
        let totalQuestions = 0;
        
        currentWorkbook.pages.forEach(page => {
            page.processedExercises.forEach(exercise => {
                exercise.questions.forEach((question, qIndex) => {
                    totalQuestions++;
                    const questionId = `${page.id}_${exercise.id}_${qIndex}`;
                    if (savedAnswers[page.id]?.[questionId]) answeredQuestions++;
                });
            });
        });
        
        const progress = totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0;
        workbookProgress.value = progress;
        progressPercentage.textContent = `${progress}%`;
    }

    function checkCompletionStatus() {
        if (!currentWorkbook) return false;
        
        const savedAnswers = getSavedAnswers();
        let totalQuestions = 0;
        let answeredQuestions = 0;

        currentWorkbook.pages.forEach(page => {
            page.processedExercises.forEach(exercise => {
                exercise.questions.forEach((question, qIndex) => {
                    totalQuestions++;
                    const questionId = `${page.id}_${exercise.id}_${qIndex}`;
                    if (savedAnswers[page.id]?.[questionId]) answeredQuestions++;
                });
            });
        });

        completeWorkbookBtn.disabled = answeredQuestions < totalQuestions;
        return answeredQuestions === totalQuestions;
    }

    function markWorkbookAsComplete() {
        if (!currentWorkbook) return;
        
        localStorage.setItem(`workbook_${currentWorkbook.id}_completed`, 'true');
        completeWorkbookBtn.innerHTML = '<i class="fas fa-check-circle"></i> Completed!';
        completeWorkbookBtn.disabled = true;
        renderWorkbookList();
    }

    function showResults() {
        if (!currentWorkbook) return;
        
        const savedAnswers = getSavedAnswers();
        let resultsHTML = `<div class="results-header"><h2>${currentWorkbook.title} - Answers</h2></div>`;
        let score = 0;
        let totalQuestions = 0;

        currentWorkbook.pages.forEach(page => {
            resultsHTML += `<div class="page-results"><h3>${page.title}</h3>`;
            
            page.processedExercises.forEach(exercise => {
                resultsHTML += `<div class="exercise-results"><h4>${exercise.title}</h4>`;
                
                exercise.questions.forEach((question, qIndex) => {
                    totalQuestions++;
                    const questionId = `${page.id}_${exercise.id}_${qIndex}`;
                    const userAnswer = savedAnswers[page.id]?.[questionId];
                    const isCorrect = checkAnswer(question, userAnswer);
                    
                    if (isCorrect) score++;

                    resultsHTML += `
                        <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
                            <div class="status-icon">
                                ${isCorrect ? '<span class="icon correct-icon"><i class="fas fa-check"></i></span>' : '<span class="icon incorrect-icon"><i class="fas fa-times"></i></span>'}
                            </div>
                            <div class="question-content">
                                <div class="question-text">${qIndex + 1}. ${question.text || question.question || questionTemplates[question.type]?.title || 'Activity'}</div>
                                ${renderUserAnswer(question, userAnswer)}
                                <div class="correct-answer">
                                    <span class="icon correct-icon"><i class="fas fa-lightbulb"></i></span>
                                    Correct answer: ${getCorrectAnswerText(question)}
                                </div>
                                <div class="explanation">
                                    <span class="icon"><i class="fas fa-info-circle"></i></span>
                                    ${question.explanation || 'No explanation provided.'}
                                </div>
                            </div>
                        </div>
                    `;
                });
                
                resultsHTML += `</div>`;
            });
            
            resultsHTML += `</div>`;
        });

        resultsHTML = `
            <div class="score-summary">
                <h3>Your Score: ${score}/${totalQuestions} (${Math.round((score/totalQuestions)*100)}%)</h3>
            </div>
        ` + resultsHTML;

        workbookContent.innerHTML = resultsHTML;
    }

    function printAnswerKey() {
        const originalContent = workbookContent.innerHTML;
        showResults();
        window.print();
        workbookContent.innerHTML = originalContent;
    }

    function checkAnswer(question, userAnswer) {
        if (!userAnswer) return false;
        
        if (question.type === 'multiple-choice') {
            return parseInt(userAnswer) === question.correctAnswer;
        } else if (question.type === 'true-false') {
            return userAnswer === String(question.correctAnswer);
        } else if (question.type === 'listening' || question.type === 'counting') {
            // For interactive questions, consider them correct if answered
            return true;
        }
        return true; // Free-response and other interactive questions are always marked correct
    }

    function getCorrectAnswerText(question) {
        if (question.type === 'multiple-choice') {
            return question.options[question.correctAnswer];
        } else if (question.type === 'true-false') {
            return question.correctAnswer ? 'True' : 'False';
        } else if (question.type === 'listening') {
            const correctOption = question.options.find(opt => opt.correct);
            return correctOption ? correctOption.text : 'N/A';
        } else if (question.type === 'counting') {
            return question.correctAnswer || 'N/A';
        }
        return 'N/A (interactive activity)';
    }

    function renderUserAnswer(question, userAnswer) {
        if (!userAnswer) return '<div class="user-answer">You did not answer this question.</div>';
        
        if (question.type === 'multiple-choice') {
            return `<div class="user-answer">Your answer: ${question.options[userAnswer] || 'Invalid'}</div>`;
        } else if (question.type === 'coloring') {
            return `<div class="user-answer">You colored this with: <span class="color-swatch" style="background-color: ${userAnswer}"></span></div>`;
        } else if (question.type === 'counting') {
            return `<div class="user-answer">You counted: ${userAnswer}</div>`;
        }
        return `<div class="user-answer">Your answer: ${userAnswer}</div>`;
    }

    function getWorkbookProgress(workbookId) {
        const workbook = window.workbooks.find(wb => wb.id === workbookId);
        if (!workbook) return 0;
        
        const saved = localStorage.getItem(`workbook_${workbookId}_answers`);
        if (!saved) return 0;
        
        const savedAnswers = JSON.parse(saved);
        let answeredQuestions = 0;
        let totalQuestions = 0;
        
        workbook.pages.forEach(page => {
            page.exercises.forEach(exercise => {
                exercise.questions.forEach((question, qIndex) => {
                    totalQuestions++;
                    const questionId = `${page.id}_${exercise.id}_${qIndex}`;
                    if (savedAnswers[page.id]?.[questionId]) answeredQuestions++;
                });
            });
        });
        
        return totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0;
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    function loadThemePreference() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    init();
});

// Workbook registration function (called by data files)
function registerWorkbook(workbookData) {
    if (!window.workbooks) window.workbooks = [];
    workbookData.registeredTime = Date.now();
    window.workbooks.push(workbookData);
}