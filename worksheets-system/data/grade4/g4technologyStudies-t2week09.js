// Grade 4 Technology Studies - Term 2 Week 9 (Combined into 2 Days - Summative Form)
const grade4TechnologyWeek9 = {
    metadata: {
        grade: 4,
        subject: "Technology Studies",
        term: 2,
        week: 9,
        title: "Introduction to Block-Based Coding Platforms",
        description: "Using block-based coding platforms (Scratch, Code Monkey, Codingal) to learn programming fundamentals including interface navigation, block categories, building scripts, and creating animations"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Block-Based Coding",
        subtopic: "Meeting the Scratch Sprite & Block Bonanza",
        lessonContent: `
            <p>Welcome to the world of coding! Today we'll meet Scratch, a special platform where we can tell stories and create games.</p>
            <p><strong>Key Question:</strong> Have you ever wanted to tell a story or make a game where the characters do exactly what you want?</p>
            <p><strong>Introduction:</strong> Coding is like a secret language we use to talk to computers. Scratch is a fun platform that helps us learn this language using colorful blocks - no typing required!</p>
            <p><strong>The Four Main Areas of Scratch:</strong></p>
            <ol>
                <li><strong>The Stage:</strong> The main window where our character (the 'Sprite', currently the cat) lives and moves</li>
                <li><strong>The Sprite Pane:</strong> The smaller section below the stage where we can add more characters or change their costumes</li>
                <li><strong>The Block Palette:</strong> The menu on the far left filled with colored 'LEGO'-like blocks. Different colors mean different actions (e.g., Motion blocks move the character)</li>
                <li><strong>The Scripts Area:</strong> The large empty space in the middle where we drag and click the blocks to make our 'script' or set of instructions</li>
            </ol>
            <p><strong>Blocks Connect Like LEGO!</strong></p>
            <ul>
                <li>Blocks have bumps and notches that fit together</li>
                <li>If two blocks can snap, they belong in the same script</li>
                <li>Different colored blocks control different types of actions</li>
            </ul>
            <p><strong>Block Categories We'll Use:</strong></p>
            <ol>
                <li><strong>Motion (Blue):</strong> Move, turn, and change position</li>
                <li><strong>Looks (Purple):</strong> Change color, size, or say something</li>
                <li><strong>Sound (Pink):</strong> Play sounds or meow!</li>
                <li><strong>Events (Yellow):</strong> Start scripts when something happens</li>
            </ol>
            <p><strong>Why Scratch?</strong> Scratch uses blocks that snap together like puzzle pieces. This makes it easy to learn coding concepts without worrying about typing mistakes!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cat"></i> Meet the Sprite</div>
                <p>The default Sprite in Scratch is an orange cat. You can change it to anything - a dinosaur, a basketball player, or even draw your own character!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Blocks Like LEGO</div>
                <p>Just like LEGO bricks snap together, Scratch blocks snap together too! If a block doesn't snap, it means they don't belong together - the shapes won't match.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette"></i> Color Coding</div>
                <p>Each block category has its own color: Motion blocks are blue, Looks blocks are purple, Sound blocks are pink, and Events blocks are yellow!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-link"></i> Snapping Blocks</div>
                <p>When you drag a block close to another block, you'll see a white glow. That means they will snap together! Try snapping 'move 10 steps' below 'when green flag clicked'.</p>
            </div>
        `,
        taskInstructions: "Log into Scratch, identify the four main areas, make the cat move, find and snap blocks together, and observe what your Sprite does.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Interface Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On your screen, locate and identify these four areas:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• The Stage (where the cat lives)</div>
                        <div>• The Sprite Pane (below the stage)</div>
                        <div>• The Block Palette (far left, colored blocks)</div>
                        <div>• The Scripts Area (large empty middle space)</div>
                    </div>
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Label each area on your screen or notebook:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: First Code - Make the Cat Move!</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Follow these steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Step 1: Find the blue <strong>Motion</strong> blocks in the Block Palette</div>
                        <div>Step 2: Find the block that says <strong>"move 10 steps"</strong></div>
                        <div>Step 3: Drag that block into the <strong>Scripts Area</strong></div>
                        <div>Step 4: Click on the block!</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>What happened to the cat? Write your observation:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Quick Review Quiz</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What color are Motion blocks? _________</div>
                        <div>b) Where do we drag blocks to create a script? _________</div>
                        <div>c) What is the cat character called? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Block Hunt Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find these three blocks in the Block Palette:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <div>🔵 <strong>Motion:</strong> "move 10 steps" (blue block)</div>
                        <div>🟣 <strong>Looks:</strong> "change color effect by 25" (purple block)</div>
                        <div>🩷 <strong>Sound:</strong> "play sound meow" (pink block)</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Drag all three blocks into the Scripts Area and snap them together in any order:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 35px;">[Draw the order of your blocks here]</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Click on your stacked blocks. What did the cat do?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Where did you drag the blocks to? What is that area called?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> List the names of two colored categories from the Block Palette:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> What happens when you snap blocks together?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a picture of the Scratch screen in your notebook. Label The Stage, Sprite Pane, Block Palette, and Scripts Area. Then draw and color three different blocks (one blue Motion, one purple Looks, one pink Sound). Write what each block does next to it.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Block-Based Coding",
        subtopic: "Building Complete Scripts & Creative Project",
        lessonContent: `
            <p>Today we'll learn how to make our scripts run automatically, create complete scripts, and build our own short animation!</p>
            <p><strong>Key Question:</strong> How do we make our code start without clicking each block?</p>
            <p><strong>The Most Important Event Block:</strong></p>
            <ul>
                <li><strong>"when green flag clicked"</strong> - This block starts your script when you click the green flag above the stage</li>
                <li>Place this block at the VERY TOP of your script (blocks snap below it)</li>
                <li>Now every block below will run in order from top to bottom</li>
            </ul>
            <p><strong>Creating a Complete Script:</strong></p>
            <ol>
                <li>Drag "when green flag clicked" into Scripts Area</li>
                <li>Snap other blocks below it (Motion, Looks, Sound)</li>
                <li>Click the green flag above the stage</li>
                <li>Watch your Sprite perform the entire sequence!</li>
            </ol>
            <p><strong>Week 9 Review:</strong></p>
            <ol>
                <li><strong>Scratch Interface:</strong> Stage, Sprite Pane, Block Palette, Scripts Area</li>
                <li><strong>Block Categories:</strong> Motion (blue), Looks (purple), Sound (pink), Events (yellow)</li>
                <li><strong>Creating Scripts:</strong> Snapping blocks together in order</li>
                <li><strong>Running Scripts:</strong> Using the green flag to start</li>
            </ol>
            <p><strong>Project Challenge:</strong> Create a short animation where your Sprite introduces itself!</p>
            <p>Your Sprite should:</p>
            <ul>
                <li>Move across the stage (Motion block)</li>
                <li>Say its name using a speech bubble (Looks block - "say" or "think")</li>
                <li>Make a sound (Sound block)</li>
                <li>Start when the green flag is clicked (Events block)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flag-checkered"></i> The Green Flag</div>
                <p>The green flag is like a "start" button for your scripts. The red stop sign next to it stops everything. Every Scratch project uses these!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> Top to Bottom Order</div>
                <p>Scratch runs blocks from the top of your stack to the bottom. If you want the cat to move first then meow, put 'move' above 'play sound meow'.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Sample Script</div>
                <p>when green flag clicked → say "My name is Scratch Cat!" for 2 seconds → move 100 steps → play sound "meow"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Make It Your Own</div>
                <p>Change the Sprite from the cat to something else! Click the "Choose a Sprite" button (cat icon with a plus sign) and pick an animal, person, or thing.</p>
            </div>
        `,
        taskInstructions: "Create a script with multiple blocks that runs when the green flag is clicked, then build your own creative animation project and reflect on your learning.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Build Your First Automatic Script</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Drag these blocks into the Scripts Area and snap them in this order (top to bottom):
                    <div style="margin-left: 20px; margin-top: 10px; background: #fff3cd; padding: 10px; border-left: 4px solid #ffc107;">
                        <div>🟡 <strong>Event:</strong> "when green flag clicked"</div>
                        <div>🔵 <strong>Motion:</strong> "move 50 steps"</div>
                        <div>🟣 <strong>Looks:</strong> "say Hello for 2 seconds"</div>
                        <div>🩷 <strong>Sound:</strong> "play sound meow until done"</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 45px;">[Draw your stacked blocks here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Test Your Script</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Click the <strong>green flag</strong> above the stage. What happens?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Swap the order of two blocks. What changes?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Script</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a script with at least 4 blocks that includes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>✓ A yellow Event block at the top</div>
                        <div>✓ At least one blue Motion block</div>
                        <div>✓ At least one purple Looks block</div>
                        <div>✓ At least one pink Sound block</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p><em>Describe your script or draw it:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Creative Project</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create an animation where your Sprite:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Moves across the stage (Motion block)</div>
                        <div>• Says its name (Looks block - "say" or "think")</div>
                        <div>• Makes a sound (Sound block)</div>
                        <div>• Starts when green flag is clicked (Events block)</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw your script or describe your animation here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Share Your Project</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> When you finish, click the green flag and watch your Sprite perform. Be ready to share with the class!
                    <div class="answer-space" style="height: 60px;">
                        <p><em>What did your Sprite do?</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Week Review Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> What are the four main areas of Scratch?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> What color are Motion blocks? What do they do?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> How do you start a script automatically without clicking each block?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part G: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">10</span> What was your favorite thing about learning Scratch this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> What kind of game or story would you like to create next?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write a short paragraph about what you learned this week. Describe how blocks snap together and what the green flag does. Draw one script you would like to try at home. Then write down the steps to make a Sprite move 100 steps, say 'I love coding!', and then play a sound when the green flag is clicked.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4TechnologyWeek9);
    console.log("grade4-technology-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4TechnologyWeek9);
    console.log("grade4-technology-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4TechnologyWeek9',
        metadata: grade4TechnologyWeek9.metadata,
        days: grade4TechnologyWeek9
    });
    console.log("grade4-technology-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4TechnologyWeek9 = grade4TechnologyWeek9;
console.log("grade4-technology-week9.js loaded and registered successfully");