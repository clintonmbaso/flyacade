// Grade 2 Literacy - Week 8 Data (Phonics Patterns)
const grade2LiteracyWeek8 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        week: 8,
        title: "Special Letter Teams — Double Consonants and Silent Letters",
        description: "Learning to read and write words with double consonants (ff, ll, ss, zz) and digraphs with silent letters (kn, wr)"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Introduction to Double Consonants",
        subtopic: "Blending and reading words with ff, ll, ss, zz",
        lessonContent: `
            <p>Welcome to our Literacy lesson! Today we will learn about special letter teams where two of the same letter make just one sound.</p>
            <p><strong>Key Concept:</strong> Sometimes we use two of the same letter to make just one sound, usually at the end of a short word.</p>
            <p><strong>Review Sounds:</strong> Let's remember the sounds for /s/, /z/, /f/, and /l/.</p>
            <p><strong>Double Consonant Examples:</strong></p>
            <ul>
                <li><strong>ss</strong> makes the /s/ sound (like in "miss")</li>
                <li><strong>zz</strong> makes the /z/ sound (like in "buzz")</li>
                <li><strong>ff</strong> makes the /f/ sound (like in "off")</li>
                <li><strong>ll</strong> makes the /l/ sound (like in "well")</li>
            </ul>
            <p><strong>Blending Tip:</strong> When you see two of the same consonant together, remember they make only one sound!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spell-check" style="color: #4CAF50;"></i> Blending Example</div>
                <p><strong>m-i-ss = miss</strong> - The "ss" makes one /s/ sound at the end.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ol"></i> More Words to Blend</div>
                <p>glass, puff, jazz, doll, mess - Each has a double consonant making one sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Sound Button Game!</div>
                <p>Let's use sound buttons! A dot under single letters, a line under double consonants. Tap each sound as you read!</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice reading words with double consonants.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Blend and read these words. Draw a line under each double consonant:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>miss <div class="underline-area" style="width: 100px; border-bottom: 1px solid #ccc; display: inline-block; margin-left: 10px;"></div></div>
                    <div>buzz <div class="underline-area" style="width: 100px; border-bottom: 1px solid #ccc; display: inline-block; margin-left: 10px;"></div></div>
                    <div>off <div class="underline-area" style="width: 100px; border-bottom: 1px solid #ccc; display: inline-block; margin-left: 10px;"></div></div>
                    <div>well <div class="underline-area" style="width: 100px; border-bottom: 1px solid #ccc; display: inline-block; margin-left: 10px;"></div></div>
                    <div>glass <div class="underline-area" style="width: 100px; border-bottom: 1px solid #ccc; display: inline-block; margin-left: 10px;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Read these sentences and circle all words with "ss," "zz," "ff," or "ll":
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F3E5F5; border-radius: 5px;">
                    <div>1. The glass fell with a crash.</div>
                    <div>2. My doll has a yellow dress.</div>
                    <div>3. Turn the light off at the wall.</div>
                    <div>4. The jazz band made a big buzz.</div>
                    <div>5. I will not miss the bus.</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Sort the words by their double consonant:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>ff:</strong> puff, _____, _____</div>
                    <div><strong>ll:</strong> doll, _____, _____</div>
                    <div><strong>ss:</strong> mess, _____, _____</div>
                    <div><strong>zz:</strong> jazz, _____, _____</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Quick-fire round! How many sounds do you hear? Hold up fingers:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>"buzz" → ______ sounds</div>
                    <div>"miss" → ______ sounds</div>
                    <div>"well" → ______ sounds</div>
                    <div>"puff" → ______ sounds</div>
                </div>
            </div>
        `,
        homework: "Find 3 objects at home whose names might have double consonants (like pillow, coffee, grass). Write them down.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Digraphs with Silent Letters",
        subtopic: "Reading words where the first letter is silent (kn, wr)",
        lessonContent: `
            <p>Today we will learn about special letter teams where one letter stays silent and doesn't make a sound!</p>
            <p><strong>Key Concept:</strong> Some consonant pairs have a silent letter that we don't pronounce.</p>
            <p><strong>The "kn" Team:</strong> In words like "knock," the <strong>k</strong> is silent. We only say the /n/ sound.</p>
            <ul>
                <li>knock</li>
                <li>knee</li>
                <li>knife</li>
                <li>know</li>
            </ul>
            <p><strong>The "wr" Team:</strong> In words like "write," the <strong>w</strong> is silent. We only say the /r/ sound.</p>
            <ul>
                <li>write</li>
                <li>wrong</li>
                <li>wrist</li>
                <li>wrap</li>
            </ul>
            <p><strong>Blending Tip:</strong> When you see "kn" or "wr," remember to skip the first letter's sound!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-mute" style="color: #9C27B0;"></i> Silent Letter Example</div>
                <p><strong>kn-o-ck = knock</strong> - The "k" is silent, we only say /n/ /o/ /ck/.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Read and Erase Activity</div>
                <p>We'll read "kn" and "wr" words from the board, then erase them when we get them right!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Mystery Word Game!</div>
                <p>"This is a part of your leg that rhymes with bee" → Knee! Let's solve more clues!</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice reading and writing words with silent letters.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Silent Letter Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write each word under "kn" or "wr":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>write, knee, wrong, knife, wrist, know</div>
                        <div style="display: flex; margin-top: 10px;">
                            <div style="flex: 1; padding: 10px; background-color: #E8F5E9;">
                                <strong>kn words:</strong><br>
                                <div class="answer-space" style="height: 80px;"></div>
                            </div>
                            <div style="flex: 1; padding: 10px; background-color: #E3F2FD;">
                                <strong>wr words:</strong><br>
                                <div class="answer-space" style="height: 80px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Read and Erase</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read these words aloud to a partner. Check each box when you read it correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ knock</div>
                        <div>☐ write</div>
                        <div>☐ knee</div>
                        <div>☐ wrong</div>
                        <div>☐ wrist</div>
                        <div>☐ knife</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Original Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write three sentences. Use one "kn" word and one "wr" word in each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <div class="answer-space" style="width: 100%; height: 30px;"></div></div>
                        <div>2. <div class="answer-space" style="width: 100%; height: 30px;"></div></div>
                        <div>3. <div class="answer-space" style="width: 100%; height: 30px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mystery Word Clues</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve the clues with "kn" or "wr" words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. This is a part of your leg that rhymes with bee. → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>2. You do this with a pencil on paper. → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>3. Not right, the opposite of right. → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>4. You use this to cut food. → <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look for 'kn' or 'wr' words in a storybook or on food packages. List 2 you find.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Double Consonants & Silent Letters Review",
        subtopic: "Mixed practice with special letter teams",
        lessonContent: `
            <p>Today is our special letter teams celebration day! We'll review both double consonants and silent letter digraphs.</p>
            <p><strong>Key Concept Review:</strong></p>
            <ul>
                <li><strong>Double Consonants:</strong> Two same letters = one sound (ff, ll, ss, zz)</li>
                <li><strong>Silent Letters:</strong> First letter is quiet in "kn" and "wr"</li>
            </ul>
            <p><strong>Reading Strategy:</strong> Before you read a word, look for special letter teams!</p>
            <p><strong>Blending Practice:</strong> Let's blend words with both patterns:</p>
            <ul>
                <li>kn-ee = knee (silent k)</li>
                <li>me-ss = mess (double ss)</li>
                <li>wr-i-st = wrist (silent w)</li>
                <li>pu-ff = puff (double ff)</li>
            </ul>
            <p><strong>Today's activities:</strong> We'll play games, read sentences, and show we're phonics experts!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star" style="color: #FFC107;"></i> Expert Blending</div>
                <p>"I can read 'knock' and 'glass'! One has a silent k, one has double s!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-reader"></i> Sentence Reading</div>
                <p>"I know my knee will get well soon." → Find the silent letter and double consonant words!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Phonics Race!</div>
                <p>We'll race to sort words into two teams: Double Consonants vs. Silent Letters!</p>
            </div>
        `,
        taskInstructions: "Show what you know about double consonants and silent letters!",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Word Sort Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these words into the correct column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>miss, knock, puff, write, well, knee</div>
                        <div style="display: flex; margin-top: 10px;">
                            <div style="flex: 1; padding: 10px; background-color: #FFF3E0;">
                                <strong>Double Consonants:</strong><br>
                                <div class="answer-space" style="height: 80px;"></div>
                            </div>
                            <div style="flex: 1; padding: 10px; background-color: #E8F5E9;">
                                <strong>Silent Letters (kn/wr):</strong><br>
                                <div class="answer-space" style="height: 80px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read the story. Circle double consonant words in <span style="color: blue;">blue</span> and silent letter words in <span style="color: red;">red</span>:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F5F5F5; border-radius: 5px;">
                        <div>My mom said, "Do not knock on the glass." I fell and hurt my wrist. It was the wrong move! My knee has a small puff. I hope it will get well.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create a Word Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw and label 4 words: 2 with double consonants, 2 with silent letters:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div class="drawing-area" style="height: 100px;"></div>
                            <div>Word: <span class="answer-space" style="width: 80px;"></span></div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div class="drawing-area" style="height: 100px;"></div>
                            <div>Word: <span class="answer-space" style="width: 80px;"></span></div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div class="drawing-area" style="height: 100px;"></div>
                            <div>Word: <span class="answer-space" style="width: 80px;"></span></div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div class="drawing-area" style="height: 100px;"></div>
                            <div>Word: <span class="answer-space" style="width: 80px;"></span></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Phonics Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one thing you learned about special letter teams:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I learned that ________________________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Speed Read Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Time yourself reading these words in 1 minute:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 18px; column-count: 2;">
                        <div>miss</div>
                        <div>knock</div>
                        <div>well</div>
                        <div>write</div>
                        <div>buzz</div>
                        <div>knee</div>
                        <div>off</div>
                        <div>wrong</div>
                        <div>glass</div>
                        <div>wrist</div>
                    </div>
                    <div style="margin-top: 10px;">Number read correctly: <span class="answer-space" style="width: 60px;"></span></div>
                </div>
            </div>
        `,
        homework: "Teach someone at home about silent 'k' in 'knock' and double 's' in 'miss.' Show them how to read 3 words.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek8);
    console.log("literacy-week8-phonics.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek8);
    console.log("literacy-week8-phonics.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek8',
        metadata: grade2LiteracyWeek8.metadata,
        days: grade2LiteracyWeek8
    });
    console.log("literacy-week8-phonics.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek8 = grade2LiteracyWeek8;
console.log("literacy-week8-phonics.js loaded and registered successfully");