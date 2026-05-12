// Grade 3 English - Term 3 Week 7 Data
const grade3EnglishWeek7 = {
    metadata: {
        grade: 3,
        subject: "English",
        term: 3,
        week: 7,
        title: "Alphabetical Order and Sequencing",
        description: "Arranging words in alphabetical order, sequencing sentences, and logical story ordering"
    },
    
    monday: {
        subject: "English",
        topic: "Alphabetical Order",
        subtopic: "The First Letter Rule",
        lessonContent: `
            <p>Welcome! Today we'll learn how to put words in alphabetical order using the first letter of each word.</p>
            <p><strong>Key Question:</strong> How do we know which word comes first in ABC order?</p>
            <p><strong>Introduction:</strong> The alphabet has 26 letters, from A to Z. When we put words in alphabetical order, we look at the first letter of each word and arrange them from A to Z.</p>
            <p><strong>The Alphabet (A to Z):</strong></p>
            <div style="font-family: monospace; font-size: 18px; text-align: center; padding: 10px; background: #f0f8ff; border-radius: 8px;">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </div>
            <p><strong>How to Alphabetize by First Letter:</strong></p>
            <ol>
                <li>Look at the first letter of each word</li>
                <li>Find which letter comes first in the alphabet</li>
                <li>Arrange the words from earliest letter to latest letter</li>
            </ol>
            <p><strong>Example:</strong> Put these words in ABC order: <strong>Zebra, Apple, Cat</strong></p>
            <ul>
                <li>Apple (starts with A)</li>
                <li>Cat (starts with C)</li>
                <li>Zebra (starts with Z)</li>
                <li>Answer: Apple, Cat, Zebra</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-alpha-down"></i> Alphabet Train</div>
                <p>Think of the alphabet like a train! A is the engine, Z is the caboose. Words board the train based on their first letter.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Detective Work</div>
                <p>When alphabetizing, you're like a detective looking at the first letter as your biggest clue!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list"></i> Real World Use</div>
                <p>Dictionaries, phone contacts, and library books are all arranged in alphabetical order. That's why learning this is so important!</p>
            </div>
        `,
        taskInstructions: "Arrange words in alphabetical order by their first letter.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: First Letter Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put these words in alphabetical order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Sun, Stove, Ship, Sink</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Arrange these words alphabetically:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Dog, Ant, Cat, Bird</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Missing Letters</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the missing letters in the alphabet:
                    <div style="margin-left: 20px; margin-top: 10px; font-family: monospace; font-size: 16px;">
                        A _ C D _ F G H _ J K _ M N O P Q _ S T U V _ X Y _
                    </div>
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Words</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Put these words in ABC order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Monkey, Lion, Elephant, Giraffe, Zebra</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Which word comes first? Circle it: <strong>Pencil, Paper, Pen</strong>
                    <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 objects in your home. Write their names and put them in alphabetical order.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Alphabetical Order",
        subtopic: "Alphabetical Sorting (Advanced)",
        lessonContent: `
            <p>Today we'll learn how to put words in alphabetical order when they start with the <strong>same letter</strong>!</p>
            <p><strong>Key Question:</strong> What do we do when two words both start with S?</p>
            <p><strong>Introduction:</strong> Sometimes words start with the same letter. When that happens, we look at the <strong>second letter</strong> to decide which comes first.</p>
            <p><strong>The "S" Challenge:</strong> Let's put these words in order: <strong>Sun, Stove, Sink</strong></p>
            <p><strong>Step-by-Step:</strong></p>
            <ol>
                <li>All three words start with S, so we look at the second letter</li>
                <li>Sun → second letter is <strong>u</strong></li>
                <li>Stove → second letter is <strong>t</strong></li>
                <li>Sink → second letter is <strong>i</strong></li>
                <li>Now put the second letters in ABC order: i, t, u</li>
                <li>So the words go: <strong>Sink, Stove, Sun</strong></li>
            </ol>
            <p><strong>What if the second letters are also the same?</strong></p>
            <ul>
                <li>Look at the third letter, then the fourth, and so on</li>
                <li>Example: Star, Stamp → both start with St, so look at third letter (a vs a → same), look at fourth letter (r vs m → m comes before r) so Stamp comes before Star</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-layer-group"></i> Looking Deeper</div>
                <p>Think of letters like layers! First letter is Layer 1. If there's a tie, go to Layer 2 (second letter). If still tied, go to Layer 3!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-racecar"></i> The Alphabet Race</div>
                <p>Words with the same first letter are like runners tied at the start. We look at the second letter to see who pulls ahead!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Dictionary Skills</div>
                <p>This is exactly how dictionaries work! All the "S" words are together, but arranged by second, third, and fourth letters.</p>
            </div>
        `,
        taskInstructions: "Complete the 'S' Challenge and practice same-letter alphabetizing.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The "S" Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put these S-words in alphabetical order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Sun, Stove, Sink</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px; font-size: 12px; color: #666;">(Hint: Look at the second letter!)</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Arrange these words that all start with C:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Cat, Car, Cup, Crayon</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Same First Letter Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Put these words in ABC order (all start with B):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Ball, Bat, Book, Bed, Banana</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which word comes first? Circle it: <strong>Fish, Frog, Feather, Flower</strong>
                    <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Put ALL these words in alphabetical order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Dog, Cat, Duck, Cow, Deer</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Create your own list of 5 words that start with the same letter, then put them in order:
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Write down 5 words that start with the letter 'P'. Then arrange them in alphabetical order by looking at the second letter.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Sequencing",
        subtopic: "Sentence Scrambles",
        lessonContent: `
            <p>Today we'll learn how to rearrange scrambled words to make logical sentences!</p>
            <p><strong>Key Question:</strong> How do we know the right order of words in a sentence?</p>
            <p><strong>Introduction:</strong> A sentence needs to make sense. Words can't just be thrown together randomly. There is a logical order that tells us who did what, when, or where.</p>
            <p><strong>Important Sentence Rules:</strong></p>
            <ul>
                <li>A sentence usually starts with a <strong>capital letter</strong></li>
                <li>A sentence ends with a <strong>period (.)</strong>, question mark (?), or exclamation mark (!)</li>
                <li>Most sentences follow: <strong>Who + What + Where/When</strong></li>
            </ul>
            <p><strong>Example:</strong> Let's unscramble: <strong>"girl Mary a is"</strong></p>
            <ol>
                <li>Look for the capital letter → Mary (names start with capitals)</li>
                <li>Look for telling words → "is" often comes before the description</li>
                <li>Think about what makes sense: Mary is a girl</li>
                <li>Add a period: Mary is a girl.</li>
            </ol>
            <p><strong>Another Example:</strong> Scrambled: <strong>"school walks to She"</strong></p>
            <ul>
                <li>Capital letter: She</li>
                <li>Action word: walks</li>
                <li>Where: to school</li>
                <li>Correct sentence: She walks to school.</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Word Puzzle</div>
                <p>Scrambled sentences are like puzzles! Each word is a piece, and you need to fit them together to see the whole picture.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-right"></i> Subject First</div>
                <p>Most sentences start with the person, place, or thing doing the action (the subject). Find the capital letter to spot the subject!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Does It Make Sense?</div>
                <p>After you arrange the words, read the sentence out loud. If it sounds right, you've solved the puzzle!</p>
            </div>
        `,
        taskInstructions: "Unscramble the jumbled words to make correct sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Unscramble These Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> <strong>girl Mary a is</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> <strong>dogs like I</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> <strong>to school walks John</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> <strong>apple an is This</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: More Scrambles</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> <strong>blue is sky The</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> <strong>my love I mom</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> <strong>plays park sister My at the</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> <strong>cake birthday a is It</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> Write a correct sentence, then scramble it for a friend to solve:
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Write 3 simple sentences about your day. Then scramble each sentence and ask a family member to unscramble them.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Sequencing",
        subtopic: "Logical Story Sequencing",
        lessonContent: `
            <p>Today we'll learn how to arrange sentences in the correct order to tell a story that makes sense!</p>
            <p><strong>Key Question:</strong> How do we know which sentence comes first, second, and third in a story?</p>
            <p><strong>Introduction:</strong> Stories have a sequence - things happen in a certain order. First something happens, then something else happens, and so on. When sentences are out of order, the story doesn't make sense.</p>
            <p><strong>How to Find the Correct Order:</strong></p>
            <ol>
                <li>Look for the sentence that starts the story (what happens FIRST?)</li>
                <li>Look for what happens NEXT</li>
                <li>Look for what happens LAST</li>
                <li>Check if your order makes a logical story</li>
            </ol>
            <p><strong>Example:</strong> These sentences are out of order:</p>
            <div style="background: #f5f5f5; padding: 10px; margin: 10px 0;">
                <div>A. She washed her face.</div>
                <div>B. Mwansa woke up.</div>
                <div>C. She went to the market.</div>
            </div>
            <p><strong>Step-by-Step:</strong></p>
            <ul>
                <li>What happens FIRST? Mwansa woke up (B)</li>
                <li>What happens NEXT? She washed her face (A)</li>
                <li>What happens LAST? She went to the market (C)</li>
                <li>Correct order: <strong>B → A → C</strong></li>
                <li>Full story: "Mwansa woke up. She washed her face. She went to the market."</li>
            </ul>
            <p><strong>Clue Words That Help with Order:</strong></p>
            <ul>
                <li>First, Next, Then, Finally</li>
                <li>Before, After, Later</li>
                <li>Morning, Afternoon, Night</li>
                <li>Yesterday, Today, Tomorrow</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-film"></i> Story Movie</div>
                <p>Think of a story like a movie! Scenes have to play in the right order for the audience to understand what's happening.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Time Clues</div>
                <p>Look for time words like "woke up" (morning), "ate lunch" (afternoon), "went to bed" (night). These tell you when things happen!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-link"></i> Cause and Effect</div>
                <p>Sometimes one action causes another. You can't wash your face before you wake up! Look for these logical connections.</p>
            </div>
        `,
        taskInstructions: "Arrange out-of-order sentences into a logical story sequence.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Put These Sentences in Order</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. She washed her face.</div>
                        <div>B. Mwansa woke up.</div>
                        <div>C. She went to the market.</div>
                    </div>
                    <div>Correct order (write letters): _________ → _________ → _________</div>
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Morning Routine Sequence</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Put these sentences in logical order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. He ate his breakfast.</div>
                        <div>B. John went to school.</div>
                        <div>C. John brushed his teeth.</div>
                        <div>D. John woke up.</div>
                    </div>
                    <div>Correct order: ___ → ___ → ___ → ___</div>
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Story Sequencing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Arrange these sentences to make a story:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The bird built a nest in the tree.</div>
                        <div>B. The baby birds learned to fly.</div>
                        <div>C. The mother bird laid three eggs.</div>
                        <div>D. The eggs hatched into baby birds.</div>
                    </div>
                    <div>Correct order: ___ → ___ → ___ → ___</div>
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Write Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a 3-sentence story about something you did today. Mix up the sentences and give them to a friend to reorder:
                    <div class="answer-space" style="height: 120px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Write a 4-sentence story about getting ready for school. Number your sentences 1-4, then mix them up and ask someone to put them in the correct order.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Alphabetical Order and Sequencing",
        subtopic: "Review and Assessment",
        lessonContent: `
            <p>Today we'll review everything we've learned about alphabetical order and sequencing!</p>
            <p><strong>Week 7 Review:</strong></p>
            <ol>
                <li><strong>Alphabetical Order (First Letter):</strong> Arranging words using the first letter from A to Z</li>
                <li><strong>Alphabetical Order (Same Letter):</strong> Looking at the second, third, or fourth letter when first letters match</li>
                <li><strong>Sentence Scrambles:</strong> Rearranging jumbled words into sentences that make sense</li>
                <li><strong>Story Sequencing:</strong> Putting sentences in chronological order to tell a logical story</li>
            </ol>
            <p><strong>Remember These Tips:</strong></p>
            <ul>
                <li>Always look for the capital letter to find the start of a sentence</li>
                <li>Look for time words (first, next, then, finally) to help with sequencing</li>
                <li>When alphabetizing same-letter words, move to the next letter</li>
                <li>Read your answers out loud to see if they sound right</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Quick Tip</div>
                <p>Still struggling with alphabetical order? Sing the ABC song! It helps you remember which letter comes next.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Sentence Check</div>
                <p>After unscrambling a sentence, always check: Does it start with a capital letter? Does it end with a period?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-graduation-cap"></i> You've Got This!</div>
                <p>These skills will help you become a better reader, writer, and thinker. Practice makes perfect!</p>
            </div>
        `,
        taskInstructions: "Complete the review assessment activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Alphabetical Order Review</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put these words in alphabetical order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Elephant, Tiger, Monkey, Giraffe, Lion</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> All these words start with 'C'. Put them in order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Candle, Cookie, Carrot, Cupcake, Cat</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sentence Scramble Review</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Unscramble: <strong>homework my I finished</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Unscramble: <strong>to store mom The went</strong>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Story Sequencing Review</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Put these sentences in order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The caterpillar ate many leaves.</div>
                        <div>B. A butterfly flew away.</div>
                        <div>C. The caterpillar built a chrysalis.</div>
                        <div>D. A tiny caterpillar hatched from an egg.</div>
                    </div>
                    <div>Correct order: ___ → ___ → ___ → ___</div>
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What was the most helpful thing you learned about alphabetical order?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> What was the most helpful thing you learned about sequencing sentences?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Create a study guide with: 1) The alphabet written out, 2) 5 words in alphabetical order, 3) One unscrambled sentence, 4) A 3-sentence story in order.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3EnglishWeek7);
    console.log("grade3-english-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3EnglishWeek7);
    console.log("grade3-english-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3EnglishWeek7',
        metadata: grade3EnglishWeek7.metadata,
        days: grade3EnglishWeek7
    });
    console.log("grade3-english-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3EnglishWeek7 = grade3EnglishWeek7;
console.log("grade3-english-week7.js loaded and registered successfully");