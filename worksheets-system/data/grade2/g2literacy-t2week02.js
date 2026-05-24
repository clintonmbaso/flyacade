// Grade 2 Literacy - Term 2 Week 2 Data
const grade2LiteracyWeek2 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 2,
        week: 2,
        title: "Consonant Blends",
        description: "Introduction to initial and final consonant blends with fluency practice"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Initial Consonant Blends",
        lessonContent: `
            <p>Welcome to our phonics lesson! Today we'll learn about initial consonant blends - two consonants at the beginning of a word that make blended sounds.</p>
            <p><strong>Key Question:</strong> What happens when two consonants are together at the start of a word?</p>
            <p><strong>What is a Consonant Blend?</strong></p>
            <p>A consonant blend is when two consonants appear together and you can hear both sounds blended smoothly. For example, in "plum" - you hear both the /p/ and /l/ sounds together!</p>
            <p><strong>Today's Initial Consonant Blends:</strong></p>
            <ul>
                <li><strong>pl-</strong> as in <em>plum, play, plant</em></li>
                <li><strong>sl-</strong> as in <em>slip, slow, sleep</em></li>
                <li><strong>br-</strong> as in <em>brush, brown, broke</em></li>
                <li><strong>cr-</strong> as in <em>crab, crop, crash</em></li>
                <li><strong>dr-</strong> as in <em>drum, drop, drink</em></li>
                <li><strong>fr-</strong> as in <em>frog, from, front</em></li>
                <li><strong>pr-</strong> as in <em>pray, press, price</em></li>
                <li><strong>tr-</strong> as in <em>tree, truck, train</em></li>
                <li><strong>sc-</strong> as in <em>scab, scan, scat</em></li>
                <li><strong>sm-</strong> as in <em>smile, smell, small</em></li>
                <li><strong>tw-</strong> as in <em>twin, twist, twelve</em></li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Say It Together</div>
                <p>Try saying "pl" - put your lips together for /p/, then move your tongue for /l/. Practice: pl-um, pl-ay, pl-ant!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Two Sounds, One Blend</div>
                <p>In "broom," you hear /b/ and /r/ together. In "crab," you hear /c/ and /r/ together. Both sounds are there - just squished close!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Smile with sm-</div>
                <p>When you say "smile," your lips start together for /s/ and /m/ before your mouth opens for the "ile" - that's a blend!</p>
            </div>
        `,
        taskInstructions: "Practice identifying and sounding out initial consonant blends.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Blend and Say</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Say each blend, then say the whole word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>pl + um = <span class="answer-space-inline" style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></span></div>
                        <div>sl + ip = <span class="answer-space-inline" style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></span></div>
                        <div>br + ush = <span class="answer-space-inline" style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></span></div>
                        <div>cr + ab = <span class="answer-space-inline" style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></span></div>
                        <div>dr + um = <span class="answer-space-inline" style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></span></div>
                        <div>fr + og = <span class="answer-space-inline" style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Match the Blend</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line from each word to its beginning blend:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <div>tree ___</div>
                            <div>smile ___</div>
                            <div>twin ___</div>
                            <div>pray ___</div>
                        </div>
                        <div>
                            <div>tr-  pr-  tw-  sm-</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Circle the Blend</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the consonant blend at the beginning of each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <u>sl</u>ip &nbsp;&nbsp; 2. <u>pl</u>ay &nbsp;&nbsp; 3. <u>br</u>own &nbsp;&nbsp; 4. <u>cr</u>op &nbsp;&nbsp; 5. <u>dr</u>op</div>
                        <div>6. <u>fr</u>om &nbsp;&nbsp; 7. <u>pr</u>ess &nbsp;&nbsp; 8. <u>tr</u>uck &nbsp;&nbsp; 9. <u>sc</u>an &nbsp;&nbsp; 10. <u>sm</u>all</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Write Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write two words that begin with each blend:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>pl-: _________ &nbsp;&nbsp; _________</div>
                        <div>br-: _________ &nbsp;&nbsp; _________</div>
                        <div>tr-: _________ &nbsp;&nbsp; _________</div>
                        <div>sm-: _________ &nbsp;&nbsp; _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 things at home that start with an initial consonant blend (like plate, brush, crayon). Write them down and circle the blend.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Final Consonant Blends",
        lessonContent: `
            <p>Today we'll learn about final consonant blends - two consonants at the end of a word that make blended sounds!</p>
            <p><strong>Key Question:</strong> What happens when two consonants are together at the end of a word?</p>
            <p><strong>Final Consonant Blends</strong></p>
            <p>Just like at the beginning of words, consonants can blend together at the end of words too. You can hear both sounds when you say the word!</p>
            <p><strong>Today's Final Consonant Blends:</strong></p>
            <ul>
                <li><strong>-lb</strong> as in <em>bulb, alb</em></li>
                <li><strong>-ld</strong> as in <em>old, cold, gold</em></li>
                <li><strong>-lf</strong> as in <em>wolf, shelf, elf</em></li>
                <li><strong>-lk</strong> as in <em>milk, silk, walk</em></li>
                <li><strong>-lm</strong> as in <em>palm, calm, helm</em></li>
                <li><strong>-ln</strong> as in <em>kiln, eln</em></li>
                <li><strong>-lp</strong> as in <em>help, pulp, scalp</em></li>
                <li><strong>-lt</strong> as in <em>salt, belt, melt</em></li>
                <li><strong>-st</strong> as in <em>nest, fast, best</em></li>
                <li><strong>-pt</strong> as in <em>slept, wept, kept</em></li>
                <li><strong>-st</strong> as in <em>list, last, dust</em></li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-temperature-cold"></i> Cold Old Gold</div>
                <p>In "old," you hear the /l/ and /d/ together. Try saying: old, cold, gold, hold! All end with -ld.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-glass-cheers"></i> Help on the Shelf</div>
                <p>Listen to the end of "help" (-lp) and "shelf" (-lf). Can you hear both consonants at the end of each word?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bird"></i> Best Nest</div>
                <p>The word "nest" ends with -st. Can you think of other words that end with -st? (fast, last, best, rest, test)</p>
            </div>
        `,
        taskInstructions: "Practice identifying and sounding out final consonant blends.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Listen and Circle</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the final consonant blend in each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. bul<u>b</u> &nbsp;&nbsp; 2. co<u>ld</u> &nbsp;&nbsp; 3. wo<u>lf</u> &nbsp;&nbsp; 4. mi<u>lk</u> &nbsp;&nbsp; 5. pa<u>lm</u></div>
                        <div>6. he<u>lp</u> &nbsp;&nbsp; 7. sa<u>lt</u> &nbsp;&nbsp; 8. ne<u>st</u> &nbsp;&nbsp; 9. sle<u>pt</u> &nbsp;&nbsp; 10. li<u>st</u></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Ending</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add the correct final blend to complete each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>co___ &nbsp;&nbsp; (ld / lf) &nbsp;&nbsp;&nbsp; mi___ &nbsp;&nbsp; (lk / lp) &nbsp;&nbsp;&nbsp; he___ &nbsp;&nbsp; (lp / lt)</div>
                        <div>sa___ &nbsp;&nbsp; (st / lt) &nbsp;&nbsp;&nbsp; ne___ &nbsp;&nbsp; (st / pt) &nbsp;&nbsp;&nbsp; we___ &nbsp;&nbsp; (pt / lt)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort these words by their final blend:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><em>Words: milk, old, help, nest, salt, wolf, slept, gold</em></p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                            <div><strong>-lk:</strong> _________</div>
                            <div><strong>-ld:</strong> _________</div>
                            <div><strong>-lp:</strong> _________</div>
                            <div><strong>-lt:</strong> _________</div>
                            <div><strong>-st:</strong> _________</div>
                            <div><strong>-lf:</strong> _________</div>
                            <div><strong>-pt:</strong> _________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Write a Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a sentence using at least two words with final consonant blends:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 words that end with -st and 5 words that end with -ld. Practice reading them aloud to someone at home.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Phonics",
        subtopic: "Fluency Practice with Consonant Blends",
        lessonContent: `
            <p>Today we'll practice reading words with both initial and final consonant blends! Let's build our reading fluency.</p>
            <p><strong>Key Question:</strong> How quickly and smoothly can you read words with consonant blends?</p>
            <p><strong>What is Fluency?</strong></p>
            <p>Fluency means reading words accurately, quickly, and with expression. When you know your blends well, reading becomes much easier!</p>
            <p><strong>Words to Practice Today:</strong></p>
            <ul>
                <li><strong>slop</strong> (initial blend sl-)</li>
                <li><strong>broom</strong> (initial blend br-)</li>
                <li><strong>cry</strong> (initial blend cr-)</li>
                <li><strong>palm</strong> (final blend -lm)</li>
                <li><strong>ant</strong> (final blend -nt)</li>
                <li><strong>next</strong> (final blend -xt)</li>
                <li><strong>milk</strong> (final blend -lk)</li>
            </ul>
            <p><strong>Blends Review:</strong></p>
            <ul>
                <li>Initial Blends: pl-, sl-, br-, cr-, dr-, fr-, pr-, tr-, sc-, sm-, tw-</li>
                <li>Final Blends: -lb, -ld, -lf, -lk, -lm, -ln, -lp, -lt, -st, -pt, -st</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-broom"></i> Sweep with Broom</div>
                <p>"Broom" has the initial blend br- at the beginning. Say it slowly: b-r-oom. Now say it fast: broom!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace-o"></i> Palm of Your Hand</div>
                <p>"Palm" has the final blend -lm. The l and m blend together at the end. Touch your palm as you say it!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Speed Up!</div>
                <p>First read "slop" slowly: s-l-o-p. Then read it faster. Then read it in a sentence: "Don't slop your milk!"</p>
            </div>
        `,
        taskInstructions: "Practice reading words with initial and final consonant blends for fluency.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Read and Circle the Blend</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each word. Circle the consonant blend (beginning or ending):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. slop &nbsp;&nbsp; 2. broom &nbsp;&nbsp; 3. cry &nbsp;&nbsp; 4. palm &nbsp;&nbsp; 5. ant &nbsp;&nbsp; 6. next &nbsp;&nbsp; 7. milk</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fluency Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each sentence three times. Time yourself or have a partner time you:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• The cat drank all its <u>milk</u>.</div>
                        <div>• I saw a tiny <u>ant</u> on the <u>palm</u> of my hand.</div>
                        <div>• My mom uses a <u>broom</u> to sweep the floor.</div>
                        <div>• Please don't <u>cry</u> - we can play <u>next</u> time.</div>
                        <div>• Do not <u>slop</u> your food on the table.</div>
                    </div>
                    <div style="margin-top: 10px;">
                        <p><strong>First read:</strong> _____ seconds &nbsp;&nbsp; <strong>Second read:</strong> _____ seconds &nbsp;&nbsp; <strong>Third read:</strong> _____ seconds</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Blend Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort the practice words into the correct columns:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <strong>Initial Blends</strong><br>
                                slop, broom, cry
                            </div>
                            <div>
                                <strong>Final Blends</strong><br>
                                palm, ant, next, milk
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fill in the Blank</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete each sentence with a word from the list:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><em>Word list: slop, broom, cry, palm, ant, next, milk</em></p>
                        <div>A. I drink cold _________ with my cookies.</div>
                        <div>B. The little _________ carried a big crumb.</div>
                        <div>C. Please don't _________ the water on the floor.</div>
                        <div>D. My mom uses a _________ to clean the kitchen.</div>
                        <div>E. The baby started to _________ when she fell down.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Write Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write two sentences using words with consonant blends:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Practice reading the fluency sentences to a family member. Read them three times and see if you get faster each time!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek2);
    console.log("grade2-literacy-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek2);
    console.log("grade2-literacy-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek2',
        metadata: grade2LiteracyWeek2.metadata,
        days: grade2LiteracyWeek2
    });
    console.log("grade2-literacy-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek2 = grade2LiteracyWeek2;
console.log("grade2-literacy-week2.js loaded and registered successfully");