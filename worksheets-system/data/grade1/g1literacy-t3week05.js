// Grade 1 Literacy - Term 3 Week 5 Data
const grade1LiteracyWeek5 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        term: 3,
        week: 5,
        title: "Dictation and Word Structure",
        description: "Listening to and spelling decodable words, understanding word structures (VC, CVC, CVCC), and breaking phrases into words"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Dictation",
        subtopic: "Lesson 77: Dictation of Isolated Decodable Words (1.14.1)",
        lessonContent: `
            <p>Welcome to our dictation lesson! Today we will practice listening carefully and spelling simple words.</p>
            <p><strong>Key Skill:</strong> Listening to sounds and writing the correct letters to spell words.</p>
            <p><strong>What are decodable words?</strong> Decodable words are words you can sound out using the letter-sound rules you have learned. For example: c-u-p = cup!</p>
            <p><strong>Tips for Dictation:</strong></p>
            <ol>
                <li>Listen carefully to each sound in the word</li>
                <li>Think about which letter makes that sound</li>
                <li>Write the letters in order</li>
                <li>Say the word slowly to check your spelling</li>
            </ol>
            <p><strong>Remember:</strong> Stretch the word like a rubber band! c-c-c-u-u-u-p-p-p = cup</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen"></i> Listen and Write</div>
                <p>When I say "tap," you stretch it: t-t-t-a-a-a-p-p-p. Then write: t-a-p</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Practice Word</div>
                <p>Let's try together: "mop" → m-o-p</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> You Can Do It!</div>
                <p>Remember: every letter makes a sound. Put the sounds together to make the word!</p>
            </div>
        `,
        taskInstructions: "Listen to each word your teacher says. Write the word in the space below.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Dictation Words</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Word 1: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Word 2: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Word 3: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Word 4: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Word 5: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Word 6: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sentence Dictation (Challenge)</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Sentence: _________________________________________________
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Self-Check</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Circle the word you spelled best: 
                    <div style="margin-top: 10px;">Word 1 &nbsp;&nbsp; Word 2 &nbsp;&nbsp; Word 3 &nbsp;&nbsp; Word 4 &nbsp;&nbsp; Word 5 &nbsp;&nbsp; Word 6</div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> Draw a star next to the word that was hardest:
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Practice spelling these words with a family member: cup, tap, mop, sit, run, dog. Say each sound as you write!",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Word Structure",
        subtopic: "Lesson 78: Word Structure Check (1.13.1) - VC, CVC, CVCC",
        lessonContent: `
            <p>Welcome back! Today we will learn about word structures and how letters fit together to make words.</p>
            <p><strong>Key Question:</strong> What patterns do letters make in words?</p>
            <p><strong>Letter Codes:</strong></p>
            <ul>
                <li><strong>V = Vowel</strong> (a, e, i, o, u)</li>
                <li><strong>C = Consonant</strong> (all the other letters: b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z)</li>
            </ul>
            <p><strong>Word Patterns:</strong></p>
            <ol>
                <li><strong>VC words:</strong> Vowel + Consonant (example: <em>at, it, up</em>)</li>
                <li><strong>CVC words:</strong> Consonant + Vowel + Consonant (example: <em>cat, dog, sun</em>)</li>
                <li><strong>CVCC words:</strong> Consonant + Vowel + Consonant + Consonant (example: <em>nest, hand, milk</em>)</li>
            </ol>
            <p><strong>Let's Practice!</strong> Your teacher will say a pattern (like "CVC"). You write a word that follows that pattern!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Teacher Says: "VC"</div>
                <p>You write: <strong>at</strong> (a is vowel, t is consonant)</p>
                <p>Other VC words: in, on, up, it</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Teacher Says: "CVC"</div>
                <p>You write: <strong>cat</strong> (c is consonant, a is vowel, t is consonant)</p>
                <p>Other CVC words: dog, sun, pig, hat</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Teacher Says: "CVCC"</div>
                <p>You write: <strong>nest</strong> (n is consonant, e is vowel, s and t are consonants)</p>
                <p>Other CVCC words: hand, milk, jump, tent</p>
            </div>
        `,
        taskInstructions: "Listen to your teacher's instructions. Write words that match the pattern they ask for.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Write VC Words</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> VC word 1: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> VC word 2: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> VC word 3: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write CVC Words</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> CVC word 1: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> CVC word 2: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> CVC word 3: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write CVCC Words</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> CVCC word 1: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> CVCC word 2: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> CVCC word 3: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Pattern Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">10</span> Write a sentence using one VC word, one CVC word, and one CVCC word:
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 things in your home. Write their names and circle the pattern (VC, CVC, or CVCC). Example: 'bed' is CVC - b-e-d!",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Dictation",
        subtopic: "Lesson 79: Dictation of CVC and CCVC Words (1.14.1)",
        lessonContent: `
            <p>Today we will practice dictation with CVC and CCVC words. You are getting so good at spelling!</p>
            <p><strong>Key Skill:</strong> Listening to and spelling CVC and CCVC words from dictation.</p>
            <p><strong>What is a CCVC word?</strong> CCVC stands for Consonant + Consonant + Vowel + Consonant.</p>
            <p><strong>Examples of CCVC words:</strong></p>
            <ul>
                <li><em>drum</em> → d-r-u-m (d and r are consonants, u is vowel, m is consonant)</li>
                <li><em>frog</em> → f-r-o-g (f and r are consonants, o is vowel, g is consonant)</li>
                <li><em>flag</em> → f-l-a-g (f and l are consonants, a is vowel, g is consonant)</li>
            </ul>
            <p><strong>Remember:</strong> CCVC words have TWO consonants at the beginning! Say them slowly: fff-lll-aaa-ggg = flag!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list"></i> CVC Review</div>
                <p>CVC = consonant-vowel-consonant<br>
                Examples: cat, dog, sun, pig, hat, bed, red, cup</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list"></i> CCVC Words</div>
                <p>CCVC = consonant-consonant-vowel-consonant<br>
                Examples: frog, drum, crab, flag, plum, sled, snake</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Helpful Hint</div>
                <p>When you hear a CCVC word, listen for the two consonant sounds at the beginning. They blend together!</p>
            </div>
        `,
        taskInstructions: "Listen carefully to each word. Write the CVC and CCVC words in the spaces below.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: CVC Dictation Words</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> CVC word 1: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> CVC word 2: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> CVC word 3: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> CVC word 4: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> CVC word 5: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: CCVC Dictation Words</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> CCVC word 1: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> CCVC word 2: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> CCVC word 3: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> CCVC word 4: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> CCVC word 5: _________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mix It Up!</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> Your teacher will mix CVC and CCVC words. Write them here:
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 CVC words and 5 CCVC words. Read them aloud to someone at home. Can they spell them correctly?",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Word Sequencing",
        subtopic: "Lesson 80: Word Sequencing Prep (1.15.1) - Breaking Phrases into Words",
        lessonContent: `
            <p>Today we will learn how to break short spoken phrases into individual words!</p>
            <p><strong>Key Skill:</strong> Listening to a sentence and identifying each separate word.</p>
            <p><strong>Why is this important?</strong> When you write sentences, you need to know where one word ends and the next word begins. This skill helps you become a better writer!</p>
            <p><strong>How to Break a Phrase into Words:</strong></p>
            <ol>
                <li>Listen to the whole phrase or sentence</li>
                <li>Say it slowly, pausing between each word</li>
                <li>Count how many words you hear</li>
                <li>Write each word separately</li>
            </ol>
            <p><strong>Example:</strong> "The cat sat" → pause between words → "The" (pause) "cat" (pause) "sat" → 3 words!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Word Counting</div>
                <p>Phrase: "I like dogs"<br>
                Words: I (1), like (2), dogs (3)<br>
                Total: 3 words!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> More Practice</div>
                <p>Phrase: "We go to school"<br>
                Words: We (1), go (2), to (3), school (4)<br>
                Total: 4 words!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> One More!</div>
                <p>Phrase: "My dad has a red car"<br>
                Words: My (1), dad (2), has (3), a (4), red (5), car (6)<br>
                Total: 6 words!</p>
            </div>
        `,
        taskInstructions: "Listen to each phrase your teacher says. Break it into individual words and write them below.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Break These Phrases into Words</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Phrase 1: 
                    <div style="margin-left: 20px; margin-top: 5px;">Words: _________ &nbsp; _________ &nbsp; _________</div>
                    <div>How many words? _____</div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Phrase 2: 
                    <div style="margin-left: 20px; margin-top: 5px;">Words: _________ &nbsp; _________ &nbsp; _________ &nbsp; _________</div>
                    <div>How many words? _____</div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Phrase 3: 
                    <div style="margin-left: 20px; margin-top: 5px;">Words: _________ &nbsp; _________ &nbsp; _________</div>
                    <div>How many words? _____</div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Phrase 4: 
                    <div style="margin-left: 20px; margin-top: 5px;">Words: _________ &nbsp; _________ &nbsp; _________ &nbsp; _________ &nbsp; _________</div>
                    <div>How many words? _____</div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Phrase 5: 
                    <div style="margin-left: 20px; margin-top: 5px;">Words: _________ &nbsp; _________ &nbsp; _________ &nbsp; _________</div>
                    <div>How many words? _____</div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Write a short phrase (3-5 words). Then break it into words and count them:
                    <div>My phrase: _________________________________</div>
                    <div>Words: _________ &nbsp; _________ &nbsp; _________ &nbsp; _________ &nbsp; _________</div>
                    <div>How many words? _____</div>
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Partner Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Say a phrase to your partner. Have them write the words and count them. Did they get it right?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Listen to someone speaking at home. Pick one sentence they say and write down each word separately. How many words were in the sentence?",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1LiteracyWeek5);
    console.log("grade1-literacy-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1LiteracyWeek5);
    console.log("grade1-literacy-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1LiteracyWeek5',
        metadata: grade1LiteracyWeek5.metadata,
        days: grade1LiteracyWeek5
    });
    console.log("grade1-literacy-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1LiteracyWeek5 = grade1LiteracyWeek5;
console.log("grade1-literacy-week5.js loaded and registered successfully");