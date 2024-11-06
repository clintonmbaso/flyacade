

// Function to display random questions on the HTML page
function displayQuestions() {
  const questionsContainer = document.getElementById("questions-container");
  questionsContainer.innerHTML = ""; // Clear previous questions
  const questions = generateRandomQuestions();
  
  // Track added sections to avoid duplicates
  const addedSections = {
    "multiple_choice": false,
    "special": false,    
    "true_false": false,
    "fill_in_the_blank": false,
    "matching": false,
    "one_word": false,
    "math": false,
    "comprehension": false,
    "image_based": false,
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
    "wordSearchPuzzle": false      

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
          sectionIdentifierText = "Multiple Choice Section";
          break;
        case "special":
          sectionIdentifierText = "Special Paper 2 Section";
          break;
        case "true_false":
          sectionIdentifierText = "True or False Section";
          break;
        case "fill_in_the_blank":
          sectionIdentifierText = "Fill in the Blanks Section";
          break;
        case "matching":
          sectionIdentifierText = "Matching Section";
          break;
        case "one_word":
          sectionIdentifierText = "Calculation Section";
          break;
        case "math":
          sectionIdentifierText = "Math Section";
          break;
        case "comprehension":
          sectionIdentifierText = "Comprehension Section";
          break;
        case "image_based":
          sectionIdentifierText = "Image Section";
          break;
        case "maze":
          sectionIdentifierText = "Maze Section";
          break;
        case "crossword":
          sectionIdentifierText = "Crossword Section";
          break;
        case "coloring":
          sectionIdentifierText = "Coloring Section";
          break;
        case "identification":
          sectionIdentifierText = "Identification Section";
          break;
        case "tracing":
          sectionIdentifierText = "Tracing Section";
          break;
        case "handwriting":
          sectionIdentifierText = "Handwriting Section";
          break;
        case "reading":
          sectionIdentifierText = "Reading Section.";
          break;
        case "sudoku":
          sectionIdentifierText = "Sudoku Section";
          break;
        case "identity":
          sectionIdentifierText = "Identity Section";
          break;
        case "time":
          sectionIdentifierText = "Time Section";
          break;
        case "wordSearchPuzzle":
          sectionIdentifierText = "Word Search Puzzle Section";
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
  
  // Function to generate letter labels (A, B, C, ...)
  const getLetter = (i) => String.fromCharCode(65 + i); // 65 is the char code for 'A'
  
  // Shuffle the choices array
  const shuffledChoices = [...q.choices].sort(() => Math.random() - 0.5);
  
  shuffledChoices.forEach((choice, i) => {
    const choiceInput = document.createElement("input");
    choiceInput.setAttribute("type", "radio");
    choiceInput.setAttribute("id", `question-${index}-choice-${i}`);
    choiceInput.setAttribute("name", `question-${index}`);
    choiceInput.setAttribute("value", choice);
    
    const choiceLabel = document.createElement("label");
    choiceLabel.setAttribute("for", `question-${index}-choice-${i}`);
    choiceLabel.innerHTML = `${getLetter(i)}. ${choice}`;
    
    choicesContainer.appendChild(choiceInput);
    choicesContainer.appendChild(choiceLabel);
    choicesContainer.appendChild(document.createElement("br"));
  });
  
  questionWrapper.appendChild(choicesContainer);
  break;
      
      
case "special":
    const specialContainer = document.createElement("div");
    specialContainer.classList.add("special-container"); // Add class for styling

    // Add an image for the question if it exists
    if (q.questionImage) {
        const questionImage = document.createElement("img");
        questionImage.setAttribute("src", q.questionImage);
        questionImage.setAttribute("alt", "Question Image");
        questionImage.classList.add("question-image"); // Add class for styling
        specialContainer.appendChild(questionImage);
        specialContainer.appendChild(document.createElement("br"));
    }

    // Loop through choices and create radio buttons with images
    q.choices.forEach((choice, i) => {
        const choiceContainer = document.createElement("div");
        choiceContainer.classList.add("choice-container"); // Add class for styling

      
        const choiceInput = document.createElement("input");
        choiceInput.setAttribute("type", "radio");
        choiceInput.setAttribute("id", `choice-${i}`);
        choiceInput.setAttribute("name", `question-${index}`);
        choiceInput.setAttribute("value", choice.value);

        const choiceLabel = document.createElement("label");
        choiceLabel.setAttribute("for", `choice-${i}`);

        // Add image for choice if it exists
        if (choice.image) {
            const choiceImage = document.createElement("img");
            choiceImage.setAttribute("src", choice.image);
            choiceImage.setAttribute("alt", `Option ${i + 1}`);
            choiceLabel.appendChild(choiceImage);
        }

        // Add text for choice if it exists
        if (choice.text) {
            const choiceText = document.createElement("span");
            choiceText.innerHTML = choice.text;
            choiceLabel.appendChild(choiceText);
        }

        choiceContainer.appendChild(choiceInput);
        choiceContainer.appendChild(choiceLabel);
        specialContainer.appendChild(choiceContainer);
    });
      

    questionWrapper.appendChild(specialContainer);
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

      // One Word html Layout
        case "one_word":
break;
      
      
      
      
      
      

      
 
 container to the main question wrapper
   
   ((key) => {
        const clueItem = document.createElement("p");
        clueItem.innerHTML = `${key}. ${acrossCluesMap[key]}`;
        acrossCluesList.appendChild(clueItem);
    });

    cluesContainer.appendChild(acrossCluesList);

    const downCluesList = document.createElement("div");
    downCluesList.classList.add("down-clues");
    const downCluesHeading = document.createElement("h3");
    downCluesHeading.innerHTML = "Down";
    downCluesList.appendChild(downCluesHeading);

    Object.keys(downCluesMap).forEach((key) => {
        const clueItem = document.createElement("p");
        clueItem.innerHTML = `${key}. ${downCluesMap[key]}`;
        downCluesList.appendChild(clueItem);
    });

    cluesContainer.appendChild(downCluesList);

    crosswordQuestionContainer.appendChild(cluesContainer);

    questionWrapper.appendChild(crosswordQuestionContainer);
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