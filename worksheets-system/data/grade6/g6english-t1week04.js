// Grade 6 English - Week 4 Data (Interrogative Verbs)
const grade6EnglishWeek4 = {
metadata: {
grade: 6,
subject: "English",
week: 4,
title: "Interrogative Verbs",
description: "Learning to identify, construct, and use interrogative verbs to form questions across various tenses and contexts"
},

    
    
monday: {
    subject: "English",
    topic: "Introduction to Interrogative Verbs",
    subtopic: "Understanding how interrogative verbs transform statements into questions",
    lessonContent: `
        <p>Welcome to our English lesson! Today we begin our study of interrogative verbs—the special verbs that help us ask questions.</p>
        <p><strong>Objective:</strong> Students will understand the function of interrogative verbs in forming questions.</p>
        <p><strong>Key Concept:</strong> Interrogative verbs are helping verbs that appear at the beginning of questions. They transform statements into questions and indicate the tense or mood of the inquiry.</p>
        <p><strong>Common Interrogative Verbs:</strong></p>
        <ul>
            <li><strong>Were</strong> – past tense plural: "Were you at the game yesterday?"</li>
            <li><strong>Did</strong> – past tense action: "Did you finish your homework?"</li>
            <li><strong>Does</strong> – present tense, third person: "Does she play the piano?"</li>
            <li><strong>Do</strong> – present tense: "Do they understand the directions?"</li>
            <li><strong>Is/Are/Am</strong> – present tense be-verbs: "Is this your backpack?"</li>
            <li><strong>Can</strong> – ability: "Can you speak another language?"</li>
            <li><strong>Have/Has</strong> – perfect tense: "Have you seen that movie?"</li>
        </ul>
        <p><strong>How to Transform Statements into Questions:</strong></p>
        <ul>
            <li>Statement: "You were late." → Question: "Were you late?"</li>
            <li>Statement: "She plays violin." → Question: "Does she play violin?"</li>
            <li>Statement: "They finished the race." → Question: "Did they finish the race?"</li>
        </ul>
        <p><strong>Why This Matters:</strong> Questions help us gather information, express curiosity, and engage in meaningful conversations. Mastering interrogative verbs makes you a better communicator!</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-question-circle" style="color: #4CAF50;"></i> Statement → Question Transformations</div>
            <table style="width: 100%; border-collapse: collapse;">
                <tr style="background-color: #f5f5f5;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Statement</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Interrogative Verb</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Question</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">You were at the library.</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">were</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Were you at the library?</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Maria likes science fiction.</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">does</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Does Maria like science fiction?</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">The team practiced yesterday.</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">did</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Did the team practice yesterday?</td>
                </tr>
            </table>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-lightbulb"></i> Teacher's Tip</div>
            <p>Remember: When we use "did" or "does" in a question, the main verb returns to its base form!</p>
            <p>✅ Did she walk to school? (not "walked")</p>
            <p>✅ Does he play guitar? (not "plays")</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-gamepad"></i> Question Transformer Game!</div>
            <p>We'll play "Statement Storm" - I'll call out a statement, and you transform it into a question using the correct interrogative verb. Ready to challenge yourselves?</p>
        </div>
    `,
    taskInstructions: "Complete the following activities to practice identifying and using interrogative verbs.",
    taskContent: `
        <div class="task-item">
            <span class="task-number">1</span> <strong>Identify the Interrogative Verb:</strong> Circle the interrogative verb in each question below:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>a) <u>Were</u> you able to finish the puzzle? (Interrogative verb: were)</div>
                <div>b) Did she remember to bring her instrument? <span class="answer-space" style="width: 100px;"></span></div>
                <div>c) Does the train arrive before noon? <span class="answer-space" style="width: 100px;"></span></div>
                <div>d) Is this the correct answer? <span class="answer-space" style="width: 100px;"></span></div>
                <div>e) Can we submit our project tomorrow? <span class="answer-space" style="width: 100px;"></span></div>
                <div>f) Have you visited the new museum? <span class="answer-space" style="width: 100px;"></span></div>
            </div>
        </div>
        <div class="task-item">
            <span class="task-number">2</span> <strong>Statement to Question Transformation:</strong> Rewrite each statement as a question using the correct interrogative verb:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>a) You were waiting for the bus. → <span class="answer-space" style="width: 300px;">Were you waiting for the bus?</span></div>
                <div>b) She plays soccer on Saturdays. → <span class="answer-space" style="width: 300px;"></span></div>
                <div>c) They visited the aquarium last summer. → <span class="answer-space" style="width: 300px;"></span></div>
                <div>d) Marcus can solve difficult math problems. → <span class="answer-space" style="width: 300px;"></span></div>
                <div>e) The library has new graphic novels. → <span class="answer-space" style="width: 300px;"></span></div>
            </div>
        </div>
        <div class="task-item">
            <span class="task-number">3</span> <strong>Fill in the Missing Interrogative Verb:</strong> Complete each question with the correct interrogative verb:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>a) <span class="answer-space" style="width: 60px;">Did</span> you hear that announcement?</div>
                <div>b) <span class="answer-space" style="width: 60px;"></span> she know the answer?</div>
                <div>c) <span class="answer-space" style="width: 60px;"></span> they at the park yesterday?</div>
                <div>d) <span class="answer-space" style="width: 60px;"></span> we bring enough snacks for everyone?</div>
                <div>e) <span class="answer-space" style="width: 60px;"></span> your brother speak Japanese?</div>
            </div>
        </div>
        <div class="task-item">
            <span class="task-number">4</span> <strong>Create Your Own:</strong> Write one original question for each interrogative verb below:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>Were: <span class="answer-space" style="width: 350px;"></span></div>
                <div>Did: <span class="answer-space" style="width: 350px;"></span></div>
                <div>Does: <span class="answer-space" style="width: 350px;"></span></div>
            </div>
        </div>
    `,
    homework: "Find five questions in a book, magazine, or website. Write down each question and underline the interrogative verb.",
    homeworkDue: "Tuesday"
},

tuesday: {
    subject: "English",
    topic: "Identifying Auxiliary Interrogatives",
    subtopic: "Recognizing and categorizing various question-starting verbs",
    lessonContent: `
        <p>Today we will expand our knowledge of interrogative verbs by identifying a wider variety of auxiliary verbs used to begin questions.</p>
        <p><strong>Objective:</strong> Students will identify a wider variety of verbs used to start questions, including "do," "is," "can," and "have."</p>
        <p><strong>Key Concept:</strong> Auxiliary interrogatives are helping verbs that appear at the beginning of questions. Different auxiliaries signal different meanings and tenses.</p>
        <p><strong>Categories of Interrogative Verbs:</strong></p>
        <ul>
            <li><strong>Do/Does/Did:</strong> Used for action verbs in present and past tense</li>
            <li><strong>Is/Are/Am/Was/Were:</strong> Used with be-verbs and continuous tenses</li>
            <li><strong>Can/Could/Will/Would/Shall/Should/May/Might:</strong> Modal auxiliaries expressing possibility, ability, permission</li>
            <li><strong>Have/Has/Had:</strong> Used for perfect tenses</li>
        </ul>
        <p><strong>Question Hunt Strategy:</strong> When searching for interrogative verbs, look at the VERY FIRST word of the sentence. If it's a verb, it's likely an interrogative!</p>
        <p><strong>Why It's Important:</strong> Recognizing different types of interrogative verbs helps you understand the specific information being requested and respond appropriately.</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-search" style="color: #FF9800;"></i> Interrogative Verb Categories</div>
            <table style="width: 100%; border-collapse: collapse;">
                <tr style="background-color: #f5f5f5;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Category</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Examples</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Sample Question</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Do verbs</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">do, does, did</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Do you prefer cats or dogs?</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Be verbs</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">is, are, am, was, were</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Is this seat taken?</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Modals</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">can, could, will, would, shall, should, may, might</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Can you help me carry this?</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Have verbs</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">have, has, had</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Have you finished your project?</td>
                </tr>
            </table>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-book-open"></i> Question Hunt Example</div>
            <p>From "Charlotte's Web":</p>
            <p>"<strong>Do</strong> you know what a promise is?" → Category: Do verbs</p>
            <p>"<strong>Can</strong> I talk to the spider?" → Category: Modals</p>
            <p>"<strong>Is</strong> it true?" → Category: Be verbs</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-gamepad"></i> Question Hunt Challenge!</div>
            <p>Today we become detectives! You'll search your textbooks, library books, or any reading material to find and categorize interrogative verbs. The team with the most diverse collection wins!</p>
        </div>
    `,
    taskInstructions: "Go on a 'Question Hunt' to find and categorize interrogative verbs from various texts.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Textbook Question Hunt</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Search through your textbooks, library books, or any reading material. Find at least one question for each verb category. Write the full question and identify the interrogative verb:
                <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                    <tr style="background-color: #f5f5f5;">
                        <th style="padding: 8px; border: 1px solid #ddd;">Category</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Question from Text</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Interrogative Verb</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Do verbs (do, does, did)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Be verbs (is, are, am, was, were)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Modals (can, could, will, would, etc.)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Have verbs (have, has, had)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Category Identification</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Identify the category of interrogative verb used in each question:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) Will you attend the school play? Category: <span class="answer-space" style="width: 150px;">Modals</span></div>
                    <div>b) Are they coming to the party? Category: <span class="answer-space" style="width: 150px;"></span></div>
                    <div>c) Has she read the instructions? Category: <span class="answer-space" style="width: 150px;"></span></div>
                    <div>d) Did anyone see what happened? Category: <span class="answer-space" style="width: 150px;"></span></div>
                    <div>e) Could you repeat that please? Category: <span class="answer-space" style="width: 150px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Create Category Examples</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> For each category below, write an original question that begins with the given interrogative verb:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) Do: <span class="answer-space" style="width: 350px;"></span></div>
                    <div>b) Is: <span class="answer-space" style="width: 350px;"></span></div>
                    <div>c) Can: <span class="answer-space" style="width: 350px;"></span></div>
                    <div>d) Have: <span class="answer-space" style="width: 350px;"></span></div>
                    <div>e) Will: <span class="answer-space" style="width: 350px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Question Sort</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> Sort these questions into the correct category table below:
                <p style="margin-left: 20px;"><em>"Does this bus go downtown?" • "Have you met our new principal?" • "Were they impressed?" • "Should we wait for them?" • "Is dinner ready?" • "Did you finish your chores?"</em></p>
                <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                    <tr style="background-color: #f5f5f5;">
                        <th style="padding: 8px; border: 1px solid #ddd;">Do Verbs</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Be Verbs</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Modals</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Have Verbs</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                </table>
            </div>
        </div>
    `,
    homework: "Create a 'Question Collection' chart at home. Find 8 questions from conversations, TV shows, or books. List them and identify the interrogative verb category for each.",
    homeworkDue: "Wednesday"
},

wednesday: {
    subject: "English",
    topic: "Constructing 'Yes/No' Questions",
    subtopic: "Using interrogative verbs to form questions requiring yes/no answers",
    lessonContent: `
        <p>Today we will focus on constructing questions that require a yes or no answer using interrogative verbs.</p>
        <p><strong>Objective:</strong> Students will use interrogative verbs to create questions that require a yes or no answer.</p>
        <p><strong>Key Concept:</strong> Yes/No questions begin with an interrogative verb and can be answered with a simple "yes" or "no" (though we often add more information!).</p>
        <p><strong>Structure of Yes/No Questions:</strong></p>
        <ul>
            <li><strong>Interrogative Verb + Subject + Main Verb + Rest of Question?</strong></li>
            <li>Do + you + know + how to write poems?</li>
            <li>Is + this + (verb "to be") + your pencil?</li>
            <li>Can + she + speak + three languages?</li>
            <li>Have + they + arrived + yet?</li>
        </ul>
        <p><strong>Common Yes/No Question Starters:</strong></p>
        <ul>
            <li>Do/Does/Did you...?</li>
            <li>Is/Are/Am I/you/we/they...?</li>
            <li>Can/Could/Will/Would you...?</li>
            <li>Have/Has/Had you/they/he/she...?</li>
        </ul>
        <p><strong>Why This Matters:</strong> Yes/No questions are the most common type of question in everyday conversation. Mastering them helps you gather information efficiently!</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-check-circle" style="color: #2196F3;"></i> Yes/No Question Examples</div>
            <table style="width: 100%; border-collapse: collapse;">
                <tr style="background-color: #f5f5f5;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Interrogative Verb</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Yes/No Question</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Possible Answer</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Do</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Do you know how to write poems?</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Yes, I love writing poetry!</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Is</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Is this your pencil?</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">No, mine has a blue eraser.</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Can</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Can you solve this equation?</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Yes, I learned this yesterday.</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Have</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Have you visited the science museum?</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">No, but I'd like to go!</td>
                </tr>
            </table>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-pencil-alt"></i> Teacher's Example</div>
            <p>Watch how I transform a topic into Yes/No questions:</p>
            <p><strong>Topic: Weekend plans</strong></p>
            <ul>
                <li>Do you have any plans for the weekend?</li>
                <li>Are you going to the football game?</li>
                <li>Will you be studying on Sunday?</li>
                <li>Have you finished your homework already?</li>
            </ul>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-gamepad"></i> Yes/No Question Relay!</div>
            <p>We'll form two teams. I'll give you a topic, and you have 30 seconds to create as many yes/no questions as possible. Every correct question earns a point for your team!</p>
        </div>
    `,
    taskInstructions: "Practice constructing yes/no questions using different interrogative verbs.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Transform Statements into Yes/No Questions</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Turn each statement into a yes/no question:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) You know how to write poems. → <span class="answer-space" style="width: 350px;">Do you know how to write poems?</span></div>
                    <div>b) This is your pencil. → <span class="answer-space" style="width: 350px;"></span></div>
                    <div>c) She can speak French. → <span class="answer-space" style="width: 350px;"></span></div>
                    <div>d) They have finished the race. → <span class="answer-space" style="width: 350px;"></span></div>
                    <div>e) Marcus will join the club. → <span class="answer-space" style="width: 350px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Complete the Yes/No Questions</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Fill in the missing interrogative verb to complete each yes/no question:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) <span class="answer-space" style="width: 60px;">Do</span> you prefer reading fiction or non-fiction?</div>
                    <div>b) <span class="answer-space" style="width: 60px;"></span> she interested in astronomy?</div>
                    <div>c) <span class="answer-space" style="width: 60px;"></span> we bring enough snacks for everyone?</div>
                    <div>d) <span class="answer-space" style="width: 60px;"></span> your brother ever visited Canada?</div>
                    <div>e) <span class="answer-space" style="width: 60px;"></span> they able to solve the puzzle?</div>
                    <div>f) <span class="answer-space" style="width: 60px;"></span> you help me with this heavy box?</div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Create Original Yes/No Questions</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> Write five original yes/no questions. Use a different interrogative verb for each question:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1) <span class="answer-space" style="width: 450px;"></span></div>
                    <div>2) <span class="answer-space" style="width: 450px;"></span></div>
                    <div>3) <span class="answer-space" style="width: 450px;"></span></div>
                    <div>4) <span class="answer-space" style="width: 450px;"></span></div>
                    <div>5) <span class="answer-space" style="width: 450px;"></span></div>
                </div>
                <div style="margin-top: 10px;">List the interrogative verbs you used: <span class="answer-space" style="width: 300px;"></span></div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Partner Interview</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> Interview a partner using yes/no questions. Write four questions you asked and their responses:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>Question 1:</strong> <span class="answer-space" style="width: 300px;"></span></div>
                    <div><strong>Response:</strong> <span class="answer-space" style="width: 300px;"></span></div>
                    <div style="margin-top: 10px;"><strong>Question 2:</strong> <span class="answer-space" style="width: 300px;"></span></div>
                    <div><strong>Response:</strong> <span class="answer-space" style="width: 300px;"></span></div>
                    <div style="margin-top: 10px;"><strong>Question 3:</strong> <span class="answer-space" style="width: 300px;"></span></div>
                    <div><strong>Response:</strong> <span class="answer-space" style="width: 300px;"></span></div>
                    <div style="margin-top: 10px;"><strong>Question 4:</strong> <span class="answer-space" style="width: 300px;"></span></div>
                    <div><strong>Response:</strong> <span class="answer-space" style="width: 300px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part E: Yes/No Question Quiz</strong></p>
            <div class="task-item">
                <span class="task-number">5</span> Write a short dialogue between two friends that includes at least four different yes/no questions. Underline each interrogative verb:
                <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
            </div>
        </div>
    `,
    homework: "Write 10 yes/no questions you could ask a family member about their day. Use at least 5 different interrogative verbs.",
    homeworkDue: "Thursday"
},

thursday: {
    subject: "English",
    topic: "Perfect Tense Interrogatives",
    subtopic: "Using 'have' and 'has' as interrogative verbs in the perfect tense",
    lessonContent: `
        <p>Today we will focus specifically on using "have" and "has" as interrogative verbs in the perfect tense.</p>
        <p><strong>Objective:</strong> Students will use "have" or "has" as interrogative verbs in the perfect tense.</p>
        <p><strong>Key Concept:</strong> Perfect tense questions ask about experiences or actions that happened at an unspecified time before now. They follow the structure: Have/Has + subject + past participle.</p>
        <p><strong>Perfect Tense Question Structure:</strong></p>
        <ul>
            <li><strong>Have/Has + Subject + Past Participle + Rest of Question?</strong></li>
            <li>Have + you + written + your homework?</li>
            <li>Has + she + visited + the new museum?</li>
            <li>Have + they + tried + sushi before?</li>
        </ul>
        <p><strong>When to Use Have vs. Has:</strong></p>
        <ul>
            <li><strong>Have:</strong> I, you, we, they, plural nouns</li>
            <li><strong>Has:</strong> He, she, it, singular nouns</li>
        </ul>
        <p><strong>Common Past Participles:</strong></p>
        <ul>
            <li>Regular verbs: add -ed (walked, played, watched)</li>
            <li>Irregular verbs: special forms (written, seen, eaten, gone, done, been)</li>
        </ul>
        <p><strong>Why This Matters:</strong> Perfect tense questions help us talk about life experiences, accomplishments, and events without specifying exactly when they happened.</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-clock" style="color: #9C27B0;"></i> Perfect Tense Interrogative Examples</div>
            <table style="width: 100%; border-collapse: collapse;">
                <tr style="background-color: #f5f5f5;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Subject</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Question</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Past Participle</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">You</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Have you written your homework?</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">written</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">She</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Has she ever eaten Thai food?</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">eaten</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">They</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Have they seen that movie?</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">seen</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">He</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Has he finished his project?</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">finished</td>
                </tr>
            </table>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-users"></i> "Have You Ever..." Interview Examples</div>
            <ul>
                <li>Have you ever traveled to another country?</li>
                <li>Have you ever performed on stage?</li>
                <li>Have you ever met someone famous?</li>
                <li>Have you ever baked a cake from scratch?</li>
                <li>Have you ever lost something important?</li>
            </ul>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-gamepad"></i> Perfect Tense Interview Game!</div>
            <p>Today we'll become interviewers! You'll use "Have you ever..." questions to learn interesting facts about your classmates. The student who discovers the most unique experiences wins!</p>
        </div>
    `,
    taskInstructions: "Practice using 'have' and 'has' as interrogative verbs in the perfect tense.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Complete the Perfect Tense Questions</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Complete each question with "Have" or "Has":
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) <span class="answer-space" style="width: 60px;">Have</span> you written your homework?</div>
                    <div>b) <span class="answer-space" style="width: 60px;"></span> she ever visited Japan?</div>
                    <div>c) <span class="answer-space" style="width: 60px;"></span> they finished the race?</div>
                    <div>d) <span class="answer-space" style="width: 60px;"></span> he tried the new game?</div>
                    <div>e) <span class="answer-space" style="width: 60px;"></span> we met before?</div>
                    <div>f) <span class="answer-space" style="width: 60px;"></span> your brother seen this movie?</div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Past Participle Practice</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Fill in the correct past participle form of the verb in parentheses:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) Have you ever <span class="answer-space" style="width: 100px;">eaten</span> (eat) sushi?</div>
                    <div>b) Has she <span class="answer-space" style="width: 100px;"></span> (write) a poem before?</div>
                    <div>c) Have they <span class="answer-space" style="width: 100px;"></span> (see) the new superhero movie?</div>
                    <div>d) Has he <span class="answer-space" style="width: 100px;"></span> (break) his record?</div>
                    <div>e) Have you <span class="answer-space" style="width: 100px;"></span> (be) to the science museum?</div>
                    <div>f) Has the class <span class="answer-space" style="width: 100px;"></span> (begin) the project?</div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Create "Have You Ever..." Questions</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> Write five "Have you ever..." questions to ask a partner. Use a different past participle for each:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1) Have you ever <span class="answer-space" style="width: 350px;"></span></div>
                    <div>2) Have you ever <span class="answer-space" style="width: 350px;"></span></div>
                    <div>3) Have you ever <span class="answer-space" style="width: 350px;"></span></div>
                    <div>4) Have you ever <span class="answer-space" style="width: 350px;"></span></div>
                    <div>5) Have you ever <span class="answer-space" style="width: 350px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Partner Interview</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> Interview a partner using "Have you..." questions. Record their answers:
                <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                    <tr style="background-color: #f5f5f5;">
                        <th style="padding: 8px; border: 1px solid #ddd;">Question</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Partner's Answer</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Follow-up Question</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part E: Has vs. Have Challenge</strong></p>
            <div class="task-item">
                <span class="task-number">5</span> Create one "Has..." question for each subject below:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) Has your best friend <span class="answer-space" style="width: 350px;"></span></div>
                    <div>b) Has our teacher <span class="answer-space" style="width: 350px;"></span></div>
                    <div>c) Has anyone in your family <span class="answer-space" style="width: 350px;"></span></div>
                    <div>d) Has this school <span class="answer-space" style="width: 350px;"></span></div>
                </div>
            </div>
        </div>
    `,
    homework: "Interview a family member using 5 'Have you ever...' questions. Write down their answers. Then, write 3 'Has...' questions about another family member and predict their answers.",
    homeworkDue: "Friday"
},

friday: {
    subject: "English",
    topic: "Interrogative Verb Review and Quiz",
    subtopic: "Demonstrating mastery of interrogative verbs in various contexts",
    lessonContent: `
        <p>Today we will review everything we've learned about interrogative verbs and demonstrate our mastery through a quiz and interactive activities.</p>
        <p><strong>Objective:</strong> Students will demonstrate mastery of using interrogative verbs in various contexts.</p>
        <p><strong>Key Concept Review:</strong> Interrogative verbs help us form questions. They appear at the beginning of questions and indicate the tense, mood, or type of information being requested.</p>
        <p><strong>Types of Interrogative Verbs We've Learned:</strong></p>
        <ul>
            <li><strong>Do/Does/Did:</strong> For action verbs in present and past</li>
            <li><strong>Is/Are/Am/Was/Were:</strong> Be-verbs and continuous tenses</li>
            <li><strong>Can/Could/Will/Would/Shall/Should/May/Might:</strong> Modal auxiliaries</li>
            <li><strong>Have/Has/Had:</strong> Perfect tense questions</li>
        </ul>
        <p><strong>Question Structure Reminders:</strong></p>
        <ul>
            <li><strong>Yes/No Questions:</strong> Interrogative Verb + Subject + Main Verb + ?</li>
            <li><strong>Perfect Tense Questions:</strong> Have/Has + Subject + Past Participle + ?</li>
            <li><strong>With Do/Does/Did:</strong> Main verb returns to base form</li>
        </ul>
        <p><strong>Today's Activities:</strong> We'll participate in a Question-Answer Relay and complete a short written assessment to show what we've learned!</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-trophy" style="color: #FFC107;"></i> Interrogative Verb Mastery Checklist</div>
            <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                <div style="flex: 1; min-width: 200px;">
                    <p><strong>✓ I can identify:</strong></p>
                    <ul>
                        <li>Interrogative verbs in questions</li>
                        <li>Different categories of interrogatives</li>
                        <li>Have vs. Has in perfect tense</li>
                    </ul>
                </div>
                <div style="flex: 1; min-width: 200px;">
                    <p><strong>✓ I can create:</strong></p>
                    <ul>
                        <li>Yes/No questions</li>
                        <li>Perfect tense questions</li>
                        <li>Questions with modals</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-exchange-alt"></i> Quick Transformation Challenge</div>
            <p><strong>Statement:</strong> "The team won the championship."</p>
            <p><strong>Yes/No Question:</strong> "Did the team win the championship?"</p>
            <p><strong>Perfect Tense Question:</strong> "Has the team ever won a championship?"</p>
            <p><strong>Modal Question:</strong> "Can the team win again next year?"</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-gamepad"></i> Question-Answer Relay!</div>
            <p>We'll form teams. I'll give one student a verb (e.g., "did"). That student must quickly form a correct question for the next student to answer. We'll see how many correct questions we can create in 10 minutes!</p>
        </div>
    `,
    taskInstructions: "Complete the review activities and assessment to demonstrate your understanding of interrogative verbs.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Question-Answer Relay Preparation</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> For each verb below, write a question that begins with that interrogative verb. Then write a possible answer:
                <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                    <tr style="background-color: #f5f5f5;">
                        <th style="padding: 8px; border: 1px solid #ddd;">Verb</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Your Question</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Possible Answer</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Did</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Can</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Have</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Is</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Will</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><span class="answer-space" style="width: 100%;"></span></td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Written Assessment</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> <strong>Identify the Interrogative Verb:</strong> Underline the interrogative verb in each sentence:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) <u>Were</u> you planning to attend the workshop?</div>
                    <div>b) Does this train stop at Union Station?</div>
                    <div>c) Have you ever tried rock climbing?</div>
                    <div>d) Can your sister speak three languages?</div>
                    <div>e) Is that the correct answer to question five?</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> <strong>Complete the Question:</strong> Fill in the blank with the correct interrogative verb:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) <span class="answer-space" style="width: 60px;"></span> you like to join our book club?</div>
                    <div>b) <span class="answer-space" style="width: 60px;"></span> she ever been to a concert?</div>
                    <div>c) <span class="answer-space" style="width: 60px;"></span> they at the park when it started raining?</div>
                    <div>d) <span class="answer-space" style="width: 60px;"></span> we bring snacks for the field trip?</div>
                    <div>e) <span class="answer-space" style="width: 60px;"></span> your brother solve the puzzle yet?</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> <strong>Statement to Question:</strong> Rewrite each statement as a yes/no question:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) You have finished your science project. → <span class="answer-space" style="width: 350px;"></span></div>
                    <div>b) She can identify all the countries in Europe. → <span class="answer-space" style="width: 350px;"></span></div>
                    <div>c) They were waiting for the school bus. → <span class="answer-space" style="width: 350px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> <strong>Create Original Questions:</strong> Write one original question for each category:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Do/Does/Did question: <span class="answer-space" style="width: 350px;"></span></div>
                    <div>Be verb question: <span class="answer-space" style="width: 350px;"></span></div>
                    <div>Modal verb question: <span class="answer-space" style="width: 350px;"></span></div>
                    <div>Perfect tense question: <span class="answer-space" style="width: 350px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Reflection</strong></p>
            <div class="task-item">
                <span class="task-number">6</span> What was the most interesting thing you learned about interrogative verbs this week? How will you use questions to improve your communication?
                <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Bonus Challenge</strong></p>
            <div class="task-item">
                <span class="task-number">7</span> <strong>Create a Short Interview:</strong> Write a short interview (5-6 exchanges) between a reporter and a famous person of your choice. Include at least three different types of interrogative verbs. Underline each interrogative verb you use.
                <div class="answer-space" style="height: 200px; margin-top: 10px;"></div>
            </div>
        </div>
    `,
    homework: "Create a 'Question Bank' of 15 original questions using interrogative verbs. Include at least 3 examples from each category (do verbs, be verbs, modals, have verbs). Bring it to class on Monday to share with a partner.",
    homeworkDue: "Monday"
}    
    
    
    
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
window.registerWorksheet(grade6EnglishWeek4);
console.log("grade6-english-week4-interrogative-verbs.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
window.DataLoader.registerWorksheet(grade6EnglishWeek4);
console.log("grade6-english-week4-interrogative-verbs.js registered using DataLoader.registerWorksheet()");
} else {
// Fallback: store in global array
if (!window.registeredWorksheets) {
window.registeredWorksheets = [];
}
window.registeredWorksheets.push({
variableName: 'grade6EnglishWeek4',
metadata: grade6EnglishWeek4.metadata,
days: grade6EnglishWeek4
});
console.log("grade6-english-week4-interrogative-verbs.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6EnglishWeek4 = grade6EnglishWeek4;
console.log("grade6-english-week4-interrogative-verbs.js loaded and registered successfully");