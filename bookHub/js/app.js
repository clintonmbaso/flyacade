// Main Application Controller
class LearningHub {
    constructor() {
        // App State
        this.state = {
            currentGrade: '1',
            currentSubject: null,
            currentTopic: null,
            currentLesson: null,
            mediaIndex: 0,
            bookmarks: [],
            settings: {
                theme: 'default',
                dyslexiaFont: false,
                highContrast: false,
                textToSpeech: false
            }
        };
        
        // DOM Elements
        this.elements = {
            gradeButtons: document.querySelectorAll('.grade-btn'),
            subjectList: document.querySelector('.subject-list'),
            lessonContent: document.querySelector('.lesson-main-content'),
            mediaContent: document.querySelector('.media-content'),
            mediaCounter: document.querySelector('.media-counter'),
            mediaPrev: document.querySelector('.media-prev'),
            mediaNext: document.querySelector('.media-next'),
            breadcrumbList: document.querySelector('.breadcrumb-list'),
            prevLessonBtn: document.querySelector('.prev-lesson'),
            nextLessonBtn: document.querySelector('.next-lesson'),
            progressFill: document.querySelector('.progress-fill'),
            progressText: document.querySelector('.progress-text'),
            bookmarkBtn: document.getElementById('bookmark-btn'),
            printBtn: document.getElementById('print-btn'),
            settingsBtn: document.getElementById('settings-btn'),
            helpBtn: document.getElementById('help-btn'),
            settingsModal: document.getElementById('settings-modal'),
            helpModal: document.getElementById('help-modal'),
            activityPanels: document.querySelectorAll('.activity-panel'),
            activityTabs: document.querySelectorAll('.activity-tab')
        };
        
        // Initialize the app
        this.init();
    }
    
    init() {
    // Load saved state from localStorage
    this.loadState();
    
    // Apply saved settings
    this.applySettings();
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Set up mobile menu
    this.setupMobileMenu();
    
    // Load initial content (default to Grade 1)
    this.loadGrade(this.state.currentGrade);
}
    
    loadState() {
        const savedState = localStorage.getItem('learningHubState');
        if (savedState) {
            this.state = JSON.parse(savedState);
        }
    }
    
    saveState() {
        localStorage.setItem('learningHubState', JSON.stringify(this.state));
    }
    
    applySettings() {
        // Apply theme
        document.documentElement.setAttribute('data-theme', this.state.settings.theme);
        
        // Apply dyslexia font
        if (this.state.settings.dyslexiaFont) {
            document.body.classList.add('dyslexia-mode');
        } else {
            document.body.classList.remove('dyslexia-mode');
        }
        
        // Apply high contrast
        if (this.state.settings.highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
    }
    
    setupEventListeners() {
        // Grade selection
        this.elements.gradeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const grade = btn.dataset.grade;
                this.loadGrade(grade);
                
                // Update active state
                this.elements.gradeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Collapse sidebar button (desktop)
const collapseBtn = document.getElementById('collapse-sidebar');
if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
        if (window.innerWidth >= 769) {
            document.querySelector('.subject-sidebar').classList.toggle('collapsed');
            document.querySelector('.main-content').classList.toggle('sidebar-collapsed');
        }
    });
}
        
        
        // Media navigation
        this.elements.mediaPrev.addEventListener('click', () => this.prevMedia());
        this.elements.mediaNext.addEventListener('click', () => this.nextMedia());
        
        // Lesson navigation
        this.elements.prevLessonBtn.addEventListener('click', () => this.prevLesson());
        this.elements.nextLessonBtn.addEventListener('click', () => this.nextLesson());
        
        // Bookmark button
        this.elements.bookmarkBtn.addEventListener('click', () => this.toggleBookmark());
        
        // Print button
        this.elements.printBtn.addEventListener('click', () => window.print());
        
        // Settings button
        this.elements.settingsBtn.addEventListener('click', () => this.openModal('settings'));
        
        // Help button
        this.elements.helpBtn.addEventListener('click', () => this.openModal('help'));
        
        // Modal close buttons
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', () => this.closeModal());
        });
        
        // Save settings button
        document.getElementById('save-settings').addEventListener('click', () => this.saveSettings());
        
        // Theme selection
        document.querySelectorAll('.theme-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.theme-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                option.classList.add('active');
                this.state.settings.theme = option.dataset.theme;
            });
        });
        
        // Activity tabs
        this.elements.activityTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                
                // Update active tab
                this.elements.activityTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Show corresponding panel
                this.elements.activityPanels.forEach(panel => {
                    panel.classList.remove('active');
                    if (panel.dataset.tab === tabName) {
                        panel.classList.add('active');
                    }
                });
            });
        });
        
        // Mark checkbox states in settings modal
        document.getElementById('dyslexia-font').checked = this.state.settings.dyslexiaFont;
        document.getElementById('high-contrast').checked = this.state.settings.highContrast;
        document.getElementById('text-to-speech').checked = this.state.settings.textToSpeech;
        
        // Set active theme in settings modal
        document.querySelector(`.theme-option[data-theme="${this.state.settings.theme}"]`).classList.add('active');
    }
    
    openModal(modalType) {
        if (modalType === 'settings') {
            this.elements.settingsModal.classList.add('active');
        } else if (modalType === 'help') {
            this.elements.helpModal.classList.add('active');
        }
    }
    
    closeModal() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
    }
    
    saveSettings() {
        this.state.settings.dyslexiaFont = document.getElementById('dyslexia-font').checked;
        this.state.settings.highContrast = document.getElementById('high-contrast').checked;
        this.state.settings.textToSpeech = document.getElementById('text-to-speech').checked;
        
        this.applySettings();
        this.saveState();
        this.closeModal();
    }
    
    getGradeData(grade) {
    const dataMap = {
        'prek': window.gradePreKData || {},
        'k': window.gradeKData || {},
        '1': window.grade1Data || {},
        '2': window.grade2Data || {},
        '3': window.grade3Data || {}
    };
    return dataMap[grade] || {};
}
    
    loadGrade(grade) {
        this.state.currentGrade = grade;
        this.state.currentSubject = null;
        this.state.currentTopic = null;
        this.state.currentLesson = null;
        
        // Get the grade data
        const gradeData = this.getGradeData(grade);
        
        // Populate subject list
        this.populateSubjectList(gradeData);
        
        // Clear lesson content
        this.clearLessonContent();
        
        // Save state
        this.saveState();
    }
    
    populateSubjectList(gradeData) {
        this.elements.subjectList.innerHTML = '';
        
        for (const subject in gradeData) {
            const subjectItem = document.createElement('li');
            subjectItem.className = 'subject-item';
            subjectItem.innerHTML = `
                <i class="fas ${this.getSubjectIcon(subject)}"></i>
                <span>${this.formatSubjectName(subject)}</span>
            `;
            
            subjectItem.addEventListener('click', () => {
                this.loadSubject(subject, gradeData[subject]);
                
                // Update active state
                document.querySelectorAll('.subject-item').forEach(item => {
                    item.classList.remove('active');
                });
                subjectItem.classList.add('active');
            });
            
            this.elements.subjectList.appendChild(subjectItem);
        }
    }
    
    getSubjectIcon(subject) {
        const icons = {
            math: 'fa-calculator',
            science: 'fa-flask',
            language: 'fa-language',
            reading: 'fa-book-open',
            writing: 'fa-pen-fancy',
            history: 'fa-landmark',
            geography: 'fa-globe-americas',
            arts: 'fa-palette',
            music: 'fa-music'
        };
        
        return icons[subject.toLowerCase()] || 'fa-book';
    }
    
    formatSubjectName(subject) {
        return subject.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    }
    
    loadSubject(subject, subjectData) {
        this.state.currentSubject = subject;
        this.state.currentTopic = null;
        this.state.currentLesson = null;
        
        // Update breadcrumb
        this.updateBreadcrumbs();
        
        // Load the first topic
        const firstTopic = subjectData.topics[0];
        if (firstTopic) {
            this.loadTopic(firstTopic.id, subjectData);
        }
        
        // Save state
        this.saveState();
    }
    
    loadTopic(topicId, subjectData) {
        const topic = subjectData.topics.find(t => t.id === topicId);
        if (!topic) return;
        
        this.state.currentTopic = topic;
        this.state.currentLesson = null;
        
        // Update breadcrumb
        this.updateBreadcrumbs();
        
        // Load the first lesson
        const firstLesson = topic.lessons[0];
        if (firstLesson) {
            this.loadLesson(firstLesson.id, topic);
        }
    }
    
    loadLesson(lessonId, topic) {
        const lesson = topic.lessons.find(l => l.id === lessonId);
        if (!lesson) return;
        
        this.state.currentLesson = lesson;
        this.state.mediaIndex = 0;
        
        // Update breadcrumb
        this.updateBreadcrumbs();
        
        // Render lesson content
        this.renderLessonContent(lesson);
        
        // Render media
        this.renderMedia(lesson.media);
        
        // Update progress
        this.updateProgress();
        
        // Update bookmark button
        this.updateBookmarkButton();
        
        // Load activities
        this.loadActivities(lesson.activities);
        
        // Save state
        this.saveState();
    }
    
    renderLessonContent(lesson) {
        // Clear existing content
        this.elements.lessonContent.innerHTML = '';
        
        // Create lesson container
        const lessonContainer = document.createElement('div');
        lessonContainer.className = 'markdown-content fade-in';
        
        // Use marked.js to render markdown content
        lessonContainer.innerHTML = marked.parse(lesson.content);
        
        // Add to DOM
        this.elements.lessonContent.appendChild(lessonContainer);
        
        // Apply text-to-speech if enabled
        if (this.state.settings.textToSpeech) {
            this.speakContent(lesson.content);
        }
    }
    
    speakContent(content) {
        // Remove markdown formatting for speech
        const plainText = content.replace(/[#*`\[\]]/g, '');
        
        // Cancel any ongoing speech
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }
        
        // Create and speak utterance
        const utterance = new SpeechSynthesisUtterance(plainText);
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
    
    renderMedia(media) {
        this.elements.mediaContent.innerHTML = '';
        
        if (!media || (!media.images && !media.videos && !media.animations)) {
            this.elements.mediaContent.innerHTML = `
                <div class="no-media">
                    <i class="fas fa-image"></i>
                    <p>No media available for this lesson</p>
                </div>
            `;
            this.elements.mediaCounter.textContent = '0/0';
            return;
        }
        
        // Combine all media items
        const mediaItems = [
            ...(media.images || []).map(img => ({ type: 'image', src: `assets/images/${img}` })),
            ...(media.videos || []).map(vid => ({ type: 'video', src: `assets/videos/${vid}` })),
            ...(media.animations || []).map(anim => ({ type: 'image', src: `assets/images/${anim}` }))
        ];
        
        if (mediaItems.length === 0) {
            this.elements.mediaContent.innerHTML = `
                <div class="no-media">
                    <i class="fas fa-image"></i>
                    <p>No media available for this lesson</p>
                </div>
            `;
            this.elements.mediaCounter.textContent = '0/0';
            return;
        }
        
        // Show the first media item
        this.showMediaItem(mediaItems[0]);
        
        // Update counter
        this.elements.mediaCounter.textContent = `1/${mediaItems.length}`;
        
        // Store media items for navigation
        this.state.mediaItems = mediaItems;
        this.state.mediaIndex = 0;
    }
    
    showMediaItem(mediaItem) {
        this.elements.mediaContent.innerHTML = '';
        
        if (mediaItem.type === 'image') {
            const img = document.createElement('img');
            img.src = mediaItem.src;
            img.alt = 'Lesson illustration';
            this.elements.mediaContent.appendChild(img);
        } else if (mediaItem.type === 'video') {
            const video = document.createElement('video');
            video.src = mediaItem.src;
            video.controls = true;
            this.elements.mediaContent.appendChild(video);
        }
    }
    
    prevMedia() {
        if (!this.state.mediaItems || this.state.mediaItems.length === 0) return;
        
        this.state.mediaIndex--;
        if (this.state.mediaIndex < 0) {
            this.state.mediaIndex = this.state.mediaItems.length - 1;
        }
        
        this.showMediaItem(this.state.mediaItems[this.state.mediaIndex]);
        this.elements.mediaCounter.textContent = `${this.state.mediaIndex + 1}/${this.state.mediaItems.length}`;
    }
    
    nextMedia() {
        if (!this.state.mediaItems || this.state.mediaItems.length === 0) return;
        
        this.state.mediaIndex++;
        if (this.state.mediaIndex >= this.state.mediaItems.length) {
            this.state.mediaIndex = 0;
        }
        
        this.showMediaItem(this.state.mediaItems[this.state.mediaIndex]);
        this.elements.mediaCounter.textContent = `${this.state.mediaIndex + 1}/${this.state.mediaItems.length}`;
    }
    
    updateBreadcrumbs() {
        this.elements.breadcrumbList.innerHTML = '';
        
        // Grade breadcrumb
        const gradeItem = document.createElement('li');
        gradeItem.innerHTML = `
            <a class="breadcrumb-link" data-type="grade" data-value="${this.state.currentGrade}">
                Grade ${this.state.currentGrade}
            </a>
        `;
        this.elements.breadcrumbList.appendChild(gradeItem);
        
        // Subject breadcrumb (if selected)
        if (this.state.currentSubject) {
            const subjectItem = document.createElement('li');
            subjectItem.innerHTML = `
                <a class="breadcrumb-link" data-type="subject" data-value="${this.state.currentSubject}">
                    ${this.formatSubjectName(this.state.currentSubject)}
                </a>
            `;
            this.elements.breadcrumbList.appendChild(subjectItem);
        }
        
        // Topic breadcrumb (if selected)
        if (this.state.currentTopic) {
            const topicItem = document.createElement('li');
            topicItem.innerHTML = `
                <a class="breadcrumb-link" data-type="topic" data-value="${this.state.currentTopic.id}">
                    ${this.state.currentTopic.title}
                </a>
            `;
            this.elements.breadcrumbList.appendChild(topicItem);
        }
        
        // Lesson breadcrumb (if selected)
        if (this.state.currentLesson) {
            const lessonItem = document.createElement('li');
            lessonItem.innerHTML = `
                <a class="breadcrumb-link active">
                    ${this.state.currentLesson.title}
                </a>
            `;
            this.elements.breadcrumbList.appendChild(lessonItem);
        }
        
        // Add event listeners to breadcrumbs
        document.querySelectorAll('.breadcrumb-link[data-type]').forEach(link => {
            link.addEventListener('click', (e) => {
                const type = link.dataset.type;
                const value = link.dataset.value;
                
                if (type === 'grade') {
                    this.loadGrade(value);
                } else if (type === 'subject') {
                    const gradeData = this.getGradeData(this.state.currentGrade);
                    if (gradeData && gradeData[value]) {
                        this.loadSubject(value, gradeData[value]);
                    }
                } else if (type === 'topic') {
                    const subjectData = this.getGradeData(this.state.currentGrade)[this.state.currentSubject];
                    this.loadTopic(value, subjectData);
                }
            });
        });
    }
    
    prevLesson() {
        if (!this.state.currentTopic) return;
        
        const currentIndex = this.state.currentTopic.lessons.findIndex(
            l => l.id === this.state.currentLesson.id
        );
        
        if (currentIndex > 0) {
            const prevLesson = this.state.currentTopic.lessons[currentIndex - 1];
            this.loadLesson(prevLesson.id, this.state.currentTopic);
        } else {
            // If this is the first lesson, go to previous topic if exists
            const gradeData = this.getGradeData(this.state.currentGrade);
            const subjectData = gradeData[this.state.currentSubject];
            const topicIndex = subjectData.topics.findIndex(
                t => t.id === this.state.currentTopic.id
            );
            
            if (topicIndex > 0) {
                const prevTopic = subjectData.topics[topicIndex - 1];
                this.loadTopic(prevTopic.id, subjectData);
            }
        }
    }
    
    nextLesson() {
        if (!this.state.currentTopic) return;
        
        const currentIndex = this.state.currentTopic.lessons.findIndex(
            l => l.id === this.state.currentLesson.id
        );
        
        if (currentIndex < this.state.currentTopic.lessons.length - 1) {
            const nextLesson = this.state.currentTopic.lessons[currentIndex + 1];
            this.loadLesson(nextLesson.id, this.state.currentTopic);
        } else {
            // If this is the last lesson, go to next topic if exists
            const gradeData = this.getGradeData(this.state.currentGrade);
            const subjectData = gradeData[this.state.currentSubject];
            const topicIndex = subjectData.topics.findIndex(
                t => t.id === this.state.currentTopic.id
            );
            
            if (topicIndex < subjectData.topics.length - 1) {
                const nextTopic = subjectData.topics[topicIndex + 1];
                this.loadTopic(nextTopic.id, subjectData);
            }
        }
    }
    
    updateProgress() {
        if (!this.state.currentTopic || !this.state.currentLesson) {
            this.elements.progressFill.style.width = '0%';
            this.elements.progressText.textContent = '0% Complete';
            return;
        }
        
        const lessonIndex = this.state.currentTopic.lessons.findIndex(
            l => l.id === this.state.currentLesson.id
        );
        const progressPercent = Math.round(
            (lessonIndex + 1) / this.state.currentTopic.lessons.length * 100
        );
        
        this.elements.progressFill.style.width = `${progressPercent}%`;
        this.elements.progressText.textContent = `${progressPercent}% Complete`;
        
        // Update circular progress in header
        const circleFill = document.querySelector('.circle-fill');
        circleFill.setAttribute('stroke-dasharray', `${progressPercent}, 100`);
        document.querySelector('.progress-text').textContent = `${progressPercent}%`;
    }
    
    toggleBookmark() {
        if (!this.state.currentLesson) return;
        
        const bookmarkKey = `${this.state.currentGrade}-${this.state.currentSubject}-${this.state.currentTopic.id}-${this.state.currentLesson.id}`;
        const bookmarkIndex = this.state.bookmarks.findIndex(b => b.key === bookmarkKey);
        
        if (bookmarkIndex === -1) {
            // Add bookmark
            this.state.bookmarks.push({
                key: bookmarkKey,
                grade: this.state.currentGrade,
                subject: this.state.currentSubject,
                topicId: this.state.currentTopic.id,
                lessonId: this.state.currentLesson.id,
                title: this.state.currentLesson.title,
                date: new Date().toISOString()
            });
        } else {
            // Remove bookmark
            this.state.bookmarks.splice(bookmarkIndex, 1);
        }
        
        this.updateBookmarkButton();
        this.saveState();
    }
    
    updateBookmarkButton() {
        if (!this.state.currentLesson) {
            this.elements.bookmarkBtn.style.display = 'none';
            return;
        }
        
        this.elements.bookmarkBtn.style.display = 'block';
        const bookmarkKey = `${this.state.currentGrade}-${this.state.currentSubject}-${this.state.currentTopic.id}-${this.state.currentLesson.id}`;
        const isBookmarked = this.state.bookmarks.some(b => b.key === bookmarkKey);
        
        if (isBookmarked) {
            this.elements.bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
            this.elements.bookmarkBtn.title = 'Remove bookmark';
        } else {
            this.elements.bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i>';
            this.elements.bookmarkBtn.title = 'Bookmark this lesson';
        }
    }
    
    loadActivities(activities) {
        const practicePanel = document.querySelector('.activity-panel[data-tab="practice"]');
        const quizPanel = document.querySelector('.activity-panel[data-tab="quiz"]');
        const gamesPanel = document.querySelector('.activity-panel[data-tab="games"]');
        
        // Clear existing activities
        practicePanel.innerHTML = '';
        quizPanel.innerHTML = '';
        gamesPanel.innerHTML = '';
        
        if (!activities || activities.length === 0) {
            practicePanel.innerHTML = '<p>No activities available for this lesson.</p>';
            return;
        }
        
        // Group activities by type
        const practiceActivities = activities.filter(a => a.type === 'practice');
        const quizActivities = activities.filter(a => a.type === 'quiz');
        const gameActivities = activities.filter(a => a.type === 'game');
        
        // Load practice activities
        if (practiceActivities.length > 0) {
            practiceActivities.forEach((activity, index) => {
                const activityEl = document.createElement('div');
                activityEl.className = 'practice-activity slide-up';
                activityEl.style.animationDelay = `${index * 0.1}s`;
                activityEl.innerHTML = `
                    <h4>${activity.title || 'Practice Activity'}</h4>
                    <p>${activity.instructions || 'Complete the following practice exercises.'}</p>
                    <div class="activity-content"></div>
                `;
                practicePanel.appendChild(activityEl);
                
                // Implement specific activity types
                if (activity.content) {
                    activityEl.querySelector('.activity-content').innerHTML = marked.parse(activity.content);
                }
            });
        } else {
            practicePanel.innerHTML = '<p>No practice activities for this lesson.</p>';
        }
        
        // Load quiz activities
        if (quizActivities.length > 0) {
            quizActivities.forEach((activity, index) => {
                const activityEl = document.createElement('div');
                activityEl.className = 'quiz-activity slide-up';
                activityEl.style.animationDelay = `${index * 0.1}s`;
                activityEl.innerHTML = `
                    <h4>${activity.title || 'Quiz'}</h4>
                    <p>${activity.instructions || 'Test your knowledge with these questions.'}</p>
                `;
                quizPanel.appendChild(activityEl);
                
                // Add questions
                if (activity.questions && activity.questions.length > 0) {
                    activity.questions.forEach((question, qIndex) => {
                        const questionEl = document.createElement('div');
                        questionEl.className = 'quiz-question';
                        questionEl.innerHTML = `
                            <h5>Question ${qIndex + 1}</h5>
                            <p>${question.question}</p>
                            <div class="quiz-options"></div>
                        `;
                        
                        // Add options
                        const optionsContainer = questionEl.querySelector('.quiz-options');
                        question.options.forEach((option, oIndex) => {
                            const optionEl = document.createElement('div');
                            optionEl.className = 'quiz-option';
                            optionEl.textContent = option;
                            optionEl.addEventListener('click', () => {
                                this.checkAnswer(questionEl, optionEl, oIndex === question.answer);
                            });
                            optionsContainer.appendChild(optionEl);
                        });
                        
                        activityEl.appendChild(questionEl);
                    });
                }
            });
        } else {
            quizPanel.innerHTML = '<p>No quiz for this lesson.</p>';
        }
        
        // Load game activities
        if (gameActivities.length > 0) {
            gameActivities.forEach((activity, index) => {
                const activityEl = document.createElement('div');
                activityEl.className = 'game-activity slide-up';
                activityEl.style.animationDelay = `${index * 0.1}s`;
                activityEl.innerHTML = `
                    <h4>${activity.title || 'Learning Game'}</h4>
                    <p>${activity.instructions || 'Have fun while learning!'}</p>
                `;
                gamesPanel.appendChild(activityEl);
                
                // Implement specific game types
                if (activity.type === 'drag-drop') {
                    this.setupDragDropGame(activityEl, activity);
                }
            });
        } else {
            gamesPanel.innerHTML = '<p>No games for this lesson.</p>';
        }
    }
    
    checkAnswer(questionEl, optionEl, isCorrect) {
        // Remove any existing feedback
        questionEl.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('correct', 'incorrect');
        });
        
        // Add appropriate class
        if (isCorrect) {
            optionEl.classList.add('correct');
        } else {
            optionEl.classList.add('incorrect');
        }
    }
    
    setupDragDropGame(container, gameData) {
        const gameContainer = document.createElement('div');
        gameContainer.className = 'drag-drop-activity';
        gameContainer.innerHTML = `
            <p>${gameData.description || 'Drag the items to match the correct pairs.'}</p>
            <div class="drag-container">
                <div class="drag-source">
                    <h5>Items</h5>
                </div>
                <div class="drag-target">
                    <h5>Matches</h5>
                </div>
            </div>
        `;
        container.appendChild(gameContainer);
        
        const sourceContainer = gameContainer.querySelector('.drag-source');
        const targetContainer = gameContainer.querySelector('.drag-target');
        
        // Add drag items
        if (gameData.items && gameData.matches) {
            gameData.items.forEach((item, index) => {
                const dragItem = document.createElement('div');
                dragItem.className = 'drag-item';
                dragItem.textContent = item;
                dragItem.draggable = true;
                dragItem.dataset.index = index;
                
                dragItem.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', index);
                    dragItem.classList.add('dragging');
                });
                
                dragItem.addEventListener('dragend', () => {
                    dragItem.classList.remove('dragging');
                });
                
                sourceContainer.appendChild(dragItem);
            });
            
            // Set up drop targets
            targetContainer.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
            
            targetContainer.addEventListener('drop', (e) => {
                e.preventDefault();
                const itemIndex = e.dataTransfer.getData('text/plain');
                const dragItem = sourceContainer.querySelector(`.drag-item[data-index="${itemIndex}"]`);
                
                if (dragItem) {
                    // Check if the drop is correct (simplified for this example)
                    const isCorrect = true; // In a real app, you'd check against gameData.matches
                    
                    if (isCorrect) {
                        targetContainer.appendChild(dragItem);
                        dragItem.classList.add('correct');
                    } else {
                        dragItem.classList.add('incorrect');
                        setTimeout(() => {
                            dragItem.classList.remove('incorrect');
                        }, 1000);
                    }
                }
            });
        }
    }
    
    
    setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('.subject-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const collapseBtn = document.getElementById('collapse-sidebar');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    if (collapseBtn) {
        collapseBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    // Close sidebar when a subject is clicked on mobile
    const subjectItems = document.querySelectorAll('.subject-item');
    subjectItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 769) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    });
}
    
    
    
    clearLessonContent() {
        this.elements.lessonContent.innerHTML = '<p>Select a subject to begin learning.</p>';
        this.elements.mediaContent.innerHTML = '';
        this.elements.mediaCounter.textContent = '0/0';
        
        // Clear activities
        document.querySelectorAll('.activity-panel').forEach(panel => {
            panel.innerHTML = '<p>Activities will appear here when a lesson is selected.</p>';
        });
        
        // Clear breadcrumbs
        this.updateBreadcrumbs();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new LearningHub();
    
    // Expose app to console for debugging
    window.app = app;
});