// Grade 5 Mathematics - Term 3 Week 3 Data
const grade5MathematicsWeek3 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 3,
        week: 3,
        title: "Nets & Creation",
        description: "Understanding nets, drawing nets for 3D shapes, and building physical models of cylinders and triangular prisms"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Flattening the Shape - Introduction to Nets",
        lessonContent: `
            <p>Welcome to our exploration of nets! Today we'll discover how 3D shapes can be flattened into 2D patterns called nets.</p>
            <p><strong>Key Question:</strong> What happens when you unfold a 3D shape?</p>
            <p><strong>Introduction:</strong> A <strong>net</strong> is a 2D shape that can be folded to form a 3D object. Think of it like a cardboard box that has been cut along its edges and laid flat.</p>
            <p><strong>Understanding Nets:</strong></p>
            <ol>
                <li><strong>3D Shape:</strong> A solid object with length, width, and height (e.g., a cube, cylinder, pyramid)</li>
                <li><strong>Net:</strong> The flat pattern that folds up to create the 3D shape</li>
                <li><strong>Faces:</strong> The flat surfaces of a 3D shape become the shapes in the net</li>
            </ol>
            <p><strong>Key Facts:</strong></p>
            <ul>
                <li>A cube has 6 square faces, so its net is made of 6 connected squares</li>
                <li>A cylinder has 3 faces (2 circles and 1 rectangle), so its net has these 3 shapes</li>
                <li>A triangular prism has 5 faces (3 rectangles and 2 triangles)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Cube Net Example</div>
                <p>A cube has 6 square faces. When unfolded, the net looks like a cross made of 4 squares in a row with 1 square attached above and below the second square.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box-open"></i> Real-World Connection</div>
                <p>Cardboard boxes are manufactured as flat nets, then folded and glued into shape. This saves space during shipping!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Different Nets</div>
                <p>Many 3D shapes have multiple possible nets. A cube has 11 different ways to arrange its 6 squares into a net!</p>
            </div>
        `,
        taskInstructions: "Identify nets and match them to their 3D shapes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Net or Not a Net?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each pattern. Will it fold into a closed 3D shape? Write "Yes" or "No" and explain why.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Pattern A: 6 squares in a row → _________</div>
                        <div>Pattern B: A cross shape of 6 squares → _________</div>
                        <div>Pattern C: 5 squares in an L-shape → _________</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Match the Net to the 3D Shape</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw lines to match each net to its 3D shape:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• 6 connected squares →</div>
                                <div>• 1 rectangle + 2 circles →</div>
                                <div>• 3 rectangles + 2 triangles →</div>
                            </div>
                            <div>
                                <div>Cylinder</div>
                                <div>Cube</div>
                                <div>Triangular Prism</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw a Simple Net</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one possible net for a cube:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How many squares are in a cube's net? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find a cardboard box at home. Carefully cut along its edges to flatten it into a net. Bring the flattened net to class or draw what it looks like.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Cylinder Net - Drawing a Rectangle and Two Circles",
        lessonContent: `
            <p>Today we'll learn how to draw the net for a cylinder!</p>
            <p><strong>Key Question:</strong> What shapes make up a cylinder's net?</p>
            <p><strong>The Cylinder Net:</strong></p>
            <ul>
                <li>A cylinder has <strong>3 faces</strong>: 2 circular faces and 1 curved rectangular face</li>
                <li>When flattened, the curved surface becomes a <strong>rectangle</strong></li>
                <li>The top and bottom become <strong>two circles</strong></li>
            </ul>
            <p><strong>Important Measurements:</strong></p>
            <ol>
                <li>The rectangle's <strong>height</strong> equals the cylinder's height</li>
                <li>The rectangle's <strong>width</strong> equals the circumference of the circle (distance around the circle)</li>
                <li><strong>Circumference formula:</strong> C = π × d or C = 2 × π × r (π ≈ 3.14)</li>
            </ol>
            <p><strong>Step-by-Step to Draw a Cylinder Net:</strong></p>
            <ol>
                <li>Draw a rectangle with the correct height and width</li>
                <li>Draw a circle above the rectangle (this will be the top)</li>
                <li>Draw an identical circle below the rectangle (this will be the bottom)</li>
                <li>The circles should touch the rectangle along one side</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Worked Example</div>
                <p>For a cylinder with height 10 cm and radius 3 cm:<br>
                Rectangle width = Circumference = 2 × 3.14 × 3 = 18.84 cm<br>
                Rectangle height = 10 cm<br>
                Circle radius = 3 cm</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-soup"></i> Real-World Cylinders</div>
                <p>Cans of soup, paper towel rolls, and drinking glasses are all cylinders. Their labels are actually rectangles wrapped around!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Why Circumference Matters</div>
                <p>The rectangle must be exactly as wide as the circle's circumference. If it's too short or too long, the net won't fold into a proper cylinder!</p>
            </div>
        `,
        taskInstructions: "Calculate cylinder dimensions and draw the net.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculate the Rectangle Width</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each cylinder, calculate the rectangle width (circumference):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Radius = 4 cm, π = 3.14: Circumference = _________</div>
                        <div>B. Radius = 5 cm, π = 3.14: Circumference = _________</div>
                        <div>C. Diameter = 10 cm, π = 3.14: Circumference = _________</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw a Cylinder Net</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the net for a cylinder with:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Height = 8 cm</div>
                        <div>• Radius = 3 cm (Circumference ≈ 18.84 cm)</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Draw rectangle + 2 circles here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Label Your Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Label the following on your cylinder net:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Height of rectangle</div>
                        <div>• Width of rectangle</div>
                        <div>• Radius of each circle</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a cylindrical object at home (can, cup, bottle). Measure its height and radius. Calculate the circumference. Draw the net to scale on paper.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Triangular Prism Net - Three Rectangles and Two Triangles",
        lessonContent: `
            <p>Today we'll learn how to draw the net for a triangular prism!</p>
            <p><strong>Key Question:</strong> What shapes make up a triangular prism's net?</p>
            <p><strong>The Triangular Prism Net:</strong></p>
            <ul>
                <li>A triangular prism has <strong>5 faces</strong>: 3 rectangular faces and 2 triangular faces</li>
                <li>The two triangles are the bases (front and back)</li>
                <li>The three rectangles connect the triangles</li>
            </ul>
            <p><strong>Types of Triangular Prisms:</strong></p>
            <ol>
                <li><strong>Right Triangular Prism:</strong> The triangles are right triangles (one 90° angle)</li>
                <li><strong>Equilateral Triangular Prism:</strong> The triangles have all equal sides</li>
                <li><strong>Isosceles Triangular Prism:</strong> The triangles have two equal sides</li>
            </ol>
            <p><strong>Step-by-Step to Draw a Triangular Prism Net:</strong></p>
            <ol>
                <li>Draw one triangle (this will be one base)</li>
                <li>Attach a rectangle to each side of the triangle</li>
                <li>Attach the second triangle to one of the rectangles</li>
                <li>All rectangles should have the same height (the prism's length)</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Worked Example</div>
                <p>For a triangular prism with triangle sides 3 cm, 4 cm, 5 cm and height 10 cm:<br>
                - 3 rectangles: each is 10 cm tall<br>
                - Rectangle widths = triangle side lengths (3 cm, 4 cm, 5 cm)<br>
                - 2 triangles: 3-4-5 right triangles</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-roof"></i> Real-World Prisms</div>
                <p>Tents, roof structures, and some chocolate bars are shaped like triangular prisms. Even a slice of cake can be a triangular prism!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-link"></i> Connecting the Shapes</div>
                <p>The three rectangles must match the three sides of the triangle perfectly. Each rectangle's width equals one side length of the triangle.</p>
            </div>
        `,
        taskInstructions: "Draw a triangular prism net and identify its parts.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: How Many Shapes?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> A triangular prism's net contains:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• _________ rectangles</div>
                        <div>• _________ triangles</div>
                    </div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw a Triangular Prism Net</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the net for a triangular prism with:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Triangle sides: 4 cm, 5 cm, 6 cm</div>
                        <div>• Prism height (rectangle height): 7 cm</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Draw 3 rectangles + 2 triangles here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Label and Explain</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> On your drawing, label:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• One triangle base</div>
                        <div>• All three rectangles</div>
                        <div>• The second triangle base</div>
                        <div>• The prism's height</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why are there three rectangles in a triangular prism net?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a triangular prism net using different measurements. Cut it out and check if it folds into a prism. Bring your net to class tomorrow.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Build (Part 1) - Cutting and Folding a Cylinder",
        lessonContent: `
            <p>Today we'll put our skills into action by building a physical cylinder from its net!</p>
            <p><strong>Key Question:</strong> How does a flat net become a 3D cylinder?</p>
            <p><strong>Materials You'll Need:</strong></p>
            <ul>
                <li>Your cylinder net drawing from Tuesday (or a new one on cardstock)</li>
                <li>Scissors</li>
                <li>Glue or tape</li>
                <li>Ruler</li>
            </ul>
            <p><strong>Step-by-Step Building Instructions:</strong></p>
            <ol>
                <li><strong>Cut:</strong> Carefully cut out your cylinder net along the outer edges</li>
                <li><strong>Score:</strong> Lightly run the edge of scissors along fold lines (where rectangles meet circles)</li>
                <li><strong>Fold:</strong> Fold the rectangle into a tube shape</li>
                <li><strong>Glue/Tape:</strong> Attach the rectangle's edges together to form the curved wall</li>
                <li><strong>Attach Circles:</strong> Fold and attach the circles to the top and bottom openings</li>
                <li><strong>Check:</strong> Make sure your cylinder stands firmly and holds its shape</li>
            </ol>
            <p><strong>Tips for Success:</strong></p>
            <ul>
                <li>Use cardstock or thick paper for a sturdier cylinder</li>
                <li>Add tabs to your net (extra flaps) to make gluing easier</li>
                <li>Let glue dry completely before handling</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> Cutting Tips</div>
                <p>Cut slightly outside the lines if using thick paper. This gives you clean edges without rough spots.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Score Before Folding</div>
                <p>Use a ruler and the back of scissors to score (lightly indent) fold lines. This creates crisp, straight folds instead of crumpled ones!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paste"></i> Adding Tabs</div>
                <p>Tabs are small flaps added to edges where pieces need to attach. Add a 1 cm tab to one side of your rectangle and on the circles for easier gluing.</p>
            </div>
        `,
        taskInstructions: "Cut, fold, and assemble a cylinder from your net.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Prepare Your Net</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using your cylinder net from Tuesday (or draw a new one on cardstock), add 1 cm tabs to:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• One vertical edge of the rectangle</div>
                        <div>• The top circle (around its edge)</div>
                        <div>• The bottom circle (around its edge)</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Redraw your net with tabs here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Building Steps</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> After cutting, score, and folding, answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What was the most difficult part of folding?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div style="margin-top: 10px;">Did your circle fit perfectly with the rectangle tube? Why or why not?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Final Cylinder</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Once your cylinder is complete, measure and record:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Actual height: _________ cm</div>
                        <div>• Actual radius of top: _________ cm</div>
                        <div>• Does it stand level? Yes / No</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What would you do differently next time to improve your model?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Decorate your cylinder model. Can it hold a small object (like a pencil)? Test its strength and bring it to class tomorrow.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Build (Part 2) - Triangular Prism Model & Labeling",
        lessonContent: `
            <p>Today we'll complete our geometry unit by building a sturdy triangular prism and labeling its parts!</p>
            <p><strong>Key Question:</strong> How does a triangular prism net become a 3D model?</p>
            <p><strong>Materials You'll Need:</strong></p>
            <ul>
                <li>Your triangular prism net from Wednesday (or a new one on cardstock)</li>
                <li>Scissors</li>
                <li>Glue or tape</li>
                <li>Ruler and markers for labeling</li>
            </ul>
            <p><strong>Step-by-Step Building Instructions:</strong></p>
            <ol>
                <li><strong>Cut:</strong> Carefully cut out your triangular prism net</li>
                <li><strong>Score:</strong> Lightly score all fold lines (where rectangles meet triangles and rectangles meet each other)</li>
                <li><strong>Fold:</strong> Fold along all scored lines</li>
                <li><strong>Assemble:</strong> Attach the rectangles to each other first</li>
                <li><strong>Attach Triangles:</strong> Fold and attach the two triangle bases</li>
                <li><strong>Check:</strong> Make sure your prism is stable</li>
            </ol>
            <p><strong>Labeling Your Triangular Prism:</strong></p>
            <ul>
                <li>Label the <strong>triangular faces</strong> (bases)</li>
                <li>Label the <strong>rectangular faces</strong> (lateral faces)</li>
                <li>Label the <strong>edges</strong> (where two faces meet)</li>
                <li>Label the <strong>vertices</strong> (corners where edges meet)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Sturdy Construction</div>
                <p>Triangular prisms are strong shapes! That's why bridges and roofs often use triangular structures for support.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tag"></i> Labeling Tips</div>
                <p>Use different colored markers for different parts: blue for edges, red for vertices, green for faces. This makes your model easy to read!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Counting Parts</div>
                <p>A triangular prism has: 5 faces, 9 edges, and 6 vertices. Check your model to verify these numbers!</p>
            </div>
        `,
        taskInstructions: "Build a triangular prism model and label all its parts.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Build Your Triangular Prism</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using your net from Wednesday (or draw a new one on cardstock), cut, fold, and assemble your triangular prism.
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw your final prism model here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Label Your Model</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> On your prism model, label the following:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>• 2 triangular bases</div>
                        <div>• 3 rectangular faces</div>
                        <div>• 9 edges</div>
                        <div>• 6 vertices</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the following:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Number of faces on my triangular prism: _________</div>
                        <div>Number of edges on my triangular prism: _________</div>
                        <div>Number of vertices on my triangular prism: _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How is building a triangular prism different from building a cylinder? Which was easier and why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> In real life, where might you see a triangular prism structure?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Complete the Venn diagram comparing cylinders and triangular prisms:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex; justify-content: center; gap: 20px;">
                            <div style="border: 2px solid #4A90E2; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px;">
                                Cylinder<br>Only
                            </div>
                            <div style="border: 2px solid #4A90E2; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px;">
                                Both
                            </div>
                            <div style="border: 2px solid #4A90E2; border-radius: 50%; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px;">
                                Triangular<br>Prism Only
                            </div>
                        </div>
                        <div class="answer-space" style="height: 80px; margin-top: 20px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find or build another 3D shape at home (cube, pyramid, rectangular prism). Draw its net and bring the model to share next week.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathematicsWeek3);
    console.log("grade5-mathematics-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathematicsWeek3);
    console.log("grade5-mathematics-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathematicsWeek3',
        metadata: grade5MathematicsWeek3.metadata,
        days: grade5MathematicsWeek3
    });
    console.log("grade5-mathematics-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathematicsWeek3 = grade5MathematicsWeek3;
console.log("grade5-mathematics-week3.js loaded and registered successfully");