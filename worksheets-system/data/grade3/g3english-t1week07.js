// Grade 3 English - Week 7 Data (Instructions & Sequencing)
const grade3EnglishWeek7 = {
    metadata: {
        grade: 3,
        subject: "English",
        week: 7,
        title: "The Instruction Experts — Giving Clear Directions",
        description: "Learning to use sequence words and imperative verbs to give and follow clear instructions"
    },
    
    monday: {
        subject: "English",
        topic: "The Magic of Order",
        subtopic: "Using sequence words to organize steps",
        lessonContent: `
            <p>Welcome to our English lesson! Today we will learn how to give instructions that are easy to follow by using special "order words."</p>
            <p><strong>Key Concept:</strong> Sequence words help us organize steps so others can understand the correct order.</p>
            <p><strong>Why is order important?</strong> Without order, instructions can be very confusing! Imagine trying to make a sandwich if someone says "eat it" before "spread the peanut butter"!</p>
            <p><strong>Meet the Sequence Words:</strong></p>
            <ul>
                <li><strong>First</strong> - The very beginning step</li>
                <li><strong>Next</strong> - The step that comes after</li>
                <li><strong>Then</strong> - Another step in the middle</li>
                <li><strong>Finally</strong> - The very last step</li>
                <li><strong>Second, Third</strong> - For numbered steps</li>
            </ul>
            <p><strong>Think of them as a map:</strong> These words act like signposts that guide the listener through the process!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ol" style="color: #2196F3;"></i> Getting Ready for School</div>
                <p><strong>First</strong>, I wake up.<br>
                <strong>Next</strong>, I brush my teeth.<br>
                <strong>Then</strong>, I put on my uniform.<br>
                <strong>Finally</strong>, I eat breakfast.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sandwich" style="color: #795548;"></i> Making a Sandwich</div>
                <p><strong>First</strong>, get two slices of bread.<br>
                <strong>Next</strong>, spread peanut butter on one slice.<br>
                <strong>Then</strong>, spread jelly on the other slice.<br>
                <strong>Finally</strong>, put the slices together.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Order Detective Game!</div>
                <p>Let's play "Order Detective!" I'll give steps out of order, and you have to shout which sequence word should come next!</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice using sequence words.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Sequence the steps for washing hands. Write them in order using "First," "Next," "Then," and "Finally":
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Dry your hands with a towel.</div>
                    <div>☐ Rub soap on your hands for 20 seconds.</div>
                    <div>☐ Turn on the water and wet your hands.</div>
                    <div>☐ Rinse your hands under clean water.</div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Write the correct sequence word in each blank:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>____________, open your notebook.</div>
                    <div>____________, write your name at the top.</div>
                    <div>____________, read the instructions carefully.</div>
                    <div>____________, begin the first question.</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw four pictures showing a simple process (like planting a seed). Label each picture with a sequence word:
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                    <div class="drawing-area" style="height: 100px;"></div>
                    <div class="drawing-area" style="height: 100px;"></div>
                    <div class="drawing-area" style="height: 100px;"></div>
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why are "First" and "Finally" especially important in a list of steps?
                <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
            </div>
        `,
        homework: "Write four-step instructions for how to make your bed using First, Next, Then, and Finally.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Action Bosses",
        subtopic: "Using imperative verbs to give clear commands",
        lessonContent: `
            <p>Today we will learn about "Action Bosses" – special verbs that tell people exactly what to do!</p>
            <p><strong>Key Concept:</strong> Imperative verbs are bossy verbs that give commands or instructions.</p>
            <p><strong>What are "Action Bosses"?</strong> They are verbs that come right after sequence words to tell us what action to take.</p>
            <p><strong>Common Action Bosses:</strong></p>
            <ul>
                <li><strong>Add</strong> - Put something in</li>
                <li><strong>Stir</strong> - Mix around</li>
                <li><strong>Fold</strong> - Bend over</li>
                <li><strong>Cut</strong> - Use scissors</li>
                <li><strong>Put</strong> - Place something</li>
                <li><strong>Get</strong> - Take or find</li>
                <li><strong>Draw</strong> - Make a picture</li>
            </ul>
            <p><strong>How they work:</strong> Sequence word + Action Boss + Object<br>
            Example: <strong>"First, fold the paper."</strong></p>
            <p><strong>Why are they important?</strong> Without action bosses, instructions would be unclear. "First, the paper" doesn't tell us what to DO with the paper!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils" style="color: #FF9800;"></i> Cooking Instructions</div>
                <p>"Add the sugar."<br>
                "Stir the soup."<br>
                "Cut the vegetables."<br>
                These are all bossy verbs that tell you exactly what to do!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-scissors" style="color: #9C27B0;"></i> Craft Instructions</div>
                <p>"Fold the paper in half."<br>
                "Draw a circle."<br>
                "Cut along the line."<br>
                Each verb is the boss of the sentence!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Simon Says Review!</div>
                <p>Let's play "Simon Says" with our new Action Bosses! When I say "Simon says 'stir the pot'", you pretend to stir. But if I just say "stir the pot", don't move!</p>
            </div>
        `,
        taskInstructions: "Practice using imperative verbs in instructions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Verbs and Objects Match</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match the Action Boss with its object:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Stir → ☐ the paper</div>
                        <div>Fold → ☐ the soup</div>
                        <div>Add → ☐ a picture</div>
                        <div>Draw → ☐ the sugar</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Recipe for Happiness</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write your own "Recipe for Happiness" using at least five different Action Bosses:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: "Add two cups of smiles."</div>
                        <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Action Boss Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the Action Boss in each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>First, <u>get</u> a piece of paper.</div>
                        <div>Next, <u>fold</u> it in half.</div>
                        <div>Then, <u>draw</u> a smiley face.</div>
                        <div>Finally, <u>cut</u> around the edges.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Instructions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write instructions for how to draw a simple house. Use at least three different Action Bosses:
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find five instructions at home (on food packages, toys, or games). Write down the Action Boss verbs from each one.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "The Paper Boat",
        subtopic: "Giving and following oral instructions through role play",
        lessonContent: `
            <p>Today you will become the teacher! We'll practice giving clear instructions by making paper boats together.</p>
            <p><strong>Key Concept:</strong> Good instructions combine sequence words AND action bosses to make directions easy to follow.</p>
            <p><strong>Today's Challenge:</strong> You will guide a partner through making a paper boat using only your words!</p>
            <p><strong>Vocabulary Review:</strong></p>
            <ul>
                <li><strong>Sequence Words:</strong> First, Next, Then, Finally</li>
                <li><strong>Action Bosses:</strong> Get, Fold, Press, Turn, Pull</li>
            </ul>
            <p><strong>How to be a good instructor:</strong></p>
            <ol>
                <li>Speak slowly and clearly</li>
                <li>Use sequence words to show order</li>
                <li>Use action bosses to say exactly what to do</li>
                <li>Check if your partner understands before moving on</li>
            </ol>
            <p><strong>How to be a good follower:</strong></p>
            <ol>
                <li>Listen carefully for sequence words</li>
                <li>Wait for the action boss before moving</li>
                <li>Ask questions if you're confused</li>
                <li>Follow exactly what your "teacher" says</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ship" style="color: #03A9F4;"></i> Paper Boat Steps</div>
                <p>"First, get a rectangular piece of paper."<br>
                "Next, fold the paper in half."<br>
                "Then, fold the corners to the center."<br>
                Model the first few steps so students understand.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users" style="color: #4CAF50;"></i> Role Play Rules</div>
                <p><strong>Teacher Role:</strong> Has instructions but cannot touch the paper.<br>
                <strong>Folder Role:</strong> Must do exactly what the Teacher says.<br>
                After three steps, swap roles!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> The Silent Challenge</div>
                <p>Can you give instructions without pointing or touching? This is the ultimate test of clear speaking!</p>
            </div>
        `,
        taskInstructions: "Work with a partner to practice giving and following instructions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Role Play Preparation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With your partner, decide who will be Teacher first and who will be Folder. Get one piece of paper ready:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My role first: ☐ Teacher ☐ Folder</div>
                        <div>My partner's role first: ☐ Teacher ☐ Folder</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Paper Boat Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the role play. After swapping roles, write down the three most important steps you used:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Step 1: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>Step 2: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>Step 3: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions about your experience:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What happened if the Teacher forgot to use a word like "Next" or "Fold"?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>Which was harder: giving instructions or following them? Why?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Perfect Instructions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write the perfect three-step instructions for making the first fold of the paper boat:
                    <div class="answer-space" style="height: 90px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Teach a family member how to make a paper airplane or another simple craft. Write down what instructions worked best.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Putting It All Together",
        subtopic: "Following and giving complex instructions in real-world context",
        lessonContent: `
            <p>Today is our instruction challenge day! We'll use everything we've learned in a fun obstacle course activity.</p>
            <p><strong>Key Concept:</strong> Following instructions well is just as important as giving them well.</p>
            <p><strong>How to be an expert instruction follower:</strong></p>
            <ul>
                <li>Listen carefully for sequence words (First, Next, Then, Finally)</li>
                <li>Identify the action boss in each step</li>
                <li>Wait until the speaker finishes each instruction</li>
                <li>Ask for clarification if confused</li>
            </ul>
            <p><strong>Today's Activities:</strong></p>
            <ol>
                <li>Class obstacle course - Following my instructions</li>
                <li>Partner "Mini-Map" challenge - Writing instructions for your partner</li>
                <li>Instruction reflection - What makes instructions easy or hard to follow?</li>
            </ol>
            <p><strong>Vocabulary Review:</strong> First, Next, Then, Finally, Add, Stir, Fold, Cut, Put, Get, Draw</p>
            <p><strong>Remember:</strong> Good instructions are like a treasure map – they lead you exactly where you need to go!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road" style="color: #8BC34A;"></i> Obstacle Course Example</div>
                <p>"First, walk around the chair.<br>
                Next, touch the blue book.<br>
                Then, hop on one foot twice.<br>
                Finally, sit back down at your desk."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map" style="color: #FF5722;"></i> Mini-Map Guide</div>
                <p>Writing instructions from your desk to the door:<br>
                "First, stand up.<br>
                Next, turn left.<br>
                Then, take three steps forward.<br>
                Finally, stop at the door."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> The Instruction Relay</div>
                <p>We'll play a relay game where each team must follow a series of written instructions perfectly to reach the finish line!</p>
            </div>
        `,
        taskInstructions: "Complete the instruction challenges with your partner.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Class Obstacle Course</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow the teacher's three-step instruction. Check each box when completed:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ First, touch your desk.</div>
                        <div>☐ Next, clap your hands twice.</div>
                        <div>☐ Finally, whisper your name.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Mini-Map Guide</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write a 4-step "Mini-Map Guide" for your partner to get from their desk to a specific spot in the room:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Destination: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Step 1: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>Step 2: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>Step 3: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>Step 4: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Follow Your Partner's Map</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Follow your partner's Mini-Map Guide. Did you reach the correct destination?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Yes, I reached the right spot!</div>
                        <div>☐ No, I ended up somewhere else.</div>
                        <div>What was clear or confusing about your partner's instructions?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Instruction Expert Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Review our key vocabulary and answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Circle all the sequence words: First Add Next Stir Then Finally Put</div>
                        <div>Circle all the action bosses: First Add Next Stir Then Finally Put</div>
                        <div>Share one instruction from this week that was easy to follow and why:</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Certificate of Instruction Excellence</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself giving clear instructions to someone. Write one tip for being a good instructor:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">My tip for good instructions: ________________</div>
                </div>
            </div>
        `,
        homework: "Create a set of instructions for a simple game or activity you know well. Use at least four steps with sequence words and action bosses.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3EnglishWeek7);
    console.log("english-week7-instructions.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3EnglishWeek7);
    console.log("english-week7-instructions.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3EnglishWeek7',
        metadata: grade3EnglishWeek7.metadata,
        days: grade3EnglishWeek7
    });
    console.log("english-week7-instructions.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3EnglishWeek7 = grade3EnglishWeek7;
console.log("english-week7-instructions.js loaded and registered successfully");