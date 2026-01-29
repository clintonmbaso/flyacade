// Grade 4 Social Studies - Week 7 Data
const grade4SocialStudiesWeek7 = {
    metadata: {
        grade: 4,
        subject: "Social Studies",
        week: 7,
        title: "Community Mapping and Directions",
        description: "Learning to create simple community maps and use cardinal directions for navigation"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Introduction to Community Mapping",
        subtopic: "Creating a bird's-eye view map of local community with landmarks",
        lessonContent: `
            <p>Welcome to Week 7 of Social Studies! Today we will learn how to create maps of our community.</p>
            <p><strong>Discussion Starter:</strong> How would you explain the way to your house to a visitor? Think about what landmarks you would mention.</p>
            <p><strong>What is a Map?</strong> A map is like a "bird's-eye view" of a place. It shows how things look from above, making it easier to understand where everything is located.</p>
            <p><strong>Teacher Demonstration:</strong> Watch as I draw a simple map of our school grounds on the board. Notice how I use symbols to represent buildings, trees, and roads.</p>
            <p><strong>Map Symbols:</strong> Maps use simple symbols instead of detailed drawings. For example:</p>
            <ul>
                <li>A square for a building</li>
                <li>A tree shape for parks</li>
                <li>Lines for roads</li>
            </ul>
            <p><strong>Why Mapping Matters:</strong> Maps help us understand our community, find our way, and share information about important places.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map" style="color: #4CAF50;"></i> School Map Example</div>
                <p>Here's our school map from above: main building, playground, parking lot, and trees around the edges.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-landmark"></i> Landmark Examples</div>
                <p>Landmarks are important places everyone knows: grocery store, library, fire station, or a big tree in the park.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Your Neighborhood</div>
                <p>Think about what makes your neighborhood special. What would a visitor notice first?</p>
            </div>
        `,
        taskInstructions: "Create a simple map of the area around your home or school including at least three major landmarks.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Draw a bird's-eye view map of your local community:
                <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">This is a map of: ______________________________</div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Include at least THREE landmarks on your map. Label them below:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. ______________________________</div>
                    <div>2. ______________________________</div>
                    <div>3. ______________________________</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw a map key showing what your symbols mean:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px; width: 200px;">
                    <strong>Map Key:</strong><br>
                    □ = Building<br>
                    🌳 = Park<br>
                    — = Road<br>
                    ★ = My House
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Share your map with a partner. Identify one landmark you both included:
                <div class="answer-space" style="height: 40px; margin-top: 10px;">We both included: ______________________________</div>
            </div>
        `,
        homework: "Ask a family member to point out one more community landmark you could add to your map. Draw it on your map and label it.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Finding Our Way with Cardinal Points",
        subtopic: "Identifying and using North, South, East, West on maps",
        lessonContent: `
            <p>Today we'll learn how to use directions to navigate our community maps!</p>
            <p><strong>Discussion Starter:</strong> Which direction does the sun rise? (East) Where does it set? (West) These are fixed points that help us find our way.</p>
            <p><strong>Cardinal Directions:</strong> The four main directions are North, South, East, and West. We call these "cardinal points."</p>
            <p><strong>Compass Rose:</strong> This is a symbol on maps that shows the cardinal directions. North usually points to the top of the map.</p>
            <p><strong>How to Remember:</strong> Use this phrase: <strong>Never Eat Soggy Waffles</strong> (North, East, South, West).</p>
            <p><strong>Using Directions on Maps:</strong> Once we know which way is North, we can describe where things are located. For example: "The park is north of the school."</p>
            <p><strong>Why Directions Matter:</strong> Cardinal directions help us give clear instructions, read maps accurately, and understand how places relate to each other.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-compass" style="color: #2196F3;"></i> Compass Rose Example</div>
                <p>A compass rose looks like this: N at the top, S at the bottom, E on the right, W on the left.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun" style="color: #FF9800;"></i> Sun Direction Trick</div>
                <p>In the morning, if you face the rising sun, you're facing East. North is to your left, South to your right.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map-marked-alt"></i> Map with Directions</div>
                <p>On a map of our town, the library might be east of the school, and the park might be west of the fire station.</p>
            </div>
        `,
        taskInstructions: "Add a compass rose to your community map and practice using cardinal directions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Add a Compass Rose</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a compass rose in the corner of your community map from Monday:
                    <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Direction Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using your map, answer these direction questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>If you walk from your house toward the school, what direction are you heading? ________</div>
                        <div>Which landmark is NORTH of your house? ________</div>
                        <div>Which landmark is EAST of your school? ________</div>
                        <div>What is SOUTH of the park? ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Direction Instructions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write directions from one landmark to another using cardinal points:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                        Start at: ________________<br>
                        Walk ________ to the ________.<br>
                        Then go ________ to the ________.<br>
                        You will arrive at: ________________
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Direction Simon Says</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Play "Simon Says" with directions. Check each action you do correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Simon says face North</div>
                        <div>☐ Simon says point East</div>
                        <div>☐ Simon says turn to face South</div>
                        <div>☐ Wave your hand toward the West (no Simon says!)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Map Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Exchange maps with a partner. Write one direction question about THEIR map:
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">My question: ______________________________</div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">Their answer: ______________________________</div>
                </div>
            </div>
        `,
        homework: "At home, find North using the sun or a compass. Draw which direction your front door faces (North, South, East, or West).",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4SocialStudiesWeek7);
    console.log("social-studies-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4SocialStudiesWeek7);
    console.log("social-studies-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4SocialStudiesWeek7',
        metadata: grade4SocialStudiesWeek7.metadata,
        days: grade4SocialStudiesWeek7
    });
    console.log("social-studies-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4SocialStudiesWeek7 = grade4SocialStudiesWeek7;
console.log("social-studies-week7.js loaded and registered successfully");