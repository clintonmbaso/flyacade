// Grade 3 Literacy - Term 3 Week 10 Data
const grade3LiteracyWeek10 = {
    metadata: {
        grade: 3,
        subject: "Literacy",
        term: 3,
        week: 10,
        title: "End of Year Review",
        description: "Reviewing alternative sound combinations, reading comprehension, and cursive handwriting"
    },
    
    monday: {
        subject: "Literacy",
        topic: "End of Year Review",
        subtopic: "Alternative Sound Combinations & Sight Word Check",
        lessonContent: `
            <p>Welcome to our end of year literacy review! This week we'll celebrate all the amazing reading and writing skills you've learned in Grade 3.</p>
            <p><strong>Key Question:</strong> How many different ways can letters work together to make sounds?</p>
            <p><strong>Introduction:</strong> Throughout Grade 3, you've learned that some sounds can be spelled in different ways. Today we'll review these tricky sound combinations.</p>
            <p><strong>Alternative Sound Combinations to Review:</strong></p>
            <ol>
                <li><strong>/ai/ sound:</strong> ai (rain), ay (day), a_e (cake), a (apron)</li>
                <li><strong>/ee/ sound:</strong> ee (feet), ea (leaf), e_e (these), y (sunny), ey (key)</li>
                <li><strong>/ie/ sound:</strong> ie (pie), i_e (time), igh (night), y (fly)</li>
                <li><strong>/oa/ sound:</strong> oa (boat), ow (snow), o_e (home), o (go)</li>
                <li><strong>/oo/ sound (long):</strong> oo (moon), u_e (rule), ew (grew), ue (blue)</li>
                <li><strong>/ow/ sound:</strong> ow (cow), ou (loud)</li>
            </ol>
            <p><strong>Sight Words to Check:</strong></p>
            <ul>
                <li>because, could, should, would, beautiful, together, different, friend, people, their, they're, there</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Same Sound, Different Spellings</div>
                <p>The sound /ai/ can be spelled in four ways! Compare: <strong>rain, day, cake, apron</strong> - they all have the same /ai/ sound but look different!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Tricky Sight Words</div>
                <p>The word "beautiful" has 9 letters but we say it "bee-uh-tuh-ful". You can't sound it out - you just need to remember how it looks!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Watch Out!</div>
                <p>"Their" (belongs to them), "they're" (they are), and "there" (a place) sound the same but mean different things!</p>
            </div>
        `,
        taskInstructions: "Complete the sound sort, sight word sentences, and reading check.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Sort Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these words into the correct sound groups:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div><strong>Word Bank:</strong> night, boat, moon, cow, rain, fly, leaf, loud, pie, snow, time, blue</div>
                    </div>
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">/ie/ sound</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">/oa/ sound</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">/oo/ sound</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">/ow/ sound</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 80px; vertical-align: top;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 80px; vertical-align: top;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 80px; vertical-align: top;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 80px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sight Word Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with the correct sight word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. I want to go to the park __________ it is raining. (because / beautiful)</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">b. __________ are three apples on the table. (Their / There / They're)</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">c. My best __________ is coming to my party. (friend / people)</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">d. The sunset was __________! (beautiful / together)</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">e. We worked __________ on the group project. (different / together)</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Read Aloud Check</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read this passage to your teacher:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #e8f4f8; border-radius: 8px;">
                        <p>"One beautiful night, my friend and I went outside to look at the bright moon. The stars were like tiny lights in the dark sky. We stayed together because we could see so many different shapes in the clouds. 'Look over there!' my friend shouted. There was a shooting star! We made a wish together before it disappeared."</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Teacher notes (fluency, accuracy, expression):
                    <div class="answer-space" style="height: 80px; margin-top: 5px; background: #fff8e7;"></div>
                </div>
            </div>
        `,
        homework: "Practice reading this week's sight words to a family member. Write 5 sentences using different sight words.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "End of Year Review",
        subtopic: "Silent and Shared Reading Comprehension Exercises",
        lessonContent: `
            <p>Today we'll practice our reading comprehension skills through both silent reading and shared reading activities!</p>
            <p><strong>Key Question:</strong> How can we better understand and remember what we read?</p>
            <p><strong>Introduction:</strong> Good readers use many strategies to understand what they read. Today we'll review these strategies and practice with a special story.</p>
            <p><strong>Reading Comprehension Strategies:</strong></p>
            <ol>
                <li><strong>Preview:</strong> Look at the title, pictures, and headings before you start</li>
                <li><strong>Predict:</strong> Guess what might happen in the story</li>
                <li><strong>Visualize:</strong> Create pictures in your mind as you read</li>
                <li><strong>Question:</strong> Ask yourself "Who? What? Where? When? Why? How?"</li>
                <li><strong>Clarify:</strong> Stop when something doesn't make sense and reread</li>
                <li><strong>Summarize:</strong> Tell the main ideas in your own words</li>
            </ol>
            <p><strong>Silent Reading vs. Shared Reading:</strong></p>
            <ul>
                <li><strong>Silent Reading:</strong> Reading quietly to yourself at your own pace. This helps you focus and think deeply.</li>
                <li><strong>Shared Reading:</strong> Reading aloud with a partner or group. This helps you hear how words sound and discuss what you read.</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Mental Movies</div>
                <p>When you read "The waves crashed against the sandy shore," you can imagine the blue water, hear the sound of waves, and feel the sand. That's visualizing!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Shared Reading Benefits</div>
                <p>Reading with a partner lets you share ideas. You might notice something your partner didn't see, and they might help you understand a tricky part!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Ask Questions</div>
                <p>While reading, ask: Why did the character do that? What will happen next? How do they feel? Good readers are always curious!</p>
            </div>
        `,
        taskInstructions: "Read the passage silently, then with a partner, and answer comprehension questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Silent Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read this story silently to yourself. Take your time and visualize what is happening:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background: #fef9e6; border-radius: 8px; border-left: 5px solid #4A90E2;">
                        <p><strong>The Lost Kitten</strong></p>
                        <p>Maya was walking home from school when she heard a tiny sound. "Meow!" It came from behind a bush near the old oak tree. Maya knelt down and peeked through the leaves. A small gray kitten with big green eyes looked back at her. The kitten was shivering and looked hungry.</p>
                        <p>"Are you lost?" Maya whispered. She gently picked up the kitten and wrapped it in her jacket. She looked around for the kitten's mother but didn't see any other cats. Maya decided to take the kitten home.</p>
                        <p>When Maya's mom saw the kitten, she smiled. "We can make posters to find its owner," she said. Maya named the kitten "Lucky" while they waited. Three days later, a little girl named Emma came to their door. "That's my Whiskers!" she cried happily. Maya was sad to say goodbye, but she knew Whiskers was home where he belonged.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Shared Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read the story again with a partner. Take turns reading paragraphs. After reading, discuss:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What was your favorite part?</div>
                        <div>• Was there any part that was confusing?</div>
                        <div>• How did Maya feel at the end?</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comprehension Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions in complete sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Where did Maya find the kitten?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">b. What color was the kitten?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">c. What did Maya's mom suggest they do?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">d. What was the kitten's real name?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">e. How do you think Maya felt when the kitten went home? Why?</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Summary</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a 3-sentence summary of "The Lost Kitten":
                    <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Read a short book or story at home. Tell a family member what happened at the beginning, middle, and end.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "End of Year Review",
        subtopic: "Cursive Handwriting and Final Sentence Dictation Check",
        lessonContent: `
            <p>Today we'll celebrate our beautiful cursive handwriting and show how much we've learned in our final dictation!</p>
            <p><strong>Key Question:</strong> How has your handwriting improved this year?</p>
            <p><strong>Introduction:</strong> Cursive writing helps your brain connect letters and words smoothly. Today we'll practice our best cursive and show what we can do in our final dictation check.</p>
            <p><strong>Cursive Letter Connections to Remember:</strong></p>
            <ul>
                <li><strong>Lowercase connections:</strong> Letters like a, c, d, g, o, q - start at the bottom and curve up</li>
                <li><strong>Tall letters:</strong> b, d, f, h, k, l, t - go all the way to the top line</li>
                <li><strong>Letters with descenders:</strong> g, j, p, q, y - drop below the bottom line</li>
                <li><strong>Bumpy letters:</strong> m, n, u, v, w, x - have little "hills"</li>
                <li><strong>Loop letters:</strong> e, l, h, k, b, f - have loops that go up and around</li>
            </ul>
            <p><strong>Tips for Beautiful Cursive:</strong></p>
            <ol>
                <li>Sit up straight with both feet on the floor</li>
                <li>Hold your pencil gently but firmly</li>
                <li>Keep your letters the same size</li>
                <li>Leave a small space between words</li>
                <li>Slant your letters slightly to the right</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> Cursive in Action</div>
                <p>Look at the word "together" in cursive: the t connects to o, o to g, g to e, and so on - all one smooth motion without lifting your pencil!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Dictation Practice</div>
                <p>In dictation, your teacher reads a sentence aloud. You listen carefully, remember the words, and write them correctly in cursive. It tests your ears AND your hand!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Your Growth</div>
                <p>Compare your cursive from September to now. Look at the size, slant, and connections. You've come so far - be proud of your hard work!</p>
            </div>
        `,
        taskInstructions: "Practice cursive letter connections, then complete the final sentence dictation check.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cursive Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Trace and then write these cursive letter connections:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• a → c → d → g → q</div>
                        <div class="cursive-practice-area" style="height: 40px; margin-top: 5px; border-bottom: 1px dotted #ccc;"></div>
                        <div style="margin-top: 10px;">• b → h → k → l → t</div>
                        <div class="cursive-practice-area" style="height: 40px; margin-top: 5px; border-bottom: 1px dotted #ccc;"></div>
                        <div style="margin-top: 10px;">• m → n → u → v → w</div>
                        <div class="cursive-practice-area" style="height: 40px; margin-top: 5px; border-bottom: 1px dotted #ccc;"></div>
                        <div style="margin-top: 10px;">• g → j → p → q → y (descenders - go below the line!)</div>
                        <div class="cursive-practice-area" style="height: 50px; margin-top: 5px; border-bottom: 1px dotted #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Cursive Words and Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write these words in your best cursive:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• friend</div>
                        <div class="cursive-practice-area" style="height: 40px; margin-top: 5px; border-bottom: 1px dotted #ccc;"></div>
                        <div style="margin-top: 10px;">• beautiful</div>
                        <div class="cursive-practice-area" style="height: 40px; margin-top: 5px; border-bottom: 1px dotted #ccc;"></div>
                        <div style="margin-top: 10px;">• together</div>
                        <div class="cursive-practice-area" style="height: 40px; margin-top: 5px; border-bottom: 1px dotted #ccc;"></div>
                        <div style="margin-top: 10px;">• The quick brown fox jumps over the lazy dog.</div>
                        <div class="cursive-practice-area" style="height: 40px; margin-top: 5px; border-bottom: 1px dotted #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Final Sentence Dictation Check</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Your teacher will read each sentence twice. Listen carefully, then write each sentence in cursive:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Sentence 1:</strong> ___________________________________________</div>
                        <div class="cursive-practice-area" style="height: 50px; margin-top: 5px; border-bottom: 2px solid #4A90E2;"></div>
                        <div style="margin-top: 15px;"><strong>Sentence 2:</strong> ___________________________________________</div>
                        <div class="cursive-practice-area" style="height: 50px; margin-top: 5px; border-bottom: 2px solid #4A90E2;"></div>
                        <div style="margin-top: 15px;"><strong>Sentence 3:</strong> ___________________________________________</div>
                        <div class="cursive-practice-area" style="height: 50px; margin-top: 5px; border-bottom: 2px solid #4A90E2;"></div>
                        <div style="margin-top: 15px;"><strong>Sentence 4:</strong> ___________________________________________</div>
                        <div class="cursive-practice-area" style="height: 50px; margin-top: 5px; border-bottom: 2px solid #4A90E2;"></div>
                        <div style="margin-top: 15px;"><strong>Sentence 5:</strong> ___________________________________________</div>
                        <div class="cursive-practice-area" style="height: 50px; margin-top: 5px; border-bottom: 2px solid #4A90E2;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Self-Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at your cursive writing. Circle one for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Letter size: Too big / Just right / Too small</div>
                        <div>Letter slant: Too straight / Just right / Too slanted</div>
                        <div>Letter connections: Not connected / Mostly connected / All connected</div>
                        <div>Spacing: Too close / Just right / Too far apart</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What is one thing you are proud of about your cursive handwriting this year?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Write a short letter to your Grade 4 teacher (or next year's teacher) in your best cursive. Tell them something you love to learn about!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3LiteracyWeek10);
    console.log("grade3-literacy-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3LiteracyWeek10);
    console.log("grade3-literacy-week10.js registered using DataLoader.registerWorksheet()");
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
    console.log("grade3-literacy-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3LiteracyWeek10 = grade3LiteracyWeek10;
console.log("grade3-literacy-week10.js loaded and registered successfully");