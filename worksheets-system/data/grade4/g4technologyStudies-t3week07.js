// Grade 4 Technology Studies - Term 3 Week 7 Data
const grade4TechnologyWeek7 = {
    metadata: {
        grade: 4,
        subject: "Technology Studies",
        term: 3,
        week: 7,
        title: "Introduction to Block-Based Coding",
        description: "Exploring coding platforms, understanding sequence, and creating simple programs using block-based coding"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Block-Based Coding",
        subtopic: "Exploring Coding Platforms",
        lessonContent: `
            <p>Welcome to the world of coding! Today we'll discover how we can talk to computers using a special language called code.</p>
            <p><strong>Key Question:</strong> How do computers understand what we want them to do?</p>
            <p><strong>Introduction:</strong> Computers follow instructions exactly. "Coding" is the special language we use to give them instructions. "Blocks" are like LEGO pieces for instructions - they snap together to tell the computer what to do!</p>
            <p><strong>Key Areas of a Coding Platform (e.g., Scratch or Code Monkey):</strong></p>
            <ol>
                <li><strong>The Stage:</strong> The big white area where the action happens (like a theater stage!)</li>
                <li><strong>The Sprite:</strong> The character or object that follows your instructions</li>
                <li><strong>The Block Palette:</strong> The area where all the instruction blocks are kept (like a toolbox)</li>
                <li><strong>The Workspace (Script Area):</strong> Where you drag blocks and snap them together to create your program</li>
            </ol>
            <p><strong>How to Start:</strong> Click and drag a block from the Block Palette into the Workspace. Then click the block to watch your sprite follow the instruction!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Blocks are Like LEGO</div>
                <p>Just like LEGO bricks snap together to build a castle, coding blocks snap together to build instructions for the computer!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-theater-masks"></i> The Stage is a Theater</div>
                <p>Imagine your sprite is an actor on a stage. The Stage is where all the action happens - the sprite moves, dances, and performs on the Stage!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tools"></i> Block Palette = Toolbox</div>
                <p>The Block Palette is like a toolbox. It has different sections: Motion blocks (for moving), Looks blocks (for changing how the sprite looks), and Sound blocks (for adding music!).</p>
            </div>
        `,
        taskInstructions: "Open the coding platform, identify key areas, and make your sprite move using a block.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Platform Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Open the coding platform on your device. Label the diagram below with these key areas:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• The Stage</div>
                        <div>• The Sprite</div>
                        <div>• The Block Palette</div>
                        <div>• The Workspace</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Draw and label the coding platform layout here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: First Code!</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find a "Move" block in the Block Palette. Drag it into the Workspace. Click the block. What happened?
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #4A90E2; padding: 10px;">
                        <p><em>Write what you observed:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Try Different Blocks</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Find and try these three different blocks. Write what each one does:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• "Move 10 steps" - What happens? _______________</div>
                        <div>• "Turn 15 degrees" - What happens? _______________</div>
                        <div>• "Say Hello for 2 seconds" - What happens? _______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was the easiest part of moving your sprite? What was tricky?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a picture of the coding platform at home. Label the Stage, Sprite, Block Palette, and Workspace. Show your drawing to a family member and explain what each part does.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Block-Based Coding",
        subtopic: "The Concept of Sequence",
        lessonContent: `
            <p>Today we'll learn one of the most important ideas in coding: SEQUENCE! The order of your instructions matters.</p>
            <p><strong>Key Question:</strong> Does the order of instructions matter? What happens if you put your shoes on after your socks?</p>
            <p><strong>What is Sequence?</strong></p>
            <p><strong>Sequence</strong> is the specific order in which instructions are followed. Computers follow instructions exactly in the order you give them - from top to bottom.</p>
            <p><strong>Real-World Analogy - Making a Sandwich:</strong></p>
            <ul>
                <li>✅ Correct sequence: Take out bread → Spread peanut butter → Add jelly → Close sandwich</li>
                <li>❌ Wrong sequence: Add jelly → Take out bread → Close sandwich → Spread peanut butter</li>
            </ul>
            <p><strong>Why Sequence Matters in Coding:</strong></p>
            <ul>
                <li>If your blocks are in the wrong order, your sprite will do the wrong thing!</li>
                <li>Computers can't guess what you mean - they follow your instructions exactly as written</li>
                <li>Good programmers always check the sequence of their blocks</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shower"></i> Getting Ready for School</div>
                <p>Getting dressed has a sequence: underwear first, then pants, then shoes. If you put shoes on before pants, it would be very hard to get dressed!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-square"></i> Drawing a Square</div>
                <p>To draw a square, your sprite needs to: Move → Turn → Move → Turn → Move → Turn → Move → Turn. If the Turn blocks are in the wrong place, you'll get a zigzag instead of a square!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Finding Bugs</div>
                <p>When code doesn't work because instructions are in the wrong order, we call it a "bug." Fixing the order is called "debugging" - like being a detective for your code!</p>
            </div>
        `,
        taskInstructions: "Create a sequence of blocks to move your sprite in a square pattern.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sequence Challenge - Draw a Square</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Stack blocks in the correct order to make your sprite move in a square pattern. Write or draw your sequence below:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>To make a square, the sprite needs to:</div>
                        <div>Step 1: Move forward _____ steps</div>
                        <div>Step 2: Turn _____ degrees</div>
                        <div>Step 3: Move forward _____ steps</div>
                        <div>Step 4: Turn _____ degrees</div>
                        <div>Step 5: Move forward _____ steps</div>
                        <div>Step 6: Turn _____ degrees</div>
                        <div>Step 7: Move forward _____ steps</div>
                        <div>Step 8: Turn _____ degrees</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 40px;">[Draw what shape your sprite made]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What Happens When Order is Wrong?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Try putting the blocks in the wrong order. For example, do TURN before MOVE. What happens to your sprite?
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #E24A4A; padding: 10px;">
                        <p><em>Write what you observed:</em></p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Fix the order so your sprite makes a square again. What did you learn about sequence?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sequence Story</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write the correct sequence for brushing your teeth. Then switch one step to the wrong place. What would happen?
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why do you think sequence is important in coding?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "At home, write a 5-step sequence for something you do every day (like making cereal or getting ready for bed). Have a family member try to follow your sequence exactly. Did it work?",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4TechnologyWeek7);
    console.log("grade4-technology-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4TechnologyWeek7);
    console.log("grade4-technology-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4TechnologyWeek7',
        metadata: grade4TechnologyWeek7.metadata,
        days: grade4TechnologyWeek7
    });
    console.log("grade4-technology-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4TechnologyWeek7 = grade4TechnologyWeek7;
console.log("grade4-technology-week7.js loaded and registered successfully");