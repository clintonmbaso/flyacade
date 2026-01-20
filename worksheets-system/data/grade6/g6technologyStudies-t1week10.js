// Grade 6 Technology Studies - Week 10 Data
const grade6TechnologyStudiesWeek10 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        week: 10,
        title: "Advanced Presentation Skills: Creating Interactive Presentations",
        description: "Learning to create non-linear, clickable presentations using hyperlinks, navigation menus, and interactive elements"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Introduction to Interactivity (Hyperlinks)",
        subtopic: "Turning a linear presentation into a clickable experience",
        lessonContent: `
            <p>Welcome to advanced presentation skills! Today we will learn how to turn a regular slideshow into an interactive experience where the audience can choose where to go next.</p>
            <p><strong>Key Concept:</strong> An <strong>interactive presentation</strong> lets users click on objects to navigate between slides, creating a non-linear, engaging experience.</p>
            <p><strong>Inserting Hyperlinks:</strong></p>
            <ul>
                <li>Select any object (text box, shape, image) and right-click to find "Hyperlink"</li>
                <li>Choose "Place in This Document" to link to another slide</li>
                <li>Use "ScreenTip" to add hover text that tells users where they'll go</li>
                <li>Always create "Back" buttons to help users return</li>
            </ul>
            <p><strong>Why Interactivity Matters:</strong></p>
            <ul>
                <li>Makes presentations more engaging and game-like</li>
                <li>Allows users to explore content in their own order</li>
                <li>Great for quizzes, games, tutorials, and exploratory projects</li>
            </ul>
            <p><strong>Best Practices:</strong> Test every link! Make sure clicked objects are obvious (change color on hover if possible), and always provide a way back to the main menu or previous slide.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-link" style="color: #4A90E2;"></i> Hyperlink Example</div>
                <p>In an interactive quiz, each answer choice is a button that links to a different slide—correct answers go to a "Well done!" slide, incorrect ones go to a "Try again" slide.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Game Example</div>
                <p>Many digital escape rooms or mystery games are built using PowerPoint hyperlinks—clicking clues reveals new slides with more information.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-undo"></i> Back Button Example</div>
                <p>Every slide in an interactive presentation should have a consistent "Back" button that returns users to the previous slide or main menu.</p>
            </div>
        `,
        taskInstructions: "Create a simple interactive game using hyperlinks to practice linking between slides.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Create a 3-slide "Mystery Box" game:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>Slide 1:</strong> Title it "Choose a Box". Add two squares labeled "Box A" and "Box B".</div>
                    <div><strong>Slide 2:</strong> Title it "You Win!" with a congratulatory message.</div>
                    <div><strong>Slide 3:</strong> Title it "Try Again" with an encouraging message.</div>
                </div>
                <div class="answer-space" style="height: 30px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Add hyperlinks:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>• Link <strong>Box A</strong on Slide 1 to <strong>Slide 2</strong></div>
                    <div>• Link <strong>Box B</strong on Slide 1 to <strong>Slide 3</strong></div>
                    <div>• Add "Back to Start" buttons on Slides 2 and 3 linking to Slide 1</div>
                </div>
                <div class="answer-space" style="height: 30px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Test your game. Write down what happens when you click each box in Presentation Mode:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why is it important to test all links in an interactive presentation?
                <div class="answer-space" style="height: 60px;"></div>
            </div>
        `,
        homework: "Design one additional slide for the Mystery Box game—maybe a 'Secret Prize' slide—and link it from one of the boxes.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Building Navigation Menus",
        subtopic: "Creating a 'Home' menu that controls the entire presentation",
        lessonContent: `
            <p>Today we'll learn how to create a navigation menu—like a website's menu bar—that lets users jump to any section of your presentation and back again.</p>
            <p><strong>Key Concept:</strong> A <strong>navigation menu</strong> is a set of buttons, usually placed consistently on every slide, that allows non-linear movement through your presentation.</p>
            <p><strong>Creating Buttons:</strong></p>
            <ul>
                <li>Use shapes (rectangles, rounded rectangles, circles) as buttons</li>
                <li>Group shapes and text to create a single clickable button</li>
                <li>Place menus in the same spot on every slide (top, bottom, or side)</li>
                <li>Keep design consistent—same colors, fonts, and sizes</li>
            </ul>
            <p><strong>Non-Linear Navigation:</strong></p>
            <ul>
                <li>Users don't have to go slide-by-slide</li>
                <li>Great for reference materials, portfolios, or choice-based stories</li>
                <li>Requires careful planning of slide sections</li>
            </ul>
            <p><strong>Essential Elements:</strong> Every slide should have a "Home" button to return to the main menu, and the menu itself should be clearly labeled and easy to use.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bars" style="color: #FF6B6B;"></i> Table of Contents Example</div>
                <p>A "Table of Contents" slide with buttons like "Introduction," "Gallery," "Quiz," and "Credits." Each button links to the first slide of that section.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Home Button Example</div>
                <p>A small house icon in the corner of every slide that always links back to Slide 1 (the main menu). This ensures users never get lost.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th"></i> Icon-Based Menu Example</div>
                <p>Some presentations use icons instead of text for navigation—a book icon for "Story," a camera for "Gallery," a question mark for "Quiz."</p>
            </div>
        `,
        taskInstructions: "Build a presentation with a functioning Table of Contents menu and consistent navigation buttons.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Planning Your Presentation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Plan a 6-slide presentation with these sections:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Slide 1: <strong>Table of Contents</strong> (menu)</div>
                        <div>• Slides 2–3: <strong>Introduction</strong> section</div>
                        <div>• Slides 4–5: <strong>Gallery</strong> section</div>
                        <div>• Slide 6: <strong>Quiz</strong> section</div>
                    </div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Creating the Menu</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> On Slide 1, create three buttons labeled:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Introduction (links to Slide 2)</div>
                        <div>• Gallery (links to Slide 4)</div>
                        <div>• Quiz (links to Slide 6)</div>
                    </div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> On Slides 2, 4, and 6, add a "Home" button that links back to Slide 1:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;">
                        <p style="text-align: center; color: #666; padding-top: 40px;">Sketch where you'll place the Home button on a slide</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Testing Navigation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Test your menu. Can you go from Home → Introduction → Home → Gallery → Home → Quiz → Home using only clicks?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why is consistent placement of navigation buttons important?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Add a fourth section to your presentation—'About Me'—and update the Table of Contents menu to include it.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "The Final Project (Interactive Choice)",
        subtopic: "Combining animations, motion paths, and menus into a final interactive product",
        lessonContent: `
            <p>Today is project day! You'll combine everything you've learned—animations, motion paths, hyperlinks, and menus—to create a complete interactive presentation.</p>
            <p><strong>Project Choices:</strong></p>
            <ul>
                <li><strong>Choose Your Own Adventure:</strong> A story where readers make choices that lead to different endings</li>
                <li><strong>Interactive Encyclopedia:</strong> A topic explored through clickable categories and back-and-forth navigation</li>
                <li><strong>Educational Quiz Game:</strong> A multiple-choice quiz with feedback for right/wrong answers</li>
            </ul>
            <p><strong>Key Concept:</strong> <strong>User Experience (UX)</strong> means designing your presentation so it's easy, intuitive, and enjoyable to use.</p>
            <p><strong>Combining Effects:</strong></p>
            <ul>
                <li>Use animations to reveal content</li>
                <li>Use motion paths to move objects</li>
                <li>Use hyperlinks for navigation</li>
                <li>Use menus for organization</li>
            </ul>
            <p><strong>Testing Checklist:</strong></p>
            <ul>
                <li>All links work correctly (no "broken links")</li>
                <li>Every slide has a way back to the main menu</li>
                <li>Animations don't interfere with clickable areas</li>
                <li>Presentation makes sense when played from start</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-open" style="color: #8B4513;"></i> Adventure Story Example</div>
                <p>"The Haunted Castle" story: Slide 1 asks "Open the door or run away?" Each choice links to a different slide with new choices, leading to 8 possible endings.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-robot"></i> Interactive Encyclopedia Example</div>
                <p>"Planets of the Solar System": Main menu with planet buttons. Each planet slide has animations of orbits, facts that appear on click, and a "Back to Menu" button.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Quiz Game Example</div>
                <p>"Science Quiz": Questions with 4 answer buttons. Correct answers link to a "Correct!" slide; wrong ones link to "Try again" with an explanation.</p>
            </div>
        `,
        taskInstructions: "Build your final interactive presentation project using all the skills learned this week.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Project Planning</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose your project type and write your topic:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Plan your slides (minimum 8 slides total). List them below:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Required Elements</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Checklist—your project must include:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>✓ At least <strong>one motion path</strong> (moving object)</div>
                        <div>✓ At least <strong>three custom animations</strong> (entrance, emphasis, or exit)</div>
                        <div>✓ A <strong>functioning navigation menu</strong> with Home button</div>
                        <div>✓ <strong>Hyperlinks</strong> that work correctly in Presentation Mode</div>
                    </div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Building & Testing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Build your presentation. Use the space below to note any problems you encounter:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Test your entire presentation from start to finish. List one thing you fixed during testing:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What was the most challenging part of creating an interactive presentation?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> How is an interactive presentation better than a linear one for certain topics?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write a short user guide (3–5 steps) explaining how to navigate through your interactive presentation.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyStudiesWeek10);
    console.log("technology-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyStudiesWeek10);
    console.log("technology-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyStudiesWeek10',
        metadata: grade6TechnologyStudiesWeek10.metadata,
        days: grade6TechnologyStudiesWeek10
    });
    console.log("technology-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyStudiesWeek10 = grade6TechnologyStudiesWeek10;
console.log("technology-week10.js loaded and registered successfully");