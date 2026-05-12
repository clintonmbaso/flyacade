// Grade 5 Mathematics - Term 3 Week 2 Data
const grade5MathWeek2 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 3,
        week: 2,
        title: "3D Shapes: Prisms and Cylinders",
        description: "Investigating and identifying prisms and cylinders, their properties, and real-world applications"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "What is a Prism? Exploring Triangular Prisms",
        lessonContent: `
            <p>Welcome to our exploration of 3D shapes! Today we'll discover what makes a shape a prism, focusing on the triangular prism.</p>
            <p><strong>Key Question:</strong> What makes a shape a prism?</p>
            <p><strong>Introduction:</strong> A <strong>prism</strong> is a 3D shape with two identical, parallel faces (called bases) and rectangular sides connecting them.</p>
            <p><strong>Properties of a Triangular Prism:</strong></p>
            <ul>
                <li><strong>Faces:</strong> The flat surfaces of a 3D shape (5 faces total)</li>
                <li><strong>Edges:</strong> Where two faces meet (9 edges total)</li>
                <li><strong>Vertices:</strong> Where edges meet (corners - 6 vertices total)</li>
            </ul>
            <p><strong>Breaking Down the Triangular Prism:</strong></p>
            <ol>
                <li>2 triangular faces (the bases - identical and parallel)</li>
                <li>3 rectangular faces (connecting the triangles)</li>
                <li>9 edges where faces meet</li>
                <li>6 vertices (3 on each triangular end)</li>
            </ol>
            <p><strong>Why "Prism"?</strong> The name comes from the shape of the base. A triangular prism has triangle bases!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Counting Faces</div>
                <p>A triangular prism has 5 faces. Count them: 2 triangles + 3 rectangles = 5 faces total!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-code-branch"></i> Counting Edges</div>
                <p>Trace your finger along a triangular prism: 3 edges on the front triangle + 3 edges on the back triangle + 3 connecting edges = 9 edges.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle"></i> Triangular Prism vs. Triangle</div>
                <p>A triangle is flat (2D). A triangular prism is solid (3D). The prism has depth, height, and volume!</p>
            </div>
        `,
        taskInstructions: "Explore and identify the properties of a triangular prism.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Triangular Prism Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using a model or net of a triangular prism, count and record:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Number of faces: _________</div>
                        <div>Number of edges: _________</div>
                        <div>Number of vertices: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a triangular prism and label one face, one edge, and one vertex:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Prism Definition</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete this sentence: "A prism is a 3D shape with two identical, ________ faces called ________."</div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How is a triangular prism different from a triangle? How are they similar?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find an object at home shaped like a triangular prism (e.g., a tent, a roof, a slice of cake/gouda cheese). Draw it and count its faces, edges, and vertices.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Cylinder Hunt",
        lessonContent: `
            <p>Today we'll go on a cylinder hunt! We'll learn what makes a cylinder a cylinder and find them all around us.</p>
            <p><strong>Key Question:</strong> What objects in our environment are shaped like cylinders?</p>
            <p><strong>Introduction:</strong> A <strong>cylinder</strong> is a 3D shape with two identical, parallel circular faces (bases) and one curved surface connecting them.</p>
            <p><strong>Properties of a Cylinder:</strong></p>
            <ul>
                <li><strong>Faces:</strong> 3 faces total (2 circular faces + 1 curved surface)</li>
                <li><strong>Edges:</strong> 2 edges (where the curved surface meets each circular face)</li>
                <li><strong>Vertices:</strong> 0 vertices (no corners - it's round!)</li>
            </ul>
            <p><strong>Is a Cylinder a Prism?</strong> No! A prism has rectangular faces. A cylinder has a curved surface. They are different families of 3D shapes.</p>
            <p><strong>Cylinder Examples in Daily Life:</strong></p>
            <ul>
                <li>Cans (soda, soup, beans)</li>
                <li>Pipes and tubes</li>
                <li>Batteries</li>
                <li>Candles</li>
                <li>Pens and markers</li>
                <li>Cups and glasses</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-soup"></i> Can Investigation</div>
                <p>A soup can is a perfect cylinder! It has two circular ends (top and bottom) and a curved side that wraps around.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-battery-full"></i> Battery Shape</div>
                <p>A AA battery is a cylinder. It can roll because it has no flat sides - only the curved surface and two circular ends.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Cylinder or Not?</div>
                <p>A paper towel roll is a cylinder - but it's hollow! It still has two circular faces (the rims) and a curved surface.</p>
            </div>
        `,
        taskInstructions: "Identify cylinders in the environment and record your findings.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cylinder Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around your classroom or home. Find and list 5 cylinder-shaped objects:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. _________________</div>
                        <div>2. _________________</div>
                        <div>3. _________________</div>
                        <div>4. _________________</div>
                        <div>5. _________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Cylinder Properties</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For a cylinder, fill in the blanks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Number of faces: _________</div>
                        <div>Number of edges: _________</div>
                        <div>Number of vertices: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a cylinder and label its two circular faces and curved surface:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Cylinder vs. Prism</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How is a cylinder different from a prism? Give one reason.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 more cylinders at home that weren't on your list. Draw each one and write where you found it.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Sketching 3D - Drawing Cylinders and Triangular Prisms",
        lessonContent: `
            <p>Today we'll become 3D artists! We'll learn to draw cylinders and triangular prisms from different perspectives.</p>
            <p><strong>Key Question:</strong> How can we draw the same 3D shape from different viewpoints?</p>
            <p><strong>Three Important Views:</strong></p>
            <ul>
                <li><strong>Front View:</strong> What you see when looking directly at the front</li>
                <li><strong>Top View:</strong> What you see when looking from above (bird's eye view)</li>
                <li><strong>Side View:</strong> What you see when looking from the left or right</li>
            </ul>
            <p><strong>Drawing a Triangular Prism:</strong></p>
            <ol>
                <li>Start with two parallel triangles (one slightly behind the other)</li>
                <li>Connect the corners with straight lines</li>
                <li>Use dashed lines for edges you can't see (hidden edges)</li>
            </ol>
            <p><strong>Drawing a Cylinder:</strong></p>
            <ol>
                <li>Draw two parallel ovals (ellipses) - one for the top, one for the bottom</li>
                <li>Connect the sides with straight vertical lines</li>
                <li>The top oval should have a curved line for the front edge</li>
            </ol>
            <p><strong>Perspective Drawing Tips:</strong></p>
            <ul>
                <li>Objects farther away appear smaller</li>
                <li>Use light sketch lines first, then darken</li>
                <li>Hidden edges are drawn with dashed lines</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Front View of a Cylinder</div>
                <p>From the front, a cylinder looks like a rectangle with curved top and bottom edges. The circular faces appear as horizontal lines!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Top View of a Triangular Prism</div>
                <p>Looking from above, a triangular prism looks like a rectangle! You can't see the triangular ends from the top.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Why Multiple Views?</div>
                <p>Engineers and architects use front, top, and side views to build things accurately. One view doesn't tell the whole story!</p>
            </div>
        `,
        taskInstructions: "Draw cylinders and triangular prisms from different perspectives.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing a Triangular Prism - Three Views</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a triangular prism from the Front View:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the same triangular prism from the Top View:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw the same triangular prism from the Side View:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing a Cylinder - Three Views</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a cylinder from the Front View:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Draw the same cylinder from the Top View:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw the same cylinder from the Side View:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> How does the front view of a cylinder differ from the front view of a triangular prism?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Choose one cylinder and one triangular prism from your home. Draw each one from the front, top, and side views on paper.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Property Compare - Cube vs. Triangular Prism",
        lessonContent: `
            <p>Today we'll become geometry detectives! We'll compare the properties of a cube and a triangular prism.</p>
            <p><strong>Key Question:</strong> How are cubes and triangular prisms alike? How are they different?</p>
            <p><strong>Quick Review - Cube Properties:</strong></p>
            <ul>
                <li>A cube has 6 square faces (all identical!)</li>
                <li>A cube has 12 edges (all the same length)</li>
                <li>A cube has 8 vertices (corners)</li>
            </ul>
            <p><strong>Quick Review - Triangular Prism Properties:</strong></p>
            <ul>
                <li>A triangular prism has 5 faces (2 triangles + 3 rectangles)</li>
                <li>A triangular prism has 9 edges</li>
                <li>A triangular prism has 6 vertices</li>
            </ul>
            <p><strong>Are They Both Prisms?</strong> YES! Both are prisms because they have two identical, parallel bases connected by rectangular faces.</p>
            <p><strong>Cubes are Special:</strong> A cube is actually a special type of rectangular prism where all faces are squares and all edges are the same length!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dice-d6"></i> The Cube</div>
                <p>A die (dice) is a cube. Every face is a square. If you measure any edge, it's the same length as all the others!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Same But Different</div>
                <p>Both shapes are prisms, but a cube has one more face (6 vs 5), three more edges (12 vs 9), and two more vertices (8 vs 6) than a triangular prism.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gift"></i> Gift Boxes</div>
                <p>A cube-shaped gift box has 6 square faces. A triangular prism-shaped box of chocolates has 5 faces (2 triangles + 3 rectangles).</p>
            </div>
        `,
        taskInstructions: "Create a comparison table for a cube and a triangular prism.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Comparison Table</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete this table comparing a cube and a triangular prism:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Property</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Cube</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Triangular Prism</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Number of Faces</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_____</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Number of Edges</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_____</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Number of Vertices</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_____</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Shape of Faces</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_____</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Venn Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a Venn Diagram comparing a cube and a triangular prism:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw two overlapping circles: Cube (left), Triangular Prism (right), Both (center)]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Written Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write two similarities and two differences between a cube and a triangular prism:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Similarities:</strong></div>
                        <div>• _____________________________</div>
                        <div>• _____________________________</div>
                        <div style="margin-top: 10px;"><strong>Differences:</strong></div>
                        <div>• _____________________________</div>
                        <div>• _____________________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a cube-shaped object and a triangular prism-shaped object at home. List their properties and explain how they are different.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Real-world Prisms - Architecture",
        lessonContent: `
            <p>Today we'll explore how prisms are used in real-world architecture and construction!</p>
            <p><strong>Key Question:</strong> Why do architects and builders use prisms in their designs?</p>
            <p><strong>Prisms in Architecture:</strong></p>
            <ul>
                <li><strong>Triangular Prisms in Roofs:</strong> Many house roofs are shaped like triangular prisms. Why? The slope allows rain and snow to slide off!</li>
                <li><strong>Rectangular Prisms in Buildings:</strong> Most buildings (houses, schools, offices) are rectangular prisms. They're easy to build and use space efficiently.</li>
                <li><strong>Pillars (Columns):</strong> Cylinders are often used as pillars because they can support heavy weight from any direction.</li>
            </ul>
            <p><strong>Why These Shapes?</strong></p>
            <ul>
                <li><strong>Strength:</strong> Triangular shapes are very strong and don't wobble</li>
                <li><strong>Efficiency:</strong> Rectangular prisms maximize floor space</li>
                <li><strong>Water Flow:</strong> Sloped roofs (triangular prisms) let water drain easily</li>
                <li><strong>Aesthetics:</strong> Different prism shapes make buildings interesting and beautiful</li>
            </ul>
            <p><strong>Famous Examples:</strong></p>
            <ul>
                <li>The Louvre Pyramid (France) - a square pyramid (a type of prism-like shape!)</li>
                <li>Skyscrapers - tall rectangular prisms</li>
                <li>Church steeples - often triangular prisms</li>
                <li>Water towers - often cylinders</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Roof Shapes</div>
                <p>A traditional house roof is a triangular prism. The triangle shape is strong and allows rain, snow, and leaves to slide off instead of collecting.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Skyscraper Prisms</div>
                <p>The Empire State Building is basically a tall rectangular prism. This shape allows the most usable floor space for offices and apartments.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-columns"></i> Greek Columns</div>
                <p>Ancient Greek temples used cylindrical columns. A cylinder has no corners to break and can support weight from any direction equally.</p>
            </div>
        `,
        taskInstructions: "Identify how different prisms are used in architecture.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Architecture Scavenger Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify prism shapes in the building around you (classroom, school, or home):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Rectangular prism example: _________________</div>
                        <div>• Triangular prism example: _________________</div>
                        <div>• Cylinder example: _________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Design Your Own Building</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a building that uses at least two different prism shapes (rectangular prism, triangular prism, or cylinder):
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Label the prism shapes you used and explain why you chose each shape:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Why Prisms?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do you think most houses have triangular prism roofs instead of flat roofs?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What would be difficult about building a house that is a cylinder?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What was the most interesting thing you learned about prisms this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Take a walk in your neighborhood. Draw or photograph three buildings or structures that use different prism shapes. Write one sentence about why you think that shape was chosen.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek2);
    console.log("grade5-math-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek2);
    console.log("grade5-math-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek2',
        metadata: grade5MathWeek2.metadata,
        days: grade5MathWeek2
    });
    console.log("grade5-math-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek2 = grade5MathWeek2;
console.log("grade5-math-week2.js loaded and registered successfully");