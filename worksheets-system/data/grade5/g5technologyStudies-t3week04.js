// Grade 5 Technology Studies - Term 3 Week 4 Data
const grade5TechnologyWeek4 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        term: 3,
        week: 4,
        title: "Introduction to Block-Based Coding",
        description: "Understanding basic programming logic including sequencing and loops, then applying concepts to create simple animations"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Block-Based Coding",
        subtopic: "Coding Concepts - Sequencing and Loops",
        lessonContent: `
            <p>Welcome to the world of coding! Today we'll learn the basic building blocks of every computer program.</p>
            <p><strong>Key Question:</strong> How do computers know what to do and when to do it?</p>
            <p><strong>Introduction:</strong> Coding is giving instructions to a computer. Just like a recipe tells you step-by-step how to cook, code tells a computer exactly what to do. Today we'll learn two important coding concepts: sequencing and loops.</p>
            <p><strong>What is Sequencing?</strong></p>
            <ul>
                <li><strong>Definition:</strong> Putting instructions in the correct order</li>
                <li><strong>Example:</strong> To brush your teeth, you must: (1) put toothpaste on brush, (2) brush teeth, (3) rinse mouth, (4) spit. If you change the order, it won't work!</li>
                <li><strong>In Coding:</strong> The computer follows commands one after another, in the exact order you write them</li>
            </ul>
            <p><strong>What are Loops?</strong></p>
            <ul>
                <li><strong>Definition:</strong> Repeating a set of instructions multiple times</li>
                <li><strong>Example:</strong> "Repeat 20 times: jump up and down" - instead of writing "jump" 20 times, you use a loop!</li>
                <li><strong>In Coding:</strong> Loops save time and make programs shorter</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ol"></i> Sequencing in Daily Life</div>
                <p>Getting dressed: You put on your underwear BEFORE your pants. Making cereal: You pour milk AFTER adding cereal. The order matters!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sync-alt"></i> Loops in Nature</div>
                <p>Your heart beats in a loop - "repeat forever: beat." Your teacher says "repeat after me" - that's a loop too!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-robot"></i> Computer Brain</div>
                <p>Computers are like very fast, very literal robots. They do EXACTLY what you tell them, in the EXACT order you tell them. If your instructions have a mistake, the computer will still follow them - which might cause a bug!</p>
            </div>
        `,
        taskInstructions: "Practice writing 'unplugged' code instructions for a peer to follow.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Sequencing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put these morning routine steps in the correct sequence (number them 1-5):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Eat breakfast</div>
                        <div>___ Wake up</div>
                        <div>___ Brush teeth</div>
                        <div>___ Get dressed</div>
                        <div>___ Go to school</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Write a sequence of 5 instructions for making a peanut butter and jelly sandwich (or your favorite snack):
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Understanding Loops</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Rewrite these instructions using a loop to make them shorter:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>Step 1: Clap your hands</div>
                        <div>Step 2: Clap your hands</div>
                        <div>Step 3: Clap your hands</div>
                        <div>Step 4: Clap your hands</div>
                        <div>Step 5: Clap your hands</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Think of a daily activity that uses a loop. Describe it:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Unplugged Coding Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write instructions to get a classmate from their desk to the classroom door. Include at least 5 steps:
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Trade instructions with a partner. Follow their instructions exactly. Did they work? What could be improved?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Write a sequence of instructions for your morning routine. Then circle any loops you would use (e.g., 'repeat for each tooth' while brushing).",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Block-Based Coding",
        subtopic: "Animating Situations",
        lessonContent: `
            <p>Today we'll bring our coding skills to life by creating animations using block-based coding!</p>
            <p><strong>Key Question:</strong> How can we make a character move and repeat actions on screen?</p>
            <p><strong>Introduction:</strong> Block-based coding uses colorful blocks that snap together like puzzle pieces. You don't need to type code - just drag, drop, and connect! Today we'll use sequencing and loops to make a character (called a sprite) move across the screen and perform actions.</p>
            <p><strong>Coding Platform Basics:</strong></p>
            <ul>
                <li><strong>Sprite:</strong> A character or object in your animation</li>
                <li><strong>Stage:</strong> The background where the action happens</li>
                <li><strong>Motion Blocks:</strong> Move, turn, go to x/y position</li>
                <li><strong>Looks Blocks:</strong> Say something, change size, change costume</li>
                <li><strong>Control Blocks:</strong> Loops (repeat), wait, conditional statements</li>
            </ul>
            <p><strong>Creating Movement with Sequences:</strong></p>
            <ul>
                <li>Move 10 steps → wait 1 second → move 10 steps → wait 1 second</li>
                <li>Each block runs in order from top to bottom</li>
            </ul>
            <p><strong>Using Loops for Animation:</strong></p>
            <ul>
                <li>Instead of repeating "move 10 steps" ten times, use "repeat 10 times" and put "move 10 steps" inside it once!</li>
                <li>To make a character walk continuously: "forever" loop</li>
                <li>Switch between costumes to make the character look like it's walking</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cat"></i> Sprite Story Example</div>
                <p>A cat wants to chase a butterfly across the screen. The code might be: "move 20 steps → wait 0.5 seconds → move 20 steps → wait 0.5 seconds → repeat 5 times (move 10 steps and meow)"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sync-alt"></i> Loop Example</div>
                <p>To make a fish swim across the ocean background: "repeat until touching edge (move 5 steps and switch costume)" - the fish will keep swimming until it reaches the edge!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> Speech Bubbles</div>
                <p>Add personality to your animation using looks blocks: "say 'Hello!' for 2 seconds" → "think 'Hmm...' for 1 second" → "say 'Goodbye!' for 2 seconds"</p>
            </div>
        `,
        taskInstructions: "Using a block-based coding platform, create a short animation where a character moves across the screen using sequences and loops.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Planning Your Animation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose a character (sprite) for your animation. What is it? What will it do?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Plan your animation sequence. What will happen first, second, and third?
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Block-Based Coding Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use the coding platform to create your animation. Your animation must include:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>□ A sprite that moves at least 3 times in a sequence</div>
                        <div>□ A loop that repeats at least 2 actions</div>
                        <div>□ A speech or thought bubble</div>
                        <div>□ A background/stage</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Write or draw the code blocks you used for your animation:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Share and Reflect</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Share your animation with a partner. What did you like about their animation?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What was challenging about creating your animation? What would you add if you had more time?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Code Vocabulary Review</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Match the definition to the correct term:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ A repeat instruction that runs code multiple times</div>
                        <div>___ A character in an animation</div>
                        <div>___ Putting instructions in the correct order</div>
                        <div style="margin-top: 10px;">(a) Sprite      (b) Sequencing      (c) Loop</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Draw a comic strip of an animation you would like to create. Write the code sequence (using words or block names) next to each panel.",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechnologyWeek4);
    console.log("grade5-technology-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechnologyWeek4);
    console.log("grade5-technology-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechnologyWeek4',
        metadata: grade5TechnologyWeek4.metadata,
        days: grade5TechnologyWeek4
    });
    console.log("grade5-technology-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechnologyWeek4 = grade5TechnologyWeek4;
console.log("grade5-technology-week4.js loaded and registered successfully");