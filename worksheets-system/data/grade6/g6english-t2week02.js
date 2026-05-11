// Grade 6 English - Term 2 Week 2 Data
const grade6EnglishWeek2 = {
    metadata: {
        grade: 6,
        subject: "English",
        term: 2,
        week: 2,
        title: "Perfect Tense",
        description: "Identification and formation of perfect tense using 'has/have' + past participle"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Introduction to Perfect Tense",
        lessonContent: `
            <p>Welcome to our exploration of the Perfect Tense! Today we'll learn how to identify sentences using 'has' or 'have' with a past participle.</p>
            <p><strong>Key Question:</strong> How do we show that an action happened at an unspecified time before now?</p>
            <p><strong>Introduction:</strong> The perfect tense connects the past to the present. It tells us that something happened (or didn't happen) before now, but the exact time isn't important.</p>
            <p><strong>The Formula:</strong></p>
            <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <strong>has/have + past participle</strong>
            </div>
            <p><strong>When to use 'has' vs 'have':</strong></p>
            <ul>
                <li><strong>Has:</strong> He, She, It, or any singular noun (e.g., John, the dog, my friend)</li>
                <li><strong>Have:</strong> I, You, We, They, or any plural noun (e.g., the children, my parents, the students)</li>
            </ul>
            <p><strong>Examples of Perfect Tense:</strong></p>
            <ul>
                <li>She <strong>has finished</strong> her homework.</li>
                <li>They <strong>have visited</strong> the museum.</li>
                <li>I <strong>have eaten</strong> breakfast already.</li>
                <li>He <strong>has written</strong> three stories this week.</li>
            </ul>
            <p><strong>What is a Past Participle?</strong></p>
            <ul>
                <li>Regular verbs: add -ed (walk → walked, play → played, jump → jumped)</li>
                <li>Irregular verbs: special forms (eat → eaten, write → written, go → gone, see → seen)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Past to Present</div>
                <p>"I have lost my keys" means you lost them sometime before now, and you still don't have them at this moment. The exact time isn't stated!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Has vs. Have</div>
                <p>✓ She <strong>has</strong> called her mother.<br>
                ✓ They <strong>have</strong> called their mother.<br>
                ✗ She have called her mother. (This is incorrect!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list"></i> Common Past Participles</div>
                <p>Present → Past Participle:<br>
                do → done • see → seen • go → gone • eat → eaten • write → written • break → broken</p>
            </div>
        `,
        taskInstructions: "Identify 'has/have' + past participle in sample sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Spot the Perfect Tense</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Underline the perfect tense (has/have + past participle) in each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Maria has finished her science project.</div>
                        <div>b. The children have eaten all the cookies.</div>
                        <div>c. I have never seen such a beautiful sunset.</div>
                        <div>d. He has written a letter to his grandmother.</div>
                        <div>e. We have visited that zoo three times.</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Has or Have?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the blank with 'has' or 'have':
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. She _______ completed her drawing.</div>
                        <div>b. They _______ arrived at the airport.</div>
                        <div>c. I _______ finished my reading assignment.</div>
                        <div>d. The dog _______ buried its bone.</div>
                        <div>e. We _______ learned many new words.</div>
                        <div>f. He _______ broken his pencil.</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify the Past Participle</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the past participle in each perfect tense phrase:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. has spoken &nbsp;&nbsp;&nbsp; b. have driven &nbsp;&nbsp;&nbsp; c. has taken &nbsp;&nbsp;&nbsp; d. have sung</div>
                        <div>e. has forgotten &nbsp;&nbsp;&nbsp; f. have swum &nbsp;&nbsp;&nbsp; g. has drawn &nbsp;&nbsp;&nbsp; h. have worn</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 sentences in a book or magazine that use perfect tense (has/have + past participle). Write them in your notebook.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Converting Sentences into Perfect Tense",
        lessonContent: `
            <p>Today we'll practice converting simple present tense sentences into the perfect tense!</p>
            <p><strong>Key Question:</strong> How do we change a regular sentence into perfect tense?</p>
            <p><strong>Review:</strong></p>
            <ul>
                <li>Perfect tense = <strong>has/have + past participle</strong></li>
                <li>Simple present = action happening now or regularly</li>
                <li>Perfect tense = action completed before now</li>
            </ul>
            <p><strong>How to Convert Simple Present to Perfect Tense:</strong></p>
            <ol>
                <li>Identify the main verb in the sentence</li>
                <li>Change the main verb to its past participle form</li>
                <li>Add 'has' (for he/she/it) or 'have' (for I/you/we/they) before the past participle</li>
            </ol>
            <p><strong>Examples of Conversion:</strong></p>
            <div style="background-color: #f0f8f0; padding: 10px; border-radius: 8px; margin: 10px 0;">
                <p><strong>Simple Present:</strong> She <u>eats</u> an apple.<br>
                <strong>Perfect Tense:</strong> She <strong>has eaten</strong> an apple.</p>
                <p><strong>Simple Present:</strong> They <u>play</u> soccer.<br>
                <strong>Perfect Tense:</strong> They <strong>have played</strong> soccer.</p>
                <p><strong>Simple Present:</strong> I <u>write</u> a story.<br>
                <strong>Perfect Tense:</strong> I <strong>have written</strong> a story.</p>
            </div>
            <p><strong>Remember:</strong> The meaning changes! Simple present describes a habit or current action. Perfect tense describes a completed action with results that matter now.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Conversion Practice</div>
                <p>Simple Present: He reads the book.<br>
                Perfect Tense: He <strong>has read</strong> the book.</p>
                <p>Simple Present: We clean our room.<br>
                Perfect Tense: We <strong>have cleaned</strong> our room.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Meaning Change</div>
                <p>"I eat breakfast" (I do this regularly).<br>
                "I have eaten breakfast" (I already did it today, so I'm not hungry now).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Watch Out!</div>
                <p>Don't forget to change the verb to past participle!<br>
                ✗ She has eat the apple.<br>
                ✓ She has eaten the apple.</p>
            </div>
        `,
        taskInstructions: "In groups, convert simple present sentences into perfect tense.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Convert These Sentences (Group Work)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Change each simple present sentence to perfect tense:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. She bakes a cake. → _________________________________</div>
                        <div>b. They finish their homework. → _________________________________</div>
                        <div>c. I see a shooting star. → _________________________________</div>
                        <div>d. He takes the bus to school. → _________________________________</div>
                        <div>e. We buy new shoes. → _________________________________</div>
                        <div>f. The cat drinks its milk. → _________________________________</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Choose the Correct Conversion</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the correctly converted perfect tense sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Simple Present: He runs fast.<br>
                        &nbsp;&nbsp;&nbsp;A. He has ran fast. &nbsp;&nbsp;&nbsp;B. He has run fast. &nbsp;&nbsp;&nbsp;C. He have run fast.</div>
                        
                        <div style="margin-top: 15px;">b. Simple Present: They sing a song.<br>
                        &nbsp;&nbsp;&nbsp;A. They have singed a song. &nbsp;&nbsp;&nbsp;B. They has sung a song. &nbsp;&nbsp;&nbsp;C. They have sung a song.</div>
                        
                        <div style="margin-top: 15px;">c. Simple Present: I forget my lunch.<br>
                        &nbsp;&nbsp;&nbsp;A. I have forgotten my lunch. &nbsp;&nbsp;&nbsp;B. I has forgotten my lunch. &nbsp;&nbsp;&nbsp;C. I have forget my lunch.</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write 3 simple present sentences, then convert each to perfect tense:
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 simple present sentences about your daily routine. Rewrite each sentence in perfect tense.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Writing with Perfect Tense",
        lessonContent: `
            <p>Today we'll practice using perfect tense to write about things we have done!</p>
            <p><strong>Key Question:</strong> What have you done today, this week, or in your life?</p>
            <p><strong>Using Perfect Tense for Personal Experiences:</strong></p>
            <ul>
                <li>Use perfect tense when the exact time isn't important</li>
                <li>Use perfect tense to talk about experiences in your life (ever/never)</li>
                <li>Use perfect tense to talk about recent events that affect the present</li>
            </ul>
            <p><strong>Time Markers Often Used with Perfect Tense:</strong></p>
            <ul>
                <li>already, yet, just, ever, never</li>
                <li>this morning, today, this week</li>
                <li>since, for (with a period of time)</li>
            </ul>
            <p><strong>Examples of Perfect Tense about Personal Experiences:</strong></p>
            <div style="background-color: #f0f8f0; padding: 10px; border-radius: 8px; margin: 10px 0;">
                <p>✓ I <strong>have brushed</strong> my teeth this morning.<br>
                ✓ She <strong>has finished</strong> her assignment already.<br>
                ✓ We <strong>have eaten</strong> lunch.<br>
                ✓ He <strong>has never visited</strong> another country.<br>
                ✓ They <strong>have just arrived</strong> home.</p>
            </div>
            <p><strong>Writing Tips:</strong></p>
            <ol>
                <li>Start by thinking about what you have done (not what you usually do)</li>
                <li>Remember to use has/have + past participle</li>
                <li>Use time markers like 'already', 'this morning', or 'today'</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen"></i> Morning Examples</div>
                <p>"This morning I have woken up at 7 AM, have eaten my breakfast, and have packed my school bag."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe"></i> Life Experiences</div>
                <p>"I have visited the beach.<br>
                I have never ridden a horse.<br>
                She has learned to play the piano."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-week"></i> This Week</div>
                <p>"This week I have read two books. We have practiced soccer three times. My friend has called me every day."</p>
            </div>
        `,
        taskInstructions: "Compose five sentences about things you have done this morning.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: What Have You Done This Morning?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write 5 sentences using perfect tense about things you have done today:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. _________________________________________________</div>
                        <div>b. _________________________________________________</div>
                        <div>c. _________________________________________________</div>
                        <div>d. _________________________________________________</div>
                        <div>e. _________________________________________________</div>
                    </div>
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What Have You Done This Week?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write 3 sentences about things you have done this week:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Life Experiences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write 2 things you have done in your life and 1 thing you have never done:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• I have ___________________________________________</div>
                        <div>• I have ___________________________________________</div>
                        <div>• I have never ___________________________________________</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge - Write a Short Paragraph</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a short paragraph (4-5 sentences) describing everything you have done so far today:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences about things your family members have done today. Example: 'My father has gone to work.'",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Peer Correction of Perfect Tense",
        lessonContent: `
            <p>Today we'll work with a partner to check each other's use of perfect tense!</p>
            <p><strong>Key Question:</strong> How can we identify and fix mistakes in perfect tense?</p>
            <p><strong>Common Perfect Tense Errors to Look For:</strong></p>
            <ol>
                <li><strong>Wrong helping verb:</strong> Using 'has' with 'they' or 'have' with 'she'</li>
                <li><strong>Wrong verb form:</strong> Using simple past instead of past participle (eaten vs ate)</li>
                <li><strong>Missing past participle:</strong> Forgetting to change the verb form</li>
                <li><strong>Double helping verbs:</strong> Using 'has have' or 'have has'</li>
            </ol>
            <p><strong>Error Examples and Corrections:</strong></p>
            <div style="background-color: #fee; padding: 10px; border-radius: 8px; margin: 10px 0;">
                <p>✗ She <strong>have</strong> finished her work.<br>
                ✓ She <strong>has</strong> finished her work.</p>
                <p>✗ They has <strong>go</strong> to the park.<br>
                ✓ They have <strong>gone</strong> to the park.</p>
                <p>✗ I have <strong>eat</strong> breakfast.<br>
                ✓ I have <strong>eaten</strong> breakfast.</p>
            </div>
            <p><strong>How to Peer Correct:</strong></p>
            <ol>
                <li>Read your partner's sentences carefully</li>
                <li>Check each sentence for has/have + past participle</li>
                <li>Circle any errors you find</li>
                <li>Write the correct version next to the error</li>
                <li>Explain why it was wrong (if possible)</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Peer Correction Steps</div>
                <p>1. Exchange notebooks with your partner.<br>
                2. Read each sentence.<br>
                3. Mark errors with a colored pencil.<br>
                4. Write the correction.<br>
                5. Return and discuss!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Find the Error</div>
                <p>"He have went to the store."<br>
                Errors: 'have' should be 'has', 'went' should be 'gone'<br>
                Correct: "He has gone to the store."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Be Kind!</div>
                <p>When correcting a partner, be helpful, not hurtful. Say "I think this might be better as..." instead of "That's wrong!"</p>
            </div>
        `,
        taskInstructions: "With a partner, read and correct each other's perfect tense sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Partner Exchange</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Exchange your homework (or Part A from yesterday) with a partner. Read their 5 sentences about things they have done today:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• How many sentences are correct? ___ out of 5</div>
                        <div>• List any corrections you made:</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Error Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Each sentence below has ONE error. Find it and write the correct sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. She have visited her grandmother. → ______________________________</div>
                        <div>b. They has eaten dinner already. → ______________________________</div>
                        <div>c. I have saw that movie before. → ______________________________</div>
                        <div>d. He has drink all the water. → ______________________________</div>
                        <div>e. We have went to the zoo. → ______________________________</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Correct the Paragraph</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read the paragraph below. Find and fix all perfect tense errors:
                    <div style="background-color: #f5f5f5; padding: 10px; border-radius: 8px; margin: 10px 0;">
                        <p><em>"This morning, I have wake up at 6 AM. I have ate my breakfast quickly. My sister have brushed her teeth. We have went to school together. Our teacher has gave us a quiz. She have been very kind today."</em></p>
                    </div>
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is the most common perfect tense mistake you noticed today? How will you avoid it?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write 8 perfect tense sentences about your week. Tomorrow, you will exchange with a partner to check each other's work.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Perfect Tense Review Quiz",
        lessonContent: `
            <p>Today we'll review everything we've learned about the perfect tense and test our understanding!</p>
            <p><strong>Week 2 Review:</strong></p>
            <ol>
                <li><strong>Perfect Tense Formula:</strong> has/have + past participle</li>
                <li><strong>Has vs. Have:</strong> Has = he/she/it; Have = I/you/we/they</li>
                <li><strong>Past Participles:</strong> Regular (-ed) and irregular (special forms)</li>
                <li><strong>When to Use:</strong> Completed actions, experiences, recent events</li>
            </ol>
            <p><strong>Quick Reference Table:</strong></p>
            <div style="background-color: #e8f4f8; padding: 10px; border-radius: 8px; margin: 10px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background-color: #4A90E2; color: white;">
                        <th style="padding: 8px; border: 1px solid #ddd;">Subject</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Helping Verb</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Example</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">I/You/We/They</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">have</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">I have eaten.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">He/She/It</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">has</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">She has eaten.</td>
                    </tr>
                </table>
            </div>
            <p><strong>Remember the Most Common Irregular Past Participles:</strong></p>
            <ul>
                <li>be → been • go → gone • see → seen • eat → eaten</li>
                <li>write → written • break → broken • speak → spoken</li>
                <li>take → taken • drive → driven • swim → swum</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Quiz Tips</div>
                <p>Read each question carefully. Look for the subject to decide between 'has' and 'have'. Then check that the verb is in past participle form!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-memory"></i> Memory Trick</div>
                <p>Remember: "HAS for one person (He/She/It), HAVE for more than one or 'I' and 'You'."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tasks"></i> What to Expect</div>
                <p>The quiz will ask you to: choose has/have, select the correct past participle, convert sentences, and identify errors.</p>
            </div>
        `,
        taskInstructions: "Complete the review quiz by selecting the correct verb form for perfect tense completion.",
        taskContent: `
            <div class="content-box">
                <p><strong>Quiz Part A: Choose 'has' or 'have'</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the blank with 'has' or 'have':
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The teacher _______ explained the lesson.</div>
                        <div>b. My friends _______ arrived at the party.</div>
                        <div>c. I _______ finished my science project.</div>
                        <div>d. The dog _______ buried its toy.</div>
                        <div>e. We _______ studied for the test.</div>
                        <div>f. He _______ never flown in an airplane.</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Quiz Part B: Choose the Correct Past Participle</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the correct word to complete each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. She has (wrote / written) three letters.</div>
                        <div>b. They have (ate / eaten) all the pizza.</div>
                        <div>c. I have (saw / seen) that movie before.</div>
                        <div>d. He has (went / gone) to the library.</div>
                        <div>e. We have (took / taken) many photos.</div>
                        <div>f. The bird has (flown / flew) away.</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Quiz Part C: Convert to Perfect Tense</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Rewrite each sentence in perfect tense:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. She finishes her homework. → _________________________________</div>
                        <div>b. They eat lunch. → _________________________________</div>
                        <div>c. I see a rainbow. → _________________________________</div>
                        <div>d. He breaks his pencil. → _________________________________</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Quiz Part D: Find and Fix the Error</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Each sentence has one error. Write the correct sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. They has visited the museum. → ______________________________</div>
                        <div>b. She have went to the store. → ______________________________</div>
                        <div>c. I has seen that bird before. → ______________________________</div>
                        <div>d. We have eat breakfast already. → ______________________________</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Quiz Part E: Create Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write 3 original perfect tense sentences about things you have done this week:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What is one thing about perfect tense that you understand better now than at the beginning of the week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a 'Perfect Tense Poster' showing the formula has/have + past participle, with 5 example sentences and illustrations.",
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