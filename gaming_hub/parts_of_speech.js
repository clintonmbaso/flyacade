// Game state variables
        let currentQuestion = 0;
        let score = 0;
        let selectedAnswer = null;
        let timeLeft = 150; // Default 5 minutes
        let timerInterval = null;
        let userAnswers = [];
        let totalQuestions = 10; // Default value
        let allQuestions = [];
        let selectedQuestions = [];

        // DOM elements
        const welcomeScreen = document.getElementById('welcome-screen');
        const gameScreen = document.getElementById('game-screen');
        const resultsScreen = document.getElementById('results-screen');
        const loadingScreen = document.getElementById('loading-screen');
        const startBtn = document.getElementById('start-btn');
        const nextBtn = document.getElementById('next-btn');
        const playAgainBtn = document.getElementById('play-again-btn');
        const printBtn = document.getElementById('print-btn');
        const questionCountSelect = document.getElementById('question-count-select');
        const sentenceContainer = document.getElementById('sentence-container');
        const questionCount = document.getElementById('question-count');
        const scoreDisplay = document.getElementById('score');
        const progressBar = document.getElementById('progress');
        const feedback = document.getElementById('feedback');
        const finalScore = document.getElementById('final-score');
        const totalQuestionsDisplay = document.getElementById('total-questions');
        const resultsList = document.getElementById('results-list');
        const wordOptions = document.querySelectorAll('.word-option');
        const timerDisplay = document.getElementById('timer');

        // Event listeners
        startBtn.addEventListener('click', startGame);
        nextBtn.addEventListener('click', nextQuestion);
        playAgainBtn.addEventListener('click', resetGame);
        printBtn.addEventListener('click', printResults);
        questionCountSelect.addEventListener('change', updateGameSettings);

        // Add event listeners to word options
        wordOptions.forEach(option => {
            option.addEventListener('click', selectAnswer);
        });

        // Load questions from embedded data
        function loadQuestions() {
            try {
                showLoadingScreen();
                // Use the embedded questions data directly
                allQuestions = questionsData.questions;
                // Simulate loading time for better UX
                setTimeout(() => {
                    hideLoadingScreen();
                }, 500);
            } catch (error) {
                console.error('Error loading questions:', error);
                hideLoadingScreen();
                alert('Error loading questions. Please refresh the page to try again.');
            }
        }

        // Show loading screen
        function showLoadingScreen() {
            loadingScreen.style.display = 'block';
            welcomeScreen.classList.remove('active');
            gameScreen.classList.remove('active');
            resultsScreen.classList.remove('active');
            startBtn.disabled = true;
        }

        // Hide loading screen
        function hideLoadingScreen() {
            loadingScreen.style.display = 'none';
            welcomeScreen.classList.add('active');
            startBtn.disabled = false;
        }

        // Function to update game settings based on user selection
        function updateGameSettings() {
            totalQuestions = parseInt(questionCountSelect.value);
            timeLeft = totalQuestions * 10; // 30 seconds per question
            updateTimerDisplay();
        }

        // Function to select random questions from the pool
        function selectRandomQuestions() {
            // Create a copy of all questions to avoid modifying the original array
            const questionsCopy = [...allQuestions];
            selectedQuestions = [];
            
            // Select random questions without repetition
            for (let i = 0; i < totalQuestions && questionsCopy.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * questionsCopy.length);
                selectedQuestions.push(questionsCopy[randomIndex]);
                questionsCopy.splice(randomIndex, 1);
            }
            
            return selectedQuestions;
        }

        // Function to start the game
        async function startGame() {
            // Show loading screen while selecting questions
            showLoadingScreen();
            
            // Wait a moment to show the loading screen (simulates processing time)
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Update settings based on user selection
            updateGameSettings();
            
            // Select random questions
            selectRandomQuestions();
            
            // Reset game state
            currentQuestion = 0;
            score = 0;
            selectedAnswer = null;
            userAnswers = [];
            
            // Hide loading screen and show game screen
            hideLoadingScreen();
            welcomeScreen.classList.remove('active');
            gameScreen.classList.add('active');
            
            // Start timer and load first question
            startTimer();
            loadQuestion();
        }

        // Function to start the timer
        function startTimer() {
            updateTimerDisplay();
            
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    endGame();
                } else if (timeLeft <= 15) {
                    timerDisplay.classList.add('warning');
                }
            }, 1000);
        }

        // Function to update the timer display
        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        // Function to load a question
        function loadQuestion() {
            // Reset UI state
            resetUI();
            
            // Update progress
            questionCount.textContent = `Question ${currentQuestion + 1}/${totalQuestions}`;
            progressBar.style.width = `${((currentQuestion) / totalQuestions) * 100}%`;
            scoreDisplay.textContent = `Score: ${score}`;
            
            // Load sentence and highlighted word from selected questions
            sentenceContainer.innerHTML = selectedQuestions[currentQuestion].sentence;
            
            // Enable word options
            wordOptions.forEach(option => {
                option.style.pointerEvents = 'auto';
                option.classList.remove('selected', 'correct', 'incorrect');
            });
            
            // Hide feedback and disable next button
            feedback.className = 'feedback';
            feedback.style.display = 'none';
            nextBtn.disabled = true;
        }

        // Function to handle answer selection
        function selectAnswer(e) {
            // If we already selected an answer, do nothing
            if (selectedAnswer !== null) return;
            
            // Get the selected answer
            selectedAnswer = e.target.dataset.type;
            
            // Store the user's answer
            userAnswers[currentQuestion] = {
                selected: selectedAnswer,
                correct: selectedQuestions[currentQuestion].correctAnswer,
                sentence: selectedQuestions[currentQuestion].sentence,
                explanation: selectedQuestions[currentQuestion].explanation
            };
            
            // Highlight the selected option
            e.target.classList.add('selected');
            
            // Disable all options
            wordOptions.forEach(option => {
                option.style.pointerEvents = 'none';
            });
            
            // Check if the answer is correct
            const isCorrect = selectedAnswer === selectedQuestions[currentQuestion].correctAnswer;
            
            // Update score if correct
            if (isCorrect) {
                score++;
            }
            
            // Show feedback
            if (isCorrect) {
                feedback.textContent = `Correct! ${selectedQuestions[currentQuestion].explanation}`;
                feedback.className = 'feedback correct-feedback';
                e.target.classList.add('correct');
            } else {
                feedback.textContent = `Incorrect. ${selectedQuestions[currentQuestion].explanation}`;
                feedback.className = 'feedback incorrect-feedback';
                e.target.classList.add('incorrect');
                
                // Also highlight the correct answer
                wordOptions.forEach(option => {
                    if (option.dataset.type === selectedQuestions[currentQuestion].correctAnswer) {
                        option.classList.add('correct');
                    }
                });
            }
            
            feedback.style.display = 'block';
            nextBtn.disabled = false;
        }

        // Function to move to the next question
        function nextQuestion() {
            currentQuestion++;
            
            if (currentQuestion < totalQuestions) {
                loadQuestion();
                selectedAnswer = null;
            } else {
                endGame();
            }
        }

        // Function to end the game and show results
        function endGame() {
            clearInterval(timerInterval);
            gameScreen.classList.remove('active');
            resultsScreen.classList.add('active');
            
            // Update final score and total questions
            finalScore.textContent = score;
            totalQuestionsDisplay.textContent = totalQuestions;
            
            // Populate results list
            resultsList.innerHTML = '';
            for (let i = 0; i < totalQuestions; i++) {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                
                // Extract the highlighted word from the sentence
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = selectedQuestions[i].sentence;
                const highlightedWord = tempDiv.querySelector('.highlighted-word').textContent;
                
                // Check if user answered this question
                const userAnswer = userAnswers[i] ? userAnswers[i].selected : 'Not answered';
                const isCorrect = userAnswers[i] ? userAnswers[i].selected === selectedQuestions[i].correctAnswer : false;
                
                resultItem.innerHTML = `
                    <span>${highlightedWord}</span>
                    <span>${selectedQuestions[i].correctAnswer}</span>
                    <span>${userAnswer}</span>
                    <span style="color: ${isCorrect ? 'var(--correct)' : 'var(--incorrect)'}">
                        ${isCorrect ? '✓' : '✗'}
                    </span>
                `;
                
                resultsList.appendChild(resultItem);
            }
        }

        // Function to reset the game
        function resetGame() {
            currentQuestion = 0;
            score = 0;
            selectedAnswer = null;
            timeLeft = totalQuestions * 30;
            userAnswers = [];
            
            timerDisplay.classList.remove('warning');
            updateTimerDisplay();
            
            resultsScreen.classList.remove('active');
            welcomeScreen.classList.add('active');
        }

        // Function to reset UI elements
        function resetUI() {
            wordOptions.forEach(option => {
                option.classList.remove('selected', 'correct', 'incorrect');
            });
            
            feedback.className = 'feedback';
            feedback.style.display = 'none';
            nextBtn.disabled = true;
        }

        // Function to print results
        function printResults() {
            window.print();
        }

        // Initialize the game when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            loadQuestions();
        });