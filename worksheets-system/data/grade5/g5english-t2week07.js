// Grade 5 English - Term 2 Week 7 Data
const grade5EnglishWeek7 = {
    metadata: {
        grade: 5,
        subject: "English",
        term: 2,
        week: 7,
        title: "Verbs (Regular and Irregular)",
        description: "Understanding and mastering regular and irregular verbs in past tense"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Introduction to Regular Verbs",
        lessonContent: `
            <p>Welcome to our lesson on verbs! Today we'll learn about regular verbs and how they change to show past tense.</p>
            <p><strong>Key Question:</strong> How do regular verbs change when we talk about the past?</p>
            <p><strong>Introduction:</strong> Verbs are action words. They tell us what someone or something is doing. When we talk about things that already happened, we need to change the verb to past tense.</p>
            <p><strong>Regular Verbs Rule:</strong></p>
            <ul>
                <li>Regular verbs add <strong>"-ed"</strong> to the end to form the past tense</li>
                <li>Examples: walk → walked, play → played, jump → jumped</li>
                <li>If the verb already ends in "e", just add <strong>"-d"</strong> (like → liked)</li>
                <li>If the verb ends in "y", change the "y" to "i" and add <strong>"-ed"</strong> (cry → cried)</li>
            </ul>
            <p><strong>Why This Matters:</strong> Using correct verb tenses helps people understand when things happened in your stories and conversations!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Past Tense Time</div>
                <p>Yesterday, I <strong>walked</strong> to school. Last week, we <strong>played</strong> soccer. Previously, she <strong>helped</strong> her mom cook dinner.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spell-check"></i> Spelling Rules</div>
                <p>For verbs ending in "y" like "carry" → "carried" (change y to i, add ed). For short verbs like "stop" → "stopped" (double the last letter, add ed).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list"></i> Common Regular Verbs</div>
                <p>talk, ask, answer, clean, cook, help, jump, listen, look, love, move, need, open, play, push, rain, show, start, study, talk, visit, wait, walk, want, watch, work</p>
            </div>
        `,
        taskInstructions: "Create a list of 10 regular verbs and their past forms, then use them in sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Regular Verb List</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a list of 10 regular verbs and write their past tense forms:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Present Tense</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Past Tense (+ed)</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">1. ________</td><td style="padding: 8px; border: 1px solid #ddd;">________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">2. ________</td><td style="padding: 8px; border: 1px solid #ddd;">________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">3. ________</td><td style="padding: 8px; border: 1px solid #ddd;">________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">4. ________</td><td style="padding: 8px; border: 1px solid #ddd;">________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">5. ________</td><td style="padding: 8px; border: 1px solid #ddd;">________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">6. ________</td><td style="padding: 8px; border: 1px solid #ddd;">________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">7. ________</td><td style="padding: 8px; border: 1px solid #ddd;">________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">8. ________</td><td style="padding: 8px; border: 1px solid #ddd;">________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">9. ________</td><td style="padding: 8px; border: 1px solid #ddd;">________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">10. ________</td><td style="padding: 8px; border: 1px solid #ddd;">________</td></tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sentence Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose 5 regular verbs from your list and write one sentence for each using the past tense:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each sentence with the correct past tense regular verb:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Yesterday, I ________ (walk) to the park.</div>
                        <div>b) She ________ (clean) her room last night.</div>
                        <div>c) They ________ (play) basketball after school.</div>
                        <div>d) He ________ (watch) a movie on Sunday.</div>
                        <div>e) We ________ (cook) dinner together.</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 regular verbs in a book you are reading. Write down the present tense and past tense form of each.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Mastering Irregular Verbs",
        lessonContent: `
            <p>Today we'll learn about irregular verbs - they don't follow the simple "-ed" rule!</p>
            <p><strong>Key Question:</strong> Why can't we just add "-ed" to every verb to make it past tense?</p>
            <p><strong>Introduction:</strong> Irregular verbs are special because they change in different ways when we talk about the past. You need to memorize them!</p>
            <p><strong>Common Irregular Verbs:</strong></p>
            <ul>
                <li>go → went</li>
                <li>eat → ate</li>
                <li>see → saw</li>
                <li>do → did</li>
                <li>have → had</li>
                <li>make → made</li>
                <li>take → took</li>
                <li>buy → bought</li>
                <li>fly → flew</li>
                <li>sing → sang</li>
                <li>drink → drank</li>
                <li>run → ran</li>
                <li>swim → swam</li>
                <li>write → wrote</li>
                <li>read → read (sounds the same but spelled the same!)</li>
            </ul>
            <p><strong>Why This Matters:</strong> Irregular verbs are very common in English. Using them correctly makes you sound like a native speaker!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> No "-ed" Here!</div>
                <p>We don't say "goed" or "eated" - that would sound strange! Instead, we say "went" and "ate".</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Memory Tricks</div>
                <p>Think of "sing-sang-sung" as a song! Grouping irregular verbs that rhyme can help you remember them: ring-rang-rung, drink-drank-drunk.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Same Spelling</div>
                <p>Some irregular verbs don't change spelling at all! Put → put, cut → cut, hit → hit. The context tells you if it's past or present.</p>
            </div>
        `,
        taskInstructions: "Match present and past irregular verb forms in a relay race style activity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Verb Relay Race (Partner Activity)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each present tense verb with its correct past tense form:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <strong>Present Tense</strong>
                            <div>• go ______</div>
                            <div>• eat ______</div>
                            <div>• see ______</div>
                            <div>• do ______</div>
                            <div>• have ______</div>
                            <div>• make ______</div>
                            <div>• take ______</div>
                            <div>• buy ______</div>
                            <div>• fly ______</div>
                            <div>• sing ______</div>
                            <div>• drink ______</div>
                            <div>• run ______</div>
                        </div>
                        <div>
                            <strong>Past Tense (Choose from below)</strong>
                            <div>• went</div>
                            <div>• ate</div>
                            <div>• saw</div>
                            <div>• did</div>
                            <div>• had</div>
                            <div>• made</div>
                            <div>• took</div>
                            <div>• bought</div>
                            <div>• flew</div>
                            <div>• sang</div>
                            <div>• drank</div>
                            <div>• ran</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blanks with Irregular Verbs</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with the correct past tense irregular verb:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Last summer, we ________ (go) to the beach.</div>
                        <div>b) She ________ (eat) an apple for a snack.</div>
                        <div>c) I ________ (see) a rainbow after the storm.</div>
                        <div>d) He ________ (do) his homework before dinner.</div>
                        <div>e) They ________ (have) a great time at the party.</div>
                        <div>f) Mom ________ (make) a delicious cake.</div>
                        <div>g) We ________ (take) many photos on vacation.</div>
                        <div>h) Dad ________ (buy) a new car.</div>
                        <div>i) The bird ________ (fly) away.</div>
                        <div>j) She ________ (sing) beautifully at the concert.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write 5 original sentences using 5 different irregular verbs in past tense:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Create flashcards for 10 irregular verbs (present on one side, past on the other). Practice with a family member.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Mixed Verb Sentence Construction",
        lessonContent: `
            <p>Today we'll put everything together! We'll use both regular and irregular verbs in the same story.</p>
            <p><strong>Key Question:</strong> How can we use both regular and irregular verbs correctly when writing about the past?</p>
            <p><strong>Review:</strong></p>
            <ul>
                <li><strong>Regular Verbs:</strong> Add "-ed" to show past tense (walked, jumped, played)</li>
                <li><strong>Irregular Verbs:</strong> Change in special ways (went, ate, saw, did)</li>
            </ul>
            <p><strong>Tips for Using Both:</strong></p>
            <ul>
                <li>Most verbs in English are regular - but the most common ones are irregular!</li>
                <li>When writing a story, pay attention to each verb and decide if it needs "-ed" or a special change</li>
                <li>Read your sentences aloud - if it sounds wrong, it probably is!</li>
            </ul>
            <p><strong>Why This Matters:</strong> Good writers use a mix of regular and irregular verbs naturally. This makes your stories more interesting and accurate!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> Mixed Verb Story Example</div>
                <p>"Last weekend, I <strong>walked</strong> to the park (regular). I <strong>saw</strong> my friend there (irregular). We <strong>played</strong> soccer (regular) and then <strong>ate</strong> lunch together (irregular). I <strong>had</strong> a great time (irregular)!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-double"></i> Checking Your Work</div>
                <p>Ask yourself: Does "goed" sound right? No! It's "went". Does "play-ed" sound right? Yes! It's "played". Your ears can help you find mistakes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Verb Frequency</div>
                <p>The 10 most common English verbs are ALL irregular: be, have, do, say, get, make, go, know, take, see. That's why they're so important!</p>
            </div>
        `,
        taskInstructions: "Write a story about 'My Weekend' using at least five regular verbs and five irregular verbs in past tense.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Story Writing - "My Weekend"</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write a story about your weekend. Include at least 5 regular verbs AND 5 irregular verbs in past tense:
                    <div class="story-area" style="height: 300px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p style="color: #999; text-align: center;">Write your story here...</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Verb Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List the verbs you used in your story:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <strong>Regular Verbs (5+ needed):</strong>
                            <div class="answer-space" style="height: 120px;"></div>
                        </div>
                        <div>
                            <strong>Irregular Verbs (5+ needed):</strong>
                            <div class="answer-space" style="height: 120px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify the Verb Types</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read the sentences below. Write "R" for regular or "I" for irregular next to each past tense verb:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Yesterday, I <u>walked</u> to school. ___</div>
                        <div>b) She <u>ate</u> breakfast early. ___</div>
                        <div>c) They <u>played</u> outside until dark. ___</div>
                        <div>d) He <u>went</u> to the library. ___</div>
                        <div>e) We <u>watched</u> a movie. ___</div>
                        <div>f) Mom <u>made</u> cookies. ___</div>
                        <div>g) I <u>helped</u> my little brother. ___</div>
                        <div>h) She <u>took</u> the dog for a walk. ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which is easier for you - regular verbs or irregular verbs? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Write a short paragraph about what you did yesterday. Use at least 3 regular verbs and 3 irregular verbs. Underline the verbs and label them R or I.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5EnglishWeek7);
    console.log("grade5-english-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5EnglishWeek7);
    console.log("grade5-english-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5EnglishWeek7',
        metadata: grade5EnglishWeek7.metadata,
        days: grade5EnglishWeek7
    });
    console.log("grade5-english-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5EnglishWeek7 = grade5EnglishWeek7;
console.log("grade5-english-week7.js loaded and registered successfully");