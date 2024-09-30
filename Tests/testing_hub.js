document.addEventListener("DOMContentLoaded", function() {
  const formContainer = document.getElementById("form-container");
  const toggleFormButton = document.getElementById("toggle-form");

  toggleFormButton.addEventListener("click", function() {
    formContainer.classList.toggle("show-form");
  });

  // Close form container when clicking outside of it
  document.addEventListener("click", function(event) {
    if (!formContainer.contains(event.target) && !toggleFormButton.contains(event.target)) {
      formContainer.classList.remove("show-form");
    }
  });

  // Display questions when the page loads
  displayQuestions();

  // Display the total number of questions
  const questionCountDisplay = document.getElementById("question-count");
  if (questionCountDisplay) {
    questionCountDisplay.innerHTML = `Total Bank Questions: ${countTotalQuestions()}`;
  }

  // Event listener for button click to generate PDF
  
  
  
  
  
  // Event listener for button click to refresh questions
  document.getElementById("refresh-questions").addEventListener("click", displayQuestions);
  
  
  
  
  
  
  // Event listener for button click to search questions
  document.getElementById("search-button").addEventListener("click", function() {
    displayQuestions();
    document.getElementById("form-container").classList.remove("show-form"); // Close form container
  });
});

// Merge arrays from separate files into a single questionsBank array
const questionsBank = [

  // Middle
  // Science
  ...midscit1amultipleChoiceQuestions,
  ...midscit1bmultipleChoiceQuestions,
  ...midscit2amultipleChoiceQuestions,
  ...midscit2bmultipleChoiceQuestions,
  ...midscit3amultipleChoiceQuestions,
  ...midscit3bmultipleChoiceQuestions,


  // Science

  // Reception
  // Multiple Choice
  ...recscit2amultipleChoiceQuestions, ...recscit2bmultipleChoiceQuestions, ...recscit3amultipleChoiceQuestions,
// Fill in the Blanks
...recscit3afillInTheBlankQuestions,
// True or False
...recscit3atrueFalseQuestions,
// Matching
...recscit3amatchingQuestions,

  // Grade 1
  // English
  ...g1engt1amultipleChoiceQuestions,
  ...g1engt1bmultipleChoiceQuestions,
  ...g1engt2amultipleChoiceQuestions,
  ...g1engt2bmultipleChoiceQuestions,
  ...g1engt3amultipleChoiceQuestions,
  ...g1engt3bmultipleChoiceQuestions,

  // Science
  // Multiple Choice
  ...g1scit1amultipleChoiceQuestions,
  ...g1scit1bmultipleChoiceQuestions,
  ...g1scit2amultipleChoiceQuestions,
  ...g1scit2bmultipleChoiceQuestions,
  ...g1scit3amultipleChoiceQuestions,
  ...g1scit3bmultipleChoiceQuestions,
  // True or False
  ...g1scit1atrueFalseQuestions,
  ...g1scit1btrueFalseQuestions,
  ...g1scit2atrueFalseQuestions,
  ...g1scit2btrueFalseQuestions,
  ...g1scit3atrueFalseQuestions,
  ...g1scit3btrueFalseQuestions,
  // One Word Questions
  ...g1scit1aoneWordQuestions,
  ...g1scit1boneWordQuestions,
  ...g1scit2aoneWordQuestions,
  ...g1scit2boneWordQuestions,
  ...g1scit3aoneWordQuestions,
  ...g1scit3boneWordQuestions,
  // Fill in the Blank Questions
  ...g1scit1afillInTheBlankQuestions,
  ...g1scit1bfillInTheBlankQuestions,
  ...g1scit2afillInTheBlankQuestions,
  ...g1scit2bfillInTheBlankQuestions,
  ...g1scit3afillInTheBlankQuestions,
  ...g1scit3bfillInTheBlankQuestions,
  // Matching Questions
  ...g1scit1amatchingQuestions,
  ...g1scit1bmatchingQuestions,
  ...g1scit2amatchingQuestions,
  ...g1scit2bmatchingQuestions,
  ...g1scit3amatchingQuestions,
  ...g1scit3bmatchingQuestions,

// Social Studies
  // True or False
  ...g1sst1atrueFalseQuestions,
  ...g1sst1btrueFalseQuestions,
  ...g1sst2atrueFalseQuestions,
  ...g1sst2btrueFalseQuestions,
  ...g1sst3atrueFalseQuestions,
  ...g1sst3btrueFalseQuestions,

// Math
  // True or False
  ...g1matht1atrueFalseQuestions,
  ...g1matht1btrueFalseQuestions,
  ...g1matht2atrueFalseQuestions,
  ...g1matht2btrueFalseQuestions,
  ...g1matht3atrueFalseQuestions,
  ...g1matht3btrueFalseQuestions,

  // CTS
  // Multiple Choice
  ...g1ctst1amultipleChoiceQuestions,
  ...g1ctst1bmultipleChoiceQuestions,
  ...g1ctst2amultipleChoiceQuestions,
  ...g1ctst2bmultipleChoiceQuestions,
  ...g1ctst3amultipleChoiceQuestions,
  ...g1ctst3bmultipleChoiceQuestions,
  // True or False
  ...g1ctst1atrueFalseQuestions,
  ...g1ctst1btrueFalseQuestions,
  ...g1ctst2atrueFalseQuestions,
  ...g1ctst2btrueFalseQuestions,
  ...g1ctst3atrueFalseQuestions,
  ...g1ctst3btrueFalseQuestions,
  // One Word Questions
/*  ...g1scit1aoneWordQuestions,
  ...g1scit1boneWordQuestions,
  ...g1scit2aoneWordQuestions,
  ...g1scit2boneWordQuestions,
  ...g1scit3aoneWordQuestions,
  ...g1scit3boneWordQuestions,
  // Fill in the Blank Questions
  ...g1scit1afillInTheBlankQuestions,
  ...g1scit1bfillInTheBlankQuestions,
  ...g1scit2afillInTheBlankQuestions,
  ...g1scit2bfillInTheBlankQuestions,
  ...g1scit3afillInTheBlankQuestions,
  ...g1scit3bfillInTheBlankQuestions,
  // Matching Questions
  ...g1scit1amatchingQuestions,
  ...g1scit1bmatchingQuestions,
  ...g1scit2amatchingQuestions,
  ...g1scit2bmatchingQuestions,
  ...g1scit3amatchingQuestions,
  ...g1scit3bmatchingQuestions,
*/
  // Grade 2
  // Multiple Choice
  // Math
  ...g2matht1amultipleChoiceQuestions,
  ...g2matht1bmultipleChoiceQuestions,
  ...g2matht2amultipleChoiceQuestions,
  ...g2matht2bmultipleChoiceQuestions,
  ...g2matht3amultipleChoiceQuestions,
  ...g2matht3bmultipleChoiceQuestions,

  // Science
  // Multiple Choice
  ...g2scit1amultipleChoiceQuestions,
  ...g2scit1bmultipleChoiceQuestions,
  ...g2scit2amultipleChoiceQuestions,
  ...g2scit2bmultipleChoiceQuestions,
  ...g2scit3amultipleChoiceQuestions,
  ...g2scit3bmultipleChoiceQuestions,
  // True or False
  ...g2scit1atrueFalseQuestions,
  ...g2scit1btrueFalseQuestions,
  ...g2scit2atrueFalseQuestions,
  ...g2scit2btrueFalseQuestions,
  ...g2scit3atrueFalseQuestions,
  ...g2scit3btrueFalseQuestions,
  ...g2scit3afillInTheBlankQuestions,
// Matching
  ...g2scit3amatchingQuestions,
 
  // Social Studies
  // True or False
  ...g2sst1atrueFalseQuestions,
  ...g2sst1btrueFalseQuestions,
  ...g2sst2atrueFalseQuestions,
  ...g2sst2btrueFalseQuestions,
  ...g2sst3atrueFalseQuestions,
  ...g2sst3btrueFalseQuestions,

  // CTS
  // True or False
  ...g2ctst1atrueFalseQuestions,
  ...g2ctst1btrueFalseQuestions,
  ...g2ctst2atrueFalseQuestions,
  ...g2ctst2btrueFalseQuestions,
  ...g2ctst3atrueFalseQuestions,
  ...g2ctst3btrueFalseQuestions,

  // Grade 3
  // SP1
  // Multiple Choice
  ...g3sp1t1amultipleChoiceQuestions,
  ...g3sp1t1bmultipleChoiceQuestions,
  ...g3sp1t2amultipleChoiceQuestions,
  ...g3sp1t2bmultipleChoiceQuestions,
  ...g3sp1t3amultipleChoiceQuestions,
  ...g3sp1t3bmultipleChoiceQuestions,

  // Math
  // Multiple Choice
  ...g3matht1amultipleChoiceQuestions,
  ...g3matht1bmultipleChoiceQuestions,
  ...g3matht2amultipleChoiceQuestions,
  ...g3matht2bmultipleChoiceQuestions,
  ...g3matht3amultipleChoiceQuestions,
  ...g3matht3bmultipleChoiceQuestions,

  // Science
  // Multiple Choice
  ...g3scit1amultipleChoiceQuestions,
  ...g3scit1bmultipleChoiceQuestions,
  ...g3scit2amultipleChoiceQuestions,
  ...g3scit2bmultipleChoiceQuestions,
  ...g3scit3amultipleChoiceQuestions,
  ...g3scit3bmultipleChoiceQuestions,
// True or False
  ...g3scit1atrueFalseQuestions,
  ...g3scit1btrueFalseQuestions,
  ...g3scit2atrueFalseQuestions,
  ...g3scit2btrueFalseQuestions,
  ...g3scit3atrueFalseQuestions,
  ...g3scit3btrueFalseQuestions,
// Fill in the Blanks
  ...g3scit3afillInTheBlankQuestions,
// Matching
  ...g3scit3amatchingQuestions,

// Social Studies
  // Multiple Choice
//  ...g3scit1amultipleChoiceQuestions,
//  ...g3scit1bmultipleChoiceQuestions,
//  ...g3scit2amultipleChoiceQuestions,
//  ...g3scit2bmultipleChoiceQuestions,
//  ...g3scit3amultipleChoiceQuestions,
//  ...g3scit3bmultipleChoiceQuestions,
// True or False
  ...g3sst1atrueFalseQuestions,
  ...g3sst1btrueFalseQuestions,
  ...g3sst2atrueFalseQuestions,
  ...g3sst2btrueFalseQuestions,
  ...g3sst3atrueFalseQuestions,
  ...g3sst3btrueFalseQuestions,

// Grade 4
  // Science
  ...g4scit1amultipleChoiceQuestions,
  ...g4scit1bmultipleChoiceQuestions,
  ...g4scit2amultipleChoiceQuestions,
  ...g4scit2bmultipleChoiceQuestions,
  ...g4scit3amultipleChoiceQuestions,
  ...g4scit3bmultipleChoiceQuestions,
// True or False
  ...g4scit1atrueFalseQuestions,
  ...g4scit1btrueFalseQuestions,
  ...g4scit2atrueFalseQuestions,
  ...g4scit2btrueFalseQuestions,
  ...g4scit3atrueFalseQuestions,
  ...g4scit3btrueFalseQuestions,
// Fill in the Blanks
//  ...g4scit1atrueFalseQuestions,
//  ...g4scit1btrueFalseQuestions,
//  ...g4scit2atrueFalseQuestions,
//  ...g4scit2btrueFalseQuestions,
  ...g4scit3afillInTheBlankQuestions,
//  ...g4scit3btrueFalseQuestions,

// Matching
//  ...g4scit1atrueFalseQuestions,
//  ...g4scit1btrueFalseQuestions,
//  ...g4scit2atrueFalseQuestions,
//  ...g4scit2btrueFalseQuestions,
  ...g4scit3amatchingQuestions,
//  ...g4scit3btrueFalseQuestions,

  // Grade 5
  // Science
  // Multiple Choice
  ...g5scit1amultipleChoiceQuestions,
  ...g5scit1bmultipleChoiceQuestions,
  ...g5scit2amultipleChoiceQuestions,
  ...g5scit2bmultipleChoiceQuestions,
  ...g5scit3amultipleChoiceQuestions,
  ...g5scit3bmultipleChoiceQuestions,
  // One Word Questions
  ...g5scit1amatchingQuestions,
  ...g5scit1bmatchingQuestions,
  ...g5scit2amatchingQuestions,
  ...g5scit2bmatchingQuestions,
  ...g5scit3amatchingQuestions,
  ...g5scit3bmatchingQuestions,
// Fill in the Blanks
...g5scit3afillInTheBlankQuestions,
// True or False
...g5scit3atrueFalseQuestions,

  // Grade 5
  // Social Studies
  // Multiple Choice
  ...g5sst1amultipleChoiceQuestions,
  ...g5sst1bmultipleChoiceQuestions,
  ...g5sst2amultipleChoiceQuestions,
  ...g5sst2bmultipleChoiceQuestions,
  ...g5sst3amultipleChoiceQuestions,
  ...g5sst3bmultipleChoiceQuestions,
  // True or False
  ...g5sst1atrueFalseQuestions,
  ...g5sst1btrueFalseQuestions,
  ...g5sst2atrueFalseQuestions,
  ...g5sst2btrueFalseQuestions,
  ...g5sst3atrueFalseQuestions,
  ...g5sst3btrueFalseQuestions,

];



// Function to count the total number of questions in the questionsBank array
function countTotalQuestions() {
  return questionsBank.length;
}

// Function to generate random questions
function generateRandomQuestions() {
  const numMultipleChoice = parseInt(document.getElementById("num-multiple-choice").value);
  const numTrueFalse = parseInt(document.getElementById("num-true-false").value);
  const numOneWord = parseInt(document.getElementById("num-one-word").value);
  const numFillInTheBlank = parseInt(document.getElementById("num-fill-in-the-blank").value);
  const numMatching = parseInt(document.getElementById("num-matching").value);

  const selectedClass = document.getElementById("class-filter").value;
  const selectedSubject = document.getElementById("subject-filter").value;
  const selectedTerm = document.getElementById("term-filter").value;
  const selectedPart = document.getElementById("part-filter").value;

  const filteredQuestions = questionsBank.filter(question => {
    return (
      (selectedClass === "" || question.class === selectedClass) &&
      (selectedSubject === "" || question.subject === selectedSubject) &&
      (selectedTerm === "" || question.term === selectedTerm) &&
      (selectedPart === "" || question.part === selectedPart)
    );
  });

  // Shuffle the filtered questions array
  const shuffledQuestions = shuffleArray(filteredQuestions);

  // Function to shuffle an array (Fisher-Yates shuffle)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const randomQuestions = [];

  // Function to get random questions by type from shuffled array
  function getRandomQuestionsByType(type, num) {
    const questionsOfType = shuffledQuestions.filter(question => question.type === type);
    return questionsOfType.slice(0, num); // Select the first `num` questions
  }

  // Push randomly selected questions of each type to randomQuestions array
  randomQuestions.push(...getRandomQuestionsByType("multiple_choice", numMultipleChoice));
  randomQuestions.push(...getRandomQuestionsByType("true_false", numTrueFalse));
  randomQuestions.push(...getRandomQuestionsByType("one_word", numOneWord));
  randomQuestions.push(...getRandomQuestionsByType("fill_in_the_blank", numFillInTheBlank));
  randomQuestions.push(...getRandomQuestionsByType("matching", numMatching));

  return randomQuestions;
}

// Function to display random questions on the HTML page
function displayQuestions() {
  const questionsContainer = document.getElementById("questions-container");
  questionsContainer.innerHTML = ""; // Clear previous questions
  const questions = generateRandomQuestions();
  
  // Track added sections to avoid duplicates
  const addedSections = {
    "multiple_choice": false,
    "true_false": false,
    "one_word": false,
    "fill_in_the_blank": false,
    "matching": false
  };

  let sectionIdentifierText = "";

  questions.forEach((q, index) => {
    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-wrapper");

    // Determine section identifier based on question type and whether it has been added
    if (!addedSections[q.type]) {
      addedSections[q.type] = true;

      switch (q.type) {
        case "multiple_choice":
          sectionIdentifierText = "Section A - Multiple Choice";
          break;
        case "true_false":
          sectionIdentifierText = "Section B - True or False";
          break;
        case "fill_in_the_blank":
          sectionIdentifierText = "Section C - Fill in the Blanks";
          break;
        case "matching":
          sectionIdentifierText = "Section D - Matching Questions";
          break;
        case "one_word":
          sectionIdentifierText = "Section E - One Word Answer";
          break;
        default:
          sectionIdentifierText = "Section";
          break;
      }

      // Add section identifier
      const sectionIdentifier = document.createElement("div");
      sectionIdentifier.classList.add("section-identifier");
      sectionIdentifier.innerHTML = sectionIdentifierText;
      questionWrapper.appendChild(sectionIdentifier);
    }

    const questionText = document.createElement("div");
    questionText.innerHTML = `${index + 1}. ${q.question}`;
    questionWrapper.appendChild(questionText);

    switch (q.type) {
      case "multiple_choice":
        const choicesContainer = document.createElement("div");
        q.choices.forEach((choice, i) => {
          const choiceInput = document.createElement("input");
          choiceInput.setAttribute("type", "radio");
          choiceInput.setAttribute("id", `choice-${i}`);
          choiceInput.setAttribute("name", `question-${index}`);
          choiceInput.setAttribute("value", choice);
          const choiceLabel = document.createElement("label");
          choiceLabel.setAttribute("for", `choice-${i}`);
          choiceLabel.innerHTML = choice;
          choicesContainer.appendChild(choiceInput);
          choicesContainer.appendChild(choiceLabel);
          choicesContainer.appendChild(document.createElement("br"));
        });
        questionWrapper.appendChild(choicesContainer);
        break;
      
      
      case "true_false":
        const trueInput = document.createElement("input");
        trueInput.setAttribute("type", "radio");
        trueInput.setAttribute("id", `true-${index}`);
        trueInput.setAttribute("name", `question-${index}`);
        trueInput.setAttribute("value", "true");
        const trueLabel = document.createElement("label");
        trueLabel.setAttribute("for", `true-${index}`);
        trueLabel.innerHTML = "True";
        questionWrapper.appendChild(trueInput);
        questionWrapper.appendChild(trueLabel);

        const falseInput = document.createElement("input");
        falseInput.setAttribute("type", "radio");
        falseInput.setAttribute("id", `false-${index}`);
        falseInput.setAttribute("name", `question-${index}`);
        falseInput.setAttribute("value", "false");
        const falseLabel = document.createElement("label");
        falseLabel.setAttribute("for", `false-${index}`);
        falseLabel.innerHTML = "False";
        questionWrapper.appendChild(falseInput);
        questionWrapper.appendChild(falseLabel);
        questionWrapper.appendChild(document.createElement("br"));
        break;
      
      // One Word html Layout
      case "one_word":
        
      
      // Fill in tge Blanks html Layout
      case "fill_in_the_blank":
        const answerInput = document.createElement("input");
        answerInput.setAttribute("type", "text");
        answerInput.setAttribute("id", `answer-${index}`);
        answerInput.setAttribute("name", `question-${index}`);
        const answerLabel = document.createElement("label");
        answerLabel.innerHTML = "Answer: ";
        questionWrapper.appendChild(answerLabel);
        questionWrapper.appendChild(answerInput);
        questionWrapper.appendChild(document.createElement("br"));
        break;
      
      // Matching html Layout
      case "matching":
    const matchingContainer = document.createElement("div");

    // Prepare the first and second statements
    const firstStatements = q.pairs.map((pair, i) => `${i + 1}. ${pair.question}`);
    const secondStatements = q.pairs.map(pair => pair.answer);

    // Shuffle the second statements
    const shuffledSecondStatements = shuffleArray(secondStatements.slice());

    // Create a table for displaying the matching questions
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    // Create table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Match", "First Statement", "Second Statement"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create rows for the table
    firstStatements.forEach((statement, i) => {
        const row = document.createElement("tr");

        // Input field cell
        const inputCell = document.createElement("td");
        const matchingInput = document.createElement("input");
        matchingInput.setAttribute("type", "text");
        matchingInput.setAttribute("id", `answer-${index}-${i}`);
        matchingInput.setAttribute("name", `question-${index}-${i}`);
        matchingInput.setAttribute("placeholder", "");
        matchingInput.classList.add("matching-input"); // Add a class for styling
        inputCell.appendChild(matchingInput);
        row.appendChild(inputCell);

        // First statement cell
        const statementCell = document.createElement("td");
        statementCell.innerText = statement;
        row.appendChild(statementCell);

        // Second statement cell with letters
        const secondStatementCell = document.createElement("td");
        const shuffledIndex = i % shuffledSecondStatements.length; // Ensure options repeat if fewer than statements
        const optionElement = document.createElement("div");
        optionElement.innerText = `${String.fromCharCode(65 + shuffledIndex)}. ${shuffledSecondStatements[shuffledIndex]}`;
        secondStatementCell.appendChild(optionElement);
        row.appendChild(secondStatementCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    matchingContainer.appendChild(table);
    questionWrapper.appendChild(matchingContainer);
    break;

function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
      default:
        break;
    }
    questionsContainer.appendChild(questionWrapper);
  });

  
  localStorage.setItem('displayedQuestions', JSON.stringify(questions));
  
  // Show generate PDF button after displaying questions
  document.getElementById("generate-pdf").style.display = "block";
        }

        

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