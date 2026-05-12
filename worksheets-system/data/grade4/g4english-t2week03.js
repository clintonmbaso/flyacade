// Grade 4 English - Term 2 Week 3 Data
const grade4EnglishWeek3 = {
    metadata: {
        grade: 4,
        subject: "English",
        term: 2,
        week: 3,
        title: "Mastering Tense Changes",
        description: "Learning irregular past tense verbs, present continuous tense, and switching between present and past tense"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Irregular Past Tense Verbs",
        lessonContent: `
            <p>Welcome to our lesson on irregular past tense verbs! Today we'll learn that not all past tense verbs end with "-ed".</p>
            <p><strong>Key Question:</strong> Why do we say "went" instead of "goed"?</p>
            <p><strong>Introduction:</strong> Most verbs add "-ed" to show past tense (walk → walked, jump → jumped). However, some verbs are irregular - they change completely or not at all when we talk about the past!</p>
            <p><strong>Common Irregular Past Tense Verbs:</strong></p>
            <ol>
                <li><strong>go → went:</strong> "I go to school." → "Yesterday, I went to the park."</li>
                <li><strong>see → saw:</strong> "I see a bird." → "I saw a rainbow yesterday."</li>
                <li><strong>eat → ate:</strong> "I eat breakfast." → "I ate eggs this morning."</li>
                <li><strong>sleep → slept:</strong> "I sleep well." → "I slept for nine hours last night."</li>
                <li><strong>run → ran:</strong> "I run fast." → "He ran in the race."</li>
                <li><strong>drink → drank:</strong> "I drink water." → "She drank juice."</li>
                <li><strong>sing → sang:</strong> "I sing loudly." → "They sang at the concert."</li>
                <li><strong>write → wrote:</strong> "I write stories." → "She wrote a letter."</li>
            </ol>
            <p><strong>Special Rules for Irregular Verbs:</strong></p>
            <ul>
                <li>Some verbs don't change at all: cut → cut, put → put, hit → hit</li>
                <li>Some verbs change completely: go → went, is → was, are → were</li>
                <li>We just need to memorize them through practice!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-memory"></i> Memory Trick</div>
                <p>Think of "go" and "went" as two different words that mean the same thing - one for now, one for yesterday!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bed"></i> Sleep to Slept</div>
                <p>"Last night, I slept like a log!" (Not "sleeped" - that would sound funny!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Eat to Ate</div>
                <p>"I ate pizza for dinner yesterday." Notice how "ate" is shorter than "eated" - irregular verbs often save us syllables!</p>
            </div>
        `,
        taskInstructions: "Practice matching present tense verbs to their irregular past tense forms through a memory game and fill-in-the-blank exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Memory Match Game</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw lines to match each present tense verb to its correct past tense form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• go</div>
                                <div>• see</div>
                                <div>• eat</div>
                                <div>• sleep</div>
                                <div>• run</div>
                                <div>• drink</div>
                                <div>• sing</div>
                                <div>• write</div>
                            </div>
                            <div>
                                <div>→ saw</div>
                                <div>→ went</div>
                                <div>→ slept</div>
                                <div>→ drank</div>
                                <div>→ ate</div>
                                <div>→ wrote</div>
                                <div>→ ran</div>
                                <div>→ sang</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with the correct irregular past tense verb:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Yesterday, I ________ to the library. (go)</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>b. Last night, she ________ a shooting star. (see)</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>c. For breakfast, we ________ pancakes. (eat)</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>d. The baby ________ peacefully all afternoon. (sleep)</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>e. He ________ to catch the bus. (run)</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>f. They ________ all the water after the game. (drink)</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write one sentence using each of these past tense verbs: <strong>sang, wrote, went</strong>
                    <div class="answer-space" style="height: 90px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do you think some verbs are called "irregular"?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 more irregular past tense verbs at home (ask a family member or look in a book). Write each present and past form in a sentence.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Present Continuous Tense",
        lessonContent: `
            <p>Today we'll learn how to describe actions that are happening RIGHT NOW using the present continuous tense!</p>
            <p><strong>Key Question:</strong> How do we describe what someone is doing at this exact moment?</p>
            <p><strong>Introduction:</strong> The present continuous tense (also called present progressive) is used for actions that are happening right now, at this moment. We form it using: <strong>am/is/are + verb + -ing</strong></p>
            <p><strong>How to Form Present Continuous:</strong></p>
            <ul>
                <li><strong>I + am + verb-ing:</strong> I am eating, I am running, I am sleeping</li>
                <li><strong>He/She/It + is + verb-ing:</strong> She is jumping, He is writing, It is raining</li>
                <li><strong>You/We/They + are + verb-ing:</strong> You are reading, We are playing, They are singing</li>
            </ul>
            <p><strong>When Do We Use Present Continuous?</strong></p>
            <ol>
                <li><strong>Actions happening now:</strong> "The teacher is talking right now."</li>
                <li><strong>Temporary actions:</strong> "I am living with my grandparents this month."</li>
                <li><strong>Future plans:</strong> "We are going to the museum tomorrow."</li>
                <li><strong>Trends or changes:</strong> "The weather is getting warmer."</li>
            </ol>
            <p><strong>Spelling Rules for Adding -ing:</strong></p>
            <ul>
                <li>Most verbs: just add -ing: jump → jumping, read → reading</li>
                <li>Verbs ending in -e: remove the -e then add -ing: write → writing, dance → dancing</li>
                <li>Short verbs ending in consonant-vowel-consonant: double the last letter: run → running, swim → swimming</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running"></i> What's Happening Now?</div>
                <p>"She is jumping on the trampoline right now!" - This action is happening at this moment.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Spelling Spotlight</div>
                <p>Write → Writing (drop the -e). Run → Running (double the n). Read → Reading (just add -ing).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> Future Use</div>
                <p>"We are visiting grandma next weekend." - Even though it's future, we still use present continuous for planned events!</p>
            </div>
        `,
        taskInstructions: "Play the 'Mime and Guess' game to practice describing ongoing actions with present continuous tense.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Mime and Guess Game</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With a partner or small group, take turns acting out an action while others guess using present continuous sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Example:</strong> "You are swimming!" or "He is eating an apple!"</div>
                        <div class="answer-space" style="height: 80px; margin-top: 10px;">
                            <p><em>Write 3 sentences you heard or said during the game:</em></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Describe the Pictures</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write a present continuous sentence to describe each action:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. A boy kicking a ball → _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>b. A girl reading a book → _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>c. Dogs barking loudly → _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>d. The sun shining brightly → _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each sentence with the correct present continuous form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Right now, I ________ (write) in my notebook.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>b. The teacher ________ (explain) the lesson.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>c. We ________ (learn) about present continuous tense.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>d. My friend ________ (sit) next to me.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>e. The bell ________ (ring) in a few minutes.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 3 sentences describing what is happening in your classroom right now:
                    <div class="answer-space" style="height: 90px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Look out your window for 5 minutes. Write 5 present continuous sentences describing what you see (e.g., 'A car is driving down the street.')",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Tense Review and Practice",
        lessonContent: `
            <p>Today we'll practice switching between present and past tense accurately!</p>
            <p><strong>Key Question:</strong> How do we talk about what happened yesterday vs. what happens today?</p>
            <p><strong>Introduction:</strong> Now that we know present tense, past tense (regular and irregular), and present continuous tense, let's practice using them correctly. The key is knowing WHEN each tense is used.</p>
            <p><strong>Tense Review:</strong></p>
            <ul>
                <li><strong>Simple Present:</strong> Things that happen always, usually, or as a habit
                    <br>Example: "I eat breakfast every morning."</li>
                <li><strong>Simple Past:</strong> Things that happened and finished in the past
                    <br>Example: "I ate pancakes yesterday morning."</li>
                <li><strong>Present Continuous:</strong> Things happening RIGHT NOW
                    <br>Example: "I am eating my lunch at this moment."</li>
            </ul>
            <p><strong>Tense Clue Words:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Present Tense Clues</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Past Tense Clues</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Present Continuous Clues</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">always, usually, often, sometimes, never, every day</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">yesterday, last night, last week, ago, in 2020</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">now, right now, at the moment, today</td>
                </tr>
            </table>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-day"></i> Yesterday vs. Today</div>
                <p><strong>Yesterday:</strong> "I walked to school." <strong>Today:</strong> "I am taking the bus." <strong>Usually:</strong> "I always walk to school."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Switching Tenses</div>
                <p>Present: "She sings beautifully." → Past: "She sang at the concert last night." → Present Continuous: "She is singing right now!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Time Travel with Words</div>
                <p>"Yesterday" takes you to the past. "Right now" keeps you in the present moment. "Every day" is for habits!</p>
            </div>
        `,
        taskInstructions: "Complete a fill-in-the-blanks worksheet comparing yesterday's actions with today's actions, and practice switching between tenses.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fill in the Blanks - Yesterday vs. Today</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete each pair of sentences using the correct tense:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Example:</strong> Today I ____ (eat) cereal. Yesterday I ____ (eat) toast.</div>
                        <div>→ Today I <u>am eating</u> cereal. Yesterday I <u>ate</u> toast.</div>
                        <div style="margin-top: 15px;">
                            <div>a. Today I ________ (walk) to school. Yesterday I ________ (walk) to the park.</div>
                            <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                            <div>b. Right now, she ________ (read) a book. Last night, she ________ (read) a comic.</div>
                            <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                            <div>c. At this moment, we ________ (play) a game. Yesterday, we ________ (play) outside.</div>
                            <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                            <div>d. He always ________ (drink) milk. This morning, he ________ (drink) juice.</div>
                            <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                            <div>e. The dog ________ (sleep) right now. Last hour, it ________ (run) in the yard.</div>
                            <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Tense Transformation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Change each sentence to the tense shown in parentheses:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. She sings in the choir. (Change to PAST) → ______________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>b. They ate dinner at 6 PM. (Change to PRESENT) → ______________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>c. I am writing a story. (Change to PAST) → ______________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>d. He runs every morning. (Change to PRESENT CONTINUOUS) → ______________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>e. We went to the beach. (Change to PRESENT) → ______________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Choose the Correct Tense</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the correct verb form for each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Yesterday, I (go / went / am going) to the zoo.</div>
                        <div>b. Right now, my mom (cooks / cooked / is cooking) dinner.</div>
                        <div>c. She always (brushes / brushed / is brushing) her teeth before bed.</div>
                        <div>d. Last week, we (see / saw / are seeing) a beautiful rainbow.</div>
                        <div>e. Listen! The birds (sing / sang / are singing) outside.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Write Your Own Paragraph</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 4-5 sentences about what you did yesterday AND what you are doing today. Use at least 3 different tenses:
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Error Correction</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Fix the mistakes in these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. "She go to the store yesterday." → _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>b. "I am eat breakfast right now." → _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>c. "They sleeped for ten hours last night." → _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write a short diary entry (5-7 sentences) about your day today. Then rewrite it as if you were writing it tomorrow about yesterday. Compare the tense changes you made.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4EnglishWeek3);
    console.log("grade4-english-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4EnglishWeek3);
    console.log("grade4-english-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4EnglishWeek3',
        metadata: grade4EnglishWeek3.metadata,
        days: grade4EnglishWeek3
    });
    console.log("grade4-english-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4EnglishWeek3 = grade4EnglishWeek3;
console.log("grade4-english-week3.js loaded and registered successfully");