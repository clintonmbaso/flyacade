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
    
    


// Function to save the entire page content as a Word document, including the answer key
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

    // Clone the answer key content and append it to the body temporarily for Word document generation
    const answerKeyClone = answerKeyContent.cloneNode(true); // Clone the answer key content
    answerKeyClone.style.display = 'block'; // Make sure the answer key is visible in the Word document
    document.body.appendChild(answerKeyClone); // Append answer key after the rest of the content

    const content = document.body.innerHTML; // Get the entire body content
    const blob = new Blob(['\ufeff' + content], {
        type: 'application/msword'
    });
    saveAs(blob, `${filename}.doc`); // Save as a Word document

    // Remove the answer key from the page after saving the Word document
    answerKeyClone.remove();

    // Restore the hidden buttons after saving the Word document
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
        "true_false": false,
        "one_word": false,
        "fill_in_the_blank": false,
        "matching": false
    };

    let answerSectionIdentifierText = "";

    // Loop through the questions to populate the answers
    questionsData.forEach((q, index) => {
        // Determine section identifier based on question type and whether it has been added
        if (!addedSectionsForAnswers[q.type]) {
            addedSectionsForAnswers[q.type] = true;

            switch (q.type) {
        case "multiple_choice":
    sectionIdentifierText = "Multiple Choice";
    break;

        case "true_false":
    sectionIdentifierText = "True or False";
    break;

        case "fill_in_the_blank":
    sectionIdentifierText = "Fill in the Blanks";
    break;

        case "matching":
    sectionIdentifierText = "Matching Questions";
    break;
        
                case "one_word":
          sectionIdentifierText = "Solving Questions";
          break;
                        
        case "comprehension":
          sectionIdentifierText = "Comprehension";
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