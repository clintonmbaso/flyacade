// Grade 1 Literacy - Week 8 Data
const grade1LiteracyWeek8 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        week: 8,
        title: "Blending, Segmenting, and Reading with Long Vowels",
        description: "Blending, segmenting, and reading VC and CVC words with long vowel sounds in phrases and sentences"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Blending VC and CVC Long Vowel Words",
        subtopic: "Using arm blending to read words with long vowel sounds",
        lessonContent: `
            <p>Welcome to Week 8 of Literacy! This week we will become blending experts with long vowel words.</p>
            <p><strong>What are long vowels?</strong> Long vowels say their own letter name: A says "ay", E says "ee", I says "eye", O says "oh", U says "you".</p>
            <p><strong>Today's focus:</strong> We will blend sounds to read words like "aid" and "boat".</p>
            <p><strong>Arm Blending Method:</strong></p>
            <ol>
                <li>Touch your shoulder for the first sound</li>
                <li>Touch your elbow for the vowel sound (this is the long vowel!)</li>
                <li>Touch your wrist for the last sound</li>
                <li>Slide your hand down your whole arm to blend the word together</li>
            </ol>
            <p><strong>Example with "boat":</strong></p>
            <ul>
                <li>Shoulder: /b/</li>
                <li>Elbow: /oa/ (long O sound)</li>
                <li>Wrist: /t/</li>
                <li>Slide: "boat"!</li>
            </ul>
            <p><strong>Why is blending important?</strong> Blending helps us read new words by putting sounds together!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-point-up" style="color: #2196F3;"></i> Arm Blending Examples</div>
                <p>"aid" - /a/ /i/ /d/ (long A sound at elbow)</p>
                <p>"boat" - /b/ /oa/ /t/ (long O sound at elbow)</p>
                <p>"pain" - /p/ /ai/ /n/ (long A sound at elbow)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-long-alt" style="color: #9C27B0;"></i> Long Vowel Sounds</div>
                <p>A - "ay" like in "aid"</p>
                <p>E - "ee" like in "feet"</p>
                <p>O - "oh" like in "boat"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shoe-prints"></i> Physical Learning</div>
                <p>Stand up and use your whole arm! Big movements help our brains remember.</p>
            </div>
        `,
        taskInstructions: "Practice blending long vowel words using the arm blending method.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Use arm blending for these words. Draw a line from each word to its blending steps:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <span style="font-weight: bold; min-width: 80px;">boat</span>
                        <span style="margin-left: 15px;">A) /b/ - /oa/ - /t/</span>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <span style="font-weight: bold; min-width: 80px;">pain</span>
                        <span style="margin-left: 15px;">B) /p/ - /ai/ - /n/</span>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <span style="font-weight: bold; min-width: 80px;">feet</span>
                        <span style="margin-left: 15px;">C) /f/ - /ee/ - /t/</span>
                    </div>
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <span style="font-weight: bold; min-width: 80px;">goat</span>
                        <span style="margin-left: 15px;">D) /g/ - /oa/ - /t/</span>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Practice arm blending with a partner. Take turns being the "blender" and the "checker":
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD; border-radius: 5px;">
                    <div><strong>Partner A:</strong> Say "boat" using arm blending slowly.</div>
                    <div><strong>Partner B:</strong> Check if all three sounds are correct.</div>
                    <div><strong>Switch roles</strong> for "pain", "feet", and "goat".</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Write the three sounds for each word, then write the whole word:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>aid: /  / - /  / - /  / = <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                    <div>boat: /  / - /  / - /  / = <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                    <div>pain: /  / - /  / - /  / = <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                    <div>feet: /  / - /  / - /  / = <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw a picture of yourself doing arm blending. Label shoulder, elbow, and wrist:
                <div class="drawing-area" style="height: 150px; margin: 10px 0;"></div>
                <div style="display: flex; justify-content: space-around;">
                    <div>Shoulder: ______ sound</div>
                    <div>Elbow: ______ sound</div>
                    <div>Wrist: ______ sound</div>
                </div>
            </div>
        `,
        homework: "Teach someone at home how to do arm blending with the word 'boat'. Practice three times.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Segmenting and Substituting Sounds",
        subtopic: "Manipulating sounds by adding, deleting, or substituting",
        lessonContent: `
            <p>Today we become sound detectives! We will learn how to change words by changing their sounds.</p>
            <p><strong>What is segmenting?</strong> Breaking words into individual sounds.</p>
            <p><strong>What is substituting?</strong> Changing one sound to make a new word.</p>
            <p><strong>Sound Swapping Game:</strong></p>
            <ol>
                <li>Start with a word like "rain"</li>
                <li>Change the /r/ to a /p/</li>
                <li>New word: "pain"!</li>
            </ol>
            <p><strong>More examples:</strong></p>
            <ul>
                <li>Change the /n/ in "boat" to a /k/ sound (book)</li>
                <li>Delete the /s/ from "seeds" to get "eed"</li>
                <li>Add /f/ to "eet" to get "feet"</li>
            </ul>
            <p><strong>Important:</strong> We focus on the SOUNDS, not just the letters. Sometimes the spelling changes too!</p>
            <p><strong>Why learn this?</strong> Sound manipulation helps us with both reading AND spelling!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt" style="color: #FF9800;"></i> Sound Substitution</div>
                <p>"rain" → change /r/ to /p/ → "pain"</p>
                <p>"boat" → change /n/ to /k/ → "book"</p>
                <p>"seeds" → remove /s/ → "eed"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle" style="color: #4CAF50;"></i> Adding Sounds</div>
                <p>"eet" + /f/ = "feet"</p>
                <p>"aid" + /r/ = "raid"</p>
                <p>"oat" + /g/ = "goat"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-minus-circle" style="color: #F44336;"></i> Deleting Sounds</div>
                <p>"seeds" - /s/ = "eed"</p>
                <p>"train" - /t/ = "rain"</p>
                <p>"float" - /f/ = "loat"</p>
            </div>
        `,
        taskInstructions: "Practice sound manipulation by adding, deleting, and substituting sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Substitution</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Change the first sound to make a new word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>rain → change /r/ to /p/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>mail → change /m/ to /n/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>goat → change /g/ to /b/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>feet → change /f/ to /m/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sound Deletion</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Remove the first sound to find the new word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>seeds - /s/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>train - /t/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>float - /f/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>green - /g/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sound Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Add a sound to the beginning to make a new word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>eet + /f/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>oat + /g/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>ain + /r/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                        <div>eed + /s/ = <span class="answer-space" style="width: 80px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sound Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve the sound puzzles:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                        <div>Start with "boat". Change the /t/ to /k/. New word: <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                        <div>Start with "rain". Remove the /r/. Add /p/. New word: <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                        <div>Start with "feet". Change the /f/ to /m/. New word: <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                        <div>Start with "goat". Remove the /g/. Add /b/. New word: <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Play 'Sound Swap' with a family member. Start with 'rain' and see how many words you can make.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Reading Decodable Phrases",
        subtopic: "Reading short phrases containing long vowel words",
        lessonContent: `
            <p>Today we put our blending skills to work! We will read short phrases with our long vowel words.</p>
            <p><strong>What is a phrase?</strong> A group of words that go together but isn't a complete sentence.</p>
            <p><strong>Example phrase:</strong> "six fat goats"</p>
            <p><strong>How to read phrases:</strong></p>
            <ol>
                <li>Find the long vowel word first (goats)</li>
                <li>Blend the long vowel word using arm blending</li>
                <li>Read the other words around it</li>
                <li>Put all the words together smoothly</li>
            </ol>
            <p><strong>More practice phrases:</strong></p>
            <ul>
                <li>"a green jeep"</li>
                <li>"wait for the boat"</li>
                <li>"my red raincoat"</li>
            </ul>
            <p><strong>Choral reading:</strong> We'll read together as a class first, then you'll read by yourself.</p>
            <p><strong>Why practice phrases?</strong> Phrases help us read more smoothly and understand what we're reading!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-quote-right" style="color: #2196F3;"></i> Practice Phrases</div>
                <p>"six fat goats" - long vowel word: goats</p>
                <p>"a green jeep" - long vowel word: jeep</p>
                <p>"wait for the boat" - long vowel word: wait, boat</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search" style="color: #FF9800;"></i> Long Vowel Detective</div>
                <p>In "a green jeep": find "jeep" (long E)</p>
                <p>In "wait for the boat": find "wait" (long A) and "boat" (long O)</p>
                <p>In "my red raincoat": find "raincoat" (long A)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users" style="color: #4CAF50;"></i> Choral Reading</div>
                <p>Read together first for confidence</p>
                <p>Then read alone to show mastery</p>
                <p>Use pointer finger to track words</p>
            </div>
        `,
        taskInstructions: "Practice reading phrases containing long vowel words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Long Vowel Word Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the long vowel word in each phrase:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>six fat <u>goats</u></div>
                        <div>a green <u>jeep</u></div>
                        <div><u>wait</u> for the boat</div>
                        <div>my red <u>raincoat</u></div>
                        <div>the blue <u>tie</u></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Phrase Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line to match each phrase to its picture:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <div style="font-weight: bold;">Phrases:</div>
                            <div>six fat goats</div>
                            <div>a green jeep</div>
                            <div>wait for the boat</div>
                        </div>
                        <div>
                            <div style="font-weight: bold;">Pictures:</div>
                            <div>🚤 (boat)</div>
                            <div>🐐🐐🐐 (goats)</div>
                            <div>🚙 (jeep)</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Choral Reading Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read these phrases with a partner. Take turns being the "reader" and "listener":
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                        <div><strong>Phrase List:</strong></div>
                        <div>1. six fat goats</div>
                        <div>2. a green jeep</div>
                        <div>3. wait for the boat</div>
                        <div>4. my red raincoat</div>
                        <div>5. the blue tie</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Partner feedback: <span class="answer-space" style="width: 200px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Phrase</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a phrase using one long vowel word. Draw a picture to match:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My phrase: <span class="answer-space" style="width: 250px; display: inline-block;"></span></div>
                        <div class="drawing-area" style="height: 100px; margin: 10px 0;"></div>
                        <div>Long vowel word in my phrase: <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find and read three phrases in a book at home. Write down one phrase with a long vowel word.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Reading Full Sentences",
        subtopic: "Reading complete sentences with accuracy and fluency",
        lessonContent: `
            <p>Today is our reading celebration! We will read full sentences with our long vowel words.</p>
            <p><strong>What is a sentence?</strong> A complete thought that starts with a capital letter and ends with punctuation.</p>
            <p><strong>Example sentence:</strong> "A red raincoat."</p>
            <p><strong>Sentence reading steps:</strong></p>
            <ol>
                <li>Find the long vowel word (raincoat)</li>
                <li>Blend any tricky words</li>
                <li>Read the whole sentence smoothly</li>
                <li>Think about what it means</li>
            </ol>
            <p><strong>Practice sentences:</strong></p>
            <ul>
                <li>"The goat is in the rain."</li>
                <li>"I see my feet."</li>
                <li>"The tie is blue."</li>
            </ul>
            <p><strong>Partner reading:</strong> You'll take turns reading sentences with a partner.</p>
            <p><strong>Why sentences matter:</strong> Sentences tell complete stories and help us share ideas!</p>
            <p><strong>Remember:</strong> You've worked hard all week on blending, segmenting, and now reading. You're becoming excellent readers!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sentence" style="color: #9C27B0;"></i> Sentence Examples</div>
                <p>"A red raincoat." - long A in "raincoat"</p>
                <p>"The goat is in the rain." - long O in "goat", long A in "rain"</p>
                <p>"I see my feet." - long E in "feet"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-friends" style="color: #2196F3;"></i> Partner Reading</div>
                <p>Take turns reading sentences</p>
                <p>Help each other with tricky words</p>
                <p>Give positive feedback: "Great blending!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb" style="color: #FFC107;"></i> Sentence Meaning</div>
                <p>After reading, ask: "What does this sentence tell us?"</p>
                <p>"A red raincoat" tells us about something red you wear in rain</p>
                <p>"The goat is in the rain" tells us where the goat is</p>
            </div>
        `,
        taskInstructions: "Practice reading complete sentences with long vowel words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sentence Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read these sentences. Underline the long vowel words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A red raincoat.</div>
                        <div>The goat is in the rain.</div>
                        <div>I see my feet.</div>
                        <div>The tie is blue.</div>
                        <div>Wait for the boat.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Partner Reading Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> With a partner, take turns reading these sentences. Check each one when done:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F3E5F5; border-radius: 5px;">
                        <div>✅ "A red raincoat."</div>
                        <div>✅ "The goat is in the rain."</div>
                        <div>✅ "I see my feet."</div>
                        <div>✅ "The tie is blue."</div>
                        <div>✅ "Six fat goats wait."</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Partner's name: <span class="answer-space" style="width: 150px; display: inline-block;"></span></div>
                        <div>I read ____ sentences correctly.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Building</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create sentences using these long vowel words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>raincoat: <span class="answer-space" style="width: 250px; display: inline-block;"></span></div>
                        <div>goat: <span class="answer-space" style="width: 250px; display: inline-block;"></span></div>
                        <div>feet: <span class="answer-space" style="width: 250px; display: inline-block;"></span></div>
                        <div>boat: <span class="answer-space" style="width: 250px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reading Fluency Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Teacher Assessment: Read these sentences to your teacher:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                        <div style="font-weight: bold;">Sentence List for Teacher:</div>
                        <div>1. A red raincoat.</div>
                        <div>2. The goat is in the rain.</div>
                        <div>3. I see my feet.</div>
                        <div>4. The tie is blue.</div>
                        <div>5. Wait for the boat.</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Teacher Notes: <span class="answer-space" style="width: 200px; display: inline-block;"></span></div>
                        <div>Reading Score: ____ / 5 sentences read correctly</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Week 8 Reading Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a picture of yourself reading. Write one sentence you can read now:
                    <div class="drawing-area" style="height: 120px; margin-bottom: 10px;"></div>
                    <div style="margin-left: 20px;">
                        <div>I can read: <span class="answer-space" style="width: 300px; display: inline-block;"></span></div>
                        <div>My favorite long vowel word this week: <span class="answer-space" style="width: 100px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Read three sentences from this worksheet to someone at home. Teach them about long vowel words.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1LiteracyWeek8);
    console.log("literacy-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1LiteracyWeek8);
    console.log("literacy-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1LiteracyWeek8',
        metadata: grade1LiteracyWeek8.metadata,
        days: grade1LiteracyWeek8
    });
    console.log("literacy-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1LiteracyWeek8 = grade1LiteracyWeek8;
console.log("literacy-week8.js loaded and registered successfully");