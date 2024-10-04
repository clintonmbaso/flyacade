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
                "matching": false
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
    sectionIdentifierText = "Section A - Multiple Choice: <br><em>Tick the correct option from the given choices.</em>";
    break;

        case "true_false":
    sectionIdentifierText = "Section B - True or False: <br><em>Select whether the statement is true or false by ticking.</em>";
    break;

        case "fill_in_the_blank":
    sectionIdentifierText = "Section C - Fill in the Blanks:<br> <em>Fill in the missing word(s) in the blank space with the correct word from the bank.</em>";
    break;

        case "matching":
    sectionIdentifierText = "Section D - Matching Questions: <br><em>Match the items from the two statements by writing the letter associated with the matching box.</em>";
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
    const getLetter = (i) => String.fromCharCode(65 + i);  // 65 is the char code for 'A'

    q.choices.forEach((choice, i) => {
        const choiceInput = document.createElement("input");
        choiceInput.setAttribute("type", "radio");
        choiceInput.setAttribute("id", `choice-${i}`);
        choiceInput.setAttribute("name", `question-${index}`);
        choiceInput.setAttribute("value", choice);

        const choiceLabel = document.createElement("label");
        choiceLabel.setAttribute("for", `choice-${i}`);
        choiceLabel.innerHTML = `${getLetter(i)}. ${choice}`;  // Add dynamic letter before the choice

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