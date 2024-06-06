// Merge arrays from separate files into a single questionsBank array
    const questionsBank = [
      ...multipleChoiceQuestions,
      ...trueFalseQuestions,
      ...oneWordQuestions,
      ...fillInTheBlankQuestions,
      ...matchingQuestions
    ];

    // Function to generate random questions
    function generateRandomQuestions() {
      const numMultipleChoice = parseInt(document.getElementById("num-multiple-choice").value);
      const numTrueFalse = parseInt(document.getElementById("num-true-false").value);
      const numOneWord = parseInt(document.getElementById("num-one-word").value);
      const numFillInTheBlank = parseInt(document.getElementById("num-fill-in-the-blank").value);
      const numMatching = parseInt(document.getElementById("num-matching").value);

      const randomQuestions = [];

      function getRandomQuestionsByType(type, num) {
        const questionsOfType = questionsBank.filter(question => question.type === type);
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
        const questionText = `${index + 1}. ${q.question}<br>`;
        questionsContainer.innerHTML += questionText;
        switch (q.type) {
          case "multiple_choice":
            q.choices.forEach((choice, i) => {
              questionsContainer.innerHTML += `<input type="radio" id="choice-${i}" name="question-${index}" value="${choice}">
              <label for="choice-${i}">${choice}</label><br>`;
            });
            break;
          case "true_false":
            questionsContainer.innerHTML += `<input type="radio" id="true-${index}" name="question-${index}" value="true">
              <label for="true-${index}">True</label>
              <input type="radio" id="false-${index}" name="question-${index}" value="false">
              <label for="false-${index}">False</label><br>`;
            break;
          case "one_word":
            questionsContainer.innerHTML += `Answer: <input type="text" id="answer-${index}" name="question-${index}"><br>`;
            break;
          case "fill_in_the_blank":
            questionsContainer.innerHTML += `Answer: <input type="text" id="answer-${index}" name="question-${index}"><br>`;
            break;
          case "matching":
            q.pairs.forEach((pair, i) => {
              questionsContainer.innerHTML += `${i + 1}. ${pair.question} - <input type="text" id="answer-${index}-${i}" name="question-${index}-${i}"><br>`;
            });
            break;
          default:
            break;
        }
        questionsContainer.innerHTML += "<br>";
      });
      // Show generate PDF button after displaying questions
      document.getElementById("generate-pdf").style.display = "block";
    }

    // Function to generate PDF with random questions
// Function to generate PDF with random questions and marking key
// Function to generate PDF with random questions and marking key
function generatePDF() {
  const doc = new jsPDF();

  // Generate random questions
  const questions = generateRandomQuestions();

  // Add questions to the PDF
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
  doc.save("Flyacade.pdf");
}

    // Event listener for button click to display questions
    document.addEventListener("DOMContentLoaded", displayQuestions);

    // Event listener for button click to generate PDF
    document.getElementById("generate-pdf").addEventListener("click", generatePDF);

    // Event listener for button click to refresh questions
    document.getElementById("refresh-questions").addEventListener("click", displayQuestions);

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
});