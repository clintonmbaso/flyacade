import { handleMultipleChoice } from "./jsCases/multiple_choice.js";
import { handleSpecial } from "./jsCases/special.js";
import { handleTrueFalse } from "./jsCases/true_false.js";
import { handleOral } from "./jsCases/oral.js";
import { handleSounds } from "./jsCases/sounds.js";
import { handleFillInTheBlank } from "./jsCases/fill_in_the_blank.js";
import { handleOneWord } from "./jsCases/one_word.js";
import { handleMath } from "./jsCases/math.js";
import { handleNumberComparison } from "./jsCases/number_comparison.js";
import { handleMatching } from "./jsCases/matching.js";
import { handleSpellingsUnique } from "./jsCases/spellings_unique.js";
import { handlePunctuationsUnique } from "./jsCases/punctuations_unique.js";
import { handleWordMeaningUnique } from "./jsCases/wordMeaning_unique.js";
import { handleSentenceOrderingUnique } from "./jsCases/sentenceOrdering_unique.js";
import { handleComprehension } from "./jsCases/comprehension.js";
import { handleImageBased } from "./jsCases/image_based.js";
import { handleImaging } from "./jsCases/imaging.js";
import { handleMaze } from "./jsCases/maze.js";
import { handleCrossword } from "./jsCases/crossword.js";
import { handleColoring } from "./jsCases/coloring.js";
import { handleIdentification } from "./jsCases/identification.js";
import { handleTracing } from "./jsCases/tracing.js";
import { handleHandwriting } from "./jsCases/handwriting.js";
import { handleReading } from "./jsCases/reading.js";
import { handleSudoku } from "./jsCases/sudoku.js";
import { handleIdentity } from "./jsCases/identity.js";
import { handleTime } from "./jsCases/time.js";
import { handleWordSearchPuzzle } from "./jsCases/wordSearchPuzzle.js";
import { handleObjectMath } from "./jsCases/objectMath.js";
import { handleNumberLine } from "./jsCases/numberLine.js";
import { handleNumberTable } from "./jsCases/numberTable.js";


 // Load questions data from local storage
const questionsData = JSON.parse(localStorage.getItem('displayedQuestions')) || [];

        function displayQuestions() {
            const testContainer = document.getElementById('test-container');
            testContainer.innerHTML = ''; // Clear previous questions





            // Track added sections to avoid duplicates
  const addedSections = {
    "multiple_choice": false,
    "special": false,    
    "true_false": false,
    "oral": false,
    "sounds": false,
    "fill_in_the_blank": false,
    "matching": false,
    "one_word": false,
    "math": false,
    "number_comparison": false,
    "spellings_unique": false,
    "punctuations_unique": false, 
    "wordMeaning_unique": false,    
    "sentenceOrdering_unique": false,
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
    "objectMath": false,
    "numberLine": false,
    "numberTable": false    
  };

    let sectionIdentifierText = "";
    let totalMarks = 0; // Initialize marks counter

    questionsData.forEach((q, index) => {
        const questionWrapper = document.createElement('div');
        questionWrapper.classList.add('question-wrapper');

        // Determine section identifier based on question type
        if (!addedSections[q.type]) {
            addedSections[q.type] = true;

                    

                    switch (q.type) {
                        

          case "multiple_choice":
// Count only the multiple-choice questions
const mcCount = questionsData.filter(q => q.type === "multiple_choice").length;
    sectionIdentifierText = `Multiple Choice<br>
        <em>Shade the correct option from the given choices.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${mcCount}" disabled>
        </span>`;
    break;
                      
                      
          case "special":
// Count questions
const sCount = questionsData.filter(q => q.type === "special").length;
    sectionIdentifierText = `Special Paper 2<br>
        <em>Identify the pattern carefully and tell the difference or sequence.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${sCount}" disabled>
        </span>`;
    break;
                      
          case "unique_special":
// Count questions
const ksCount = questionsData.filter(q => q.type === "unique_special").length;
    sectionIdentifierText = `Unique Paper 2<br>
        <em>Identify the pattern carefully and tell the difference or sequence.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${ksCount}" disabled>
        </span>`;
    break;
                        
          case "oral":
// Count questions
const oCount = questionsData.filter(q => q.type === "oral").length;
    sectionIdentifierText = `Oral<br>
        <em>Respond to these questions orally.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${oCount}" disabled>
        </span>`;
          break;
                      
          case "true_false":
// Count questions
const tfCount = questionsData.filter(q => q.type === "true_false").length;
    sectionIdentifierText = `True or False<br>
        <em>Select whether the statement is true or false by shading.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${tfCount}" disabled>
        </span>`;
          break;

          case "sounds":
// Count questions
const phCount = questionsData.filter(q => q.type === "sounds").length;
    sectionIdentifierText = `Phonics<br>
        <em>Fill in the missing sounds in the blank space with the correct sound from the bank.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${phCount}" disabled>
        </span>`;
          break;
                      
          case "fill_in_the_blank":
// Count questions
const fbCount = questionsData.filter(q => q.type === "fill_in_the_blank").length;
    sectionIdentifierText = `Fill in the Blanks<br>
       <em>Fill in the missing word(s) in the blank space with the correct word from the bank.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${fbCount}" disabled>
        </span>`;
         break;

          case "matching":
    // Count the total number of readingContent items across all reading questions
    const totalPairs = questionsData
        .filter(q => q.type === "matching")
        .reduce((sum, q) => sum + (q.pairs ? q.pairs.length : 0), 0);
                      
    sectionIdentifierText = `Matching Questions<br>
       <em>Match the items from the two statements by writing the letter associated with the matching box.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${totalPairs}" disabled>
        </span>`;
          break;

          case "one_word":
// Count questions
const slCount = questionsData.filter(q => q.type === "one_word").length;
    sectionIdentifierText = `Solving<br>
        <em>Solve the following</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${slCount * 2}" disabled>
        </span>`;
          break;

          case "number_comparison":
// Count questions
const ncCount = questionsData.filter(q => q.type === "number_comparison").length;
    sectionIdentifierText = `Comparisons<br>
        <em>Compare the given numbers.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${ncCount}" disabled>
        </span>`;
          break;

          case "math":
// Count questions
const maCount = questionsData.filter(q => q.type === "math").length;
    sectionIdentifierText = `Arithmetics<br>
        <em>Solve the following Math Expressions.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${maCount}" disabled>
        </span>`;
          break;

        case "spellings_unique":
// Count questions
const suCount = questionsData.filter(q => q.type === "spellings_unique").length;
    sectionIdentifierText = `Spellings<br>
        <em>Choose the correctly spelled word of the four given options.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${suCount}" disabled>
        </span>`;
          break;

        case "punctuations_unique":
// Count questions
const puCount = questionsData.filter(q => q.type === "punctuations_unique").length;
    sectionIdentifierText = `Punctuations<br>
        <em>Choose the correctly punctuated sentence of the given four options.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${puCount}" disabled>
        </span>`;
          break;

        case "wordMeaning_unique":
// Count questions
const wmCount = questionsData.filter(q => q.type === "wordMeaning_unique").length;
    sectionIdentifierText = `Word Meaning<br>
        <em>Read the sentence given, choose the correct meaning of the word or phrase in quotes.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${wmCount}" disabled>
        </span>`;
          break;

        case "sentenceOrdering_unique":
// Count questions
const soCount = questionsData.filter(q => q.type === "sentenceOrdering_unique").length;
    sectionIdentifierText = `Sentence Ordering<br>
        <em>Write the sentence correctly by determining the correct order of words or clauses.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${soCount}" disabled>
        </span>`;
          break;

          case "comprehension":
    // Count the total number of readingContent items across all reading questions
    const totalComprehension = questionsData
        .filter(q => q.type === "comprehension")
        .reduce((sum, q) => sum + (q.questions ? q.questions.length : 0), 0);
                      
    sectionIdentifierText = `Comprehension<br>
        <em>Read the story and answer the questions that follow</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${totalComprehension}" disabled>
        </span>`;
          break;

          case "image_based":
// Count questions
const ibCount = questionsData.filter(q => q.type === "image_based").length;
    sectionIdentifierText = `Image Based<br>
        <em>Carefully analyse the given image and answer the question that follow</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${ibCount}" disabled>
        </span>`;
          break;

          case "imaging":
    // Count the total number of readingContent items across all reading questions
    const totalQuestions = questionsData
        .filter(q => q.type === "imaging")
        .reduce((sum, q) => sum + (q.questions ? q.questions.length : 0), 0);
                      
    sectionIdentifierText = `Imaging<br>
       <em>Carefully analyse the given image and answer the questions that follow</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${totalQuestions}" disabled>
        </span>`;
          break;

          case "maze":
// Count questions
const mzCount = questionsData.filter(q => q.type === "maze").length;
    sectionIdentifierText = `Maze<br>
        <em>Carefully find the path through the maze from start to finish.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${mzCount * 10}" disabled>
        </span>`;
          break;

          case "crossword":
    // Count the total number of readingContent items across all reading questions
    const totalClues = questionsData
    .filter(q => q.type === "crossword") // Filter to include only crossword-type questions
    .reduce((sum, q) => sum + (q.acrossClues ? q.acrossClues.length : 0) + (q.downClues ? q.downClues.length : 0), 0);
                      
    sectionIdentifierText = `Crossword<br>
       <em>Read the clues given and fill in the puzzle with correct spellings in capital letters.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${totalClues}" disabled>
        </span>`;
          break;

          case "coloring":
// Count questions
const clCount = questionsData.filter(q => q.type === "coloring").length;
    sectionIdentifierText = `Coloring<br>
       <em>Carefully color the given work inside. Do not color outside the outlines.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${clCount}" disabled>
        </span>`;
          break;
                      
        case "identification":
    // Count the total number of readingContent items across all reading questions
    const totalValues = questionsData
        .filter(q => q.type === "identification")
        .reduce((sum, q) => sum + (q.value ? q.value.length : 0), 0);
                      
    sectionIdentifierText = `Identification<br>
       <em>Look at the given work and identify it.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${totalValues}" disabled>
        </span>`;
          break;

          case "tracing":
// Count questions
const trCount = questionsData.filter(q => q.type === "tracing").length;
    sectionIdentifierText = `Tracing<br>
       <em>Carefully trace the given work within the dotted outlines.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${trCount}" disabled>
        </span>`;
          break;
                        
          case "handwriting":
// Count questions
const hwCount = questionsData.filter(q => q.type === "handwriting").length;
    sectionIdentifierText = `Handwriting<br>
       <em>Carefully copy the text above in the space given following handwriting rules.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${hwCount * 10}" disabled>
        </span>`;
          break;

          case "reading":
    // Count the total number of readingContent items across all reading questions
    const totalReadingContents = questionsData
        .filter(q => q.type === "reading")
        .reduce((sum, q) => sum + (q.readingContent ? q.readingContent.length : 0), 0);

    sectionIdentifierText = `Reading<br>
       <em>Carefully read the following words using sounding rules.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${totalReadingContents}" disabled>
        </span>`;
    break;
        
          case "sudoku":
// Count questions
const skCount = questionsData.filter(q => q.type === "sudoku").length;
    sectionIdentifierText = `Sudoku<br>
       <em>Solve the sudoku given below accurately.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${skCount * 10}" disabled>
        </span>`;
          break;

          case "identity":
// Count questions
const iyCount = questionsData.filter(q => q.type === "identity").length;
    sectionIdentifierText = `Identity<br>
       <em>Solve the sudoku given below accurately.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${iyCount * 2}" disabled>
        </span>`;
          break;
        
          case "time":
// Count questions
const teCount = questionsData.filter(q => q.type === "time").length;
    sectionIdentifierText = `Time<br>
       <em>Write the time or show the time given.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${teCount * 2}" disabled>
        </span>`;
          break;
        
          case "wordSearchPuzzle":
    // Count the total number of readingContent items across all reading questions
    const totalTargetWords = questionsData
        .filter(q => q.type === "wordSearchPuzzle")
        .reduce((sum, q) => sum + (q.targetWords ? q.targetWords.length : 0), 0);

    sectionIdentifierText = `Word Search Puzzle<br>
       <em>Search for the hidden words in the puzzle and cancil out the words found.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${totalTargetWords}" disabled>
        </span>`;
          break;

          case "objectMath":
// Count questions
const omCount = questionsData.filter(q => q.type === "objectMath").length;
    sectionIdentifierText = `Object Math<br>
       <em>Solve by adding or subtracting the given shapes and enter the number in the box below.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${omCount * 2}" disabled>
        </span>`;
          break;
                       
          case "numberLine":
// Count questions
const nlCount = questionsData.filter(q => q.type === "numberLine").length;
    sectionIdentifierText = `Number Line<br>
       <em>Solve the arithmetic below using a number line.</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${nlCount * 2}" disabled>
        </span>`;
          break;

          case "numberTable":
// Count questions
const ntCount = questionsData.filter(q => q.type === "numberTable").length;

    sectionIdentifierText = `Number Table<br>
       <em>Number Table Section</em>
        <span class="mc-inputs">
            <input type="number" class="mc-1st" readonly>
            <input type="number" class="mc-2nd" value="${ntCount * 10}" disabled>
        </span>`;
          break;

          default:
          sectionIdentifierText = "Section";
          break;
      }

          
                   // Create section identifier
    const sectionIdentifier = document.createElement('div');
    sectionIdentifier.classList.add('section-identifier');
    sectionIdentifier.innerHTML = sectionIdentifierText;
    questionWrapper.appendChild(sectionIdentifier);
        }

                
                // Only append questions if they are not 'true_false' type
if (q.type !== "true_false" && q.type !== "fill_in_the_blank" && q.type !== "sounds") {
    const questionText = document.createElement('div');
    questionText.innerHTML = `${index + 1}. ${q.question}`;
    questionWrapper.appendChild(questionText);
}
                
                
switch (q.type) {
                  
case "multiple_choice":
        handleMultipleChoice(q, index, questionWrapper);
break;
                  
case "special":
        handleSpecial(q, index, questionWrapper);
break;
  
case "true_false":
        handleTrueFalse(q, index, questionWrapper);
break;
                 
case "oral":
        handleOral(q, index, questionWrapper);
break;
                  
case "sounds":
        handleSounds(q, index, questionWrapper, questionsData);
break;
                  
case "fill_in_the_blank":
        handleFillInTheBlank(q, index, questionWrapper, questionsData);
break;
  
case "one_word":
        handleOneWord(q, index, questionWrapper);
break;  
                  
case "math":
        handleMath(q, index, questionWrapper);
break;

case "number_comparison":
        handleNumberComparison(q, index, questionWrapper);
break;

case "matching":
        handleMatching(q, index, questionWrapper);
break;
                  
case "spellings_unique":
        handleSpellingsUnique(q, index, questionWrapper);
break;

case "punctuations_unique":
        handlePunctuationsUnique(q, index, questionWrapper);
break;

case "wordMeaning_unique":
        handleWordMeaningUnique(q, index, questionWrapper);
break;

case "sentenceOrdering_unique":
        handleSentenceOrderingUnique(q, index, questionWrapper);
break;

case "comprehension":
        handleComprehension(q, index, questionWrapper);
break;

case "image_based":
        handleImageBased(q, index, questionWrapper);
break;

case "imaging":
        handleImaging(q, index, questionWrapper);
break;

case "maze":
        handleMaze(q, index, questionWrapper);
break;

case "crossword":
        handleCrossword(q, index, questionWrapper);
break;

case "coloring":
        handleColoring(q, index, questionWrapper);
break;

case "identification":
        handleIdentification(q, index, questionWrapper);
break;

case "tracing":
        handleTracing(q, index, questionWrapper);
break;

case "handwriting":
        handleHandwriting(q, index, questionWrapper);
break;

case "reading":
        handleReading(q, index, questionWrapper);
break;

case "sudoku":
        handleSudoku(q, index, questionWrapper);
break;

case "identity":
        handleIdentity(q, index, questionWrapper);
break;

case "time":
        handleTime(q, index, questionWrapper);
break;
                  
case "wordSearchPuzzle":
        handleWordSearchPuzzle(q, index, questionWrapper);
break;

case "objectMath":
        handleObjectMath(q, index, questionWrapper);
break;

case "numberLine":
        handleNumberLine(q, index, questionWrapper);
break;

case "numberTable":
        handleNumberTable(q, index, questionWrapper);
break;


                  

                }
                testContainer.appendChild(questionWrapper);
            });
        }

        // Display questions when page loads
        window.onload = displayQuestions;