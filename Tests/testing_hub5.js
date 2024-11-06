// Function to generate PDF with random questions and marking key
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Title of the PDF
    doc.setFontSize(18);
    doc.text('Questions Bank', 10, 10);

    // Add questions to the PDF from the questionsBank array
    let yPosition = 20;  // Starting Y position for text in the PDF
    questionsBank.forEach((question, index) => {
        // Add each question to the PDF
        doc.setFontSize(12);
        doc.text(`${index + 1}. ${question.question}`, 10, yPosition);
        yPosition += 10;

        // Add choices if the question has them
        if (question.choices) {
            question.choices.forEach((choice, choiceIndex) => {
                doc.text(`    ${String.fromCharCode(65 + choiceIndex)}. ${choice}`, 10, yPosition);
                yPosition += 10;
            });
        }

        // Check if the Y position goes off the page, then add a new page
        if (yPosition > 270) { // Page break threshold
            doc.addPage();
            yPosition = 20; // Reset Y position on the new page
        }
    });

    // Save the PDF with a filename
    doc.save('questions_bank.pdf');
}

// Function to dynamically generate a button
function createSaveButton() {
    const saveButton = document.createElement("button");
    saveButton.innerHTML = "💾";
    saveButton.setAttribute("id", "save-btn");
    
    // Append button to the page (you can append it anywhere appropriate)
    document.body.appendChild(saveButton);

    // Add event listener to save questions to local storage and open test.html
    saveButton.addEventListener("click", () => {
        saveQuestionsToLocalStorage();
        window.location.href = "test.html"; // Navigate to test.html
    });
}

// Function to save questions to local storage
function saveQuestionsToLocalStorage() {
    // Assuming you have an array of questions
    const question = [
        // Add your question data here, example format
        { type: "fill_in_the_blank", question: "What is 2 + 2?", answer: "4" },
        // Add more questions as needed
    ];

    // Save questions to local storage as JSON string
    localStorage.setItem("savedQuestions", JSON.stringify(question));

    console.log("Questions saved to local storage!");
}

// Assuming this code runs when questions are loaded dynamically
function loadQuestions() {
    // Your existing code to load questions dynamically goes here
    // Example question generation code (for fill-in-the-blank questions):
    const questionWrapper = document.createElement("div");
    questionWrapper.setAttribute("id", "questions");


    // Append questionWrapper to body (or another container)
    document.body.appendChild(questionWrapper);

    // After questions load, call the function to create the button
    createSaveButton();
}

// Call the function to load questions when appropriate (e.g., on page load)
window.onload = function () {
    loadQuestions();
};