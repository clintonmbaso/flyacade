// Grade 1 Literacy - Term 1 Week 9 Data
const grade1LiteracyWeek9 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        term: 1,
        week: 9,
        title: "Consonants (g, f, b, l) & Segmenting",
        description: "Identifying consonant sounds, segmenting CVC words, forming letters with ascenders/descenders, and distinguishing letters from words"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Consonant Sounds: /g/, /f/, /b/, /l/",
        lessonContent: `
            <p>Welcome to our phonics lesson! Today we will learn four new consonant sounds: /g/, /f/, /b/, and /l/.</p>
            <p><strong>Key Question:</strong> What sounds do the letters g, f, b, and l make?</p>
            <p><strong>Introduction:</strong> Consonants are letters that are not vowels. Today we will learn to identify and say the sounds of four consonants.</p>
            
            <p><strong>Let's Learn the Sounds:</strong></p>
            <ul>
                <li><strong>/g/ sound</strong> - like in <em>goat, girl, bag</em>. Put your tongue at the back of your mouth.</li>
                <li><strong>/f/ sound</strong> - like in <em>fish, fun, leaf</em>. Bite your bottom lip gently.</li>
                <li><strong>/b/ sound</strong> - like in <em>ball, bat, tub</em>. Press your lips together.</li>
                <li><strong>/l/ sound</strong> - like in <em>leg, lion, hill</em>. Put your tongue on the roof of your mouth.</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microphone-alt"></i> Say It Aloud</div>
                <p>Practice saying: /g/ - /g/ - goat &nbsp;&nbsp; /f/ - /f/ - fish &nbsp;&nbsp; /b/ - /b/ - ball &nbsp;&nbsp; /l/ - /l/ - leg</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-images"></i> Picture Match</div>
                <p>A <strong>girl</strong> starts with /g/. A <strong>flower</strong> starts with /f/. A <strong>bird</strong> starts with /b/. A <strong>lamp</strong> starts with /l/.</p>
            </div>
        `,
        taskInstructions: "Say each sound, trace the letters, and circle pictures that match the sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Say each sound after your teacher:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>g - /g/ &nbsp;&nbsp; f - /f/ &nbsp;&nbsp; b - /b/ &nbsp;&nbsp; l - /l/</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Letter Tracing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Trace the letters:
                    <div style="font-family: monospace; font-size: 24px; margin-top: 10px;">
                        <div>g g g ___ ___ ___</div>
                        <div>f f f ___ ___ ___</div>
                        <div>b b b ___ ___ ___</div>
                        <div>l l l ___ ___ ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Circle the Sound</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the pictures that start with /g/, /f/, /b/, or /l/:
                    <div style="display: flex; gap: 20px; margin-top: 10px; flex-wrap: wrap;">
                        <div>🐐 (goat)</div>
                        <div>🐟 (fish)</div>
                        <div>🐦 (bird)</div>
                        <div>🦁 (lion)</div>
                        <div>🎈 (balloon)</div>
                        <div>🍃 (leaf)</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find three things at home that start with g, f, b, or l. Draw them and share tomorrow.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Phonemic Awareness",
        subtopic: "Segmenting & Substituting in CVC Words",
        lessonContent: `
            <p>Today we will learn to break words into sounds and swap the first letter to make new words!</p>
            <p><strong>Key Question:</strong> How can changing one letter make a whole new word?</p>
            <p><strong>What is Segmenting?</strong> Segmenting means breaking a word into its individual sounds. For example: <strong>cat</strong> → /c/ /a/ /t/</p>
            <p><strong>What is Substituting?</strong> Substituting means swapping one sound for another. For example: change the /c/ in <strong>cat</strong> to /m/ → <strong>mat</strong></p>
            <p><strong>Let's Practice Together:</strong></p>
            <ul>
                <li><strong>bat</strong> → /b/ /a/ /t/ (change /b/ to /c/) → <strong>cat</strong></li>
                <li><strong>fan</strong> → /f/ /a/ /n/ (change /f/ to /m/) → <strong>man</strong></li>
                <li><strong>log</strong> → /l/ /o/ /g/ (change /l/ to /f/) → <strong>fog</strong></li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Word Puzzle</div>
                <p>Start with "bug". Change /b/ to /r/ → you get "rug"! Change /b/ to /m/ → you get "mug"!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Finger Tapping</div>
                <p>Tap one finger for each sound: "dog" → tap (d) tap (o) tap (g). Three taps = three sounds!</p>
            </div>
        `,
        taskInstructions: "Segment CVC words into sounds and swap initial letters to create new words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Segmenting Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Break each word into sounds. Say each sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>cat → ___ / ___ / ___</div>
                        <div>dog → ___ / ___ / ___</div>
                        <div>fish → ___ / ___ / ___</div>
                        <div>ball → ___ / ___ / ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Swap the First Letter</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Change the first letter to make a new word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>cat → change /c/ to /b/ → _____</div>
                        <div>fan → change /f/ to /p/ → _____</div>
                        <div>leg → change /l/ to /b/ → _____</div>
                        <div>bug → change /b/ to /r/ → _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blank</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What new word do you get?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Start with "lip". Change /l/ to /z/ → _____</div>
                        <div>Start with "gap". Change /g/ to /m/ → _____</div>
                        <div>Start with "fox". Change /f/ to /b/ → _____</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Practice segmenting with a family member. Say a CVC word (like 'sun' or 'hat') and tap each sound on your fingers.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Handwriting",
        subtopic: "Forming Letters with Ascenders & Descenders: g, f, b, l",
        lessonContent: `
            <p>Today we will learn how to write letters that go above and below the lines!</p>
            <p><strong>Key Question:</strong> Which letters reach up high or hang down low?</p>
            <p><strong>What are Ascenders and Descenders?</strong></p>
            <ul>
                <li><strong>Ascenders</strong> are parts of letters that go UP above the middle line (like b, l)</li>
                <li><strong>Descenders</strong> are parts of letters that go DOWN below the bottom line (like g, f)</li>
            </ul>
            <p><strong>Today's Letters:</strong></p>
            <ul>
                <li><strong>g (descender):</strong> Round body with a tail that hangs below the line</li>
                <li><strong>f (descender and ascender):</strong> A tall letter with a top curve and a tail below</li>
                <li><strong>b (ascender):</strong> A tall stick going up with a round belly</li>
                <li><strong>l (ascender):</strong> A tall straight line going from top to bottom</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-up"></i> Ascenders Go Up</div>
                <p>The letters <strong>b, d, f, h, k, l, t</strong> all have ascenders that reach above the middle line!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-down"></i> Descenders Go Down</div>
                <p>The letters <strong>g, j, p, q, y, f</strong> have descenders that hang below the bottom line!</p>
            </div>
        `,
        taskInstructions: "Practice writing letters g, f, b, l with correct ascenders and descenders.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Letter g (descender)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Trace and write letter g:
                    <div style="font-family: monospace; font-size: 28px; margin-top: 10px; line-height: 2;">
                        <div>g g g ___ ___ ___</div>
                        <div>go  go  go  ___ ___ ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Letter f (ascender + descender)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Trace and write letter f:
                    <div style="font-family: monospace; font-size: 28px; margin-top: 10px; line-height: 2;">
                        <div>f f f ___ ___ ___</div>
                        <div>fun fun fun ___ ___ ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Letter b (ascender)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Trace and write letter b:
                    <div style="font-family: monospace; font-size: 28px; margin-top: 10px; line-height: 2;">
                        <div>b b b ___ ___ ___</div>
                        <div>bat bat bat ___ ___ ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Letter l (ascender)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Trace and write letter l:
                    <div style="font-family: monospace; font-size: 28px; margin-top: 10px; line-height: 2;">
                        <div>l l l ___ ___ ___</div>
                        <div>leg leg leg ___ ___ ___</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write each letter (g, f, b, l) five times on paper. Show a family member where the ascenders and descenders are.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Concepts of Print",
        subtopic: "Distinguishing Isolated Letters from Complete Words",
        lessonContent: `
            <p>Today we will learn the difference between a single letter and a whole word!</p>
            <p><strong>Key Question:</strong> How can you tell if something is a letter or a word?</p>
            <p><strong>Letters vs. Words:</strong></p>
            <ul>
                <li>A <strong>letter</strong> is one symbol: a, b, c, g, f, l</li>
                <li>A <strong>word</strong> is made of letters put together: cat, dog, fish, ball</li>
                <li>Letters make sounds. Words have meaning.</li>
            </ul>
            <p><strong>Look at these examples:</strong></p>
            <ul>
                <li>"b" is a <strong>letter</strong>. It makes the /b/ sound.</li>
                <li>"ball" is a <strong>word</strong>. It means a round toy you throw.</li>
                <li>"g" is a <strong>letter</strong>. "goat" is a <strong>word</strong>.</li>
            </ul>
            <p><strong>In a sentence:</strong> "I see a big cat."</p>
            <ul>
                <li>Letters: I, s, e, a, b, i, g, c, a, t</li>
                <li>Words: I, see, a, big, cat</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-alpha-down"></i> Letter or Word?</div>
                <p><strong>f</strong> → letter &nbsp;&nbsp; <strong>fish</strong> → word &nbsp;&nbsp; <strong>l</strong> → letter &nbsp;&nbsp; <strong>lion</strong> → word</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paragraph"></i> In a Sentence</div>
                <p>"The big frog jumped." The words are: The, big, frog, jumped. All the other symbols are letters inside the words!</p>
            </div>
        `,
        taskInstructions: "Circle whether each item is a letter or a word. Identify words in sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Letter or Word?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle "letter" or "word" for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>g &nbsp;&nbsp;&nbsp; letter / word</div>
                        <div>go &nbsp;&nbsp;&nbsp; letter / word</div>
                        <div>ball &nbsp;&nbsp;&nbsp; letter / word</div>
                        <div>f &nbsp;&nbsp;&nbsp; letter / word</div>
                        <div>fish &nbsp;&nbsp;&nbsp; letter / word</div>
                        <div>l &nbsp;&nbsp;&nbsp; letter / word</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Count the Words</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> How many words are in each sentence?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I like dogs. → _____ words</div>
                        <div>See the big fox. → _____ words</div>
                        <div>My cat is fun. → _____ words</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find the Words</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read the sentence. Circle each word:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 18px;">
                        <div>The frog is green and big.</div>
                        <div style="margin-top: 10px;">I see a little bug.</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Make Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a short sentence (3-5 words) and circle all the words:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find a sentence in a book at home. Count how many words are in the sentence. Write the sentence and circle each word.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1LiteracyWeek9);
    console.log("grade1-literacy-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1LiteracyWeek9);
    console.log("grade1-literacy-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1LiteracyWeek9',
        metadata: grade1LiteracyWeek9.metadata,
        days: grade1LiteracyWeek9
    });
    console.log("grade1-literacy-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1LiteracyWeek9 = grade1LiteracyWeek9;
console.log("grade1-literacy-week9.js loaded and registered successfully");