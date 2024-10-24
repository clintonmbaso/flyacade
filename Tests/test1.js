// Get questions data from local storage
        const questionsData = JSON.parse(localStorage.getItem('displayedQuestions')) || [];

        function displayQuestions() {
            const testContainer = document.getElementById('test-container');
            testContainer.innerHTML = ''; // Clear previous questions

            // Track added sections to avoid duplicates
            const addedSections = {
                "multiple_choice": false,
                "true_false": false,
                "one_word": false,
                "fill_in_the_blank": false,
                "matching": false,
                "image_based": false,
                "puzzle": false
            };

            let sectionIdentifierText = "";

            questionsData.forEach((q, index) => {
                const questionWrapper = document.createElement('div');
                questionWrapper.classList.add('question-wrapper');

                // Determine section identifier based on question type and whether it has been added
                if (!addedSections[q.type]) {
                    addedSections[q.type] = true;

                    
                    
                    switch (q.type) {
                        
        case "multiple_choice":
    sectionIdentifierText = "Multiple Choice<br><em>Tick the correct option from the given choices.</em>";
    break;

        case "true_false":
    sectionIdentifierText = "True or False<br><em>Select whether the statement is true or false by ticking.</em>";
    break;

        case "fill_in_the_blank":
    sectionIdentifierText = "Fill in the Blanks<br><em>Fill in the missing word(s) in the blank space with the correct word from the bank.</em>";
    break;

        case "matching":
    sectionIdentifierText = "Matching Questions <br><em>Match the items from the two statements by writing the letter associated with the matching box.</em>";
    break;
                        
          case "one_word":
          sectionIdentifierText = "Solving Questions<br><em>Solve the following questions</em>";
          break;
                        
          case "comprehension":
          sectionIdentifierText = "Comprehension <br><em>Read the story and answer the questions that follow</em>";
          break;
                        
          case "image_based":
          sectionIdentifierText = "Image Based <br><em>Carefully analyse the given image and answer the questions that follow</em>";
          break;
                        
          case "puzzle":
          sectionIdentifierText = "Puzzle <br><em>Complete the puzzle given below based on the instructions in the question</em>";
          break;
                        
        default:
          sectionIdentifierText = "Section";
          break;
      }

                    // Add section identifier
                    const sectionIdentifier = document.createElement('div');
                    sectionIdentifier.classList.add('section-identifier');
                    sectionIdentifier.innerHTML = sectionIdentifierText;
                    questionWrapper.appendChild(sectionIdentifier);
                    
                    
                    
                }
// Display the sectionInstructionsText



                
                // Only append questions if they are not 'true_false' type
if (q.type !== "true_false" && q.type !== "fill_in_the_blank") {
    const questionText = document.createElement('div');
    questionText.innerHTML = `${index + 1}. ${q.question}`;
    questionWrapper.appendChild(questionText);
}
                
                
                
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
                    
                    
                    
    case "true_false":
    // Check if the table already exists
    let trueFalseTable = document.querySelector(".true-false-table");

    // If the table doesn't exist, create it
    if (!trueFalseTable) {
        trueFalseTable = document.createElement("table");
        trueFalseTable.classList.add("true-false-table");

        // Create table header with a new "Serial Number" column
        const headersRow = document.createElement("tr");
        const serialHeader = document.createElement("th");
        serialHeader.innerText = "Sn.";
        const questionHeader = document.createElement("th");
        questionHeader.innerText = "Question";
        const trueHeader = document.createElement("th");
        trueHeader.innerText = "True";
        const falseHeader = document.createElement("th");
        falseHeader.innerText = "False";

        headersRow.appendChild(serialHeader);
        headersRow.appendChild(questionHeader);
        headersRow.appendChild(trueHeader);
        headersRow.appendChild(falseHeader);
        trueFalseTable.appendChild(headersRow);

        // Append the table to the question wrapper
        questionWrapper.appendChild(trueFalseTable);
    }

    // Create a new row for the current question
    const row = document.createElement("tr");

    // Create the serial number cell
    const serialCell = document.createElement("td");
    serialCell.innerText = `${index + 1}`; // Serial number starts from 1
    row.appendChild(serialCell);

    // Create the question cell
    const questionCell = document.createElement("td");
    questionCell.innerText = q.question;
    row.appendChild(questionCell);

    // Create True radio button cell
    const trueCell = document.createElement("td");
    const trueInput = document.createElement("input");
    trueInput.setAttribute("type", "radio");
    trueInput.setAttribute("id", `true-${index}`);
    trueInput.setAttribute("name", `question-${index}`);
    trueInput.setAttribute("value", "true");
    trueCell.appendChild(trueInput);
    row.appendChild(trueCell);

    // Create False radio button cell
    const falseCell = document.createElement("td");
    const falseInput = document.createElement("input");
    falseInput.setAttribute("type", "radio");
    falseInput.setAttribute("id", `false-${index}`);
    falseInput.setAttribute("name", `question-${index}`);
    falseInput.setAttribute("value", "false");
    falseCell.appendChild(falseInput);
    row.appendChild(falseCell);

    // Append the row to the table
    trueFalseTable.appendChild(row);
    break;
                    

                    

        
      
      // Fill in tge Blanks html Layout
      case "fill_in_the_blank":
    // Check if the word bank table already exists
    let wordBankTable = document.querySelector(".word-bank-table");

    // If the table doesn't exist, create it
    if (!wordBankTable) {
        wordBankTable = document.createElement("table");
        wordBankTable.classList.add("word-bank-table");

        const row = document.createElement("tr"); // Create a single row for the word bank

        // Collect all the answers for fill-in-the-blank questions
        let fillInAnswers = questionsData.filter(q => q.type === "fill_in_the_blank").map(q => q.answer);

        // Shuffle the answers using Fisher-Yates algorithm
        for (let i = fillInAnswers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [fillInAnswers[i], fillInAnswers[j]] = [fillInAnswers[j], fillInAnswers[i]]; // Swap elements
        }

        // Create table cells with the shuffled answers
        fillInAnswers.forEach((answer) => {
            const cell = document.createElement("td");
            cell.innerText = answer; // Add the shuffled answer to the table cell
            row.appendChild(cell);
        });

        wordBankTable.appendChild(row); // Add the row to the table
        questionWrapper.appendChild(wordBankTable); // Append the table to the question wrapper
    }

    // Create the fill-in-the-blank question element with a serial number
    const fillInTheBlank = document.createElement("div");
    fillInTheBlank.innerHTML = `${index + 1}. ${questionsData[index].question}`; // Example question text

    // Append the fill-in-the-blank question to the question wrapper
    questionWrapper.appendChild(fillInTheBlank);

    // Continue with displaying the fill-in-the-blank question and input field
    const answerInput = document.createElement("input");
    answerInput.setAttribute("type", "text");
    answerInput.setAttribute("id", `answer-${index}`);
    answerInput.setAttribute("name", `question-${index}`);
    

    questionWrapper.appendChild(answerInput);
    questionWrapper.appendChild(document.createElement("br"));
    break;
                    
                    
                    
                    
                    
                    
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

                    
                    
case "comprehension":
  // Create and display the story
  const storyContainer = document.createElement("div");
  const storyParagraph = document.createElement("p");
  storyParagraph.innerHTML = q.story;  // Display the story text
  storyContainer.appendChild(storyParagraph);
  questionWrapper.appendChild(storyContainer);

  // Loop through the comprehension questions and display each multiple-choice question
  q.questions.forEach((subQuestion, subIndex) => {
    const subQuestionText = document.createElement("p");
    subQuestionText.innerHTML = `${index + 1}.${subIndex + 1} ${subQuestion.question}`;  // Add main question index
    questionWrapper.appendChild(subQuestionText);

    const subChoicesContainer = document.createElement("div");
    subQuestion.choices.forEach((choice, i) => {
      const choiceInput = document.createElement("input");
      choiceInput.setAttribute("type", "radio");
      choiceInput.setAttribute("id", `comprehension-choice-${index}-${subIndex}-${i}`); // Unique ID for each comprehension choice
      choiceInput.setAttribute("name", `comprehension-question-${index}-${subIndex}`);   // Ensure unique names per sub-question
      choiceInput.setAttribute("value", choice);

      const choiceLabel = document.createElement("label");
      choiceLabel.setAttribute("for", `comprehension-choice-${index}-${subIndex}-${i}`);
      choiceLabel.innerHTML = choice;

      subChoicesContainer.appendChild(choiceInput);
      subChoicesContainer.appendChild(choiceLabel);
      subChoicesContainer.appendChild(document.createElement("br"));
    });

    questionWrapper.appendChild(subChoicesContainer);
  });
  break;
                    
                    
                    
case "image_based":
    // Create a container div for the image-based question
    const imageQuestionContainer = document.createElement("div");
    imageQuestionContainer.classList.add("image-based-container"); // Optional class for styling

    // Create image element
    const imgElement = document.createElement("img");

    // Check if the image source exists and log the path
    if (q.imageSrc) {
        console.log("Loading image from: " + q.imageSrc); // Log image path for debugging
        imgElement.setAttribute("src", q.imageSrc); // Set the image source dynamically
    } else {
        console.log("Image source is missing for question: ", q); // Log missing image source for debugging
    }

    imgElement.setAttribute("alt", "Question Image");
    imgElement.setAttribute("width", "100%"); // Set width as per your requirement
    imgElement.setAttribute("height", "auto"); // Set height as per your requirement
    imageQuestionContainer.appendChild(imgElement);
    imageQuestionContainer.appendChild(document.createElement("br"));

    // Add a question description below the image
    const questionDescription = document.createElement("p");
    questionDescription.innerHTML = q.description;
    imageQuestionContainer.appendChild(questionDescription);

    // Create a sub-choices container for the options or input field
    const sub1ChoicesContainer = document.createElement("div");
    sub1ChoicesContainer.classList.add("sub1-choices-container"); // Optional class for styling

    // Based on the sub-question type, we add either multiple-choice or fill-in-the-blank options
    if (q.subType === "multiple_choice") {
        q.options.forEach((option, optionIndex) => {
            const radioInput = document.createElement("input");
            radioInput.setAttribute("type", "radio");
            radioInput.setAttribute("id", `option-${index}-${optionIndex}`);
            radioInput.setAttribute("name", `question-${index}`);
            radioInput.setAttribute("value", option);

            const label = document.createElement("label");
            label.setAttribute("for", `option-${index}-${optionIndex}`);
            label.innerHTML = option;

            sub1ChoicesContainer.appendChild(radioInput);
            sub1ChoicesContainer.appendChild(label);
            sub1ChoicesContainer.appendChild(document.createElement("br"));
        });
    } else if (q.subType === "fill_in_the_blank") {
        const answerInput = document.createElement("input");
        answerInput.setAttribute("type", "text");
        answerInput.setAttribute("id", `answer-${index}`);
        answerInput.setAttribute("name", `question-${index}`);

        const answerLabel = document.createElement("label");
        answerLabel.innerHTML = "Answer: ";

        sub1ChoicesContainer.appendChild(answerLabel);
        sub1ChoicesContainer.appendChild(answerInput);
        sub1ChoicesContainer.appendChild(document.createElement("br"));
    }

    // Append the sub-choices container to the image-based question container
    imageQuestionContainer.appendChild(sub1ChoicesContainer);

    // Finally, append the image-based question container to the questionWrapper
    questionWrapper.appendChild(imageQuestionContainer);
    break;
                    
                    
case "puzzle":
    // Create a container for the puzzle-based question
    const puzzleQuestionContainer = document.createElement("div");
    puzzleQuestionContainer.classList.add("puzzle-based-container"); // Optional class for styling

    // Create a question description or instruction
    const puzzleDescription = document.createElement("p");
    puzzleDescription.innerHTML = q.description; // Set puzzle instructions
    puzzleQuestionContainer.appendChild(puzzleDescription);

    // Handle different puzzle types (maze, sudoku, crossword)
    switch (q.puzzleType) {
        case "maze":
            // Create maze image or canvas
            const mazeImg = document.createElement("img");
            mazeImg.setAttribute("src", q.puzzleSrc); // Dynamic maze image or canvas rendering
            mazeImg.setAttribute("alt", "Maze Puzzle");
            mazeImg.setAttribute("width", "100%");
            mazeImg.setAttribute("height", "auto");
            puzzleQuestionContainer.appendChild(mazeImg);
            break;

        case "sudoku":
            // Create a grid for Sudoku
            const sudokuTable = document.createElement("table");
            sudokuTable.classList.add("sudoku-table");
            
            for (let row = 0; row < 9; row++) {
                const sudokuRow = document.createElement("tr");
                for (let col = 0; col < 9; col++) {
                    const sudokuCell = document.createElement("td");
                    const inputField = document.createElement("input");
                    inputField.setAttribute("type", "number");
                    inputField.setAttribute("min", "1");
                    inputField.setAttribute("max", "9");
                    inputField.setAttribute("maxlength", "1");
                    inputField.classList.add("sudoku-input");
                    // Check if there's a pre-filled value
                    if (q.puzzleData && q.puzzleData[row][col]) {
                        inputField.value = q.puzzleData[row][col];
                        inputField.setAttribute("readonly", true); // Make pre-filled cells read-only
                    }
                    sudokuCell.appendChild(inputField);
                    sudokuRow.appendChild(sudokuCell);
                }
                sudokuTable.appendChild(sudokuRow);
            }
            puzzleQuestionContainer.appendChild(sudokuTable);
            break;

        case "crossword":
            // Create a grid for Crossword
            const crosswordTable = document.createElement("table");
            crosswordTable.classList.add("crossword-table");

            for (let row = 0; row < q.puzzleData.length; row++) {
                const crosswordRow = document.createElement("tr");
                for (let col = 0; col < q.puzzleData[row].length; col++) {
                    const crosswordCell = document.createElement("td");
                    if (q.puzzleData[row][col] === "#") {
                        // Add a black cell
                        crosswordCell.classList.add("black-cell");
                    } else {
                        // Add input for letters
                        const inputField = document.createElement("input");
                        inputField.setAttribute("type", "text");
                        inputField.setAttribute("maxlength", "1");
                        inputField.classList.add("crossword-input");
                        crosswordCell.appendChild(inputField);
                    }
                    crosswordRow.appendChild(crosswordCell);
                }
                crosswordTable.appendChild(crosswordRow);
            }
            puzzleQuestionContainer.appendChild(crosswordTable);
            break;

        default:
            const errorMsg = document.createElement("p");
            errorMsg.innerHTML = "Unknown puzzle type";
            puzzleQuestionContainer.appendChild(errorMsg);
            break;
    }

    // Append the puzzle-based question container to the main question wrapper
    questionWrapper.appendChild(puzzleQuestionContainer);
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
                testContainer.appendChild(questionWrapper);
            });
        }

        // Display questions when page loads
        window.onload = displayQuestions;