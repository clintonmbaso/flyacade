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

  // Event listener for button click to display questions
  displayQuestions();

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

  // Science

  // Grade 1
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


  // Grade 5
  // Multiple Choice
  ...g5scit1amultipleChoiceQuestions,
  ...g5scit1bmultipleChoiceQuestions,
  ...g5scit2amultipleChoiceQuestions,
  ...g5scit2bmultipleChoiceQuestions,
  ...g5scit3amultipleChoiceQuestions,
  ...g5scit3bmultipleChoiceQuestions,

];

// Function to generate random questions
function generateRandomQuestions() {
  const numMultipleChoice = parseInt(document.getElementById("num-multiple-choice").value);
  const numTrueFalse = parseInt(document.getElementById("num-true-false").value);
  const numOneWord = parseInt(document.getElementById("num-one-word").value);
  const numFillInTheBlank = parseInt(document.getElementById("num-fill-in-the-blank").value);
  const numMatching = parseInt(document.getElementById("num-matching").value);

  // New filters
  const selectedClass = document.getElementById("class-filter").value;
  const selectedSubject = document.getElementById("subject-filter").value;
  const selectedTerm = document.getElementById("term-filter").value;
  const selectedPart = document.getElementById("part-filter").value;

  const filteredQuestions = questionsBank.filter(question => {
    // Add conditions based on selected filters
    return (
      (selectedClass === "" || question.class === selectedClass) &&
      (selectedSubject === "" || question.subject === selectedSubject) &&
      (selectedTerm === "" || question.term === selectedTerm) &&
      (selectedPart === "" || question.part === selectedPart)
    );
  });

  const randomQuestions = [];

  function getRandomQuestionsByType(type, num) {
    const questionsOfType = filteredQuestions.filter(question => question.type === type);
    const randomQuestionsOfType = [];
    for (let i = 0; i < num; i++) {
      const randomIndex = Math.floor(Math.random() * questionsOfType.length);
      randomQuestionsOfType.push(questionsOfType[randomIndex]);
    }
    return randomQuestionsOfType;
  }

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
  questions.forEach((q, index) => {
    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-wrapper");

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
        yPos += 5;
        doc.text("a) True", 15, yPos);
        yPos += 5;
        doc.text("b) False", 15, yPos);
        break;
      case "one_word":
      case "fill_in_the_blank":
        yPos += 5;
        doc.text("Answer: ______________________", 15, yPos);
        break;
      case "matching":
        q.pairs.forEach((pair, i) => {
          yPos += 5;
          doc.text(`${i + 1}. ${pair.question} - ______________________`, 15, yPos);
        });
        break;
      default:
        break;
    }
    yPos += 10;
  });

  // Add marking key
  yPos += 10;
  doc.text("Marking Key", 10, yPos);
  yPos += 5;
  questions.forEach((q, index) => {
    yPos += 10;
    doc.text(`${index + 1}. ${q.question}`, 10, yPos);
    yPos += 5;
    doc.text(`Answer: ${q.answer}`, 15, yPos);
  });

  // Save the PDF
  doc.save("questions.pdf");
}