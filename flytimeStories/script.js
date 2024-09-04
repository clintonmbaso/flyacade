document.addEventListener('DOMContentLoaded', () => {
    function loadStoryPart(part) {
        const script = document.createElement('script');
        script.src = `storyPart${part}.js`;
        script.onload = () => {
            openTab(`part${part}`);
        };
        document.head.appendChild(script);
    }

    function openTab(tabId) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // Remove active class from all buttons
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.remove('active');
        });

        // Show the clicked tab and add active class to the button
        const tab = document.getElementById(tabId);
        if (tabId === 'part1') {
            tab.innerHTML = storyTextPart1;
        } else if (tabId === 'part2') {
            tab.innerHTML = storyTextPart2;
        } else if (tabId === 'part3') {
            tab.innerHTML = storyTextPart3;
        } else if (tabId === 'part4') {
            tab.innerHTML = storyTextPart4;
        } else if (tabId === 'part5') {
            tab.innerHTML = storyTextPart5;
        } else if (tabId === 'part6') {
            tab.innerHTML = storyTextPart6;
        } else if (tabId === 'part7') {
            tab.innerHTML = storyTextPart7;
        } else if (tabId === 'part8') {
            tab.innerHTML = storyTextPart8;
        } else if (tabId === 'part9') {
            tab.innerHTML = storyTextPart9;
        } else if (tabId === 'part10') {
            tab.innerHTML = storyTextPart10;
        }
        tab.classList.add('active');
        document.querySelector(`.tab-button[onclick="openTab('${tabId}')"]`).classList.add('active');
    }

    // Event listener for tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const tabId = e.target.getAttribute('onclick').match(/'(.+)'/)[1];
            if (!document.getElementById(tabId).innerHTML) {
                loadStoryPart(tabId.replace('part', ''));
            } else {
                openTab(tabId);
            }
        });
    });

    // Read aloud functionality
    const readAloudButton = document.getElementById('read-aloud');
    const audioPlayer = document.getElementById('audio-player');

    readAloudButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });

    // Interactive elements functionality
    document.querySelectorAll('.interactive').forEach(element => {
        element.addEventListener('click', () => {
            alert(element.dataset.info);
        });
    });

    // Load quiz questions
    loadQuizQuestions();

    // Quiz modal
    const quizButton = document.getElementById('quiz-button');
    const quizModal = document.getElementById('quiz-modal');
    const closeButtons = document.querySelectorAll('.modal .close');
    const quizResult = document.getElementById('quiz-result');

    quizButton.addEventListener('click', () => {
        quizModal.style.display = 'block';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            quizModal.style.display = 'none';
            drawingCanvas.style.display = 'none';
        });
    });

    document.getElementById('quiz-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let score = 0;

        quizQuestions.forEach((q, index) => {
            if (formData.get(`question${index + 1}`) === q.correctAnswer) score++;
        });

        const resultText = `You scored ${score} out of ${quizQuestions.length}!`;
        quizResult.innerHTML = `<h3>${resultText}</h3><p>${score === quizQuestions.length ? "Excellent job!" : "Try again!"}</p>`;

        // Play sound and vibrate if supported
        const audio = new Audio(score === quizQuestions.length ? 'success-sound.mp3' : 'fail-sound.mp3');
        audio.play();

        if (navigator.vibrate) {
            navigator.vibrate(score === quizQuestions.length ? [200, 100, 200] : [200]);
        }
    });

    // Drawing canvas
    const drawingButton = document.getElementById('drawing-button');
    const drawingCanvas = document.getElementById('drawing-canvas');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        }

       canvas.addEventListener('mousedown', startPosition);
       canvas.addEventListener('mouseup', endPosition);
       canvas.addEventListener('mousemove', draw);

       document.getElementById('clear-canvas').addEventListener('click', () => {
           ctx.clearRect(0, 0, canvas.width, canvas.height);
       });

       // Initially load Part 1
       loadStoryPart(1);
   });