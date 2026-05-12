// Grade 4 Mathematics - Term 3 Week 2 Data
const grade4MathWeek2 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 3,
        week: 2,
        title: "Exploring 3D Shapes",
        description: "Moving from flat 2D shapes to solid 3D objects - identifying properties, comparing structures, and representing them on paper"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Vertices, Edges, and Faces",
        lessonContent: `
            <p>Welcome to the world of 3D shapes! Today we'll learn about the building blocks of solid objects around us.</p>
            <p><strong>Key Question:</strong> What are the parts that make up a 3D shape?</p>
            <p><strong>Introduction:</strong> We've been learning about flat 2D shapes like squares and rectangles. Now we're going to explore 3D shapes that have depth and volume!</p>
            <p><strong>The Anatomy of a 3D Shape:</strong></p>
            <ul>
                <li><strong>Face:</strong> The flat surface you can touch (like a wall). A cube has 6 faces.</li>
                <li><strong>Edge:</strong> The line where two faces meet. A cube has 12 edges.</li>
                <li><strong>Vertex:</strong> The sharp corner where edges meet (plural: vertices). A cube has 8 vertices.</li>
            </ul>
            <p><strong>Shapes We'll Focus On:</strong></p>
            <ol>
                <li><strong>Cube:</strong> A special 3D shape where every face is a perfect square</li>
                <li><strong>Cuboid:</strong> A 3D shape with rectangular faces (like a box or a brick)</li>
            </ol>
            <p><strong>Remember:</strong> Cubes and cuboids look similar, but cubes have square faces, while cuboids usually have rectangular faces!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dice"></i> Real-Life Cubes</div>
                <p>Dice, Rubik's cubes, and sugar cubes are all examples of cubes. Every face is a perfect square!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box"></i> Real-Life Cuboids</div>
                <p>Books, cereal boxes, bricks, and shoeboxes are cuboids. Their faces are mostly rectangles.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> The Discovery</div>
                <p>Every cube and cuboid you find will have 6 Faces, 12 Edges, and 8 Vertices. Test it yourself!</p>
            </div>
        `,
        taskInstructions: "Go on a classroom scavenger hunt to find and count faces, edges, and vertices of 3D shapes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom Shape Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find these objects in your classroom and count their parts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Object</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Shape Type</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Faces</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Edges</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Vertices</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Book</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Cuboid</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Dice (or Cube)</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Cube</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Your Choice: _________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 50px;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sticker Counting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Work with a partner. Place a sticker on each face of a cuboid or cube as you count it. How many stickers did you use?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Label the Parts</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a cube and label one face, one edge, and one vertex:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Write the Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Every cube and cuboid has:
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 cuboids and 1 cube at home (tissue box, cereal box, dice, etc.). Count and write down their faces, edges, and vertices. What do you notice?",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Cube Deep-Dive",
        lessonContent: `
            <p>Today we'll explore what makes a cube special and different from other 3D shapes!</p>
            <p><strong>Key Question:</strong> What makes a shape a cube?</p>
            <p><strong>The Cube - A Special 3D Shape</strong></p>
            <ul>
                <li>A cube is a "special" 3D shape because every single face is a perfect, identical square</li>
                <li>All 6 faces of a cube are squares of exactly the same size</li>
                <li>All 12 edges of a cube are exactly the same length</li>
                <li>A cube has 8 vertices (corners)</li>
            </ul>
            <p><strong>Cube Facts:</strong></p>
            <ol>
                <li>A cube is like a square that grew in 3 dimensions</li>
                <li>Every face of a cube meets other faces at right angles (90 degrees)</li>
                <li>Dice, sugar cubes, and Rubik's cubes are all examples of cubes</li>
            </ol>
            <p><strong>The Paper Square Test:</strong> If you trace one face of a shape and that paper square fits perfectly over all 6 faces, it's a cube!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Cube Examples</div>
                <p>Ice cubes, dice, building blocks, Rubik's cubes, and some gift boxes are all cubes. Can you think of more?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> The Square Test</div>
                <p>If you cut out a square that matches one face of a block, and it fits perfectly on every side - you've found a cube!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-combined"></i> Equal Edges</div>
                <p>All edges of a cube are the same length. If you measure one edge, you've measured them all!</p>
            </div>
        `,
        taskInstructions: "Perform the paper square test to identify cubes and record your findings.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Paper Square Test</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Trace one face of a cube onto paper. Cut out the square. Test it on all 6 faces.
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Did the square fit on all faces? Write your result:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Cube or Not a Cube?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at these objects. Circle "Cube" or "Not a Cube" for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Dice → Cube / Not a Cube</div>
                        <div>• Textbook → Cube / Not a Cube</div>
                        <div>• Rubik's Cube → Cube / Not a Cube</div>
                        <div>• Cereal Box → Cube / Not a Cube</div>
                        <div>• Sugar Cube → Cube / Not a Cube</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Cube Properties</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete these sentences about cubes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A cube has ______ faces.</div>
                        <div>A cube has ______ edges.</div>
                        <div>A cube has ______ vertices.</div>
                        <div>Every face of a cube is a perfect ______.</div>
                        <div>All edges of a cube are the same ______.</div>
                    </div>
                    <div class="answer-space" style="height: 20px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw a Cube</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a cube and label all its parts (faces, edges, vertices):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 objects at home. Circle the ones that are cubes. Draw one cube you found and write why it is a cube.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Cuboid Deep-Dive",
        lessonContent: `
            <p>Today we'll explore cuboids and compare them to cubes!</p>
            <p><strong>Key Question:</strong> How is a cuboid different from a cube?</p>
            <p><strong>The Cuboid - A Rectangle-Based 3D Shape</strong></p>
            <ul>
                <li>A cuboid is a 3D shape where faces are rectangles (not all the same size)</li>
                <li>Like a cube, a cuboid also has 6 faces, 12 edges, and 8 vertices</li>
                <li>Most cuboids have 4 rectangular faces and 2 square faces (ends), OR 6 rectangular faces</li>
            </ul>
            <p><strong>Cuboid Facts:</strong></p>
            <ol>
                <li>A cuboid is like a rectangle that grew in 3 dimensions</li>
                <li>Faces opposite each other are always the same size and shape</li>
                <li>Books, bricks, shoeboxes, and cereal boxes are all cuboids</li>
            </ol>
            <p><strong>Cube vs. Cuboid:</strong></p>
            <ul>
                <li><strong>Cube:</strong> All 6 faces are SQUARES (all equal)</li>
                <li><strong>Cuboid:</strong> Faces are RECTANGLES (different sizes possible)</li>
                <li><strong>Both:</strong> Have 6 faces, 12 edges, and 8 vertices</li>
            </ul>
            <p><strong>The "Opposite" Rule:</strong> In a cuboid, the faces opposite each other are always exactly the same size!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box-open"></i> Box Comparison</div>
                <p>A tissue box is a cuboid. The front and back faces are the same size. The top and bottom faces are the same size. The left and right sides are the same size.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Book Shape</div>
                <p>Your math textbook is a cuboid! It has 6 rectangular faces. The cover and back cover are the same size rectangles.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Building Bricks</div>
                <p>Standard bricks are cuboids. They are designed this way so they stack easily and create strong walls!</p>
            </div>
        `,
        taskInstructions: "Compare cubes and cuboids, then complete the comparison chart.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cube vs. Cuboid Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete this comparison chart:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Property</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Cube</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Cuboid</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Number of Faces</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 60px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 60px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Number of Edges</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 60px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 60px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Number of Vertices</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 60px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 60px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Shape of Faces</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 100px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 100px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Edge Lengths</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 100px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><input type="text" style="width: 100px;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Opposite Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Examine a cuboid (like a tissue box). Which faces are the same size?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify the Shape</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write "Cube" or "Cuboid" for each object:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Dice: _________</div>
                        <div>• Cereal box: _________</div>
                        <div>• Brick: _________</div>
                        <div>• Rubik's Cube: _________</div>
                        <div>• Shoe box: _________</div>
                        <div>• Sugar cube: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw a Cuboid</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a cuboid and label its faces, edges, and vertices:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find a cuboid at home (a box, a book, a phone). Measure the length, width, and height. Are they all the same or different? Record your results.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "3D Sketching 101",
        lessonContent: `
            <p>Today we'll learn how to draw a 3D cube on a flat piece of paper using a special technique called oblique sketching!</p>
            <p><strong>Key Question:</strong> How can we draw a 3D shape on a flat 2D surface?</p>
            <p><strong>Oblique Sketching - Step by Step:</strong></p>
            <ol>
                <li><strong>Step 1:</strong> Draw a perfect square in the center of your paper</li>
                <li><strong>Step 2:</strong> Draw a second square of the same size that overlaps the top-right corner of the first square</li>
                <li><strong>Step 3:</strong> Use a ruler to connect the four corners of the front square to the four corners of the back square</li>
                <li><strong>Step 4:</strong> Trace the front lines darker (make them solid)</li>
                <li><strong>Step 5:</strong> Use dashed lines for the edges that would be hidden in the back</li>
            </ol>
            <p><strong>Tips for Success:</strong></p>
            <ul>
                <li>Always use a ruler for straight edges</li>
                <li>Take your time - rushing makes wobbly lines</li>
                <li>Lightly sketch first, then darken the front edges</li>
                <li>Use dashed lines for hidden edges (this makes it look 3D!)</li>
            </ul>
            <p><strong>Creative Touch:</strong> Once you master the cube, turn it into a gift box by adding a ribbon, or into a die by adding dots!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-ruler"></i> The Magic Box</div>
                <p>When you connect the corners of two squares, you create the illusion of depth. This tricks your brain into seeing a 3D box!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Hidden Lines</div>
                <p>Dashed lines show edges you can't actually see from your viewpoint. This makes your drawing look like a real 3D object!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gift"></i> Get Creative</div>
                <p>After drawing your cube, add decorations! Turn it into a gift box, a die, a building block, or a treasure chest.</p>
            </div>
        `,
        taskInstructions: "Follow the step-by-step oblique sketching technique to draw a 3D cube.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Step-by-Step Cube Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow the steps below to draw your own 3D cube:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>✓ Step 1: Draw a perfect square in the center using a ruler</div>
                        <div>✓ Step 2: Draw a second square overlapping the first square (slightly up and to the right or left)</div>
                        <div>✓ Step 3: Connect the four corners of the front square to the four corners of the back square</div>
                        <div>✓ Step 4: Darken the front edges (make them solid lines)</div>
                        <div>✓ Step 5: Make the back edges dashed lines (to show they're hidden)</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Add Creative Details</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Turn your cube into something fun! Add details to make it into:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>□ A gift box with a ribbon</div>
                        <div>□ A die with dots on the faces (1 to 6)</div>
                        <div>□ A building block</div>
                        <div>□ A treasure chest</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw a Cuboid</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Now try drawing a cuboid using the same technique:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was the hardest part of drawing a 3D cube? What trick helped you the most?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why do we use dashed lines for the back edges?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Practice drawing 3 more cubes at home using the oblique sketching technique. Add creative details to each one (gift box, die, building). Show them to a family member and explain how you made them look 3D.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek2);
    console.log("grade4-math-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek2);
    console.log("grade4-math-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek2',
        metadata: grade4MathWeek2.metadata,
        days: grade4MathWeek2
    });
    console.log("grade4-math-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek2 = grade4MathWeek2;
console.log("grade4-math-week2.js loaded and registered successfully");