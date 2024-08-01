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
  document.getElementById("generate-pdf").addEventListener("click", generatePDF);

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
  ...recscit2amultipleChoiceQuestions,
  ...recscit2bmultipleChoiceQuestions,

  // Grade 1
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
  // One Word Questions
  ...g1scit1amatchingQuestions,
  ...g1scit1bmatchingQuestions,
  ...g1scit2amatchingQuestions,
  ...g1scit2bmatchingQuestions,
  ...g1scit3amatchingQuestions,
  ...g1scit3bmatchingQuestions,

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
  ...g2scit1amultipleChoiceQuestions,
  ...g2scit1bmultipleChoiceQuestions,
  ...g2scit2amultipleChoiceQuestions,
  ...g2scit2bmultipleChoiceQuestions,
  ...g2scit3amultipleChoiceQuestions,
  ...g2scit3bmultipleChoiceQuestions,

  // Grade 3
  // Multiple Choice
  // SP1
  ...g3sp1t1amultipleChoiceQuestions,
  ...g3sp1t1bmultipleChoiceQuestions,
  ...g3sp1t2amultipleChoiceQuestions,
  ...g3sp1t2bmultipleChoiceQuestions,
  ...g3sp1t3amultipleChoiceQuestions,
  ...g3sp1t3bmultipleChoiceQuestions,
  // Math
  ...g3matht1amultipleChoiceQuestions,
  ...g3matht1bmultipleChoiceQuestions,
  ...g3matht2amultipleChoiceQuestions,
  ...g3matht2bmultipleChoiceQuestions,
  ...g3matht3amultipleChoiceQuestions,
  ...g3matht3bmultipleChoiceQuestions,
  // Science
  ...g3scit1amultipleChoiceQuestions,
  ...g3scit1bmultipleChoiceQuestions,
  ...g3scit2amultipleChoiceQuestions,
  ...g3scit2bmultipleChoiceQuestions,
  ...g3scit3amultipleChoiceQuestions,
  ...g3scit3bmultipleChoiceQuestions,

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
          sectionIdentifierText = "Section A";
          break;
        case "true_false":
          sectionIdentifierText = "Section B";
          break;
        case "one_word":
        case "fill_in_the_blank":
          sectionIdentifierText = "Section C";
          break;
        case "matching":
          sectionIdentifierText = "Section D";
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
      case "one_word":
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
      case "matching":
        const matchingContainer = document.createElement("div");
        q.pairs.forEach((pair, i) => {
          const matchingText = document.createElement("div");
          matchingText.innerHTML = `${i + 1}. ${pair.question} - `;
          const matchingInput = document.createElement("input");
          matchingInput.setAttribute("type", "text");
          matchingInput.setAttribute("id", `answer-${index}-${i}`);
          matchingInput.setAttribute("name", `question-${index}-${i}`);
          matchingText.appendChild(matchingInput);
          matchingContainer.appendChild(matchingText);
          matchingContainer.appendChild(document.createElement("br"));
        });
        questionWrapper.appendChild(matchingContainer);
        break;
      default:
        break;
    }
    questionsContainer.appendChild(questionWrapper);
  });

  // Show generate PDF button after displaying questions
  document.getElementById("generate-pdf").style.display = "block";
}

// Function to generate PDF with random questions and marking key
function generatePDF() {
  const doc = new jsPDF();
  const questions = generateRandomQuestions();

  // Add questions and marking key to the PDF
  let yPos = 10;
  questions.forEach((q, index) => {
    yPos += 10;
    doc.text(`${index + 1}. ${q.question}`, 10, yPos);
    yPos += 5; 
        
    switch (q.type) {
      case "multiple_choice":
        q.choices.forEach((choice, i) => {
          yPos += 5;
          doc.text(`${String.fromCharCode(97 + i)}) ${choice}`, 15, yPos);
        });
        break;
      case "true_false":
        doc.text("a) True", 15, yPos);
        yPos += 5;
        doc.text("b) False", 15, yPos);
        break;
      case "one_word":
      case "fill_in_the_blank":
        doc.text("Answer: __________________", 15, yPos);
        break;
      case "matching":
        q.pairs.forEach((pair, i) => {
          yPos += 5;
          doc.text(`${i + 1}) ${pair.question} __________________`, 15, yPos);
        });
        break;
      default:
        break;
    }
    yPos += 10; // Add space between questions
  });

  // Save the PDF
  doc.save('questions.pdf');
}