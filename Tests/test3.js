function addPageBreaks() {
    const sections = document.querySelectorAll('.content-section'); // Select all content sections

    sections.forEach(section => {
        if (section.scrollHeight > section.clientHeight) {
            // If the content exceeds the height of the section, add a page break
            const pageBreak = document.createElement('div');
            pageBreak.classList.add('page-break');
            section.parentNode.insertBefore(pageBreak, section.nextSibling);
        }
    });
}
    
    // Function to format the class, subject, part, and term into the desired filename format
function generateFilename() {
    const className = document.getElementById('class-name').textContent;
    const subject = document.getElementById('subject').textContent;
    const part = document.getElementById('part').textContent;
    const term = document.getElementById('term').textContent;

    // Get the initials of the class (first letters of the two words)
    const classInitials = className
        .split(' ')
        .map(word => word.charAt(0))
        .join(''); // Example: Avian Aces -> AA

    // Get the first three letters of the subject
    const subjectInitials = subject.substring(0, 3); // Example: Science -> Sci

    // Get the initials of the part (e.g., Mid Term -> MT)
    const partInitials = part
        .split(' ')
        .map(word => word.charAt(0))
        .join(''); // Example: Mid Term -> MT

    // Extract the number from the term (e.g., Term 3 -> 3)
    const termNumber = term.match(/\d+/)[0]; // Example: Term 3 -> 3

    // Combine everything to form the filename
    return `${classInitials}${subjectInitials}${partInitials}${termNumber}`;
}
    
    





document.getElementById('printContent').addEventListener('click', () => {
    const answerKeyButton = document.getElementById('show-answer-key-btn');
    const savePDFButton = document.getElementById('savePDF');
    const classImages = document.getElementById('classImage');

    // Temporarily hide buttons and images
    answerKeyButton.style.display = 'none';
    savePDFButton.style.display = 'none';
    classImages.style.display = 'none';

    // Set a dynamic file name
    const filename = "MyDynamicFileName"; // Replace with your dynamic logic, e.g., `${filename}`
    const originalTitle = document.title;
    document.title = filename;

    // Add a short delay before triggering the print
    setTimeout(() => {
        window.print();
    }, 300); // 300 milliseconds delay

    // Restore the original title after printing
    setTimeout(() => {
        document.title = originalTitle;
    }, 1000); // Slightly longer delay to ensure print is complete
});

// Handle the print events to restore visibility after printing
window.addEventListener('afterprint', () => {
    const answerKeyButton = document.getElementById('show-answer-key-btn');
    const savePDFButton = document.getElementById('savePDF');
    const classImages = document.getElementById('classImage');

    // Restore buttons and images after printing
    answerKeyButton.style.display = 'block';
    savePDFButton.style.display = 'block';
    classImages.style.display = 'block';
});











// Function to save the dynamically loaded content with CSS, images, and canvas as a Word document
document.getElementById('savePDF').addEventListener('click', () => {
    const filename = generateFilename();
    const answerKeyButton = document.getElementById('show-answer-key-btn'); // Adjust ID as needed
    const savePDFButton = document.getElementById('savePDF');
    const classImages = document.getElementById('classImage');
    const answerKeyModal = document.getElementById('answer-key-modal'); // Modal containing the answer key
    const answerKeyContent = answerKeyModal.querySelector('.modal-content'); // The answer key content inside the modal

    // Hide the buttons
    answerKeyButton.style.display = 'none';
    savePDFButton.style.display = 'none';
    classImages.style.display = 'none';

    // Clone the body content dynamically
    const clone = document.documentElement.cloneNode(true);
    clone.querySelector('#show-answer-key-btn').style.display = 'block';
    clone.querySelector('#savePDF').style.display = 'block';
    clone.querySelector('#classImage').style.display = 'block';

    // Get all the stylesheets and inline styles
    let css = '';
    for (let i = 0; i < document.styleSheets.length; i++) {
        try {
            const rules = document.styleSheets[i].cssRules;
            for (let j = 0; j < rules.length; j++) {
                css += rules[j].cssText + '\n';
            }
        } catch (e) {
            console.warn('Cannot access CSS rules:', e);
        }
    }

    // Create a style element
    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    clone.querySelector('head').appendChild(styleElement);

    // Convert images to data URLs
    const images = clone.querySelectorAll('img');
    images.forEach((img) => {
        if (img.src && !img.src.startsWith('data:')) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
            img.src = canvas.toDataURL('image/png');
        }
    });

    // Convert canvas elements to images with their content
    const canvases = clone.querySelectorAll('canvas');
    canvases.forEach((canvas) => {
        const dataURL = canvas.toDataURL('image/png');
        const img = document.createElement('img');
        img.src = dataURL;
        img.width = canvas.width;
        img.height = canvas.height;
        canvas.replaceWith(img); // Replace the canvas with the image
    });

    // Create a Blob from the cloned content
    const htmlContent = '<!DOCTYPE html><html>' + clone.outerHTML + '</html>';
    const blob = new Blob(['\uFEFF' + htmlContent], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });

    // Save the file using a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${filename}.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Restore the buttons' visibility after saving
    answerKeyButton.style.display = 'block';
    savePDFButton.style.display = 'block';
    classImages.style.display = 'block';
});












    
    
    // Function to display the answer key in the modal
// Function to display the answer key in the modal, grouped by sections
function displayAnswerKey() {
    const answerKeyContainer = document.getElementById('answer-key-container');
    answerKeyContainer.innerHTML = ''; // Clear previous answers

    // Track added sections for answers
    const addedSectionsForAnswers = {
    "multiple_choice": false,
    "special": false,    
    "true_false": false,
    "oral": false,
    "sounds": false,
    "fill_in_the_blank": false,
    "matching": false,
    "one_word": false,
    "math": false,
    "number_comparison": false,
    "spellings_unique": false,
    "punctuations_unique": false, 
    "wordMeaning_unique": false,    
    "sentenceOrdering_unique": false,
    "comprehension": false,
    "image_based": false,
    "imaging": false,
    "maze": false,
    "crossword": false,
    "coloring": false,    
    "identification": false,        
    "tracing": false,
    "handwriting": false,
    "reading": false,
    "sudoku": false,
    "identity": false,
    "time": false,
    "wordSearchPuzzle": false,
    
    "objectMath": false,
    "numberLine": false,
    "numberTable": false
    };

    let answerSectionIdentifierText = "";

    // Loop through the questions to populate the answers
    questionsData.forEach((q, index) => {
        // Determine section identifier based on question type and whether it has been added
        if (!addedSectionsForAnswers[q.type]) {
            addedSectionsForAnswers[q.type] = true;

            switch (q.type) {
          case "multiple_choice":
          sectionIdentifierText = "Multiple Choice<br><em>Shade the correct option from the given choices.</em>";
          break;
                      
                      
          case "special":
          sectionIdentifierText = "Special Paper 2 <br><em>Identify the pattern carefully and tell the difference or sequence.</em>";
          break;
                        
          case "oral":
          sectionIdentifierText = "Oral<br><em>Respond to these questions orally.</em>";
          break;
                      
          case "true_false":
          sectionIdentifierText = "True or False<br><em>Select whether the statement is true or false by shading.</em>";
          break;

          case "sounds":
          sectionIdentifierText = "Sounds Questions<br><em>Fill in the missing sounds in the blank space with the correct sound from the bank.</em>";
          break;
                      
          case "fill_in_the_blank":
          sectionIdentifierText = "Fill in the Blanks<br><em>Fill in the missing word(s) in the blank space with the correct word from the bank.</em>";
          break;

          case "matching":
          sectionIdentifierText = "Matching Questions <br><em>Match the items from the two statements by writing the letter associated with the matching box.</em>";
          break;
                        
          case "one_word":
          sectionIdentifierText = "Solving<br><em>Solve the following questions</em>";
          break;
                        
          case "number_comparison":
          sectionIdentifierText = "Comparisons<br><em>Compare the given numbers.</em>";
          break;
                      
          case "math":
          sectionIdentifierText = "Arithmetics<br><em>Solve the following Math Expressions.</em>";
          break;
                        
        case "spellings_unique":
          sectionIdentifierText = "Spellings<br><em>Choose the correctly spelled word of the four given options.</em>";
          break;
                      
        case "punctuations_unique":
          sectionIdentifierText = "Punctuations<br><em>Choose the correctly punctuated sentence of the given four options.</em>";
          break;
                      
        case "wordMeaning_unique":
          sectionIdentifierText = "Word Meaning<br><em>Read the sentence given, choose the correct meaning of the word or phrase in quotes.</em>";
          break;
                      
        case "sentenceOrdering_unique":
          sectionIdentifierText = "Sentence Ordering<br><em>Write the sentence correctly by determining the correct order of words or clauses.</em>";
          break;
                      
          case "comprehension":
          sectionIdentifierText = "Comprehension <br><em>Read the story and answer the questions that follow</em>";
          break;
                        
          case "image_based":
          sectionIdentifierText = "Image Based <br><em>Carefully analyse the given image and answer the question that follow</em>";
          break;
                      
          case "imaging":
          sectionIdentifierText = "Imaging <br><em>Carefully analyse the given image and answer the questions that follow</em>";
          break;
                      
          case "maze":
          sectionIdentifierText = "Maze <br><em>Carefully find the path through the maze from start to finish.</em>";
          break;
                      
                        
          case "crossword":
          sectionIdentifierText = "Crossword <br><em>Read the clues given and fill in the puzzle with correct spellings in capital letters.</em>";
          break;
                      
          case "coloring":
          sectionIdentifierText = "Coloring <br><em>Carefully color the given work inside. Do not color outside the outlines.</em>";
          break;
                      
        case "identification":
          sectionIdentifierText = "Identification <br><em>Look at the given work and identify it.</em>";
          break;
                      
          case "tracing":
          sectionIdentifierText = "Tracing <br><em>Carefully trace the given work within the dotted outlines.</em>";
          break;
                        
          case "handwriting":
          sectionIdentifierText = "Handwriting <br><em>Carefully copy the text above in the space given following handwriting rules.</em>";
          break;
                        
          case "reading":
          sectionIdentifierText = "Reading <br><em>Carefully read the following words using sounding rules.</em>.";
          break;
        
          case "sudoku":
          sectionIdentifierText = "Sudoku <br><em>Solve the sudoku given below accurately.</em>";
          break;
        
          case "identity":
          sectionIdentifierText = "Identity <br><em>Solve the sudoku given below accurately.</em>";
          break;
        
          case "time":
          sectionIdentifierText = "Time <br><em>Write the time or show the time given.</em>";
          break;
        
          case "wordSearchPuzzle":
          sectionIdentifierText = "Word Search Puzzle <br><em>Solve the puzzle given below by circling all the hidden words.</em>";
          break;

          case "objectMath":
          sectionIdentifierText = "Object Math <br><em>Solve the puzzle given below by circling all the hidden words.</em>";
          break;
                       
          case "numberLine":
          sectionIdentifierText = "Number Line <br><em>Solve the arithmetic below using a number line.</em>";
          break;
                      
          case "numberTable":
          sectionIdentifierText = "Number Table <br><em>Number Table Section</em>";
          break;
                      
        default:
          sectionIdentifierText = "Section";
          break;
            }

            // Add section identifier for answers
            const answerSectionIdentifier = document.createElement('div');
            answerSectionIdentifier.classList.add('section-identifier');
            answerSectionIdentifier.innerHTML = `<strong>${answerSectionIdentifierText}</strong>`;
            answerKeyContainer.appendChild(answerSectionIdentifier);
        }

        // Display the answer for each question
        let answerText = "";
        switch (q.type) {
            case "multiple_choice":
                answerText = `${index + 1}. ${q.answer}`;
                break;
            
            case "true_false":
                answerText = `${index + 1}. ${q.answer}`;
                break;
            
            case "fill_in_the_blank":
                answerText = `${index + 1}. ${q.answer}`;
                break;
            
            case "matching":
                const matchingAnswers = q.pairs.map((pair, i) => {
                    const letter = String.fromCharCode(65 + i); // Use the assigned letters (A, B, C...)
                    return `${pair.question} (${letter}) - ${pair.answer}`; // Format: Question (Letter) - Answer
                }).join('<br>'); // Join answers with line breaks
                answerText = `${index + 1}. ${matchingAnswers}`;
                break;
            
            case "one_word":
                answerText = `${index + 1}. ${q.answer}`;
                break;
            
            case "comprehension":
                answerText = `${index + 1}. ${q.subanswer}`;
                break;
            
            default:
                break;
        }

        const answerDiv = document.createElement('div');
        answerDiv.innerHTML = answerText;
        answerKeyContainer.appendChild(answerDiv);
    });
}

// Open the modal when the button is clicked
document.getElementById('show-answer-key-btn').onclick = function() {
    displayAnswerKey(); // Populate the modal with answers
    document.getElementById('answer-key-modal').style.display = 'block'; // Show the modal
};

// Close the modal when the <span> (x) is clicked
document.querySelector('.close').onclick = function() {
    document.getElementById('answer-key-modal').style.display = 'none';
};

// Close the modal when clicking anywhere outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById('answer-key-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};





// Function to submit the answers to the server
function submitAnswers() {
    const studentName = document.getElementById('student-name').value; // Input for student's name
    const className = document.getElementById('class-name').textContent; // Get class name
    const subject = document.getElementById('subject').textContent; // Get subject
    const term = document.getElementById('term').textContent; // Get term
    const part = document.getElementById('part').textContent; // Get part
    const answers = []; // Array to hold user's answers
    const correctAnswers = []; // Array to hold correct answers

    // Assuming your questions data is stored in questionsData
    questionsData.forEach((question) => {
        const userAnswer = document.querySelector(`input[name='answer-${question.id}']:checked`);
        if (userAnswer) {
            answers.push(userAnswer.value); // User's answer
        } else {
            answers.push(''); // If no answer, push empty
        }
        correctAnswers.push(question.answer); // Store correct answer
    });

    const score = answers.reduce((total, answer, index) => {
        return total + (answer === correctAnswers[index] ? 1 : 0); // Increment score for correct answers
    }, 0);

    // Send data to the server using fetch API
    fetch('http://flyacade.com.preview.services/Teachers/submit_answers.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            student_name: studentName,
            class: className,
            subject: subject,
            term: term,
            part: part,
            answers: answers,
            correct_answers: correctAnswers,
            score: score
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle response (show results and quiz)
        function displayResults(data) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<h2>Your Score: ${data.score} / ${data.total_questions}</h2>`;

    // Display each question with the user's answer and correct answer
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear previous quiz

    data.answers.forEach((answer, index) => {
        const questionText = questionsData[index].question; // Assuming question text is stored in questionsData
        const correctAnswer = data.correct_answers[index];

        quizContainer.innerHTML += `
            <div class="question">
                <p>${questionText}</p>
                <p>Your Answer: ${answer}</p>
                <p>Correct Answer: ${correctAnswer}</p>
            </div>
        `;
    });
}
    })
    .catch(error => console.error('Error:', error));
}





// Function to handle form submission and display results
function handleSubmit() {
    // Collect all answers from the form
    const answers = {};
    let totalQuestions = 0;
    let correctAnswers = 0;
    
    // Loop through all questions to collect answers
    questionsData.forEach((question, index) => {
        totalQuestions++;
        const questionId = `answer-${question.id}`;
        let userAnswer = '';
        
        // Handle different question types
        if (question.type === 'multiple_choice' || question.type === 'true_false') {
            const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);
            userAnswer = selectedOption ? selectedOption.value : '';
        } 
        else if (question.type === 'fill_in_the_blank') {
            const inputField = document.getElementById(questionId);
            userAnswer = inputField ? inputField.value : '';
        }
        // Add more question type handlers as needed
        
        // Check if answer is correct
        const isCorrect = userAnswer === question.answer;
        if (isCorrect) correctAnswers++;
        
        // Store answer data
        answers[index] = {
            question: question.question,
            userAnswer: userAnswer,
            correctAnswer: question.answer,
            isCorrect: isCorrect
        };
    });
    
    // Calculate score
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Display results in modal
    displayResultsModal(answers, score, totalQuestions);
}

// Function to display results in a modal
function displayResultsModal(answers, score, totalQuestions) {
    const modal = document.getElementById('results-modal');
    const modalContent = document.getElementById('results-content');
    
    // Clear previous content
    modalContent.innerHTML = '';
    
    // Add score summary
    const summary = document.createElement('div');
    summary.className = 'results-summary';
    summary.innerHTML = `
        <h2>Quiz Results</h2>
        <p>Your Score: ${score}% (${correctAnswers} out of ${totalQuestions})</p>
        <div class="progress-bar">
            <div class="progress" style="width: ${score}%"></div>
        </div>
    `;
    modalContent.appendChild(summary);
    
    // Add detailed results
    const details = document.createElement('div');
    details.className = 'results-details';
    details.innerHTML = '<h3>Question Details:</h3>';
    
    for (const [index, answer] of Object.entries(answers)) {
        const questionDiv = document.createElement('div');
        questionDiv.className = `question-result ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        questionDiv.innerHTML = `
            <p><strong>Question ${parseInt(index) + 1}:</strong> ${answer.question}</p>
            <p>Your answer: ${answer.userAnswer || 'No answer provided'}</p>
            <p>Correct answer: ${answer.correctAnswer}</p>
        `;
        details.appendChild(questionDiv);
    }
    
    modalContent.appendChild(details);
    
    // Show the modal
    modal.style.display = 'block';
}

// Close modal when clicking the X button
document.querySelector('.results-close').addEventListener('click', function() {
    document.getElementById('results-modal').style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('results-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Add event listener to submit button
document.getElementById('submit-btn').addEventListener('click', handleSubmit);