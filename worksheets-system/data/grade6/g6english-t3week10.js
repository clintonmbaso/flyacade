// Grade 6 English - Term 3 Week 10 Data
const grade6EnglishWeek10 = {
    metadata: {
        grade: 6,
        subject: "English",
        term: 3,
        week: 10,
        title: "Subject-Verb Agreement",
        description: "Ensuring subjects and verbs match - singular vs plural, irregular subjects, error correction, sentence building, and comprehensive review"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Singular vs Plural: Basic Rules of Subject-Verb Agreement",
        lessonContent: `
            <p>Welcome to our week on subject-verb agreement! Today we'll learn the basic rules for making subjects and verbs match.</p>
            <p><strong>Key Question:</strong> Why can't we say "She run fast" or "They runs fast"?</p>
            <p><strong>Introduction:</strong> Subject-verb agreement means that the subject and verb in a sentence must match in number. If the subject is singular (one), the verb must be singular. If the subject is plural (more than one), the verb must be plural.</p>
            <p><strong>The Golden Rule:</strong></p>
            <ul>
                <li><strong>Singular subject</strong> → Add -s or -es to the verb (usually)</li>
                <li><strong>Plural subject</strong> → Use the base form of the verb (no -s)</li>
            </ul>
            <p><strong>Basic Rules:</strong></p>
            <ol>
                <li><strong>Singular subjects (he, she, it, or one person/thing):</strong> Verb ends with -s
                    <ul>
                        <li>The dog barks loudly. (singular)</li>
                        <li>She reads every night. (singular)</li>
                    </ul>
                </li>
                <li><strong>Plural subjects (they, we, or multiple people/things):</strong> Verb does NOT end with -s
                    <ul>
                        <li>The dogs bark loudly. (plural)</li>
                        <li>They read every night. (plural)</li>
                    </ul>
                </li>
                <li><strong>"To be" verbs are special:</strong>
                    <ul>
                        <li>Singular: I am, you are, he/she/it is</li>
                        <li>Plural: We are, you are, they are</li>
                    </ul>
                </li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Correct Examples</div>
                <p>✓ He walks to school.<br>✓ She plays the piano.<br>✓ The cat sleeps on the sofa.<br>✓ My friends play soccer.<br>✓ Birds fly south for winter.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-times-circle"></i> Incorrect Examples</div>
                <p>✗ He walk to school.<br>✗ She play the piano.<br>✗ The cat sleep on the sofa.<br>✗ My friends plays soccer.<br>✗ Birds flies south for winter.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Memory Trick</div>
                <p>Remember: SINGULAR subjects get a VERB with an S. It's the opposite of what you might think! One dog = barks. Many dogs = bark.</p>
            </div>
        `,
        taskInstructions: "Complete the basic subject-verb agreement exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Choose the Correct Verb</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the correct verb in each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The boy (run / runs) every morning.</div>
                        <div>b. The girls (dance / dances) beautifully.</div>
                        <div>c. My teacher (explain / explains) the lesson well.</div>
                        <div>d. The flowers (bloom / blooms) in spring.</div>
                        <div>e. He (eat / eats) breakfast at 7 AM.</div>
                        <div>f. They (play / plays) video games together.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with the correct form of the verb:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. She __________ (write) stories in her journal.</div>
                        <div>b. The students __________ (listen) to the teacher.</div>
                        <div>c. My brother __________ (fix) his bicycle.</div>
                        <div>d. The baby __________ (cry) when hungry.</div>
                        <div>e. We __________ (like) to eat pizza.</div>
                        <div>f. The sun __________ (shine) brightly today.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write two sentences with singular subjects and two sentences with plural subjects:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 sentences in a book or magazine. Identify the subject and verb in each. Write whether they are singular or plural.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Irregular Subjects: Handling Collective Nouns",
        lessonContent: `
            <p>Today we'll tackle tricky subjects like collective nouns and special cases that don't follow the basic rules!</p>
            <p><strong>Key Question:</strong> Is it "The team wins" or "The team win"?</p>
            <p><strong>Collective Nouns:</strong> Words that name a group of people or things as a single unit (team, family, class, herd, audience, committee).</p>
            <p><strong>Rule for Collective Nouns:</strong></p>
            <ul>
                <li><strong>Singular (acting as one unit):</strong> Use singular verb
                    <ul>
                        <li>The team wins the championship. (everyone working together)</li>
                        <li>The committee meets every Tuesday.</li>
                    </ul>
                </li>
                <li><strong>Plural (acting as individuals):</strong> Use plural verb (less common)
                    <ul>
                        <li>The team are arguing among themselves. (each person doing something different)</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Other Special Cases:</strong></p>
            <ol>
                <li><strong>Indefinite pronouns (everyone, someone, nobody, each):</strong> Always singular
                    <ul>
                        <li>Everyone is welcome.</li>
                        <li>Each of the students has a book.</li>
                    </ul>
                </li>
                <li><strong>Either/Neither:</strong> Usually singular
                    <ul>
                        <li>Neither of the answers is correct.</li>
                    </ul>
                </li>
                <li><strong>Subjects joined by "and":</strong> Usually plural
                    <ul>
                        <li>The dog and the cat are playing.</li>
                    </ul>
                </li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Collective Nouns</div>
                <p>The family <strong>loves</strong> to travel together.<br>
                The class <strong>has</strong> 25 students.<br>
                The audience <strong>applauds</strong> loudly.<br>
                The herd <strong>moves</strong> across the plain.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Tricky Pronouns</div>
                <p>Everyone <strong>wants</strong> to succeed.<br>
                Something <strong>smells</strong> delicious.<br>
                Nobody <strong>knows</strong> the answer.<br>
                Each <strong>brings</strong> their own lunch.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gavel"></i> Either/Neither</div>
                <p>Either option <strong>works</strong> for me.<br>
                Neither answer <strong>is</strong> correct.<br>
                Neither of the boys <strong>likes</strong> broccoli.</p>
            </div>
        `,
        taskInstructions: "Practice using collective nouns and irregular subjects correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Collective Noun Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose the correct verb for each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The orchestra (play / plays) beautiful music.</div>
                        <div>b. The crowd (cheer / cheers) for their team.</div>
                        <div>c. My family (live / lives) in a small town.</div>
                        <div>d. The jury (reach / reaches) its verdict.</div>
                        <div>e. The band (perform / performs) every Friday night.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Indefinite Pronouns</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with the correct verb:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Everyone ________ (love / loves) a good story.</div>
                        <div>b. Someone ________ (have / has) taken my pencil.</div>
                        <div>c. Each of the runners ________ (need / needs) water.</div>
                        <div>d. Nobody ________ (want / wants) to be late.</div>
                        <div>e. Everything ________ (look / looks) beautiful today.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Either/Neither Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the blanks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Neither of the movies ________ (interest / interests) me.</div>
                        <div>b. Either path ________ (lead / leads) to the village.</div>
                        <div>c. Neither of the answers ________ (seem / seems) right.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write your own sentences using these words: team, everyone, neither, family:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences using collective nouns (team, family, class, crowd, audience) with correct verbs.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Error Correction: Finding and Fixing Agreement Mistakes",
        lessonContent: `
            <p>Today we'll become grammar detectives! We'll learn to find and fix subject-verb agreement errors in sentences and paragraphs.</p>
            <p><strong>Key Question:</strong> How can you spot a subject-verb agreement mistake?</p>
            <p><strong>Step 1: Find the Subject</strong></p>
            <ul>
                <li>Ask: Who or what is doing the action?</li>
                <li>The subject tells us what the sentence is about</li>
            </ul>
            <p><strong>Step 2: Find the Verb</strong></p>
            <ul>
                <li>Ask: What is the subject doing?</li>
                <li>The verb shows action or state of being</li>
            </ul>
            <p><strong>Step 3: Check if They Match</strong></p>
            <ul>
                <li>Is the subject singular? The verb should have -s (usually)</li>
                <li>Is the subject plural? The verb should NOT have -s</li>
                <li>Watch out for tricky cases (collective nouns, indefinite pronouns)</li>
            </ul>
            <p><strong>Common Mistakes to Look For:</strong></p>
            <ol>
                <li><strong>Interrupting phrases:</strong> "The box of chocolates (is/are) delicious." → "of chocolates" doesn't change that "box" is singular</li>
                <li><strong>Sentences starting with "There" or "Here":</strong> "There (is/are) five books on the shelf." → look at the subject after the verb</li>
                <li><strong>Compound subjects with "or" or "nor":</strong> The verb agrees with the subject closest to it</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Find the Error</div>
                <p>Incorrect: The dogs <span style="text-decoration: underline;">barks</span> at strangers.<br>
                Correct: The dogs <strong>bark</strong> at strangers.<br><br>
                Incorrect: Everyone <span style="text-decoration: underline;">are</span> excited for the party.<br>
                Correct: Everyone <strong>is</strong> excited for the party.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> Watch the Interrupters</div>
                <p>Incorrect: The basket of apples <span style="text-decoration: underline;">are</span> heavy.<br>
                Correct: The basket of apples <strong>is</strong> heavy. (basket is singular)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt"></i> There/Here Sentences</div>
                <p>Incorrect: There <span style="text-decoration: underline;">is</span> many reasons to study.<br>
                Correct: There <strong>are</strong> many reasons to study. (reasons is plural)</p>
            </div>
        `,
        taskInstructions: "Find and correct subject-verb agreement errors in sentences and a paragraph.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Spot the Error</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify and correct the error in each sentence. If correct, write "Correct":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The students studies for their test.</div>
                        <div>Correction: _________________</div>
                        <div style="margin-top: 10px;">b. My mother cook dinner every evening.</div>
                        <div>Correction: _________________</div>
                        <div style="margin-top: 10px;">c. The birds sings sweetly in the morning.</div>
                        <div>Correction: _________________</div>
                        <div style="margin-top: 10px;">d. She walks to the park every day.</div>
                        <div>Correction: _________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Paragraph Editing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find and correct the 6 subject-verb agreement errors in this paragraph:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
                        <p>Every morning, my family wake up early. My brother brush his teeth while my sister get dressed. The dogs barks loudly for breakfast. Everyone love the smell of pancakes. Neither of my parents drink coffee. There is many things to do before school starts.</p>
                    </div>
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Interrupting Phrases</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Choose the correct verb:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The bowl of cookies (is / are) empty.</div>
                        <div>b. The collection of stamps (value / values) time.</div>
                        <div>c. A pack of wolves (was / were) spotted nearby.</div>
                        <div>d. The list of items (need / needs) to be checked.</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write a short paragraph (5-6 sentences) about your morning routine. Then check it for subject-verb agreement errors and fix any you find.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Sentence Building: Matching Subjects to Correct Verb Forms",
        lessonContent: `
            <p>Today we'll practice building sentences by matching subjects with the correct verb forms. You'll learn to create grammatically correct sentences from scratch!</p>
            <p><strong>Key Question:</strong> How do you choose the right verb for any subject?</p>
            <p><strong>Sentence Building Strategy:</strong></p>
            <ol>
                <li><strong>Start with your subject:</strong> Who or what is your sentence about?</li>
                <li><strong>Decide if it's singular or plural:</strong> One person/thing, or more than one?</li>
                <li><strong>Choose your verb form:</strong>
                    <ul>
                        <li>Singular → add -s or -es to most verbs</li>
                        <li>Plural → base form of the verb</li>
                    </ul>
                </li>
                <li><strong>Add the rest of the sentence:</strong> Where? When? Why? How?</li>
            </ol>
            <p><strong>Verb Tense Review:</strong></p>
            <ul>
                <li><strong>Present tense:</strong> Happening now (walks, run, is, are)</li>
                <li><strong>Past tense:</strong> Already happened (walked, ran, was, were)</li>
                <li><strong>Future tense:</strong> Will happen (will walk, will run)</li>
            </ul>
            <p><strong>Practice with Different Subjects:</strong></p>
            <ul>
                <li>I + verb (base form) → I play</li>
                <li>You + verb (base form) → You play</li>
                <li>He/She/It + verb + s → He plays</li>
                <li>We/They + verb (base form) → We play</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Build a Sentence</div>
                <p>Subject: The cat<br>
                Singular/Plural: Singular<br>
                Verb + s: sleeps<br>
                Complete sentence: The cat <strong>sleeps</strong> on the windowsill.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Change the Subject</div>
                <p>Singular → The boy <strong>runs</strong> fast.<br>
                Plural → The boys <strong>run</strong> fast.<br>
                Notice how the verb changes when the subject changes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Changing Tense</div>
                <p>Present: She <strong>walks</strong> to school.<br>
                Past: She <strong>walked</strong> to school.<br>
                Future: She <strong>will walk</strong> to school.</p>
            </div>
        `,
        taskInstructions: "Build sentences by matching subjects with correct verb forms.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Subject to the Verb</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw lines to match each subject with the correct verb form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>She ______</div>
                                <div>The dogs ______</div>
                                <div>Everyone ______</div>
                                <div>My parents ______</div>
                                <div>He ______</div>
                                <div>The bird ______</div>
                            </div>
                            <div>
                                <div>• likes</div>
                                <div>• like</div>
                                <div>• fly</div>
                                <div>• flies</div>
                                <div>• is</div>
                                <div>• are</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add a verb that agrees with the subject:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The children ______________ in the playground.</div>
                        <div>b. My father ______________ coffee every morning.</div>
                        <div>c. The moon ______________ brightly at night.</div>
                        <div>d. Those shoes ______________ too small for me.</div>
                        <div>e. Each student ______________ a homework assignment.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Building from Prompts</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create complete sentences using the given subjects and verbs:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Subject: The teacher / Verb: explain</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">b. Subject: The flowers / Verb: bloom</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">c. Subject: Nobody / Verb: know</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 3 original sentences, each using a different subject type (singular, plural, collective noun):
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Write 8 sentences about your favorite hobby. Use a variety of subjects (I, you, he/she, we, they) and make sure each verb agrees with its subject.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Final Review: Comprehensive Subject-Verb Agreement Test",
        lessonContent: `
            <p>Today we'll review everything we've learned about subject-verb agreement this week and put our skills to the test!</p>
            <p><strong>Week 10 Review:</strong></p>
            <ol>
                <li><strong>Basic Rules:</strong> Singular subjects need verbs with -s; plural subjects need base verbs</li>
                <li><strong>Collective Nouns:</strong> Usually singular (team, family, class)</li>
                <li><strong>Indefinite Pronouns:</strong> Always singular (everyone, someone, nobody, each)</li>
                <li><strong>Either/Neither:</strong> Usually singular</li>
                <li><strong>Interrupting Phrases:</strong> Don't let them fool you - find the true subject</li>
                <li><strong>There/Here Sentences:</strong> Look for the subject after the verb</li>
            </ol>
            <p><strong>Key Reminders:</strong></p>
            <ul>
                <li>Always find the subject first</li>
                <li>Decide if it's singular or plural</li>
                <li>Choose the verb that matches</li>
                <li>Watch out for tricky sentences!</li>
            </ul>
            <p><strong>Test Tips:</strong></p>
            <ul>
                <li>Read each sentence carefully</li>
                <li>Cross out interrupting phrases to find the real subject</li>
                <li>Check collective nouns and indefinite pronouns</li>
                <li>Double-check your answers when you finish</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Quick Review Examples</div>
                <p>✓ The dog <strong>barks</strong> at night.<br>
                ✓ The dogs <strong>bark</strong> at night.<br>
                ✓ The team <strong>celebrates</strong> its victory.<br>
                ✓ Everyone <strong>enjoys</strong> a good movie.<br>
                ✓ Neither option <strong>seems</strong> fair.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Tricky Cases to Remember</div>
                <p>• The box of chocolates <strong>is</strong> empty. (not "are")<br>
                • There <strong>are</strong> three reasons to go. (not "is")<br>
                • Each of the students <strong>has</strong> a book. (not "have")</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy"></i> Success Criteria</div>
                <p>By the end of today, you should be able to:<br>
                - Identify subject-verb agreement errors<br>
                - Correct errors in any sentence<br>
                - Write sentences with correct agreement<br>
                - Apply all rules confidently</p>
            </div>
        `,
        taskInstructions: "Complete the comprehensive subject-verb agreement test.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Multiple Choice (10 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the correct verb for each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The cat (sleep / sleeps) on the chair.</div>
                        <div>b. My friends (want / wants) to go to the movies.</div>
                        <div>c. Everyone (is / are) here for the party.</div>
                        <div>d. Neither of the answers (seem / seems) correct.</div>
                        <div>e. The basket of apples (was / were) heavy.</div>
                        <div>f. There (is / are) many fish in the pond.</div>
                        <div>g. The orchestra (play / plays) beautifully.</div>
                        <div>h. Each of the boys (have / has) a turn.</div>
                        <div>i. The dog and the cat (is / are) playing together.</div>
                        <div>j. Nobody (know / knows) the secret.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Error Correction (10 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Each sentence has ONE error. Rewrite the sentence correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The students was excited for the field trip.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">b. My sister make delicious cookies.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">c. The family are going on vacation tomorrow.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">d. There is three books on my desk.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">e. Everyone have a pencil for the test.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blank (10 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each sentence with the correct form of the verb in parentheses:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The birds __________ (fly) south every winter.</div>
                        <div>b. She __________ (study) for two hours each night.</div>
                        <div>c. The team __________ (practice) every afternoon.</div>
                        <div>d. Neither of the options __________ (appeal) to me.</div>
                        <div>e. The collection of stamps __________ (be) valuable.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Paragraph Correction (10 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find and correct the 8 errors in this paragraph:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
                        <p>Every Saturday, my family go to the farmers market. My mother buy fresh vegetables while my father look for honey. The children runs around the stalls. Everyone love the smell of baked bread. Neither of my brothers want to leave early. There is so many interesting things to see. The basket of peaches are my favorite. The musicians plays lively music for everyone.</p>
                    </div>
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What subject-verb agreement rule do you find most challenging? How will you remember it?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a study guide or poster about subject-verb agreement rules. Include: basic rules, collective nouns, indefinite pronouns, and tricky cases with examples.",
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