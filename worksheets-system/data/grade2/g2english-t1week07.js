// Grade 2 English - Week 7 Data (Imperative Verbs / Commands)
const grade2EnglishWeek7 = {
    metadata: {
        grade: 2,
        subject: "English",
        week: 7,
        title: "Bossy Verbs! — Learning to Give and Follow Instructions",
        description: "Identifying and using imperative verbs (commands) to give simple instructions and follow multi-step directions"
    },
    
    monday: {
        subject: "English",
        topic: "The Verb 'Boss'",
        subtopic: "Introduction to Imperative (Command) Verbs",
        lessonContent: `
            <p>Welcome to English! This week we will learn about special verbs that tell people exactly what to do.</p>
            <p><strong>Key Concept:</strong> Some verbs are "bossy" because they give commands or instructions.</p>
            <p><strong>What are Imperative Verbs?</strong></p>
            <ul>
                <li>They are also called "Bossy Verbs"</li>
                <li>They tell someone what to do</li>
                <li>They usually come at the start of a sentence</li>
                <li>No "please" or "can you" — just the action word!</li>
            </ul>
            <p><strong>Common Bossy Verbs:</strong> Give, Turn, Bring, Move, Lift, Put, Stop</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>Instead of "Can you please move the chair?" → "Move the chair."</li>
                <li>Instead of "Will you turn the page?" → "Turn the page."</li>
                <li>Instead of "Please lift your hand." → "Lift your hand."</li>
            </ul>
            <p><strong>When do we use them?</strong> When giving directions, playing games, teaching someone, or telling someone what to do next.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bullhorn" style="color: #FF5722;"></i> Bossy Verb Example</div>
                <p>"Move the chair." — The word "Move" is the bossy verb. It tells someone exactly what to do.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-robot" style="color: #607D8B;"></i> Robot Commands</div>
                <p>Robots only understand bossy verbs! "Step. Stop. Turn. Move." — Each word is a command.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Teacher Says Game!</div>
                <p>We'll play "Teacher Says" to practice bossy verbs. Listen carefully and do the action when Teacher says!</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice identifying and using bossy verbs.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Circle the bossy verb in each sentence:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Bring your pencil. → Bring / your / pencil</div>
                    <div>☐ Stop running. → Stop / running</div>
                    <div>☐ Turn the page. → Turn / the / page</div>
                    <div>☐ Lift your hand. → Lift / your / hand</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Match the bossy verb with the correct picture:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>"Put" → ☐ Picture of a book on a shelf</div>
                    <div>"Move" → ☐ Picture of a chair sliding</div>
                    <div>"Give" → ☐ Picture of handing a pencil</div>
                    <div>"Stop" → ☐ Picture of a red stop sign</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Robot Partner Activity:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <p>With a partner, take turns being the "Controller" and the "Robot."</p>
                    <div>Controller says one bossy verb: <span class="answer-space" style="width: 150px;"></span></div>
                    <div>Robot does the action. Write the verb you used most: <span class="answer-space" style="width: 150px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw a picture of a robot following a bossy verb command:
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">My robot is following the command: "<u></u>"</div>
            </div>
        `,
        homework: "Find three bossy verbs at home. Write them down and tell who said them (example: Mom said 'Put your shoes on.').",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Simon Says",
        subtopic: "Listening for the Signal Before Acting",
        lessonContent: `
            <p>Today we will play a special listening game that uses bossy verbs!</p>
            <p><strong>Key Concept:</strong> Sometimes we must wait for a signal before following a command.</p>
            <p><strong>What is Simon Says?</strong></p>
            <ul>
                <li>A game where one person is "Simon"</li>
                <li>Simon gives commands using bossy verbs</li>
                <li>You only follow the command if Simon says "Simon says" first!</li>
                <li>If Simon doesn't say "Simon says," you must STOP and stay still</li>
            </ul>
            <p><strong>Why is this important?</strong> It teaches us to listen carefully to the whole instruction before moving.</p>
            <p><strong>Common Simon Says commands:</strong></p>
            <ul>
                <li>"Simon says, lift your right leg."</li>
                <li>"Simon says, turn around."</li>
                <li>"Simon says, put your hands on your head."</li>
                <li>"Give a high-five to the air!" (No "Simon says" — don't move!)</li>
            </ul>
            <p><strong>Listening Rule:</strong> Wait for the whole sentence. If you hear "Simon says," then do the action. If not, freeze!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen" style="color: #2196F3;"></i> Listen Carefully</div>
                <p>"Simon says, touch your nose." → DO it!<br>"Touch your toes." → DON'T move!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-check" style="color: #4CAF50;"></i> Signal Words</div>
                <p>The signal "Simon says" is like a green light. No signal means red light — stop!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Simon Says Game!</div>
                <p>Let's play as a class! I will be Simon first. Listen for "Simon says" before you move!</p>
            </div>
        `,
        taskInstructions: "Complete the Simon Says listening activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Signal or No Signal?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle "Do it" if you hear "Simon says." Circle "Freeze" if you don't:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Simon says, clap your hands. → ☐ Do it ☐ Freeze</div>
                        <div>Jump two times. → ☐ Do it ☐ Freeze</div>
                        <div>Simon says, wave hello. → ☐ Do it ☐ Freeze</div>
                        <div>Spin in a circle. → ☐ Do it ☐ Freeze</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write Your Own Simon Says</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create two Simon Says commands:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Simon says, <span class="answer-space" style="width: 200px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 200px;"></span> (No Simon says!)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Listening Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Partner activity: One says commands, the other listens and acts only on "Simon says":
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0;">
                        <p>Commands used:</p>
                        <div>With signal: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Without signal: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Why We Listen</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of someone listening carefully to Simon:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">Listening is important because ________________</div>
                </div>
            </div>
        `,
        homework: "Play Simon Says with someone at home. Write down one command you gave with 'Simon says' and one without.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "The Instructional Story",
        subtopic: "Drawing by Following Commands",
        lessonContent: `
            <p>Today you will be illustrators! You will draw a picture by following bossy verb commands.</p>
            <p><strong>Key Concept:</strong> Bossy verbs can be used to give step-by-step instructions for a task.</p>
            <p><strong>What is an Instructional Story?</strong></p>
            <ul>
                <li>A story that tells you what to draw, step by step</li>
                <li>Each sentence has a bossy verb</li>
                <li>You must wait for the command before drawing</li>
                <li>Listen carefully to each step</li>
            </ul>
            <p><strong>Example Instructional Story:</strong></p>
            <ol>
                <li>"Put a large circle in the middle of your page."</li>
                <li>"Move your pencil to the top and draw a small hat."</li>
                <li>"Give the circle two big eyes and a smile."</li>
                <li>"Turn your paper over and write your name."</li>
            </ol>
            <p><strong>Peer Drawing Game:</strong> Sit back-to-back with a partner. One describes a shape using bossy verbs, the other draws it without looking!</p>
            <p><strong>Why this matters:</strong> Following instructions carefully helps us complete tasks correctly and learn new things.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt" style="color: #9C27B0;"></i> Drawing by Command</div>
                <p>"Put a circle here." → You draw a circle exactly where instructed.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-friends" style="color: #FF9800;"></i> Peer Instructions</div>
                <p>Partner A: "Draw a square. Put a triangle on top."<br>Partner B draws a house!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Back-to-Back Drawing!</div>
                <p>We'll play a drawing game where you can't see your partner's paper—only bossy verbs guide you!</p>
            </div>
        `,
        taskInstructions: "Follow the instructions to draw a picture, then create your own instructions for a partner.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Instructional Story Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen to the teacher and draw each step:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">The bossy verbs I heard: <span class="answer-space" style="width: 250px;"></span></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write Your Own Instructions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write a 3-step instruction to draw a simple object (like a flower or house):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <span class="answer-space" style="width: 250px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 250px;"></span></div>
                        <div>3. <span class="answer-space" style="width: 250px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Peer Drawing Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sit back-to-back with a partner. Give your instructions from Part B. Draw what your partner describes:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">My Drawing</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">Partner's Drawing</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Bossy Verb Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Check the bossy verbs you used today:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Put</div>
                        <div>☐ Draw</div>
                        <div>☐ Move</div>
                        <div>☐ Write</div>
                        <div>☐ Turn</div>
                        <div>☐ Give</div>
                        <div>Other: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Ask a family member to give you three drawing commands using bossy verbs. Draw what they say and bring it to class.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Follow the Leader",
        subtopic: "Creating an Obstacle Course with Commands",
        lessonContent: `
            <p>Today we will become obstacle course leaders! We will use bossy verbs to guide a friend through a course.</p>
            <p><strong>Key Concept:</strong> Bossy verbs can be strung together to give multi-step directions.</p>
            <p><strong>How to Give Good Directions:</strong></p>
            <ul>
                <li>Use sequence words: <strong>First, Next, Then, Finally</strong></li>
                <li>Start with a bossy verb</li>
                <li>Be clear and specific</li>
                <li>Speak slowly and loudly enough</li>
            </ul>
            <p><strong>Example Direction Set:</strong></p>
            <ol>
                <li>"First, move to the door."</li>
                <li>"Next, turn left."</li>
                <li>"Then, stop at the desk."</li>
                <li>"Finally, lift the book."</li>
            </ol>
            <p><strong>Obstacle Course Commands:</strong></p>
            <ul>
                <li>"Move forward three steps."</li>
                <li>"Lift your foot over the book."</li>
                <li>"Turn toward the window."</li>
                <li>"Stop at the finish line."</li>
            </ul>
            <p><strong>Movement Verbs Review:</strong> The most helpful verbs for giving directions are Move, Turn, Stop, Lift, Step, Walk.</p>
            <p>Today, you will be both Leader and Follower in our classroom obstacle course!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-directions" style="color: #009688;"></i> Direction Example</div>
                <p>"First, move forward. Next, turn right. Then, stop at the chair." — Three bossy verbs in order!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flag-checkered" style="color: #E91E63;"></i> Obstacle Course</div>
                <p>Leaders guide Followers through cones, chairs, and books using only verbal commands.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Obstacle Leader Game!</div>
                <p>We'll set up a mini course. In small groups, take turns being the Leader who gives directions!</p>
            </div>
        `,
        taskInstructions: "Create and follow obstacle course directions using bossy verbs and sequence words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Plan Your Course</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Design a 4-step obstacle course using these sequence words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>First,</strong> <span class="answer-space" style="width: 200px;"></span></div>
                        <div><strong>Next,</strong> <span class="answer-space" style="width: 200px;"></span></div>
                        <div><strong>Then,</strong> <span class="answer-space" style="width: 200px;"></span></div>
                        <div><strong>Finally,</strong> <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Obstacle Course Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> With a partner, take turns leading through a real or pretend course:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD;">
                        <p>My partner followed my directions: ☐ Yes ☐ Not quite</p>
                        <p>The hardest command was: <span class="answer-space" style="width: 150px;"></span></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Most Helpful Verbs</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the three most helpful bossy verbs for giving directions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Move ☐ Turn ☐ Stop ☐ Eat ☐ Sing ☐ Lift ☐ Sleep ☐ Step</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw Your Obstacle Course</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a map of your obstacle course from Part A:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">My course includes these bossy verbs: ________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Bossy Verb Expert Badge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write one thing you learned about bossy verbs this week:
                    <div class="answer-space" style="height: 60px; margin-top: 10px; padding: 10px; background-color: #FFF9C4;">
                        This week I learned that bossy verbs ________________
                    </div>
                </div>
            </div>
        `,
        homework: "Teach someone at home how to use bossy verbs to give directions. Guide them through a simple obstacle course in your living room or yard.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2EnglishWeek7);
    console.log("english-week7-bossy-verbs.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2EnglishWeek7);
    console.log("english-week7-bossy-verbs.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2EnglishWeek7',
        metadata: grade2EnglishWeek7.metadata,
        days: grade2EnglishWeek7
    });
    console.log("english-week7-bossy-verbs.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2EnglishWeek7 = grade2EnglishWeek7;
console.log("english-week7-bossy-verbs.js loaded and registered successfully");