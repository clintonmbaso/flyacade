// Grade 6 Technology Studies - Term 3 Week 4 Data
const grade6TechnologyWeek4 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 3,
        week: 4,
        title: "Block-Based Coding Basics",
        description: "Introduction to coding logic, block types, and creating simple sequences"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Block-Based Coding",
        subtopic: "What is Coding?",
        lessonContent: `
            <p>Welcome to the world of coding! Today we'll discover what coding means and how we communicate with computers.</p>
            <p><strong>Key Question:</strong> How do we tell a computer what to do?</p>
            <p><strong>Introduction:</strong> Coding is writing instructions that tell a computer or program what to do. Just like we follow recipes to bake a cake, computers follow code to complete tasks.</p>
            <p><strong>What is a Program?</strong></p>
            <ul>
                <li>A program is a set of step-by-step instructions for a computer</li>
                <li>Computers follow instructions exactly - they can't guess what we mean!</li>
                <li>Programs control everything from video games to traffic lights</li>
            </ul>
            <p><strong>The Logic of Computer Programs:</strong></p>
            <ol>
                <li><strong>Input:</strong> Information given to the computer (mouse click, keyboard press)</li>
                <li><strong>Process:</strong> The computer follows instructions to do something with the input</li>
                <li><strong>Output:</strong> The result the computer shows us (movement, sound, image)</li>
            </ol>
            <p><strong>Why Learn to Code?</strong> Coding helps develop problem-solving, logical thinking, and creativity!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Recipe Analogy</div>
                <p>A recipe is like a computer program. It lists step-by-step instructions: "First, crack eggs. Second, mix flour. Third, bake at 350°F." If you skip a step, the cake won't turn out right!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-robot"></i> Following Instructions</div>
                <p>If you tell a friend "go there," they might understand. But a computer needs exact instructions: "Move forward 10 steps. Turn right. Move forward 5 steps."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Coding in Games</div>
                <p>When you press the right arrow key in a game, the code tells the character: "Change x-position by +5" - that's a program in action!</p>
            </div>
        `,
        taskInstructions: "Practice giving clear instructions and explore input-process-output.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Human Computer Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write step-by-step instructions for making a peanut butter sandwich. Be VERY specific (pretend the person has never made one before!):
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Input-Process-Output</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the table for everyday technology:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Device/Action</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Input</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Process</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Output</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Calculator</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Press "5 + 3 ="</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Adds numbers</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Shows "8" on screen</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Video Game</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Press jump button</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">TV Remote</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Changes channel signal</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why do you think computers need exact instructions instead of guessing what we mean?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> List three things in your daily life that are controlled by computer programs:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write a set of 10 instructions for brushing your teeth. Be as specific as possible! Bring it to class tomorrow.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Block-Based Coding",
        subtopic: "Coding Blocks",
        lessonContent: `
            <p>Today we'll explore coding blocks - the building bricks of programs in block-based coding languages like Scratch!</p>
            <p><strong>Key Question:</strong> How do different colored blocks help us build programs?</p>
            <p><strong>What are Coding Blocks?</strong> In block-based coding, we snap together colorful blocks instead of typing code. Each block type has a different shape and color based on its job.</p>
            <p><strong>Types of Coding Blocks:</strong></p>
            <ol>
                <li><strong>Event Blocks (Yellow/Gold):</strong> Start a program (e.g., "When green flag clicked", "When key pressed")</li>
                <li><strong>Motion Blocks (Blue):</strong> Control movement (e.g., "move 10 steps", "turn 15 degrees", "go to x: y:")</li>
                <li><strong>Looks Blocks (Purple):</strong> Change appearance (e.g., "say Hello for 2 seconds", "switch costume")</li>
                <li><strong>Sound Blocks (Pink/Magenta):</strong> Play sounds and music (e.g., "play sound meow until done", "set volume to 100%")</li>
                <li><strong>Control Blocks (Orange/Gold):</strong> Control the flow (e.g., "repeat 10 times", "wait 1 second", "forever")</li>
                <li><strong>Sensing Blocks (Light Blue):</strong> Detect things (e.g., "touching mouse?", "ask and wait")</li>
            </ol>
            <p><strong>How Blocks Fit Together:</strong> Blocks connect like puzzle pieces. The shape of each block tells you where it can go!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flag-checkered"></i> Event Block Example</div>
                <p>When you click the green flag in Scratch, the program starts. The "when green flag clicked" block is your START button!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-right"></i> Motion Block Example</div>
                <p>A "move 10 steps" block makes your character move forward. Change the number to 50, and it moves 5 times farther!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Sound Block Example</div>
                <p>The "play sound [pop] until done" block makes a pop sound. You can choose different sounds from the dropdown menu!</p>
            </div>
        `,
        taskInstructions: "Identify different types of blocks and match them to their functions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Block Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each block description to the correct category (Event, Motion, Looks, Sound, Control, Sensing):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• "move 20 steps" → _________</div>
                        <div>• "when space key pressed" → _________</div>
                        <div>• "play sound [pop]" → _________</div>
                        <div>• "say Hello for 2 seconds" → _________</div>
                        <div>• "repeat 5" → _________</div>
                        <div>• "touching edge?" → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Block Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and color each type of block based on its category color:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px;">
                            <strong>Event (Yellow)</strong>
                            <div class="drawing-area" style="height: 40px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px;">
                            <strong>Motion (Blue)</strong>
                            <div class="drawing-area" style="height: 40px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px;">
                            <strong>Looks (Purple)</strong>
                            <div class="drawing-area" style="height: 40px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px;">
                            <strong>Sound (Pink)</strong>
                            <div class="drawing-area" style="height: 40px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Build a Simple Script</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Arrange these blocks in the correct order to make a character move and meow:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f0f0f0; padding: 10px;">
                        <div>□ "play sound meow"</div>
                        <div>□ "move 50 steps"</div>
                        <div>□ "when green flag clicked"</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">Correct order (top to bottom):</div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What would happen if you put the "play sound" block BEFORE the "move" block?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a storyboard of a simple program using at least 3 different types of blocks (Event, Motion, and one more). Label each block type.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Block-Based Coding",
        subtopic: "Simple Sequences",
        lessonContent: `
            <p>Today we'll create our first program - a simple sequence that moves a character in a straight line!</p>
            <p><strong>Key Question:</strong> How do we create a sequence of instructions that runs in order?</p>
            <p><strong>What is a Sequence?</strong> A sequence is a set of instructions that run one after another, from top to bottom. The order matters!</p>
            <p><strong>Creating Movement in a Straight Line:</strong></p>
            <ul>
                <li>To move a character, we use Motion blocks</li>
                <li>The "move (number) steps" block moves the character forward</li>
                <li>We can change the number to control how far the character moves</li>
                <li>For straight line movement, we don't need turn blocks</li>
            </ul>
            <p><strong>Building Your First Program:</strong></p>
            <ol>
                <li>Start with an Event block: "when green flag clicked"</li>
                <li>Add Motion blocks in sequence: "move 10 steps", "move 10 steps", "move 10 steps"</li>
                <li>OR use a single "move 30 steps" block for the same result!</li>
            </ol>
            <p><strong>Where to Code:</strong> We'll use Scratch (scratch.mit.edu) or a similar block-based coding platform.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-right"></i> Straight Line Movement</div>
                <p>This code makes a character move in a straight line:<br>
                <code>when green flag clicked → move 50 steps</code><br>
                The character moves 50 steps forward from its starting position.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-layer-group"></i> Sequence vs. Single Block</div>
                <p>"move 10 steps" three times is the SAME as "move 30 steps" once. Both move the character 30 steps total!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Debugging Tip</div>
                <p>If your character doesn't move, check: Did you use a "when green flag clicked" block? Is the character on screen? Did you click the green flag?</p>
            </div>
        `,
        taskInstructions: "Create a program that moves a character in a straight line, then draw and explain your code.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw Your Code</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw the blocks needed to make a character move 100 steps in a straight line when the green flag is clicked:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Code Your Program</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using Scratch or paper blocks, create your program. Write or draw your sequence here:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 15px; border-radius: 8px;">
                        <div>1. When _________ clicked</div>
                        <div>2. Move _________ steps</div>
                        <div>3. (Optional) Wait _________ seconds</div>
                        <div>4. Move _________ steps</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What happens if you change the number in the "move" block from 10 to 100?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Write a sequence that moves a character 25 steps, then waits 2 seconds, then moves another 25 steps:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Prediction</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> If you have this code:<br>
                    <code>when green flag clicked → move 40 steps → move 10 steps → move 25 steps</code><br>
                    How many total steps will the character move? Show your calculation:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Why is the order of blocks important in a sequence? What would happen if you put "move" before "when green flag clicked"?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write a sequence of blocks (using proper block names) that would move a character 150 steps in a straight line. Use at least two different types of blocks.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyWeek4);
    console.log("grade6-technology-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyWeek4);
    console.log("grade6-technology-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyWeek4',
        metadata: grade6TechnologyWeek4.metadata,
        days: grade6TechnologyWeek4
    });
    console.log("grade6-technology-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyWeek4 = grade6TechnologyWeek4;
console.log("grade6-technology-week4.js loaded and registered successfully");