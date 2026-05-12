// Grade 3 English - Term 3 Week 8 Data
const grade3EnglishWeek8 = {
    metadata: {
        grade: 3,
        subject: "English",
        term: 3,
        week: 8,
        title: "Using a Dictionary",
        description: "Learning to navigate, search, and extract definitions from a dictionary"
    },
    
    monday: {
        subject: "English",
        topic: "Reference Skills",
        subtopic: "Navigating the Dictionary",
        lessonContent: `
            <p>Welcome to our dictionary exploration! Today we'll learn how to find our way around this amazing book of words.</p>
            <p><strong>Key Question:</strong> How do you quickly find a word in the dictionary?</p>
            <p><strong>Introduction:</strong> A dictionary is a book that tells us what words mean, how to spell them, and how to say them. All the words are organized in alphabetical order - just like the alphabet!</p>
            <p><strong>How Dictionaries Are Organized:</strong></p>
            <ol>
                <li><strong>Alphabetical Order:</strong> Words are arranged from A to Z</li>
                <li><strong>Letter Sections:</strong> All words that start with 'A' are together, all 'B' words are together, and so on</li>
                <li><strong>Guide Words:</strong> The two words at the top of each page that tell you the first and last word on that page (we'll learn more about these tomorrow!)</li>
            </ol>
            <p><strong>Fun Fact:</strong> The longest word in the English dictionary has 45 letters! It's a scientific name for a lung disease.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Letter Race Tip</div>
                <p>Dictionaries have a thumb index - those little tabs on the side of the pages. They help you jump straight to the letter you need!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-alpha-down"></i> Alphabet Practice</div>
                <p>Before using a dictionary, remember the alphabet: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-racquet"></i> Racing Ready</div>
                <p>The letter 'M' is right in the middle of the dictionary. If you open your dictionary to the middle, you'll often land near M!</p>
            </div>
        `,
        taskInstructions: "Practice finding letter sections quickly with the Letter Race activity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Alphabet Review</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the alphabet in order:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Letter Race Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Your teacher will call out letters. For each letter, open your dictionary to that section and raise your hand. Record which letter you found first:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Letter 1: _________ &nbsp;&nbsp; Time: _________ seconds</div>
                        <div>Letter 2: _________ &nbsp;&nbsp; Time: _________ seconds</div>
                        <div>Letter 3: _________ &nbsp;&nbsp; Time: _________ seconds</div>
                        <div>Letter 4: _________ &nbsp;&nbsp; Time: _________ seconds</div>
                        <div>Letter 5: _________ &nbsp;&nbsp; Time: _________ seconds</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Letter Section Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Choose three letters. For each letter, find and write one word from that section:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Letter _____ : Word: _________</div>
                        <div>Letter _____ : Word: _________</div>
                        <div>Letter _____ : Word: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which letter was easiest to find? Which was hardest? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Practice opening your dictionary to different letters at home. Ask a family member to call out 5 letters and time how fast you can find each one.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Reference Skills",
        subtopic: "Word Hunting with Guide Words",
        lessonContent: `
            <p>Today we'll become word detectives and learn how to use guide words to find words faster!</p>
            <p><strong>Key Question:</strong> How do guide words help you find a word?</p>
            <p><strong>What Are Guide Words?</strong></p>
            <p>Guide words are the two words at the very top of each dictionary page. They tell you:</p>
            <ul>
                <li><strong>Left Guide Word:</strong> The first word on that page</li>
                <li><strong>Right Guide Word:</strong> The last word on that page</li>
            </ul>
            <p><strong>How to Use Guide Words:</strong></p>
            <ol>
                <li>Look at the guide words at the top of the page</li>
                <li>If the word you want comes BETWEEN these two words (in alphabetical order), you're on the right page!</li>
                <li>If your word comes BEFORE the left guide word, turn backward</li>
                <li>If your word comes AFTER the right guide word, turn forward</li>
            </ol>
            <p><strong>Example:</strong> If guide words are "dog" and "door", you would find "doll" on this page because doll comes between dog and door (d-o-g, d-o-l-l, d-o-o-r).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sign"></i> Guide Words Are Like Road Signs</div>
                <p>Just like a road sign tells you what towns are ahead, guide words tell you what words are on the page!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Think Alphabetically</div>
                <p>If guide words are "cat" and "chair", would "cow" be on this page? No! Because "cow" comes after "chair" (cat, chair, cow).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magnifying-glass"></i> Detective Tip</div>
                <p>Always check the second letter if the first letters are the same. For example: "bread" comes before "brown" because r comes before o in the alphabet!</p>
            </div>
        `,
        taskInstructions: "Use guide words to locate specific words and record page numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Guide Words</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each pair of guide words, circle YES if the word would be on that page, or NO if it would not:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Guide words: <strong>apple</strong> - <strong>arm</strong></div>
                        <div>Would "ark" be on this page? &nbsp;&nbsp; YES / NO</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        
                        <div style="margin-top: 10px;">Guide words: <strong>baby</strong> - <strong>ball</strong></div>
                        <div>Would "back" be on this page? &nbsp;&nbsp; YES / NO</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        
                        <div style="margin-top: 10px;">Guide words: <strong>fish</strong> - <strong>five</strong></div>
                        <div>Would "fix" be on this page? &nbsp;&nbsp; YES / NO</div>
                        <div class="answer-space" style="height: 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Hunting Mission</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find each word in your dictionary. Write down the page number where you found it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) <strong>happy</strong> &nbsp;&nbsp; Page: _________</div>
                        <div>b) <strong>friend</strong> &nbsp;&nbsp; Page: _________</div>
                        <div>c) <strong>school</strong> &nbsp;&nbsp; Page: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Guide Word Discovery</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each word you found in Part B, write the guide words from that page:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"happy" → Guide words: _________ and _________</div>
                        <div>"friend" → Guide words: _________ and _________</div>
                        <div>"school" → Guide words: _________ and _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Your teacher will give you three new words. Find each word and write its page number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Word 1: _________ &nbsp;&nbsp; Page: _________</div>
                        <div>Word 2: _________ &nbsp;&nbsp; Page: _________</div>
                        <div>Word 3: _________ &nbsp;&nbsp; Page: _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 words at home in your dictionary. For each word, write the word and the two guide words from its page.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Reference Skills",
        subtopic: "Extracting Definitions",
        lessonContent: `
            <p>Today we'll learn how to read and understand what words mean by using dictionary definitions!</p>
            <p><strong>Key Question:</strong> What information does a dictionary give us about a word?</p>
            <p><strong>Parts of a Dictionary Entry:</strong></p>
            <ol>
                <li><strong>The Word (Entry Word):</strong> The word you're looking up (shown in bold)</li>
                <li><strong>Pronunciation:</strong> Shows how to say the word (like \\'kle-vər\\)</li>
                <li><strong>Part of Speech:</strong> Tells if it's a noun, verb, adjective, etc. (n., v., adj.)</li>
                <li><strong>Definition:</strong> The meaning of the word</li>
                <li><strong>Example Sentence:</strong> Sometimes dictionaries show the word used in a sentence</li>
            </ol>
            <p><strong>How to Read a Definition:</strong></p>
            <ul>
                <li>Read the definition carefully</li>
                <li>If there are multiple definitions (1, 2, 3), choose the one that makes sense for how you want to use the word</li>
                <li>Try saying the definition in your own words to make sure you understand</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-open"></i> Sample Entry: "Clever"</div>
                <p><strong>clev·er</strong> \\'kle-vər\\ <em>adj.</em><br>
                <strong>1.</strong> Having a quick mind; smart.<br>
                <strong>2.</strong> Showing skill or originality.<br>
                <strong>Example:</strong> The clever student solved the puzzle quickly.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-language"></i> Multiple Meanings</div>
                <p>Many words have more than one meaning! For example, "bat" can be an animal OR a piece of sports equipment. The dictionary lists all meanings.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> Using New Words</div>
                <p>The best way to remember a new word is to use it in a sentence of your own. Try it with every word you look up!</p>
            </div>
        `,
        taskInstructions: "Look up a word, copy its definition, and write your own sentence.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Look Up "Clever"</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the word "clever" in your dictionary. Copy the definition below:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What part of speech is "clever"? (noun, verb, adjective, etc.)
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write Your Own Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a sentence using the word "clever":
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Choose one of these words: <strong>brave</strong>, <strong>enormous</strong>, or <strong>giggle</strong>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Word chosen: _________</div>
                        <div>Definition: ___________________________________________</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>My sentence: ___________________________________________</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Share Your Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Read your sentence to a partner. Did they understand what the word means?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Look up the word 'curious' at home. Write its definition and use it in two different sentences.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Reference Skills",
        subtopic: "Dictionary Skills Review",
        lessonContent: `
            <p>Today we'll put all our dictionary skills together in a fun scavenger hunt!</p>
            <p><strong>Key Question:</strong> Can you use a dictionary all by yourself?</p>
            <p><strong>What We've Learned This Week:</strong></p>
            <ul>
                <li><strong>Monday:</strong> How to find letter sections quickly</li>
                <li><strong>Tuesday:</strong> Using guide words to locate words</li>
                <li><strong>Wednesday:</strong> Reading and understanding definitions</li>
                <li><strong>Today:</strong> Putting it all together!</li>
            </ul>
            <p><strong>Dictionary Superpowers:</strong></p>
            <ol>
                <li>You can find any word in alphabetical order</li>
                <li>You can use guide words to check if you're on the right page</li>
                <li>You can read a definition and understand what a word means</li>
                <li>You can use new words in your own sentences</li>
            </ol>
            <p><strong>Remember:</strong> A dictionary is like a treasure map for words. The more you practice, the faster you'll become!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map"></i> Scavenger Hunt Tips</div>
                <p>Start by looking at the guide words to quickly decide if you're on the right page. Don't flip through every page!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy"></i> Becoming a Dictionary Champion</div>
                <p>The best dictionary users practice every day. Try looking up one new word each day at home!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Mystery Words</div>
                <p>Your teacher's mystery words might be tricky! Remember to check the second and third letters if multiple words start with the same letter.</p>
            </div>
        `,
        taskInstructions: "Complete the Dictionary Scavenger Hunt to demonstrate your dictionary skills.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Dictionary Scavenger Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Your teacher will give you 5 Mystery Words. Find each word in your dictionary and fill in the information below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Mystery Word #1:</strong> _________</div>
                        <div>Page number: _________ &nbsp;&nbsp; Guide words: _________ and _________</div>
                        <div>Definition: ___________________________________________</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Mystery Word #2:</strong> _________</div>
                        <div>Page number: _________ &nbsp;&nbsp; Guide words: _________ and _________</div>
                        <div>Definition: ___________________________________________</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Mystery Word #3:</strong> _________</div>
                        <div>Page number: _________ &nbsp;&nbsp; Guide words: _________ and _________</div>
                        <div>Definition: ___________________________________________</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Mystery Word #4:</strong> _________</div>
                        <div>Page number: _________ &nbsp;&nbsp; Guide words: _________ and _________</div>
                        <div>Definition: ___________________________________________</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Mystery Word #5:</strong> _________</div>
                        <div>Page number: _________ &nbsp;&nbsp; Guide words: _________ and _________</div>
                        <div>Definition: ___________________________________________</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Use a Mystery Word</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose one mystery word and write a sentence using it correctly:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Dictionary Self-Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Color the stars to show how you feel about your dictionary skills:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Finding letter sections: ★ ★ ★ ★ ★</div>
                        <div>Using guide words: ★ ★ ★ ★ ★</div>
                        <div>Reading definitions: ★ ★ ★ ★ ★</div>
                        <div>Writing my own sentences: ★ ★ ★ ★ ★</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was your favorite activity this week? What do you still want to practice?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Teach a family member how to use guide words. Find 3 words together and show them how the guide words help you find the right page.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3EnglishWeek8);
    console.log("grade3-english-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3EnglishWeek8);
    console.log("grade3-english-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3EnglishWeek8',
        metadata: grade3EnglishWeek8.metadata,
        days: grade3EnglishWeek8
    });
    console.log("grade3-english-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3EnglishWeek8 = grade3EnglishWeek8;
console.log("grade3-english-week8.js loaded and registered successfully");