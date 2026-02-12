// Grade 6 English - Week 2 Data (Mastering the Perfect Tense)
const grade6EnglishWeek2 = {
    metadata: {
        grade: 6,
        subject: "English",
        week: 2,
        title: "Mastering the Perfect Tense",
        description: "Identifying the structure of the present perfect tense, using auxiliary verbs correctly, and forming past participles for regular and irregular verbs."
    },

    monday: {
        subject: "English",
        topic: "Introduction to the Present Perfect Tense",
        subtopic: "Identifying the structure: has/have + past participle",
        lessonContent: `
            <p>Welcome to our English lesson! Today we begin mastering the present perfect tense.</p>
            <p><strong>Objective:</strong> Students will identify the structure of the present perfect tense (has/have + past participle).</p>
            <p><strong>Key Concept:</strong> The present perfect tense connects the past to the present. We use it to talk about completed actions at an unspecified time or actions that started in the past and continue now.</p>
            <p><strong>The Formula:</strong></p>
            <div style="background-color: #E3F2FD; padding: 15px; border-radius: 8px; text-align: center; font-size: 20px; font-weight: bold;">
                Subject + Has/Have + Past Participle
            </div>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>"The dog <span style="background-color: yellow;">has eaten</span> all the food."</li>
                <li>"I <span style="background-color: yellow;">have finished</span> my homework."</li>
                <li>"She <span style="background-color: yellow;">has visited</span> London."</li>
            </ul>
            <p><strong>Why This Matters:</strong> The perfect tense helps us describe experiences, changes, and achievements without needing to state the exact time!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search" style="color: #4CAF50;"></i> Sentence Breakdown</div>
                <p><strong>"Maria has lost her keys."</strong></p>
                <p>🔍 <strong>Auxiliary Verb:</strong> has</p>
                <p>🔍 <strong>Main Verb (Past Participle):</strong> lost</p>
                <p>🔍 <strong>Subject:</strong> Maria (She)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> More Examples</div>
                <ul>
                    <li>They <strong>have moved</strong> to a new house.</li>
                    <li>The cat <strong>has drunk</strong> all the milk.</li>
                    <li>We <strong>have seen</strong> that movie before.</li>
                </ul>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Spot the Tense Game!</div>
                <p>We'll play "Tense Detective" - I'll show you sentences, and you'll race to circle the auxiliary verb and underline the past participle!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice identifying the present perfect tense.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> <strong>Identify the Parts:</strong> For each sentence, circle the auxiliary verb (has/have) and underline the main verb (past participle).
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) The children have finished their art project. </div>
                    <div>b) My brother has broken his bicycle. </div>
                    <div>c) We have visited that museum twice. </div>
                    <div>d) The rain has stopped at last. </div>
                    <div>e) I have written a letter to my cousin. </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> <strong>Fill the Blanks:</strong> Complete the sentences with the correct structure.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) She __________ (finish) her breakfast. <span class="answer-space" style="width: 200px;"></span></div>
                    <div>b) They __________ (buy) a new car. <span class="answer-space" style="width: 200px;"></span></div>
                    <div>c) He __________ (take) the dog for a walk. <span class="answer-space" style="width: 200px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> <strong>Sentence Creation:</strong> Write one sentence using 'has' and one using 'have' about things you have done today.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Has: <span class="answer-space" style="width: 350px;"></span></div>
                    <div>Have: <span class="answer-space" style="width: 350px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> <strong>Standard Check:</strong> Did you correctly identify the "has/have" pattern in at least five sentences? 
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Yes, I identified 5 or more sentences correctly.</div>
                </div>
            </div>
        `,
        homework: "Find 3 present perfect sentences in a book, magazine, or website. Write them down and circle the auxiliary verb and underline the past participle.",
        homeworkDue: "Tuesday"
    },

    tuesday: {
        subject: "English",
        topic: "Choosing Between 'Has' and 'Have'",
        subtopic: "Subject-verb agreement in the perfect tense",
        lessonContent: `
            <p>Today we will learn how to choose the correct auxiliary verb based on the subject of the sentence.</p>
            <p><strong>Objective:</strong> Students will correctly use 'has' and 'have' based on the subject.</p>
            <p><strong>Key Concept:</strong> The auxiliary verb must always agree with the subject.</p>
            <p><strong>The Rule:</strong></p>
            <ul>
                <li><strong>Has:</strong> Use with singular subjects (He, She, It, John, the cat).</li>
                <li><strong>Have:</strong> Use with plural subjects (They, We, the dogs) and <em>I</em>.</li>
            </ul>
            <div style="background-color: #FFECB3; padding: 10px; border-radius: 5px; margin-top: 10px;">
                <strong>✅ Correct:</strong> "Mary <u>has</u> eaten rice."<br>
                <strong>✅ Correct:</strong> "They <u>have</u> killed a rat."<br>
                <strong>❌ Incorrect:</strong> "Mary <strike>have</strike> eaten rice."
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale" style="color: #FF9800;"></i> Subject-Verb Agreement</div>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background-color: #f5f5f5;">
                        <th style="padding: 8px; border: 1px solid #ddd;">Subject</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Auxiliary Verb</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Example</th>
                    </tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">He / She / It</td><td style="padding: 8px; border: 1px solid #ddd;">Has</td><td style="padding: 8px; border: 1px solid #ddd;">She has arrived.</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">John (singular)</td><td style="padding: 8px; border: 1px solid #ddd;">Has</td><td style="padding: 8px; border: 1px solid #ddd;">John has called.</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">The rat (singular)</td><td style="padding: 8px; border: 1px solid #ddd;">Has</td><td style="padding: 8px; border: 1px solid #ddd;">The rat has escaped.</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">I</td><td style="padding: 8px; border: 1px solid #ddd;">Have</td><td style="padding: 8px; border: 1px solid #ddd;">I have finished.</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">You / We / They</td><td style="padding: 8px; border: 1px solid #ddd;">Have</td><td style="padding: 8px; border: 1px solid #ddd;">They have left.</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">The rats (plural)</td><td style="padding: 8px; border: 1px solid #ddd;">Have</td><td style="padding: 8px; border: 1px solid #ddd;">The rats have eaten.</td></tr>
                </table>
            </div>
        `,
        taskInstructions: "Practice choosing the correct auxiliary verb for each subject.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> <strong>Pair the Subject:</strong> Write 'has' or 'have' next to each subject.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) John _________ &nbsp;&nbsp;&nbsp; b) They _________ &nbsp;&nbsp;&nbsp; c) Mary _________</div>
                    <div>d) The rats _________ &nbsp;&nbsp;&nbsp; e) I _________ &nbsp;&nbsp;&nbsp; f) The dog _________</div>
                    <div>g) We _________ &nbsp;&nbsp;&nbsp; h) My sister _________ &nbsp;&nbsp;&nbsp; i) The children _________</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> <strong>Correct the Sentence:</strong> Some of these sentences are wrong. Fix the auxiliary verb.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) The cat have slept all day. → <span class="answer-space" style="width: 250px;"></span></div>
                    <div>b) I has lost my pencil. → <span class="answer-space" style="width: 250px;"></span></div>
                    <div>c) They has gone to the park. → <span class="answer-space" style="width: 250px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> <strong>Sentence Writing:</strong> Write sentences using the following subjects and the present perfect tense.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) (The teacher) → <span class="answer-space" style="width: 300px;"></span></div>
                    <div>b) (My friends) → <span class="answer-space" style="width: 300px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> <strong>Self-Assessment:</strong> I can correctly match subjects with has/have.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ I answered 8 or more questions correctly (80% accuracy).</div>
                </div>
            </div>
        `,
        homework: "Write 5 original sentences using 'has' and 5 using 'have'. Underline the subject and circle the auxiliary verb.",
        homeworkDue: "Wednesday"
    },

    wednesday: {
        subject: "English",
        topic: "Past Participle Practice",
        subtopic: "Forming past participles of regular and common irregular verbs",
        lessonContent: `
            <p>Today we will become experts at forming past participles!</p>
            <p><strong>Objective:</strong> Students will learn to form the past participle of regular and common irregular verbs.</p>
            <p><strong>Key Concept:</strong> In the perfect tense, we always use the past participle form of the verb.</p>
            <p><strong>Regular Verbs:</strong> Add -ed (walk → walked, play → played).</p>
            <p><strong>Irregular Verbs:</strong> These change form and must be memorized!</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                <div style="background-color: #E8EAF6; padding: 10px; border-radius: 5px;">
                    <strong>Base → Past Participle</strong><br>
                    eat → eaten<br>
                    see → seen<br>
                    go → gone<br>
                    write → written
                </div>
                <div style="background-color: #E8EAF6; padding: 10px; border-radius: 5px;">
                    <strong>Base → Past Participle</strong><br>
                    break → broken<br>
                    speak → spoken<br>
                    drive → driven<br>
                    take → taken
                </div>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Verb Transformation Game</div>
                <p><strong>Challenge:</strong> Turn the base verb into the past participle!</p>
                <ul>
                    <li>"Kill" → Killed (Regular)</li>
                    <li>"Eat" → Eaten (Irregular)</li>
                    <li>"See" → Seen (Irregular)</li>
                    <li>"Clean" → Cleaned (Regular)</li>
                </ul>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Memory Trick</div>
                <p>Think of the past participle as the verb that usually comes after "has" or "have."</p>
                <p>✅ I have <strong>written</strong> a story.</p>
                <p>❌ I have <strike>wrote</strike> a story.</p>
            </div>
        `,
        taskInstructions: "Practice transforming verbs and writing sentences with past participles.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> <strong>Verb Transformation:</strong> Write the past participle of these verbs.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) kill → _________ &nbsp;&nbsp;&nbsp; b) eat → _________ &nbsp;&nbsp;&nbsp; c) see → _________</div>
                    <div>d) take → _________ &nbsp;&nbsp;&nbsp; e) speak → _________ &nbsp;&nbsp;&nbsp; f) break → _________</div>
                    <div>g) clean → _________ &nbsp;&nbsp;&nbsp; h) fly → _________ &nbsp;&nbsp;&nbsp; i) swim → _________</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> <strong>Choose the Correct Form:</strong> Circle the correct word.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) I have (wrote / written) a poem.</div>
                    <div>b) She has (drank / drunk) all the juice.</div>
                    <div>c) They have (ran / run) three kilometers.</div>
                    <div>d) He has (broke / broken) his watch.</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> <strong>Sentence Writing:</strong> Write three sentences using the present perfect tense with these past participles.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. (eaten): <span class="answer-space" style="width: 350px;"></span></div>
                    <div>2. (seen): <span class="answer-space" style="width: 350px;"></span></div>
                    <div>3. (taken): <span class="answer-space" style="width: 350px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> <strong>Standard Check:</strong> Did you correctly use past participles in three written sentences?
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Yes, all three sentences use the correct past participle form.</div>
                </div>
            </div>
        `,
        homework: "Create a 'Verb Flashcard' for 5 irregular verbs. On one side write the base verb, on the other side write the past participle. Test yourself!",
        homeworkDue: "Thursday"
    },

    thursday: {
        subject: "English",
        topic: "Reading and Identifying Tenses",
        subtopic: "Finding the perfect tense within a short story context",
        lessonContent: `
            <p>Today we will become reading detectives, spotting the present perfect tense in action!</p>
            <p><strong>Objective:</strong> Students will identify the perfect tense within a short story context.</p>
            <p><strong>Key Concept:</strong> Authors use the present perfect tense to show that past events are connected to the present moment.</p>
            <p><strong>Why use present perfect in stories?</strong></p>
            <ul>
                <li>To share recent news: "The prince has arrived!"</li>
                <li>To talk about life experiences: "He has never seen a dragon."</li>
                <li>To show a change over time: "The weather has improved."</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-open" style="color: #9C27B0;"></i> Short Story Excerpt</div>
                <div style="background-color: #F3E5F5; padding: 15px; border-radius: 8px;">
                    <p>Lily <u>has always loved</u> animals. This morning, she <u>has fed</u> the cat and <u>has filled</u> the bird feeder. Her brother, Tom, <u>has not helped</u> yet. "I <u>have finished</u> my homework," Tom said. "Now I can help."</p>
                </div>
                <p style="margin-top: 10px;"><strong>Detective Work:</strong> Can you find all 4 perfect tense verbs?</p>
            </div>
        `,
        taskInstructions: "Read the passage carefully and identify every instance of the present perfect tense.",
        taskContent: `
            <div class="content-box">
                <p><strong>Reading Passage: The Lost Kite</strong></p>
                <div style="background-color: #FFF9C4; padding: 15px; border-radius: 8px; font-style: italic;">
                    Sam has searched everywhere for his blue kite. He has looked under his bed and inside the closet. His sister Mia has asked their neighbors, but no one has seen it. "I have flown it every weekend," Sam said sadly. "I have never lost it before." Just then, Dad called from the backyard. "I have found something!" Sam ran outside. His kite has tangled itself in the old oak tree. "Don't worry," said Dad. "I have already climbed that tree before. I can get it down."
                </div>
            </div>
            
            <div class="task-item">
                <span class="task-number">1</span> <strong>Hunt the Tense:</strong> Underline all the present perfect sentences in the passage above. How many did you find?
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>I found _________ examples of the present perfect tense.</div>
                </div>
            </div>
            
            <div class="task-item">
                <span class="task-number">2</span> <strong>List Them:</strong> Write the perfect tense phrases you found.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. <span class="answer-space" style="width: 300px;"></span></div>
                    <div>2. <span class="answer-space" style="width: 300px;"></span></div>
                    <div>3. <span class="answer-space" style="width: 300px;"></span></div>
                    <div>4. <span class="answer-space" style="width: 300px;"></span></div>
                    <div>5. <span class="answer-space" style="width: 300px;"></span></div>
                    <div>6. <span class="answer-space" style="width: 300px;"></span></div>
                </div>
            </div>
            
            <div class="task-item">
                <span class="task-number">3</span> <strong>Author's Purpose:</strong> Why do you think the author used "has searched" instead of "searched"?
                <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
            </div>
            
            <div class="task-item">
                <span class="task-number">4</span> <strong>Standard Check:</strong> Did you find at least four examples of the perfect tense?
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Yes, I found 4 or more examples.</div>
                </div>
            </div>
        `,
        homework: "Write a short paragraph (4-5 sentences) about a lost item. Use the present perfect tense at least three times.",
        homeworkDue: "Friday"
    },

    friday: {
        subject: "English",
        topic: "Creative Writing with Perfect Tense",
        subtopic: "Writing independently using the present perfect",
        lessonContent: `
            <p>Congratulations! Today you will apply everything you have learned this week.</p>
            <p><strong>Objective:</strong> Students will write their own sentences using the perfect tense independently.</p>
            <p><strong>Key Concept:</strong> The present perfect is perfect for talking about chores, achievements, and recent events.</p>
            <p><strong>Writing Prompt Idea:</strong> Think about chores you have finished today or achievements you are proud of!</p>
            <ul>
                <li>I have cleaned my room.</li>
                <li>I have done my homework.</li>
                <li>I have helped my mom cook dinner.</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt" style="color: #E91E63;"></i> Student Model Paragraph</div>
                <div style="background-color: #FCE4EC; padding: 15px; border-radius: 8px;">
                    <p>Today has been a productive day! I <strong>have finished</strong> all my math problems, and I <strong>have organized</strong> my desk. My little sister <strong>has drawn</strong> me a beautiful picture. We <strong>have not watched</strong> TV yet, but we plan to watch a movie tonight. I am proud of what I have accomplished!</p>
                </div>
                <p><strong>Can you spot the 4 perfect tense verbs?</strong></p>
            </div>
        `,
        taskInstructions: "Write a paragraph about chores you have finished today or achievements from this week.",
        taskContent: `
            <div class="content-box">
                <p><strong>Your Turn: Independent Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> <strong>Brainstorm:</strong> List three things you have already done today or this week.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• I have <span class="answer-space" style="width: 300px;"></span></div>
                        <div>• I have <span class="answer-space" style="width: 300px;"></span></div>
                        <div>• I have <span class="answer-space" style="width: 300px;"></span></div>
                    </div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">2</span> <strong>Write Your Paragraph:</strong> Write a short paragraph (4-6 sentences) about chores you have finished or things you have achieved. Use at least THREE present perfect sentences.
                    <div class="answer-space" style="height: 150px; margin-top: 10px; width: 100%; border: 1px solid #ccc; padding: 10px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">3</span> <strong>Self-Edit:</strong> Review your paragraph.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ I used 'has' or 'have' correctly for each subject.</div>
                        <div>☐ I used the correct past participle form.</div>
                        <div>☐ I have at least three perfect tense sentences.</div>
                    </div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">4</span> <strong>Standard Check:</strong> Does your paragraph contain at least three correctly structured perfect tense sentences?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Yes, I have met the standard.</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Revise your paragraph based on teacher feedback. Share one of your perfect tense sentences with a family member and explain why you used that tense.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6EnglishWeek2);
    console.log("grade6-english-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6EnglishWeek2);
    console.log("grade6-english-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6EnglishWeek2',
        metadata: grade6EnglishWeek2.metadata,
        days: grade6EnglishWeek2
    });
    console.log("grade6-english-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6EnglishWeek2 = grade6EnglishWeek2;
console.log("grade6-english-week2.js loaded and registered successfully");