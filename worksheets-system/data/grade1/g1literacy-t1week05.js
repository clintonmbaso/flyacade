// Grade 1 Literacy - Term 1 Week 5 Data
const grade1LiteracyWeek5 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        term: 1,
        week: 5,
        title: "Consonants & VC Word Blending",
        description: "Identifying consonant sounds /m/ and /c/, blending VC words, forming lower-case letters, and copying patterns"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Consonants /m/ and /c/",
        lessonContent: `
            <p>Welcome to our phonics lesson! Today we will learn two new consonant sounds: /m/ and /c/.</p>
            <p><strong>Key Question:</strong> What sound does the letter M make? What sound does the letter C make?</p>
            <p><strong>Introduction:</strong> Consonants are letters that are not vowels (a, e, i, o, u). Today we will practice the sounds of M and C.</p>
            <p><strong>Letter M Sound (/m/):</strong></p>
            <ul>
                <li>Put your lips together and hum: "mmmm"</li>
                <li>Like the sound a cow makes: "mmmm"</li>
                <li>Words that start with M: <strong>m</strong>an, <strong>m</strong>om, <strong>m</strong>ouse, <strong>m</strong>ilk</li>
            </ul>
            <p><strong>Letter C Sound (/k/):</strong></p>
            <ul>
                <li>Open your mouth and make a short, hard sound at the back of your throat: "kuh"</li>
                <li>Like the sound a snake makes? No! That's S. C is like a clicking sound: "kuh"</li>
                <li>Words that start with C: <strong>c</strong>at, <strong>c</strong>up, <strong>c</strong>ar, <strong>c</strong>ow</li>
            </ul>
            <p><strong>Remember:</strong> These are quiet sounds. We don't sing them - we say them quickly!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microphone"></i> Listen and Repeat</div>
                <p>Teacher says: "mmmm" - Students repeat. Teacher says: "kuh" - Students repeat.</p>
                <p>Practice together: mmm, kuh, mmm, kuh</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-picture"></i> Picture Match</div>
                <p>Look at these pictures: <strong>Mouse</strong> (starts with M), <strong>Cat</strong> (starts with C), <strong>Milk</strong> (starts with M), <strong>Car</strong> (starts with C)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Action Time</div>
                <p>For /m/: Pretend to rub your tummy like you're eating something yummy and say "mmmm!"</p>
                <p>For /c/: Pretend to snap a camera and say "kuh!"</p>
            </div>
        `,
        taskInstructions: "Identify and practice sounding out consonants /m/ and /c/.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Say the Sound</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Say the sound each letter makes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>M says _______</div>
                        <div>C says _______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Beginning Sound</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at each picture. Circle M or C for the beginning sound:
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 10px;">
                        <div>
                            <div>🐭 Mouse</div>
                            <div>M &nbsp;&nbsp; C</div>
                        </div>
                        <div>
                            <div>🐱 Cat</div>
                            <div>M &nbsp;&nbsp; C</div>
                        </div>
                        <div>
                            <div>🥛 Milk</div>
                            <div>M &nbsp;&nbsp; C</div>
                        </div>
                        <div>
                            <div>🚗 Car</div>
                            <div>M &nbsp;&nbsp; C</div>
                        </div>
                        <div>
                            <div>🐄 Cow</div>
                            <div>M &nbsp;&nbsp; C</div>
                        </div>
                        <div>
                            <div>👩 Mom</div>
                            <div>M &nbsp;&nbsp; C</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Color the Pictures</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Color the pictures that start with M in <span style="color: blue;">blue</span>. Color the pictures that start with C in <span style="color: red;">red</span>:
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 10px; text-align: center;">
                        <div>🪞 Mirror<br><span style="font-size: 10px;">(M)</span></div>
                        <div>🍪 Cookie<br><span style="font-size: 10px;">(C)</span></div>
                        <div>🌙 Moon<br><span style="font-size: 10px;">(M)</span></div>
                        <div>🐪 Camel<br><span style="font-size: 10px;">(C)</span></div>
                    </div>
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Find M and C</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle all the M and C letters you can find:
                    <div style="background: #f5f5f5; padding: 15px; font-size: 24px; letter-spacing: 5px; text-align: center; margin-top: 10px;">
                        M A C T M S C R M L C B M P C
                    </div>
                    <div style="margin-top: 10px;">How many M's? ___ &nbsp;&nbsp; How many C's? ___</div>
                </div>
            </div>
        `,
        homework: "Find 3 things at home that start with M and 3 things that start with C. Draw them or write their names.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "VC Blending (at, in, it, am)",
        lessonContent: `
            <p>Today we will learn how to put sounds together to make words! This is called <strong>blending</strong>.</p>
            <p><strong>Key Question:</strong> What happens when you put a vowel and a consonant together?</p>
            <p><strong>Introduction:</strong> VC words have a vowel first, then a consonant. V = Vowel, C = Consonant. Today we will blend vowel sounds with consonant sounds to read words!</p>
            <p><strong>Letters We Know:</strong></p>
            <ul>
                <li>Vowels: a, i</li>
                <li>Consonants: t, n, m</li>
            </ul>
            <p><strong>Our VC Words Today:</strong></p>
            <ul>
                <li><strong>at</strong> - aaaaa-t, at</li>
                <li><strong>in</strong> - iiiii-n, in</li>
                <li><strong>it</strong> - iiiii-t, it</li>
                <li><strong>am</strong> - aaaaa-m, am</li>
            </ul>
            <p><strong>How to Blend:</strong> Say the first sound slowly, then the second sound. Then say them faster and faster until they make a word!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-link"></i> Stretchy Snake Strategy</div>
                <p>Pretend you are a snake stretching out the sounds: "aaaaa...ttttt" - then squash them together: "at"!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Arm Blending</div>
                <p>Touch your shoulder for the first sound, your elbow for the second sound, then slide down to your wrist to say the whole word!</p>
                <p>/a/ (shoulder) → /t/ (elbow) → "at" (wrist)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment"></i> Sentence Practice</div>
                <p>"I <strong>am</strong> here." &nbsp;&nbsp; "The cat is <strong>in</strong> the box." &nbsp;&nbsp; "I like <strong>it</strong>." &nbsp;&nbsp; "We are <strong>at</strong> school."</p>
            </div>
        `,
        taskInstructions: "Blend and read VC words using known sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Listen and Blend</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Teacher says the sounds. You say the word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>aaaaa-t = _______</div>
                        <div>iiiii-n = _______</div>
                        <div>iiiii-t = _______</div>
                        <div>aaaaa-m = _______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Read the Word</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Point to each word and read it aloud:
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 10px; text-align: center;">
                        <div style="background: #E8F4FD; padding: 15px; font-size: 28px; font-weight: bold;">at</div>
                        <div style="background: #E8F4FD; padding: 15px; font-size: 28px; font-weight: bold;">in</div>
                        <div style="background: #E8F4FD; padding: 15px; font-size: 28px; font-weight: bold;">it</div>
                        <div style="background: #E8F4FD; padding: 15px; font-size: 28px; font-weight: bold;">am</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Match the Word to the Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a line from each word to the matching picture:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <div>at → <span style="margin-left: 20px;">🐱 (cat) / 📍 (location)</span></div>
                            <div style="margin-top: 10px;">in → <span style="margin-left: 20px;">📦 (inside box)</span></div>
                            <div style="margin-top: 10px;">it → <span style="margin-left: 20px;">⭐ (pointing)</span></div>
                            <div style="margin-top: 10px;">am → <span style="margin-left: 20px;">👧 (pointing to self)</span></div>
                        </div>
                        <div>
                            <div class="drawing-area" style="height: 200px; border: 2px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fill in the Blank</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete each sentence with at, in, it, or am:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I _____ a student. (am/in)</div>
                        <div style="margin-top: 10px;">The pen is _____ the box. (am/in)</div>
                        <div style="margin-top: 10px;">I like _____ . (at/it)</div>
                        <div style="margin-top: 10px;">We are _____ school. (at/am)</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Write the Word</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write the word that matches each picture:
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 10px; text-align: center;">
                        <div>🐱 on mat<br>(___ ___ )</div>
                        <div>📦 toy inside<br>(___ ___ )</div>
                        <div>👉 pointing<br>(___ ___ )</div>
                        <div>🙋 girl<br>(___ ___ )</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Practice reading at, in, it, am to a family member. Write each word 3 times.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Handwriting",
        subtopic: "Form Lower-case Letters: m, c",
        lessonContent: `
            <p>Today we will learn how to write the lower-case letters m and c correctly!</p>
            <p><strong>Key Question:</strong> How do we form the letters m and c on paper?</p>
            <p><strong>Introduction:</strong> Good handwriting helps others read our words. We will learn the correct way to write m and c.</p>
            <p><strong>Letter m (lower-case):</strong></p>
            <ul>
                <li>Start at the middle line (dotted line)</li>
                <li>Go down to the bottom line</li>
                <li>Go up, over, and down (like a mountain)</li>
                <li>Go up, over, and down again</li>
                <li>Letter m has <strong>2 humps</strong> (like two mountains!)</li>
            </ul>
            <p><strong>Letter c (lower-case):</strong></p>
            <ul>
                <li>Start just below the middle line (dotted line)</li>
                <li>Curve up and around to the left</li>
                <li>Stop at the bottom line</li>
                <li>Letter c is like a <strong>half-circle</strong> or a smile!</li>
            </ul>
            <p><strong>Remember:</strong> Always start at the correct spot. Take your time. Practice makes perfect!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain"></i> M is for Mountains</div>
                <p>Letter m looks like two mountains: up, down, up, down! Trace it with your finger first.</p>
                <div style="font-family: monospace; font-size: 30px; text-align: center; margin: 10px;">m m m</div>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> C is for Crescent Moon</div>
                <p>Letter c is like a crescent moon or a smile! Start at the top and curve around.</p>
                <div style="font-family: monospace; font-size: 30px; text-align: center; margin: 10px;">c c c</div>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Sky, Grass, Dirt</div>
                <p>Letters live on lines! m and c are "grass letters" - they sit on the bottom line and go up to the middle line.</p>
                <p>🌤️ Sky line (top) &nbsp;|&nbsp; 🌿 Grass line (middle) &nbsp;|&nbsp; 🟤 Dirt line (bottom)</p>
            </div>
        `,
        taskInstructions: "Practice forming lower-case letters m and c correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Finger Trace</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use your finger to trace the letters below:
                    <div style="font-family: monospace; font-size: 48px; text-align: center; letter-spacing: 10px; margin: 10px;">
                        m m m
                    </div>
                    <div style="font-family: monospace; font-size: 48px; text-align: center; letter-spacing: 10px; margin: 10px;">
                        c c c
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Trace and Write - Letter m</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Trace the dotted m's, then write your own:
                    <div style="font-family: monospace; font-size: 28px; line-height: 2; margin-top: 10px;">
                        <div>....m....m....m....m</div>
                        <div>__________________________________</div>
                        <div>__________________________________</div>
                        <div>__________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Trace and Write - Letter c</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Trace the dotted c's, then write your own:
                    <div style="font-family: monospace; font-size: 28px; line-height: 2; margin-top: 10px;">
                        <div>....c....c....c....c</div>
                        <div>__________________________________</div>
                        <div>__________________________________</div>
                        <div>__________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Find and Circle</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle all the lower-case m's and c's in the sentence:
                    <div style="background: #f5f5f5; padding: 15px; font-size: 18px; margin-top: 10px;">
                        My cat can climb a tree. My mom makes cookies.
                    </div>
                    <div style="margin-top: 10px;">How many m's? ___ &nbsp;&nbsp; How many c's? ___</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Practice Words</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write each word. Remember to use your best handwriting:
                    <div style="margin-top: 10px;">
                        <div>am: <span style="border-bottom: 1px solid #ccc; width: 150px; display: inline-block;"></span></div>
                        <div style="margin-top: 10px;">at: <span style="border-bottom: 1px solid #ccc; width: 150px; display: inline-block;"></span></div>
                        <div style="margin-top: 10px;">in: <span style="border-bottom: 1px solid #ccc; width: 150px; display: inline-block;"></span></div>
                        <div style="margin-top: 10px;">it: <span style="border-bottom: 1px solid #ccc; width: 150px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice writing m and c five times each. Write the words am, at, in, it two times each.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Pre-writing Skills",
        subtopic: "Copying Patterns (Zig-zag and Semi-circle)",
        lessonContent: `
            <p>Today we will practice drawing patterns! Patterns help us get ready for writing letters.</p>
            <p><strong>Key Question:</strong> How do zig-zags and semi-circles help us write letters?</p>
            <p><strong>Introduction:</strong> Before we write letters, we practice patterns. Zig-zags help us make letters like A, N, M, and W. Semi-circles help us make letters like C, O, G, and Q.</p>
            <p><strong>Zig-zag Pattern:</strong></p>
            <ul>
                <li>Draw a line up, then down, then up, then down</li>
                <li>Like a mountain, then a valley, then a mountain</li>
                <li>Think of a lightning bolt or a "V" shape repeated!</li>
            </ul>
            <p><strong>Semi-circle Pattern:</strong></p>
            <ul>
                <li>A half-circle shape (like a smile or a frown)</li>
                <li>Start at the top and curve down to the bottom</li>
                <li>Or start at the bottom and curve up to the top</li>
            </ul>
            <p><strong>Why These Matter:</strong> Zig-zags help us write M, N, A, and W. Semi-circles help us write C, O, G, and Q. Practicing patterns makes letter writing easier!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bolt"></i> Zig-zag Fun</div>
                <p>Zig-zags go: up, down, up, down, up, down! It's like a roller coaster or a lightning bolt.</p>
                <div style="font-family: monospace; font-size: 24px; text-align: center; margin: 10px;">/\\/\\/\\/\\</div>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Semi-circle Fun</div>
                <p>Semi-circles are half circles. They can curve up like a smile (⌣) or curve down like a frown (⌢).</p>
                <div style="font-family: monospace; font-size: 24px; text-align: center; margin: 10px;">⌣ ⌣ ⌣ &nbsp;&nbsp;&nbsp; ⌢ ⌢ ⌢</div>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> Letter Connection</div>
                <p>Zig-zags help you write m (two humps = two zig-zag pieces)! Semi-circles help you write c (half a circle)!</p>
            </div>
        `,
        taskInstructions: "Copy and complete zig-zag and semi-circle patterns.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Finger Trace Zig-zags</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use your finger to trace the zig-zag pattern:
                    <div style="font-size: 30px; text-align: center; letter-spacing: 5px; margin: 10px;">
                        /\\/\\/\\/\\
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Copy Zig-zag Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Copy the zig-zag pattern in the space below:
                    <div style="border: 2px solid #4A90E2; min-height: 80px; margin-top: 10px; padding: 10px;">
                        <div style="text-align: center; font-size: 24px;">/\\/\\/\\/\\</div>
                        <div style="text-align: center; font-size: 24px;">________________</div>
                        <div style="text-align: center; font-size: 24px;">________________</div>
                        <div style="text-align: center; font-size: 24px;">________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Finger Trace Semi-circles</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use your finger to trace the semi-circle patterns:
                    <div style="font-size: 30px; text-align: center; letter-spacing: 5px; margin: 10px;">
                        ⌣ ⌣ ⌣ ⌣
                    </div>
                    <div style="font-size: 30px; text-align: center; letter-spacing: 5px; margin: 10px;">
                        ⌢ ⌢ ⌢ ⌢
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Copy Semi-circle Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Copy the semi-circle patterns:
                    <div style="border: 2px solid #E85D75; min-height: 80px; margin-top: 10px; padding: 10px;">
                        <div style="text-align: center; font-size: 24px;">⌣ ⌣ ⌣ ⌣</div>
                        <div style="text-align: center; font-size: 24px;">________________</div>
                        <div style="text-align: center; font-size: 24px;">⌢ ⌢ ⌢ ⌢</div>
                        <div style="text-align: center; font-size: 24px;">________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Complete the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Look at the pattern. Draw what comes next:
                    <div style="margin-top: 10px;">
                        <div>/\\/\\/\\___  (draw the next two zig-zags)</div>
                        <div class="drawing-area" style="height: 40px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 15px;">⌣ ⌣ ⌣ ___  (draw the next two semi-circles)</div>
                        <div class="drawing-area" style="height: 40px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Pattern to Letter</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What letter do these patterns help us write?
                    <div style="margin-top: 10px;">
                        <div>Zig-zag ( /\\/\\/\\ ) helps write the letter: ___</div>
                        <div>Semi-circle ( ⌣ ) helps write the letter: ___</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice drawing zig-zag and semi-circle patterns on paper. Draw 5 of each pattern neatly.",
        homeworkDue: "Monday"
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