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






const totalMultipleChoiceQuestions = Math.floor(questionsData.filter(question => question.type === "multiple_choice").length / 2);
const startIndex = 0 * totalMultipleChoiceQuestions; // Or any index based on your requirement
const endIndex = startIndex + 1; // Display only one question

// Loop to display the question from startIndex to endIndex
for (let i = startIndex; i < endIndex && i < questionsData.length; i++) {
    const question = questionsData[i];
    console.log(question);  // Or display the question in your UI
}



const totalMultipleChoiceQuestions = Math.floor(questionsData.filter(question => question.type === "multiple_choice").length / 2);
const startIndex = 0 * totalMultipleChoiceQuestions;


for (let i = startIndex; i < startIndex + totalMultipleChoiceQuestions && i < questionsData.length; i++) {
    const question = questionsData[i];
  
  for (let i = startIndex + totalMultipleChoiceQuestions; i < startIndex + (totalMultipleChoiceQuestions * 2) && i < questionsData.length; i++) {
    const question = questionsData[i];
    
    
    
    
    
    
    const totalMultipleChoiceQuestions = Math.floor(questionsData.filter(question => question.type === "multiple_choice").length / 2);
     const startIndex = 0;               

                switch (q.type) {
                    
                    
case "multiple_choice":
    // Create two column containers
    const leftColumn = document.createElement("div");
    leftColumn.className = "column";
    const rightColumn = document.createElement("div");
    rightColumn.className = "column";

    // Create a container for both columns
    const columnsContainer = document.createElement("div");
    columnsContainer.className = "columns";
    columnsContainer.appendChild(leftColumn);
    columnsContainer.appendChild(rightColumn);

    // Function to generate letter labels (A, B, C, ...)
    const getLetter = (i) => String.fromCharCode(65 + i); // 65 is the char code for 'A'

    // Shuffle the choices array
    const shuffledChoices = [...q.choices].sort(() => Math.random() - 0.5);



    // Display questions in the left column
    for (let i = startIndex; i < startIndex + totalMultipleChoiceQuestions && i < questionsData.length; i++) {
        const question = questionsData[i];

        // Create a div for the question
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `${i + 1}. ${question.question}`;
        leftColumn.appendChild(questionDiv);

        // Add choices below the question
        const choices = question.choices.sort(() => Math.random() - 0.5); // Shuffle choices

        choices.forEach((choice, index) => {
            const choiceInput = document.createElement("input");
            choiceInput.setAttribute("type", "radio");
            choiceInput.setAttribute("id", `question-${i}-choice-${index}`);
            choiceInput.setAttribute("name", `question-${i}`);
            choiceInput.setAttribute("value", choice);

            const choiceLabel = document.createElement("label");
            choiceLabel.setAttribute("for", `question-${i}-choice-${index}`);
            choiceLabel.innerHTML = `${getLetter(index)}. ${choice}`;

            leftColumn.appendChild(choiceInput);
            leftColumn.appendChild(choiceLabel);
            leftColumn.appendChild(document.createElement("br"));
        });
    }

    // Display questions in the right column
    for (let i = startIndex + totalMultipleChoiceQuestions; i < startIndex + (totalMultipleChoiceQuestions * 2) && i < questionsData.length; i++) {
        const question = questionsData[i];

        // Create a div for the question
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `${i + 1}. ${question.question}`;
        rightColumn.appendChild(questionDiv);

        // Add choices below the question
        const choices = question.choices.sort(() => Math.random() - 0.5); // Shuffle choices

        choices.forEach((choice, index) => {
            const choiceInput = document.createElement("input");
            choiceInput.setAttribute("type", "radio");
            choiceInput.setAttribute("id", `question-${i}-choice-${index}`);
            choiceInput.setAttribute("name", `question-${i}`);
            choiceInput.setAttribute("value", choice);

            const choiceLabel = document.createElement("label");
            choiceLabel.setAttribute("for", `question-${i}-choice-${index}`);
            choiceLabel.innerHTML = `${getLetter(index)}. ${choice}`;

            rightColumn.appendChild(choiceInput);
            rightColumn.appendChild(choiceLabel);
            rightColumn.appendChild(document.createElement("br"));
        });
    }

    // Add the columns container to the question wrapper
    questionWrapper.appendChild(columnsContainer);
    break;