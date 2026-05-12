// Grade 4 English - Term 3 Week 9 Data
const grade4EnglishWeek9 = {
    metadata: {
        grade: 4,
        subject: "English",
        term: 3,
        week: 9,
        title: "Subject-Verb Agreement (Singular)",
        description: "Learning that singular subjects need verbs ending in -s or -es, and matching singular subjects with correct linking verbs"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Lesson 43 – Singular Subjects",
        lessonContent: `
            <p>Welcome to our grammar lesson! Today we'll learn about subject-verb agreement with singular subjects.</p>
            <p><strong>Key Question:</strong> When do we add "-s" or "-es" to a verb?</p>
            <p><strong>Introduction:</strong> In English, singular subjects (one person, animal, or thing) usually need a verb that ends with "-s" or "-es." This is called subject-verb agreement.</p>
            <p><strong>The Rule:</strong></p>
            <ul>
                <li><strong>Singular subject = verb + s or es</strong></li>
                <li>He, she, it, and singular nouns (the dog, a girl, my mom) need verbs with "-s" or "-es"</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>The dog barks. (not "bark")</li>
                <li>The girl runs. (not "run")</li>
                <li>He eats lunch. (not "eat")</li>
                <li>She watches TV. (not "watch" - add "es")</li>
                <li>It jumps high. (not "jump")</li>
            </ul>
            <p><strong>When to add "-es" instead of "-s":</strong></p>
            <ul>
                <li>Verbs ending in ch, sh, ss, x, or o → add "es"</li>
                <li>Examples: watch → watches, brush → brushes, kiss → kisses, fix → fixes, go → goes</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Example 1</div>
                <p>The dog barks loudly every morning. (One dog = singular = barks)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-futbol"></i> Example 2</div>
                <p>The boy plays soccer after school. (One boy = singular = plays)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tv"></i> Example 3</div>
                <p>My sister watches cartoons. (One sister = singular = watches - add "es")</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bus"></i> Example 4</div>
                <p>The bus goes to town. (One bus = singular = goes - add "es")</p>
            </div>
        `,
        taskInstructions: "Match singular subjects to their correct verbs and complete sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Matching Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line to match each singular subject with the correct verb:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• The cat ___</div>
                                <div>• My father ___</div>
                                <div>• She ___</div>
                                <div>• The bird ___</div>
                                <div>• He ___</div>
                                <div>• The baby ___</div>
                            </div>
                            <div>
                                <div>→ sleeps</div>
                                <div>→ cooks</div>
                                <div>→ flies</div>
                                <div>→ runs</div>
                                <div>→ sings</div>
                                <div>→ writes</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Choose the Correct Verb</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the correct verb in each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The dog (bark / barks) at strangers.</div>
                        <div>B. My mom (cook / cooks) dinner every night.</div>
                        <div>C. He (run / runs) very fast.</div>
                        <div>D. The sun (shine / shines) brightly.</div>
                        <div>E. She (brush / brushes) her teeth twice a day.</div>
                        <div>F. The clock (tick / ticks) loudly.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each sentence with the correct form of the verb in parentheses:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The elephant ___________ water. (drink)</div>
                        <div>B. My teacher ___________ us stories. (tell)</div>
                        <div>C. The flower ___________ beautiful. (look)</div>
                        <div>D. He ___________ his bicycle to school. (ride)</div>
                        <div>E. The phone ___________ often. (ring - add "s" rule?)</div>
                        <div>F. She ___________ her homework carefully. (do - add "es"?)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write two sentences with singular subjects and verbs ending in "-s" or "-es":
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 sentences in a book where a singular subject is used with a verb ending in -s or -es. Write them in your notebook.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Lesson 44 – The 'Is' and 'Was' Rule",
        lessonContent: `
            <p>Today we'll learn about linking verbs! We'll focus on matching singular subjects with "is" and "was."</p>
            <p><strong>Key Question:</strong> When do we use "is" vs. "was"?</p>
            <p><strong>Introduction:</strong> "Is" and "was" are linking verbs. They connect the subject to information about the subject. Both are used with singular subjects!</p>
            <p><strong>The Rule:</strong></p>
            <ul>
                <li><strong>Is</strong> = present tense (happening now)</li>
                <li><strong>Was</strong> = past tense (already happened)</li>
                <li>Use both with singular subjects: he, she, it, or one person/thing</li>
            </ul>
            <p><strong>Examples with "is" (present):</strong></p>
            <ul>
                <li>The teacher is in the classroom. (right now)</li>
                <li>She is happy today.</li>
                <li>The cat is sleeping on the couch.</li>
            </ul>
            <p><strong>Examples with "was" (past):</strong></p>
            <ul>
                <li>The teacher was in the classroom yesterday. (already happened)</li>
                <li>She was tired after the game.</li>
                <li>The cat was sleeping when I left.</li>
            </ul>
            <p><strong>Quick Tip:</strong> If it's happening now → use "is". If it already happened → use "was".</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Present vs. Past</div>
                <p><strong>Present:</strong> The boy is playing outside NOW.<br>
                <strong>Past:</strong> The boy was playing outside YESTERDAY.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Example with "is"</div>
                <p>The apple is red. (Describing the apple right now)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-rain"></i> Example with "was"</div>
                <p>The weather was cold last week. (Talking about the past)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> More Practice</div>
                <p>My sister is a doctor. (Present fact)<br>
                My sister was a student. (Past fact)</p>
            </div>
        `,
        taskInstructions: "Complete sentences using 'is' or 'was' correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Choose 'Is' or 'Was'</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the blank with "is" or "was":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The teacher ___________ in the classroom right now.</div>
                        <div>B. My grandmother ___________ a nurse many years ago.</div>
                        <div>C. The sky ___________ blue today.</div>
                        <div>D. It ___________ raining yesterday morning.</div>
                        <div>E. He ___________ my best friend.</div>
                        <div>F. The movie ___________ very exciting last night.</div>
                        <div>G. The pencil ___________ on the desk.</div>
                        <div>H. She ___________ at the park an hour ago.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with "is" or "was":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The library ___________ closed on Sundays.</div>
                        <div>B. My lunch ___________ delicious today.</div>
                        <div>C. The concert ___________ amazing! (It ended an hour ago)</div>
                        <div>D. This book ___________ very interesting.</div>
                        <div>E. There ___________ a big storm last night.</div>
                        <div>F. The homework ___________ easy for me.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Rewrite</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Change each sentence from present to past by changing "is" to "was":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The cat is hungry. → _________________</div>
                        <div>B. She is at school. → _________________</div>
                        <div>C. The water is cold. → _________________</div>
                        <div>D. He is a good singer. → _________________</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write one sentence using "is" and one sentence using "was":
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences about things that are happening today (use 'is') and 5 sentences about things that happened yesterday (use 'was').",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Lesson 45 – Practice with Singular Subjects",
        lessonContent: `
            <p>Today we'll practice everything we've learned about singular subjects and subject-verb agreement!</p>
            <p><strong>Key Question:</strong> Can we remember the "-s" ending rule for present tense verbs?</p>
            <p><strong>Let's Review the Rules:</strong></p>
            <ul>
                <li>Singular subjects (he, she, it, one person, one animal, one thing) need verbs with "-s" or "-es" in present tense</li>
                <li>Use "is" for present tense linking verbs with singular subjects</li>
                <li>Use "was" for past tense linking verbs with singular subjects</li>
            </ul>
            <p><strong>Remember:</strong></p>
            <ul>
                <li>I, you, we, they → NO "s" on the verb (I run, you run, we run, they run)</li>
                <li>He, she, it, singular nouns → ADD "s" or "es" (He runs, she runs, it runs, the dog runs)</li>
            </ul>
            <p><strong>Common Mistakes to Avoid:</strong></p>
            <ul>
                <li>❌ She run fast. → ✅ She runs fast.</li>
                <li>❌ The bird fly. → ✅ The bird flies.</li>
                <li>❌ He go to school. → ✅ He goes to school.</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-futbol"></i> Example 1 - Hobby Sentence</div>
                <p>He plays football every Saturday.<br>(He = singular, plays = verb + s)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-brush"></i> Example 2 - Hobby Sentence</div>
                <p>My friend paints pictures of animals.<br>(My friend = singular, paints = verb + s)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Example 3 - Hobby Sentence</div>
                <p>She reads mystery books before bed.<br>(She = singular, reads = verb + s)</p>
            </div>
        `,
        taskInstructions: "Practice subject-verb agreement and write sentences about a friend's hobby.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fix the Mistakes</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Each sentence has a mistake. Rewrite the sentence correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The boy run to school every day.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>B. My cat sleep on my bed.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>C. She watch TV in the evening.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>D. The bird sing a beautiful song.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>E. He go to the park on weekends.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>F. The baby cry loudly at night.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Choose the Correct Verb</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the correct verb in each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. My brother (like / likes) to play video games.</div>
                        <div>B. The dog (bark / barks) when someone knocks.</div>
                        <div>C. She (dance / dances) beautifully.</div>
                        <div>D. The flower (smell / smells) sweet.</div>
                        <div>E. He (study / studies) every night. (y → ies rule!)</div>
                        <div>F. The car (need / needs) gas.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write About a Friend's Hobby</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write THREE sentences about a friend's hobby. Remember: singular subject = verb + s or es!
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>My friend's name:</strong> _________________</div>
                        <div><strong>My friend's hobby:</strong> _________________</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;">
                        <p><strong>Sentence 1:</strong> _________________________________</p>
                        <p><strong>Sentence 2:</strong> _________________________________</p>
                        <p><strong>Sentence 3:</strong> _________________________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Quick Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Fill in the blanks with the correct verb form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. He ___________ (eat / eats) breakfast at 7 AM.</div>
                        <div>B. The sun ___________ (rise / rises) in the east.</div>
                        <div>C. She ___________ (wash / washes) her hands before dinner.</div>
                        <div>D. My dad ___________ (fix / fixes) things around the house.</div>
                        <div>E. The teacher ___________ (is / was) in the classroom yesterday.</div>
                        <div>F. It ___________ (is / was) raining right now.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What is the most important rule you learned about singular subjects and verbs?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Write a short paragraph (4-5 sentences) about what your best friend likes to do. Use singular subjects with verbs ending in -s or -es. Example: 'My best friend plays soccer. He also reads comic books.'",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4EnglishWeek9);
    console.log("grade4-english-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4EnglishWeek9);
    console.log("grade4-english-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4EnglishWeek9',
        metadata: grade4EnglishWeek9.metadata,
        days: grade4EnglishWeek9
    });
    console.log("grade4-english-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4EnglishWeek9 = grade4EnglishWeek9;
console.log("grade4-english-week9.js loaded and registered successfully");