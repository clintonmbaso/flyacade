// Grade 5 English - Term 2 Week 2 Data
const grade5EnglishWeek2 = {
    metadata: {
        grade: 5,
        subject: "English",
        term: 2,
        week: 2,
        title: "Continuous Tenses (Part 1)",
        description: "Identifying and using present, past, and future continuous tenses"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Present Continuous Tense",
        lessonContent: `
            <p>Welcome to our lesson on the Present Continuous Tense! Today we'll learn how to talk about actions happening right now.</p>
            <p><strong>Key Question:</strong> What is happening in our classroom at this very moment?</p>
            <p><strong>Introduction:</strong> The Present Continuous Tense describes actions that are happening NOW, at this exact moment. We use it when something is in progress and not yet finished.</p>
            <p><strong>Structure of Present Continuous Tense:</strong></p>
            <p style="background: #f0f8ff; padding: 10px; border-radius: 8px;"><strong>Subject + is/am/are + verb(-ing) + object</strong></p>
            <p><strong>When do we use it?</strong></p>
            <ol>
                <li>Actions happening right now (e.g., "She is reading a book.")</li>
                <li>Temporary actions (e.g., "I am staying with my aunt this week.")</li>
                <li>Changing or developing situations (e.g., "The weather is getting warmer.")</li>
            </ol>
            <p><strong>The verb "to be" helpers:</strong></p>
            <ul>
                <li><strong>I</strong> → am (I am eating)</li>
                <li><strong>He/She/It</strong> → is (She is running)</li>
                <li><strong>You/We/They</strong> → are (They are playing)</li>
            </ul>
            <p><strong>Adding -ing to verbs (spelling rules):</strong></p>
            <ul>
                <li>Most verbs: add -ing (play → playing)</li>
                <li>Verbs ending in -e: drop the -e and add -ing (write → writing)</li>
                <li>Short verbs ending consonant-vowel-consonant: double the last letter (run → running)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Look Around You!</div>
                <p>What is happening in your classroom right now? "Mumba is writing." "The teacher is explaining." "The sun is shining through the window."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Right Now vs. Usually</div>
                <p>Compare: "I eat breakfast every day" (habit) vs. "I am eating breakfast right now" (happening now).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spell-check"></i> Spelling Practice</div>
                <p>dance → dancing (drop the e)<br>swim → swimming (double the m)<br>read → reading (just add ing)</p>
            </div>
        `,
        taskInstructions: "Observe your classmates and describe what they are doing. Then complete sentence exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around the classroom. Write 5 sentences describing what your classmates are doing RIGHT NOW:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: "Chanda is sharpening her pencil."</div>
                        <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with the correct present continuous form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The baby _______________ (sleep) peacefully.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) I _______________ (read) an interesting book.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) They _______________ (play) football in the yard.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>d) She _______________ (write) a letter to her grandmother.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>e) We _______________ (learn) about continuous tenses today!</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write one present continuous sentence about each picture described below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A girl eating an apple: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>• A dog running in the park: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>• Your teacher helping a student: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Error Correction</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Fix the mistakes in these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) He are going to school. → _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) I is eating lunch. → _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) They am playing outside. → _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences about what different family members are doing at home right now while you do your homework. Use present continuous tense.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Past Continuous Tense",
        lessonContent: `
            <p>Welcome back! Today we'll learn about the Past Continuous Tense - how to talk about actions that were happening in the past.</p>
            <p><strong>Key Question:</strong> What were you doing yesterday at 4 PM?</p>
            <p><strong>Introduction:</strong> The Past Continuous Tense describes actions that were in progress at a specific time in the past. It shows that something was happening over a period of time, not just a single moment.</p>
            <p><strong>Structure of Past Continuous Tense:</strong></p>
            <p style="background: #f0f8ff; padding: 10px; border-radius: 8px;"><strong>Subject + was/were + verb(-ing) + object</strong></p>
            <p><strong>When do we use it?</strong></p>
            <ol>
                <li>Actions happening at a specific past time (e.g., "At 7 AM, I was eating breakfast.")</li>
                <li>Longer actions interrupted by shorter actions (e.g., "I was watching TV when the phone rang.")</li>
                <li>Two actions happening at the same time in the past (e.g., "While I was cooking, my sister was setting the table.")</li>
                <li>Setting the scene in a story (e.g., "The sun was shining. Birds were singing.")</li>
            </ol>
            <p><strong>Using "was" vs "were":</strong></p>
            <ul>
                <li><strong>I/He/She/It</strong> → was (He was sleeping)</li>
                <li><strong>You/We/They</strong> → were (We were laughing)</li>
            </ul>
            <p><strong>Common time expressions with past continuous:</strong></p>
            <ul>
                <li>At 5 o'clock yesterday</li>
                <li>Yesterday at this time</li>
                <li>While / When</li>
                <li>All morning / All evening</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hourglass-half"></i> A Specific Moment in the Past</div>
                <p>"At 8 PM last night, I was doing my homework." This tells us exactly what was happening at that moment.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bell"></i> Interrupted Actions</div>
                <p>"I was walking to school when I saw my friend." The walking (long action) was interrupted by the seeing (short action).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paragraph"></i> Story Setting</div>
                <p>"The wind was blowing. The rain was falling. A man was walking down the empty street." This paints a picture of the scene.</p>
            </div>
        `,
        taskInstructions: "Complete sentences about yesterday and create your own past continuous examples.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use the past continuous tense to complete these sentences about YESTERDAY:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) At 7 AM, I _______________ (get) ready for school.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) At 12 PM, we _______________ (eat) lunch in the cafeteria.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) At 4 PM, I _______________ (walk) home from school.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>d) At 6 PM, my mother _______________ (cook) dinner.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>e) At 8 PM, my family and I _______________ (watch) television.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Choose the Correct Form</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the correct word (was or were) for each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) She (was / were) singing beautifully.</div>
                        <div>b) They (was / were) playing in the garden.</div>
                        <div>c) I (was / were) sleeping when you called.</div>
                        <div>d) We (was / were) waiting for the bus.</div>
                        <div>e) He (was / were) reading a comic book.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Interrupted Actions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Combine these sentences using "when" or "while":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: I was studying. The lights went out. → I was studying when the lights went out.</div>
                        <div style="margin-top: 10px;">a) I was eating dinner. The doorbell rang.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) The teacher was explaining the lesson. A student sneezed loudly.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) We were playing outside. It started to rain.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Write Your Own Story Opening</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 3 past continuous sentences to describe what was happening at this time YESTERDAY:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member what they were doing at three different times yesterday. Write their answers in complete sentences using past continuous tense.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Future Continuous Tense",
        lessonContent: `
            <p>Today we'll finish our continuous tenses series with the Future Continuous Tense - talking about actions that will be happening in the future!</p>
            <p><strong>Key Question:</strong> What will you be doing tomorrow at this time?</p>
            <p><strong>Introduction:</strong> The Future Continuous Tense describes actions that will be in progress at a specific time in the future. It helps us talk about future plans and predictions about ongoing actions.</p>
            <p><strong>Structure of Future Continuous Tense:</strong></p>
            <p style="background: #f0f8ff; padding: 10px; border-radius: 8px;"><strong>Subject + will be + verb(-ing) + object</strong></p>
            <p><strong>When do we use it?</strong></p>
            <ol>
                <li>Actions that will be happening at a specific future time (e.g., "At 10 AM tomorrow, I will be taking a test.")</li>
                <li>Future plans and arrangements (e.g., "Next week, we will be visiting my grandmother.")</li>
                <li>Predicting that something is already happening or will happen (e.g., "Don't call at 8 PM - I will be eating dinner.")</li>
                <li>Polite questions about future plans (e.g., "Will you be using the car tomorrow?")</li>
            </ol>
            <p><strong>REMEMBER:</strong> The future continuous always uses "will be" + verb-ing for ALL subjects (I, you, he, she, it, we, they). No exceptions!</p>
            <p><strong>Common time expressions with future continuous:</strong></p>
            <ul>
                <li>At (specific time) tomorrow</li>
                <li>This time next week / month / year</li>
                <li>Tomorrow at this time</li>
                <li>In the morning/afternoon/evening of...</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> Future Plans</div>
                <p>"Tomorrow, I will be playing football." This means you have already planned to play football, and at that time tomorrow, the action will be in progress.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Polite Questions</div>
                <p>"Will you be going to the market later?" This is a polite way to ask about someone's future plans without being pushy.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Compare the Tenses We've Learned</div>
                <p>Present: I am eating dinner NOW.<br>Past: I was eating dinner at 6 PM YESTERDAY.<br>Future: I will be eating dinner at 6 PM TOMORROW.</p>
            </div>
        `,
        taskInstructions: "Draw a picture of your future plans and write sentences using future continuous tense.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw and Write About Your Future Plans</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a picture showing something you will be doing in the future:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Write a sentence about your drawing using future continuous tense:
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Future Continuous Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the blanks with the future continuous form of the verb in brackets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Tomorrow at 8 AM, I _______________ (travel) to school.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b) This time next week, we _______________ (celebrate) my birthday.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c) At 3 PM on Sunday, my family _______________ (have) lunch together.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>d) Next year, I _______________ (study) in Grade 6.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>e) Don't call me at 7 PM - I _______________ (watch) my favourite show.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Schedule</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 5 sentences about what you will be doing at different times TOMORROW:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: "At 7 AM, I will be getting dressed for school."</div>
                        <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Question and Answer</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write a question using future continuous, then answer it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Question: "What will you be doing this weekend?"</div>
                        <div>Answer: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Your own question: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Your answer: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Review: All Three Continuous Tenses</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Write one sentence for each tense about the same topic (e.g., "reading a book"):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Present: I am reading a book right now.</div>
                        <div>Past: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Future: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write a paragraph (5-7 sentences) about what you will be doing next Saturday. Use future continuous tense in every sentence.",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5EnglishWeek2);
    console.log("grade5-english-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5EnglishWeek2);
    console.log("grade5-english-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5EnglishWeek2',
        metadata: grade5EnglishWeek2.metadata,
        days: grade5EnglishWeek2
    });
    console.log("grade5-english-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5EnglishWeek2 = grade5EnglishWeek2;
console.log("grade5-english-week2.js loaded and registered successfully");