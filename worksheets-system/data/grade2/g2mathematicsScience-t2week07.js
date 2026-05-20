// Grade 2 Mathematics & Science - Term 2 Week 7 Data
const grade2MathsScienceWeek7 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 2,
        week: 7,
        title: "Plane and Solid Shapes",
        description: "Exploring 2D and 3D shapes in the environment, identifying features like corners, sides, and edges, and classifying shapes by their properties"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Geometry",
        subtopic: "Exploring 3D Shapes in the Environment",
        lessonContent: `
            <p>Welcome to our shape adventure! Today we'll become shape detectives and find 3D shapes all around us!</p>
            <p><strong>Key Question:</strong> What 3D shapes can you find in your classroom, at home, or outside?</p>
            <p><strong>Introduction:</strong> 3D shapes are solid shapes that have length, width, and height. They are not flat - we can hold them in our hands!</p>
            <p><strong>Common 3D Shapes Around Us:</strong></p>
            <ul>
                <li><strong>Cube:</strong> A box shape with 6 square faces (like a dice or a sugar cube)</li>
                <li><strong>Cuboid:</strong> A box shape with rectangular faces (like a cereal box or a brick)</li>
                <li><strong>Sphere:</strong> A round ball shape (like a soccer ball, orange, or marble)</li>
                <li><strong>Cylinder:</strong> A can-like shape with two circular faces (like a tin can or a paper towel roll)</li>
                <li><strong>Cone:</strong> A shape that points to a tip (like an ice cream cone or a party hat)</li>
            </ul>
            <p><strong>Let's Look Around!</strong> Can you spot any of these shapes in our classroom?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Cube Hunt</div>
                <p>A dice is a cube! It has 6 square faces. Some building blocks are also cubes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box"></i> Cuboid Hunt</div>
                <p>Your pencil case, a book, and a shoebox are all cuboids. They have rectangular faces.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-basketball-ball"></i> Sphere Hunt</div>
                <p>Balls, oranges, marbles, and globes are all spheres. They are perfectly round!</p>
            </div>
        `,
        taskInstructions: "Walk around your classroom or home and find objects that match each 3D shape.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shape Detective Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around your classroom or home. Find one object for each shape and draw it:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>Cube</strong><br>
                            <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Object: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>Cuboid</strong><br>
                            <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Object: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>Sphere</strong><br>
                            <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Object: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>Cylinder</strong><br>
                            <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Object: _________</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sorting Shapes</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the objects that are spheres:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🍎 Apple &nbsp;&nbsp; 📦 Box &nbsp;&nbsp; ⚽ Soccer Ball &nbsp;&nbsp; 🎲 Dice &nbsp;&nbsp; 🍊 Orange</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the objects that are cubes or cuboids:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>📚 Book &nbsp;&nbsp; 🏀 Basketball &nbsp;&nbsp; 🧱 Brick &nbsp;&nbsp; 🥫 Can &nbsp;&nbsp; 📦 Cereal Box</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw one 3D shape you found and write its name:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div>This shape is called a: _________</div>
                </div>
            </div>
        `,
        homework: "Find 5 different 3D shapes at home. Draw them in your notebook and write their names.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Geometry",
        subtopic: "Identifying and Forming Corners",
        lessonContent: `
            <p>Today we'll become corner detectives and learn how to make corners using different materials!</p>
            <p><strong>Key Question:</strong> What is a corner, and where can we find corners in our world?</p>
            <p><strong>What is a Corner?</strong></p>
            <p>A <strong>corner</strong> is where two straight sides or edges meet. Corners are also called <strong>vertices</strong> (one corner is called a vertex).</p>
            <p><strong>Finding Corners Around Us:</strong></p>
            <ul>
                <li>A book has 4 corners</li>
                <li>A table has 4 corners</li>
                <li>A window has 4 corners</li>
                <li>A square has 4 corners</li>
                <li>A triangle has 3 corners</li>
            </ul>
            <p><strong>Let's Make Corners!</strong></p>
            <p>We can make corners using:</p>
            <ul>
                <li>Popsicle sticks or toothpicks</li>
                <li>Straws</li>
                <li>Playdough or clay (to join the sticks)</li>
                <li>Paper folding</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-open"></i> Classroom Corners</div>
                <p>Look at the corner of your desk! Where two edges meet, that's a corner. How many corners does your desk have?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Shape Corners</div>
                <p>A square has 4 corners. A triangle has 3 corners. A circle has NO corners - it's round all the way around!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Corner Count</div>
                <p>Look at a window - 4 corners! Look at a door - 4 corners! Look at a clock - 0 corners (it's a circle)!</p>
            </div>
        `,
        taskInstructions: "Find corners in your environment and create corners using craft materials.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Corner Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around your classroom. Find and list 5 objects that have corners:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> How many corners does each object have?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Forming Corners with Materials</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using popsicle sticks or straws and playdough, create:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A shape with 3 corners (triangle)</div>
                        <div>• A shape with 4 corners (square)</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Paper Folding Corners</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Take a piece of paper. Fold it to create a corner. Draw what you made:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What shape has no corners at all?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "At home, count the corners of 5 different objects (a book, a table, a window, a picture frame, a door). Write down how many corners each one has.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Geometry",
        subtopic: "Drawing Shapes on Squared Surfaces",
        lessonContent: `
            <p>Today we'll learn how to draw rectangles, squares, and triangles on squared paper!</p>
            <p><strong>Key Question:</strong> How can we use squares on paper to help us draw straight shapes?</p>
            <p><strong>What is Squared Paper?</strong></p>
            <p>Squared paper (also called grid paper) has many little squares that help us draw straight lines and shapes of the right size.</p>
            <p><strong>Drawing a Square:</strong></p>
            <ul>
                <li>A square has 4 equal sides and 4 corners</li>
                <li>On squared paper, count the same number of squares for each side</li>
                <li>Example: Draw a 4x4 square (4 squares across, 4 squares down)</li>
            </ul>
            <p><strong>Drawing a Rectangle:</strong></p>
            <ul>
                <li>A rectangle has 4 sides and 4 corners</li>
                <li>Opposite sides are the same length</li>
                <li>Example: Draw a 6x3 rectangle (6 squares across, 3 squares down)</li>
            </ul>
            <p><strong>Drawing a Triangle:</strong></p>
            <ul>
                <li>A triangle has 3 sides and 3 corners</li>
                <li>On squared paper, we can draw right triangles using straight lines</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Square Example</div>
                <p>A 3x3 square uses 3 squares across and 3 squares down. All sides have 3 squares - they are equal!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-rectangle-ad"></i> Rectangle Example</div>
                <p>A rectangle can be 5 squares across and 2 squares down. The long sides have 5 squares, the short sides have 2 squares.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Using Grid Lines</div>
                <p>Follow the lines on your squared paper. They help you make straight lines and perfect corners!</p>
            </div>
        `,
        taskInstructions: "Use squared paper to draw rectangles, squares, and triangles accurately.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing Squares</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On your squared paper (use the grid below), draw:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A 3x3 square</div>
                        <div>• A 5x5 square</div>
                        <div>• A 2x2 square</div>
                    </div>
                    <div class="grid-drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2; background-image: repeating-linear-gradient(white 0px, white 19px, #ccc 19px, #ccc 20px); background-size: 20px 20px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Rectangles</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> On the grid below, draw:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A 6x3 rectangle</div>
                        <div>• A 4x2 rectangle</div>
                        <div>• A 7x4 rectangle</div>
                    </div>
                    <div class="grid-drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2; background-image: repeating-linear-gradient(white 0px, white 19px, #ccc 19px, #ccc 20px); background-size: 20px 20px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing Triangles</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> On the grid below, draw a triangle:
                    <div class="grid-drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2; background-image: repeating-linear-gradient(white 0px, white 19px, #ccc 19px, #ccc 20px); background-size: 20px 20px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How many corners does your triangle have? How many sides?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Use squared paper to draw one square, one rectangle, and one triangle. Color each shape a different color.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Geometry",
        subtopic: "Describing Features of 3D Shapes",
        lessonContent: `
            <p>Today we'll learn the special words we use to describe 3D shapes: faces, edges, and corners (vertices)!</p>
            <p><strong>Key Question:</strong> What makes a cube different from a sphere? How can we describe them?</p>
            <p><strong>Important Words for Describing 3D Shapes:</strong></p>
            <ul>
                <li><strong>Faces:</strong> The flat surfaces of a 3D shape (like the sides of a box)</li>
                <li><strong>Edges:</strong> The lines where two faces meet (like the lines on a dice)</li>
                <li><strong>Corners (Vertices):</strong> The points where edges meet (like the tip of a cone)</li>
            </ul>
            <p><strong>Let's Describe Some Shapes:</strong></p>
            <ul>
                <li><strong>Cube:</strong> 6 faces (all squares), 12 edges, 8 corners</li>
                <li><strong>Cuboid:</strong> 6 faces (rectangles), 12 edges, 8 corners</li>
                <li><strong>Sphere:</strong> 0 faces (curved), 0 edges, 0 corners - it's completely round!</li>
                <li><strong>Cylinder:</strong> 2 flat faces (circles), 1 curved face, 2 edges, 0 corners</li>
                <li><strong>Cone:</strong> 1 flat face (circle), 1 curved face, 1 edge, 1 corner (the tip!)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dice-d6"></i> Cube Features</div>
                <p>A dice is a cube. It has 6 faces (each face has dots), 12 edges (the lines between faces), and 8 corners!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box"></i> Cuboid Features</div>
                <p>A cereal box is a cuboid. It has 6 rectangular faces - front, back, top, bottom, left, and right sides.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ice-cream"></i> Cone Features</div>
                <p>An ice cream cone has 1 flat face (where the ice cream sits), 1 curved face (the cone part), and 1 corner at the tip!</p>
            </div>
        `,
        taskInstructions: "Count faces, edges, and corners on real 3D objects and complete the shape chart.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shape Features Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete this chart for each 3D shape:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Shape</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Faces</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Edges</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Corners</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Cube</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Cuboid</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sphere</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Cylinder</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Cone</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Count the Features</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at a real box (cuboid). Count its faces, edges, and corners:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Look at a ball (sphere). Does it have faces, edges, or corners?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Describe</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a cube and label one face, one edge, and one corner:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find a can (cylinder) at home. Count how many faces, edges, and corners it has. Write your answer in your notebook.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Geometry",
        subtopic: "Recognizing Solid Shapes",
        lessonContent: `
            <p>Today we'll become shape experts and learn to recognize and name solid shapes: cuboids, cubes, and spheres!</p>
            <p><strong>Key Question:</strong> How can you tell a cube from a cuboid? What makes a sphere special?</p>
            <p><strong>Review of Solid Shapes:</strong></p>
            <ul>
                <li><strong>Cube:</strong> All 6 faces are squares. All sides are the same length. Examples: dice, sugar cube, Rubik's cube</li>
                <li><strong>Cuboid:</strong> 6 rectangular faces. Opposite sides are equal. Examples: book, shoebox, brick, cereal box</li>
                <li><strong>Sphere:</strong> Perfectly round. No faces, no edges, no corners. Examples: ball, orange, marble, globe, Earth</li>
            </ul>
            <p><strong>How to Tell Them Apart:</strong></p>
            <ul>
                <li>Cube vs Cuboid: A cube has SQUARE faces. A cuboid has RECTANGULAR faces.</li>
                <li>Sphere vs Others: A sphere is round and can roll in any direction. Cubes and cuboids have flat faces and sharp corners.</li>
            </ul>
            <p><strong>Fun Fact!</strong> A soccer ball is actually not a perfect sphere - it's made of many flat pieces sewn together! But when inflated, it becomes very round like a sphere.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Cube Examples</div>
                <p>A Rubik's cube, a dice, a sugar cube - these are all cubes because every face is a square!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-archive"></i> Cuboid Examples</div>
                <p>A tissue box, a textbook, a refrigerator, and a brick are all cuboids. They have rectangular faces.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe"></i> Sphere Examples</div>
                <p>A basketball, a marble, the planet Earth, and a bubble are all spheres. They are perfectly round with no corners!</p>
            </div>
        `,
        taskInstructions: "Sort and classify solid shapes, then complete the review activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shape Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line from each object to its correct shape name:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>🎲 Dice</div>
                                <div>📚 Book</div>
                                <div>⚽ Soccer Ball</div>
                                <div>🧱 Brick</div>
                                <div>🍊 Orange</div>
                                <div>🧊 Sugar Cube</div>
                            </div>
                            <div>
                                <div>→ Cube</div>
                                <div>→ Cuboid</div>
                                <div>→ Sphere</div>
                                <div>→ Cuboid</div>
                                <div>→ Sphere</div>
                                <div>→ Cube</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Is It a Cube or Cuboid?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write "Cube" or "Cuboid" next to each object:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A dice: _________</div>
                        <div>A cereal box: _________</div>
                        <div>A Rubik's cube: _________</div>
                        <div>A shoebox: _________</div>
                        <div>A sugar cube: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one example of a cube, one cuboid, and one sphere:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Cube</strong>
                            <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Cuboid</strong>
                            <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Sphere</strong>
                            <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Week Review</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is your favorite solid shape? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Name one new thing you learned about shapes this week:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Go on a shape hunt at home! Find 3 cubes, 3 cuboids, and 3 spheres. Draw them or write a list of what you found. Bring your list to share on Monday!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathsScienceWeek7);
    console.log("grade2-maths-science-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathsScienceWeek7);
    console.log("grade2-maths-science-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathsScienceWeek7',
        metadata: grade2MathsScienceWeek7.metadata,
        days: grade2MathsScienceWeek7
    });
    console.log("grade2-maths-science-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathsScienceWeek7 = grade2MathsScienceWeek7;
console.log("grade2-maths-science-week7.js loaded and registered successfully");