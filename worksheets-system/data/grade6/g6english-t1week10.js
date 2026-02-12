// Grade 6 English - Week 10 Data (Mastering Adverbs of Frequency)
const grade6EnglishWeek10 = {
metadata: {
grade: 6,
subject: "English",
week: 10,
title: "Mastering Adverbs of Frequency",
description: "Learning to identify, place, and use adverbs of frequency in various contexts, integrated with conjunctions for descriptive writing"
},

    
monday: {
    subject: "English",
    topic: "Introduction to Adverbs of Frequency",
    subtopic: "Discussing and identifying how often actions occur",
    lessonContent: `
        <p>Welcome to our English lesson! Today we begin our exploration of adverbs of frequency—words that tell us HOW OFTEN something happens.</p>
        <p><strong>Objective:</strong> Students will discuss and identify adverbs that tell how often something happens.</p>
        <p><strong>Key Concept:</strong> Adverbs of frequency help us describe routines, habits, and repeated actions with precision.</p>
        <p><strong>Our Frequency Adverbs Today:</strong></p>
        <ul>
            <li><strong>Always (100%):</strong> Every single time; without exception</li>
            <li><strong>Frequently (≈90%):</strong> Very often; many times</li>
            <li><strong>Often (≈70%):</strong> Many times; regularly</li>
            <li><strong>Occasionally (≈40%):</strong> Sometimes; from time to time</li>
            <li><strong>Rarely (≈10%):</strong> Not often; seldom</li>
            <li><strong>Never (0%):</strong> Not at any time</li>
        </ul>
        <p><strong>Why This Matters:</strong> Using the correct frequency adverb helps your listener understand exactly how often something happens—from daily routines to rare events!</p>
        <p><strong>Think About It:</strong> What's the difference between saying "I often read" and "I occasionally read"? The meaning changes completely!</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-chart-line" style="color: #4CAF50;"></i> Frequency Scale (100% → 0%)</div>
            <p><strong>ALWAYS</strong> —————————————————————————————————— <strong>NEVER</strong></p>
            <div style="display: flex; justify-content: space-between; margin-top: 10px; margin-bottom: 10px;">
                <span style="background-color: #4CAF50; padding: 5px 10px; color: white; border-radius: 3px;">Always</span>
                <span style="background-color: #8BC34A; padding: 5px 10px; color: white; border-radius: 3px;">Frequently</span>
                <span style="background-color: #FFC107; padding: 5px 10px; color: white; border-radius: 3px;">Often</span>
                <span style="background-color: #FF9800; padding: 5px 10px; color: white; border-radius: 3px;">Occasionally</span>
                <span style="background-color: #F44336; padding: 5px 10px; color: white; border-radius: 3px;">Rarely</span>
                <span style="background-color: #9C27B0; padding: 5px 10px; color: white; border-radius: 3px;">Never</span>
            </div>
            <p><small>Place these on your own frequency scale: frequently, often, occasionally, rarely</small></p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-search" style="color: #2196F3;"></i> Identifying Adverbs in Sentences</div>
            <p><strong>Example 1:</strong> "They <u>often</u> go on holiday to the beach."</p>
            <p><strong>Example 2:</strong> "I <u>rarely</u> eat spicy food because it upsets my stomach."</p>
            <p><strong>Example 3:</strong> "She <u>always</u> completes her homework before dinner."</p>
            <p><strong>Example 4:</strong> "We <u>frequently</u> visit our grandparents on Sundays."</p>
            <p><strong>Example 5:</strong> "He <u>occasionally</u> forgets his water bottle at school."</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-gamepad"></i> Frequency Scale Game!</div>
            <p>We'll play "Where Does It Belong?" - I'll call out an activity, and you'll decide which adverb of frequency best describes how often you do it!</p>
        </div>
    `,
    taskInstructions: "Complete the following activities to practice identifying and using adverbs of frequency.",
    taskContent: `
        <div class="task-item">
            <span class="task-number">1</span> <strong>Draw Your Frequency Scale:</strong> Create a horizontal line from 100% (Always) to 0% (Never). Place these adverbs in the correct order:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>frequently • often • occasionally • rarely</div>
            </div>
            <div class="answer-space" style="height: 80px; margin-top: 10px;">Draw your scale here:</div>
        </div>
        <div class="task-item">
            <span class="task-number">2</span> <strong>Identify the Adverb:</strong> Underline the adverb of frequency in each sentence:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>a) They often go swimming after school. <span class="answer-space" style="width: 150px;"></span></div>
                <div>b) I am always excited for science class. <span class="answer-space" style="width: 150px;"></span></div>
                <div>c) My grandmother rarely uses a computer. <span class="answer-space" style="width: 150px;"></span></div>
                <div>d) We occasionally order pizza on Fridays. <span class="answer-space" style="width: 150px;"></span></div>
                <div>e) He frequently helps his younger brother with homework. <span class="answer-space" style="width: 150px;"></span></div>
            </div>
        </div>
        <div class="task-item">
            <span class="task-number">3</span> <strong>Choose the Correct Adverb:</strong> Fill in the blank with the most appropriate adverb:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>a) The sun ___________ rises in the east. (always / occasionally) <span class="answer-space" style="width: 100px;"></span></div>
                <div>b) I ___________ eat sushi—maybe once or twice a year. (often / rarely) <span class="answer-space" style="width: 100px;"></span></div>
                <div>c) We ___________ visit the museum on school trips. (frequently / never) <span class="answer-space" style="width: 100px;"></span></div>
                <div>d) She ___________ forgets her library book. (occasionally / always) <span class="answer-space" style="width: 100px;"></span></div>
            </div>
        </div>
        <div class="task-item">
            <span class="task-number">4</span> <strong>Create Your Own:</strong> Write one sentence for each adverb of frequency:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>Always: <span class="answer-space" style="width: 350px;"></span></div>
                <div>Frequently: <span class="answer-space" style="width: 350px;"></span></div>
                <div>Often: <span class="answer-space" style="width: 350px;"></span></div>
                <div>Occasionally: <span class="answer-space" style="width: 350px;"></span></div>
                <div>Rarely: <span class="answer-space" style="width: 350px;"></span></div>
            </div>
        </div>
    `,
    homework: "Write five sentences about your family's habits using five different adverbs of frequency. Bring them to share tomorrow.",
    homeworkDue: "Tuesday"
},

tuesday: {
    subject: "English",
    topic: "Placement of Adverbs",
    subtopic: "Learning correct position with 'to be' verbs vs. action verbs",
    lessonContent: `
        <p>Today we will learn WHERE to place adverbs of frequency in a sentence—it changes depending on the verb!</p>
        <p><strong>Objective:</strong> Students will learn where to place adverbs in a sentence with different verb types.</p>
        <p><strong>Key Concept:</strong> Adverbs of frequency have TWO different positions based on whether the sentence uses a "to be" verb or an action verb.</p>
        <p><strong>Rule 1: With "To Be" Verbs (am, is, are, was, were)</strong></p>
        <div style="background-color: #E3F2FD; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
            <p><strong>Position:</strong> Adverb comes AFTER the "to be" verb.</p>
            <p>✅ She <u>is</u> <strong>always</strong> punctual.</p>
            <p>❌ She always is punctual.</p>
            <p>✅ They <u>are</u> <strong>frequently</strong> late to practice.</p>
            <p>✅ I <u>am</u> <strong>rarely</strong> bored in this class.</p>
        </div>
        <p><strong>Rule 2: With Action Verbs (run, eat, read, play, etc.)</strong></p>
        <div style="background-color: #FFF3E0; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
            <p><strong>Position:</strong> Adverb comes BEFORE the action verb.</p>
            <p>✅ They <strong>often</strong> <u>go</u> to the park.</p>
            <p>❌ They go often to the park.</p>
            <p>✅ He <strong>rarely</strong> <u>eats</u> breakfast.</p>
            <p>✅ We <strong>occasionally</strong> <u>watch</u> movies on weekends.</p>
        </div>
        <p><strong>Remember:</strong> Look at the verb first. Is it "to be"? Place adverb AFTER. Is it an action verb? Place adverb BEFORE.</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-sort-amount-down" style="color: #FF9800;"></i> To Be Verb Examples</div>
            <p><strong>Correct:</strong> He <u>is</u> <em>always</em> happy in the morning.</p>
            <p><strong>Correct:</strong> The library <u>is</u> <em>frequently</em> crowded after school.</p>
            <p><strong>Correct:</strong> I <u>am</u> <em>occasionally</em> confused by math problems.</p>
            <p><strong>Correct:</strong> They <u>were</u> <em>rarely</em> absent last year.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-running"></i> Action Verb Examples</div>
            <p><strong>Correct:</strong> She <em>always</em> <u>finishes</u> her homework on time.</p>
            <p><strong>Correct:</strong> We <em>frequently</em> <u>visit</u> the science museum.</p>
            <p><strong>Correct:</strong> He <em>often</em> <u>plays</u> basketball after school.</p>
            <p><strong>Correct:</strong> They <em>occasionally</em> <u>travel</u> to other cities.</p>
            <p><strong>Correct:</strong> I <em>rarely</em> <u>drink</u> soda.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-puzzle-piece"></i> Mixed-Up Sentence Challenge!</div>
            <p><strong>Jumbled:</strong> "is / always / She / on time"</p>
            <p><strong>Correct:</strong> "She is always on time."</p>
            <p><strong>Jumbled:</strong> "plays / often / He / football"</p>
            <p><strong>Correct:</strong> "He often plays football."</p>
        </div>
    `,
    taskInstructions: "Practice placing adverbs correctly with different types of verbs.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Identify the Verb Type</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Label each verb as "to be" or "action":
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) is __________ &nbsp;&nbsp;&nbsp; b) run __________ &nbsp;&nbsp;&nbsp; c) are __________</div>
                    <div>d) read __________ &nbsp;&nbsp;&nbsp; e) was __________ &nbsp;&nbsp;&nbsp; f) sing __________</div>
                    <div>g) were __________ &nbsp;&nbsp;&nbsp; h) write __________ &nbsp;&nbsp;&nbsp; i) am __________</div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Correct the Mistakes</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> These sentences have incorrect adverb placement. Rewrite them correctly:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) She is frequently hungry after school. (Is this correct? ____) If not, rewrite: <span class="answer-space" style="width: 250px;"></span></div>
                    <div>b) He always is kind to others. → <span class="answer-space" style="width: 300px;"></span></div>
                    <div>c) They go often to the library. → <span class="answer-space" style="width: 300px;"></span></div>
                    <div>d) I am rarely tired. (Is this correct? ____) If not, rewrite: <span class="answer-space" style="width: 250px;"></span></div>
                    <div>e) We eat occasionally pizza. → <span class="answer-space" style="width: 300px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Unscramble the Sentences</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> Put the words in the correct order:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) is / always / My teacher / helpful / __________________________________</div>
                    <div>b) rarely / watches / My brother / television / __________________________________</div>
                    <div>c) are / frequently / The students / excited / about science / __________________________________</div>
                    <div>d) occasionally / I / lose / my keys / __________________________________</div>
                    <div>e) often / We / visit / our cousins / on weekends / __________________________________</div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Write About Your Morning Routine</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> Write three sentences about your morning routine using "always" or "frequently." Pay attention to verb placement!
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. <span class="answer-space" style="width: 400px;"></span></div>
                    <div>2. <span class="answer-space" style="width: 400px;"></span></div>
                    <div>3. <span class="answer-space" style="width: 400px;"></span></div>
                </div>
            </div>
        </div>
    `,
    homework: "Write 5 sentences about a family member's habits—two with 'to be' verbs and three with action verbs. Underline the adverb and circle the verb.",
    homeworkDue: "Wednesday"
},

wednesday: {
    subject: "English",
    topic: "Identifying Frequency in Context",
    subtopic: "Finding and analyzing adverbs of frequency in written texts",
    lessonContent: `
        <p>Today we will read a story and become detectives—searching for adverbs of frequency and analyzing WHY the author chose specific ones.</p>
        <p><strong>Objective:</strong> Students will identify adverbs of frequency within a written text and analyze author word choice.</p>
        <p><strong>Key Concept:</strong> Authors choose adverbs of frequency carefully to give readers precise information about characters' habits and routines.</p>
        <p><strong>Why Word Choice Matters:</strong> "Occasionally" and "rarely" are NOT the same! One means "sometimes" while the other means "almost never." Authors choose based on exactly what they want to communicate.</p>
        <p><strong>Reading Strategy:</strong> As you read, ask yourself: What does this adverb tell me about the character? Would the meaning change if the author used a different frequency word?</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-book-open" style="color: #9C27B0;"></i> "Amina's Typical Week"</div>
            <div style="background-color: #F3E5F5; padding: 15px; border-radius: 5px;">
                <p>Amina is <u>always</u> busy on weekdays. She <u>always</u> wakes up at 6:00 AM to help prepare breakfast. Her father <u>frequently</u> travels for work, so she helps her mother with younger siblings. After school, she <u>often</u> attends the homework club in the library. Amina <u>occasionally</u> plays football with friends, but only if her chores are finished. She <u>rarely</u> watches television on school nights because she prioritizes her studies. On weekends, however, she <u>frequently</u> visits her grandmother and <u>always</u> brings her favorite mangoes.</p>
            </div>
            <p style="margin-top: 10px;"><strong>Discussion:</strong> Why did the author write "occasionally plays football" instead of "rarely plays football"? What does this tell us about Amina's priorities?</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-question-circle"></i> Analysis Questions</div>
            <ul>
                <li>Which adverb appears most frequently? What does this tell us?</li>
                <li>Find an action verb sentence and a "to be" verb sentence. Is the adverb placed correctly?</li>
                <li>If we changed "rarely watches" to "never watches," how would Amina change?</li>
            </ul>
        </div>
    `,
    taskInstructions: "Read the passage carefully and identify all adverbs of frequency. Then analyze why specific words were chosen.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Story Reading and Identification</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Read the story below and underline ALL adverbs of frequency:
                <div style="background-color: #F9F9F9; padding: 15px; border-left: 5px solid #2196F3; margin-top: 15px; margin-bottom: 15px;">
                    <p><strong>"Marcus and His Music"</strong></p>
                    <p>Marcus is always thinking about music. He frequently hums melodies during breakfast and often taps his pencil to a rhythm during class. His teacher occasionally reminds him to focus, but she admires his passion. Marcus rarely misses a day of practice on his violin. "I am rarely tired when I'm playing," he says. His family frequently attends his school concerts, and his little sister always sits in the front row. On weekends, Marcus often composes his own short pieces. He occasionally shares them with his music teacher, who is always impressed. "You rarely make mistakes now," she told him recently. Marcus smiled proudly—he practices frequently because he dreams of becoming a professional musician someday.</p>
                </div>
                <div>How many adverbs did you find? <span class="answer-space" style="width: 50px;"></span></div>
                <div>List them here: <span class="answer-space" style="width: 400px;"></span></div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Analyzing Author's Choice</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Answer these questions about the story:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) Why do you think the author wrote "occasionally reminds him" instead of "frequently reminds him"?</div>
                    <div class="answer-space" style="height: 60px; margin-top: 5px; margin-bottom: 15px;"></div>
                    <div>b) What does the adverb "rarely" tell us about Marcus's practice habits?</div>
                    <div class="answer-space" style="height: 60px; margin-top: 5px; margin-bottom: 15px;"></div>
                    <div>c) If the author changed "always sits" to "occasionally sits," how would Marcus's sister be different?</div>
                    <div class="answer-space" style="height: 60px; margin-top: 5px; margin-bottom: 15px;"></div>
                    <div>d) Find one example of an adverb with a "to be" verb and one with an action verb. Write them below:</div>
                    <div>"To be" example: <span class="answer-space" style="width: 300px;"></span></div>
                    <div>Action verb example: <span class="answer-space" style="width: 300px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Compare and Contrast</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> How does the meaning change? Rewrite each sentence with the new adverb and explain the difference:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>Original:</strong> "Marcus rarely misses a day of practice."</div>
                    <div><strong>New:</strong> "Marcus occasionally misses a day of practice."</div>
                    <div>What changed? <span class="answer-space" style="width: 350px;"></span></div>
                    <div style="margin-top: 15px;"></div>
                    <div><strong>Original:</strong> "His teacher occasionally reminds him to focus."</div>
                    <div><strong>New:</strong> "His teacher frequently reminds him to focus."</div>
                    <div>What changed? <span class="answer-space" style="width: 350px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Reflection</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> In your own words, explain why authors choose specific adverbs of frequency instead of general words like "sometimes" or "a lot." How do these words help us understand characters better?
                <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
            </div>
        </div>
    `,
    homework: "Find a short paragraph in a book, magazine, or website. Copy it down and underline any adverbs of frequency you find. If you find none, write two sentences that could be added using 'often' and 'rarely.'",
    homeworkDue: "Thursday"
},

thursday: {
    subject: "English",
    topic: "Using Adverbs in Personal Contexts",
    subtopic: "Applying frequency adverbs to describe personal habits and routines",
    lessonContent: `
        <p>Today we move from identifying to APPLYING! You will use adverbs of frequency to describe your own life and interview classmates about theirs.</p>
        <p><strong>Objective:</strong> Students will apply adverbs of frequency to describe their own lives and ask others about their habits.</p>
        <p><strong>Key Concept:</strong> Adverbs of frequency help us share accurate information about ourselves and understand others better.</p>
        <p><strong>Our Adverb List:</strong></p>
        <ul>
            <li><strong>Always</strong> (100%) — every single time</li>
            <li><strong>Frequently</strong> (≈90%) — very often</li>
            <li><strong>Often</strong> (≈70%) — many times</li>
            <li><strong>Occasionally</strong> (≈40%) — sometimes</li>
            <li><strong>Rarely</strong> (≈10%) — almost never</li>
            <li><strong>Never</strong> (0%) — not at any time</li>
        </ul>
        <p><strong>Question Formation:</strong> "How often do you...?"</p>
        <p><strong>Answer Formation:</strong> "I [adverb] [verb]..." or "I am [adverb] [adjective/noun]..."</p>
        <p><strong>Today's Activity:</strong> "Find Someone Who" — You'll move around the room, ask questions, and discover classmates' habits!</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-people-arrows" style="color: #4CAF50;"></i> Find Someone Who...</div>
            <ul>
                <li>...always reads before bed.</li>
                <li>...rarely eats vegetables.</li>
                <li>...frequently visits the library.</li>
                <li>...occasionally forgets homework.</li>
                <li>...often helps with cooking at home.</li>
                <li>...never watches television on school days.</li>
            </ul>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-comment-dots"></i> Sample Dialogue</div>
            <p><strong>Student A:</strong> "How often do you read books for fun?"</p>
            <p><strong>Student B:</strong> "I frequently read before bedtime. How about you?"</p>
            <p><strong>Student A:</strong> "I occasionally read—I prefer drawing."</p>
            <p><strong>Reporting:</strong> "Amina frequently reads books. Carlos occasionally reads—he prefers drawing."</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-clipboard-list"></i> Sentence Starters for Reporting</div>
            <ul>
                <li>"[Name] always/frequently/often..."</li>
                <li>"[Name] occasionally/rarely/never..."</li>
                <li>"I discovered that [Name] is always/frequently..."</li>
                <li>"According to [Name], they occasionally..."</li>
            </ul>
        </div>
    `,
    taskInstructions: "Interview classmates, record their responses, and report your findings using complete sentences with correct adverb placement.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Find Someone Who — Interview Activity</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Walk around and ask classmates: "How often do you...?" Find someone who matches each description. Write their name and their exact response:
                <table style="width: 100%; margin-top: 15px; border-collapse: collapse;">
                    <tr style="background-color: #4CAF50; color: white;">
                        <th style="padding: 10px; border: 1px solid #ddd;">Find someone who...</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Classmate's Name</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Their Response (full sentence)</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">always reads before bed</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">rarely eats vegetables</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">frequently visits the library</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">occasionally forgets homework</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">often helps with cooking</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Create Your Own Questions</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Write three "How often do you...?" questions to ask a partner:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. How often do you <span class="answer-space" style="width: 250px;"></span>?</div>
                    <div>2. How often do you <span class="answer-space" style="width: 250px;"></span>?</div>
                    <div>3. How often do you <span class="answer-space" style="width: 250px;"></span>?</div>
                </div>
                <div style="margin-top: 15px;">
                    <div><strong>Partner's name:</strong> <span class="answer-space" style="width: 150px;"></span></div>
                    <div><strong>Partner's answers:</strong></div>
                    <div>1. <span class="answer-space" style="width: 400px;"></span></div>
                    <div>2. <span class="answer-space" style="width: 400px;"></span></div>
                    <div>3. <span class="answer-space" style="width: 400px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Report Your Findings</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> Write four sentences reporting what you learned about your classmates. Use different adverbs and correct placement:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. <span class="answer-space" style="width: 450px;"></span></div>
                    <div>2. <span class="answer-space" style="width: 450px;"></span></div>
                    <div>3. <span class="answer-space" style="width: 450px;"></span></div>
                    <div>4. <span class="answer-space" style="width: 450px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Self-Reflection</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> Write three sentences about YOUR habits using three different adverbs of frequency:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. <span class="answer-space" style="width: 450px;"></span></div>
                    <div>2. <span class="answer-space" style="width: 450px;"></span></div>
                    <div>3. <span class="answer-space" style="width: 450px;"></span></div>
                </div>
            </div>
        </div>
    `,
    homework: "Interview a family member using three 'How often do you...?' questions. Write down their answers in complete sentences with correct adverb placement.",
    homeworkDue: "Friday"
},

friday: {
    subject: "English",
    topic: "Adverbs and Conjunctions Integration",
    subtopic: "Demonstrating mastery by using both adverbs and conjunctions in writing",
    lessonContent: `
        <p>Today is our final lesson—and your chance to show mastery! We will integrate adverbs of frequency with conjunctions (and, but, so, because, or) to write detailed, descriptive paragraphs about habits and goals.</p>
        <p><strong>Objective:</strong> To demonstrate mastery by using both adverbs of frequency and conjunctions in a single context.</p>
        <p><strong>Key Concept:</strong> Great writers combine different language tools to create clear, interesting, and precise sentences.</p>
        <p><strong>Quick Review: Conjunctions</strong></p>
        <ul>
            <li><strong>And:</strong> Adds information — "I always read before bed, <u>and</u> I frequently finish entire chapters."</li>
            <li><strong>But:</strong> Shows contrast — "I rarely eat fast food, <u>but</u> I occasionally get pizza on Fridays."</li>
            <li><strong>So:</strong> Shows result — "I always forget my water bottle, <u>so</u> I bought a reusable one."</li>
            <li><strong>Because:</strong> Shows reason — "I frequently practice violin <u>because</u> I want to improve."</li>
            <li><strong>Or:</strong> Shows choice — "I occasionally walk to school, <u>or</u> I take the bus."</li>
        </ul>
        <p><strong>Expected Standard:</strong> Students will correctly use adverbs of frequency and conjunctions in various contexts, with proper placement and meaning.</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-pen-fancy" style="color: #9C27B0;"></i> Integration Examples</div>
            <p><strong>"My Habits" Paragraph:</strong></p>
            <div style="background-color: #F3E5F5; padding: 15px; border-radius: 5px;">
                <p>I <u>always</u> wake up early <u>because</u> I like to eat breakfast slowly. I <u>frequently</u> walk to school <u>but</u> I <u>occasionally</u> take the bus when it rains. I <u>rarely</u> forget my homework <u>so</u> my teacher is <u>always</u> happy with me. I <u>often</u> play football after school <u>and</u> I <u>frequently</u> score goals!</p>
            </div>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-bullseye"></i> "Life Goals" Paragraph</div>
            <div style="background-color: #E8F5E9; padding: 15px; border-radius: 5px;">
                <p>In the future, I want to be a veterinarian <u>because</u> I <u>always</u> loved animals. I will <u>frequently</u> volunteer at shelters <u>so</u> I can gain experience. I <u>occasionally</u> feel nervous about exams, <u>but</u> I <u>always</u> try my best. I <u>rarely</u> give up on challenges <u>and</u> that will help me achieve my dreams.</p>
            </div>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-star"></i> Success Criteria Checklist</div>
            <ul>
                <li>☐ At least THREE different adverbs of frequency</li>
                <li>☐ At least THREE different conjunctions</li>
                <li>☐ Correct adverb placement (before action verbs, after "to be")</li>
                <li>☐ Sentences make logical sense</li>
                <li>☐ Paragraph has clear topic (habits OR life goals)</li>
            </ul>
        </div>
    `,
    taskInstructions: "Demonstrate your mastery by writing a paragraph that correctly uses adverbs of frequency AND conjunctions.",
    taskContent: `
        <div class="content-box">
            <p><strong>Final Writing Task: "My Habits" or "My Life Goals"</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Choose ONE topic and write a paragraph of at least 6 sentences. You must include:
                <div style="background-color: #FFF9C4; padding: 15px; margin-top: 10px; margin-bottom: 15px; border-left: 5px solid #FFC107;">
                    <p><strong>Requirements Checklist:</strong></p>
                    <div>✓ At least 3 different adverbs of frequency (always, frequently, often, occasionally, rarely, never)</div>
                    <div>✓ At least 3 different conjunctions (and, but, so, because, or)</div>
                    <div>✓ Correct adverb placement with both "to be" and action verbs</div>
                    <div>✓ Clear organization and topic focus</div>
                </div>
                
                <div><strong>Topic A: My Habits</strong> — Describe your daily or weekly routines. What do you always, frequently, occasionally, rarely, or never do?</div>
                <div style="margin-top: 5px; margin-bottom: 15px;"><strong>Topic B: My Life Goals</strong> — Describe your dreams for the future. What will you always do? What do you rarely do now but want to change?</div>
                
                <div style="margin-top: 20px;">
                    <strong>My chosen topic:</strong> <span class="answer-space" style="width: 200px;"></span>
                </div>
                
                <div style="margin-top: 15px;">
                    <strong>Write your paragraph here:</strong>
                </div>
                <div class="answer-space" style="height: 200px; width: 100%; border: 2px dashed #4CAF50; border-radius: 5px; padding: 10px; margin-top: 10px;"></div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part A: Self-Assessment</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Review your paragraph and complete this checklist:
                <div style="margin-left: 20px; margin-top: 15px;">
                    <div>☐ I used "always" or another 100% frequency word</div>
                    <div>☐ I used at least one adverb with a "to be" verb (am/is/are/was/were)</div>
                    <div>☐ I used at least one adverb with an action verb</div>
                    <div>☐ I used "and" to connect two ideas</div>
                    <div>☐ I used "but" to show contrast</div>
                    <div>☐ I used "because" or "so" to show reason/result</div>
                    <div>☐ My sentences are complete and make sense</div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Identify Your Language Tools</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> From your paragraph above, list:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>Adverbs of frequency I used:</strong> <span class="answer-space" style="width: 400px;"></span></div>
                    <div><strong>Conjunctions I used:</strong> <span class="answer-space" style="width: 400px;"></span></div>
                    <div style="margin-top: 15px;">
                        <div>Write one sentence from your paragraph that contains BOTH an adverb AND a conjunction:</div>
                        <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Peer Feedback</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> Exchange paragraphs with a partner. Identify one strength and one suggestion:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>Partner's name:</strong> <span class="answer-space" style="width: 150px;"></span></div>
                    <div><strong>One thing done well:</strong> <span class="answer-space" style="width: 350px;"></span></div>
                    <div><strong>One suggestion for improvement:</strong> <span class="answer-space" style="width: 350px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Expected Standard Reflection</strong></p>
            <div class="task-item">
                <span class="task-number">5</span> In your own words, explain why it's important to use adverbs of frequency and conjunctions correctly when writing about habits or goals. How do these words help your reader?
                <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
            </div>
        </div>
    `,
    homework: "Revise your paragraph based on peer feedback. Write a final, polished version to submit on Monday.",
    homeworkDue: "Monday"
}
    
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
window.registerWorksheet(grade6EnglishWeek10);
console.log("grade6-english-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
window.DataLoader.registerWorksheet(grade6EnglishWeek10);
console.log("grade6-english-week10.js registered using DataLoader.registerWorksheet()");
} else {
// Fallback: store in global array
if (!window.registeredWorksheets) {
window.registeredWorksheets = [];
}
window.registeredWorksheets.push({
variableName: 'grade6EnglishWeek10',
metadata: grade6EnglishWeek10.metadata,
days: grade6EnglishWeek10
});
console.log("grade6-english-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6EnglishWeek10 = grade6EnglishWeek10;
console.log("grade6-english-week10.js loaded and registered successfully");