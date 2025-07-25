// Function to generate random questions
function generateRandomQuestions() {
  const numMultipleChoice = parseInt(document.getElementById("num-multiple-choice").value);
  const numSpecial = parseInt(document.getElementById("num-special").value);
  const numUniqueSpecial = parseInt(document.getElementById("num-unique-special").value);
  const numTrueFalse = parseInt(document.getElementById("num-true-false").value);
  const numOral = parseInt(document.getElementById("num-oral").value);
  const numFillInTheBlank = parseInt(document.getElementById("num-fill-in-the-blank").value);
  const numOneWord = parseInt(document.getElementById("num-one-word").value);
  const numMath = parseInt(document.getElementById("num-math").value);
  const numNumberComparison = parseInt(document.getElementById("num-number_comparison").value);
  const numSounds = parseInt(document.getElementById("num-sounds").value);
  const numSpellingsUnique = parseInt(document.getElementById("num-spellings_unique").value);
  const numPunctuationsUnique = parseInt(document.getElementById("num-punctuations_unique").value);
  const numWordMeaningUnique = parseInt(document.getElementById("num-wordMeaning_unique").value);
  const numSentenceOrderingUnique = parseInt(document.getElementById("num-sentenceOrdering_unique").value);
  const numComprehension = parseInt(document.getElementById("num-comprehension").value);
  const numImageBased = parseInt(document.getElementById("num-image_based").value);
  const numImaging = parseInt(document.getElementById("num-imaging").value);
  const numCrossword = parseInt(document.getElementById("num-crossword").value);
  const numColoring = parseInt(document.getElementById("num-coloring").value);
  const numIdentification = parseInt(document.getElementById("num-identification").value);
  const numSorting = parseInt(document.getElementById("num-sorting").value);
  const numTracing = parseInt(document.getElementById("num-tracing").value);
  const numMatching = parseInt(document.getElementById("num-matching").value);
  const numReading = parseInt(document.getElementById("num-reading").value);
  const numHandwriting = parseInt(document.getElementById("num-handwriting").value);
  const numSudoku = parseInt(document.getElementById("num-sudoku").value);
  const numIdentity = parseInt(document.getElementById("num-identity").value);
  const numTime = parseInt(document.getElementById("num-time").value);
  const numWordSearchPuzzle = parseInt(document.getElementById("num-wordSearchPuzzle").value);
  const numMaze = parseInt(document.getElementById("num-maze").value);
  const numObjectMath = parseInt(document.getElementById("num-objectMath").value);
  const numNumberLine = parseInt(document.getElementById("num-numberLine").value);
  const numNumberTable = parseInt(document.getElementById("num-numberTable").value);

  
  
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
  randomQuestions.push(...getRandomQuestionsByType("special", numSpecial));
  randomQuestions.push(...getRandomQuestionsByType("unique_special", numUniqueSpecial));
  randomQuestions.push(...getRandomQuestionsByType("true_false", numTrueFalse));
  randomQuestions.push(...getRandomQuestionsByType("oral", numOral));
  randomQuestions.push(...getRandomQuestionsByType("fill_in_the_blank", numFillInTheBlank));
  randomQuestions.push(...getRandomQuestionsByType("one_word", numOneWord));
  randomQuestions.push(...getRandomQuestionsByType("math", numMath));
  randomQuestions.push(...getRandomQuestionsByType("number_comparison", numNumberComparison));
  randomQuestions.push(...getRandomQuestionsByType("sounds", numSounds));
  randomQuestions.push(...getRandomQuestionsByType("spellings_unique", numSpellingsUnique));
  randomQuestions.push(...getRandomQuestionsByType("punctuations_unique", numPunctuationsUnique));
  randomQuestions.push(...getRandomQuestionsByType("wordMeaning_unique", numWordMeaningUnique));
  randomQuestions.push(...getRandomQuestionsByType("sentenceOrdering_unique", numSentenceOrderingUnique));
  randomQuestions.push(...getRandomQuestionsByType("comprehension", numComprehension));
  randomQuestions.push(...getRandomQuestionsByType("image_based", numImageBased));
  randomQuestions.push(...getRandomQuestionsByType("imaging", numImaging));
  randomQuestions.push(...getRandomQuestionsByType("crossword", numCrossword));
  randomQuestions.push(...getRandomQuestionsByType("coloring", numColoring));
  randomQuestions.push(...getRandomQuestionsByType("identification", numIdentification));
  randomQuestions.push(...getRandomQuestionsByType("sorting", numSorting));
  randomQuestions.push(...getRandomQuestionsByType("tracing", numTracing));
  randomQuestions.push(...getRandomQuestionsByType("matching", numMatching));
  randomQuestions.push(...getRandomQuestionsByType("reading", numReading));
  randomQuestions.push(...getRandomQuestionsByType("handwriting", numHandwriting));
  randomQuestions.push(...getRandomQuestionsByType("sudoku", numSudoku));
  randomQuestions.push(...getRandomQuestionsByType("identity", numIdentity));
  randomQuestions.push(...getRandomQuestionsByType("time", numTime));
  randomQuestions.push(...getRandomQuestionsByType("wordSearchPuzzle", numWordSearchPuzzle));
  randomQuestions.push(...getRandomQuestionsByType("maze", numMaze));
  randomQuestions.push(...getRandomQuestionsByType("objectMath", numObjectMath));
  randomQuestions.push(...getRandomQuestionsByType("numberLine", numNumberLine));
  randomQuestions.push(...getRandomQuestionsByType("numberTable", numNumberTable));

  
  return randomQuestions;
}