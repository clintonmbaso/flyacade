// Grade 5 English - Term 2 Week 3 Data
const grade5EnglishWeek3 = {
    metadata: {
        grade: 5,
        subject: "English",
        term: 2,
        week: 3,
        title: "Continuous Tenses (Part 2)",
        description: "Changing tenses from past to future, constructing continuous sentences, and reviewing present, past, and future continuous forms"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Changing Tenses (Past to Future)",
        lessonContent: `
            <p>Welcome back to our study of continuous tenses! Today we'll learn how to transform sentences from past continuous to future continuous.</p>
            <p><strong>Key Question:</strong> How do we change "I was eating" into "I will be eating"?</p>
            <p><strong>Review of Continuous Tenses:</strong></p>
            <ul>
                <li><strong>Present Continuous:</strong> am/is/are + verb-ing (I am eating)</li>
                <li><strong>Past Continuous:</strong> was/were + verb-ing (I was eating)</li>
                <li><strong>Future Continuous:</strong> will be + verb-ing (I will be eating)</li>
            </ul>
            <p><strong>Changing from Past to Future Continuous:</strong></p>
            <ol>
                <li>Remove the past tense helper (was/were)</li>
                <li>Add the future tense helper (will be)</li>
                <li>Keep the main verb in its -ing form</li>
            </ol>
            <p><strong>Example:</strong></p>
            <ul>
                <li>Past: <em>She was dancing at the party.</em></li>
                <li>Future: <em>She will be dancing at the party.</em></li>
            </ul>
            <p><strong>When to Use Future Continuous:</strong></p>
            <ul>
                <li>To describe an action that will be in progress at a specific time in the future</li>
                <li>Example: "Tomorrow at 3 PM, I will be taking a test."</li>
                <li>To predict or guess about an action in progress now</li>
                <li>Example: "Don't call at 8 PM - we will be having dinner."</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Transformation Examples</div>
                <p><strong>Past:</strong> I was reading a book.<br>
                <strong>Future:</strong> I will be reading a book.</p>
                <p><strong>Past:</strong> They were playing soccer.<br>
                <strong>Future:</strong> They will be playing soccer.</p>
                <p><strong>Past:</strong> He was sleeping when I called.<br>
                <strong>Future:</strong> He will be sleeping when I call.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Time Signal Words</div>
                <p>Past continuous uses: yesterday, last night, at 5 PM yesterday, when, while<br>
                Future continuous uses: tomorrow, next week, at 8 AM tomorrow, this time next week</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Question Form</div>
                <p>Past: Were you waiting long?<br>
                Future: Will you be waiting long?</p>
                <p>Past: What were they discussing?<br>
                Future: What will they be discussing?</p>
            </div>
        `,
        taskInstructions: "Convert sentences from past continuous to future continuous across ten examples.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Past to Future Transformation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Change each past continuous sentence to future continuous:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) I was walking to school. → _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">b) She was singing a beautiful song. → _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">c) They were playing in the garden. → _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">d) He was studying for his exam. → _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">e) We were watching a movie. → _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">f) The dog was barking loudly. → _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">g) My mother was cooking dinner. → _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">h) The children were laughing at the joke. → _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">i) I was waiting for the bus. → _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">j) They were building a sandcastle. → _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write two past continuous sentences, then rewrite them in future continuous:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify the Tense</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read each sentence and write whether it is Past Continuous (PC) or Future Continuous (FC):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Tomorrow at this time, I will be flying to London. → _________</div>
                        <div style="margin-top: 5px;">b) She was crying when I saw her. → _________</div>
                        <div style="margin-top: 5px;">c) We will be celebrating your birthday next week. → _________</div>
                        <div style="margin-top: 5px;">d) The phone was ringing while I was cooking. → _________</div>
                        <div style="margin-top: 5px;">e) At 8 PM tonight, I will be doing my homework. → _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences about what you will be doing tomorrow at different times (e.g., At 8 AM, I will be eating breakfast).",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Constructing Continuous Sentences",
        lessonContent: `
            <p>Today we'll practice using all three continuous tenses to describe a busy market scene!</p>
            <p><strong>Key Question:</strong> How can we use present, past, and future continuous to describe the same setting?</p>
            <p><strong>Review of All Three Continuous Tenses:</strong></p>
            <ul>
                <li><strong>Present Continuous:</strong> Happening RIGHT NOW</li>
                <li><strong>Past Continuous:</strong> Was happening at a specific time in the PAST</li>
                <li><strong>Future Continuous:</strong> Will be happening at a specific time in the FUTURE</li>
            </ul>
            <p><strong>Structure Reminder:</strong></p>
            <ul>
                <li>Present: am/is/are + verb-ing</li>
                <li>Past: was/were + verb-ing</li>
                <li>Future: will be + verb-ing</li>
            </ul>
            <p><strong>Describing a Market Scene:</strong></p>
            <p>When writing about a busy market, you might describe:</p>
            <ul>
                <li>What people ARE DOING right now (present continuous)</li>
                <li>What people WERE DOING when you arrived (past continuous)</li>
                <li>What people WILL BE DOING later (future continuous)</li>
            </ul>
            <p><strong>Tips for Writing:</strong></p>
            <ul>
                <li>Use time signals to show which tense you're using</li>
                <li>Vary your sentence structure to keep writing interesting</li>
                <li>Paint a picture with your words</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Market Example</div>
                <p><strong>Present Continuous:</strong> "The vendor is shouting about his fresh vegetables."<br>
                <strong>Past Continuous:</strong> "When I arrived, a woman was bargaining for mangoes."<br>
                <strong>Future Continuous:</strong> "Tomorrow at this time, the market will be bustling with even more customers."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> Vivid Verbs</div>
                <p>Instead of "is going," try: is rushing, is strolling, is weaving<br>
                Instead of "was saying," try: was shouting, was whispering, was announcing<br>
                Instead of "will be doing," try: will be preparing, will be arranging, will be selling</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Tense Timeline</div>
                <p>Past ←---- Present ----→ Future<br>
                "I was buying" ... "I am buying" ... "I will be buying"</p>
            </div>
        `,
        taskInstructions: "Write a short paragraph about a busy market using all three continuous tenses.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Market Description Paragraph</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write a paragraph (8-10 sentences) describing a busy market. You MUST use:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <ul>
                            <li>At least 2 sentences in Present Continuous (happening now)</li>
                            <li>At least 2 sentences in Past Continuous (was happening)</li>
                            <li>At least 2 sentences in Future Continuous (will be happening)</li>
                        </ul>
                    </div>
                    <div class="writing-area" style="height: 300px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p style="color: #999;">[Write your market paragraph here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Underline and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Go back to your paragraph. Underline each continuous verb and label it:
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <div>- (Pres) for Present Continuous</div>
                        <div>- (Past) for Past Continuous</div>
                        <div>- (Fut) for Future Continuous</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Peer Review</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read your partner's paragraph. Identify one sentence they wrote that you like and explain why:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Tense Transformation Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Take one sentence from your paragraph and rewrite it in the other two continuous tenses:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Original sentence (write which tense): _________________________________</div>
                        <div style="margin-top: 5px;">Present Continuous version: _________________________________</div>
                        <div style="margin-top: 5px;">Past Continuous version: _________________________________</div>
                        <div style="margin-top: 5px;">Future Continuous version: _________________________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences about a family event (celebration, dinner, or outing) using all three continuous tenses.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Review of Continuous Forms",
        lessonContent: `
            <p>Today we'll review everything we've learned about present, past, and future continuous tenses!</p>
            <p><strong>Key Question:</strong> How can you tell the difference between present, past, and future continuous?</p>
            <p><strong>Quick Reference Chart:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Tense</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Helper Verb</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Example</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Time Signal</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Present Continuous</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">am/is/are</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">I am reading</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">now, right now, at the moment</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Past Continuous</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">was/were</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">I was reading</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">yesterday, last night, when</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Future Continuous</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">will be</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">I will be reading</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">tomorrow, next week, at 8 AM</td>
                </tr>
            </table>
            <p><strong>How to Tell Them Apart:</strong></p>
            <ul>
                <li>Look at the HELPING VERB (am/is/are/was/were/will be)</li>
                <li>Look at the TIME SIGNALS (now/yesterday/tomorrow)</li>
                <li>Think about WHEN the action is happening</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spinner"></i> Time Spinner Examples</div>
                <p><strong>Present Continuous spin:</strong> "Right now, I am learning about continuous tenses."</p>
                <p><strong>Past Continuous spin:</strong> "Yesterday at 3 PM, I was playing football."</p>
                <p><strong>Future Continuous spin:</strong> "Tomorrow morning, I will be helping my mother cook."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Common Mistakes</div>
                <p><strong>Wrong:</strong> "I will be going to school yesterday."<br>
                <strong>Right:</strong> "I will be going to school tomorrow."</p>
                <p><strong>Wrong:</strong> "She is sleeping when I called."<br>
                <strong>Right:</strong> "She was sleeping when I called."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Quick Check</div>
                <p>Ask yourself: <strong>When?</strong><br>
                Now → Present Continuous (am/is/are + -ing)<br>
                Past → Past Continuous (was/were + -ing)<br>
                Future → Future Continuous (will be + -ing)</p>
            </div>
        `,
        taskInstructions: "Play the 'Time Spinner' game and complete review activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Time Spinner Game</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Spin the "Time Spinner" (or have your teacher call out a tense). Create a sentence using that tense.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center; margin: 15px 0;">
                            <div style="background-color: #4CAF50; color: white; padding: 15px; border-radius: 10px;">
                                <strong>PRESENT</strong><br>
                                (am/is/are + -ing)
                            </div>
                            <div style="background-color: #FF9800; color: white; padding: 15px; border-radius: 10px;">
                                <strong>PAST</strong><br>
                                (was/were + -ing)
                            </div>
                            <div style="background-color: #2196F3; color: white; padding: 15px; border-radius: 10px;">
                                <strong>FUTURE</strong><br>
                                (will be + -ing)
                            </div>
                        </div>
                    </div>
                    <div class="game-area" style="margin-top: 10px;">
                        <p><strong>Your sentences (write at least 3 for each tense):</strong></p>
                        <div class="answer-space" style="height: 200px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify the Tense</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each sentence and write the correct tense (Present Continuous, Past Continuous, or Future Continuous):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Right now, the children are playing outside. → ________________________</div>
                        <div style="margin-top: 5px;">b) At this time next week, we will be lying on the beach. → ________________________</div>
                        <div style="margin-top: 5px;">c) She was cooking dinner when the phone rang. → ________________________</div>
                        <div style="margin-top: 5px;">d) I am writing a letter to my grandmother. → ________________________</div>
                        <div style="margin-top: 5px;">e) Tomorrow at 7 AM, I will be catching the bus. → ________________________</div>
                        <div style="margin-top: 5px;">f) They were arguing about the game last night. → ________________________</div>
                        <div style="margin-top: 5px;">g) We are learning about grammar this week. → ________________________</div>
                        <div style="margin-top: 5px;">h) At 6 PM yesterday, he was exercising at the gym. → ________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each sentence with the correct continuous tense form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Right now, my dog ______________ (sleep) on the couch.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">b) Yesterday at lunchtime, I ______________ (eat) with my friends.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">c) This time tomorrow, we ______________ (celebrate) the holiday.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">d) When the teacher arrived, the students ______________ (talk) loudly.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">e) Please be quiet! The baby ______________ (take) a nap.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own "Time Spinner" Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one sentence for each tense about what YOU are/were/will be doing:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Present Continuous (right now): _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">Past Continuous (yesterday at this time): _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">Future Continuous (tomorrow at this time): _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a 'Tense Detective' worksheet for a family member. Write 8 sentences mixing present, past, and future continuous. Have them identify each tense and check their answers.",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5EnglishWeek3);
    console.log("grade5-english-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5EnglishWeek3);
    console.log("grade5-english-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5EnglishWeek3',
        metadata: grade5EnglishWeek3.metadata,
        days: grade5EnglishWeek3
    });
    console.log("grade5-english-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5EnglishWeek3 = grade5EnglishWeek3;
console.log("grade5-english-week3.js loaded and registered successfully");