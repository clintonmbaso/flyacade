// Grade 4 Technology Studies - Term 3 Week 9 Data
const grade4TechWeek9 = {
    metadata: {
        grade: 4,
        subject: "Technology Studies",
        term: 3,
        week: 9,
        title: "Logic and Creative Design",
        description: "Combining sequences, events, and loops; troubleshooting and sharing projects"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Logic and Creative Design",
        subtopic: "Combining Sequences, Events, and Loops",
        lessonContent: `
            <p>Welcome to our coding class! Today we'll combine everything we've learned about sequences, events, and loops to create an amazing project!</p>
            <p><strong>Key Question:</strong> How can we use events, sequences, and loops together in one program?</p>
            <p><strong>Review: Your Coding Toolkit</strong></p>
            <ul>
                <li><strong>Sequence (Order):</strong> Instructions happen in a specific order, step by step</li>
                <li><strong>Events (The Start):</strong> Something that triggers code to run (like clicking, pressing a key)</li>
                <li><strong>Loops (Repeating):</strong> Code that repeats over and over again</li>
            </ul>
            <p><strong>Putting It All Together:</strong></p>
            <p>When we combine all three concepts, we can create interactive animations and games!</p>
            <ol>
                <li><strong>Event</strong> → When something happens (sprite clicked, key pressed)</li>
                <li><strong>Sequence</strong> → Do these things in order (change color, then move, then play sound)</li>
                <li><strong>Loop</strong> → Keep doing it forever or for a certain number of times</li>
            </ol>
            <p><strong>Today's Project:</strong> Animated Name or Dancing Sprite</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-code"></i> Example Code: Dancing Sprite</div>
                <div style="background-color: #f0f0f0; padding: 10px; font-family: monospace;">
                    <p><strong>When this sprite clicked</strong> (Event)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>repeat 10 times</strong> (Loop)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;change color by 25 (Sequence step 1)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;move 10 steps (Sequence step 2)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wait 0.1 seconds (Sequence step 3)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;end</p>
                </div>
                <p>This code makes the sprite dance and change colors when clicked!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-signature"></i> Animated Name</div>
                <div style="background-color: #f0f0f0; padding: 10px; font-family: monospace;">
                    <p><strong>When space key pressed</strong> (Event)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>forever</strong> (Loop)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;change size by 10 (Sequence step 1)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wait 0.2 seconds (Sequence step 2)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;change size by -10 (Sequence step 3)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wait 0.2 seconds (Sequence step 4)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;end</p>
                </div>
                <p>This makes your name grow and shrink like it's breathing!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Real-World Connection</div>
                <p>Video games use events (pressing buttons), sequences (character actions in order), and loops (background music repeating) all the time!</p>
            </div>
        `,
        taskInstructions: "Create an Animated Name or Dancing Sprite project combining events, sequences, and loops.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Project Planning</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose your project type (circle one):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🔘 Animated Name &nbsp;&nbsp;&nbsp; 🔘 Dancing Sprite</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Plan your code on paper first. Fill in the blanks:
                    <div style="margin-left: 20px; margin-top: 10px; background-color: #f9f9f9; padding: 10px;">
                        <p><strong>Event:</strong> When _________________ (sprite clicked / key pressed / flag clicked)</p>
                        <p><strong>Sequence (list 3-5 steps in order):</strong></p>
                        <p>1. _________________________________</p>
                        <p>2. _________________________________</p>
                        <p>3. _________________________________</p>
                        <p>4. _________________________________</p>
                        <p>5. _________________________________</p>
                        <p><strong>Loop:</strong> Repeat _________ times OR Forever</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Build Your Project</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Open your coding platform (Scratch / similar). Build your project using:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #e8f4e8;">
                        <div>✓ An <strong>Event</strong> block (green or brown in Scratch)</div>
                        <div>✓ A <strong>Sequence</strong> of blocks (orange, purple, blue in Scratch)</div>
                        <div>✓ A <strong>Loop</strong> block (yellow "repeat" or "forever" in Scratch)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Check Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Check that your project works. Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Does your event trigger the code? Yes / No</div>
                        <div>• Does your sequence happen in the correct order? Yes / No</div>
                        <div>• Does your loop repeat correctly? Yes / No</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What is one thing you would like to add to improve your project?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Show your Animated Name or Dancing Sprite to a family member. Ask them to suggest one change and write down their idea.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Logic and Creative Design",
        subtopic: "Troubleshooting and Sharing",
        lessonContent: `
            <p>Today we'll learn how to find and fix errors in our code (debugging) and share our finished projects!</p>
            <p><strong>Key Question:</strong> What do we do when our code doesn't work the way we expect?</p>
            <p><strong>What are Bugs?</strong></p>
            <p>"Bugs" are just mistakes in our instructions that cause our code to not work properly. "Debugging" is the process of finding and fixing these mistakes.</p>
            <p><strong>Fun Fact:</strong> The term "bug" in computing comes from 1947 when a real moth caused a computer to stop working! Engineers had to "debug" the computer by removing the moth.</p>
            <p><strong>Common Bugs to Look For:</strong></p>
            <ul>
                <li><strong>Wrong order:</strong> Instructions in the wrong sequence</li>
                <li><strong>Missing event:</strong> Nothing triggers the code to start</li>
                <li><strong>Infinite loop:</strong> A loop that never ends (if not wanted)</li>
                <li><strong>Missing block:</strong> Forgetting part of your code</li>
                <li><strong>Wrong values:</strong> Numbers that are too big or too small</li>
            </ul>
            <p><strong>How to Debug:</strong></p>
            <ol>
                <li>Run your code and watch what happens</li>
                <li>Look for where it goes wrong</li>
                <li>Check each block carefully</li>
                <li>Try changing one thing at a time</li>
                <li>Test again!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Broken Script #1</div>
                <div style="background-color: #f0f0f0; padding: 10px; font-family: monospace;">
                    <p><strong>When green flag clicked</strong></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;change size by 10</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;play sound "pop"</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;move 10 steps</p>
                    <p><strong>When green flag clicked</strong> (Oops! This is a duplicate - the first one will run, but the second one might cause confusion)</p>
                </div>
                <p><strong>Bug:</strong> Two "when green flag clicked" blocks. <strong>Fix:</strong> Combine them into one sequence!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spinner"></i> Broken Script #2</div>
                <div style="background-color: #f0f0f0; padding: 10px; font-family: monospace;">
                    <p><strong>When this sprite clicked</strong></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>forever</strong></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;move 10 steps</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;end</p>
                </div>
                <p><strong>Bug:</strong> The sprite will move forever with no way to stop! <strong>Fix:</strong> Add a "repeat 10 times" or an "if on edge, bounce" block.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Peer Debugging</div>
                <p>When you look at someone else's code, you often notice things they missed. That's why swapping devices is a great way to find bugs!</p>
            </div>
        `,
        taskInstructions: "Debug a peer's project, add a backdrop, and share your work.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Peer Debugging</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Swap devices with a partner. Try to find ONE bug in their project:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>What is the bug?</strong> _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>How can you fix it?</strong> _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>Did your fix work?</strong> Yes / No</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> OR your teacher may provide a "broken" script. Identify and fix the problem:
                    <div style="background-color: #f0f0f0; padding: 10px; font-family: monospace; margin-top: 10px;">
                        <p><strong>When space key pressed</strong></p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;say "Hello!"</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;wait 1 seconds</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;move 10 steps</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;wait 0.5 seconds</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;move -10 steps</p>
                        <p><em>(This code is correct! Now break it intentionally and have a friend fix it.)</em></p>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Add a Backdrop</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Add a backdrop/background to your project:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Choose a backdrop from the library OR</div>
                        <div>• Paint your own backdrop</div>
                        <div>• Why did you choose this backdrop? _________________________________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Final polish - add one more detail to make your project special:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Show and Tell</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Be ready to share your project with the class. Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What is the name of your project? _________________________________</div>
                        <div>• What event starts your code? _________________________________</div>
                        <div>• What loop did you use? _________________________________</div>
                        <div>• What was the hardest part to make work? _________________________________</div>
                        <div>• What are you most proud of? _________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Debugging Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> How did it feel when you found and fixed a bug in your (or someone else's) code?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Show your finished project to someone at home. Teach them what an event is, what a sequence is, and what a loop is using your project as an example.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4TechWeek9);
    console.log("grade4-tech-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4TechWeek9);
    console.log("grade4-tech-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4TechWeek9',
        metadata: grade4TechWeek9.metadata,
        days: grade4TechWeek9
    });
    console.log("grade4-tech-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4TechWeek9 = grade4TechWeek9;
console.log("grade4-tech-week9.js loaded and registered successfully");