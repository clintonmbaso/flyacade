// Grade 5 Technology Studies - Term 3 Week 5 Data
const grade5TechStudiesWeek5 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        term: 3,
        week: 5,
        title: "Advanced Coding and Games",
        description: "Exploring timing, events, and game creation in coding"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Advanced Coding and Games",
        subtopic: "Timing and Events in Coding",
        lessonContent: `
            <p>Welcome to the world of interactive coding! Today we'll learn how to make things happen at the right time using events and timing blocks.</p>
            <p><strong>Key Question:</strong> How do we tell the computer WHEN to do something?</p>
            <p><strong>Introduction:</strong> In coding, an <strong>event</strong> is something that happens that triggers an action. Events make programs interactive and responsive to users!</p>
            <p><strong>What are Events?</strong></p>
            <ul>
                <li>Events are "triggers" that start a sequence of code</li>
                <li>Without events, programs would be static and boring</li>
                <li>Events make characters move, talk, and react when YOU want them to</li>
            </ul>
            <p><strong>Common Event Blocks:</strong></p>
            <ol>
                <li><strong>"When Clicked"</strong> - Triggers code when an object is clicked</li>
                <li><strong>"When Green Flag Clicked"</strong> - Starts the program</li>
                <li><strong>"When Key Pressed"</strong> - Triggers action when a keyboard key is pressed</li>
                <li><strong>"When This Sprite Clicked"</strong> - Specific to one character</li>
            </ol>
            <p><strong>Timing Blocks:</strong></p>
            <ul>
                <li><strong>"Wait ___ Seconds"</strong> - Pauses code before moving to next action</li>
                <li><strong>"Repeat ___ Times"</strong> - Loops an action a specific number of times</li>
                <li><strong>"Forever"</strong> - Repeats an action continuously</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-pointer"></i> Click to Animate</div>
                <p>When you click on a character, it can say "Hello!" or jump or change color. The click is the EVENT that triggers the animation.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hourglass-half"></i> Timing is Everything</div>
                <p>Code: "When key pressed → move 10 steps → wait 1 second → say 'Done!'". The wait block creates a pause between actions.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Character Interactions</div>
                <p>You can make two characters talk to each other! Character 1 says "Hello" → wait 2 seconds → Character 2 says "Hi there!"</p>
            </div>
        `,
        taskInstructions: "Explore event blocks and timing blocks to control character interactions in a digital scene.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Event Block Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a scene with at least two characters. Use the following event blocks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• "When this sprite clicked" on Character 1</div>
                        <div>• "When green flag clicked" to start the scene</div>
                        <div>• "When key pressed" (choose a key) on Character 2</div>
                    </div>
                    <div class="code-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Describe what each event block does in your scene:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Timing Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Make two characters have a conversation using "wait" blocks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Character 1 says something → wait 2 seconds → Character 2 responds → wait 1 second → Character 1 responds</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create an Interactive Scene</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Plan an interactive scene with 3 different events. Draw your scene and label each event trigger:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> List the coding blocks you would use for each interaction:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why are events important in making a game or animation fun?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find a simple game on Scratch or another coding platform. Identify three different events and explain what each one triggers.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Advanced Coding and Games",
        subtopic: "Creating a Simple Game",
        lessonContent: `
            <p>Today we'll put everything together and create our own simple interactive game!</p>
            <p><strong>Key Question:</strong> How do we combine loops and events to make a game work?</p>
            <p><strong>Introduction:</strong> Games need three main things: user input (events), repeating actions (loops), and a goal. Today we'll build all three!</p>
            <p><strong>Game Types We'll Explore:</strong></p>
            <ul>
                <li><strong>Catch Game:</strong> Catch falling objects with a moving character</li>
                <li><strong>Move Game:</strong> Navigate a character through obstacles</li>
                <li><strong>Collect Game:</strong> Collect items to earn points</li>
            </ul>
            <p><strong>Essential Coding Blocks for Games:</strong></p>
            <ol>
                <li><strong>Events:</strong> "When arrow key pressed" (for movement), "When sprite clicked"</li>
                <li><strong>Loops:</strong> "Forever" (keeps game running), "Repeat until" (win condition)</li>
                <li><strong>Conditionals:</strong> "If touching" (collision detection), "If score = 10" (winning)</li>
                <li><strong>Variables:</strong> "Score" (track points), "Lives" (track attempts)</li>
            </ol>
            <p><strong>Game Flow Checklist:</strong></p>
            <ul>
                <li>✓ Game starts with "When green flag clicked"</li>
                <li>✓ Player controls a character with arrow keys</li>
                <li>✓ Objects move or appear using loops</li>
                <li>✓ Score increases when collecting or catching</li>
                <li>✓ Game has a win condition or end point</li>
                <li>✓ Animation flows smoothly</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-basketball-ball"></i> Catch Game Example</div>
                <p>A ball falls from the top of the screen. A paddle moves left and right with arrow keys. When the ball touches the paddle, score increases by 1 and the ball resets.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-left"></i> Move Game Example</div>
                <p>A character moves through a maze using arrow keys. When it reaches the goal, it says "You win!" and the game stops.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Collect Game Example</div>
                <p>A character moves around the screen collecting stars. Each star collected adds 1 to the score. When score reaches 10, the character says "Winner!"</p>
            </div>
        `,
        taskInstructions: "Combine coding blocks to create a basic interactive game with smooth animation flow.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Game Design Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose your game type and describe your plan:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Game Type:</strong> (Circle one) Catch Game / Move Game / Collect Game</div>
                        <div><strong>Characters/Sprites:</strong> _________________________________</div>
                        <div><strong>Player Controls:</strong> _________________________________</div>
                        <div><strong>Goal/Win Condition:</strong> _________________________________</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 40px;">[Draw your game scene here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Code Your Game</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write or sketch the code blocks needed for your game:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Movement code:</strong></div>
                        <div class="code-block" style="background: #f0f0f0; padding: 10px; margin: 5px 0; font-family: monospace;">When [arrow key] key pressed → change x by 10</div>
                        <div><strong>Game loop code:</strong></div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div><strong>Score/Collection code:</strong></div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div><strong>Win condition code:</strong></div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Animation Flow Check</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Check that your animation flows correctly. Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Does the game start when the green flag is clicked? _________</div>
                        <div>• Do objects move smoothly? _________</div>
                        <div>• Does the score update correctly? _________</div>
                        <div>• Does the game end when the goal is reached? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Game Testing & Improvement</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Test your game with a classmate. What worked well? What would you improve?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Describe one change you would make to make your game more challenging or fun:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Play your game for a family member. Ask them for one suggestion to improve it. Write down their feedback and your plan to add it.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechStudiesWeek5);
    console.log("grade5-techstudies-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechStudiesWeek5);
    console.log("grade5-techstudies-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechStudiesWeek5',
        metadata: grade5TechStudiesWeek5.metadata,
        days: grade5TechStudiesWeek5
    });
    console.log("grade5-techstudies-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechStudiesWeek5 = grade5TechStudiesWeek5;
console.log("grade5-techstudies-week5.js loaded and registered successfully");