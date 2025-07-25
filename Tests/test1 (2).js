
 // Load questions data from local storage

const questionsData = JSON.parse(localStorage.getItem('displayedQuestions')) || [];

        function displayQuestions() {
            const testContainer = document.getElementById('test-container');
            testContainer.innerHTML = ''; // Clear previous questions

// Function to dynamically load an external JavaScript file
function loadScript(scriptName, callback) {
if (document.querySelector(`script[src="${scriptName}"]`)) {
    setTimeout(callback, 0); // Ensure callback runs even if script is already loaded
    return;
    }

    const script = document.createElement("script");
    script.src = scriptName;
    script.onload = callback;
    document.body.appendChild(script);
}





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
          sectionIdentifierText = "Multiple Choice<br><em>Shade the correct option from the given choices.</em>";
          break;
                      
                      
          case "special":
          sectionIdentifierText = "Special Paper 2 <br><em>Identify the pattern carefully and tell the difference or sequence.</em>";
          break;
                        
          case "oral":
          sectionIdentifierText = "Oral<br><em>Respond to these questions orally.</em>";
          break;
                      
          case "true_false":
          sectionIdentifierText = "True or False<br><em>Select whether the statement is true or false by shading.</em>";
          break;

          case "sounds":
          sectionIdentifierText = "Sounds Questions<br><em>Fill in the missing sounds in the blank space with the correct sound from the bank.</em>";
          break;
                      
          case "fill_in_the_blank":
          sectionIdentifierText = "Fill in the Blanks<br><em>Fill in the missing word(s) in the blank space with the correct word from the bank.</em>";
          break;

          case "matching":
          sectionIdentifierText = "Matching Questions <br><em>Match the items from the two statements by writing the letter associated with the matching box.</em>";
          break;
                        
          case "one_word":
          sectionIdentifierText = "Solving<br><em>Solve the following questions</em>";
          break;
                        
          case "number_comparison":
          sectionIdentifierText = "Comparisons<br><em>Compare the given numbers.</em>";
          break;
                      
          case "math":
          sectionIdentifierText = "Arithmetics<br><em>Solve the following Math Expressions.</em>";
          break;
                        
        case "spellings_unique":
          sectionIdentifierText = "Spellings<br><em>Choose the correctly spelled word of the four given options.</em>";
          break;
                      
        case "punctuations_unique":
          sectionIdentifierText = "Punctuations<br><em>Choose the correctly punctuated sentence of the given four options.</em>";
          break;
                      
        case "wordMeaning_unique":
          sectionIdentifierText = "Word Meaning<br><em>Read the sentence given, choose the correct meaning of the word or phrase in quotes.</em>";
          break;
                      
        case "sentenceOrdering_unique":
          sectionIdentifierText = "Sentence Ordering<br><em>Write the sentence correctly by determining the correct order of words or clauses.</em>";
          break;
                      
          case "comprehension":
          sectionIdentifierText = "Comprehension <br><em>Read the story and answer the questions that follow</em>";
          break;
                        
          case "image_based":
          sectionIdentifierText = "Image Based <br><em>Carefully analyse the given image and answer the question that follow</em>";
          break;
                      
          case "imaging":
          sectionIdentifierText = "Imaging <br><em>Carefully analyse the given image and answer the questions that follow</em>";
          break;
                      
          case "maze":
          sectionIdentifierText = "Maze <br><em>Carefully find the path through the maze from start to finish.</em>";
          break;
                      
                        
          case "crossword":
          sectionIdentifierText = "Crossword <br><em>Read the clues given and fill in the puzzle with correct spellings in capital letters.</em>";
          break;
                      
          case "coloring":
          sectionIdentifierText = "Coloring <br><em>Carefully color the given work inside. Do not color outside the outlines.</em>";
          break;
                      
        case "identification":
          sectionIdentifierText = "Identification <br><em>Look at the given work and identify it.</em>";
          break;
                      
          case "tracing":
          sectionIdentifierText = "Tracing <br><em>Carefully trace the given work within the dotted outlines.</em>";
          break;
                        
          case "handwriting":
          sectionIdentifierText = "Handwriting <br><em>Carefully copy the text above in the space given following handwriting rules.</em>";
          break;
                        
          case "reading":
          sectionIdentifierText = "Reading <br><em>Carefully read the following words using sounding rules.</em>.";
          break;
        
          case "sudoku":
          sectionIdentifierText = "Sudoku <br><em>Solve the sudoku given below accurately.</em>";
          break;
        
          case "identity":
          sectionIdentifierText = "Identity <br><em>Solve the sudoku given below accurately.</em>";
          break;
        
          case "time":
          sectionIdentifierText = "Time <br><em>Write the time or show the time given.</em>";
          break;
        
          case "wordSearchPuzzle":
          sectionIdentifierText = "Word Search Puzzle <br><em>Solve the puzzle given below by circling all the hidden words.</em>";
          break;

          case "objectMath":
          sectionIdentifierText = "Object Math <br><em>Solve the puzzle given below by circling all the hidden words.</em>";
          break;
                       
          case "numberLine":
          sectionIdentifierText = "Number Line <br><em>Solve the arithmetic below using a number line.</em>";
          break;
                      
          case "numberTable":
          sectionIdentifierText = "Number Table <br><em>Number Table Section</em>";
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
        loadScript("jsCases/multiple_choice.js", function () {
          handleMultipleChoice(q, index, questionWrapper);
        });
break;
                  
case "special":
        loadScript("jsCases/special.js", function () {
          handleSpecial(q, index, questionWrapper);
        });
break;
                  
case "true_false":
        loadScript("jsCases/true_false.js", function () {
          handleTrueFalse(q, index, questionWrapper);
        });
break;
                 
case "oral":
        loadScript("jsCases/oral.js", function () {
          handleOral(q, index, questionWrapper);
        });
break;
                  
case "sounds":
        loadScript("jsCases/sounds.js", function () {
          handleSounds(q, index, questionWrapper);
        });
break;
                  
case "fill_in_the_blank":
        loadScript("jsCases/fill_in_the_blank.js", function () {
          handleFillInTheBlanks(q, index, questionWrapper);
        });
break;
                  
case "math":
        loadScript("jsCases/math.js", function () {
          handleMath(q, index, questionWrapper);
        });
break;

case "number_comparison":
        loadScript("jsCases/number_comparison.js", function () {
          handleNumberComparison(q, index, questionWrapper);
        });
break;

case "matching":
        loadScript("jsCases/matching.js", function () {
          handleMatching(q, index, questionWrapper);
        });
break;
                  
case "spellings_unique":
        loadScript("jsCases/spellings_unique.js", function () {
          handleSpellingsUnique(q, index, questionWrapper);
        });
break;

case "punctuations_unique":
        loadScript("jsCases/punctuations_unique.js", function () {
          handlePunctuationsUnique(q, index, questionWrapper);
        });
break;

case "wordMeaning_unique":
        loadScript("jsCases/wordMeaning_unique.js", function () {
          handleWordMeaningUnique(q, index, questionWrapper);
        });
break;

case "sentenceOrdering_unique":
        loadScript("jsCases/sentenceOrdering_unique.js", function () {
          handleSentenceOrderingUnique(q, index, questionWrapper);
        });
break;

case "comprehension":
        loadScript("jsCases/comprehension.js", function () {
          handleComprehension(q, index, questionWrapper);
        });
break;

case "image_based":
        loadScript("jsCases/image_based.js", function () {
          handleImageBased(q, index, questionWrapper);
        });
break;

case "imaging":
        loadScript("jsCases/imaging.js", function () {
          handleImaging(q, index, questionWrapper);
        });
break;

case "maze":
        loadScript("jsCases/maze.js", function () {
          handleMaze(q, index, questionWrapper);
        });
break;

case "crossword":
        loadScript("jsCases/crossword.js", function () {
          handleCrossword(q, index, questionWrapper);
        });
break;

case "coloring":
        loadScript("jsCases/coloring.js", function () {
          handleColoring(q, index, questionWrapper);
        });
break;

case "identification":
        loadScript("jsCases/identification.js", function () {
          handleIdentification(q, index, questionWrapper);
        });
break;

case "tracing":
        loadScript("jsCases/tracing.js", function () {
          handleTracing(q, index, questionWrapper);
        });
break;

case "handwriting":
        loadScript("jsCases/handwriting.js", function () {
          handleHandwriting(q, index, questionWrapper);
        });
break;

case "reading":
        loadScript("jsCases/reading.js", function () {
          handleReading(q, index, questionWrapper);
        });
break;

case "sudoku":
        loadScript("jsCases/sudoku.js", function () {
          handleSudoku(q, index, questionWrapper);
        });
break;

case "identity":
        loadScript("jsCases/identity.js", function () {
          handleIdentity(q, index, questionWrapper);
        });
break;

case "time":
        loadScript("jsCases/time.js", function () {
          handleTime(q, index, questionWrapper);
        });
break;
                  
case "wordSearchPuzzle":
        loadScript("jsCases/wordSearchPuzzle.js", function () {
          handleWordSearchPuzzle(q, index, questionWrapper);
        });
break;

case "objectMath":
        loadScript("jsCases/objectMath.js", function () {
          handleObjectMath(q, index, questionWrapper);
        });
break;

case "numberLine":
        loadScript("jsCases/numberLine.js", function () {
          handleNumberLine(q, index, questionWrapper);
        });
break;

case "numberTable":
        loadScript("jsCases/numberTable.js", function () {
          handleNumberTable(q, index, questionWrapper);
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
                testContainer.appendChild(questionWrapper);
            });
        }

        // Display questions when page loads
        window.onload = displayQuestions;