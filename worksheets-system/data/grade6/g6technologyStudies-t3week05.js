// Grade 6 Technology Studies - Term 3 Week 5 Data
const grade6TechStudiesWeek5 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 3,
        week: 5,
        title: "Creating Programs",
        description: "Introduction to simple animations, game mechanics, and debugging in block-based programming"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Creating Programs",
        subtopic: "Simple Animations",
        lessonContent: `
            <p>Welcome to the world of programming! Today we'll learn how to make characters come alive using simple animations.</p>
            <p><strong>Key Question:</strong> How can we make a character on screen move, change appearance, or talk?</p>
            <p><strong>Introduction:</strong> Animation is the illusion of movement created by showing slightly different images in rapid succession. In block-based programming (like Scratch), we use code blocks to control what our characters (sprites) do.</p>
            <p><strong>Basic Animation Concepts:</strong></p>
            <ol>
                <li><strong>Sprite:</strong> A character or object that can be programmed</li>
                <li><strong>Costume:</strong> Different appearances of the same sprite</li>
                <li><strong>Script:</strong> A set of connected code blocks that run a program</li>
                <li><strong>Event:</strong> Something that triggers code to run (like clicking a green flag)</li>
            </ol>
            <p><strong>Common Animation Blocks:</strong></p>
            <ul>
                <li><strong>When Green Flag Clicked:</strong> Starts the animation</li>
                <li><strong>Say [Hello] for 2 seconds:</strong> Makes the character speak</li>
                <li><strong>Next Costume:</strong> Changes the sprite's appearance</li>
                <li><strong>Wait 0.5 seconds:</strong> Slows down the animation</li>
                <li><strong>Move 10 steps:</strong> Makes the character move</li>
                <li><strong>Glide to (x,y):</strong> Smoothly moves the character</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> Talking Character</div>
                <p>When green flag clicked → Say "Hello!" for 2 seconds → Say "How are you?" for 2 seconds. Your character can have conversations!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-theater-masks"></i> Costume Change</div>
                <p>A bird character flying: Next Costume → Wait 0.2 seconds → Next Costume → Wait 0.2 seconds (repeat). This makes wings flap!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fade"></i> Smooth Movement</div>
                <p>Glide to x: 200 y: 0 over 2 seconds makes a character slide smoothly across the screen instead of jumping.</p>
            </div>
        `,
        taskInstructions: "Create a simple animated character using block-based programming logic.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Plan Your Animated Character</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose a character (animal, person, or object). Draw your character and its two different costumes (poses):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <div style="display: flex; justify-content: space-around; padding: 20px;">
                            <div style="text-align: center;">Costume 1<br><div style="width: 80px; height: 80px; border: 1px solid #999; margin-top: 5px;"></div></div>
                            <div style="text-align: center;">Costume 2<br><div style="width: 80px; height: 80px; border: 1px solid #999; margin-top: 5px;"></div></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write Your Code Blocks</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the sequence of blocks needed to make your character:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Greet the user by saying something</div>
                        <div>• Change costumes (animate) at least 5 times</div>
                        <div>• Move across the screen</div>
                    </div>
                    <div class="code-area" style="height: 150px; margin-top: 10px; background: #1e1e1e; color: #d4d4d4; padding: 10px; font-family: monospace;">
                        <p>When green flag clicked:</p>
                        <p>  _________________________</p>
                        <p>  _________________________</p>
                        <p>  _________________________</p>
                        <p>  _________________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Animation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using block-based programming software (Scratch or similar), build your animated character program.
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What happens if you change the "wait" times? Try faster and slower - describe the difference:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Add a second character to your animation. Make them have a conversation using 'say' blocks.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Creating Programs",
        subtopic: "Creating Games",
        lessonContent: `
            <p>Today we'll take our coding skills to the next level by learning how to create simple games!</p>
            <p><strong>Key Question:</strong> How do games know when something happens, like collecting a coin or bumping into a wall?</p>
            <p><strong>Introduction:</strong> Games use special logic called "if-then" statements. The computer checks if something is true (like touching an object), and then does something (like adding a point).</p>
            <p><strong>Basic Game Mechanics:</strong></p>
            <ol>
                <li><strong>Conditional Statements (If-Then):</strong> If something happens, then do something else</li>
                <li><strong>Loops (Forever/Repeat):</strong> Keep checking for conditions over and over</li>
                <li><strong>Variables:</strong> Store information (like score or lives)</li>
                <li><strong>Collision Detection:</strong> Checking when two objects touch</li>
            </ol>
            <p><strong>Essential Game Blocks:</strong></p>
            <ul>
                <li><strong>If [condition] then:</strong> Checks if something is true</li>
                <li><strong>Touching [sprite]?</strong> Checks if character touches another object</li>
                <li><strong>Change [score] by 1:</strong> Adds points</li>
                <li><strong>Forever:</strong> Repeats code continuously</li>
                <li><strong>Hide / Show:</strong> Makes objects appear/disappear</li>
                <li><strong>Broadcast [message]:</strong> Sends a signal to other sprites</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Coin Collection</div>
                <p><span style="font-family: monospace;">Forever → If touching (player) → then → Change score by 1 → Hide coin → Play pop sound</span></p>
                <p>The game constantly checks if the player touches the coin. When it happens, you earn a point and the coin disappears!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Wall Bounce</div>
                <p><span style="font-family: monospace;">If touching edge → then → Turn 180 degrees → Move 10 steps</span></p>
                <p>This makes a character bounce off walls instead of getting stuck.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heartbeat"></i> Lives System</div>
                <p><span style="font-family: monospace;">If touching (enemy) → then → Change [lives] by -1 → Go to start position</span></p>
                <p>Each time you touch an enemy, you lose one life!</p>
            </div>
        `,
        taskInstructions: "Design a simple game using if-then logic and game mechanics.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Design Your Game</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill out this game design document:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Game Name:</strong> _________________________</div>
                        <div><strong>Player Character:</strong> _________________________</div>
                        <div><strong>Object to Collect/Avoid:</strong> _________________________</div>
                        <div><strong>How to Win:</strong> _________________________</div>
                        <div><strong>How to Lose:</strong> _________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write If-Then Rules</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write 3 "if-then" rules for your game using the correct format:
                    <div class="code-area" style="height: 150px; margin-top: 10px; background: #1e1e1e; color: #d4d4d4; padding: 10px; font-family: monospace;">
                        <p>Rule 1: If ____________________ then ____________________</p>
                        <p>Rule 2: If ____________________ then ____________________</p>
                        <p>Rule 3: If ____________________ then ____________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Flowchart Your Game Logic</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a flowchart showing what happens when the player touches different objects:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Build and Test</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Build your game in block-based programming software. What worked well? What was challenging?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Add a score counter and a 'game over' message to your game when lives reach zero.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Creating Programs",
        subtopic: "Debugging",
        lessonContent: `
            <p>Today we'll learn one of the most important skills in programming: finding and fixing errors (called bugs)!</p>
            <p><strong>Key Question:</strong> What do you do when your program doesn't work the way you expected?</p>
            <p><strong>Introduction:</strong> Debugging is the process of finding and fixing mistakes in your code. Even expert programmers spend most of their time debugging! Bugs are simply errors - and fixing them teaches you to be a better programmer.</p>
            <p><strong>Common Types of Bugs:</strong></p>
            <ol>
                <li><strong>Syntax Errors:</strong> Blocks don't fit together correctly (like using a wrong block type)</li>
                <li><strong>Logic Errors:</strong> The code runs but does something unexpected (like a character moving the wrong direction)</li>
                <li><strong>Order Errors:</strong> Blocks are in the wrong sequence (like saying goodbye before hello)</li>
                <li><strong>Missing Blocks:</strong> Forgetting an important block (like no "forever" loop to keep checking)</li>
            </ol>
            <p><strong>Debugging Strategies:</strong></p>
            <ul>
                <li><strong>Read Carefully:</strong> Check each block in order</li>
                <li><strong>Test One Part at a Time:</strong> Isolate the problem</li>
                <li><strong>Use Say Blocks:</strong> Make your program "tell you" what it's thinking</li>
                <li><strong>Ask a Friend:</strong> Sometimes a fresh pair of eyes sees the problem</li>
                <li><strong>Take a Break:</strong> Step away and come back with a clear mind</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Bug #1: Character Won't Move</div>
                <p><span style="font-family: monospace;">When green flag clicked → Move 10 steps</span></p>
                <p><strong>Problem:</strong> The character moves once and stops.<br>
                <strong>Fix:</strong> Add "Forever" around the move block to keep moving!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Bug #2: Score Doesn't Increase</div>
                <p><span style="font-family: monospace;">If touching coin → then → Change score by 1</span></p>
                <p><strong>Problem:</strong> The coin keeps giving points every frame (too fast!)<br>
                <strong>Fix:</strong> Add "Hide" and "Wait until not touching coin" before showing again.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Bug #3: Wrong Direction</div>
                <p><span style="font-family: monospace;">If key [up arrow] pressed → then → Change y by -10</span></p>
                <p><strong>Problem:</strong> Up arrow makes the character go DOWN!<br>
                <strong>Fix:</strong> Change "-10" to "+10" for upward movement.</p>
            </div>
        `,
        taskInstructions: "Identify and fix bugs in a broken program.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Bug Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Each code snippet below has a bug. Identify the bug and write the fix:
                    
                    <div style="margin-top: 15px; background: #f5f5f5; padding: 10px;">
                        <strong>Bug 1:</strong>
                        <div style="font-family: monospace; background: #1e1e1e; color: #d4d4d4; padding: 10px; margin-top: 5px;">
                            When green flag clicked<br>
                            Say "Goodbye!"<br>
                            Wait 2 seconds<br>
                            Say "Hello!"
                        </div>
                        <div><strong>Bug:</strong> _________________________</div>
                        <div><strong>Fix:</strong> _________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                    
                    <div style="margin-top: 15px; background: #f5f5f5; padding: 10px;">
                        <strong>Bug 2:</strong>
                        <div style="font-family: monospace; background: #1e1e1e; color: #d4d4d4; padding: 10px; margin-top: 5px;">
                            When green flag clicked<br>
                            If touching enemy then<br>
                            &nbsp;&nbsp;Say "Game Over"<br>
                            (Missing closing block)
                        </div>
                        <div><strong>Bug:</strong> _________________________</div>
                        <div><strong>Fix:</strong> _________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                    
                    <div style="margin-top: 15px; background: #f5f5f5; padding: 10px;">
                        <strong>Bug 3:</strong>
                        <div style="font-family: monospace; background: #1e1e1e; color: #d4d4d4; padding: 10px; margin-top: 5px;">
                            When green flag clicked<br>
                            Forever<br>
                            &nbsp;&nbsp;Move 10 steps<br>
                            &nbsp;&nbsp;If touching edge then<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;Move -10 steps
                        </div>
                        <div><strong>Bug:</strong> _________________________</div>
                        <div><strong>Fix:</strong> _________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Debug Your Own Program</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look back at your game from yesterday. Does it work perfectly? If not:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What bug did you find? _________________________</div>
                        <div>• How did you fix it? _________________________</div>
                    </div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Debugging Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a debugging checklist that you can use when your program doesn't work:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do programmers say "debugging is learning"? What can you learn from your mistakes?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Swap programs with a classmate. Try to find and fix at least two bugs in their program. Write down what you found.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechStudiesWeek5);
    console.log("grade6-techstudies-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechStudiesWeek5);
    console.log("grade6-techstudies-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechStudiesWeek5',
        metadata: grade6TechStudiesWeek5.metadata,
        days: grade6TechStudiesWeek5
    });
    console.log("grade6-techstudies-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechStudiesWeek5 = grade6TechStudiesWeek5;
console.log("grade6-techstudies-week5.js loaded and registered successfully");