import { renderMultipleChoice } from './cases/multipleChoice.js';
/*import { renderSpecial } from './cases/special.js';
import { renderTrueFalse } from './cases/trueFalse.js';
import { renderFillInTheBlank } from './cases/fillInTheBlank.js';*/
// Import other question type functions here

function displayQuestions() {
  const questionsContainer = document.getElementById("questions-container");
  questionsContainer.innerHTML = "";
  const questions = generateRandomQuestions();

  const addedSections = {
    "multiple_choice": false,
/*    "special": false,    
    "true_false": false,
    "fill_in_the_blank": false,*/
    // Add other types as needed
  };

  questions.forEach((q, index) => {
    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-wrapper");

    if (!addedSections[q.type]) {
      addedSections[q.type] = true;
      const sectionIdentifierText = getSectionIdentifierText(q.type);
      
      const sectionIdentifier = document.createElement("div");
      sectionIdentifier.classList.add("section-identifier");
      sectionIdentifier.innerHTML = sectionIdentifierText;
      questionWrapper.appendChild(sectionIdentifier);
    }

    const questionText = document.createElement("div");
    questionText.innerHTML = `${index + 1}. ${q.question}`;
    questionWrapper.appendChild(questionText);

    // Call the appropriate function based on question type
    switch (q.type) {
      case "multiple_choice":
        renderMultipleChoice(questionWrapper, q, index);
        break;
/*      case "special":
        renderSpecial(questionWrapper, q, index);
        break;
      case "true_false":
        renderTrueFalse(questionWrapper, q, index);
        break;
      case "fill_in_the_blank":
        renderFillInTheBlank(questionWrapper, q, index);
        break;*/
      // Add other cases as needed
      default:
        break;
    }

    questionsContainer.appendChild(questionWrapper);
  });
}