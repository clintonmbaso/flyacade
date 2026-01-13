// Baby Class Science - Week 3 Data (Body Parts Focus)
const middleScienceWeek3 = {
    metadata: {
        grade: "middle",
        subject: "Science",
        week: 3,
        title: "My Amazing Body - Arms, Hands, Legs, and Feet",
        description: "Exploring how we use our arms, hands, legs, and feet for different activities"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Exploring Arms and Hands",
        subtopic: "Our Amazing Helpers",
        lessonContent: `
            <p>Welcome to Science class! Today we will learn about our wonderful <strong>Arms and Hands</strong>!</p>
            <p><strong>Key Concept:</strong> Our arms and hands help us do SO many things! They are like our special helpers.</p>
            <p>Let's look at our arms and hands. Can you wiggle your fingers? Can you wave your arms?</p>
            <p><strong>Fun Fact:</strong> You have 2 arms and 10 fingers (5 on each hand)!</p>
            <div class="content-box">
                <p><strong>Parts we're learning today:</strong></p>
                <ul>
                    <li><i class="fas fa-hand-paper"></i> <strong>Arms</strong> - from shoulder to wrist</li>
                    <li><i class="fas fa-hand-rock"></i> <strong>Hands</strong> - with fingers and thumbs</li>
                </ul>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: What Can Hands Do?</div>
                <p>Our hands can:</p>
                <p>✏️ Draw pictures</p>
                <p>🤗 Give hugs</p>
                <p>👋 Wave hello</p>
                <p>🎨 Paint and create</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: What Can Arms Do?</div>
                <p>Our arms can:</p>
                <p>🏀 Throw and catch balls</p>
                <p>🤗 Carry things</p>
                <p>💪 Give us strength</p>
                <p>🔄 Help us reach things</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Counting Fingers</div>
                <p>Let's count our fingers together:</p>
                <p>1 thumb, 2, 3, 4, 5 on one hand!</p>
                <p>Now the other hand: 1, 2, 3, 4, 5!</p>
                <p>That's 10 fingers total!</p>
            </div>
        `,
        taskInstructions: "Let's explore how we use our arms and hands. Try each activity!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Show me how you wave hello with your hand:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Make a drawing of your hand:
                <div class="drawing-area"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Show me how you give a big hug:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Circle things you can do with your hands:
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-top: 10px;">
                    <div>✏️ Draw</div>
                    <div>🚗 Drive</div>
                    <div>🤗 Hug</div>
                    <div>🍎 Eat</div>
                    <div>✂️ Cut</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Count your fingers: <span class="answer-space"></span> fingers
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Trace around your hand on this paper:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Wednesday Homework: Arms and Hands Review Test</strong></p>
                <p><strong>Part 1: Show What You Know</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. How many arms do you have? <span class="answer-space" style="width: 50px;"></span></p>
                    <p>2. How many fingers on ONE hand? <span class="answer-space" style="width: 50px;"></span></p>
                    <p>3. Circle 3 things you can do with hands:</p>
                    <div style="margin-left: 20px;">
                        <div>○ Run ○ Draw ○ Hug ○ Fly ○ Wave</div>
                    </div>
                </div>
                
                <p><strong>Part 2: Hands in Action</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Draw yourself doing something with your hands:</p>
                    <div class="drawing-area" style="height: 100px;"></div>
                    <p>What are you doing in your picture? <span class="answer-space" style="width: 200px;"></span></p>
                </div>
                
                <p><strong>Part 3: Practice Time</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Do these with your hands (ask a grownup to check ✓ when you do each):</p>
                    <p>✓ Wave hello to someone</p>
                    <p>✓ Pick up a small toy</p>
                    <p>✓ Give someone a high-five</p>
                    <p>✓ Draw a circle on paper</p>
                </div>
                
                <p><em>Bring your completed review test to class on Friday!</em></p>
            </div>
        `,
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Discovering Legs and Feet",
        subtopic: "Our Moving Machines",
        lessonContent: `
            <p>Great job learning about arms and hands! Today we'll discover our <strong>Legs and Feet</strong>!</p>
            <p><strong>Key Concept:</strong> Our legs and feet help us move around and play active games!</p>
            <p>Let's look at our legs and feet. Can you wiggle your toes? Can you march in place?</p>
            <p><strong>Fun Fact:</strong> You have 2 legs and 10 toes (5 on each foot)!</p>
            <div class="content-box">
                <p><strong>Parts we're learning today:</strong></p>
                <ul>
                    <li><i class="fas fa-walking"></i> <strong>Legs</strong> - thighs, knees, and lower legs</li>
                    <li><i class="fas fa-shoe-prints"></i> <strong>Feet</strong> - with toes and heels</li>
                </ul>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: What Can Legs Do?</div>
                <p>Our legs can help us:</p>
                <p>🚶 Walk to school</p>
                <p>🏃 Run in the playground</p>
                <p>🦘 Jump like a kangaroo</p>
                <p>💃 Dance to music</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: What Can Feet Do?</div>
                <p>Our feet can:</p>
                <p>⚽ Kick a ball</p>
                <p>👣 Leave footprints</p>
                <p>🩰 Tip-toe quietly</p>
                <p>🦶 Help us balance</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Different Movements</div>
                <p>Try these movements:</p>
                <p>Walk slowly like a turtle 🐢</p>
                <p>Run fast like a cheetah 🐆</p>
                <p>Jump high like a frog 🐸</p>
                <p>March like a soldier 💂</p>
            </div>
        `,
        taskInstructions: "Let's explore how we use our legs and feet. Try each movement!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Show me how you walk:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Make a footprint drawing:
                <div class="drawing-area"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Show me a jumping motion:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Circle things you can do with your legs:
                <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-top: 10px;">
                    <div>🚶 Walk</div>
                    <div>📚 Read</div>
                    <div>🏃 Run</div>
                    <div>🦘 Jump</div>
                    <div>💃 Dance</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Count your toes: <span class="answer-space"></span> toes
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Try to balance on one foot (draw how it felt):
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Friday Homework: Legs and Feet Review Test</strong></p>
                <p><strong>Part 1: Show What You Know</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. How many legs do you have? <span class="answer-space" style="width: 50px;"></span></p>
                    <p>2. How many toes on ONE foot? <span class="answer-space" style="width: 50px;"></span></p>
                    <p>3. Circle 3 things you can do with legs:</p>
                    <div style="margin-left: 20px;">
                        <div>○ Swim ○ Walk ○ Jump ○ Write ○ Dance</div>
                    </div>
                </div>
                
                <p><strong>Part 2: Feet in Action</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Draw yourself doing something with your legs and feet:</p>
                    <div class="drawing-area" style="height: 100px;"></div>
                    <p>What movement are you doing? <span class="answer-space" style="width: 200px;"></span></p>
                </div>
                
                <p><strong>Part 3: Movement Practice</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Do these with your legs and feet (ask a grownup to check ✓ when you do each):</p>
                    <p>✓ Walk from one room to another</p>
                    <p>✓ Jump 3 times in place</p>
                    <p>✓ March like a soldier</p>
                    <p>✓ Stand on one foot for 3 seconds</p>
                </div>
                
                <p><strong>Bonus Challenge:</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Draw or list 2 more things you can do with your legs and feet:</p>
                    <p>1. <span class="answer-space" style="width: 150px;"></span></p>
                    <p>2. <span class="answer-space" style="width: 150px;"></span></p>
                </div>
                
                <p><em>Bring your completed review test to class on Monday!</em></p>
            </div>
        `,
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleScienceWeek3);
    console.log("middleScienceWeek3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleScienceWeek3);
    console.log("middleScienceWeek3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleScienceWeek3',
        metadata: middleScienceWeek3.metadata,
        days: middleScienceWeek3
    });
    console.log("middleScienceWeek3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleScienceWeek3 = middleScienceWeek3;
console.log("middleScienceWeek3.js loaded and registered successfully");