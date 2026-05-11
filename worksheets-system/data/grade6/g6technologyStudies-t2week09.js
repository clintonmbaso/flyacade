// Grade 6 Technology Studies - Term 2 Week 9 Data
const grade6TechnologyWeek9 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 2,
        week: 9,
        title: "Introduction to 3D Modeling",
        description: "Exploring 3D software, creating basic shapes, and manipulating objects in a digital 3D environment"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "3D Modeling",
        subtopic: "Exploring 3D Software (Lesson 19)",
        lessonContent: `
            <p>Welcome to the exciting world of 3D modeling! Today we'll explore the tools that let us create three-dimensional objects on a computer.</p>
            <p><strong>Key Question:</strong> How do video game designers and architects create 3D objects on a flat screen?</p>
            <p><strong>Introduction:</strong> 3D modeling is the process of creating three-dimensional objects using specialized software. Unlike a drawing on paper (which is flat), 3D models have height, width, and depth!</p>
            <p><strong>Popular 3D Modeling Software:</strong></p>
            <ol>
                <li><strong>Paint 3D:</strong> A beginner-friendly tool built into Windows. Great for getting started!</li>
                <li><strong>SketchUp:</strong> Used by architects and designers for building and furniture design</li>
                <li><strong>Tinkercad:</strong> A free, browser-based tool perfect for beginners</li>
                <li><strong>Blender:</strong> Professional software for creating animations, games, and special effects</li>
            </ol>
            <p><strong>Key Concepts in 3D Modeling:</strong></p>
            <ul>
                <li><strong>3D Workspace:</strong>A virtual environment with three axes (X, Y, Z)</li>
                <li><strong>Viewport:</strong>The window where you see and edit your 3D model</li>
                <li><strong>Objects:</strong>The shapes and models you create</li>
                <li><strong>Tools:</strong>Buttons and controls that let you create, modify, and manipulate objects</li>
            </ul>
            <p><strong>Understanding 3D Space - The Three Axes:</strong></p>
            <ul>
                <li><strong>X-Axis:</strong>Left to Right (width)</li>
                <li><strong>Y-Axis:</strong>Up and Down (height)</li>
                <li><strong>Z-Axis:</strong>Forward and Backward (depth)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Video Games</div>
                <p>Every character, weapon, and environment in games like Minecraft or Fortnite is made from hundreds of 3D models created by artists!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dice-d6"></i> The 3D Axes</div>
                <p>Think of a room: width is X (wall to wall), height is Y (floor to ceiling), depth is Z (front wall to back wall). Your 3D workspace works the same way!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Architecture</div>
                <p>Before a house is built, architects create a 3D model so clients can "walk through" their future home on a computer screen.</p>
            </div>
        `,
        taskInstructions: "Explore 3D software interface and identify key tools.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Software Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Open Paint 3D or Tinkercad (as directed by your teacher). Explore the interface and answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Where is the "3D Objects" menu located?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">B. What happens when you click and drag on the workspace?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">C. Find the "View Cube" or rotation tool. What does it control?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Interface Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and label the main parts of your 3D software interface:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">Label these areas: Workspace, Tools Panel, 3D Objects Menu, View Controls</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What is one thing you noticed about how 3D software is different from drawing on paper?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What type of 3D model would you like to create by the end of this unit?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Watch a short tutorial video about your chosen 3D software. Write down three new things you learned about the tools.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "3D Modeling",
        subtopic: "Basic Shapes (Lesson 20)",
        lessonContent: `
            <p>Today we'll learn how to create basic 3D shapes - the building blocks of every 3D model!</p>
            <p><strong>Key Question:</strong> How can you make a simple cube or sphere appear three-dimensional on a screen?</p>
            <p><strong>Introduction:</strong> Every complex 3D model - from cars to castles to characters - is made by combining and modifying basic shapes. Mastering cubes, spheres, and cylinders is your first step!</p>
            <p><strong>Basic 3D Shapes:</strong></p>
            <ol>
                <li><strong>Cube/Box:</strong> Six square faces. Used for buildings, blocks, furniture</li>
                <li><strong>Sphere:</strong> Perfectly round ball shape. Used for balls, planets, heads</li>
                <li><strong>Cylinder:</strong> Round with flat top and bottom. Used for cups, wheels, towers</li>
                <li><strong>Cone:</strong> Round base that tapers to a point. Used for party hats, roofs, ice cream cones</li>
            </ol>
            <p><strong>How to Create Basic Shapes:</strong></p>
            <ul>
                <li>Select the shape from the "3D Objects" menu</li>
                <li>Click and drag on the workspace to create the shape</li>
                <li>The shape appears with handles (white squares) that let you resize it</li>
                <li>The shape has a colored outline showing it is selected</li>
            </ul>
            <p><strong>Shape Properties:</strong></p>
            <ul>
                <li><strong>Scale:</strong> Changing the size (width, height, depth)</li>
                <li><strong>Position:</strong> Where the shape sits in the workspace</li>
                <li><strong>Color:</strong> The appearance of the shape's surface</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Cubes Everywhere!</div>
                <p>A simple house can be made from a cube (main building) + a cone (roof) + small cubes (windows and door).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> From Shapes to Cars</div>
                <p>A basic car model uses: a rectangular box (body), spheres (wheels), and cylinders (headlights).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mouse-pointer"></i> Click and Drag</div>
                <p>When you click and drag to create a cube, dragging farther makes it bigger. Dragging from the center creates a different result than dragging from the corner!</p>
            </div>
        `,
        taskInstructions: "Create and practice making basic 3D shapes in the software.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shape Creation Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create the following shapes in your 3D software:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• One cube</div>
                        <div>• One sphere</div>
                        <div>• One cylinder</div>
                        <div>• One cone</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 50px;">[Draw what you see on your screen]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Shape Variations</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create three different cubes of varying sizes. Record their approximate sizes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Cube 1 (Small): _________</div>
                        <div>Cube 2 (Medium): _________</div>
                        <div>Cube 3 (Large): _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Change the color of each shape. List the colors you used:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Shape Combination</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Arrange your shapes to create a simple object (like a snowman, robot, or house). Draw your creation:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> List which basic shapes you used to build your object:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Which shape was easiest to create? Which was most challenging? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find a small object at home (toy, cup, pencil holder). Identify and list the basic 3D shapes that make up that object.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "3D Modeling",
        subtopic: "Manipulation (Lesson 21)",
        lessonContent: `
            <p>Today we'll learn how to move, rotate, and position our 3D objects - the essential skills for arranging anything in 3D space!</p>
            <p><strong>Key Question:</strong> How do you pick up, turn, and move objects in a 3D environment?</p>
            <p><strong>Introduction:</strong> Creating shapes is just the beginning! To build anything interesting, you need to know how to manipulate objects - moving them around, rotating them, and positioning them exactly where you want.</p>
            <p><strong>The Three Manipulation Tools:</strong></p>
            <ol>
                <li><strong>Move Tool:</strong> Changes the position of an object (slides left/right, up/down, forward/back)</li>
                <li><strong>Rotate Tool:</strong> Spins or turns the object around</li>
                <li><strong>Scale Tool:</strong> Changes the size of the object (makes it bigger or smaller)</li>
            </ol>
            <p><strong>Transform Gizmo (The 3D Controller):</strong></p>
            <ul>
                <li>When you select an object, you'll see arrows (Move), circles (Rotate), or boxes (Scale)</li>
                <li><strong>Red Arrow/Arc:</strong> Controls movement/rotation on the X-axis (left/right)</li>
                <li><strong>Green Arrow/Arc:</strong> Controls movement/rotation on the Y-axis (up/down)</li>
                <li><strong>Blue Arrow/Arc:</strong> Controls movement/rotation on the Z-axis (forward/back)</li>
            </ul>
            <p><strong>Manipulation Tips:</strong></p>
            <ul>
                <li>Click and drag on the arrows to move along one axis at a time</li>
                <li>Click and drag on the colored circles to rotate</li>
                <li>Click and drag on the corner boxes to scale uniformly (all directions at once)</li>
                <li>The objects will snap or "stick" to certain positions to help you align them</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt"></i> Move Like a Pro</div>
                <p>To put a roof on a house, you need to move the cone shape up (Y-axis) so it sits exactly on top of the cube. Precision matters!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sync-alt"></i> Rotation Magic</div>
                <p>To make a character's arm point in different directions, you use the rotate tool. A rotation of 45 degrees makes it diagonal, 90 degrees makes it sideways.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-expand-alt"></i> Scaling Smartly</div>
                <p>If you scale a sphere too much in only one direction, it becomes an egg shape (ellipsoid). Uniform scaling (all directions equally) keeps the shape looking right.</p>
            </div>
        `,
        taskInstructions: "Practice moving, rotating, and scaling objects in the 3D workspace.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Move Tool Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create three cubes. Position them so they are:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Cube A: Left side of the workspace</div>
                        <div>• Cube B: Right side of the workspace</div>
                        <div>• Cube C: Center, slightly above Cube A and B</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 50px;">[Draw your cube arrangement]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Rotate Tool Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a cylinder. Practice rotating it to these angles:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 0 degrees (upright): ___________________</div>
                        <div>• 45 degrees (tilted): ___________________</div>
                        <div>• 90 degrees (lying on side): ___________________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw the cylinder in each of the three positions above:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Scale Tool Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create one sphere. Scale it to make three different sizes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Small (50% of original)</div>
                        <div>• Medium (original size)</div>
                        <div>• Large (200% of original)</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Try scaling a cube in only ONE direction (stretch it tall but not wide). What shape does it become?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Combined Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create a simple robot using at least 6 shapes. Use Move, Rotate, and Scale tools to assemble it:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> List the shapes you used and which manipulation tools you applied to each:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Which manipulation tool (Move, Rotate, or Scale) do you think you'll use most often? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> What was the most difficult part of manipulating objects in 3D space?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice manipulating objects at home. Create a simple object (like a chair or table) using basic shapes. Be ready to share your creation next class.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyWeek9);
    console.log("grade6-technology-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyWeek9);
    console.log("grade6-technology-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyWeek9',
        metadata: grade6TechnologyWeek9.metadata,
        days: grade6TechnologyWeek9
    });
    console.log("grade6-technology-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyWeek9 = grade6TechnologyWeek9;
console.log("grade6-technology-week9.js loaded and registered successfully");