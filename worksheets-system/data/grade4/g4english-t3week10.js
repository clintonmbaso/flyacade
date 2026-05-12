// Grade 4 English - Term 3 Week 10 Data
const grade4EnglishWeek10 = {
    metadata: {
        grade: 4,
        subject: "English",
        term: 3,
        week: 10,
        title: "Subject-Verb Agreement (Plural and Review)",
        description: "Learning how plural subjects work with verbs, including plural linking verbs are/were, and mastering subject-verb agreement rules"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Plural Subjects and Verbs",
        lessonContent: `
            <p>Welcome to our grammar lesson! Today we'll learn about how plural subjects work with verbs.</p>
            <p><strong>Key Question:</strong> When do we add "s" to a verb, and when do we leave it off?</p>
            <p><strong>Introduction:</strong> In English, singular and plural subjects use different verb forms. Remember: <strong>Plural subjects use the base form of the verb (no "s")</strong>.</p>
            <p><strong>The Rule:</strong></p>
            <ul>
                <li><strong>Singular subject</strong> (one person/thing) → verb usually ends with <strong>"s"</strong></li>
                <li><strong>Plural subject</strong> (more than one) → verb uses the <strong>base form (no "s")</strong></li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ol>
                <li><strong>The dog barks.</strong> (Singular: dog → barks)</li>
                <li><strong>The dogs bark.</strong> (Plural: dogs → bark - no "s")</li>
                <li><strong>He runs fast.</strong> (Singular: He → runs)</li>
                <li><strong>They run fast.</strong> (Plural: They → run - no "s")</li>
                <li><strong>The bird jumps high.</strong> (Singular: bird → jumps)</li>
                <li><strong>The birds jump high.</strong> (Plural: birds → jump - no "s")</li>
            </ol>
            <p><strong>Remember:</strong> Don't add "s" to the verb when the subject is plural!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Dog vs. Dogs</div>
                <p><strong>The dog eats</strong> (one dog) vs. <strong>The dogs eat</strong> (many dogs). See how the verb loses the "s" when we add an "s" to the subject?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running"></i> Run, Jump, Eat</div>
                <p>Practice verbs: run, jump, eat<br>
                She <strong>runs</strong> every day. → They <strong>run</strong> every day.<br>
                He <strong>jumps</strong> high. → They <strong>jump</strong> high.<br>
                The cat <strong>eats</strong> fish. → The cats <strong>eat</strong> fish.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Easy Trick</div>
                <p>If the subject has an "s" at the end (plural), the verb usually <strong>does not</strong> have an "s". If the subject has no "s" (singular), the verb usually <strong>does</strong> have an "s"!</p>
            </div>
        `,
        taskInstructions: "Complete the practice activities to master plural subjects and verbs.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Compare and Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the chart by writing the correct verb form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Singular (add "s")</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Plural (no "s")</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">The dog barks.</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">The dogs _____.</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">She runs fast.</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">They _____ fast.</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">The bird jumps.</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">The birds _____.</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">He eats lunch.</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">They _____ lunch.</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">The child plays.</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">The children _____.</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Choose the Correct Verb</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the correct verb for each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The boy (run / runs) to school every day.</div>
                        <div>B. The boys (run / runs) to school every day.</div>
                        <div>C. My cat (sleep / sleeps) on the couch.</div>
                        <div>D. My cats (sleep / sleeps) on the couch.</div>
                        <div>E. The flower (grow / grows) in the sun.</div>
                        <div>F. The flowers (grow / grows) in the sun.</div>
                        <div>G. She (dance / dances) beautifully.</div>
                        <div>H. They (dance / dances) beautifully.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write two sentences for each verb - one with a singular subject and one with a plural subject:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Run:</strong></div>
                        <div>Singular: _________________________________</div>
                        <div>Plural: _________________________________</div>
                        <div style="margin-top: 10px;"><strong>Jump:</strong></div>
                        <div>Singular: _________________________________</div>
                        <div>Plural: _________________________________</div>
                        <div style="margin-top: 10px;"><strong>Eat:</strong></div>
                        <div>Singular: _________________________________</div>
                        <div>Plural: _________________________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 sentences in a book where a plural subject is used with a verb. Write them down and underline the verb.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Plural Linking Verbs (Are/Were)",
        lessonContent: `
            <p>Today we'll learn about linking verbs! Specifically, how to use "are" and "were" with plural subjects.</p>
            <p><strong>Key Question:</strong> When do we use "are" and "were" instead of "is" and "was"?</p>
            <p><strong>Introduction:</strong> Linking verbs connect the subject to information about the subject. The most common linking verbs are forms of "to be": <strong>am, is, are, was, were</strong>.</p>
            <p><strong>The Rule:</strong></p>
            <ul>
                <li><strong>Singular subjects</strong> use <strong>is</strong> (present) or <strong>was</strong> (past)</li>
                <li><strong>Plural subjects</strong> use <strong>are</strong> (present) or <strong>were</strong> (past)</li>
            </ul>
            <p><strong>Examples - Present Tense:</strong></p>
            <ol>
                <li><strong>The student is</strong> ready. (singular)</li>
                <li><strong>The students are</strong> ready. (plural)</li>
                <li><strong>The tree is</strong> tall. (singular)</li>
                <li><strong>The trees are</strong> tall. (plural)</li>
            </ol>
            <p><strong>Examples - Past Tense:</strong></p>
            <ol>
                <li><strong>The bird was</strong> singing. (singular)</li>
                <li><strong>The birds were</strong> singing. (plural)</li>
                <li><strong>He was</strong> happy. (singular)</li>
                <li><strong>They were</strong> happy. (plural)</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Student Examples</div>
                <p><strong>The student is</strong> in class. → <strong>The students are</strong> in class.<br>
                <strong>The student was</strong> late. → <strong>The students were</strong> late.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Tree Examples</div>
                <p><strong>The tree is</strong> green. → <strong>The trees are</strong> green.<br>
                <strong>The tree was</strong> planted yesterday. → <strong>The trees were</strong> planted yesterday.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-feather-alt"></i> Bird Examples</div>
                <p><strong>The bird is</strong> flying. → <strong>The birds are</strong> flying.<br>
                <strong>The bird was</strong> in its nest. → <strong>The birds were</strong> in their nests.</p>
            </div>
        `,
        taskInstructions: "Complete the fill-in-the-blank activities using 'are' and 'were' with plural subjects.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fill in the Blanks with "Are" or "Were" (Present vs. Past)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete each sentence with <strong>are</strong> or <strong>were</strong>:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The students _____ ready for the test today.</div>
                        <div>B. The trees _____ very tall last summer.</div>
                        <div>C. The birds _____ singing outside my window right now.</div>
                        <div>D. The cookies _____ delicious yesterday.</div>
                        <div>E. My friends _____ coming to my party this weekend.</div>
                        <div>F. The toys _____ all over the floor this morning.</div>
                        <div>G. The flowers _____ blooming beautifully.</div>
                        <div>H. The children _____ playing in the park yesterday.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Singular vs. Plural - Choose the Correct Verb</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the correct linking verb:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The student (is / are) working hard.</div>
                        <div>B. The students (is / are) working hard.</div>
                        <div>C. The cat (was / were) sleeping on the bed.</div>
                        <div>D. The cats (was / were) sleeping on the bed.</div>
                        <div>E. The teacher (is / are) very kind.</div>
                        <div>F. The teachers (is / are) very kind.</div>
                        <div>G. The ball (was / were) lost.</div>
                        <div>H. The balls (was / were) lost.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Rewriting</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Rewrite each sentence changing the singular subject to plural. Change the verb too!
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: <strong>The bird is</strong> on the branch. → <strong>The birds are</strong> on the branch.</div>
                        <div style="margin-top: 10px;">A. The flower was beautiful. → _________________________________</div>
                        <div>B. The child is playing outside. → _________________________________</div>
                        <div>C. The car was very fast. → _________________________________</div>
                        <div>D. The book is on the shelf. → _________________________________</div>
                        <div>E. The animal was hungry. → _________________________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences using 'are' and 5 sentences using 'were' with plural subjects (students, birds, trees, etc.).",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Subject-Verb Agreement Mastery",
        lessonContent: `
            <p>Congratulations! Today we'll put everything together and master subject-verb agreement!</p>
            <p><strong>Key Question:</strong> Can I correctly match any subject with the right verb form?</p>
            <p><strong>Review - The Rules:</strong></p>
            <ul>
                <li><strong>Singular subjects</strong> (he, she, it, dog, bird, student) → verb usually ends with <strong>"s"</strong></li>
                <li><strong>Plural subjects</strong> (they, dogs, birds, students) → verb uses <strong>base form (no "s")</strong></li>
                <li><strong>Linking verbs:</strong> Singular uses <strong>is/was</strong>; Plural uses <strong>are/were</strong></li>
            </ul>
            <p><strong>Mixed Examples:</strong></p>
            <ol>
                <li><strong>The cat sleeps</strong> on the mat. (singular)</li>
                <li><strong>The cats sleep</strong> on the mat. (plural)</li>
                <li><strong>She is</strong> a good singer. (singular linking)</li>
                <li><strong>They are</strong> good singers. (plural linking)</li>
                <li><strong>He was</strong> at the park. (singular past)</li>
                <li><strong>They were</strong> at the park. (plural past)</li>
            </ol>
            <p><strong>Final Tip:</strong> Always find the subject first, then decide if it's singular or plural. That tells you which verb to use!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Quick Check</div>
                <p>✅ The boy runs fast. (singular)<br>
                ✅ The boys run fast. (plural)<br>
                ✅ She is happy. (singular)<br>
                ✅ They are happy. (plural)<br>
                ✅ He was late. (singular past)<br>
                ✅ They were late. (plural past)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Common Mistakes</div>
                <p>❌ The dogs barks. (Wrong! Dogs is plural, so verb should be bark)<br>
                ✅ The dogs bark.<br>
                ❌ The bird are flying. (Wrong! Bird is singular, so verb should be is)<br>
                ✅ The bird is flying.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Final Strategy</div>
                <p>Step 1: Find the subject.<br>
                Step 2: Is it singular or plural?<br>
                Step 3: Choose the correct verb form.</p>
            </div>
        `,
        taskInstructions: "Complete the final review challenge by fixing subject-verb agreement errors.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Error Detection and Correction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Each sentence has ONE error. Rewrite the sentence correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The dogs barks loudly at night.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">B. The bird are building a nest.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">C. The students was ready for the test.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">D. My cat sleep all day long.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">E. The trees is very tall.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">F. She run to school every morning.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">G. The birds was singing beautifully.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">H. The cookies is fresh from the oven.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Mixed Practice - Choose the Correct Verb</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the correct verb in each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The teacher (explain / explains) the lesson clearly.</div>
                        <div>B. The students (listen / listens) carefully.</div>
                        <div>C. The sun (shine / shines) brightly today.</div>
                        <div>D. The clouds (is / are) moving fast.</div>
                        <div>E. My friend (was / were) absent yesterday.</div>
                        <div>F. My friends (was / were) absent yesterday.</div>
                        <div>G. The baby (cry / cries) when hungry.</div>
                        <div>H. The babies (cry / cries) when hungry.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Final Challenge - Write Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write your own sentences following these instructions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Write a sentence with a singular subject using "run/runs":</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div style="margin-top: 10px;">B. Write a sentence with a plural subject using "jump/jumps":</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div style="margin-top: 10px;">C. Write a sentence with a singular subject using "is/are":</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div style="margin-top: 10px;">D. Write a sentence with a plural subject using "was/were":</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Self-Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is the most important thing you learned about subject-verb agreement this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write a short paragraph (5-7 sentences) about your weekend plans or a family activity. Use at least 3 singular subjects and 3 plural subjects with correct verbs. Underline each subject and circle each verb.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4EnglishWeek10);
    console.log("grade4-english-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4EnglishWeek10);
    console.log("grade4-english-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4EnglishWeek10',
        metadata: grade4EnglishWeek10.metadata,
        days: grade4EnglishWeek10
    });
    console.log("grade4-english-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4EnglishWeek10 = grade4EnglishWeek10;
console.log("grade4-english-week10.js loaded and registered successfully");