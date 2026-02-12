// Grade 6 Zambian Language Bemba - Week 9 Data (Oral Reading & Fluency)
const grade6BembaWeek9 = {
metadata: {
grade: 6,
subject: "Zambian Language (Icibemba)",
week: 9,
title: "Ukubelenga pa Mulumbe — Reading Fluency & Oral Expression",
description: "Developing oral reading fluency, pronunciation, and expression through individual and collaborative reading techniques"
},

monday: {
    subject: "Bemba",
    topic: "Reading Fluency",
    subtopic: "Oral Reading — Ukubelenga pa Mulumbe",
    duration: "40 Minutes",
    learningObjectives: [
        "Read a Bemba text aloud with acceptable pronunciation",
        "Demonstrate appropriate expression and emotional tone for different characters",
        "Improve reading speed and clarity through repeated reading"
    ],
    lessonContent: `
        <p>Mwapoleni mukwai! Today we focus on <strong>Ukubelenga pa Mulumbe</strong> — reading aloud with fluency and expression.</p>
        
        <p><strong>Key Concept:</strong> Reading fluently means reading smoothly, with correct pronunciation, proper pacing, and expression that matches the meaning of the text.</p>
        
        <p><strong>Bemba Pronunciation Reminders:</strong></p>
        <ul>
            <li><strong>'N'</strong> before another letter is pronounced as part of the same syllable: <em>Nkombe</em> (N-ko-mbe)</li>
            <li><strong>N'</strong> (apostrophe N) is a separate letter: <em>N'gombe</em> (Ngo-mbe) — different from Nkombe!</li>
            <li><strong>B, D, F, G, K, L, M, N, P, S, T, W, Y</strong> — pronounce clearly, especially at word endings</li>
            <li><strong>Double vowels</strong> indicate emphasis or length: <em>kaana</em> (refuse) vs <em>kana</em> (that one)</li>
        </ul>
        
        <p><strong>Expression Matters:</strong></p>
        <ul>
            <li>Question marks (?) — voice rises at the end</li>
            <li>Exclamation marks (!) — show surprise, joy, or anger</li>
            <li>Commas (,) — short pause</li>
            <li>Full stops (.) — longer pause</li>
            <li>Dialogue — change your voice for different characters</li>
        </ul>
        
        <div class="story-box" style="background-color: #FFF9C4; padding: 15px; border-left: 5px solid #FFC107; margin: 20px 0;">
            <p><strong>Icitabo Cifumo: Umulunda wa Kalulu (Reading Passage)</strong></p>
            <p>Kalulu aile ku mulunda na menshi. Aasanga Kafuti ali ku lila. "Nalishiba ifyo wasakamana," efyo Kalulu aasose. "Ee, nalishibe. Insalu yandi yapwa!" Kafuti aliluka. "Kanshi nkekupela insalu imbi," efyo Kalulu aasosa. Kafuti atasha. "Twende ku mushi," efyo Kalulu aasosa. "Twende mukwai," efyo Kafuti ayasuka.</p>
            <p><em>Translation: Hare went to the well with water. He found Tortoise crying. "I know why you are worried," said Hare. "Yes, I know. My cloth is finished!" Tortoise lamented. "Then I will give you another cloth," said Hare. Tortoise thanked him. "Let's go to the village," said Hare. "Let's go," replied Tortoise.</em></p>
        </div>
        
        <div class="teacher-demo" style="background-color: #E3F2FD; padding: 15px; border-radius: 8px;">
            <p><strong><i class="fas fa-chalkboard-teacher"></i> Teacher Demonstration:</strong></p>
            <p>Listen carefully as I read the passage. Notice:</p>
            <ul>
                <li>How I pause at commas and full stops</li>
                <li>How my voice changes for Kalulu (Hare) and Kafuti (Tortoise)</li>
                <li>The emotion in Kafuti's voice when saying "Insalu yandi yapwa!"</li>
                <li>My speed — not too fast, not too slow</li>
            </ul>
        </div>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-volume-up"></i> Expression Practice</div>
            <p>Read these sentences with the correct feeling:</p>
            <ul>
                <li><strong>"Twende ku mushi!"</strong> — Kalulu is happy and excited (joyful voice)</li>
                <li><strong>"Insalu yandi yapwa..."</strong> — Kafuti is sad (soft, slow voice)</li>
                <li><strong>"Ee, nalishibe."</strong> — Kafuti agrees (calm, steady voice)</li>
            </ul>
        </div>
        
        <div class="example-box">
            <div class="example-title"><i class="fas fa-stopwatch"></i> Timed Repeated Reading</div>
            <p>Read the same paragraph three times:</p>
            <ol>
                <li><strong>First read:</strong> Focus on correct pronunciation</li>
                <li><strong>Second read:</strong> Add expression and pause at punctuation</li>
                <li><strong>Third read:</strong> Read smoothly with improved speed</li>
            </ol>
            <p><em>Challenge: Can you reduce your time with each attempt?</em></p>
        </div>
    `,
    taskInstructions: "Complete the following activities to practice oral reading fluency.",
    taskContent: `
        <div class="task-item">
            <span class="task-number">1</span> <strong>Pronunciation Practice:</strong> Read these words aloud. Circle the words that begin with N' (apostrophe N):
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>☐ Nkombe  ☐ N'gombe  ☐ Nsala  ☐ N'ina  ☐ Nsaka  ☐ N'ganda</div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">2</span> <strong>Punctuation & Expression:</strong> Draw a line to match each sentence to the correct expression:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>"Bushiku bwangu!" &nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp;&nbsp; <span class="answer-space" style="width: 120px;"></span> (Sadness)</div>
                <div>"Nalishibe sana." &nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp;&nbsp; <span class="answer-space" style="width: 120px;"></span> (Surprise/Excitement)</div>
                <div>"Ee, twende." &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp;&nbsp; <span class="answer-space" style="width: 120px;"></span> (Calm agreement)</div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">3</span> <strong>Timed Repeated Reading:</strong> Read the story paragraph three times. Record your time:
            <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F3E5F5; border-radius: 5px;">
                <div>First read: ______ seconds &nbsp;&nbsp; <em>Focus: Pronunciation</em></div>
                <div>Second read: ______ seconds &nbsp;&nbsp; <em>Focus: Expression</em></div>
                <div>Third read: ______ seconds &nbsp;&nbsp; <em>Focus: Smoothness</em></div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">4</span> <strong>Individual Reading Practice:</strong> Choose one paragraph from the story. Prepare to read it aloud to your partner. Write 2 things you will focus on:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>1. <span class="answer-space" style="width: 300px;"></span></div>
                <div>2. <span class="answer-space" style="width: 300px;"></span></div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">5</span> <strong>Self-Assessment:</strong> After reading aloud, tick (✓) the skills you demonstrated:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div>☐ I pronounced all words correctly</div>
                <div>☐ I paused at commas and full stops</div>
                <div>☐ My voice changed for different characters</div>
                <div>☐ I showed emotion (sad, happy, excited)</div>
                <div>☐ I read at a good speed — not too fast, not too slow</div>
            </div>
        </div>
    `,
    homework: "Practice reading the story passage at home to a family member. Ask them to sign your notebook. Try to read it in under 45 seconds!",
    homeworkDue: "Wednesday"
},

wednesday: {
    subject: "Bemba",
    topic: "Reading Fluency",
    subtopic: "Collaborative Reading — Theatre & Paired Reading",
    duration: "40 Minutes",
    learningObjectives: [
        "Work collaboratively to read a dialogue or script with appropriate expression",
        "Take turns reading in pairs and provide constructive feedback",
        "Perform a short scene using theatre reading techniques",
        "Summarize the main idea of a text read in groups"
    ],
    lessonContent: `
        <p>Mwapoleni! Today we will read together using <strong>collaborative reading techniques</strong> — paired reading, group reading, and theatre reading!</p>
        
        <p><strong>Key Concept:</strong> Reading with others helps us improve. We learn from each other, correct mistakes together, and build confidence.</p>
        
        <p><strong>Three Collaborative Reading Methods:</strong></p>
        <ul>
            <li><strong>Paired Reading:</strong> Two learners take turns reading pages to each other. One reads, the other listens and helps with difficult words.</li>
            <li><strong>Group Reading:</strong> Four learners read a text together, each reading a section aloud.</li>
            <li><strong>Theatre Reading:</strong> Learners are assigned character roles and read dialogue as if performing a play — full expression!</li>
        </ul>
        
        <div class="dialogue-box" style="background-color: #FFEBEE; padding: 15px; border-left: 5px solid #F44336; margin: 20px 0;">
            <p><strong><i class="fas fa-theater-masks"></i> Theatre Reading Script: Pamo Mu Mushi (Together in the Village)</strong></p>
            <p><strong>Characters:</strong></p>
            <ul>
                <li><strong>Chanda</strong> — A young farmer (happy, hardworking)</li>
                <li><strong>Bwalya</strong> — Chanda's friend (curious, helpful)</li>
                <li><strong>Mayo Mulenga</strong> — An elder in the village (wise, kind)</li>
                <li><strong>Narrator</strong> — Tells the story</li>
            </ul>
            
            <p><strong>Narrator:</strong> Chanda aile mu munda. Aasanga Bwalya ali ku mimina.</p>
            <p><strong>Bwalya:</strong> Mwapoleni, Chanda! Muli shani?</p>
            <p><strong>Chanda:</strong> Bwino, nashibomba. Ifilimwa fyandi fyakula sana!</p>
            <p><strong>Bwalya:</strong> Ee, nalifyona. Fyawama! Nga ninshi walimba ifilimwa ifingi.</p>
            <p><strong>Chanda:</strong> Mayo Mulenga e ashinshishe. Aasosa ukuti ifilimwa fyaleta ifyakulya no mali.</p>
            <p><strong>Narrator:</strong> Pafyo, Mayo Mulenga aafika.</p>
            <p><strong>Mayo Mulenga:</strong> Mwapoleni, bana. Nalimfwa ifyo mulelanda. Icibemba cenu cilawama!</p>
            
            <p><em>Translation: Narrator: Chanda went to the garden. He found Bwalya watering. Bwalya: Greetings, Chanda! How are you? Chanda: Fine, I have worked. My crops have grown well! Bwalya: Yes, I see them. They are beautiful! You have planted many crops. Chanda: Mayo Mulenga encouraged me. She said crops bring food and money. Narrator: Just then, Mayo Mulenga arrived. Mayo Mulenga: Greetings, children. I heard what you are saying. Your Bemba is good!</em></p>
        </div>
        
        <div class="instruction-box" style="background-color: #E8F5E9; padding: 15px; border-radius: 8px;">
            <p><strong>Group Activity Instructions:</strong></p>
            <ol>
                <li>Form groups of 4 learners</li>
                <li>Assign roles: Chanda, Bwalya, Mayo Mulenga, Narrator</li>
                <li>Read the script together — focus on expression!</li>
                <li>Practice twice, then perform for the class</li>
                <li>After reading, discuss: <em>"Ici cileke cili pa mulandu wi?"</em> — What is this story about?</li>
            </ol>
        </div>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-user-friends"></i> Paired Reading Model</div>
            <p><strong>Partner A:</strong> Reads first paragraph</p>
            <p><strong>Partner B:</strong> Listens, then gives feedback:</p>
            <ul>
                <li>"You pronounced ______ well."</li>
                <li>"Try saying ______ more clearly."</li>
                <li>"Remember to pause at the comma."</li>
            </ul>
            <p><strong>Then switch roles!</strong></p>
        </div>
        
        <div class="example-box">
            <div class="example-title"><i class="fas fa-star"></i> Expression Tip of the Day</div>
            <p><strong>For questions:</strong> Voice goes UP at the end.</p>
            <p><em>"Muli shani?"</em> → Voice rises on "shani"</p>
            <p><strong>For statements:</strong> Voice goes DOWN at the end.</p>
            <p><em>"Nashibomba."</em> → Voice lowers on "bomba"</p>
        </div>
        
        <div class="example-box">
            <div class="example-title"><i class="fas fa-comment-dots"></i> Summary Sentence Starters</div>
            <p>After reading, summarize using Bemba:</p>
            <ul>
                <li>"Ici cileke cili pa..." — This story is about...</li>
                <li>"Abantu abakulu muli ici cileke ni..." — The important people in this story are...</li>
                <li>"Ifyabafyelele ifikulu ni..." — The main events are...</li>
            </ul>
        </div>
    `,
    taskInstructions: "Work with your group and partner to complete these collaborative reading activities.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Paired Reading Practice</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Read the script with your partner. After your partner reads, write one thing they did well and one thing to improve:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>My Partner's Name:</strong> <span class="answer-space" style="width: 200px;"></span></div>
                    <div><strong>One thing done well:</strong> <span class="answer-space" style="width: 250px;"></span></div>
                    <div><strong>One thing to practice:</strong> <span class="answer-space" style="width: 250px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Theatre Reading — Role Assignment</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Write your group members' names and their roles:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8EAF6; border-radius: 5px;">
                    <div>1. <span class="answer-space" style="width: 150px;"></span> — Role: <span class="answer-space" style="width: 150px;"></span></div>
                    <div>2. <span class="answer-space" style="width: 150px;"></span> — Role: <span class="answer-space" style="width: 150px;"></span></div>
                    <div>3. <span class="answer-space" style="width: 150px;"></span> — Role: <span class="answer-space" style="width: 150px;"></span></div>
                    <div>4. <span class="answer-space" style="width: 150px;"></span> — Role: <span class="answer-space" style="width: 150px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Character Expression</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> Choose one character from the script. Write how their voice should sound and why:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>Character:</strong> <span class="answer-space" style="width: 150px;"></span></div>
                    <div><strong>Voice should be:</strong> <span class="answer-space" style="width: 250px;"></span> (e.g., happy, serious, excited, gentle)</div>
                    <div><strong>Because:</strong> <span class="answer-space" style="width: 300px;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Group Summary</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> With your group, write 2-3 sentences summarizing the main point of the script in Bemba:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><span class="answer-space" style="width: 400px; height: 60px; display: inline-block;"></span></div>
                    <div><span class="answer-space" style="width: 400px; height: 60px; display: inline-block;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part E: Self-Reflection</strong></p>
            <div class="task-item">
                <span class="task-number">5</span> Today I worked with others to read. I feel proud because:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><span class="answer-space" style="width: 400px; height: 60px; display: inline-block;"></span></div>
                </div>
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Next time, I want to improve:</div>
                    <div><span class="answer-space" style="width: 400px; height: 40px; display: inline-block;"></span></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part F: Class Performance</strong></p>
            <div class="task-item">
                <span class="task-number">6</span> Teacher's feedback on your group's theatre reading:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><span class="answer-space" style="width: 400px; height: 60px; display: inline-block;"></span></div>
                </div>
            </div>
        </div>
    `,
    homework: "With a family member, practice reading the theatre script at home. Try to read your character's lines with expression! Be ready to perform next lesson.",
    homeworkDue: "Next Monday"
}
    
    
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
window.registerWorksheet(grade6BembaWeek9);
console.log("g6bemba-t1week09.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
window.DataLoader.registerWorksheet(grade6BembaWeek9);
console.log("g6bemba-t1week09.js registered using DataLoader.registerWorksheet()");
} else {
// Fallback: store in global array
if (!window.registeredWorksheets) {
window.registeredWorksheets = [];
}
window.registeredWorksheets.push({
variableName: 'grade6BembaWeek9',
metadata: grade6BembaWeek9.metadata,
days: grade6BembaWeek9
});
console.log("g6bemba-t1week09.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6BembaWeek9 = grade6BembaWeek9;
console.log("g6bemba-t1week09.js loaded and registered successfully");