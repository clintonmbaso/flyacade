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
    
    
// Function to save the entire page content as PDF, including the answer key
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

    // Clone the answer key content and append it to the body temporarily for PDF generation
    const answerKeyClone = answerKeyContent.cloneNode(true); // Clone the answer key content
    answerKeyClone.style.display = 'block'; // Make sure the answer key is visible in the PDF
    document.body.appendChild(answerKeyClone); // Append answer key after the rest of the content

    const element = document.body; // Get the entire body element
    html2pdf()
        .set({
            margin: 10,
            filename: `${filename}.pdf`, // Use the generated filename
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        })
        .from(element) // Use the body element to capture the entire page, including answer key
        .save() // Save the PDF
        .then(() => {
            // Remove the answer key from the page after saving the PDF
            answerKeyClone.remove();

            // Restore the hidden buttons after saving the PDF
            answerKeyButton.style.display = 'block';
            savePDFButton.style.display = 'block';
            classImages.style.display = 'block';
        });
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
                    answerSectionIdentifierText = "Section A - Answers for Multiple Choice";
                    break;
                case "true_false":
                    answerSectionIdentifierText = "Section B - Answers for True or False";
                    break;
                case "fill_in_the_blank":
                    answerSectionIdentifierText = "Section C - Answers for Fill in the Blanks";
                    break;
                case "matching":
                    answerSectionIdentifierText = "Section D - Answers for Matching Questions";
                    break;
                default:
                    answerSectionIdentifierText = "Section";
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