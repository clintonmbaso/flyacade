// Grade 4 Technology Studies - Term 2 Week 10 (Combined into 2 Days - Summative Form)
const grade4TechWeek10 = {
    metadata: {
        grade: 4,
        subject: "Technology Studies",
        term: 2,
        week: 10,
        title: "Exploring Programming Concepts",
        description: "Deep dive into programming concepts: sequence, loops, events, interactivity, and combining all three concepts into a complete program"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Programming",
        subtopic: "Creating Our First Sequence & Discovering Loops",
        lessonContent: `
            <p>Welcome to programming! Today we'll learn about SEQUENCE and LOOPS - two of the most important concepts in coding.</p>
            <p><strong>Key Question:</strong> Why does order matter when giving instructions, and how can we make code repeat?</p>
            <p><strong>What is a Sequence?</strong></p>
            <p>A sequence means putting instructions in a precise order, from top to bottom. The computer follows your instructions exactly in that order - one after another.</p>
            <p><strong>Think About This:</strong></p>
            <p>Imagine I ask you to make a sandwich. What order do you do it in?</p>
            <p>❌ <strong>Broken Sequence (This doesn't work!):</strong> Eat sandwich → Get bread → Put jam on table</p>
            <p>✅ <strong>Working Sequence:</strong> Get bread → Put jam on bread → Eat sandwich</p>
            <p><strong>What is a Loop?</strong></p>
            <p>A loop is a special instruction that tells a part of your sequence to happen again and again. Computers are great at repeating things!</p>
            <p><strong>Everyday Example:</strong> How do you wash your hands? Soap → Water → Scrub → REPEAT! You scrub back and forth many times - that's a loop!</p>
            <p><strong>Types of Loops in Scratch:</strong></p>
            <ul>
                <li><strong>repeat [10]:</strong> Runs the code inside a specific number of times</li>
                <li><strong>forever:</strong> Runs the code inside again and again forever</li>
            </ul>
            <p><strong>Key Terms:</strong></p>
            <ul>
                <li><strong>Sequence:</strong> Instructions in order from top to bottom</li>
                <li><strong>Loop:</strong> Repeating instructions</li>
                <li><strong>Script:</strong> A collection of blocks snapped together</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-robot"></i> Robot Instruction</div>
                <p>To make a robot walk across the room: 1. Take step forward, 2. Take step forward, 3. Turn left, 4. Lift arm, 5. Push button. Missing one step makes the robot fail!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sync-alt"></i> Loop in Action</div>
                <p>Without a loop: 'move 10 steps' happens once. With 'forever' loop around 'move 10 steps' and 'turn 15 degrees', the cat spins forever!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-code"></i> Scratch Sequence</div>
                <p>A 3-block sequence in Scratch: <strong>when [green flag] clicked → say [Hello!] → play sound [pop]</strong>. The computer runs these blocks from top to bottom.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bath"></i> Daily Life Sequence</div>
                <p>Brushing teeth: 1. Get toothbrush, 2. Add toothpaste, 3. Brush teeth, 4. Spit, 5. Rinse. If you do step 4 before step 3, you have a problem!</p>
            </div>
        `,
        taskInstructions: "Create a paper sequence for a robot, build your first digital sequence in Scratch, explore loops, and create a dancing cat animation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Paper Sequence Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> In your group, design the steps for a robot to walk across the room and turn on a light. Write 5 specific steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Step 1: <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #ccc;"></span></div>
                        <div>Step 2: <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #ccc;"></span></div>
                        <div>Step 3: <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #ccc;"></span></div>
                        <div>Step 4: <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #ccc;"></span></div>
                        <div>Step 5: <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #ccc;"></span></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What would happen if you put these steps in the wrong order?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Digital Sequence Practice (Scratch)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a 3-block sequence in Scratch that makes the cat:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Move</div>
                        <div>• Say "Hello!"</div>
                        <div>• Make a sound</div>
                    </div>
                    <div style="margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <strong>Remember:</strong> Always start with <strong>when [green flag] clicked</strong> from the Events (yellow) category!
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p><em>Describe or draw the blocks you used:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Understanding Loops</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is the difference between a sequence that runs once and a sequence inside a loop?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> List two everyday activities that use repetition (loops):
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Independence Challenge - Loop-The-Loop!</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create a script that makes the cat dance 10 times:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #e8f4f8;">
                        <strong>Challenge Requirements:</strong>
                        <ul style="margin-top: 5px;">
                            <li>Start with <strong>when [green flag] clicked</strong> event</li>
                            <li>Use a <strong>repeat [10]</strong> loop (orange Control category)</li>
                            <li>Inside the loop, put a <strong>2-block sequence</strong> (e.g., move + change color, or play sound + say something)</li>
                        </ul>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw or describe your blocks here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Review & Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Which direction does a sequence run: top to bottom OR bottom to top?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Why is it important to put instructions in the correct order?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> What is one thing you learned today about how loops make coding more powerful?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Write a 5-step sequence for making a bowl of cereal. Ask a family member to follow it exactly - did they need to do anything you forgot to include? Then write down 3 things in your home that happen in a loop (repeating pattern). Examples: ceiling fan spinning, washing machine agitating, microwave beeping.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Programming",
        subtopic: "Events, Interactivity & Putting It All Together",
        lessonContent: `
            <p>Today we'll learn about EVENTS, how to make our programs interactive, and put all three programming concepts together!</p>
            <p><strong>Key Questions:</strong> What starts our code running? How can we make our code respond to user actions?</p>
            <p><strong>What is an Event?</strong></p>
            <p>An event trigger is something that must happen first to make the code run. It's like starting a race - nothing happens until you hear "GO!" An event is something that happens OUTSIDE your program that tells it to start or respond. Events make programs interactive and fun!</p>
            <p><strong>Common Event Blocks (Yellow Category):</strong></p>
            <ul>
                <li><strong>when [green flag] clicked:</strong> Starts when you click the green flag - the traditional way to start your whole project</li>
                <li><strong>when [space] key pressed:</strong> Starts when you press the space bar - great for games!</li>
                <li><strong>when this sprite clicked:</strong> Starts when you click on the sprite</li>
                <li><strong>Broadcast Events:</strong> 'when I receive [message]' - lets sprites talk to each other</li>
            </ul>
            <p><strong>How They Work Together:</strong></p>
            <p>A complete program uses ALL of these concepts:</p>
            <ul>
                <li><strong>EVENT</strong> starts everything (when green flag clicked)</li>
                <li><strong>LOOP</strong> repeats behavior (forever, repeat 10)</li>
                <li><strong>SEQUENCE</strong> orders steps inside the loop (move → turn → say something)</li>
            </ul>
            <p><strong>Real-World Programming Connections:</strong></p>
            <ul>
                <li>Video games use events (button presses) and loops (enemy movement patterns)</li>
                <li>Traffic lights use sequence (red → green → yellow) and loops (repeat forever)</li>
                <li>Music players use events (play/pause buttons) and sequences (song playlist order)</li>
            </ul>
            <p><strong>Week 10 Review:</strong></p>
            <ol>
                <li><strong>SEQUENCE:</strong> Instructions in exact order from top to bottom</li>
                <li><strong>LOOP:</strong> Repeating instructions (repeat, forever)</li>
                <li><strong>EVENT:</strong> Trigger that starts code (green flag, key press, sprite click)</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-keyboard"></i> Event Trigger</div>
                <p>Using 'when [space] key pressed' means your code only runs when you touch the space bar. Try it - nothing happens until you press the key!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Video Game Controls</div>
                <p>In a video game, pressing the arrow keys moves your character. That's an EVENT! The code waits for you to press a key, then runs the movement sequence.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-database"></i> Combining Concepts</div>
                <p>Full script: <strong>when [green flag] clicked → repeat [10] → [move 10 steps, change color effect by 25]</strong>. This uses SEQUENCE (order inside), LOOP (repeat 10x), and EVENT (green flag)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-traffic-light"></i> Traffic Light Program</div>
                <p><strong>Event:</strong> when green flag clicked → <strong>Loop:</strong> forever → <strong>Sequence:</strong> red light (wait 3 sec) → green light (wait 3 sec) → yellow light (wait 1 sec)</p>
            </div>
        `,
        taskInstructions: "Create multiple event-triggered actions, design an interactive project, and create a final project combining sequence, loops, and events.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Events</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Try swapping 'when [green flag] clicked' with 'when [space] key pressed'. What happens differently?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Name two other event blocks you could use to start your code:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Multiple Events Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create THREE different event scripts for the same cat sprite:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Event 1 - Green Flag:</strong> Cat says "Ready!" for 2 seconds</div>
                        <div><strong>Event 2 - Space Key:</strong> Cat moves 50 steps and meows</div>
                        <div><strong>Event 3 - Sprite Click:</strong> Cat changes color and says "Ouch!"</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw or describe your three scripts]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Event Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Match each event to its best use:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. when [green flag] clicked ___</div>
                        <div>2. when [space] key pressed ___</div>
                        <div>3. when this sprite clicked ___</div>
                        <div>4. when I receive [start] ___</div>
                        <div style="margin-top: 10px;">
                            A. Start the main game after setup<br>
                            B. Make a character jump instantly<br>
                            C. Two sprites communicate with each other<br>
                            D. Change character's costume when clicked
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Final Challenge - Combine All Three!</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create a Scratch project that uses ALL THREE concepts:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f0f7f0;">
                        <strong>Requirements:</strong>
                        <ul style="margin-top: 5px;">
                            <li>✓ EVENT: Start your project with when [green flag] clicked</li>
                            <li>✓ LOOP: Use a repeat or forever loop</li>
                            <li>✓ SEQUENCE: Have at least 3 blocks in order inside your loop</li>
                            <li>✓ Add a second EVENT (like key press or sprite click) that does something different</li>
                        </ul>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px solid #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Draw your final script here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Concept Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Label each description as SEQUENCE, LOOP, or EVENT:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. "when space key pressed" → _________</div>
                        <div>B. "move 10 steps, then turn 15 degrees, then say 'Hi!'" → _________</div>
                        <div>C. Doing something 100 times without writing 100 lines of code → _________</div>
                        <div>D. The order you put blocks in matters → _________</div>
                        <div>E. "forever" block → _________</div>
                        <div>F. Clicking the green flag to start → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Vocabulary Review</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Write definitions in your own words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Sequence: <span class="answer-space-inline" style="display: inline-block; width: 300px; border-bottom: 1px solid #ccc;"></span></div>
                        <div style="margin-top: 10px;">Loop: <span class="answer-space-inline" style="display: inline-block; width: 300px; border-bottom: 1px solid #ccc;"></span></div>
                        <div style="margin-top: 10px;">Event: <span class="answer-space-inline" style="display: inline-block; width: 300px; border-bottom: 1px solid #ccc;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part G: Design & Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Describe an interactive program you would like to create. What events would you use?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> Why are events important for making programs fun and useful?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> What was the most interesting programming concept you learned this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> How could you use loops and events to make a fun game for your family?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 examples of events in technology around your home (examples: pressing a doorbell, clapping to turn off lights, motion sensor lights). List each one and what action it triggers. Then create a one-page poster explaining Sequence, Loops, and Events. Include a drawing of a Scratch script that uses all three. Share with your family and explain how coding works!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4TechWeek10);
    console.log("grade4-tech-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4TechWeek10);
    console.log("grade4-tech-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4TechWeek10',
        metadata: grade4TechWeek10.metadata,
        days: grade4TechWeek10
    });
    console.log("grade4-tech-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4TechWeek10 = grade4TechWeek10;
console.log("grade4-tech-week10.js loaded and registered successfully");