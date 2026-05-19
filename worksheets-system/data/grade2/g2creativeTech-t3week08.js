// Grade 2 Creative and Technology Studies - Term 3 Week 8 Data
const grade2CreativeTechWeek8 = {
    metadata: {
        grade: 2,
        subject: "Creative and Technology Studies",
        term: 3,
        week: 8,
        title: "Toy Construction and Games",
        description: "Constructing objects using geometric shapes and playing traditional Zambian games"
    },
    
    thursday: {
        subject: "Creative and Technology Studies",
        topic: "Toy Construction",
        subtopic: "Constructing Objects Using Geometric Shapes",
        lessonContent: `
            <p>Welcome to our toy construction lesson! Today we'll learn how to build familiar objects using simple geometric shapes.</p>
            <p><strong>Key Question:</strong> What shapes can you see in a bicycle, a car, or a person?</p>
            <p><strong>Introduction:</strong> Every object around us is made of basic shapes! When we look closely at toys and objects, we can see circles, squares, triangles, and rectangles. Today we'll use these shapes to build our own creations.</p>
            <p><strong>Geometric Shapes We Use:</strong></p>
            <ul>
                <li><strong>Circle (Oval):</strong> Wheels, heads, eyes</li>
                <li><strong>Rectangle:</strong> Body, bicycle frame, car body</li>
                <li><strong>Square:</strong> Windows, seats, boxes</li>
                <li><strong>Triangle:</strong> Roofs, bicycle seats, pointed parts</li>
            </ul>
            <p><strong>What We Can Build:</strong></p>
            <ol>
                <li><strong>Human Figure:</strong> Circle for head, rectangle for body, small rectangles for arms and legs</li>
                <li><strong>Bicycle:</strong> Two circles for wheels, triangles for the frame, small rectangle for the seat</li>
                <li><strong>Wire Car:</strong> Rectangle for the car body, four small circles for wheels, squares for windows</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bicycle"></i> Shape Hunt - Bicycle</div>
                <p>A bicycle has: 2 circles (wheels), triangles (the frame), small circles (pedals), and rectangles (the seat and handlebars)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Shape Hunt - Car</div>
                <p>A car has: rectangles (main body), circles (wheels), squares or rectangles (windows), and circles (headlights)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Shape Hunt - Person</div>
                <p>A person has: a circle (head), a rectangle (body), long rectangles (arms), longer rectangles (legs), and small circles (eyes)!</p>
            </div>
        `,
        taskInstructions: "Using paper shapes or drawing, construct a person, bicycle, or wire car.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shape Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the picture. What shapes do you see? Name them:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center;">
                        <span style="color: #999;">[Simple bicycle or car outline drawing]</span>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Build Your Own Toy</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose ONE object to build using shapes (person, bicycle, or wire car):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <label><input type="radio" name="toyChoice"> Human Figure</label><br>
                        <label><input type="radio" name="toyChoice"> Bicycle</label><br>
                        <label><input type="radio" name="toyChoice"> Wire Car</label>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw your chosen object using only shapes (circles, rectangles, squares, triangles):
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Label Your Shapes</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Label each shape you used in your drawing:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was the easiest shape to draw? What was the hardest?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 objects at home. For each object, name the shapes you see. Draw one of them in your notebook.",
        homeworkDue: "Next Thursday"
    },
    
    friday: {
        subject: "Creative and Technology Studies",
        topic: "Games",
        subtopic: "Applying Rules and Playing Traditional Zambian Games",
        lessonContent: `
            <p>Welcome to our games lesson! Today we'll learn about rules and play traditional Zambian games.</p>
            <p><strong>Key Question:</strong> Why do games need rules? What traditional games do you know?</p>
            <p><strong>Introduction:</strong> Games are fun to play, but they need rules so everyone plays fairly. Today we'll learn some traditional Zambian games that children have played for many years!</p>
            <p><strong>Why Do Games Have Rules?</strong></p>
            <ul>
                <li>Rules make sure everyone is treated fairly</li>
                <li>Rules help us know who wins and who loses</li>
                <li>Rules keep us safe while playing</li>
                <li>Rules make games more fun for everyone!</li>
            </ul>
            <p><strong>Traditional Zambian Games:</strong></p>
            <ol>
                <li><strong>Nsolo (Solo):</strong> A counting and strategy game played with pebbles and small holes in the ground. Players move pebbles around to capture their opponent's pieces.</li>
                <li><strong>Walusungu (Hopscotch):</strong> A jumping game where players hop on one foot through numbered squares drawn on the ground.</li>
                <li><strong>Chiyato (Hide and Seek):</strong> One player closes their eyes and counts while others hide. Then they try to find everyone!</li>
                <li><strong>Katope (Jump Rope):</strong> Players jump over a swinging rope while singing traditional songs.</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star-of-life"></i> Nsolo (Solo) Rules</div>
                <p><strong>How to play:</strong> Make 16 small holes in the ground (2 rows of 8). Each player starts with 4 pebbles. Players pick up pebbles from a hole and drop one in each hole moving forward. If the last pebble lands in an empty hole, you capture your opponent's pebbles!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-jump-rope"></i> Katope (Jump Rope)</div>
                <p><strong>How to play:</strong> Two players hold the ends of a rope and swing it around. The third player jumps over the rope without touching it. Players sing traditional songs while jumping!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-square"></i> Walusungu (Hopscotch)</div>
                <p><strong>How to play:</strong> Draw 10 squares on the ground. Throw a small stone on square 1. Hop on one foot, skip the square with the stone, and hop back. Pick up the stone on your way back!</p>
            </div>
        `,
        taskInstructions: "Learn game rules, play traditional Zambian games, and reflect on the experience.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Rules</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Why are rules important in games? List two reasons:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What happens if players don't follow the rules?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Learning a Traditional Game</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Your teacher will demonstrate ONE traditional Zambian game. Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Game name: _______________</div>
                        <div>Materials needed: _______________</div>
                        <div>How many players? _______________</div>
                        <div>Three main rules:</div>
                        <div class="answer-space" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Let's Play!</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Play the game with your classmates for 15 minutes. Then answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Did you follow all the rules? Why or why not?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>• What was the most fun part of the game?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>• Would you change any rule? Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Game Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> How is the traditional Zambian game different from a video game or board game you know?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Drawing Time</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a picture of your favorite traditional Zambian game being played:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Teach one traditional Zambian game to a family member or friend at home. Ask them to play with you. Write or draw what happened.",
        homeworkDue: "Next Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2CreativeTechWeek8);
    console.log("grade2-creative-tech-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2CreativeTechWeek8);
    console.log("grade2-creative-tech-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2CreativeTechWeek8',
        metadata: grade2CreativeTechWeek8.metadata,
        days: grade2CreativeTechWeek8
    });
    console.log("grade2-creative-tech-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2CreativeTechWeek8 = grade2CreativeTechWeek8;
console.log("grade2-creative-tech-week8.js loaded and registered successfully");