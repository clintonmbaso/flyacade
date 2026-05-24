// Grade 2 Literacy - Term 3 Week 7 Data
const grade2LiteracyWeek7 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 3,
        week: 7,
        title: "Word Spelling & Phonetical Structures",
        description: "Completing missing vowel and consonant graphemes, spelling reinforcement, and sorting words by long vs. short vowel sounds"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Word Spelling",
        subtopic: "Introduction to Completing Missing Graphemes",
        lessonContent: `
            <p>Welcome to our spelling lesson! Today we'll learn how to complete words by adding the missing letters.</p>
            <p><strong>Key Question:</strong> How can we figure out which letters are missing from a word?</p>
            <p><strong>Introduction:</strong> Sometimes letters are missing from words. We need to use our knowledge of sounds (phonemes) and letters (graphemes) to fill them in!</p>
            <p><strong>What are Vowels and Consonants?</strong></p>
            <ul>
                <li><strong>Vowels:</strong> A, E, I, O, U (and sometimes Y). These are open sounds made with no blockage in the mouth.</li>
                <li><strong>Consonants:</strong> All the other letters (B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z). These sounds are made by blocking the air in some way.</li>
            </ul>
            <p><strong>Example Pattern:</strong> b _ d = bird (the missing letter is 'i' - a vowel!)</p>
            <p><strong>How to Solve Missing Letter Puzzles:</strong></p>
            <ol>
                <li>Say the word out loud slowly</li>
                <li>Listen for the sound that is missing</li>
                <li>Think about which letter makes that sound</li>
                <li>Write the letter in the blank space</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Missing Vowel Example</div>
                <p>c _ t → Say it slowly: "c...a...t" → The missing vowel is 'a' → c a t = cat!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Missing Consonant Example</div>
                <p>ca _ → Say it slowly: "c...a...t" → The missing consonant is 't' → ca t = cat!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Listen Carefully</div>
                <p>d _ g = dog. The sound in the middle is "ah" which is the letter 'o'!</p>
            </div>
        `,
        taskInstructions: "Complete the words by writing in the missing vowel or consonant graphemes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Missing Vowels (A, E, I, O, U)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing vowel:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>b _ d → b ___ d = <span style="margin-left: 20px;">______</span> (bird)</div>
                        <div>c _ t → c ___ t = <span style="margin-left: 20px;">______</span> (cat)</div>
                        <div>d _ g → d ___ g = <span style="margin-left: 20px;">______</span> (dog)</div>
                        <div>s _ n → s ___ n = <span style="margin-left: 20px;">______</span> (sun)</div>
                        <div>p _ g → p ___ g = <span style="margin-left: 20px;">______</span> (pig)</div>
                        <div>h _ t → h ___ t = <span style="margin-left: 20px;">______</span> (hat)</div>
                        <div>b _ g → b ___ g = <span style="margin-left: 20px;">______</span> (bag)</div>
                        <div>c _ p → c ___ p = <span style="margin-left: 20px;">______</span> (cup)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Missing Consonants</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing consonant:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>_at → ___ at = <span style="margin-left: 20px;">______</span> (cat, hat, bat - choose one!)</div>
                        <div>do_ → do ___ = <span style="margin-left: 20px;">______</span> (dog)</div>
                        <div>_un → ___ un = <span style="margin-left: 20px;">______</span> (sun, fun, run - choose one!)</div>
                        <div>car_ → car ___ = <span style="margin-left: 20px;">______</span> (cart)</div>
                        <div>_ish → ___ ish = <span style="margin-left: 20px;">______</span> (fish)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the missing letter (vowel or consonant):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>f _ x → f ___ x = <span style="margin-left: 20px;">______</span> (fox)</div>
                        <div>be_ → be ___ = <span style="margin-left: 20px;">______</span> (bed)</div>
                        <div>_pple → ___ pple = <span style="margin-left: 20px;">______</span> (apple)</div>
                        <div>c _ w → c ___ w = <span style="margin-left: 20px;">______</span> (cow)</div>
                        <div>du_ k → du ___ k = <span style="margin-left: 20px;">______</span> (duck)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create three word puzzles for a friend. Write the word with a missing letter (use _ for the missing letter):
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 things in your home. Write each word with one missing letter (like b_d for bed). Ask a family member to solve your puzzles!",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Word Spelling",
        subtopic: "Reinforcement: Completing Missing Structural Graphemes in Complex Words",
        lessonContent: `
            <p>Today we'll practice filling in missing letters in more complex words!</p>
            <p><strong>Key Question:</strong> How can we complete longer words with missing letters?</p>
            <p><strong>Introduction:</strong> Now that we can fill in missing letters in short words, let's try longer and more complex words. Some words have special letter pairs called "graphemes" that work together to make one sound.</p>
            <p><strong>What are Structural Graphemes?</strong></p>
            <ul>
                <li><strong>Graphemes</strong> are letters that make sounds</li>
                <li>A single letter is a grapheme (like 'b' makes the /b/ sound)</li>
                <li>Two letters can work together as one grapheme (like 'sh' makes the /sh/ sound, 'ch' makes the /ch/ sound)</li>
                <li>Some words have letter pairs that must stay together!</li>
            </ul>
            <p><strong>Example Pattern:</strong> tr _ _ n = train (the missing letters are 'ai' - together they make the long 'a' sound!)</p>
            <p><strong>Tips for Complex Words:</strong></p>
            <ol>
                <li>Look at how many blanks there are (each blank is one missing letter)</li>
                <li>Think about word families you know (like -ain words: rain, train, pain)</li>
                <li>Remember that two letters can work together to make one sound</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train"></i> Train Example</div>
                <p>tr _ _ n = train. The 'ai' together make the long 'a' sound. Without both letters, the word wouldn't sound right!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Fish Example</div>
                <p>f _ sh = fish. The missing letter is 'i', and 'sh' is a grapheme pair that stays together!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair"></i> Chair Example</div>
                <p>ch _ _ r = chair. The missing letters are 'ai' - they make the long 'a' sound in the middle of the word!</p>
            </div>
        `,
        taskInstructions: "Complete the complex words by writing in the missing structural graphemes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Two Missing Letters (Vowel Pairs)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing letters:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>tr _ _ n → tr ___ n = <span style="margin-left: 20px;">______</span> (train)</div>
                        <div>r _ _ n → r ___ n = <span style="margin-left: 20px;">______</span> (rain)</div>
                        <div>br _ _ d → br ___ d = <span style="margin-left: 20px;">______</span> (bread)</div>
                        <div>s _ _ l → s ___ l = <span style="margin-left: 20px;">______</span> (sail)</div>
                        <div>b _ _ t → b ___ t = <span style="margin-left: 20px;">______</span> (boat)</div>
                        <div>cl _ _ n → cl ___ n = <span style="margin-left: 20px;">______</span> (clean)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Missing Consonant Pairs</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the missing letters:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>_ _ ip → ___ ip = <span style="margin-left: 20px;">______</span> (ship)</div>
                        <div>_ _ air → ___ air = <span style="margin-left: 20px;">______</span> (chair)</div>
                        <div>_ _ oe → ___ oe = <span style="margin-left: 20px;">______</span> (shoe)</div>
                        <div>_ _ ell → ___ ell = <span style="margin-left: 20px;">______</span> (shell)</div>
                        <div>_ _ ick → ___ ick = <span style="margin-left: 20px;">______</span> (thick)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Complex Words</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in all missing letters:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>_ l _ _ t → ___ l ___ t = <span style="margin-left: 20px;">______</span> (float)</div>
                        <div>gr _ _ nd → gr ___ nd = <span style="margin-left: 20px;">______</span> (ground)</div>
                        <div>_ r _ _ → ___ r ___ = <span style="margin-left: 20px;">______</span> (tree)</div>
                        <div>fl _ _ er → fl ___ er = <span style="margin-left: 20px;">______</span> (flower)</div>
                        <div>br _ _ _ → br ___ ___ = <span style="margin-left: 20px;">______</span> (brush)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sentence Completion</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete each word, then write the whole sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The _ _ ain is very l _ _ g. → __________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">I like to r _ _ d a b _ _ k. → __________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">The fl _ _ er is in the gr _ _ nd. → __________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 complex words from your reading book. Cover one or two letters and ask a family member to guess the missing letters.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Spelling Sorting Mechanics",
        subtopic: "Grouping Words by Long Vowel vs. Short Vowel Sounds",
        lessonContent: `
            <p>Today we'll learn how to sort words based on their vowel sounds!</p>
            <p><strong>Key Question:</strong> How can we tell if a vowel makes a long sound or a short sound?</p>
            <p><strong>Introduction:</strong> Vowels (A, E, I, O, U) can make two different kinds of sounds: short sounds and long sounds. Learning to hear the difference helps us spell words correctly!</p>
            <p><strong>Short Vowel Sounds:</strong></p>
            <ul>
                <li><strong>A says /a/</strong> as in <strong>a</strong>pple, c<strong>a</strong>t, h<strong>a</strong>t</li>
                <li><strong>E says /e/</strong> as in <strong>e</strong>gg, b<strong>e</strong>d, r<strong>e</strong>d</li>
                <li><strong>I says /i/</strong> as in <strong>i</strong>gloo, s<strong>i</strong>t, f<strong>i</strong>sh</li>
                <li><strong>O says /o/</strong> as in <strong>o</strong>ctopus, h<strong>o</strong>t, d<strong>o</strong>g</li>
                <li><strong>U says /u/</strong> as in <strong>u</strong>p, c<strong>u</strong>p, s<strong>u</strong>n</li>
            </ul>
            <p><strong>Long Vowel Sounds (the vowel says its own name!):</strong></p>
            <ul>
                <li><strong>A says /ay/</strong> as in <strong>a</strong>corn, c<strong>a</strong>ke, r<strong>ai</strong>n</li>
                <li><strong>E says /ee/</strong> as in <strong>e</strong>el, m<strong>ea</strong>t, s<strong>ee</strong></li>
                <li><strong>I says /eye/</strong> as in <strong>i</strong>ce, b<strong>i</strong>ke, l<strong>igh</strong>t</li>
                <li><strong>O says /oh/</strong> as in <strong>o</strong>val, b<strong>oa</strong>t, g<strong>o</strong></li>
                <li><strong>U says /yoo/</strong> as in <strong>u</strong>nicorn, fl<strong>u</strong>te, c<strong>u</strong>te</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cat"></i> Short Vowel Example</div>
                <p>cAt - the 'a' sounds like /a/ (like in apple). It's a SHORT vowel sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cake"></i> Long Vowel Example</div>
                <p>cAke - the 'a' sounds like /ay/ (the letter name A). It's a LONG vowel sound! The silent 'e' at the end makes the vowel long.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-rainbow"></i> Listen for the Difference</div>
                <p>Say these pairs out loud: hat (short A) vs. hate (long A). Can you hear how the vowel sound changes?</p>
            </div>
        `,
        taskInstructions: "Group list words based on long vowel vs. short vowel sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sort by Vowel Sound</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each word. Write it in the correct column based on the vowel sound you hear:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Word List:</strong> cat, cake, bed, bee, sit, bike, hot, boat, cup, cute, dog, rain, fish, meat, sun, light</p>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Short Vowel Words</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Long Vowel Words</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;"></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Short Vowel Focus</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the short vowel words. Then write each vowel sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. pig → vowel sound: ___ (short i)</div>
                        <div>2. ten → vowel sound: ___ (short e)</div>
                        <div>3. fox → vowel sound: ___ (short o)</div>
                        <div>4. bus → vowel sound: ___ (short u)</div>
                        <div>5. map → vowel sound: ___ (short a)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Long Vowel Focus</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the long vowel words. Then write the letter name of the vowel:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. time → long vowel: ___ (I)</div>
                        <div>2. tree → long vowel: ___ (E)</div>
                        <div>3. note → long vowel: ___ (O)</div>
                        <div>4. use → long vowel: ___ (U)</div>
                        <div>5. make → long vowel: ___ (A)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sorting Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create two lists. Find 3 short vowel words and 3 long vowel words in your classroom or reading book:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Short Vowel Words I Found:</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div style="margin-top: 10px;"><strong>Long Vowel Words I Found:</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Vowel Sound Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Read each sentence. Identify if the bold word has a short or long vowel:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The <strong>cat</strong> sat on the mat. → _________</div>
                        <div>B. I <strong>like</strong> to play outside. → _________</div>
                        <div>C. She has a <strong>red</strong> balloon. → _________</div>
                        <div>D. We will <strong>go</strong> to the park. → _________</div>
                        <div>E. The <strong>sun</strong> is shining. → _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Make a poster showing 5 short vowel words and 5 long vowel words with drawings for each. Bring it to share with the class!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek7);
    console.log("grade2-literacy-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek7);
    console.log("grade2-literacy-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek7',
        metadata: grade2LiteracyWeek7.metadata,
        days: grade2LiteracyWeek7
    });
    console.log("grade2-literacy-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek7 = grade2LiteracyWeek7;
console.log("grade2-literacy-week7.js loaded and registered successfully");