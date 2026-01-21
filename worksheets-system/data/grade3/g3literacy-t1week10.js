// Grade 3 Literacy - Week 10 Data (Alternative Vowels Review & Synthesis)
const grade3LiteracyWeek10 = {
    metadata: {
        grade: 3,
        subject: "Literacy",
        week: 10,
        title: "Mixing Alternative Vowels — Review and Synthesis",
        description: "Distinguishing between /u/, /oo/, and Schwa sounds; reading complex sentences; final fluency and assessment"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Mixing Alternative Vowels",
        subtopic: "Distinguishing between /u/, /oo/, and Schwa sounds",
        lessonContent: `
            <p>Welcome to Week 10 of Literacy! Today we will review all three alternative vowel sounds we have learned over the past weeks.</p>
            <p><strong>Key Concept:</strong> Different vowel spellings can make the same sound, and we need to recognize them in words.</p>
            <p><strong>Let's Review:</strong></p>
            <ul>
                <li><strong>/u/ sound</strong> – as in "glove," "love," "some"</li>
                <li><strong>/oo/ sound</strong> – as in "blue," "glue," "chew"</li>
                <li><strong>Schwa sound</strong> – as in "teacher," "doctor," "collar" (the unstressed vowel sound)</li>
            </ul>
            <p><strong>Why is this important?</strong> Recognizing these sounds helps us read new words and spell them correctly!</p>
            <p><strong>Today's Goal:</strong> Listen carefully and sort words by their vowel sound.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up" style="color: #4CAF50;"></i> Sound Examples</div>
                <p><strong>/u/ sound:</strong> glove, love, some</p>
                <p><strong>/oo/ sound:</strong> blue, glue, chew</p>
                <p><strong>Schwa sound:</strong> teacher, doctor, collar</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Sound Corner Game</div>
                <p>We will play a movement game! Each corner of the room is labeled with a sound: /u/, /oo/, or Schwa. When I say a word, you move to the correct sound corner!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ol"></i> Word List</div>
                <p>Let's read these words together: <strong>glue, love, doctor, chew, some, collar</strong>. Can you hear the different vowel sounds?</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice sorting vowel sounds.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Listen and Sort: Circle the correct sound for each word your teacher says.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Word 1: ☐ /u/ ☐ /oo/ ☐ Schwa</div>
                    <div>Word 2: ☐ /u/ ☐ /oo/ ☐ Schwa</div>
                    <div>Word 3: ☐ /u/ ☐ /oo/ ☐ Schwa</div>
                    <div>Word 4: ☐ /u/ ☐ /oo/ ☐ Schwa</div>
                    <div>Word 5: ☐ /u/ ☐ /oo/ ☐ Schwa</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Word Sorting: Write each word in the correct column.
                <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
                    <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                        <strong>/u/ sound</strong>
                        <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                    </div>
                    <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                        <strong>/oo/ sound</strong>
                        <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                    </div>
                    <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                        <strong>Schwa sound</strong>
                        <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                    </div>
                </div>
                <div style="margin-top: 10px;">Words: glue, love, doctor, chew, some, collar</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Rapid-Fire Round: Listen to five words. Write the vowel sound you hear for each.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. <span class="answer-space" style="width: 80px;"></span></div>
                    <div>2. <span class="answer-space" style="width: 80px;"></span></div>
                    <div>3. <span class="answer-space" style="width: 80px;"></span></div>
                    <div>4. <span class="answer-space" style="width: 80px;"></span></div>
                    <div>5. <span class="answer-space" style="width: 80px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw a picture of one word from each sound group.
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div>/u/ word drawing:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div>/oo/ word drawing:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div>Schwa word drawing:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three words at home that have the /u/, /oo/, or Schwa sound. Write them down and circle the vowel spelling.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Complex Sentence Reading",
        subtopic: "Reading sentences that combine multiple alternative vowel spellings",
        lessonContent: `
            <p>Today we will put our vowel sound knowledge to work by reading sentences that mix different alternative vowel spellings.</p>
            <p><strong>Key Concept:</strong> Real sentences often mix different vowel sounds. Good readers can spot them all!</p>
            <p><strong>Warm-Up Sentence:</strong> "My teacher has blue gloves."</p>
            <p><strong>Let's Break It Down:</strong></p>
            <ul>
                <li><strong>Schwa sound:</strong> teacher</li>
                <li><strong>/oo/ sound:</strong> blue</li>
                <li><strong>/u/ sound:</strong> gloves</li>
            </ul>
            <p><strong>Reading Strategy:</strong> When you see a new word, try saying it with different vowel sounds to see which one fits.</p>
            <p><strong>Practice Sentence:</strong> "The doctor with the blue collar loves the circus."</p>
            <p>How many alternative vowel words can you find in this sentence?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sentence" style="color: #2196F3;"></i> Sentence Breakdown</div>
                <p><strong>"My teacher has blue gloves."</strong><br/>
                • teacher (Schwa)<br/>
                • blue (/oo/)<br/>
                • gloves (/u/)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search" style="color: #FF9800;"></i> Word Detective</div>
                <p>In the sentence: <strong>"The doctor with the blue collar loves the circus."</strong><br/>
                Can you find the Schwa, /oo/, and /u/ words?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Sentence Building Game</div>
                <p>We'll work in groups to build sentences using at least one word from each vowel sound group!</p>
            </div>
        `,
        taskInstructions: "Practice reading and identifying alternative vowel spellings in sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sentence Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read the sentence: "My teacher has blue gloves."
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Circle the Schwa word: <span style="text-decoration: underline;">teacher</span> has blue gloves.</div>
                        <div>Circle the /oo/ word: My teacher has <span style="text-decoration: underline;">blue</span> gloves.</div>
                        <div>Circle the /u/ word: My teacher has blue <span style="text-decoration: underline;">gloves</span>.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Practice Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read the sentence aloud three times: "The doctor with the blue collar loves the circus."
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                        <div>First read: <span class="answer-space" style="width: 100%; height: 30px;"></span></div>
                        <div>Second read: <span class="answer-space" style="width: 100%; height: 30px;"></span></div>
                        <div>Third read: <span class="answer-space" style="width: 100%; height: 30px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Underline the Vowel Words</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Underline all words with alternative vowel spellings in the practice sentence:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 18px; padding: 10px; border: 1px dashed #ccc;">
                        The doctor with the blue collar loves the circus.
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>How many did you find? <span class="answer-space" style="width: 50px;"></span></div>
                        <div>List them: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a sentence that uses at least two different alternative vowel sounds:
                    <div class="answer-space" style="height: 60px; width: 100%; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>Circle the /u/ word(s): ________</div>
                        <div>Circle the /oo/ word(s): ________</div>
                        <div>Circle the Schwa word(s): ________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a sentence in a book at home that contains at least one alternative vowel spelling word. Copy it and underline the word.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Final Fluency and Assessment",
        subtopic: "Demonstrating mastery of reading and blending alternative vowel choices",
        lessonContent: `
            <p>Welcome to our final Literacy lesson of Week 10! Today we will show all we've learned about alternative vowel sounds.</p>
            <p><strong>Key Concept:</strong> Good readers can recognize and blend different vowel spellings automatically.</p>
            <p><strong>Final Review:</strong> Let's remember our four main alternative spellings:</p>
            <ul>
                <li><strong>'o' making /u/ sound</strong> – glove, love, some</li>
                <li><strong>'ew' making /oo/ sound</strong> – chew, grew, blew</li>
                <li><strong>'ue' making /oo/ sound</strong> – blue, glue, true</li>
                <li><strong>Schwa endings</strong> – teacher, doctor, collar</li>
            </ul>
            <p><strong>Today's Activities:</strong> We'll do an oral reading assessment and some creative writing to show our skills!</p>
            <p><strong>Celebration Time:</strong> Everyone who participates today is a "Vowel Champion"!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-reader" style="color: #9C27B0;"></i> Reading Passage Example</div>
                <p><strong>Short passage:</strong> "My teacher loves blue gloves. The doctor has some glue. I see the moon in the room."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt" style="color: #009688;"></i> Creative Writing Example</div>
                <p><strong>Three-sentence story:</strong> "The teacher found a blue glove. She gave it to the doctor. They both said 'thank you'."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy" style="color: #FFC107;"></i> Vowel Champion Cheer</div>
                <p>We'll all stand and cheer: "I can read! I can blend! I'm a vowel champion to the end!"</p>
            </div>
        `,
        taskInstructions: "Complete the final assessment activities to show your vowel sound mastery.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Oral Reading Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read this passage aloud to your teacher or a partner:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background-color: #F3E5F5; border-radius: 5px; font-size: 18px;">
                        <p>The teacher with the blue gloves loves to read. She has some books about the moon and stars. The doctor in the collar thinks reading is fun too!</p>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Read smoothly</div>
                        <div>☐ Pronounced vowel sounds correctly</div>
                        <div>☐ Used expression</div>
                        <div>Teacher/Partner signature: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Creative Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write a three-sentence story using as many alternative spelling words as possible:
                    <div class="answer-space" style="height: 150px; width: 100%; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>Count your alternative vowel words: <span class="answer-space" style="width: 50px;"></span></div>
                        <div>List them here: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sound Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match each word to its vowel sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>glove → ☐ /oo/ sound ☐ /u/ sound ☐ Schwa</div>
                        <div>blue → ☐ /oo/ sound ☐ /u/ sound ☐ Schwa</div>
                        <div>teacher → ☐ /oo/ sound ☐ /u/ sound ☐ Schwa</div>
                        <div>chew → ☐ /oo/ sound ☐ /u/ sound ☐ Schwa</div>
                        <div>collar → ☐ /oo/ sound ☐ /u/ sound ☐ Schwa</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Vowel Champion Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Design your own "Vowel Champion" award:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #FFC107;"></div>
                    <div style="margin-top: 10px;">
                        <div>My name: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>I am a champion at reading: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Complete these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The hardest vowel sound for me was: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>I feel proud that I can now read: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>My favorite vowel activity was: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach someone at home about the three vowel sounds (/u/, /oo/, Schwa). Find one example of each in a book or magazine.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3LiteracyWeek10);
    console.log("literacy-week10-alternative-vowels.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3LiteracyWeek10);
    console.log("literacy-week10-alternative-vowels.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3LiteracyWeek10',
        metadata: grade3LiteracyWeek10.metadata,
        days: grade3LiteracyWeek10
    });
    console.log("literacy-week10-alternative-vowels.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3LiteracyWeek10 = grade3LiteracyWeek10;
console.log("literacy-week10-alternative-vowels.js loaded and registered successfully");