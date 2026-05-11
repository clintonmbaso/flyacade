// Grade 6 Technology Studies - Term 2 Week 8
const grade6TechnologyWeek8 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 2,
        week: 8,
        title: "Orthographic Projection - End View and Dimensions",
        description: "Drawing end views, converting pictorials to 2D views, and adding dimensions to orthographic drawings"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Orthographic Projection",
        subtopic: "Drawing the End View (Side Elevation)",
        lessonContent: `
            <p>Welcome to our study of orthographic projection! Today we'll learn how to draw the end view (side elevation) of simple objects.</p>
            <p><strong>Key Question:</strong> How can we show what an object looks like from the side using a 2D drawing?</p>
            <p><strong>Introduction:</strong> Orthographic projection is a way of drawing a 3D object using multiple 2D views. The three main views are:</p>
            <ol>
                <li><strong>Front View (Front Elevation):</strong> What you see looking from the front</li>
                <li><strong>Top View (Plan View):</strong> What you see looking from above</li>
                <li><strong>End View (Side Elevation):</strong> What you see looking from the side (left or right)</li>
            </ol>
            <p><strong>Rules for Drawing End Views:</strong></p>
            <ul>
                <li>The end view aligns horizontally with the front view</li>
                <li>Height measurements are the same as the front view</li>
                <li>Depth measurements are shown in the end view</li>
                <li>Hidden edges are shown with dashed lines</li>
            </ul>
            <p><strong>Steps to Sketch a Side Elevation:</strong></p>
            <ol>
                <li>Identify which side of the object you are viewing from</li>
                <li>Draw the overall height (same as front view)</li>
                <li>Draw the overall depth (the measurement from front to back)</li>
                <li>Add any internal features or cutouts using dashed lines</li>
                <li>Check that your view is correctly positioned relative to the front view</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> The Box Example</div>
                <p>A rectangular box that is 6cm tall, 4cm wide, and 5cm deep. The end view (side elevation) would be 6cm tall and 5cm deep - a rectangle!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drafting-compass"></i> Aligning Views</div>
                <p>In orthographic projection, the end view is always drawn directly to the side of the front view. This helps engineers understand exactly how parts fit together.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Which Side?</div>
                <p>The left end view shows what you see looking from the left side. The right end view shows what you see looking from the right side. Both are useful!</p>
            </div>
        `,
        taskInstructions: "Identify and sketch the side elevation of simple objects.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Views</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at this rectangular prism (6cm tall, 8cm wide, 5cm deep). What shape would the end view be?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What would be the dimensions of the end view?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sketching the End View</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Given the front view below (height 5cm, width 6cm) and depth 4cm, sketch the end view (side elevation) to the right of the front view:
                    <div style="margin-top: 10px;">
                        <div style="border: 1px solid #333; width: 120px; height: 100px; margin-bottom: 10px; position: relative;">
                            <span style="position: absolute; bottom: -20px; left: 45%;">Front View</span>
                        </div>
                        <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Practice Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw the front view and end view of a L-shaped block with these measurements: overall height 8cm, overall depth 5cm. (Front view shows height and width; end view shows height and depth)
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to show the end view when describing an object to someone building it?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find a rectangular object at home (a book, phone, or box). Measure its height, width, and depth. Draw the front view and end view on paper with correct proportions.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Orthographic Projection",
        subtopic: "Converting Pictorials - Identifying 2D Views from 3D Drawings",
        lessonContent: `
            <p>Today we'll learn how to look at a 3D drawing and identify which 2D shape belongs to which view (front, top, or end).</p>
            <p><strong>Key Question:</strong> How can you look at a 3D object and figure out what each 2D view should look like?</p>
            <p><strong>Understanding Pictorial Drawings:</strong></p>
            <ul>
                <li><strong>Isometric drawings</strong> show three faces of an object at once</li>
                <li>They give a realistic, 3D appearance</li>
                <li>However, they don't show exact shapes and measurements clearly</li>
            </ul>
            <p><strong>Converting from 3D to 2D Views:</strong></p>
            <ol>
                <li>Imagine standing directly in front of the object - draw what you see (front view)</li>
                <li>Imagine looking from directly above - draw what you see (top view)</li>
                <li>Imagine looking from the side - draw what you see (end view)</li>
            </ol>
            <p><strong>Rules for Identifying Views:</strong></p>
            <ul>
                <li>The front view shows height and width</li>
                <li>The top view shows width and depth</li>
                <li>The end view shows height and depth</li>
                <li>Hidden features (not visible from that direction) are shown with dashed lines</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Step-by-Step Conversion</div>
                <p>A simple step block: Front view looks like an L-shape. Top view looks like a rectangle. End view looks like a rectangle with a step.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Matching Game</div>
                <p>When given three 2D shapes, you can determine the 3D object. A square front view + rectangular top view + rectangular end view = a long rectangular prism!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt"></i> Visualizing</div>
                <p>Close your eyes and picture a cylinder. Front view = rectangle. Top view = circle. End view = rectangle. Practice mental visualization!</p>
            </div>
        `,
        taskInstructions: "Match 2D shapes to their correct views from a 3D drawing.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Isometric to Orthographic</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the isometric drawing of a simple block described below. Sketch the front, top, and end views:
                    <div style="margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <p><strong>Object Description:</strong> A rectangular block (height 3cm, width 5cm, depth 4cm) with a smaller rectangular block (height 2cm, width 3cm, depth 2cm) sitting centered on the top.</p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div>Front View:<div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div></div>
                        <div>Top View:<div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div></div>
                        <div>End View:<div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Matching Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each 3D description to the correct set of 2D views:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Cylinder &nbsp;&nbsp;&nbsp; A. Front: rectangle, Top: rectangle, End: rectangle</div>
                        <div>___ Cube &nbsp;&nbsp;&nbsp; B. Front: circle, Top: circle, End: circle</div>
                        <div>___ Sphere &nbsp;&nbsp;&nbsp; C. Front: rectangle, Top: circle, End: rectangle</div>
                        <div>___ Rectangular Prism &nbsp;&nbsp;&nbsp; D. Front: square, Top: square, End: square</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Hidden Lines Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A block has a hole drilled through its center from front to back. In the front view, the hole appears as a circle. How would the hole appear in the end view?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Sketch the end view showing the hidden lines for the hole:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Visual Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a simple 3D isometric sketch of an object of your choice. Then draw its three orthographic views (front, top, end) alongside it.
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Look at a cereal box. Draw what you see from the front, from the top, and from the end. Label each view.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Orthographic Projection",
        subtopic: "Dimensioning - Adding Measurements and Labels",
        lessonContent: `
            <p>Today we'll learn how to add measurements (dimensions) and labels to orthographic drawings correctly and professionally.</p>
            <p><strong>Key Question:</strong> How do engineers and builders know exactly how big to make each part?</p>
            <p><strong>What is Dimensioning?</strong></p>
            <ul>
                <li>Adding measurements to technical drawings so others can build the object</li>
                <li>Dimensions tell the exact size of every feature</li>
                <li>Without dimensions, a drawing is just a picture - not a blueprint!</li>
            </ul>
            <p><strong>Rules for Correct Dimensioning:</strong></p>
            <ol>
                <li><strong>Dimension Lines:</strong> Thin lines with arrows at each end, drawn between extension lines</li>
                <li><strong>Extension Lines:</strong> Thin lines that extend from the object to show where the dimension starts and ends</li>
                <li><strong>Dimension Text:</strong> The number written above (or between) the dimension line</li>
                <li><strong>Units:</strong> All dimensions should be in the same unit (e.g., millimeters or centimeters)</li>
                <li><strong>Placement:</strong> Dimensions should be placed outside the drawing if possible, not crossing lines</li>
                <li><strong>Avoid Repetition:</strong> Each measurement should be shown only once</li>
            </ol>
            <p><strong>Types of Dimensions:</strong></p>
            <ul>
                <li><strong>Linear Dimensions:</strong> Measure straight lines (length, width, height)</li>
                <li><strong>Circular Dimensions:</strong> Measure circles (diameter Ø or radius R)</li>
                <li><strong>Angular Dimensions:</strong> Measure angles between lines</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Dimension Line Anatomy</div>
                <p>Extension line → ← Arrow → ← Arrow → Extension line. The number (e.g., "50") sits above the line. Simple and clear!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle"></i> Circle Dimensions</div>
                <p>A circle with diameter 30mm is labeled "Ø30". A semicircle with radius 15mm is labeled "R15". Always include the symbol!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Good vs. Bad Dimensioning</div>
                <p>BAD: Dimensions crossing lines, numbers written sideways, missing measurements. GOOD: All dimensions outside the drawing, neatly aligned, easy to read.</p>
            </div>
        `,
        taskInstructions: "Add measurements and labels to orthographic drawings correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Label the Dimensioning Parts</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and label these parts of a dimension:
                    <div style="margin-left: 20px;">
                        <div>• Dimension Line</div>
                        <div>• Extension Line</div>
                        <div>• Arrowhead</div>
                        <div>• Dimension Text</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Adding Dimensions to a Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Below is a front view of a bracket. Add the following dimensions correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Overall height: 80mm</div>
                        <div>• Overall width: 120mm</div>
                        <div>• Hole diameter: Ø10mm located 40mm from left edge</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2; position: relative;">
                        <div style="border: 1px solid #333; width: 200px; height: 130px; margin: 30px auto; position: relative;">
                            <div style="border: 1px solid #333; border-radius: 50%; width: 15px; height: 15px; position: absolute; left: 60px; top: 55px; background: white;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Dimension Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a rectangle that is 60mm wide and 40mm tall. Add correct dimensions to your drawing:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a circle with diameter 25mm. Add the correct diameter dimension:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Spot the Errors</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> List three common mistakes people make when adding dimensions:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Complete Orthographic Drawing with Dimensions</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw the front view, top view, and end view of a simple L-shaped block (height 50mm, width 80mm, depth 60mm, step height 25mm). Add all necessary dimensions to each view.
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Draw a simple object from your home (e.g., a phone charger block or a small box). Draw three orthographic views and add correct dimensions in millimeters.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyWeek8);
    console.log("grade6-technology-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyWeek8);
    console.log("grade6-technology-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyWeek8',
        metadata: grade6TechnologyWeek8.metadata,
        days: grade6TechnologyWeek8
    });
    console.log("grade6-technology-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyWeek8 = grade6TechnologyWeek8;
console.log("grade6-technology-week8.js loaded and registered successfully");