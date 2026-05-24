// Grade 1 Literacy - Term 3 Week 10 Data
const grade1LiteracyWeek10 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        term: 3,
        week: 10,
        title: "Final Review & Expected Standard Evaluations",
        description: "End-of-year literacy assessments: sounds mastery, sight word fluency, sentence writing, and progress verification"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics Review",
        subtopic: "Sounds Mastery Check (1.9)",
        lessonContent: `
            <p>Welcome to our final sounds review! This week we'll check everything you've learned in Grade 1 literacy.</p>
            <p><strong>Key Question:</strong> Can you hear and say all the sounds we learned this year?</p>
            <p><strong>Today's Focus:</strong> Reviewing all the sounds - short vowels, long vowels, digraphs, diphthongs, and consonant blends.</p>
            <p><strong>Sounds We Know:</strong></p>
            <ul>
                <li><strong>Short Vowels:</strong> a (cat), e (bed), i (sit), o (dog), u (cup)</li>
                <li><strong>Long Vowels:</strong> a (cake), e (bee), i (bike), o (boat), u (cube)</li>
                <li><strong>Digraphs (two letters, one sound):</strong> sh (ship), ch (chick), th (thumb), wh (whale), ck (duck)</li>
                <li><strong>Diphthongs (gliding sounds):</strong> oi (coin), oy (boy), ou (mouse), ow (cow)</li>
                <li><strong>Consonant Blends (two sounds together):</strong> bl, cl, fl, gl, pl, sl, br, cr, dr, fr, gr, pr, tr, sc, sk, sm, sn, sp, st, sw</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Short Vowel Song</div>
                <p>"a says /a/ like apple, e says /e/ like egg, i says /i/ like igloo, o says /o/ like octopus, u says /u/ like umbrella!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microphone-alt"></i> Digraph Detective</div>
                <p>The digraph "sh" makes one sound: /sh/ like in ship, fish, and shop. Try saying it!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Blend Bingo</div>
                <p>A blend is like two friends holding hands - you can hear both sounds! "bl" says /b/ and /l/ together: black, blue, block.</p>
            </div>
        `,
        taskInstructions: "Complete the sounds mastery assessment with your teacher.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Letter Sound Recognition</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Point to each letter and say its sound:
                    <div style="display: flex; flex-wrap: wrap; gap: 15px; margin: 15px 0; font-size: 24px; font-weight: bold;">
                        <span>a</span> <span>e</span> <span>i</span> <span>o</span> <span>u</span>
                        <span>sh</span> <span>ch</span> <span>th</span> <span>wh</span> <span>ck</span>
                        <span>oi</span> <span>oy</span> <span>ou</span> <span>ow</span>
                    </div>
                    <div class="teacher-check" style="background: #f0f8ff; padding: 10px; border-radius: 5px;">
                        <em>✓ Teacher check: ___/10 correct</em>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Blend Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read these words with consonant blends:
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 15px 0;">
                        <div>black</div> <div>frog</div> <div>snake</div> <div>spider</div>
                        <div>train</div> <div>glove</div> <div>crab</div> <div>plant</div>
                    </div>
                    <div class="teacher-check" style="background: #f0f8ff; padding: 10px; border-radius: 5px;">
                        <em>✓ Teacher check: ___/8 correct</em>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sound Discrimination</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the word that has the different beginning sound:
                    <div style="margin: 15px 0;">
                        <div>a) cat &nbsp;&nbsp; car &nbsp;&nbsp; <u>ship</u></div>
                        <div>b) <u>chin</u> &nbsp;&nbsp; chair &nbsp;&nbsp; cheese</div>
                        <div>c) frog &nbsp;&nbsp; <u>spin</u> &nbsp;&nbsp; friend</div>
                        <div>d) <u>boy</u> &nbsp;&nbsp; coin &nbsp;&nbsp; toy</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Teacher Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Teacher notes - can the student:
                    <div style="margin: 10px 0;">
                        <div>• Say all short vowel sounds? ___ Yes / ___ Not yet</div>
                        <div>• Say all long vowel sounds? ___ Yes / ___ Not yet</div>
                        <div>• Say digraph sounds (sh, ch, th, wh, ck)? ___ Yes / ___ Not yet</div>
                        <div>• Say diphthong sounds (oi, oy, ou, ow)? ___ Yes / ___ Not yet</div>
                        <div>• Read words with blends? ___ Yes / ___ Not yet</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice all 26 letter sounds and digraphs with a family member. Have them sign your notebook.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Sight Words",
        subtopic: "Sight Word Fluency Check (1.10)",
        lessonContent: `
            <p>Today we'll check how quickly and smoothly you can read sight words!</p>
            <p><strong>Key Question:</strong> Can you read these words in 3 seconds or less?</p>
            <p><strong>What are Sight Words?</strong> Sight words are words we know instantly without sounding them out. Many sight words don't follow the rules - we just have to memorize them!</p>
            <p><strong>Grade 1 Sight Words to Know:</strong></p>
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin: 15px 0;">
                <div>the</div> <div>and</div> <div>to</div> <div>of</div> <div>a</div>
                <div>was</div> <div>for</div> <div>are</div> <div>with</div> <div>is</div>
                <div>said</div> <div>have</div> <div>from</div> <div>they</div> <div>you</div>
                <div>what</div> <div>where</div> <div>there</div> <div>little</div> <div>could</div>
            </div>
            <p><strong>Why Fluency Matters:</strong> When you can read sight words quickly, you have more brain power to understand what you're reading!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stopwatch"></i> The 3-Second Rule</div>
                <p>Good readers can read sight words in 3 seconds or less. That's as fast as saying "one Mississippi"!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list"></i> The Top 20</div>
                <p>Did you know? Just 20 sight words make up nearly 30% of all words we read in English!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Tricky Words</div>
                <p>Words like "was" and "said" don't sound like they look. That's why we practice them as sight words!</p>
            </div>
        `,
        taskInstructions: "Complete the timed sight word reading assessment with your teacher.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Timed Sight Word Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each word as quickly as you can. Your teacher will time you:
                    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin: 15px 0; font-size: 18px;">
                        <div>the</div> <div>and</div> <div>to</div> <div>of</div> <div>a</div>
                        <div>was</div> <div>for</div> <div>are</div> <div>with</div> <div>is</div>
                        <div>said</div> <div>have</div> <div>from</div> <div>they</div> <div>you</div>
                        <div>what</div> <div>where</div> <div>there</div> <div>little</div> <div>could</div>
                        <div>were</div> <div>one</div> <div>two</div> <div>three</div> <div>four</div>
                    </div>
                    <div class="teacher-check" style="background: #f0f8ff; padding: 10px; border-radius: 5px;">
                        <em>✓ Time: ___ seconds &nbsp;&nbsp; Correct: ___/25</em>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sight Word in Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read these sentences aloud smoothly:
                    <div style="margin: 15px 0; line-height: 2;">
                        <div>• The cat is on the mat.</div>
                        <div>• I have a little red car.</div>
                        <div>• Where is my blue hat?</div>
                        <div>• They said they were happy.</div>
                        <div>• What is for dinner today?</div>
                    </div>
                    <div class="teacher-check" style="background: #f0f8ff; padding: 10px; border-radius: 5px;">
                        <em>✓ Fluent reading? ___ Yes / ___ Working on it</em>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fluency Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> How do you feel about reading sight words?
                    <div style="margin: 10px 0;">
                        <div>☐ I can read them easily</div>
                        <div>☐ I can read some of them</div>
                        <div>☐ I need more practice</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice the 25 sight words with a timer at home. Try to beat your best time! Have a parent sign your notebook.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Writing & Punctuation",
        subtopic: "Sentence & Writing Check (1.12 / 1.15)",
        lessonContent: `
            <p>Today we'll check how well you can arrange, write, and punctuate sentences!</p>
            <p><strong>Key Question:</strong> Can you write a sentence that starts with a capital letter and ends with the right punctuation?</p>
            <p><strong>Sentence Rules to Remember:</strong></p>
            <ol>
                <li>Every sentence starts with a <strong>capital letter</strong></li>
                <li>Every sentence ends with <strong>punctuation</strong> (. ? !)</li>
                <li>Sentences have <strong>spaces</strong> between words</li>
                <li>Sentences make <strong>complete thoughts</strong></li>
            </ol>
            <p><strong>Punctuation Marks:</strong></p>
            <ul>
                <li><strong>Period (.)</strong> - for telling sentences: "I like dogs."</li>
                <li><strong>Question Mark (?)</strong> - for asking sentences: "Do you like dogs?"</li>
                <li><strong>Exclamation Mark (!)</strong> - for excited sentences: "What a cute dog!"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-right"></i> Word Order</div>
                <p>Mixed up: "cat The sleeping is"<br>
                Fixed: "The cat is sleeping."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Punctuation Power</div>
                <p>"It's hot." (telling)<br>
                "It's hot?" (asking - surprised!)<br>
                "It's hot!" (excited/complaining)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Handwriting Help</div>
                <p>Remember to leave a finger space between each word so your sentences are easy to read!</p>
            </div>
        `,
        taskInstructions: "Arrange, write, and punctuate sentences correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sentence Arranging</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put the words in the correct order to make a sentence:
                    <div style="margin: 15px 0;">
                        <div>a) likes / Sam / pizza</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                        <div>b) is / The / blue / sky</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                        <div>c) you / Do / books / like</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                        <div>d) a / What / day / sunny</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Add the Punctuation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add the correct punctuation (. ? !) to each sentence:
                    <div style="margin: 15px 0;">
                        <div>a) What time is it ___</div>
                        <div>b) I love my family ___</div>
                        <div>c) Watch out for that car ___</div>
                        <div>d) My dog's name is Max ___</div>
                        <div>e) Where did you put my book ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Copy the Passage</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Copy this passage carefully. Use correct capitalization, spacing, and punctuation:
                    <div style="background: #f5f5f5; padding: 15px; margin: 10px 0; font-family: monospace;">
                        I have a pet cat. Her name is Luna. She likes to sleep in the sun. What is your favorite pet?
                    </div>
                    <div class="writing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <em>Write here:</em>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Teacher Writing Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Teacher evaluation:
                    <div style="margin: 10px 0;">
                        <div>✓ Capital letters at beginning of sentences? ___ Yes / ___ Not yet</div>
                        <div>✓ Correct ending punctuation? ___ Yes / ___ Not yet</div>
                        <div>✓ Spaces between words? ___ Yes / ___ Not yet</div>
                        <div>✓ Neat handwriting? ___ Yes / ___ Not yet</div>
                        <div>✓ Sentence makes sense? ___ Yes / ___ Not yet</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences about your day. Use a capital letter at the start and correct punctuation at the end.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Final Assessment",
        subtopic: "Final Progress Verification",
        lessonContent: `
            <p>Congratulations! Today is your final Grade 1 literacy check. You'll show everything you've learned this year!</p>
            <p><strong>What We're Checking Today:</strong></p>
            <ol>
                <li><strong>Sitting Posture:</strong> Sitting up straight, feet on floor, back against chair</li>
                <li><strong>Pencil Grip:</strong> Holding your pencil correctly (tripod grip)</li>
                <li><strong>Printing Alignment:</strong> Letters sitting on the line, correct size, proper formation</li>
                <li><strong>Overall Progress:</strong> How much you've grown as a reader and writer!</li>
            </ol>
            <p><strong>Remember:</strong> This is a celebration of how much you've learned. Do your best and be proud of yourself!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair"></i> Perfect Posture</div>
                <p>Sit like a king or queen! Back straight, feet flat on floor, both hands on the desk. This helps you write your best.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Pencil Grip</div>
                <p>Use your thumb and pointer finger to pinch the pencil. Rest it on your middle finger. Like a crab pinch!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Letter on the Line</div>
                <p>Most letters sit on the line like they're standing on the ground. Only letters like g, j, p, q, y hang down below!</p>
            </div>
        `,
        taskInstructions: "Complete the final progress verification with your teacher.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sitting Posture Check</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Teacher observation - sitting posture:
                    <div style="margin: 10px 0; background: #f0f8ff; padding: 10px; border-radius: 5px;">
                        <div>☐ Back is straight against chair</div>
                        <div>☐ Feet are flat on the floor</div>
                        <div>☐ Both arms/hands on desk</div>
                        <div>☐ Paper is tilted slightly (right-handers tilt left, left-handers tilt right)</div>
                    </div>
                    <div class="teacher-check" style="background: #f0f8ff; padding: 10px; border-radius: 5px; margin-top: 10px;">
                        <em>✓ Posture score: ___/4 &nbsp;&nbsp; Notes: _________________</em>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Pencil Grip Check</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Teacher observation - pencil grip:
                    <div style="margin: 10px 0; background: #f0f8ff; padding: 10px; border-radius: 5px;">
                        <div>☐ Thumb and pointer finger pinch the pencil</div>
                        <div>☐ Pencil rests on middle finger</div>
                        <div>☐ Ring and pinky fingers are tucked in</div>
                        <div>☐ Wrist is straight (not bent)</div>
                        <div>☐ Grip is relaxed (not too tight)</div>
                    </div>
                    <div class="teacher-check" style="background: #f0f8ff; padding: 10px; border-radius: 5px; margin-top: 10px;">
                        <em>✓ Grip score: ___/5 &nbsp;&nbsp; Notes: _________________</em>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Printing Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Copy these sentences neatly. Pay attention to letter size, spacing, and line placement:
                    <div style="background: #f5f5f5; padding: 15px; margin: 10px 0; font-family: monospace;">
                        The quick brown fox jumps over the lazy dog.
                        My name is ____________________.
                        I am in Grade 1.
                    </div>
                    <div class="writing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <em>Write here:</em>
                    </div>
                    <div style="margin-top: 15px;">
                        <div>☐ Letters sit on the line</div>
                        <div>☐ Letters are the correct size (tall letters touch top line)</div>
                        <div>☐ Spaces between words (finger space)</div>
                        <div>☐ Letters are formed correctly (not backwards)</div>
                    </div>
                    <div class="teacher-check" style="background: #f0f8ff; padding: 10px; border-radius: 5px; margin-top: 10px;">
                        <em>✓ Printing score: ___/4</em>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Final Comments</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Teacher overall assessment:
                    <div style="margin: 15px 0;">
                        <div><strong>Reading Level:</strong> ___ Above standard &nbsp;&nbsp; ___ At standard &nbsp;&nbsp; ___ Approaching standard</div>
                        <div><strong>Writing Level:</strong> ___ Above standard &nbsp;&nbsp; ___ At standard &nbsp;&nbsp; ___ Approaching standard</div>
                        <div><strong>End-of-Year Comments:</strong></div>
                        <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Student Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What are you most proud of learning in Grade 1 literacy?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Share your favorite book with a family member. Read it aloud to them and celebrate your Grade 1 literacy success!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1LiteracyWeek10);
    console.log("grade1-literacy-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1LiteracyWeek10);
    console.log("grade1-literacy-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1LiteracyWeek10',
        metadata: grade1LiteracyWeek10.metadata,
        days: grade1LiteracyWeek10
    });
    console.log("grade1-literacy-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1LiteracyWeek10 = grade1LiteracyWeek10;
console.log("grade1-literacy-week10.js loaded and registered successfully");