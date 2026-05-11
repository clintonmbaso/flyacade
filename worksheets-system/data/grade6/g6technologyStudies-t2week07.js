// Grade 6 Technology Studies - Term 2 Week 7 Data
const grade6TechWeek7 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 2,
        week: 7,
        title: "Orthographic Projection - Front and Plan",
        description: "Understanding orthographic views, drawing front elevation and plan view of simple 3D objects"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Graphical Communication",
        subtopic: "Introduction to Orthographic Views",
        lessonContent: `
            <p>Welcome to Orthographic Projection! Today we'll learn how to look at objects from different fixed angles to understand their true shape.</p>
            <p><strong>Key Question:</strong> How can we show a 3D object accurately on flat paper?</p>
            <p><strong>Introduction:</strong> Orthographic projection is a method of drawing a 3D object using separate 2D views. Instead of drawing one picture that looks 3D, we draw several flat views from different directions.</p>
            <p><strong>Why Do We Need Orthographic Drawing?</strong></p>
            <ul>
                <li>Engineers and builders need exact measurements</li>
                <li>A single 3D sketch can hide important details</li>
                <li>Different views show different sides of the same object</li>
                <li>Anyone in the world can understand the drawing using standard rules</li>
            </ul>
            <p><strong>The Three Main Orthographic Views:</strong></p>
            <ol>
                <li><strong>Front View (Front Elevation):</strong> What you see looking straight at the front</li>
                <li><strong>Plan View (Top View):</strong> What you see looking straight down from above</li>
                <li><strong>Side View (Side Elevation):</strong> What you see looking from the left or right side</li>
            </ol>
            <p><strong>Key Concept - Fixed Viewpoints:</strong></p>
            <p>Imagine placing an object inside a glass box. From each side (front, top, side), you project the shape onto the glass. When you flatten the box, you get orthographic drawings!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> The Glass Box Analogy</div>
                <p>Place a rectangular block inside a clear glass box. Look from the front - you see the front face. Look from above - you see the top face. Each view is a flat, true-shape drawing!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drafting-compass"></i> Real-World Connection</div>
                <p>Architects use orthographic drawings to show house plans. The plan view (top view) shows room layouts. Front elevations show what the house looks like from the street.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Fixed Angles</div>
                <p>You must look exactly straight at the object - not from an angle. That's why it's called "ortho" (straight/right) and "graphic" (drawing).</p>
            </div>
        `,
        taskInstructions: "Observe objects from different angles and identify front and top views.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Views</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at a rectangular box (like a cereal box or shoebox) on your desk. Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. What shape is the FRONT view? _______________</div>
                        <div>B. What shape is the TOP view (plan)? _______________</div>
                        <div>C. What shape is the SIDE view? _______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identifying Views</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each object below, write what shape you would see in the FRONT view and PLAN view:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A can of soda: Front = _______, Plan = _______</div>
                        <div>• A tennis ball: Front = _______, Plan = _______</div>
                        <div>• A smartphone: Front = _______, Plan = _______</div>
                        <div>• A pencil standing on its eraser: Front = _______, Plan = _______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Glass Box Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Imagine a small rectangular block inside a glass box. Draw the three views you would see:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Front View</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Plan View (Top)</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Side View</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is one 3D sketch not enough to build something accurately?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 objects at home (different shapes: box, cup, ball). For each, draw what you see from the FRONT and from the TOP.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Graphical Communication",
        subtopic: "Drawing the Front View (Front Elevation)",
        lessonContent: `
            <p>Today we'll learn how to draw the FRONT VIEW (front elevation) of a simple rectangular block!</p>
            <p><strong>Key Question:</strong> How do we correctly draw what we see when looking straight at the front of an object?</p>
            <p><strong>What is Front Elevation?</strong></p>
            <p>The front elevation is a 2D drawing showing exactly what you see when looking straight at the front face of an object. It shows height and width - but not depth.</p>
            <p><strong>Rules for Drawing Front View:</strong></p>
            <ol>
                <li>Use a ruler for straight, accurate lines</li>
                <li>Draw only the visible edges (what you can actually see from the front)</li>
                <li>Use faint guidelines first, then darken final lines</li>
                <li>Include overall height and width measurements</li>
                <li>Draw to scale if measurements are given</li>
            </ol>
            <p><strong>Drawing a Rectangular Block - Step by Step:</strong></p>
            <ul>
                <li><strong>Step 1:</strong> Determine the block's height and width from the front view</li>
                <li><strong>Step 2:</strong> Lightly draw a rectangle with those dimensions</li>
                <li><strong>Step 3:</strong> Check that corners are 90-degree right angles</li>
                <li><strong>Step 4:</strong> Darken the outline with a sharp pencil or pen</li>
                <li><strong>Step 5:</strong> Add dimensions (height and width labels)</li>
            </ul>
            <p><strong>Important:</strong> In orthographic projection, we do NOT add 3D effects like shading or perspective. Keep it flat and accurate!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Worked Example</div>
                <p>A rectangular block is 6cm wide, 4cm high, and 5cm deep. The FRONT view is simply a rectangle 6cm wide × 4cm high. You ignore the 5cm depth because you're only seeing the front face!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Building Analogy</div>
                <p>When you look at a house from the street, you see its front elevation - windows, door, roof shape. You don't see how deep the house is. That's exactly what a front elevation drawing shows!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Accuracy Counts</div>
                <p>In orthographic drawing, being accurate is more important than making it look "pretty." Use your ruler every time!</p>
            </div>
        `,
        taskInstructions: "Draw accurate front views (front elevations) of rectangular blocks with given dimensions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying the Front View Dimensions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each block, write the dimensions of the FRONT view:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Block: width=8cm, height=3cm, depth=6cm → Front view is ______cm × ______cm</div>
                        <div>B. Block: width=5cm, height=5cm, depth=5cm → Front view is ______cm × ______cm</div>
                        <div>C. Block: width=10cm, height=4cm, depth=7cm → Front view is ______cm × ______cm</div>
                        <div>D. Block: width=12cm, height=9cm, depth=4cm → Front view is ______cm × ______cm</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Practice - Front Elevation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the FRONT VIEW of a rectangular block with width = 6cm and height = 4cm.
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 5px;"><em>Remember: Use a ruler! Each small square = 0.5cm</em></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: More Drawing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw the FRONT VIEW of a rectangular block with width = 8cm and height = 3cm.
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Adding Dimensions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> On your drawing from Question 3, add dimension lines showing the width (8cm) and height (3cm).
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Error Spotting</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> A student drew a front view but included the depth (6cm). Why is this incorrect?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find a rectangular object at home (book, phone, box). Measure its width and height. Draw the front elevation accurately using a ruler. Add dimensions.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Graphical Communication",
        subtopic: "Drawing the Plan View (Top View)",
        lessonContent: `
            <p>Today we'll learn how to draw the PLAN VIEW (top view) of a simple rectangular block!</p>
            <p><strong>Key Question:</strong> What does the object look like when viewed straight down from above?</p>
            <p><strong>What is Plan View?</strong></p>
            <p>The plan view (also called the top view) shows exactly what you see when looking straight down onto the top of an object. It shows width and depth - but not height.</p>
            <p><strong>Rules for Drawing Plan View:</strong></p>
            <ol>
                <li>Use a ruler for straight, accurate lines</li>
                <li>Draw only what you see from above (not the sides)</li>
                <li>Plan view is drawn directly ABOVE the front view (in standard layout)</li>
                <li>Include overall width and depth measurements</li>
                <li>Draw to the same scale as your front view</li>
            </ol>
            <p><strong>Drawing a Rectangular Block - Plan View Steps:</strong></p>
            <ul>
                <li><strong>Step 1:</strong> Determine the block's width and depth from the top view</li>
                <li><strong>Step 2:</strong> Lightly draw a rectangle with those dimensions</li>
                <li><strong>Step 3:</strong> Ensure corners are 90-degree right angles</li>
                <li><strong>Step 4:</strong> Darken the outline with a sharp pencil</li>
                <li><strong>Step 5:</strong> Add dimensions (width and depth labels)</li>
            </ul>
            <p><strong>Front View vs. Plan View Comparison:</strong></p>
            <ul>
                <li><strong>Front View:</strong> Shows HEIGHT and WIDTH | Ignores DEPTH</li>
                <li><strong>Plan View:</strong> Shows WIDTH and DEPTH | Ignores HEIGHT</li>
                <li><strong>Same Width:</strong> Both views share the same WIDTH measurement</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map"></i> Map Analogy</div>
                <p>A plan view is like a map! When you look at a map of a house, you see the layout from above - where rooms are, how wide and deep they are. You don't see how tall the walls are.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Table Top View</div>
                <p>Imagine looking straight down at a rectangular table. You see the table top shape (width × depth). You don't see the table legs or how tall it is - those would be in the front or side views!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-layer-group"></i> Stacking Views</div>
                <p>In orthographic drawings, the plan view is placed ABOVE the front view. The side view goes to the right. This is a standard convention that engineers follow worldwide.</p>
            </div>
        `,
        taskInstructions: "Draw accurate plan views (top views) of rectangular blocks and arrange views correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying the Plan View Dimensions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each block, write the dimensions of the PLAN view:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Block: width=8cm, height=3cm, depth=6cm → Plan view is ______cm × ______cm</div>
                        <div>B. Block: width=5cm, height=7cm, depth=4cm → Plan view is ______cm × ______cm</div>
                        <div>C. Block: width=10cm, height=2cm, depth=10cm → Plan view is ______cm × ______cm</div>
                        <div>D. Square block: width=6cm, height=6cm, depth=6cm → Plan view is ______cm × ______cm</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Practice - Plan View</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the PLAN VIEW of a rectangular block with width = 7cm and depth = 5cm.
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 5px;"><em>Remember: Top view shows width and depth only!</em></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Front View vs. Plan View</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A rectangular block has: width=9cm, height=4cm, depth=6cm.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Draw the FRONT VIEW (width × height):</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">B. Draw the PLAN VIEW (width × depth) directly ABOVE the front view:</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: What is Wrong?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A student drew a plan view showing 6cm (height) instead of depth. Explain the mistake:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Real Object Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Look at a rectangular object (book, phone, eraser). Measure its width and depth. Draw the plan view with dimensions:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Choose a rectangular object at home (not the same as yesterday's). Measure its width and depth. Draw the plan view accurately using a ruler. Add dimensions.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechWeek7);
    console.log("grade6-tech-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechWeek7);
    console.log("grade6-tech-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechWeek7',
        metadata: grade6TechWeek7.metadata,
        days: grade6TechWeek7
    });
    console.log("grade6-tech-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechWeek7 = grade6TechWeek7;
console.log("grade6-tech-week7.js loaded and registered successfully");