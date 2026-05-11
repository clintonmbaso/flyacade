// Grade 6 English - Term 3 Week 7 Data
const grade6EnglishWeek7 = {
    metadata: {
        grade: 6,
        subject: "English",
        term: 3,
        week: 7,
        title: "Adverbs of Frequency",
        description: "Using 'always', 'often', 'rarely', and other frequency adverbs correctly in context"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Frequency Adverbs: Mapping 'always' to 'never' on a scale",
        lessonContent: `
            <p>Welcome to our study of adverbs of frequency! Today we'll learn how to show how often something happens using a scale from always to never.</p>
            <p><strong>Key Question:</strong> How can we show exactly how often something happens?</p>
            <p><strong>Introduction:</strong> Adverbs of frequency tell us HOW OFTEN an action happens. They help us be more precise in our speaking and writing.</p>
            <p><strong>The Frequency Scale (100% to 0%):</strong></p>
            <ol>
                <li><strong>always</strong> (100%) - happens every time</li>
                <li><strong>usually</strong> (90%) - happens most of the time</li>
                <li><strong>often</strong> (70%) - happens many times</li>
                <li><strong>sometimes</strong> (50%) - happens occasionally</li>
                <li><strong>rarely</strong> (20%) - happens almost never</li>
                <li><strong>hardly ever</strong> (10%) - happens very seldom</li>
                <li><strong>never</strong> (0%) - does not happen at all</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>I <strong>always</strong> brush my teeth before bed. (100% of the time)</li>
                <li>She <strong>often</strong> helps her mother cook dinner. (many times)</li>
                <li>He <strong>rarely</strong> eats junk food. (almost never)</li>
                <li>They <strong>never</strong> arrive late to class. (0% of the time)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> The Percentage Scale</div>
                <p>Think of frequency adverbs like a percentage scale: always = 100%, often = 70%, rarely = 20%, never = 0%. The higher the percentage, the more often the action happens.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-week"></i> Weekly Schedule</div>
                <p>If you go to school Monday through Friday, you always go to school on weekdays. If you go to the park once a week, you often go to the park. If you go swimming once a month, you rarely go swimming.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Opposite Pairs</div>
                <p>Always is the opposite of never. Often is the opposite of rarely. Sometimes is in the middle!</p>
            </div>
        `,
        taskInstructions: "Place frequency adverbs on a scale and use them in sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Label the Frequency Scale</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the correct adverb of frequency on each line (always, usually, often, sometimes, rarely, never):
                    <div style="margin: 15px 0;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span>______</span><span>______</span><span>______</span><span>______</span><span>______</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Choose the Correct Adverb</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the blank with the best frequency adverb:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. The sun ________ rises in the east. (always / rarely / never)</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b. I ________ eat vegetables because I don't like them. (always / often / rarely)</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c. She ________ helps her little brother with homework. (always / never / sometimes - choose the best fit)</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>d. Penguins ________ live in the desert. (always / often / never)</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write one sentence for each adverb:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>always: <span class="answer-space" style="display: inline-block; width: 250px; border-bottom: 1px dotted #000;"></span></div>
                        <div style="margin-top: 10px;">often: <span class="answer-space" style="display: inline-block; width: 250px; border-bottom: 1px dotted #000;"></span></div>
                        <div style="margin-top: 10px;">rarely: <span class="answer-space" style="display: inline-block; width: 250px; border-bottom: 1px dotted #000;"></span></div>
                        <div style="margin-top: 10px;">never: <span class="answer-space" style="display: inline-block; width: 250px; border-bottom: 1px dotted #000;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences about your weekly routine using 5 different adverbs of frequency (always, usually, often, sometimes, rarely, never).",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Sentence placement: Where to put 'often' and 'rarely' in a sentence",
        lessonContent: `
            <p>Today we'll learn the correct position of adverbs of frequency like 'often' and 'rarely' in sentences!</p>
            <p><strong>Key Question:</strong> Where do we place 'often' and 'rarely' in a sentence?</p>
            <p><strong>The Golden Rule:</strong> Adverbs of frequency usually go BEFORE the main verb, but AFTER the verb 'to be' (am, is, are, was, were).</p>
            <p><strong>Rule 1: Before the main verb</strong></p>
            <ul>
                <li>I <strong>often</strong> walk to school.</li>
                <li>She <strong>rarely</strong> eats meat.</li>
                <li>They <strong>often</strong> play football after class.</li>
                <li>He <strong>rarely</strong> watches television.</li>
            </ul>
            <p><strong>Rule 2: After the verb 'to be' (am, is, are, was, were)</strong></p>
            <ul>
                <li>I <strong>am often</strong> tired after exercise.</li>
                <li>She <strong>is rarely</strong> late for school.</li>
                <li>They <strong>are often</strong> happy when playing games.</li>
                <li>He <strong>was rarely</strong> absent last term.</li>
            </ul>
            <p><strong>Rule 3: In questions, after the subject</strong></p>
            <ul>
                <li>Do you <strong>often</strong> visit your grandmother?</li>
                <li>Does she <strong>rarely</strong> eat breakfast?</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map-pin"></i> Before the Main Verb</div>
                <p>"I often ride my bike" - often comes BEFORE the main verb (ride). "He rarely speaks in class" - rarely comes BEFORE speaks.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thumbtack"></i> After 'To Be'</div>
                <p>"We are often hungry after school" - often comes AFTER are (the verb to be). "She is rarely sad" - rarely comes AFTER is.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Question Formation</div>
                <p>In questions: "How often do you exercise?" The adverb often comes AFTER the subject (you).</p>
            </div>
        `,
        taskInstructions: "Place 'often' and 'rarely' correctly in sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Insert 'often' in the Correct Position</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Rewrite each sentence with 'often' in the correct place:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. I visit my grandparents on weekends.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. She is happy when she reads books.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c. Do you go to the cinema?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>d. We play board games as a family.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Insert 'rarely' in the Correct Position</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Rewrite each sentence with 'rarely' in the correct place:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. They eat fast food.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. He is angry with his friends.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c. Does she complain about homework?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>d. We see tigers in the wild.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Correct or Incorrect?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Mark each sentence as Correct (C) or Incorrect (I). If incorrect, rewrite correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. She often is kind to animals. ___</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. They rarely miss school. ___</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c. He is rarely bored in class. ___</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>d. I eat often breakfast. ___</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences about your family members using 'often' and 5 sentences using 'rarely' in the correct position.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Writing",
        subtopic: "Daily Routine: Writing about habits using frequency adverbs",
        lessonContent: `
            <p>Today we'll use adverbs of frequency to write about our daily routines and habits!</p>
            <p><strong>Key Question:</strong> How can frequency adverbs help us describe our daily lives more clearly?</p>
            <p><strong>Writing About Routines:</strong> When we describe what we do every day, we can use frequency adverbs to show how often each activity happens.</p>
            <p><strong>Example Daily Routine Paragraph:</strong></p>
            <div class="example-box" style="background-color: #f0f8ff;">
                <p><em>"I <strong>always</strong> wake up at 6:00 AM. I <strong>often</strong> eat cereal for breakfast. I <strong>rarely</strong> take the bus to school because I prefer walking. I <strong>never</strong> forget my homework. In the evenings, I <strong>usually</strong> do my homework before dinner. I <strong>sometimes</strong> watch TV after finishing my chores."</em></p>
            </div>
            <p><strong>Useful Vocabulary for Routines:</strong></p>
            <ul>
                <li>Morning: wake up, get dressed, eat breakfast, brush teeth</li>
                <li>School: go to class, study, eat lunch, play with friends</li>
                <li>Afternoon: do homework, help with chores, play sports</li>
                <li>Evening: eat dinner, take a bath, read, go to sleep</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Morning Routine Example</div>
                <p>"I always make my bed. I often eat toast for breakfast. I rarely forget to pack my lunch. I never leave my room messy."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> School Day Example</div>
                <p>"I usually arrive at school by 8 AM. I often raise my hand to answer questions. I rarely talk during lessons. I never cheat on tests."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> Evening Routine Example</div>
                <p>"I always finish my homework before dinner. I often read for 30 minutes before bed. I rarely stay up past 9 PM."</p>
            </div>
        `,
        taskInstructions: "Write about your daily routine using frequency adverbs.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Brainstorm Your Routine</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List 8 things you do in a typical day. Next to each, write how often you do it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>Activity: _________</div>
                                <div>Frequency: _________</div>
                            </div>
                            <div>
                                <div>Activity: _________</div>
                                <div>Frequency: _________</div>
                            </div>
                            <div>
                                <div>Activity: _________</div>
                                <div>Frequency: _________</div>
                            </div>
                            <div>
                                <div>Activity: _________</div>
                                <div>Frequency: _________</div>
                            </div>
                            <div>
                                <div>Activity: _________</div>
                                <div>Frequency: _________</div>
                            </div>
                            <div>
                                <div>Activity: _________</div>
                                <div>Frequency: _________</div>
                            </div>
                            <div>
                                <div>Activity: _________</div>
                                <div>Frequency: _________</div>
                            </div>
                            <div>
                                <div>Activity: _________</div>
                                <div>Frequency: _________</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write a Paragraph About Your Daily Routine</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write a paragraph (5-7 sentences) describing your daily routine. Use at least 5 different frequency adverbs:
                    <div class="writing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Highlight and Check</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Go back to your paragraph and underline all the frequency adverbs you used. List them here:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Write a paragraph about a family member's daily routine. Use at least 5 frequency adverbs (always, often, sometimes, rarely, never).",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Speaking & Listening",
        subtopic: "Interview: Asking classmates 'How often do you...?'",
        lessonContent: `
            <p>Today we'll practice speaking and listening by interviewing our classmates about their habits using 'How often do you...?'</p>
            <p><strong>Key Question:</strong> How can we ask about someone's habits and respond using frequency adverbs?</p>
            <p><strong>Question Pattern:</strong> How often + do/does + subject + verb?</p>
            <ul>
                <li>How often <strong>do you</strong> play video games?</li>
                <li>How often <strong>does she</strong> read books?</li>
                <li>How often <strong>do they</strong> visit the library?</li>
            </ul>
            <p><strong>Possible Answers:</strong></p>
            <ul>
                <li>I <strong>always</strong> play video games on weekends.</li>
                <li>She <strong>often</strong> reads before bed.</li>
                <li>They <strong>rarely</strong> visit the library.</li>
                <li>I <strong>never</strong> eat spicy food.</li>
            </ul>
            <p><strong>Interview Questions You Can Ask:</strong></p>
            <ul>
                <li>How often do you do your homework?</li>
                <li>How often do you help with chores at home?</li>
                <li>How often do you eat fruit?</li>
                <li>How often do you exercise?</li>
                <li>How often do you watch TV?</li>
                <li>How often do you read for fun?</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microphone-alt"></i> Interview Dialogue 1</div>
                <p><strong>Student A:</strong> "How often do you do your homework?"<br>
                <strong>Student B:</strong> "I always do my homework right after school. How about you?"<br>
                <strong>Student A:</strong> "I often do it before dinner."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microphone-alt"></i> Interview Dialogue 2</div>
                <p><strong>Student A:</strong> "How often do you eat vegetables?"<br>
                <strong>Student B:</strong> "I rarely eat vegetables. I prefer fruits instead."<br>
                <strong>Student A:</strong> "I sometimes eat vegetables, but I should eat them more often!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Recording Answers</div>
                <p>As you interview classmates, write down their answers using full sentences with frequency adverbs.</p>
            </div>
        `,
        taskInstructions: "Interview classmates about their habits and record their answers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Prepare Your Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write 8 questions using "How often do you...?" to ask your classmates:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. How often do you _________?</div>
                        <div>b. How often do you _________?</div>
                        <div>c. How often do you _________?</div>
                        <div>d. How often do you _________?</div>
                        <div>e. How often do you _________?</div>
                        <div>f. How often do you _________?</div>
                        <div>g. How often do you _________?</div>
                        <div>h. How often do you _________?</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Interview Three Classmates</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Ask your questions and record their answers:
                    <div style="margin-top: 10px;">
                        <div style="background-color: #f5f5f5; padding: 10px; margin-bottom: 10px;">
                            <strong>Classmate 1 Name:</strong> ____________________<br>
                            <strong>Answers:</strong>
                            <div class="answer-space" style="height: 80px;"></div>
                        </div>
                        <div style="background-color: #f5f5f5; padding: 10px; margin-bottom: 10px;">
                            <strong>Classmate 2 Name:</strong> ____________________<br>
                            <strong>Answers:</strong>
                            <div class="answer-space" style="height: 80px;"></div>
                        </div>
                        <div style="background-color: #f5f5f5; padding: 10px;">
                            <strong>Classmate 3 Name:</strong> ____________________<br>
                            <strong>Answers:</strong>
                            <div class="answer-space" style="height: 80px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Class Summary</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write 3 interesting facts you learned about your classmates' habits:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Interview a family member using 'How often do you...?' questions. Write 5 questions and their answers using frequency adverbs.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Observation & Writing",
        subtopic: "Observation: Describing teacher/student actions with adverbs",
        lessonContent: `
            <p>Today we'll practice observing actions in the classroom and describing them using adverbs of frequency!</p>
            <p><strong>Key Question:</strong> How can we use frequency adverbs to describe what we observe in real time?</p>
            <p><strong>Observation Skills:</strong> Good writers are good observers. Today you'll watch what happens in your classroom and describe it using frequency adverbs.</p>
            <p><strong>What to Observe:</strong></p>
            <ul>
                <li>How often does the teacher write on the board?</li>
                <li>How often do students raise their hands?</li>
                <li>How often do students ask questions?</li>
                <li>How often does someone laugh?</li>
                <li>How often do students look at the clock?</li>
            </ul>
            <p><strong>Sentence Starters for Observations:</strong></p>
            <ul>
                <li>The teacher often...</li>
                <li>Students rarely...</li>
                <li>I notice that [name] always...</li>
                <li>Someone in class sometimes...</li>
                <li>Our class never...</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Teacher Observation</div>
                <p>"Our teacher always starts the lesson with a greeting. She often walks around the room to check our work. She rarely raises her voice. She never forgets to give us homework instructions."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Student Observation</div>
                <p>"The students in our class often raise their hands to answer questions. Some students rarely talk during group work. Maria always helps her neighbors. The class never leaves trash on the floor."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Classroom Routine</div>
                <p>"At the start of class, we always stand to greet the teacher. We often work in pairs. We rarely have outdoor lessons. We never start class without our books ready."</p>
            </div>
        `,
        taskInstructions: "Observe your classroom and write descriptive sentences using frequency adverbs.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Observe and Record</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For 10 minutes, observe what happens in your classroom. Record 6 observations:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div class="observation-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write Descriptive Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Turn your observations into full sentences using frequency adverbs:
                    <div class="writing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare and Reflect</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Compare your observations with a partner. What did you notice that was similar? What was different?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Write one sentence about yourself as a learner using a frequency adverb:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Write a paragraph describing your classroom environment. Include at least 6 frequency adverbs (always, often, usually, sometimes, rarely, never).",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6EnglishWeek7);
    console.log("grade6-english-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6EnglishWeek7);
    console.log("grade6-english-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6EnglishWeek7',
        metadata: grade6EnglishWeek7.metadata,
        days: grade6EnglishWeek7
    });
    console.log("grade6-english-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6EnglishWeek7 = grade6EnglishWeek7;
console.log("grade6-english-week7.js loaded and registered successfully");