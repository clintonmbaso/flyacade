// Grade 4 Mathematics - Term 3 Week 3 Data
const grade4MathematicsWeek3 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 3,
        week: 3,
        title: "From Flat to Fat (3D Shapes)",
        description: "Understanding 3D objects, nets, cubes, cuboids, and constructing 3D shapes from 2D patterns"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Decomposing Solids",
        lessonContent: `
            <p>Welcome, Geometry Surgeons! Today we'll perform an operation on a box to discover what shapes make up 3D objects!</p>
            <p><strong>Key Question:</strong> What 2D shapes are hiding inside a 3D box?</p>
            <p><strong>Introduction:</strong> Every 3D object is made up of flat 2D shapes called <strong>faces</strong>. When we take apart a box, we can see all the faces laid out flat.</p>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>3D Shape (Solid):</strong> An object that has length, width, and height</li>
                <li><strong>Face:</strong> A flat surface of a 3D shape</li>
                <li><strong>Decompose:</strong> To break something down into its parts</li>
            </ul>
            <p><strong>Common 3D Objects and Their Faces:</strong></p>
            <ol>
                <li><strong>Cereal Box (Cuboid):</strong> 6 rectangular faces</li>
                <li><strong>Dice (Cube):</strong> 6 square faces</li>
                <li><strong>Soda Can (Cylinder):</strong> 2 circular faces + 1 curved surface</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box-open"></i> The Box Operation</div>
                <p>Take an empty cereal box. Carefully unstick the glued tabs. Flatten it out completely. Count the faces - most cereal boxes have 6 rectangles!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dice-d6"></i> Dice Detective</div>
                <p>A standard die has 6 square faces. Each face is a perfect square, and all squares are the same size.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trace"></i> Tracing the Skeleton</div>
                <p>Once your box is flat, trace it onto a piece of paper. This "skeleton" is your first step to understanding a net!</p>
            </div>
        `,
        taskInstructions: "Deconstruct a real-world box, flatten it, and identify all the 2D shapes that make it up.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Box Operation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Take an empty cereal box or toothpaste box. Carefully unstick the glued tabs (don't rip the cardboard!):
                    <div class="observation-area" style="height: 60px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Did you succeed in opening the box without ripping it? ________</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Counting Faces</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Flatten the box completely on your desk. Count how many faces you see:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What shape are most of the faces?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Tracing the Skeleton</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Trace the flattened shape onto a piece of paper:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> How many faces did your box have? Were any of them different sizes?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find a box at home (tissue box, shoe box, or food box). Carefully open it and flatten it. Count how many faces it has and what shapes they are.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Intro to Nets (The Cube)",
        lessonContent: `
            <p>Today we'll learn about <strong>nets</strong> - the 2D patterns that can be folded to make 3D shapes!</p>
            <p><strong>Key Question:</strong> How can a flat piece of paper become a 3D cube?</p>
            <p><strong>What is a Net?</strong></p>
            <p>A <strong>net</strong> is a 2D pattern that can be folded along lines to create a 3D solid. Think of it as the "unfolded" version of a 3D shape.</p>
            <p><strong>The Cube Net (6-Square Cross):</strong></p>
            <ol>
                <li>Start with 4 squares in a vertical row</li>
                <li>Add 1 square to the left of the second square</li>
                <li>Add 1 square to the right of the second square</li>
            </ol>
            <p><strong>The Test:</strong> Cut out your shape and fold along the lines. Does it make a perfect cube? If squares overlap or leave a hole, it's not a perfect net!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> The 6-Square Cross</div>
                <p>Draw 4 squares in a row. Add one square to the left of the second square. Add one square to the right of the second square. This makes a cross shape with 6 squares!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> The Cube Test</div>
                <p>After cutting out your net, fold it up. If all sides meet perfectly with no gaps or overlaps, congratulations - you made a cube!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Nets to Know</div>
                <p>A cube has 11 possible different nets! Can you find more than one way to arrange 6 squares that fold into a cube?</p>
            </div>
        `,
        taskInstructions: "Draw, cut, and fold a cube net to create a 3D cube.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing the 6-Square Cross Net</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On grid paper, draw the cube net using the instructions:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>• Draw 4 squares in a vertical row</div>
                        <div>• Add 1 square to the left of the second square</div>
                        <div>• Add 1 square to the right of the second square</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Cut and Fold</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Carefully cut out your net. Then fold along all the lines between squares:
                    <div class="observation-area" style="height: 60px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Did your net fold into a cube? ________</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: The Cube Test</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Does your cube have any gaps or overlaps? 
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How many squares (faces) does your cube have?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge!</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Try to draw a different arrangement of 6 squares that could also fold into a cube:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find or draw two different nets for a cube. Cut them out and check if they fold into perfect cubes.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Cuboid Nets",
        lessonContent: `
            <p>Today we'll explore nets for <strong>cuboids</strong> (rectangular prisms) - like cereal boxes and shoeboxes!</p>
            <p><strong>Key Question:</strong> How is a cuboid net different from a cube net?</p>
            <p><strong>The Difference:</strong></p>
            <ul>
                <li><strong>Cube:</strong> All 6 faces are squares (all sides equal)</li>
                <li><strong>Cuboid:</strong> Faces are rectangles; opposite faces are the same size</li>
            </ul>
            <p><strong>The "Partner" Rule:</strong></p>
            <p>For the box to close properly, opposite sides must be the same size. This means you need <strong>3 pairs</strong> of matching rectangles.</p>
            <p><strong>Parts of a Cuboid:</strong></p>
            <ul>
                <li><strong>Front and Back:</strong> Same size rectangles</li>
                <li><strong>Top and Bottom:</strong> Same size rectangles</li>
                <li><strong>Left and Right Ends:</strong> Same size rectangles</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> The Partner Rule</div>
                <p>If the front of your box is 10cm × 5cm, the back MUST also be 10cm × 5cm. They are partners!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> The Measurement Challenge</div>
                <p>Measure a cereal box. You'll find 3 different rectangle sizes - each size appears twice (as partners).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gift"></i> Gift Box Design</div>
                <p>When designing a cuboid gift box, remember: opposite sides must match. A tall box needs tall front and back with smaller ends!</p>
            </div>
        `,
        taskInstructions: "Draw and construct a cuboid net with three pairs of matching rectangular faces.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding the Partner Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> A cuboid has 6 faces. How many pairs of matching faces does it have?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> If the front face is 8cm × 6cm, what size must the back face be?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing a Cuboid Net</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a net for a cuboid with these measurements:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>• Front: 8cm × 5cm</div>
                        <div>• Side (end): 5cm × 3cm</div>
                        <div>• Top: 8cm × 3cm</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Checking Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> List the 3 pairs of matching faces in your net:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Cut out your net and fold it. Does it form a closed box?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a cuboid net using measurements from a real box at home (like a tissue box or shoe box). Label each face with its measurements.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Maker Project: Treasure Box",
        lessonContent: `
            <p>Today you'll become a designer and builder! Your mission: create a beautiful 3D gift box using your knowledge of nets.</p>
            <p><strong>Key Question:</strong> Can you design, decorate, and assemble a functional 3D box?</p>
            <p><strong>The Project: "The Treasure Box"</strong></p>
            <p>You will create a box strong enough to hold a paperclip "treasure" and beautiful enough to give as a gift!</p>
            <p><strong>Steps to Success:</strong></p>
            <ol>
                <li><strong>Choose:</strong> Will you make a Cube net or a Cuboid net?</li>
                <li><strong>Add Flaps:</strong> Draw small trapezoid shapes on the edges - these are the "glue zones"</li>
                <li><strong>Decorate First:</strong> Draw designs on the faces BEFORE cutting and folding</li>
                <li><strong>Cut Carefully:</strong> Cut out the net including all flaps</li>
                <li><strong>Fold Sharply:</strong> Fold along every line using a ruler for straight edges</li>
                <li><strong>Assemble:</strong> Apply glue to flaps and tuck them inside to secure</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> Flaps are Important!</div>
                <p>Flaps are like the glue tabs on a cereal box. They need to be tucked INSIDE the box so they don't show on the outside.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paintbrush"></i> Decorate While Flat</div>
                <p>It's much easier to draw and color on flat paper than on a 3D box! Do your decorating before you cut and fold.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> The Strength Test</div>
                <p>Does your box stand up on its own? Is it sturdy enough to hold a paperclip? If not, check your folds and glue!</p>
            </div>
        `,
        taskInstructions: "Design, decorate, and construct a functional 3D treasure box using a cube or cuboid net.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Design Your Net</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle which type of box you will make:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <label><input type="checkbox"> Cube (all squares the same size)</label><br>
                        <label><input type="checkbox"> Cuboid (rectangles with partner pairs)</label>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw your net with flaps on a piece of cardboard or thick paper:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Decorate Your Box</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Before cutting, decorate each face of your net:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What theme or design did you choose for your treasure box?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Assembly</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Cut out your net, fold along all lines, and glue the flaps to assemble your box:
                    <div class="observation-area" style="height: 60px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Did your box close properly? ________</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Final Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Does your 3D shape stand up on its own?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Is it sturdy enough to hold a paperclip "treasure"? Why or why not?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> What was the most challenging part of making your treasure box?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Take your treasure box home. Find a small treasure (a coin, a marble, or a note) to put inside. Show your family how a flat net becomes a 3D box!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathematicsWeek3);
    console.log("grade4-mathematics-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathematicsWeek3);
    console.log("grade4-mathematics-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathematicsWeek3',
        metadata: grade4MathematicsWeek3.metadata,
        days: grade4MathematicsWeek3
    });
    console.log("grade4-mathematics-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathematicsWeek3 = grade4MathematicsWeek3;
console.log("grade4-mathematics-week3.js loaded and registered successfully");