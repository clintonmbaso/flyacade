// Grade 4 Technology Studies - Term 3 Week 8 Data
const grade4TechWeek8 = {
    metadata: {
        grade: 4,
        subject: "Technology Studies",
        term: 3,
        week: 8,
        title: "Controlling the Flow",
        description: "Understanding events and loops in programming"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Programming Fundamentals",
        subtopic: "Understanding Events",
        lessonContent: `
            <p>Welcome to our lesson on events! Today we'll learn how to start a program by triggering an event.</p>
            <p><strong>Key Question:</strong> Does a car move by itself, or does the driver have to do something first?</p>
            <p><strong>Introduction:</strong> Just like a car needs a driver to turn the key or press a button, a computer program needs an "event" to start. Events are actions that tell the program when to begin running.</p>
            <p><strong>What are Events?</strong></p>
            <ul>
                <li>Events are triggers that start a program or script</li>
                <li>They are like giving a command: "When this happens, do that!"</li>
                <li>In Scratch, event blocks are colored YELLOW</li>
            </ul>
            <p><strong>Common Event Blocks:</strong></p>
            <ol>
                <li><strong>When Green Flag Clicked:</strong> Starts the program when you click the green flag</li>
                <li><strong>When Space Key Pressed:</strong> Starts when you press a specific key (like Space, Enter, or arrow keys)</li>
                <li><strong>When Sprite Clicked:</strong> Starts when you click on a character or object</li>
                <li><strong>When I Receive Message:</strong> Starts when a broadcast message is received</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> The Car Analogy</div>
                <p>A car doesn't move by itself. The driver turns the key (event) → engine starts → car moves. In programming, clicking the green flag (event) → script starts → sprite moves!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-open"></i> Real-Life Events</div>
                <p>When you open the refrigerator door (event), the light turns on (action). When your alarm clock rings (event), you wake up (action). Events happen all around us!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-keyboard"></i> Keyboard Events</div>
                <p>Pressing the Space bar can make a character jump in a game. Pressing the left arrow key can make it move left. Each key press is an event!</p>
            </div>
        `,
        taskInstructions: "Create a script that starts only when an event occurs, then add a 'Say Hello' block.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Events</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each event to when it would happen:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• When Green Flag Clicked → _________</div>
                        <div>• When Space Key Pressed → _________</div>
                        <div>• When Sprite Clicked → _________</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your First Event Script</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using Scratch (or paper pseudocode), create a script that:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Starts when the Green Flag is clicked</div>
                        <div>• Makes the sprite say "Hello World!" for 2 seconds</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Try Different Events</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a second script that starts when you press the Space bar and makes the sprite say "Space bar pressed!":
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What happens if you have two different events starting two different scripts on the same sprite?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important for a program to have an event to start it?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find three examples of events in your home (e.g., pressing a light switch, opening a door). Write down each event and what action happens next.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Programming Fundamentals",
        subtopic: "Introduction to Loops (Repetition)",
        lessonContent: `
            <p>Today we'll learn how to use loops to make our code shorter, cleaner, and more efficient!</p>
            <p><strong>Key Question:</strong> Instead of writing 'move forward' ten times, is there an easier way?</p>
            <p><strong>Introduction:</strong> Imagine having to write the same instruction 100 times! That would take forever. Loops let us tell the computer to "repeat" an action without writing it over and over.</p>
            <p><strong>What are Loops?</strong></p>
            <ul>
                <li>Loops are blocks that repeat actions</li>
                <li>They make code shorter and easier to read</li>
                <li>In Scratch, loop blocks are colored ORANGE</li>
            </ul>
            <p><strong>Types of Loops:</strong></p>
            <ol>
                <li><strong>Repeat [number] Loop:</strong> Repeats an action a specific number of times</li>
                <li><strong>Forever Loop:</strong> Repeats an action continuously (forever!)</li>
            </ol>
            <p><strong>Why Use Loops?</strong></p>
            <ul>
                <li>Saves time - write once, repeat many times</li>
                <li>Makes code cleaner and easier to understand</li>
                <li>Reduces mistakes - less typing means fewer errors</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-square"></i> Drawing a Square</div>
                <p>Without a loop: "Move 100 steps, turn 90°, Move 100 steps, turn 90°, Move 100 steps, turn 90°, Move 100 steps, turn 90°" (8 blocks!)<br>
                With a loop: "Repeat 4 times: Move 100 steps, turn 90°" (only 3 blocks!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table-tennis"></i> Bouncing Ball</div>
                <p>Using the "Forever" block, you can make a sprite bounce back and forth across the screen without stopping. It will keep going until you click the red stop button!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heartbeat"></i> Real-Life Repetition</div>
                <p>Your heart uses a loop! It beats over and over again, repeating the same action millions of times without you having to think about it.</p>
            </div>
        `,
        taskInstructions: "Use 'Repeat' and 'Forever' blocks to simplify code and create repeating actions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: From Repeated Code to a Loop</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Here is a long script. Rewrite it using a "Repeat" block:
                    <div style="background-color: #f5f5f5; padding: 10px; margin-top: 10px; font-family: monospace;">
                        Move 50 steps<br>
                        Turn 90°<br>
                        Move 50 steps<br>
                        Turn 90°<br>
                        Move 50 steps<br>
                        Turn 90°<br>
                        Move 50 steps<br>
                        Turn 90°
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing a Square Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Revisit the square pattern from Week 1. Write a loop that draws a square:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> How many blocks did you save by using a loop instead of writing each step?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Forever Loop Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a script using the "Forever" block to make a sprite bounce back and forth:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What would happen if you used "Repeat 10" instead of "Forever"? How would it be different?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create a loop that makes a sprite say "Hello" 5 times, then "Goodbye" once:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find something in your daily routine that repeats (like brushing teeth or tying shoes). Write down the steps and how many times you repeat them.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Programming Fundamentals",
        subtopic: "Practice Day: Combining Events and Loops",
        lessonContent: `
            <p>Today we'll practice combining what we learned about events and loops to create more interesting programs!</p>
            <p><strong>Key Question:</strong> How can we use events AND loops together?</p>
            <p><strong>Review:</strong></p>
            <ul>
                <li><strong>Events (Yellow Blocks):</strong> Start a script when something happens</li>
                <li><strong>Loops (Orange Blocks):</strong> Repeat actions multiple times</li>
            </ul>
            <p><strong>Combining Events and Loops:</strong></p>
            <ul>
                <li>An EVENT starts the program (when green flag clicked)</li>
                <li>Inside the script, a LOOP repeats an action (repeat 10 times)</li>
                <li>Together, they create powerful, efficient programs!</li>
            </ul>
            <p><strong>Example Project Ideas:</strong></p>
            <ol>
                <li>A dancing sprite that moves when you press the Space bar</li>
                <li>A drawing program that makes shapes using repeat loops</li>
                <li>A forever bouncing ball that starts when the green flag is clicked</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-play"></i> Event + Loop = Magic</div>
                <p>When Green Flag Clicked → Forever → Move 10 steps, If on edge bounce. This makes a sprite move forever once you start the program!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Drawing Shapes</div>
                <p>When Space Key Pressed → Repeat 5 times → Move 100 steps, Turn 72°. This draws a pentagon every time you press the Space bar!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Creating Patterns</div>
                <p>Combine events and loops to create music patterns, dance routines, or art. The possibilities are endless!</p>
            </div>
        `,
        taskInstructions: "Combine events and loops to create interactive programs.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Event + Loop Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a script that:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Starts when the Green Flag is clicked</div>
                        <div>• Uses a Forever loop to make the sprite move forward and bounce off edges</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Keyboard Control</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create two separate event scripts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Press Left Arrow → move left 10 steps</div>
                        <div>• Press Right Arrow → move right 10 steps</div>
                    </div>
                    <div class="drawing-area" style="height: 140px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Shape Drawer Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a script that draws a square when you press the "S" key:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Modify your script to draw a triangle (repeat 3 times, turn 120°) when you press "T":
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Design your own program that uses at least one event block and one loop block. Describe what it does:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw your script using blocks:
                    <div class="drawing-area" style="height: 130px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Write down step-by-step instructions for a simple dance routine. Identify any repeated moves that could be turned into a loop.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Technology Studies",
        topic: "Programming Fundamentals",
        subtopic: "Review & Project Day: Events and Loops",
        lessonContent: `
            <p>Today we'll review everything we learned about events and loops, then apply our knowledge to create a final project!</p>
            <p><strong>Week 8 Review:</strong></p>
            <ol>
                <li><strong>Events (Yellow Blocks):</strong> Start a program when something happens</li>
                <li><strong>Loops (Orange Blocks):</strong> Repeat actions without writing them multiple times</li>
                <li><strong>Combining Events and Loops:</strong> Create powerful, clean, efficient programs</li>
            </ol>
            <p><strong>Key Concepts to Remember:</strong></p>
            <ul>
                <li>Events are triggers that tell the computer "WHEN to start"</li>
                <li>Loops tell the computer "HOW MANY TIMES to repeat"</li>
                <li>Together, they make coding faster and more fun!</li>
            </ul>
            <p><strong>Final Project:</strong> Create an interactive animation or game that uses at least one event block and one loop block.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy"></i> Project Inspiration 1: Dancing Sprite</div>
                <p>When Space Key Pressed → Repeat 10 times → Move 20 steps, Turn 15°, Change color. Make a sprite dance every time you press a key!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-robot"></i> Project Inspiration 2: Pong Game</div>
                <p>When Green Flag Clicked → Forever → Move, If on edge bounce. Use arrow keys (events) to move a paddle!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-art"></i> Project Inspiration 3: Pattern Maker</div>
                <p>When G Flag Clicked → Forever → Repeat 36 times → Move 10 steps, Turn 10°. Create beautiful spiral art!</p>
            </div>
        `,
        taskInstructions: "Complete the review activities and create a final project using events and loops.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Vocabulary Review</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Define these key terms in your own words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Event: _________________________________</div>
                        <div>• Loop: __________________________________</div>
                        <div>• Repeat Block: ___________________________</div>
                        <div>• Forever Block: __________________________</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Which Block Would You Use?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write "Event" or "Loop" for each situation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Starting a game when you click the flag: _________</div>
                        <div>• Making a character jump when you press the up arrow: _________</div>
                        <div>• Repeating a dance move 10 times: _________</div>
                        <div>• Making a sprite move forever: _________</div>
                        <div>• Starting a script when a sprite is clicked: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Final Project</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a final project that includes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>✓ At least ONE event block</div>
                        <div>✓ At least ONE loop block (Repeat or Forever)</div>
                        <div>✓ A clear purpose (game, animation, or art)</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Project Explanation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Describe what your project does and which event and loop blocks you used:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most interesting thing you learned about events and loops this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> How do you think loops make programming easier?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Teach a family member what events and loops are. Have them press the Space bar while you pretend to be a sprite performing a repeated action (like jumping or waving)!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4TechWeek8);
    console.log("grade4-tech-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4TechWeek8);
    console.log("grade4-tech-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4TechWeek8',
        metadata: grade4TechWeek8.metadata,
        days: grade4TechWeek8
    });
    console.log("grade4-tech-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4TechWeek8 = grade4TechWeek8;
console.log("grade4-tech-week8.js loaded and registered successfully");