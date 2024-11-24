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
    "imaging": false,    
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
    "wordSearchPuzzle": false,
    "numberTable": false,
    "objectMath": false,
    "numberLine": false    
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
        case "imaging":
          sectionIdentifierText = "Imaging Section";
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
        case "numberTable":
          sectionIdentifierText = "Number Table Section";
          break;
        case "objectMath":
          sectionIdentifierText = "Object Math Section";
          break;
        case "numberLine":
          sectionIdentifierText = "Number Line Section";
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
      
      
      
      
      
      case "math":
      
    const mathContainer = document.createElement("div");
    mathContainer.classList.add("math-container"); // Add main container class for styling


    switch (q.subtype) {
case "counting":
    const countingContainer = document.createElement("div");
    countingContainer.classList.add("counting-container"); // Add a container for styling
      
    // Check if the question has an image to display multiple times
    if (q.imgSrc) {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container"); // Class for styling image layout

        // Loop to add the image according to the count specified
        for (let i = 0; i < q.count; i++) {
            const imgElement = document.createElement("img");
            imgElement.setAttribute("src", q.imgSrc);
            imgElement.setAttribute("alt", "Counting Image");
            imgElement.classList.add("counting-image"); // Style for individual images
            imgContainer.appendChild(imgElement);
        }

        // Add image container to countingContainer
        countingContainer.appendChild(imgContainer);
    }

    // Append countingContainer to the main question wrapper
    questionWrapper.appendChild(countingContainer);
    break;
      
      
      
        case "statistics":
            // For graphical math questions like charts
            switch (q.chartType) {
                case "pie-chart":
    // Create a canvas element for Chart.js to render the chart
    const canvas = document.createElement("canvas");
    canvas.classList.add("pie-chart"); // Style for pie chart
    mathContainer.appendChild(canvas);

    // Pie chart data and configuration
    const data = {
        labels: q.chartData.labels || ["Category 1", "Category 2", "Category 3"], // Sample labels
        datasets: [{
            data: q.chartData.values || [30, 50, 20], // Sample values
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    };

    // Generate the pie chart using Chart.js
    new Chart(canvas, {
        type: "pie",
        data: data,
        options: options
    });
    break;

                case "bar-chart":
                    // Load bar chart image or generate chart dynamically
                    const barChart = document.createElement("img");
                    barChart.src = q.chartData.src || "path/to/barchart.png";
                    barChart.alt = "Bar Chart";
                    barChart.classList.add("bar-chart"); // Style for bar chart
                    mathContainer.appendChild(barChart);
                    break;

                case "line-graph":
                    // Load line graph image or generate chart dynamically
                    const lineGraph = document.createElement("img");
                    lineGraph.src = q.chartData.src || "path/to/linegraph.png";
                    lineGraph.alt = "Line Graph";
                    lineGraph.classList.add("line-graph"); // Style for line graph
                    mathContainer.appendChild(lineGraph);
                    break;

                case "pictograph":
                    // Load pictograph image or generate chart dynamically
                    const pictograph = document.createElement("img");
                    pictograph.src = q.chartData.src || "path/to/pictograph.png";
                    pictograph.alt = "Pictograph";
                    pictograph.classList.add("pictograph"); // Style for pictograph
                    mathContainer.appendChild(pictograph);
                    break;

                default:
                    const defaultGraphic = document.createElement("p");
                    defaultGraphic.textContent = "Graphical question type not specified.";
                    mathContainer.appendChild(defaultGraphic);
                    break;
            }
            break;
      
      
      

case "simpleArithmetic":
    const mathContainer = document.createElement("div");
    mathContainer.classList.add("math-container");

    const arithmeticContainer = document.createElement("div");
    arithmeticContainer.classList.add("arithmetic-container");

    const num1Box = document.createElement("div");
    num1Box.classList.add("number-box");
    num1Box.textContent = q.num1;
    arithmeticContainer.appendChild(num1Box);

    const operator = document.createElement("div");
    operator.classList.add("operator");
    operator.textContent = q.operator;
    arithmeticContainer.appendChild(operator);

    const num2Box = document.createElement("div");
    num2Box.classList.add("number-box");
    num2Box.textContent = q.num2;
    arithmeticContainer.appendChild(num2Box);

    mathContainer.appendChild(arithmeticContainer);

    // Add arrows below the numbers
    const arrowsContainer = document.createElement("div");
    arrowsContainer.classList.add("arrows");

    const leftArrow = document.createElement("div");
    leftArrow.classList.add("leftArrow");
    arrowsContainer.appendChild(leftArrow);

    const rightArrow = document.createElement("div");
    rightArrow.classList.add("rightArrow");
    arrowsContainer.appendChild(rightArrow);

    mathContainer.appendChild(arrowsContainer);

    // Add result box
    const resultBox = document.createElement("div");
    resultBox.classList.add("result-box");
    const resultInput = document.createElement("input");
    resultInput.type = "number";
    resultInput.placeholder = "?";
    resultBox.appendChild(resultInput);
    mathContainer.appendChild(resultBox);

    questionWrapper.appendChild(mathContainer);
    break;

      
      
case "middle-school":
            // For middle school math (fractions, decimals, simple algebra)
            const middleSchoolContent = q.mathContent || ["1/2 + 1/4 =", "Solve for x: 3x + 5 = 20"];
            middleSchoolContent.forEach(problem => {
                const problemElement = document.createElement("p");
                problemElement.textContent = problem;
                problemElement.classList.add("math-middle-question"); // Style for middle school-level questions
                mathContainer.appendChild(problemElement);
            });
            break;

        case "high-school":
            // For high school math (geometry, trigonometry, calculus basics)
            const highSchoolContent = q.mathContent || ["Find the area of a circle with radius 5", "sin(45°)"];
            highSchoolContent.forEach(highSchoolProblem => {
                const highSchoolProblemElement = document.createElement("p");
                highSchoolProblemElement.textContent = highSchoolProblem;
                highSchoolProblemElement.classList.add("math-high-school-question"); // Style for high school-level questions
                mathContainer.appendChild(highSchoolProblemElement);
            });
            break;

        case "advanced":
            // For advanced level math (complex calculus, algebra, etc.)
            const advancedMathContent = q.mathContent || ["Differentiate: d/dx(x^3 + 3x^2)", "Integrate: ∫(2x dx)"];
            advancedMathContent.forEach(advancedProblem => {
                const advancedProblemElement = document.createElement("p");
                advancedProblemElement.textContent = advancedProblem;
                advancedProblemElement.classList.add("math-advanced-question"); // Style for advanced-level questions
                mathContainer.appendChild(advancedProblemElement);
            });
      
            break;

        default:
            // Default math question if subtype is not specified
            const defaultMathContent = document.createElement("p");
            defaultMathContent.textContent = q.mathContent || "Solve the math problem:";
            defaultMathContent.classList.add("math-question"); // General styling
            mathContainer.appendChild(defaultMathContent);
            break;
    }

    // Append the math container to the question wrapper
    questionWrapper.appendChild(mathContainer);
    break;
      
      
      
      
      
      
      
      
      // Comprehension html Layout
case "comprehension":
  // Create and display the story (no number before the story)
  const storyContainer = document.createElement("div");
  const storyParagraph = document.createElement("p");
  storyParagraph.innerHTML = q.story;  // Display the story text
  storyParagraph.classList.add("handwritingPrompt");
  storyContainer.appendChild(storyParagraph);
  questionWrapper.appendChild(storyContainer);

  // Loop through the comprehension questions and display each multiple-choice question
  q.questions.forEach((subQuestion, subIndex) => {
    const subQuestionText = document.createElement("p");
    subQuestionText.innerHTML = `${index + 1}.${subIndex + 1} ${subQuestion.question}`;  // Display the question text
    questionWrapper.appendChild(subQuestionText);

    const subChoicesContainer = document.createElement("div");
    subQuestion.choices.forEach((choice, i) => {
      const choiceInput = document.createElement("input");
      choiceInput.setAttribute("type", "radio");
      choiceInput.setAttribute("id", `choice-${subIndex}-${i}`);
      choiceInput.setAttribute("name", `subquestion-${index}-${subIndex}`);
      choiceInput.setAttribute("value", choice);

      const choiceLabel = document.createElement("label");
      choiceLabel.setAttribute("for", `choice-${subIndex}-${i}`);
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
      
      
      
      
case "imaging":
    // Create a container div for the image and associated questions
    const imagingContainer = document.createElement("div");
    imagingContainer.classList.add("imaging-container"); // Unique class for styling

    // Create and add the image element only once
    const imagingImgElement = document.createElement("img");

    // Check if the image source exists and log the path
    if (q.imageSrc) {
        console.log("Loading image from: " + q.imageSrc); // Log image path for debugging
        imagingImgElement.setAttribute("src", q.imageSrc); // Set the image source dynamically
    } else {
        console.log("Image source is missing for question set: ", q); // Log missing image source for debugging
    }

    imagingImgElement.setAttribute("alt", "Question Image");
    imagingImgElement.setAttribute("width", "100%"); // Set width as needed
    imagingImgElement.setAttribute("height", "auto"); // Set height as needed
    imagingContainer.appendChild(imagingImgElement);
    imagingContainer.appendChild(document.createElement("br"));

    // Loop through each question related to this single image
    q.questions.forEach((question, questionIndex) => {
        // Create a question description for each question
        const imagingQuestionDescription = document.createElement("p");
        imagingQuestionDescription.innerHTML = question.description; // Use the individual question description
        imagingContainer.appendChild(imagingQuestionDescription);

        // Create a unique sub-choices container for each question's options or input field
        const imagingSubChoicesContainer = document.createElement("div");
        imagingSubChoicesContainer.classList.add("imaging-sub-choices-container"); // Unique class for styling

        // Based on the question's sub-type, add either multiple-choice or fill-in-the-blank options
        if (question.subType === "multiple_choice") {
            question.options.forEach((option, optionIndex) => {
                const imagingRadioInput = document.createElement("input");
                imagingRadioInput.setAttribute("type", "radio");
                imagingRadioInput.setAttribute("id", `imaging-option-${questionIndex}-${optionIndex}`);
                imagingRadioInput.setAttribute("name", `imaging-question-${questionIndex}`);
                imagingRadioInput.setAttribute("value", option);

                const imagingLabel = document.createElement("label");
                imagingLabel.setAttribute("for", `imaging-option-${questionIndex}-${optionIndex}`);
                imagingLabel.innerHTML = option;

                imagingSubChoicesContainer.appendChild(imagingRadioInput);
                imagingSubChoicesContainer.appendChild(imagingLabel);
                imagingSubChoicesContainer.appendChild(document.createElement("br"));
            });
        } else if (question.subType === "fill_in_the_blank") {
            const imagingAnswerInput = document.createElement("input");
            imagingAnswerInput.setAttribute("type", "text");
            imagingAnswerInput.setAttribute("id", `imaging-answer-${questionIndex}`);
            imagingAnswerInput.setAttribute("name", `imaging-question-${questionIndex}`);

            const imagingAnswerLabel = document.createElement("label");
            imagingAnswerLabel.innerHTML = "Answer: ";

            imagingSubChoicesContainer.appendChild(imagingAnswerLabel);
            imagingSubChoicesContainer.appendChild(imagingAnswerInput);
            imagingSubChoicesContainer.appendChild(document.createElement("br"));
        }

        // Append each question's sub-choices container to the main container
        imagingContainer.appendChild(imagingSubChoicesContainer);
    });

    // Finally, append the entire container for this case to the questionWrapper
    questionWrapper.appendChild(imagingContainer);
    break;

    
      
      
      
      
case "maze":
    // Create a container for the maze-based question
    const mazeQuestionContainer = document.createElement("div");
    mazeQuestionContainer.classList.add("maze-based-container"); // Optional class for styling

    // Create a question description or instruction
    const mazeDescription = document.createElement("p");
    mazeDescription.innerHTML = q.description; // Set maze instructions
    mazeQuestionContainer.appendChild(mazeDescription);

    // Create maze image or canvas
    const mazeImg = document.createElement("img");
    mazeImg.setAttribute("src", q.puzzleSrc); // Dynamic maze image or canvas rendering
    mazeImg.setAttribute("alt", "Maze Puzzle");
    mazeImg.setAttribute("width", "100%");
    mazeImg.setAttribute("height", "auto");
    mazeQuestionContainer.appendChild(mazeImg);

    // Append the maze-based question container to the main question wrapper
    questionWrapper.appendChild(mazeQuestionContainer);
    break;
      
      
      

      
      
      
      
      
      
case "crossword":
    // Create a container for the crossword-based question
    const crosswordQuestionContainer = document.createElement("div");
    crosswordQuestionContainer.classList.add("crossword-based-container");

    // Create a question description or instruction
    const crosswordDescription = document.createElement("p");
    crosswordDescription.innerHTML = q.description;
    crosswordQuestionContainer.appendChild(crosswordDescription);

    // Create a grid for the Crossword
    const crosswordTable = document.createElement("table");
    crosswordTable.classList.add("crossword-table");

    let clueNumber = 1; // Initialize clue number counter
    const acrossCluesMap = {}; // To store across clues by number
    const downCluesMap = {}; // To store down clues by number

      
      
      
      
for (let row = 0; row < q.puzzleData.length; row++) {
    const crosswordRow = document.createElement("tr");

    for (let col = 0; col < q.puzzleData[row].length; col++) {
        const crosswordCell = document.createElement("td");

        if (q.puzzleData[row][col] === "#") {
            // Check if the cell is fully surrounded by playable cells
            const isConfined = (
                row > 0 &&
                row < q.puzzleData.length - 1 &&
                col > 0 &&
                col < q.puzzleData[row].length - 1 &&
                q.puzzleData[row - 1][col] !== "#" && // Top
                q.puzzleData[row + 1][col] !== "#" && // Bottom
                q.puzzleData[row][col - 1] !== "#" && // Left
                q.puzzleData[row][col + 1] !== "#"    // Right
            );

            if (isConfined) {
                crosswordCell.classList.add("confined-blank");
            } else {
                crosswordCell.classList.add("black-cell");
            }
        } else {
            // Add input for letters
            const inputField = document.createElement("input");
            inputField.setAttribute("type", "text");
            inputField.setAttribute("maxlength", "1");
            inputField.classList.add("crossword-input");

            // Detect if this cell is the start of an "Across" word
            const isAcrossStart = (col === 0 || q.puzzleData[row][col - 1] === "#") &&
                                  (col < q.puzzleData[row].length - 1 && q.puzzleData[row][col + 1] !== "#");

            // Detect if this cell is the start of a "Down" word
            const isDownStart = (row === 0 || q.puzzleData[row - 1][col] === "#") &&
                                (row < q.puzzleData.length - 1 && q.puzzleData[row + 1][col] !== "#");

            // Assign and display clue number if it's the start of a word
            if (isAcrossStart || isDownStart) {
                const clueNumberSpan = document.createElement("span");
                clueNumberSpan.classList.add("clue-number");
                clueNumberSpan.innerText = clueNumber;
                crosswordCell.appendChild(clueNumberSpan);

                // Assign clues to maps
                if (isAcrossStart && clueNumber - 1 < q.acrossClues.length) {
                    acrossCluesMap[clueNumber] = q.acrossClues[clueNumber - 1];
                }
                if (isDownStart && clueNumber - 1 < q.downClues.length) {
                    downCluesMap[clueNumber] = q.downClues[clueNumber - 1];
                }

                clueNumber++; // Increment the clue number
            }

            crosswordCell.appendChild(inputField);
        }

        crosswordRow.appendChild(crosswordCell);
    }

    crosswordTable.appendChild(crosswordRow);
}

    crosswordQuestionContainer.appendChild(crosswordTable);

      
      
      
    // Create containers for "Across" and "Down" clues
    const cluesContainer = document.createElement("div");
    cluesContainer.classList.add("crossword-clues-container");

    const acrossCluesList = document.createElement("div");
    acrossCluesList.classList.add("across-clues");
    const acrossCluesHeading = document.createElement("h3");
    acrossCluesHeading.innerHTML = "Across";
    acrossCluesList.appendChild(acrossCluesHeading);

    Object.keys(acrossCluesMap).forEach((key) => {
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
      
      
      
      
      
      
      

case "coloring":
    const coloringContainer = document.createElement("div");
    coloringContainer.classList.add("coloring-container");

    // Add a coloring prompt or title
    if (q.coloringPrompt) {
        const coloringPrompt = document.createElement("h3");
        coloringPrompt.innerHTML = q.coloringPrompt;
        coloringPrompt.classList.add("coloring-prompt");
        coloringContainer.appendChild(coloringPrompt);
    }

    // Create a canvas for coloring
    const coloringCanvas = document.createElement("canvas");
    coloringCanvas.setAttribute("width", "300");
    coloringCanvas.setAttribute("height", "300");
    coloringCanvas.classList.add("coloring-canvas");
    coloringContainer.appendChild(coloringCanvas);

    // Append the coloring container to the question wrapper
    questionWrapper.appendChild(coloringContainer);

    const coloringCtx = coloringCanvas.getContext("2d");

    // Set up basic brush properties for coloring
    let coloringDrawing = false;
    let currentColor = "#000000"; // Default color is black
    coloringCtx.lineWidth = 2;
    coloringCtx.lineCap = "round";

    // Add color palette for selecting different colors
    const colorPalette = document.createElement("div");
    colorPalette.classList.add("color-palette");

    const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FFA500", "#800080"];
    colors.forEach(color => {
        const colorButton = document.createElement("button");
        colorButton.classList.add("color-button");
        colorButton.style.backgroundColor = color;
        colorButton.onclick = () => {
            currentColor = color;
            coloringCtx.strokeStyle = currentColor;
        };
        colorPalette.appendChild(colorButton);
    });

    coloringContainer.appendChild(colorPalette);

    // Draw dotted outlines for coloring based on type
    function drawOutline(content) {
        coloringCtx.clearRect(0, 0, coloringCanvas.width, coloringCanvas.height); // Clear canvas before drawing
        coloringCtx.setLineDash([5, 5]); // Dotted outline for guiding coloring

        if (q.coloringType === "letter") {
            coloringCtx.font = "200px 'Fredoka One', sans-serif";
            coloringCtx.strokeText(content, 100, 200);
        } else if (q.coloringType === "word") {
            coloringCtx.font = "200px 'Fredoka One', sans-serif";
            coloringCtx.strokeText(content, 50, 150);
        } else if (q.coloringType === "number") {
            coloringCtx.font = "200px 'Fredoka One', sans-serif";
            coloringCtx.strokeText(content, 120, 200);
        } else if (q.coloringType === "image") {
            // Sample image drawing (e.g., circle as a simple shape)
            coloringCtx.beginPath();
            coloringCtx.arc(200, 150, 100, 0, Math.PI * 2);
            coloringCtx.stroke();
        }
    }

    // Call function to draw outline based on the question content and type
    if (q.coloringContent) {
        drawOutline(q.coloringContent);
    }

    // Functions for handling drawing on the canvas
    function getTouchPos(canvas, touchEvent) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        };
    }

    coloringCanvas.addEventListener("touchstart", function(event) {
        event.preventDefault(); // Prevent scrolling while drawing
        const touchPos = getTouchPos(coloringCanvas, event);
        coloringDrawing = true;
        coloringCtx.beginPath();
        coloringCtx.moveTo(touchPos.x, touchPos.y);
    });

    coloringCanvas.addEventListener("touchmove", function(event) {
        event.preventDefault(); // Prevent scrolling while drawing
        if (coloringDrawing) {
            const touchPos = getTouchPos(coloringCanvas, event);
            coloringCtx.lineTo(touchPos.x, touchPos.y);
            coloringCtx.strokeStyle = currentColor;
            coloringCtx.stroke();
        }
    });

    coloringCanvas.addEventListener("touchend", function() {
        coloringDrawing = false;
        coloringCtx.closePath();
    });

    coloringCanvas.addEventListener("touchleave", function() {
        coloringDrawing = false;
        coloringCtx.closePath();
    });

    break;
      
      
      
      
      
      
      
case "identification":
    const identificationContainer = document.createElement("div");
    identificationContainer.classList.add("identification-container");

    // If the item type is a number, display number with images and dots
    if (q.subtype === "number") {
        // Display number text at the bottom
        const numberText = document.createElement("p");
        numberText.classList.add("number-text");
        numberText.textContent = q.value; // E.g., "7"
        identificationContainer.appendChild(numberText);

        // Create a dot container to match the number
        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("dots-container");

        // Add dots based on the number value
        for (let i = 0; i < q.value; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot"); // Style individual dot
            dotsContainer.appendChild(dot);
        }
        identificationContainer.appendChild(dotsContainer);

        // Create an image container for repeated images matching the number
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        for (let i = 0; i < q.value; i++) {
            const imgElement = document.createElement("img");
            imgElement.src = q.imgSrc; // Image source for repeated images
            imgElement.alt = "Counting Image";
            imgElement.classList.add("identification-image");
            imageContainer.appendChild(imgElement);
        }
        identificationContainer.appendChild(imageContainer);
    }

    // If the item type is a letter, display the letter for identification
    else if (q.subtype === "letter") {
        const letterContainer = document.createElement("div");
        letterContainer.classList.add("letter-container");

        const letterText = document.createElement("p");
        letterText.classList.add("letter-text");
        letterText.textContent = q.value; // Letter, e.g., "A"

/*      const letterImage = document.createElement("img");
        letterImage.src = q.imgsSrc; // Image source for the shape
        letterImage.alt = "Letter Image";
        letterImage.classList.add("shape-image");

        letterContainer.appendChild(letterImage);*/
        letterContainer.appendChild(letterText);
        identificationContainer.appendChild(letterContainer);
    }

    // If the item type is a shape, display the shape for identification
    else if (q.subtype === "shape") {
        const shapeContainer = document.createElement("div");
        shapeContainer.classList.add("shape-container");

        const shapeImage = document.createElement("img");
        shapeImage.src = q.imgSrc; // Image source for the shape
        shapeImage.alt = "Shape Image";
        shapeImage.classList.add("shape-image");

        shapeContainer.appendChild(shapeImage);
        identificationContainer.appendChild(shapeContainer);
    }

    // Append the identification container to the main question wrapper
    questionWrapper.appendChild(identificationContainer);
    break;      
      
      
      
      
      
      
case "tracing":
    const tracingContainer = document.createElement("div");
    tracingContainer.classList.add("tracing-container");

    // Add a tracing prompt (title or instruction)
    if (q.tracingPrompt) {
        const tracingPrompt = document.createElement("h3");
        tracingPrompt.innerHTML = q.tracingPrompt;
        tracingPrompt.classList.add("tracing-prompt");
        tracingContainer.appendChild(tracingPrompt);
    }

    // Create a canvas for tracing
    const tracingCanvas = document.createElement("canvas");
    tracingCanvas.setAttribute("width", "300");  // Adjust width as needed
    tracingCanvas.setAttribute("height", "300"); // Adjust height as needed
    tracingCanvas.classList.add("tracing-canvas");
    tracingContainer.appendChild(tracingCanvas);

    // Append the tracing container to the question wrapper
    questionWrapper.appendChild(tracingContainer);

    const ctx = tracingCanvas.getContext("2d");

    // Function to draw dotted text on the canvas
    function drawDottedText(text, canvasWidth, canvasHeight) {
        const fontSize = 200; // Set the font size
        ctx.font = `${fontSize}px 'Advantage', sans-serif`; // Use Advantage font
        ctx.strokeStyle = "#000"; // Set fill color for the text
        ctx.setLineDash([5, 5]); // Set dash pattern for dotted effect

        // Measure the text width and center it horizontally
        const textMetrics = ctx.measureText(text);
        const textWidth = textMetrics.width;
        const x = (canvasWidth - textWidth) / 2; // Center horizontally

        // Center vertically by adjusting the baseline position
        const y = canvasHeight / 2 + fontSize / 3; // Adjust for vertical alignment

        // Fill the text with dotted effect (dotted fill)
        ctx.strokeText(text, x, y);
    }

          // Function to draw an image for tracing
    function drawTracingImage(imageSrc) {
        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0, tracingCanvas.width, tracingCanvas.height); // Adjust size and positioning
            ctx.setLineDash([5, 5]); // Dotted effect over the image
        };
        img.src = imageSrc;
    }
      
      
    // Function to draw a dotted polygon
    function drawDottedPolygon(sides, x, y, radius) {
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        for (let i = 0; i <= sides; i++) {
            const angle = (2 * Math.PI * i) / sides;
            const dx = x + radius * Math.cos(angle);
            const dy = y + radius * Math.sin(angle);
            if (i === 0) ctx.moveTo(dx, dy);
            else ctx.lineTo(dx, dy);
        }
        ctx.closePath();
        ctx.stroke();
    }

    // Function to draw a dotted heart
    function drawDottedHeart(x, y, size) {
        ctx.setLineDash([5, 5]); // Dotted line
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
        ctx.bezierCurveTo(x - size, y + size / 2, x, y + size, x, y + size * 1.5);
        ctx.bezierCurveTo(x, y + size, x + size, y + size / 2, x + size, y);
        ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
        ctx.stroke();
    }

    // Function to draw a dotted crescent
    function drawDottedCrescent(x, y, radius) {
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(x, y, radius, Math.PI * 0.25, Math.PI * 1.75, false);
        ctx.arc(x - radius / 2, y, radius, Math.PI * 1.75, Math.PI * 0.25, true);
        ctx.closePath();
        ctx.stroke();
    }

    // Function to draw a star
    function drawDottedStar(x, y, spikes, outerRadius, innerRadius) {
        let rot = (Math.PI / 2) * 3;
        let step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(x, y - outerRadius);
        ctx.setLineDash([5, 5]);

        for (let i = 0; i < spikes; i++) {
            let xOuter = x + Math.cos(rot) * outerRadius;
            let yOuter = y + Math.sin(rot) * outerRadius;
            ctx.lineTo(xOuter, yOuter);
            rot += step;

            let xInner = x + Math.cos(rot) * innerRadius;
            let yInner = y + Math.sin(rot) * innerRadius;
            ctx.lineTo(xInner, yInner);
            rot += step;
        }
        ctx.closePath();
        ctx.stroke();
    }

    // Check for specific shape types and draw them
    function drawShape(shapeType, canvasWidth, canvasHeight) {
        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;

        switch (shapeType.toLowerCase()) {
            case "square":
                drawDottedPolygon(4, centerX, centerY, 50); // Draw a square
                break;
            case "circle":
                drawDottedCircle(centerX, centerY, 50); // Draw a circle
                break;
            case "triangle":
                drawDottedPolygon(3, centerX, centerY, 50); // Draw a triangle
                break;
            case "rectangle":
                ctx.setLineDash([5, 5]);
                ctx.strokeRect(centerX - 75, centerY - 50, 150, 100); // Draw a rectangle
                break;
            case "pentagon":
                drawDottedPolygon(5, centerX, centerY, 50); // Draw a pentagon
                break;
            case "hexagon":
                drawDottedPolygon(6, centerX, centerY, 50); // Draw a hexagon
                break;
            case "heptagon":
                drawDottedPolygon(7, centerX, centerY, 50); // Draw a heptagon
                break;
            case "octagon":
                drawDottedPolygon(8, centerX, centerY, 50); // Draw an octagon
                break;
            case "decagon":
                drawDottedPolygon(10, centerX, centerY, 50); // Draw a decagon
                break;
            case "nonagon":
                drawDottedPolygon(9, centerX, centerY, 50); // Draw a nonagon
                break;
            case "diamond":
                drawDottedPolygon(4, centerX, centerY, 50); // Draw a diamond shape
                break;
            case "heart":
                drawDottedHeart(centerX, centerY, 50); // Draw a heart
                break;
            case "star":
                drawDottedStar(centerX, centerY, 5, 50, 25); // Draw a star
                break;
            case "crescent":
                drawDottedCrescent(centerX, centerY, 50); // Draw a crescent
                break;
            case "oval":
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.ellipse(centerX, centerY, 75, 50, 0, 0, Math.PI * 2); // Draw an oval
                ctx.stroke();
                break;
            default:
                console.warn("Unknown shape: " + shapeType);
        }
    }


          // Determine if the question is a shape, text, or image
    if (q.tracingContent) {
        const canvasWidth = tracingCanvas.width;
        const canvasHeight = tracingCanvas.height;
        
        const content = q.tracingContent.toLowerCase();

        if (q.tracingType === "image" && q.tracingImage) {
            // If the tracing content is an image, load the image
            drawTracingImage(q.tracingImage);
        } else if (["square", "circle", "triangle", "rectangle", "pentagon", "hexagon", "heptagon", "octagon", "diamond", "star", "crescent", "decagon", "nonagon", "heart", "oval"].includes(content)) {
            // Draw the specified shape
            drawShape(content, canvasWidth, canvasHeight); // Adjust x, y positioning as needed
        } else {
            // Draw text if it's not a shape or image
            const lines = q.tracingContent.split('\n'); // Split text into lines
            lines.forEach((line, index) => {
                drawDottedText(line, canvasWidth, canvasHeight); // Adjust position for each line
            });
        }
    }
      
      
      
    // Variables to track touch drawing
    let drawing = false;

    // Get the touch coordinates relative to the canvas
    function getTouchPos(canvas, touchEvent) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        };
    }

    // Start drawing on touch (solid line)
    tracingCanvas.addEventListener("touchstart", function(event) {
        event.preventDefault(); // Prevent scrolling while drawing
        const touchPos = getTouchPos(tracingCanvas, event);
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(touchPos.x, touchPos.y);
    });

    // Continue drawing on touch move (solid line)
    tracingCanvas.addEventListener("touchmove", function(event) {
        event.preventDefault(); // Prevent scrolling while drawing
        if (drawing) {
            const touchPos = getTouchPos(tracingCanvas, event);
            ctx.lineTo(touchPos.x, touchPos.y);
            ctx.stroke(); // Draw a solid line
        }
    });

    // Stop drawing on touch end
    tracingCanvas.addEventListener("touchend", function() {
        drawing = false;
    });

    // Stop drawing if touch is cancelled
    tracingCanvas.addEventListener("touchcancel", function() {
        drawing = false;
    });
    
    // Get the mouse coordinates relative to the canvas
    function getMousePos(canvas, mouseEvent) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: mouseEvent.clientX - rect.left,
            y: mouseEvent.clientY - rect.top
        };
    }

    // Start drawing on mouse down (solid line)
    tracingCanvas.addEventListener("mousedown", function(event) {
        const mousePos = getMousePos(tracingCanvas, event);
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(mousePos.x, mousePos.y);
    });

    // Continue drawing on mouse move (solid line)
    tracingCanvas.addEventListener("mousemove", function(event) {
        if (drawing) {
            const mousePos = getMousePos(tracingCanvas, event);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke(); // Draw a solid line
        }
    });

    // Stop drawing on mouse up
    tracingCanvas.addEventListener("mouseup", function() {
        drawing = false;
    });

    // Stop drawing on mouse out
    tracingCanvas.addEventListener("mouseout", function() {
        drawing = false;
    });
    
    break;
      
      
      
      
case "handwriting":
    const handwritingContainer = document.createElement("div");
    handwritingContainer.classList.add("handwriting-container"); // Add class for styling

          // Add a reading prompt (title or introduction)
        const handwritingTitle = document.createElement("h3");
        handwritingTitle.innerHTML = q.handwritingTitle;
        handwritingTitle.classList.add("handwritingTitle"); // Add class for styling
        handwritingContainer.appendChild(handwritingTitle);

    // Add a question prompt
    const handwritingPrompt = document.createElement("p");
    handwritingPrompt.innerHTML = q.handwritingPrompt || "Please write your answer below:";
    handwritingPrompt.classList.add("handwritingPrompt");
    handwritingContainer.appendChild(handwritingPrompt);



    // Create a textarea for the user to type their handwritten response
    const handwritingTextarea = document.createElement("textarea");
    handwritingTextarea.setAttribute("rows", "5");
    handwritingTextarea.setAttribute("cols", "50");
    handwritingTextarea.setAttribute("placeholder", "Write your answer here...");
    handwritingTextarea.classList.add("handwriting-input"); // Add class for styling
    handwritingContainer.appendChild(handwritingTextarea);

    // Append the handwriting container to the question wrapper
    questionWrapper.appendChild(handwritingContainer);

    // Add the auto-resizing behavior for the textarea
    handwritingTextarea.addEventListener('input', function() {
        this.style.height = 'auto'; // Reset height
        this.style.height = (this.scrollHeight) + 'px'; // Adjust height based on content
    });
    break;
      
      
      
      
      
      
      
      
case "reading":
    const readingContainer = document.createElement("div");
    readingContainer.classList.add("reading-container"); // Add main container class for styling
      

    switch (q.subtype) {
        case "words":
            // For single words, aligned horizontally with a bigger font size
            readingContainer.classList.add("reading-words-container"); // Add specific class for styling

            // Loop through each word in readingContent and create a styled span
            q.readingContent.forEach(word => {
                const wordItem = document.createElement("span");
                wordItem.textContent = word;
                wordItem.classList.add("reading-word"); // Style for bigger font
                readingContainer.appendChild(wordItem);
            });
            break;

        case "short-sentences":
            // For shorter sentences, aligned vertically with smaller font size
            readingContainer.classList.add("reading-short-sentences-container"); // Add specific class for styling
            q.readingContent.forEach(sentence => {
                const sentenceItem = document.createElement("p");
                sentenceItem.textContent = sentence;
                sentenceItem.classList.add("reading-short-sentence"); // Style for smaller font
                readingContainer.appendChild(sentenceItem);
            });
            break;

        case "long-sentences":
            // For longer sentences, aligned vertically with normal font size
            readingContainer.classList.add("reading-long-sentences-container"); // Add specific class for styling
            q.readingContent.forEach(longSentence => {
                const longSentenceItem = document.createElement("p");
                longSentenceItem.textContent = longSentence;
                longSentenceItem.classList.add("reading-long-sentence"); // Style for normal font
                readingContainer.appendChild(longSentenceItem);
            });
            break;

        default:
            const defaultContent = document.createElement("p");
            defaultContent.innerHTML = q.readingContent || "Please read the following text:";
            defaultContent.classList.add("reading-content"); // General styling
            readingContainer.appendChild(defaultContent);
            break;
    }

    // Append the reading container to the question wrapper
    questionWrapper.appendChild(readingContainer);
    break;
      
      
case "sudoku":
    // Create a container for the sudoku-based question
    const sudokuQuestionContainer = document.createElement("div");
    sudokuQuestionContainer.classList.add("sudoku-based-container");

    // Create a question description or instruction
    const sudokuDescription = document.createElement("p");
    sudokuQuestionContainer.appendChild(sudokuDescription);

    // Dropdown to select puzzle size
    const sizeSelector = document.createElement("select");
    sizeSelector.innerHTML = `
        <option value="4">4x4 Sudoku</option>
        <option value="6">6x6 Sudoku</option>
        <option value="9" selected>9x9 Sudoku</option>
    `;
    sudokuQuestionContainer.appendChild(sizeSelector);

    // Container to display the selected Sudoku grid
    const sudokuGridContainer = document.createElement("div");
    sudokuQuestionContainer.appendChild(sudokuGridContainer);

    // Function to create a Sudoku grid based on selected size and data
function createSudokuGrid(size, maxValue, puzzleData) {
    sudokuGridContainer.innerHTML = ""; // Clear previous grid

    // Add the appropriate class based on size
    const sudokuTable = document.createElement("table");
    sudokuTable.classList.add("sudoku-table", `sudoku-table-${size}x${size}`); // Add the size-specific class

    for (let row = 0; row < size; row++) {
        const sudokuRow = document.createElement("tr");
        for (let col = 0; col < size; col++) {
            const sudokuCell = document.createElement("td");
            const inputField = document.createElement("input");
            inputField.setAttribute("type", "number");
            inputField.setAttribute("min", "1");
            inputField.setAttribute("max", maxValue);
            inputField.classList.add("sudoku-input");

            // Set pre-filled values if present in the puzzle data
            if (puzzleData && puzzleData[row] && puzzleData[row][col] !== null) {
                inputField.value = puzzleData[row][col];
                inputField.setAttribute("readonly", true);
            }
            sudokuCell.appendChild(inputField);
            sudokuRow.appendChild(sudokuCell);
        }
        sudokuTable.appendChild(sudokuRow);
    }
    sudokuGridContainer.appendChild(sudokuTable);
}

    // Function to load the current question data into the grid
    function loadSudokuQuestion(question) {
        sudokuDescription.innerHTML = question.description; // Set the question description
        const selectedSize = parseInt(sizeSelector.value);
        const puzzleData = question.puzzleData[`${selectedSize}x${selectedSize}`];
        createSudokuGrid(selectedSize, selectedSize, puzzleData);
    }

    // Initial load of the default 9x9 Sudoku grid with the first question
    loadSudokuQuestion(q);

    // Update the grid when the selected size changes
    sizeSelector.addEventListener("change", function() {
        const selectedSize = parseInt(sizeSelector.value);
        const puzzleData = q.puzzleData[`${selectedSize}x${selectedSize}`];
        createSudokuGrid(selectedSize, selectedSize, puzzleData);
    });

    // Assume there's a refresh button that shuffles the question
    const refreshBtn = document.getElementById("refreshBtn"); // Make sure to add this button in your HTML
    refreshBtn.addEventListener("click", function() {
        // Shuffle questions and get a new question
        q = getNewShuffledQuestion(); // Assume this function shuffles and returns a new question
        loadSudokuQuestion(q); // Load the new question data into the grid
    });

    // Append the sudoku-based question container to the main question wrapper
    questionWrapper.appendChild(sudokuQuestionContainer);
    break;
      
      
      
      
case "identity":
    const identityContainer = document.createElement("div");
    identityContainer.classList.add("identity-container");

    // Add a prompt for the identity question
    const identityPrompt = document.createElement("h3");
    identityPrompt.innerHTML = q.identityPrompt;
    identityPrompt.classList.add("identity-prompt");
    identityContainer.appendChild(identityPrompt);

    // Create an array of numbers/letters
    const identityContent = q.identityContent; // Should be an array from your external file
    // Shuffle the content array
    const shuffledContent = identityContent.sort(() => Math.random() - 0.5);

    // Create a container for the identity items
    const identityContentContainer = document.createElement("div");
    identityContentContainer.classList.add("identity-content-container");

    // Generate identity items
    shuffledContent.forEach(item => {
        const identityItem = document.createElement("div");
        identityItem.classList.add("identity-item");
        identityItem.textContent = item;

        // Add click event to highlight the item
        identityItem.addEventListener("click", function() {
            this.classList.toggle("highlight"); // Toggle highlight on click
        });

        identityContentContainer.appendChild(identityItem);
    });

    // Append the content container to the identity container
    identityContainer.appendChild(identityContentContainer);

    // Append the entire identity container to the question wrapper
    questionWrapper.appendChild(identityContainer);
    break;
      
      
      
      
      
      
      
case "time":
    const timeContainer = document.createElement("div");
    timeContainer.classList.add("time-container");

    // Add time prompt
    if (q.timePrompt) {
        const timePrompt = document.createElement("h3");
        timePrompt.innerHTML = q.timePrompt;
        timePrompt.classList.add("time-prompt");
        timeContainer.appendChild(timePrompt);
    }

    // Create clock face
    const clockFace = document.createElement("div");
    clockFace.classList.add("clock-face");

    // Add hour numbers in a circular pattern
    for (let i = 1; i <= 12; i++) {
        const hourNumber = document.createElement("div");
        hourNumber.classList.add("hour-number");
        hourNumber.style.transform = `rotate(${i * 30}deg) translate(0, -80px) rotate(-${i * 30}deg)`;
        hourNumber.innerText = i;
        clockFace.appendChild(hourNumber);
    }

    // Add minute markers around the clock
    for (let i = 0; i < 60; i++) {
        const minuteMark = document.createElement("div");
        minuteMark.classList.add("minute-mark");
        minuteMark.style.transform = `rotate(${i * 6}deg) translate(0, -90px)`;
        clockFace.appendChild(minuteMark);
    }

    // Create clock hands for reading and setting modes
    const hourHand = document.createElement("div");
    hourHand.classList.add("clockHand", "hourHand");
    const minuteHand = document.createElement("div");
    minuteHand.classList.add("clockHand", "minuteHand");
    const clockDot = document.createElement("div");
    clockDot.classList.add("clockHand", "clockDot");
    clockFace.appendChild(hourHand);
    clockFace.appendChild(minuteHand);
    clockFace.appendChild(clockDot);

    timeContainer.appendChild(clockFace);
    questionWrapper.appendChild(timeContainer);

    // Display time inputs for reading mode
    if (q.timeMode === "read") {
        const inputContainer = document.createElement("div");
        inputContainer.classList.add("input-container");

        const hourInput = document.createElement("input");
        hourInput.type = "number";
        hourInput.placeholder = "Hour";
        hourInput.classList.add("time-input");
        inputContainer.appendChild(hourInput);

        const minuteInput = document.createElement("input");
        minuteInput.type = "number";
        minuteInput.placeholder = "Minute";
        minuteInput.classList.add("time-input");
        inputContainer.appendChild(minuteInput);

        timeContainer.appendChild(inputContainer);

        // Set the clock hands to the specified time
        const hourAngle = (q.displayedHour % 12) * 30 + (q.displayedMinute / 60) * 30;
        const minuteAngle = q.displayedMinute * 6;
        hourHand.style.transform = `rotate(${hourAngle}deg)`;
        minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    } else if (q.timeMode === "set") {
        // Interactive clock for setting mode with touch support
        let isHourHandMoving = false;
        let isMinuteHandMoving = false;

        function rotateHand(e, hand, degreesPerStep) {
            const rect = clockFace.getBoundingClientRect();
            const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left - rect.width / 2;
            const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top - rect.height / 2;
            const angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
            hand.style.transform = `rotate(${Math.round(angle / degreesPerStep) * degreesPerStep}deg)`;
        }

        hourHand.addEventListener("mousedown", () => { isHourHandMoving = true; });
        minuteHand.addEventListener("mousedown", () => { isMinuteHandMoving = true; });

        hourHand.addEventListener("touchstart", () => { isHourHandMoving = true; });
        minuteHand.addEventListener("touchstart", () => { isMinuteHandMoving = true; });

        document.addEventListener("mousemove", (e) => {
            if (isHourHandMoving) rotateHand(e, hourHand, 30);
            if (isMinuteHandMoving) rotateHand(e, minuteHand, 6);
        });

        document.addEventListener("touchmove", (e) => {
            if (isHourHandMoving) rotateHand(e, hourHand, 30);
            if (isMinuteHandMoving) rotateHand(e, minuteHand, 6);
        });

        document.addEventListener("mouseup", () => {
            isHourHandMoving = false;
            isMinuteHandMoving = false;
        });

        document.addEventListener("touchend", () => {
            isHourHandMoving = false;
            isMinuteHandMoving = false;
        });
    }

    break;
      
      
      
      
      
case "wordSearchPuzzle":
    const puzzleContainer = document.createElement("div");
    puzzleContainer.classList.add("puzzle-container");

    // Puzzle grid dimensions (e.g., 10x10)
    const gridSize = q.gridSize || 15;
    const grid = [];
    const targetWords = q.targetWords || [];
    let selectedCells = [];

    // Create the grid structure and add random letters
    for (let row = 0; row < gridSize; row++) {
        const rowElement = document.createElement("div");
        rowElement.classList.add("puzzle-row");

        const rowCells = [];
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement("div");
            cell.classList.add("puzzle-cell");
            cell.innerText = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random letter
            cell.dataset.row = row;
            cell.dataset.col = col;

            cell.addEventListener("click", () => {
                cell.classList.toggle("highlighted");
                const cellId = `${row}-${col}`;
                if (selectedCells.includes(cellId)) {
                    selectedCells = selectedCells.filter(id => id !== cellId);
                } else {
                    selectedCells.push(cellId);
                }
                checkForWord();
            });

            rowElement.appendChild(cell);
            rowCells.push(cell);
        }

        puzzleContainer.appendChild(rowElement);
        grid.push(rowCells);
    }
      

    // Function to place target words in the grid
    function placeWord(word) {
        const directions = [
            { row: 0, col: 1 },  // Horizontal right
            { row: 1, col: 0 },  // Vertical down
            { row: 1, col: 1 },  // Diagonal down-right
            { row: -1, col: 1 }  // Diagonal up-right
        ];

        let placed = false;
        while (!placed) {
            const startRow = Math.floor(Math.random() * gridSize);
            const startCol = Math.floor(Math.random() * gridSize);
            const direction = directions[Math.floor(Math.random() * directions.length)];
            let canPlace = true;

            for (let i = 0; i < word.length; i++) {
                const row = startRow + i * direction.row;
                const col = startCol + i * direction.col;
                if (
                    row < 0 || row >= gridSize ||
                    col < 0 || col >= gridSize ||
                    (grid[row][col].innerText !== word[i] &&
                        grid[row][col].classList.contains("word-cell"))
                ) {
                    canPlace = false;
                    break;
                }
            }

            if (canPlace) {
                for (let i = 0; i < word.length; i++) {
                    const row = startRow + i * direction.row;
                    const col = startCol + i * direction.col;
                    grid[row][col].innerText = word[i];
                    grid[row][col].classList.add("word-cell"); // Mark as part of a word
                }
                placed = true;
            }
        }
    }

    // Place each word in the puzzle
    targetWords.forEach(placeWord);

    // Display target words below the puzzle grid
    const targetWordsContainer = document.createElement("div");
    targetWordsContainer.classList.add("target-words-container");
    targetWordsContainer.innerHTML = "<strong>Words to Find:</strong> " + targetWords.join(", ");
    puzzleContainer.appendChild(targetWordsContainer);
      

    // Check if selected cells form any target word
    function checkForWord() {
        const selectedWord = selectedCells
            .map(cellId => {
                const [row, col] = cellId.split("-").map(Number);
                return grid[row][col].innerText;
            })
            .join("");

        if (targetWords.includes(selectedWord)) {
            selectedCells.forEach(cellId => {
                const [row, col] = cellId.split("-").map(Number);
                grid[row][col].classList.add("found");
            });
            selectedCells = []; // Clear selection after finding a word
        }
    }

    questionWrapper.appendChild(puzzleContainer);
    break;
      
      
      
      
      
      
case "numberTable":
    const numberTableContainer = document.createElement("div");
    numberTableContainer.classList.add("number-table-container");
      

    // Create a table element for displaying numbers
    const numberTable = document.createElement("table");
    numberTable.classList.add("number-table");

    // Generate numbers based on the specified range and shuffle them
    let start = q.rangeStart; // Starting number (e.g., 1)
    let end = q.rangeEnd; // Ending number (e.g., 100)
    let columns = q.columns || 10; // Number of columns, defaults to 10

    // Create an array of numbers within the specified range
    let numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    // Shuffle the numbers array
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Display shuffled numbers in the table
    let row;
    for (let i = 0; i < numbers.length; i++) {
        if (i % columns === 0) {
            row = document.createElement("tr");
            numberTable.appendChild(row);
        }

        const cell = document.createElement("td");
        cell.classList.add("number-cell");
        cell.innerHTML = numbers[i];
        cell.onclick = () => {
            cell.classList.toggle("highlighted"); // Toggle highlight when clicked
        };
        row.appendChild(cell);
    }

    numberTableContainer.appendChild(numberTable);
    questionWrapper.appendChild(numberTableContainer);
    break;
      
      
      
case "objectMath":
    const objectMathContainer = document.createElement("div");
    objectMathContainer.classList.add("object-math-container");
      
    // Create a wrapper for the containers and operator to display them inline
    const inlineWrapper = document.createElement("div");
    inlineWrapper.classList.add("inline-wrapper");

    // Create containers for the objects (e.g., images of items)
    const leftObjectsContainer = document.createElement("div");
    leftObjectsContainer.classList.add("objects-container", "left-objects-container");

    const rightObjectsContainer = document.createElement("div");
    rightObjectsContainer.classList.add("objects-container", "right-objects-container");

    // Function to create object images and append them to a container
    function createObjectImages(container, count, imageSrc) {
        for (let i = 0; i < count; i++) {
            const objectImage = document.createElement("img");
            objectImage.src = imageSrc;
            objectImage.classList.add("object-image");
            container.appendChild(objectImage);
        }
    }

    // Add objects for addition or subtraction based on the provided numbers
    createObjectImages(leftObjectsContainer, q.num1, q.objectImage);
    createObjectImages(rightObjectsContainer, q.num2, q.objectImage);

    // Create an operator display (e.g., "+" or "-")
    const operatorDisplay = document.createElement("div");
    operatorDisplay.classList.add("operator-display");
    operatorDisplay.innerHTML = q.operator;

    // Append containers and operator to the inline wrapper
    inlineWrapper.appendChild(leftObjectsContainer);
    inlineWrapper.appendChild(operatorDisplay);
    inlineWrapper.appendChild(rightObjectsContainer);

    // Append the inline wrapper to the main container
    objectMathContainer.appendChild(inlineWrapper);

    // Create an input field for the result
    const resultInput = document.createElement("input");
    resultInput.type = "number";
    resultInput.classList.add("result-input");
    

    // Append the result input below the inline wrapper
    objectMathContainer.appendChild(resultInput);

    // Append the object math container to the question wrapper
    questionWrapper.appendChild(objectMathContainer);
    break;
      
      

      
      
case "numberLine":
    const numberLineActivityContainer = document.createElement("div");
    numberLineActivityContainer.classList.add("number-line-activity-container");

    // Add a unique prompt for this specific number line activity
    if (q.activityPrompt) {
        const activityPrompt = document.createElement("h3");
        activityPrompt.innerHTML = q.activityPrompt;
        activityPrompt.classList.add("activity-prompt");
        numberLineActivityContainer.appendChild(activityPrompt);
    }

    // Create a unique number line element
    const numberLineElement = document.createElement("div");
    numberLineElement.classList.add("number-line-element");

    // Generate numbers for the number line based on provided range
    const startRange = q.startRange || 0;
    const endRange = q.endRange || 20;
    for (let i = startRange; i <= endRange; i++) {
        const uniqueNumberMark = document.createElement("div");
        uniqueNumberMark.classList.add("unique-number-mark");
        uniqueNumberMark.innerText = i;
        numberLineElement.appendChild(uniqueNumberMark);
    }

    // Add small tick marks to the number line
    createNumberLineTicks(startRange, endRange, numberLineElement);

    numberLineActivityContainer.appendChild(numberLineElement);

    // Add a specific expression display section for this activity
    if (q.mathExpression) {
        const mathExpressionDisplay = document.createElement("div");
        mathExpressionDisplay.classList.add("math-expression-display");
        mathExpressionDisplay.innerHTML = `<strong>Solve:</strong> ${q.mathExpression}`;
        numberLineActivityContainer.appendChild(mathExpressionDisplay);
    }

    // Create a unique input field for answers
    const activityAnswerInput = document.createElement("input");
    activityAnswerInput.type = "text";
    activityAnswerInput.classList.add("activity-answer-input");
    activityAnswerInput.placeholder = "Type your answer";
    numberLineActivityContainer.appendChild(activityAnswerInput);

    // Append the container to the main question wrapper
    questionWrapper.appendChild(numberLineActivityContainer);

    // Function to create small tick marks on the number line
    function createNumberLineTicks(start, end, container) {
        for (let i = start; i <= end; i++) {
            const tick = document.createElement("div");
            tick.classList.add("number-line-tick");
            tick.style.left = `${(i - start) / (end - start) * 100}%`;
            container.appendChild(tick);
        }
    }

    // Function to handle point highlighting on the number line
    function highlightActivityPoint(value) {
        const marks = numberLineElement.querySelectorAll('.unique-number-mark');
        marks.forEach(mark => {
            if (parseInt(mark.innerText, 10) === value) {
                mark.classList.add('highlighted-point');
            } else {
                mark.classList.remove('highlighted-point');
            }
        });
    }

    // Event listener for real-time input interaction
    activityAnswerInput.addEventListener('input', () => {
        const answerValue = parseInt(activityAnswerInput.value, 10);
        if (!isNaN(answerValue)) {
            highlightActivityPoint(answerValue);
        }
    });
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